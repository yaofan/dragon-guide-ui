import { UserData } from "@decentraland/Identity";
import { PlayFab, PlayFabClientSDK } from '../lib/PlayFabSdk/PlayFab/PlayFabClientApi';
import { sceneMapData, sceneMapItemType } from './const';

export const loginToPlayFab = (playerIfo: UserData | null, sceneData: any, callback: Function) => {
    if(playerIfo === null) return;
    PlayFab.settings.titleId = "5A73B";
    const loginRequest = {
        DisplayName: playerIfo.displayName,
        Title: PlayFab.settings.titleId,
        CustomId: playerIfo.userId,
        CustomTags: {
            publicKey: playerIfo.publicKey,
        },
        CreateAccount: true
    };   
    PlayFabClientSDK.LoginWithCustomID(loginRequest, (result: any, error: any)=> { LoginCallback(result, error, sceneData, callback) });
}

const LoginCallback = async (result: any, error: any, sceneData : any, callback: Function) => {
    if(result !== null) {
        log("login to playfab success");
        const allSceneData = await getAllScenePlayerStatistics();
        // get unique title from current scene json
        const sceneTitle = sceneData.land.sceneJsonData.display.title;
        const currentSceneNum = allSceneData.find((item: any) => item["StatisticName"] === sceneTitle)?.["Value"] || 0;
        PlayFabClientSDK.UpdatePlayerStatistics({
            "Statistics": [
                {
                "StatisticName": sceneTitle,
                "Value": currentSceneNum + 1
                }
            ]
        }, async (result: any, error: any) =>{
            if(result !== null && callback) {
                // const newAllSceneData = allSceneData.map((item: any) => {
                //     if(item["StatisticName"] === sceneTitle){
                //         item["Value"] = item["Value"] + 1;
                //     }
                //     return item;
                // })
                const newAllSceneData = await getAllScenePlayerStatistics();
                callback(newAllSceneData);
            }
        });
    }
}

const getAllScenePlayerStatistics = async () => {
    const allScene = sceneMapData.map((item)=> item.sceneId);
    let result = [];
    const resp = await PlayFabClientSDK.GetPlayerStatistics({
        "StatisticName": allScene
    });
    if(resp && resp.code === 200 && resp.data && resp.data.Statistics) {
        result = resp.data.Statistics
    }
    return result;
}

export const leavePlayFab = (sceneData : any, allSceneCurrentPlayersArray: any) => {
    // get unique title from current scene json
    const sceneTitle = sceneData.land.sceneJsonData.display.title;
    const currentSceneNum = allSceneCurrentPlayersArray.find((item: any) => item["StatisticName"] === sceneTitle)?.["Value"] || 1;
    PlayFabClientSDK.UpdatePlayerStatistics({
        "Statistics": [
            {
            "StatisticName": sceneTitle,
            "Value": currentSceneNum - 1
            }
        ]
    });
}