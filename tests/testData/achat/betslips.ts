export enum Betslips {
  ASTRO,
  BANCO_SPECIAL,
  FORFAITLOTTOS,
  GRANDEVIE,
  LOTTO649COMBINATION,
  LOTTO649COMBINATIONWITHDOUBLEGAMEOPTION,
  LOTTO649COMBINATIONWITHQUEBEC49OPTION,
  LOTTO649,
  LOTTO649WITHDOUBLEGAMEOPTION,
  LOTTO649WITHQUEBEC49OPTION,
  LOTTOMAXCOMBINATION,
  LOTTOMAXCOMBINATIONWITHDOUBLEGAMEOPTION,
  LOTTOMAXCOMBINATIONWITHQUEBECMAXOPTION,
  LOTTOMAXPERSONALSELECTION,
  LOTTOMAXPERSONALSELECTIONWITHDOUBLEGAMEOPTION,
  LOTTOMAXPERSONALSELECTIONWITHQUEBECMAXOPTION,
  LOTTOMAXREGULAR,
  LOTTOMAXREGULARWITHDOUBLEGAMEOPTION,
  LOTTOMAXREGULARWITHQUEBECMAXOPTION,
  QUOTIDIENNE2,
  QUOTIDIENNE3,
  QUOTIDIENNE4,
  SUPERFORFAIT17,
  TOUTOURIEN,
}

export interface BetslipInfos {
  json: string,
  price: number
}

