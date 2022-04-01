import { UserData } from "@decentraland/Identity";
import { PlayFab, PlayFabClientSDK } from '../lib/PlayFabSdk/PlayFab/PlayFabClientApi';
import { PlayFab as AdminPlayFab, PlayFabAdminSDK } from '../lib/PlayFabSdk/PlayFab/PlayFabAdminApi';
import { sceneMapData } from './const';

const settings = {
    titleId: "5A73B",
    developerSecretKey: "EZFHFIHKXSAG4K9KFZIAF1B337FUE1QC3S44JKBBD8ISCYHNT4"
};

PlayFab.settings.titleId = settings.titleId;
AdminPlayFab.settings.titleId = settings.titleId;
AdminPlayFab.settings.developerSecretKey= settings.developerSecretKey;

export const loginToPlayFab = (playerIfo: UserData | null, sceneData: any, scenePlayersNum: number, callback: Function) => {
    if(playerIfo === null) return;
    const loginRequest = {
        CustomId: playerIfo.userId,
        CustomTags: {
            hasConnectedWeb3: playerIfo.hasConnectedWeb3,
            publicKey: playerIfo.publicKey,
            displayName: playerIfo.displayName,
        },
        CreateAccount: true
    };   
    PlayFabClientSDK.LoginWithCustomID(loginRequest, (result: any, error: any)=> { LoginCallback(result, error, sceneData, scenePlayersNum, callback) });
}

const LoginCallback = async (result: any, error: any, sceneData : any, scenePlayersNum: number, callback: Function) => {
    if(result !== null) {
        log("login to playfab success");
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

export const getPlayFabBizText = async () => {
    let result = [];
    const resp = await PlayFabAdminSDK.GetTitleData({
        "Keys": [
            "safairText",
            "safairScenes",
            "deadTime"
        ]
    })
    if(resp && resp.code === 200 && resp?.data?.Data) {
        result = resp.data.Data
    }
    return result;
}
