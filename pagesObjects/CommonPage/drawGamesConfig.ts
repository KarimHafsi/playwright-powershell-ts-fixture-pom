export enum DrawGames {
    ARGENT_WEB,
    ASTRO,
    BANCO,
    BANCO_SPECIAL,
    DJ49,
    DJMAX,
    FORFAIT_LOTTOS,
    FORFAIT_QUOTIDIEN,
    GRANDE_VIE,
    LA_MINI,
    LOTTO_649,
    LOTTO_D,
    LOTTO_MAX,
    LOTTO_POKER,
    MISE_O_JEU,
    PREDICTIONS,
    QUEBEC_49,
    QUEBEC_MAX,
    QUOTIDIENNE_2,
    QUOTIDIENNE_3,
    QUOTIDIENNE_4,
    ROUE_DE_FORTUNE,
    SPRINTO,
    SUPER_FORFAIT,
    TOUT_OU_RIEN,
    TRIPLEX,
}

export interface GameInfo {
    endpoint: string;
    id: number;
    productName: string;
    selectionLength: number;
}

export const drawGameInfoMap: { [key in DrawGames]: GameInfo } = {

    // productName et price à compléter

    [DrawGames.ARGENT_WEB]: {
        endpoint: "/argent-web",
        id: 0,
        productName: "",
        selectionLength: 0,
    },

    [DrawGames.ASTRO]: {
        endpoint: "/astro",
        id: 218,        
        productName: "astro",
        selectionLength: 8,
    },

    [DrawGames.BANCO]: {
        endpoint: "/banco",
        id: 208,        
        productName: "banco",
        selectionLength: 8,
    },

    [DrawGames.BANCO_SPECIAL]: {
        endpoint: "/banco_special",
        id: 204,        
        productName: "bancoSpecial",
        selectionLength: 40,
    },

    [DrawGames.DJ49]: {
        endpoint: "/quebec_49",
        id: 216,        
        productName: "produit49",
        selectionLength: 12,
    },

    [DrawGames.DJMAX]: {
        endpoint: "/quebec_max",
        id: 229,        
        productName: "produitMax",
        selectionLength: 42,
    },

    [DrawGames.FORFAIT_LOTTOS]: {
        endpoint: "/forfait_lottos",
        id: 209,        
        productName: "",
        selectionLength: 0,
    },

    [DrawGames.FORFAIT_QUOTIDIEN]: {
        endpoint: "/forfait_quotidien",
        id: 209,        
        productName: "",
        selectionLength: 0,
    },

    [DrawGames.GRANDE_VIE]: {
        endpoint: "/grande_vie",
        id: 239,
        productName: "grandeVie",
        selectionLength: 12,
    },

    [DrawGames.LA_MINI]: {
        endpoint: "/la_mini",
        id: 225,
        productName: "",
        selectionLength: 0,
    },

    [DrawGames.LOTTO_649]: {
        endpoint: "/lotto_649",
        id: 212,
        productName: "produit49",
        selectionLength: 12,
    },

    [DrawGames.LOTTO_D]: {
        endpoint: "/lotto_d",
        id: 231,
        productName: "",
        selectionLength: 0,
    },

    [DrawGames.LOTTO_MAX]: {
        endpoint: "/lotto_max",
        id: 223,
        productName: "produitMax",
        selectionLength: 42,
    },

    [DrawGames.LOTTO_POKER]: {
        endpoint: "/lotto_poker",
        id: 226,
        productName: "",
        selectionLength: 0,
    },

    [DrawGames.MISE_O_JEU]: {
        endpoint: "/Mise_o_jeu",
        id: 202,
        productName: "",
        selectionLength: 0,
    },

    [DrawGames.PREDICTIONS]: {
        endpoint: "/predictions",
        id: 202,  
        productName: "",
        selectionLength: 0,
    },

    [DrawGames.QUEBEC_49]: {
        endpoint: "/quebec_49",
        id: 214,
        productName: "produit49",
        selectionLength: 12,
    },

    [DrawGames.QUEBEC_MAX]: {
        endpoint: "/quebec_max",
        id: 228,
        productName: "produitMax",
        selectionLength: 42,
    },

    [DrawGames.QUOTIDIENNE_2]: {
        endpoint: "/quotidienne",
        id: 238,
        productName: "quot",
        selectionLength: 2,
    },

    [DrawGames.QUOTIDIENNE_3]: {
        endpoint: "/quotidienne",
        id: 206,
        productName: "quot",
        selectionLength: 3,
    },

    [DrawGames.QUOTIDIENNE_4]: {
        endpoint: "/quotidienne",
        id: 207,
        productName: "quot",
        selectionLength: 4,
    },

    [DrawGames.ROUE_DE_FORTUNE]: {
        endpoint: "/roue_de_fortune",
        id: 233,   
        productName: "",
        selectionLength: 0,
    },

    [DrawGames.SPRINTO]: {
        endpoint: "/sprinto",
        id: 227,
        productName: "",
        selectionLength: 0,
    },

    [DrawGames.SUPER_FORFAIT]: {
        endpoint: "/super_forfait",
        id: 242, 
        productName: "",
        selectionLength: 0,
    },

    [DrawGames.TOUT_OU_RIEN]: {
        endpoint: "/tout_ou_rien",
        id: 234,
        productName: "toutOuRien",
        selectionLength: 24,
    },

    [DrawGames.TRIPLEX]: {
        endpoint: "/triplex",
        id: 221,
        productName: "",
        selectionLength: 0,
    },
};

export const participationGames = [
    DrawGames.GRANDE_VIE,
    DrawGames.LOTTO_649,
    DrawGames.LOTTO_MAX,
    DrawGames.QUEBEC_MAX,
    DrawGames.TRIPLEX
];

export const selectionGames = [
    DrawGames.ASTRO,
    DrawGames.BANCO_SPECIAL,
    DrawGames.LA_MINI,
    DrawGames.QUEBEC_49,
    DrawGames.QUOTIDIENNE_2,
    DrawGames.QUOTIDIENNE_3,
    DrawGames.QUOTIDIENNE_4,
    DrawGames.TOUT_OU_RIEN
];

export const singleChoixDrawGames = [
    DrawGames.ASTRO,
    DrawGames.BANCO,
    DrawGames.BANCO_SPECIAL,
    DrawGames.DJ49,
    DrawGames.GRANDE_VIE,
    DrawGames.LOTTO_649,
    DrawGames.QUEBEC_49,
    DrawGames.QUOTIDIENNE_2,
    DrawGames.QUOTIDIENNE_3,
    DrawGames.QUOTIDIENNE_4,
    DrawGames.TOUT_OU_RIEN
];

export const multipleChoixDrawGames = [
    DrawGames.DJMAX,
    DrawGames.LOTTO_MAX,
    DrawGames.QUEBEC_MAX
];

export const doubleGameDrawGames = [
    DrawGames.DJ49,
    DrawGames.DJMAX,
];