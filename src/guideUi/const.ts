import * as utils from "@dcl/ecs-scene-utils";

export const sceneMapData: sceneMapItemType[] = [
    {
        name: "dragonLive",
        sceneTitle: "dragonLiveA",
        fn: "",
        iconPosX: 45,
        iconPosY: -138,
        des: "",
        bgPosX: 0,
        bgPosY: 0
        
    },
    {
        name: "Fashion Week",
        sceneTitle: "fashionWeek",
        fn: "",
        iconPosX: 124,
        iconPosY: -210,
        des: "",
        bgPosX: 624,
        bgPosY: 0
    },
    {
        name: "Dark City",
        sceneTitle: "darkCity",
        fn: "",
        iconPosX: 202,
        iconPosY: -138,
        des: "",
        bgPosX: 0,
        bgPosY: 365
    },
    {
        name: "Fantastic Land",
        sceneTitle: "fantasticLand",
        fn: "",
        iconPosX: 266,
        iconPosY: -138,
        des: "",
        bgPosX: 312,
        bgPosY: 0
    },
    {
        name: "BeiBei",
        sceneTitle: "beiBei",
        fn: "",
        iconPosX: 196,
        iconPosY: -40,
        des: "",
        bgPosX: 312,
        bgPosY: 365
    }
];

export interface sceneMapItemType {
    sceneTitle: string;
    name: string;
    fn: string;
    des: string;
    bgPosX: number;
    bgPosY: number;
    iconPosX: number;
    iconPosY: number;
}


export const webLinks: webLinkType[] = [
    {
        url: "https://dsc.gg/dragoncity",
        iconPosX: 10,
        iconPosY: -10,
        sourceLeft: 48,
        sourceTop: 52,
        sourceWidth: 49,
        sourceHeight: 48
    },
    {
        url: "https://twitter.com/DragonCityIO",
        iconPosX: 11,
        iconPosY: -38,
        sourceLeft: 93,
        sourceTop: 0,
        sourceWidth: 50,
        sourceHeight: 49
    },
    {
        url: "https://medium.com/@DragonCityIO",
        iconPosX: 10,
        iconPosY: -66,
        sourceLeft: 0,
        sourceTop: 52,
        sourceWidth: 48,
        sourceHeight: 48
    },
    {
        url: "https://metaverselabs.com/",
        iconPosX: 10,
        iconPosY: -92,
        sourceLeft: 0,
        sourceTop: 0,
        sourceWidth: 43,
        sourceHeight: 52
    },
    {
        url: "https://www.dragon.xyz",
        iconPosX: 10,
        iconPosY: -120,
        sourceLeft: 43,
        sourceTop: 0,
        sourceWidth: 50,
        sourceHeight: 49
    }
]

export interface webLinkType {
    url: string;
    iconPosX: number;
    iconPosY: number;
    sourceLeft: number;
    sourceTop: number;
    sourceWidth: number;
    sourceHeight: number;
}

export function countdown(go_time: any, callback: Function){
    var now_time= getNowDate(8);
    var alltime: number  = go_time.getTime() - now_time;
    var minute = ((alltime/1000/60)%60).toFixed() ;  //  分钟
    var hour =((alltime/1000/60/60)%24).toFixed() ;   //小时
    var day= ((alltime/1000/60/60/24)%30).toFixed();   //天数
    var deadTimeText =day+"d "+ hour+ "h "+ minute +"m" ;

    utils.setTimeout(3000, () => {
        countdown(go_time, callback)
    });
    callback(deadTimeText);
}

function getNowDate(timeZone: number) {
    var timezone = timeZone || 8; //目标时区时间，东八区
    // 本地时间和格林威治的时间差，单位为分钟
    var offset_GMT = new Date().getTimezoneOffset(); 
    // 本地时间距 1970 年 1 月 1 日午夜（GMT 时间）之间的毫秒数
    var nowDate = new Date().getTime(); 
    var targetDate = nowDate + offset_GMT * 60 * 1000 + timezone * 60 * 60 * 1000;
    return targetDate;
}