export const BetslipInfoMap: { [key in Betslips]: BetslipInfos } = {

  [Betslips.ASTRO]: {
    json: `{"id":20,"business_id":0,"grids":[{"gridId":101,"checked":[16]},{"gridId":102,"checked":[6]},{"gridId":103,"checked":[92]},{"gridId":104,"checked":[3]},{"gridId":201,"checked":[2]},{"gridId":601,"checked":[3]},{"gridId":701},{"gridId":702,"checked":[0]}]}`,
    price: 16.00
  },

  [Betslips.BANCO_SPECIAL]: {
    json: `{"id":85,"business_id":0,"grids":[{"gridId":101,"checked":[1,22,49,34,24,12,32,3,9,64,39,53,57,70,69,46,44,67,41,10]},{"gridId":102},{"gridId":103,"checked":[1,22,49,34,24,12]},{"gridId":104},{"gridId":201},{"gridId":202,"checked":[0]},{"gridId":203},{"gridId":204},{"gridId":301},{"gridId":302},{"gridId":303,"checked":[0]},{"gridId":304},{"gridId":401,"checked":[0]},{"gridId":402},{"gridId":403},{"gridId":404},{"gridId":501,"checked":[2]},{"gridId":601,"checked":[2]},{"gridId":602}]}`,
    price: 54.00,
  },

  [Betslips.FORFAITLOTTOS]: {
    json: `{"id":774,"business_id":0,"grids":[{"gridId":101,"checked":[0,1,2,3,4,5,6]},{"gridId":102,"checked":[0,1,2,3,4,5]},{"gridId":201},{"gridId":202},{"gridId":501,"checked":[0]},{"gridId":601,"checked":[0]},{"gridId":602}]}`,
    price: 26.00,
  },

  [Betslips.GRANDEVIE]: {
    json: `{"id":2173,"business_id":0,"grids":[{"gridId":101,"checked":[0,1,2,3,4]},{"gridId":102},{"gridId":103},{"gridId":104},{"gridId":105},{"gridId":106},{"gridId":201},{"gridId":202,"checked":[0]},{"gridId":203,"checked":[0]},{"gridId":204},{"gridId":205},{"gridId":206},{"gridId":301},{"gridId":302},{"gridId":303,"checked":[0]},{"gridId":304},{"gridId":305},{"gridId":306},{"gridId":401,"checked":[0]},{"gridId":402,"checked":[1]},{"gridId":403,"checked":[2]},{"gridId":404},{"gridId":405},{"gridId":406},{"gridId":501,"checked":[0]},{"gridId":601,"checked":[0]},{"gridId":602}]}`,
    price: 7.00,
  },

  [Betslips.LOTTO649COMBINATION]: {
    json: `{"id":102,"business_id":0,"grids":[{"gridId":101,"checked":[0,1,2,3,4,5,6]},{"gridId":201},{"gridId":401,"checked":[0]},{"gridId":501,"checked":[0]},{"gridId":601,"checked":[0]},{"gridId":602},{"gridId":701,"checked":[1]}]}`,
    price: 22.00,
  },

  [Betslips.LOTTO649COMBINATIONWITHDOUBLEGAMEOPTION]: {
    json: `{"id":102,"business_id":0,"grids":[{"gridId":101,"checked":[0,1,2,3,4,5,6]},{"gridId":201},{"gridId":401,"checked":[2]},{"gridId":501,"checked":[0]},{"gridId":601,"checked":[0]},{"gridId":602},{"gridId":701,"checked":[1]}]}`,
    price: 29.00,
  },

  [Betslips.LOTTO649COMBINATIONWITHQUEBEC49OPTION]: {
    json: `{"id":102,"business_id":0,"grids":[{"gridId":101,"checked":[0,1,2,3,4,5,6]},{"gridId":201},{"gridId":401,"checked":[1]},{"gridId":501,"checked":[0]},{"gridId":601,"checked":[0]},{"gridId":602},{"gridId":701,"checked":[1]}]}`,
    price: 8.00,
  },

  [Betslips.LOTTO649]: {
    json: `{"id":393,"business_id":0,"grids":[{"gridId":101,"checked":[5,4,3,2,1,0]},{"gridId":102},{"gridId":103},{"gridId":104},{"gridId":105},{"gridId":106},{"gridId":107},{"gridId":108},{"gridId":201},{"gridId":202,"checked":[0]},{"gridId":203},{"gridId":204},{"gridId":205},{"gridId":206},{"gridId":207},{"gridId":208},{"gridId":301},{"gridId":302},{"gridId":303},{"gridId":304},{"gridId":305},{"gridId":306},{"gridId":307},{"gridId":308},{"gridId":401,"checked":[0]},{"gridId":501,"checked":[0]},{"gridId":601,"checked":[0]},{"gridId":602}]}`,
    price: 7.00,
  },

  [Betslips.LOTTO649WITHDOUBLEGAMEOPTION]: {
    json: `{"id":393,"business_id":0,"grids":[{"gridId":101,"checked":[5,4,3,2,1,0]},{"gridId":102},{"gridId":103},{"gridId":104},{"gridId":105},{"gridId":106},{"gridId":107},{"gridId":108},{"gridId":201},{"gridId":202,"checked":[0]},{"gridId":203},{"gridId":204},{"gridId":205},{"gridId":206},{"gridId":207},{"gridId":208},{"gridId":301},{"gridId":302},{"gridId":303},{"gridId":304},{"gridId":305},{"gridId":306},{"gridId":307},{"gridId":308},{"gridId":401,"checked":[2]},{"gridId":501,"checked":[0]},{"gridId":601},{"gridId":602,"checked":[0]}]}`,
    price: 8.00,
  },

  [Betslips.LOTTO649WITHQUEBEC49OPTION]: {
    json: `{"id":393,"business_id":0,"grids":[{"gridId":101,"checked":[5,4,3,2,1,0]},{"gridId":102},{"gridId":103},{"gridId":104},{"gridId":105},{"gridId":106},{"gridId":107},{"gridId":108},{"gridId":201},{"gridId":202,"checked":[0]},{"gridId":203},{"gridId":204},{"gridId":205},{"gridId":206},{"gridId":207},{"gridId":208},{"gridId":301},{"gridId":302},{"gridId":303},{"gridId":304},{"gridId":305},{"gridId":306},{"gridId":307},{"gridId":308},{"gridId":401,"checked":[1]},{"gridId":501,"checked":[0]},{"gridId":601},{"gridId":602,"checked":[0]}]}`,
    price: 1.00,
  },

  [Betslips.LOTTOMAXCOMBINATION]: {
    json: `{"id":506,"business_id":0,"grids":[{"gridId":101,"checked":[45,44,34,31,26,13,6,0]},{"gridId":102,"checked":[49,41,39,23,5,46,1,11]},{"gridId":103,"checked":[]},{"gridId":201},{"gridId":202},{"gridId":203,"checked":[0]},{"gridId":401,"checked":[0]},{"gridId":501,"checked":[1]},{"gridId":601,"checked":[2]},{"gridId":602},{"gridId":701,"checked":[1]}]}`,
    price: 86.00,
  },

  [Betslips.LOTTOMAXCOMBINATIONWITHDOUBLEGAMEOPTION]: {
    json: `{"id":506,"business_id":0,"grids":[{"gridId":101,"checked":[45,44,34,31,26,13,6,0]},{"gridId":102,"checked":[49,41,39,23,5,46,1,11]},{"gridId":103,"checked":[]},{"gridId":201},{"gridId":202},{"gridId":203,"checked":[0]},{"gridId":401,"checked":[2]},{"gridId":501,"checked":[1]},{"gridId":601,"checked":[2]},{"gridId":602},{"gridId":701,"checked":[1]}]}`,
    price: 118.00,
  },

  [Betslips.LOTTOMAXCOMBINATIONWITHQUEBECMAXOPTION]: {
    json: `{"id":506,"business_id":0,"grids":[{"gridId":101,"checked":[45,44,34,31,26,13,6,0]},{"gridId":102,"checked":[49,41,39,23,5,46,1,11]},{"gridId":103,"checked":[]},{"gridId":201},{"gridId":202},{"gridId":203,"checked":[0]},{"gridId":401,"checked":[1]},{"gridId":501,"checked":[1]},{"gridId":601,"checked":[2]},{"gridId":602},{"gridId":701,"checked":[1]}]}`,
    price: 38.00,
  },

  [Betslips.LOTTOMAXPERSONALSELECTION]: {
    json: `{"id":505,"business_id":0,"grids":[{"gridId":101,"checked":[44,34,31,26,13,6,0]},{"gridId":102,"checked":[49,39,23,5,46,1,11]},{"gridId":103},{"gridId":201},{"gridId":202},{"gridId":203,"checked":[0]},{"gridId":401,"checked":[0]},{"gridId":501,"checked":[3]},{"gridId":601,"checked":[8]},{"gridId":602}]}`,
    price: 56.00,
  },

  [Betslips.LOTTOMAXPERSONALSELECTIONWITHDOUBLEGAMEOPTION]: {
    json: `{"id":505,"business_id":0,"grids":[{"gridId":101,"checked":[44,34,31,26,13,6,0]},{"gridId":102,"checked":[49,39,23,5,46,1,11]},{"gridId":103},{"gridId":201},{"gridId":202},{"gridId":203,"checked":[0]},{"gridId":401,"checked":[2]},{"gridId":501,"checked":[3]},{"gridId":601,"checked":[8]},{"gridId":602}]}`,
    price: 64.00,
  },

  [Betslips.LOTTOMAXPERSONALSELECTIONWITHQUEBECMAXOPTION]: {
    json: `{"id":505,"business_id":0,"grids":[{"gridId":101,"checked":[44,34,31,26,13,6,0]},{"gridId":102,"checked":[49,39,23,5,46,1,11]},{"gridId":103},{"gridId":201},{"gridId":202},{"gridId":203,"checked":[0]},{"gridId":401,"checked":[1]},{"gridId":501,"checked":[3]},{"gridId":601,"checked":[8]},{"gridId":602}]}`,
    price: 44.00,
  },

  [Betslips.LOTTOMAXREGULAR]: {
    json: `{"id":500,"business_id":0,"grids":[{"gridId":101,"checked":[44,34,31,26,13,6,0]},{"gridId":102,"checked":[49,39,23,5,46,1,11]},{"gridId":103},{"gridId":104,"checked":[46,20,17,9,4,7,12]},{"gridId":105},{"gridId":201},{"gridId":202},{"gridId":203,"checked":[0]},{"gridId":204},{"gridId":205},{"gridId":301},{"gridId":302},{"gridId":303},{"gridId":304,"checked":[0]},{"gridId":305},{"gridId":401,"checked":[0]},{"gridId":501,"checked":[3]},{"gridId":601,"checked":[8]},{"gridId":602}]}`,
    price: 96.00,
  },

  [Betslips.LOTTOMAXREGULARWITHDOUBLEGAMEOPTION]: {
    json: `{"id":500,"business_id":0,"grids":[{"gridId":101,"checked":[44,34,31,26,13,6,0]},{"gridId":102,"checked":[49,39,23,5,46,1,11]},{"gridId":103},{"gridId":104,"checked":[46,20,17,9,4,7,12]},{"gridId":105},{"gridId":201},{"gridId":202},{"gridId":203,"checked":[0]},{"gridId":204},{"gridId":205},{"gridId":301},{"gridId":302},{"gridId":303},{"gridId":304,"checked":[0]},{"gridId":305},{"gridId":401,"checked":[2]},{"gridId":501,"checked":[3]},{"gridId":601,"checked":[8]},{"gridId":602}]}`,
    price: 120.00,
  },

  [Betslips.LOTTOMAXREGULARWITHQUEBECMAXOPTION]: {
    json: `{"id":500,"business_id":0,"grids":[{"gridId":101,"checked":[44,34,31,26,13,6,0]},{"gridId":102,"checked":[49,39,23,5,46,1,11]},{"gridId":103},{"gridId":104,"checked":[46,20,17,9,4,7,12]},{"gridId":105},{"gridId":201},{"gridId":202},{"gridId":203,"checked":[0]},{"gridId":204},{"gridId":205},{"gridId":301},{"gridId":302},{"gridId":303},{"gridId":304,"checked":[0]},{"gridId":305},{"gridId":401,"checked":[1]},{"gridId":501,"checked":[3]},{"gridId":601,"checked":[8]},{"gridId":602}]}`,
    price: 60.00,
  },

  [Betslips.QUOTIDIENNE2]: {
    json: `{"id":2167,"business_id":0,"grids":[{"gridId":101,"checked":[14,1]},{"gridId":102,"checked":[2,13]},{"gridId":103,"checked":[5,16]},{"gridId":104,"checked":[13,8]},{"gridId":105,"checked":[11,1]},{"gridId":106},{"gridId":107},{"gridId":108},{"gridId":109},{"gridId":110},{"gridId":201},{"gridId":202},{"gridId":203},{"gridId":204},{"gridId":205},{"gridId":206,"checked":[0]},{"gridId":207,"checked":[0]},{"gridId":208},{"gridId":209},{"gridId":210},{"gridId":301},{"gridId":302},{"gridId":303},{"gridId":304},{"gridId":305,"checked":[0]},{"gridId":306,"checked":[0]},{"gridId":307,"checked":[0]},{"gridId":308,"checked":[0]},{"gridId":309},{"gridId":310},{"gridId":401,"checked":[2]},{"gridId":402,"checked":[4]},{"gridId":501,"checked":[7]},{"gridId":601,"checked":[9]},{"gridId":602}]}`,
    price: 812.00,
  },

  [Betslips.QUOTIDIENNE3]: {
    json: `{"id":2011,"business_id":0,"grids":[{"gridId":101,"checked":[14,25,1]},{"gridId":102,"checked":[20,2,13]},{"gridId":103,"checked":[27,5,16]},{"gridId":104,"checked":[13,8,21]},{"gridId":105,"checked":[11,1,25]},{"gridId":106},{"gridId":107},{"gridId":108},{"gridId":201},{"gridId":202},{"gridId":203},{"gridId":204},{"gridId":205},{"gridId":206,"checked":[0]},{"gridId":207,"checked":[0]},{"gridId":208},{"gridId":301},{"gridId":302},{"gridId":303},{"gridId":304},{"gridId":305,"checked":[0]},{"gridId":306,"checked":[0]},{"gridId":307,"checked":[0]},{"gridId":308,"checked":[0]},{"gridId":401,"checked":[2]},{"gridId":402,"checked":[4]},{"gridId":501,"checked":[7]},{"gridId":601,"checked":[9]},{"gridId":602}]}`,
    price: 812.00,
  },

  [Betslips.QUOTIDIENNE4]: {
    json: `{"id":2008,"business_id":0,"grids":[{"gridId":101,"checked":[35,23,11,2]},{"gridId":102,"checked":[34,23,12,2]},{"gridId":103,"checked":[30,13,21,6]},{"gridId":104},{"gridId":105},{"gridId":106},{"gridId":201},{"gridId":202},{"gridId":203},{"gridId":204,"checked":[0]},{"gridId":205},{"gridId":206},{"gridId":301},{"gridId":302},{"gridId":303},{"gridId":304},{"gridId":305,"checked":[0]},{"gridId":306,"checked":[0]},{"gridId":401,"checked":[1]},{"gridId":402,"checked":[3]},{"gridId":501,"checked":[3]},{"gridId":601,"checked":[7]},{"gridId":602}]}`,
    price: 128,
  },

  [Betslips.SUPERFORFAIT17]: {
    json: `{"id":2205,"business_id":0,"grids":[{"gridId":101,"checked":[0,1,2,3,4,5,6]},{"gridId":102,"checked":[0,1,2,3,4,5]},{"gridId":103,"checked":[0,1,2,3,4]},{"gridId":201},{"gridId":202},{"gridId":203},{"gridId":301,"checked":[0]},{"gridId":501,"checked":[0]},{"gridId":601,"checked":[0]},{"gridId":602}]}`,
    price: 17,
  },

  [Betslips.TOUTOURIEN]: {
    json: `{"id":2174,"business_id":0,"grids":[{"gridId":101,"checked":[23,22,19,18,15,14,9,8,5,4,1,0]},{"gridId":102},{"gridId":103},{"gridId":104,"checked":[20,18,12,9,5,3,0,22,7,14,21,16]},{"gridId":105},{"gridId":201},{"gridId":202,"checked":[0]},{"gridId":203},{"gridId":204},{"gridId":205,"checked":[0]},{"gridId":206},{"gridId":301},{"gridId":302},{"gridId":303,"checked":[0]},{"gridId":304},{"gridId":305},{"gridId":306},{"gridId":501,"checked":[7]},{"gridId":601,"checked":[7]},{"gridId":602}]}`,
    price: 357,
  },
};