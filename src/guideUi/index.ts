import * as ui from '@dcl/ui-scene-utils';
import './operator';
import { safariMap } from './sceneMap';
import { webLinks } from './const';

// left plane for guide
const guidePrompt = new ui.CustomPrompt(ui.PromptStyles.DARK, 200, 280);
guidePrompt.closeIcon.visible = false;
guidePrompt.background.vAlign = "top";
guidePrompt.background.hAlign = "left";
guidePrompt.background.positionX = 12;
guidePrompt.background.positionY = -136;
guidePrompt.background.opacity = 0.88;

const leftTextPlane = new UIContainerStack(guidePrompt.background);
leftTextPlane.vAlign = "top";
leftTextPlane.hAlign = "center"
leftTextPlane.width = 180;
leftTextPlane.height = 140;
leftTextPlane.positionY = -25;
leftTextPlane.color = new Color4(0, 0, 0, 1);


const textArea = new UIScrollRect(leftTextPlane);
textArea.width = 160;
textArea.height = 140;
textArea.vAlign = "top";
textArea.hAlign = "left";
textArea.positionY = 20;
textArea.paddingBottom = 20;
textArea.paddingLeft = 20;
textArea.paddingRight = 20;
textArea.paddingTop = 20;


export const guideText = new UIText(textArea);
guideText.value = ""
guideText.vAlign = "top";
guideText.hAlign = "left";
guideText.vTextAlign = "top";
guideText.textWrapping = true;
guideText.width = 140;
guideText.height = 140;
guideText.paddingTop = 10;

const safairBtn = guidePrompt.addButton("Dragon Safari", 0, -48, () => {
    safariMap.show();
}, ui.ButtonStyles.DARK);
safairBtn.image.height = 30;
safairBtn.label.fontSize = 14;

const learnBtn = guidePrompt.addButton("Learn More", 0, -86, () => {
    openExternalURL("https://dragon.xyz")
}, ui.ButtonStyles.DARK);
learnBtn.image.height = 30;
learnBtn.label.fontSize = 14;

export const deadTimeBtn = guidePrompt.addButton('', 0, -120, () => {}, ui.ButtonStyles.DARK);
deadTimeBtn.image.height = 20;
deadTimeBtn.label.fontSize = 10;
deadTimeBtn.hide();

const openIcon = guidePrompt.addIcon("images/guideSprite.png", 0, -6, 14, 14, { sourceLeft: 623, sourceTop: 476, sourceWidth: 38, sourceHeight: 38 });
openIcon.image.hAlign = "center";
openIcon.image.vAlign = "top";
openIcon.image.isPointerBlocker = true;
let openState = true;
openIcon.image.onClick = new OnPointerDown((e) => {
    if(openState) {
        guidePrompt.background.height = 34;
        leftTextPlane.visible = false;
        safairBtn.hide();
        learnBtn.hide();
        deadTimeBtn.hide();
        openIcon.image.sourceTop = 514;
    } else {
        guidePrompt.background.height = 280;
        leftTextPlane.visible = true;
        safairBtn.show();
        learnBtn.show();
        deadTimeBtn.show();
        openIcon.image.sourceTop = 476;
    }
    openState = !openState;
});


// direct link icon
const directLinkPrompt = new ui.CustomPrompt('images/guideSprite.png', 37, 173);
directLinkPrompt.closeIcon.visible = false;
directLinkPrompt.background.vAlign = "top";
directLinkPrompt.background.hAlign = "left";
directLinkPrompt.background.positionX = 172;
directLinkPrompt.background.positionY = 60;
directLinkPrompt.background.sourceLeft = 623;
directLinkPrompt.background.sourceTop = 0;
directLinkPrompt.background.sourceWidth = 74;
directLinkPrompt.background.sourceHeight = 346;

webLinks.map((item) => {
    const icon = directLinkPrompt.addIcon("images/linkIcon.png", item.iconPosX, item.iconPosY, 16, 16, { sourceLeft: item.sourceLeft, sourceTop: item.sourceTop, sourceWidth: item.sourceWidth, sourceHeight: item.sourceHeight });
    icon.image.hAlign = "left";
    icon.image.vAlign = "top";
    icon.image.isPointerBlocker = true;
    icon.image.onClick = new OnPointerDown((e) => {
        openExternalURL(item.url);
    });
})
