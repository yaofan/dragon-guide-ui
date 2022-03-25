import { UserData } from "@decentraland/Identity";
import { PlayFab, PlayFabClientSDK } from '../lib/PlayFabSdk/PlayFab/PlayFabClientApi';
import { PlayFab as AdminPlayFab, PlayFabAdminSDK } from '../lib/PlayFabSdk/PlayFab/PlayFabAdminApi';
import { sceneMapData, sceneMapItemType } from './const';

PlayFab.settings.titleId = "5A73B";

AdminPlayFab.settings.titleId = "5A73B";
AdminPlayFab.settings.developerSecretKey= "EZFHFIHKXSAG4K9KFZIAF1B337FUE1QC3S44JKBBD8ISCYHNT4";

export const loginToPlayFab = (playerIfo: UserData | null, sceneData: any, scenePlayersNum: number, callback: Function) => {
    if(playerIfo === null) return;
    
    const loginRequest = {
        DisplayName: playerIfo.displayName,
        Title: PlayFab.settings.titleId,
        CustomId: playerIfo.userId,
        CustomTags: {
            publicKey: playerIfo.publicKey,
        },
        CreateAccount: true
    };   
    PlayFabClientSDK.LoginWithCustomID(loginRequest, (result: any, error: any)=> { LoginCallback(result, error, sceneData, scenePlayersNum, callback) });
}

const LoginCallback = async (result: any, error: any, sceneData : any, scenePlayersNum: number, callback: Function) => {
    if(result !== null) {
        log("login to playfab success111");
        // get unique title from current scene json
        const sceneTitle = sceneData.land.sceneJsonData.display.title;
        PlayFabAdminSDK.SetTitleData({
            "Key": `${sceneTitle}_players_num`,
            "Value": scenePlayersNum.toString()
          }, async (result: any, error: any) =>{
            if(callback) {
                const allSceneData = await getAllScenePlayerStatistics();
                callback(allSceneData);
            }
        });
    }
}

const getAllScenePlayerStatistics = async () => {
    const allScene = sceneMapData.map((item)=> `${item.sceneTitle}_players_num`);
    let result = [];
    const resp = await PlayFabAdminSDK.GetTitleData({
        "Keys": allScene
      });
    if(resp && resp.code === 200 && resp?.data?.Data) {
        result = resp.data.Data
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