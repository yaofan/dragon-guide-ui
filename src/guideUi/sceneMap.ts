
import * as ui from '@dcl/ui-scene-utils';
import { getParcel } from '@decentraland/ParcelIdentity';
import { getPlayersInScene } from "@decentraland/Players";
import { getUserData } from "@decentraland/Identity"
import { sceneMapData, sceneMapItemType, countdown } from './const';
import { loginToPlayFab, getPlayFabBizText } from './operator';
import { guideText, deadTimeBtn } from './index';

// dragon safari map 
export const safariMap = new ui.CustomPrompt('images/guideSprite.png', 320, 334);
safariMap.hide();
const safariMapBgImg = safariMap.background;
safariMapBgImg.hAlign = 'center';
safariMapBgImg.vAlign = 'center';
safariMapBgImg.sourceLeft = 0;
safariMapBgImg.sourceTop = 0;
safariMapBgImg.sourceWidth = 623;
safariMapBgImg.sourceHeight = 650;

// close btn
const safariMapCloseIcon = safariMap.addIcon("images/guideSprite.png", -12, -12, 32, 32, { sourceLeft: 623, sourceTop: 411, sourceWidth: 65, sourceHeight: 65 });
safariMapCloseIcon.image.hAlign = "right";
safariMapCloseIcon.image.vAlign = "top";
safariMapCloseIcon.image.isPointerBlocker = true;
safariMapCloseIcon.image.onClick = new OnPointerDown((e) => {
    safariMap.hide();
});

sceneMapData.map((item) => {
    const icon = safariMap.addIcon("images/guideSprite.png", item.iconPosX, item.iconPosY, 27, 35, { sourceLeft: 662, sourceTop: 476, sourceWidth: 27, sourceHeight: 35 });
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
    if(item.sceneTitle === 'darkCity') {
        name.text.positionY = item.iconPosY + 18
    }
    else if(item.sceneTitle === 'fantasticLand') {
        name.text.positionX = item.iconPosX - 40;
    }
})

let safairScenes : any;
executeTask(async () => {
    const playfabBiz = await getPlayFabBizText();
    if(playfabBiz?.safairText) {
        guideText.value = playfabBiz?.safairText;
    }
    if(playfabBiz?.safairScenes) {
        safairScenes = JSON.parse(playfabBiz?.safairScenes);
    }
    if(playfabBiz?.deadTime) {
        const newDeadTime = new Date(playfabBiz?.deadTime);
        deadTimeBtn.show();
        countdown(newDeadTime, (text: string) => {
            deadTimeBtn.label.value = text + " remaining";
        })
    }
})


onEnterSceneObservable.add(async (player) => {
    let playerData = await getUserData();
    if (player.userId !== playerData?.userId)return;
    let allPlayers = await getPlayersInScene();
    const scenePlayersNum = allPlayers.length;
    let sceneData = await getParcel();
    loginToPlayFab(playerData, sceneData, scenePlayersNum, (allSceneData: any) => {
        //location icon
        sceneMapData.map((item) => {
            let num = allSceneData[`${item.sceneTitle}_players_num`];
            if(num === undefined)return;
            const numText = safariMap.addText(`(${num})`, item.iconPosX, item.iconPosY - 50, new Color4(1,1,1,1), 12);
            numText.text.hAlign = "left";
            numText.text.vAlign = "top";
            numText.text.width = 80;
            numText.text.height = 14;
            numText.text.hTextAlign = "center";
            numText.text.vTextAlign = "top";
            numText.text.positionX = item.iconPosX - 25;
            if(item.sceneTitle === 'darkCity') {
                numText.text.positionY = item.iconPosY + 18;
                numText.text.positionX = item.iconPosX + 14;
            }
            else if(item.sceneTitle === 'fantasticLand') {
                numText.text.positionX = item.iconPosX - 40;
            }
        })
    })
})

// scene map
const scenePrompt = new ui.CustomPrompt("images/sceneDesBg.png", 312, 364);
scenePrompt.hide();
const scenePromptTitle = scenePrompt.addText("", 0, 0, new Color4(1,1,1,1), 18);
scenePromptTitle.text.hTextAlign = "left";
scenePromptTitle.text.vAlign = "top";
scenePromptTitle.text.hAlign = "left";
scenePromptTitle.text.positionX = 20;

const scenePromptFn = scenePrompt.addText("", 0, 0, new Color4(1,1,1,1), 16);
scenePromptFn.text.hTextAlign = "left";
scenePromptFn.text.vAlign = "top";
scenePromptFn.text.hAlign = "left";
scenePromptFn.text.positionX = 20;
scenePromptFn.text.positionY = -30;

const scenePromptDes = scenePrompt.addText("", 0, 0, new Color4(1,1,1,1), 12);
scenePromptDes.text.hTextAlign = "left";
scenePromptDes.text.vTextAlign = "top";
scenePromptDes.text.vAlign = "top";
scenePromptDes.text.hAlign = "left";
scenePromptDes.text.positionY = -80;
scenePromptDes.text.width = 220;
scenePromptDes.text.height = 180;
scenePromptDes.text.textWrapping = true;
scenePromptDes.text.positionX = 20;

const sceneDesBgImg = scenePrompt.background;
sceneDesBgImg.hAlign = 'center';
sceneDesBgImg.vAlign = 'center';

// close btn
const scenePromptBackIcon = scenePrompt.addIcon("images/guideSprite.png", -12, -12, 32, 32, { sourceLeft: 623, sourceTop: 346, sourceWidth: 65, sourceHeight: 65 });
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
    if(safairScenes && safairScenes.length) {
        const newItem = safairScenes.find( (s: any) => s.sceneTitle === item.sceneTitle);
        if(newItem) {
            item.name = newItem.name;
            item.fn = newItem.fn;
            item.des = newItem.des;
        }
    }
    scenePromptTitle.text.value = item.name;
    scenePromptFn.text.value = item.fn;
    scenePromptDes.text.value = item.des;
    sceneDesBgImg.sourceLeft = item.bgPosX;
    sceneDesBgImg.sourceTop = item.bgPosY;
    sceneDesBgImg.sourceWidth = 312;
    sceneDesBgImg.sourceHeight = 364;
    scenePrompt.show();
}

