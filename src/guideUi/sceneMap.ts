
import * as ui from '@dcl/ui-scene-utils';
import { getParcel } from '@decentraland/ParcelIdentity';
import { getPlayerData } from "@decentraland/Players"
import { sceneMapData, sceneMapItemType } from './const';
import { loginToPlayFab, leavePlayFab } from './operator';

// dragon safari map 
export const safariMap = new ui.CustomPrompt('images/guideSprite.png', 320, 334);
safariMap.hide();
const safariMapBgImg = safariMap.background;
safariMapBgImg.hAlign = 'center';
safariMapBgImg.vAlign = 'center';
safariMapBgImg.sourceLeft = 624;
safariMapBgImg.sourceTop = 0;
safariMapBgImg.sourceWidth = 624;
safariMapBgImg.sourceHeight = 650;

// close btn
const safariMapCloseIcon = safariMap.addIcon("images/guideSprite.png", -12, -12, 32, 32, { sourceLeft: 689, sourceTop: 650, sourceWidth: 65, sourceHeight: 65 });
safariMapCloseIcon.image.hAlign = "right";
safariMapCloseIcon.image.vAlign = "top";
safariMapCloseIcon.image.isPointerBlocker = true;
safariMapCloseIcon.image.onClick = new OnPointerDown((e) => {
    safariMap.hide();
});

let playerData : any;
let sceneData : any;
let allSceneCurrentPlayersArray: any;

onEnterSceneObservable.add(async (player) => {
    const userId = player.userId;
    playerData = await getPlayerData({userId})
    sceneData = await getParcel();
    loginToPlayFab(playerData, sceneData, (allSceneData: any) => {
        //location icon
        log(allSceneData, 7777);
        allSceneCurrentPlayersArray = allSceneData;
        sceneMapData.map((item) => {
            const icon = safariMap.addIcon("images/guideSprite.png", item.iconPosX, item.iconPosY, 27, 35, { sourceLeft: 833, sourceTop: 650, sourceWidth: 27, sourceHeight: 35 });
            icon.image.hAlign = "left";
            icon.image.vAlign = "top";
            icon.image.isPointerBlocker = true;
            icon.image.onClick = new OnPointerDown((e) => {
                safariMap.hide();
                showScenePrompt(item);
            });
        
            const name = safariMap.addText(item.name, item.iconPosX, item.iconPosY - 38, new Color4(1,1,1,1), 12);
            name.text.hAlign = "left";
            name.text.vAlign = "top";
            name.text.width = 80;
            name.text.height = 14;
            name.text.hTextAlign = "center";
            name.text.vTextAlign = "top";
            name.text.positionX = item.iconPosX - 25;
            if(item.sceneId === 'darkCity') {
                name.text.positionY = item.iconPosY + 18
            }
            else if(item.sceneId === 'fantasticLand') {
                name.text.positionX = item.iconPosX - 40;
            }
        })
    })
})

onLeaveSceneObservable.add((player) => {
   leavePlayFab(sceneData, allSceneCurrentPlayersArray);
})

// scene map
const scenePrompt = new ui.CustomPrompt("images/sceneDesBg.png", 312, 364);
scenePrompt.hide();
const scenePromptTitle = scenePrompt.addText("", 0, 0, new Color4(1,1,1,1), 18);
scenePromptTitle.text.hTextAlign = "left";
scenePromptTitle.text.vAlign = "top";
scenePromptTitle.text.hAlign = "left";
scenePromptTitle.text.positionX = 20;
const scenePromptDes = scenePrompt.addText("", 0, 0, new Color4(1,1,1,1), 14);
scenePromptDes.text.hTextAlign = "left";
scenePromptDes.text.vTextAlign = "top";
scenePromptDes.text.vAlign = "top";
scenePromptDes.text.hAlign = "left";
scenePromptDes.text.positionY = -60;
scenePromptDes.text.width = 220;
scenePromptDes.text.height = 180;
scenePromptDes.text.textWrapping = true;
scenePromptDes.text.positionX = 20;

const sceneDesBgImg = scenePrompt.background;
sceneDesBgImg.hAlign = 'center';
sceneDesBgImg.vAlign = 'center';

// close btn
const scenePromptBackIcon = scenePrompt.addIcon("images/guideSprite.png", -12, -12, 32, 32, { sourceLeft: 624, sourceTop: 650, sourceWidth: 65, sourceHeight: 65 });
scenePromptBackIcon.image.hAlign = "right";
scenePromptBackIcon.image.vAlign = "top";
scenePromptBackIcon.image.isPointerBlocker = true;
scenePromptBackIcon.image.onClick = new OnPointerDown((e) => {
    scenePrompt.hide();
    scenePromptTitle.text.value = "";
    scenePromptDes.text.value = "";
    safariMap.show();
});

// safari scene
function showScenePrompt(item : sceneMapItemType) {
    scenePromptTitle.text.value = item.name;
    scenePromptDes.text.value = item.des;
    sceneDesBgImg.sourceLeft = item.bgPosX;
    sceneDesBgImg.sourceTop = item.bgPosY;
    sceneDesBgImg.sourceWidth = 312;
    sceneDesBgImg.sourceHeight = 364;
    scenePrompt.show();
}

