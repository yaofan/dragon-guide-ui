import * as ui from '@dcl/ui-scene-utils';

// welcome text
let welcomPrompt = new ui.CustomPrompt('images/guideSprite.png', 512, 334);
welcomPrompt.hide();
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
guidePrompt.background.vAlign = "center";
guidePrompt.background.hAlign = "left";
guidePrompt.background.positionX = 12;
guidePrompt.background.positionY = 2;


// const uiCanvas = new UICanvas();

// const leftPlane = new UIContainerRect(guidePrompt.canvas);

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
    log("1");
}, ui.ButtonStyles.DARK);
safairBtn.image.height = 30;
safairBtn.label.fontSize = 16;

const learnBtn = guidePrompt.addButton("Learn More", 0, -130, () => {
    log("1");
}, ui.ButtonStyles.DARK);
learnBtn.image.height = 30;
learnBtn.label.fontSize = 16;

// dragon safari map 
const safariMap = new ui.CustomPrompt('images/guideSprite.png', 320, 334);
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


//location icon
const locationData = [
    {
        name: "Dragon Live",
        scene: "dragonLive",
        posX: 45,
        posY: -138
    },
    {
        name: "Fashion Week",
        scene: "fashionWeek",
        posX: 124,
        posY: -210
    },
    {
        name: "Dark City",
        scene: "darkCity",
        posX: 202,
        posY: -138
    },
    {
        name: "Fantastic Land",
        scene: "fantasticLand",
        posX: 266,
        posY: -138
    },
    {
        name: "BeiBei",
        scene: "beiBei",
        posX: 196,
        posY: -40
    }
];
locationData.map((item) => {
    const icon = safariMap.addIcon("images/guideSprite.png", item.posX, item.posY, 27, 35, { sourceLeft: 833, sourceTop: 650, sourceWidth: 27, sourceHeight: 35 });
    icon.image.hAlign = "left";
    icon.image.vAlign = "top";
    icon.image.isPointerBlocker = true;
    icon.image.onClick = new OnPointerDown((e) => {
        welcomPrompt.hide();
    });
    const name = safariMap.addText(item.name, item.posX, item.posY - 5, new Color4(1,1,1,1), 12);
    name.text.hAlign = "left";
    name.text.vAlign = "top";
    name.text.width = 80;
    name.text.hTextAlign = "center";
    name.text.positionX = item.posX - 25;
    if(item.scene === 'darkCity') {
        name.text.positionY = item.posY + 55
    }
    else if(item.scene === 'fantasticLand') {
        name.text.positionX = item.posX - 40;
    }
})


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

