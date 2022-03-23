export const sceneMapData: sceneMapItemType[] = [
    {
        name: "dragonLiveBBB",
        sceneId: "dragonLive",
        iconPosX: 45,
        iconPosY: -138,
        des: "Lorem ipsum dolor sit amet, viderer perfecto adipiscing eu per, inermis dissentias ut his. Ei pro legimus antiopam maluisset, at his timeam omittam. Wisi probo aliquip te vis, unum aperiri atomorum pri id, ",
        bgPosX: 0,
        bgPosY: 0
        
    },
    {
        name: "Fashion Week",
        sceneId: "fashionWeek",
        iconPosX: 124,
        iconPosY: -210,
        des: "Lorem ipsum dolor sit amet, viderer perfectotias ut his. Ei pro legimus antiopam maluisset, at his timeam omittam. Wisi probo aliquip te vis, unum aperiri atomorum pri id, et pro quando persecuti. Quo vide putent ne, brute facilisi mei id. Quo simul decore voluptua an, alia simul eripuit qui eu, sea te aliquid offendit. Eu qui lorem congue praesent, usu corpora fierent eu.",
        bgPosX: 624,
        bgPosY: 0
    },
    {
        name: "Dark City",
        sceneId: "darkCity",
        iconPosX: 202,
        iconPosY: -138,
        des: "Lorem ipsum dolor sit amet, viderer perfecto adipiscing eu per, inermis dissentias ut his. Ei pro legimus antiopam maluisset, at his timeam omittam. Wisi probo aliquip te vis, unum aperiri atomorum pri id, et pro quando persecuti. Quo vide putent ne, brute facilisi mei id. Quo simul decore voluptua an, alia simul eripuit qui eu, sea te aliquid offendit. Eu qui lorem congue praesent, usu corpora fierent eu.",
        bgPosX: 0,
        bgPosY: 365
    },
    {
        name: "Fantastic Land",
        sceneId: "fantasticLand",
        iconPosX: 266,
        iconPosY: -138,
        des: "Lorem ipsum dolor sit amet, viderer perfecto adipiscing eu per, inermis dissentias ut his. Ei pro legimus antiopam maluisset, at his timeam omittam. Wisi probo aliquip te vis, unum aperiri atomorum pri id, et pro quando persecuti. Quo vide putent ne, brute facilisi mei id. Quo simul decore voluptua an, alia simul eripuit qui eu, sea te aliquid offendit. Eu qui lorem congue praesent, usu corpora fierent eu.",
        bgPosX: 312,
        bgPosY: 0
    },
    {
        name: "BeiBei",
        sceneId: "beiBei",
        iconPosX: 196,
        iconPosY: -40,
        des: "Lorem ipsum dolor sit amet, viderer perfecto adipiscing eu per, te aliquid offendit. Eu qui lorem congue praesent, usu corpora fierent eu.",
        bgPosX: 312,
        bgPosY: 365
    }
];

export interface sceneMapItemType {
    sceneId: string;
    name: string;
    des: string;
    bgPosX: number;
    bgPosY: number;
    iconPosX: number;
    iconPosY: number;
}