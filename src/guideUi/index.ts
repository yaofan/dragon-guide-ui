import * as ui from '@dcl/ui-scene-utils';
import './operator';
import { safariMap } from './sceneMap';

// welcome text
let welcomPrompt = new ui.CustomPrompt('images/guideSprite.png', 512, 334);
let welcomeText = welcomPrompt.addText('Welcome to Dragon \nCity', -170, 100, new Color4(255,255,255,1), 32);
welcomeText.text.hTextAlign = "left";

let desText = welcomPrompt.addText('Enjoy your Metaverse jounary', -170, -30, new Color4(255,255,255,1), 18);
desText.text.hTextAlign = "left";
let learnText = welcomPrompt.addText('Learn more', -170, -80, new Color4(255,255,255,1), 18);
learnText.text.hTextAlign = "left";

const bgImg = welcomPrompt.background;
bgImg.hAlign = 'center';
bgImg.vAlign = 'center';
bgImg.sourceLeft = 0;
bgImg.sourceTop = 727;
bgImg.sourceWidth = 642;
bgImg.sourceHeight = 419;

const closeIcon = welcomPrompt.addIcon("images/guideSprite.png", -12, -12, 32, 32, { sourceLeft: 689, sourceTop: 650, sourceWidth: 65, sourceHeight: 65 });
closeIcon.image.hAlign = "right";
closeIcon.image.vAlign = "top";
closeIcon.image.isPointerBlocker = true;
closeIcon.image.onClick = new OnPointerDown((e) => {
    welcomPrompt.hide();
});

// left plane for guide
const guidePrompt = new ui.CustomPrompt(ui.PromptStyles.DARK, 200, 340);
guidePrompt.closeIcon.visible = false;
guidePrompt.background.vAlign = "top";
guidePrompt.background.hAlign = "left";
guidePrompt.background.positionX = 12;
guidePrompt.background.positionY = -136;

const leftTextPlane = new UIContainerStack(guidePrompt.background);
leftTextPlane.vAlign = "top";
leftTextPlane.hAlign = "center"
leftTextPlane.width = 180;
leftTextPlane.height = 200;
leftTextPlane.positionY = -30;
leftTextPlane.color = new Color4(0, 0, 0, 1);


const textArea = new UIScrollRect(leftTextPlane);
textArea.width = 160;
textArea.height = 180;
textArea.vAlign = "top";
textArea.hAlign = "left";
textArea.positionY = 20;
textArea.paddingBottom = 20;
textArea.paddingLeft = 20;
textArea.paddingRight = 20;
textArea.paddingTop = 20;


const guideText = new UIText(textArea);
guideText.value = "Lorem ipsum dolor sit amet, viderer perfecto adipiscing eu per, inermis dissentias ut his. Ei pro legimus antiopam maluisset, at his timeam omittam. Wisi probo aliquip te vis, unum aperiri atomorum pri id, et pro quando persecuti. Quo vide putent ne, brute facilisi mei id. Quo simul decore voluptua an, alia simul eripuit qui eu, sea te aliquid offendit. Eu qui lorem congue praesent, usu corpora fierent eu."
guideText.vAlign = "top";
guideText.hAlign = "left";
guideText.vTextAlign = "top";
guideText.textWrapping = true;
guideText.width = 140;
guideText.height = "100%";
guideText.paddingTop = 10;

const safairBtn = guidePrompt.addButton("Dragon Safari", 0, -90, () => {
    safariMap.show();
}, ui.ButtonStyles.DARK);
safairBtn.image.height = 30;
safairBtn.label.fontSize = 16;

const learnBtn = guidePrompt.addButton("Learn More", 0, -130, () => {
    log("2");
}, ui.ButtonStyles.DARK);
learnBtn.image.height = 30;
learnBtn.label.fontSize = 16;

const openIcon = guidePrompt.addIcon("images/guideSprite.png", 0, -6, 19, 19, { sourceLeft: 755, sourceTop: 650, sourceWidth: 39, sourceHeight: 38 });
openIcon.image.hAlign = "center";
openIcon.image.vAlign = "top";
openIcon.image.isPointerBlocker = true;
let openState = true;
openIcon.image.onClick = new OnPointerDown((e) => {
    if(openState) {
        guidePrompt.background.height = 32;
        leftTextPlane.visible = false;
        safairBtn.hide();
        learnBtn.hide();
        openIcon.image.sourceLeft = 794;
    } else {
        guidePrompt.background.height = 320;
        leftTextPlane.visible = true;
        safairBtn.show();
        learnBtn.show();
        openIcon.image.sourceLeft = 755;
    }
    openState = !openState;
});


// direct link icon
const directLinkPrompt = new ui.CustomPrompt('images/guideSprite.png', 37, 145);
directLinkPrompt.closeIcon.visible = false;
directLinkPrompt.background.vAlign = "top";
directLinkPrompt.background.hAlign = "left";
directLinkPrompt.background.positionX = 172;
directLinkPrompt.background.positionY = 60;
directLinkPrompt.background.sourceLeft = 642;
directLinkPrompt.background.sourceTop = 727;
directLinkPrompt.background.sourceWidth = 74;
directLinkPrompt.background.sourceHeight = 291;


// let bgImage = new ui.LargeIcon('images/welcomeBg.png', 0, 0)

// // create canvas
// const canvas = new UICanvas()
// // create container inside canvas
// const rect = new UIContainerRect(prompt.canvas)
// rect.hAlign = 'left'
// rect.vAlign = 'top'
// rect.opacity = 1






// let sunUITexture = new Texture('images/welcomeBg.png')
// const sunImgScreen = new UIImage(rect, sunUITexture)
// sunImgScreen.hAlign = 'left'
// sunImgScreen.vAlign = 'top'
// sunImgScreen.sourceLeft = 0
// sunImgScreen.sourceTop = 0
// sunImgScreen.sourceWidth = 917
// sunImgScreen.sourceHeight = 532
// sunImgScreen.width = 917
// sunImgScreen.height = 532

// prompt.background = sunImgScreen;

// let bgMaterial = new Material()
// bgMaterial.roughness = 1
// bgMaterial.specularIntensity = 0
// bgMaterial.alphaTexture = new Texture('images/welcomeBg.png')
// bgMaterial.albedoTexture = new Texture('images/welcomeBg.png')

// // const bgEntity = new Entity();
// // bgEntity.addComponent(new PlaneShape);
// // bgEntity.addComponent(bgMaterial);


// // bgEntity.setParent(prompt);

// prompt.addComponent(new PlaneShape())
// prompt.addComponent(bgMaterial);


// engine.addEntity(bgEntity);

