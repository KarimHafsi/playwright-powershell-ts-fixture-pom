export enum Barcodes {
  LOTTO649
}

export interface BarcodeInfos {
  number: string,
}

export const BarcodeInfoMap: { [key in Barcodes]: BarcodeInfos } = {

  [Barcodes.LOTTO649]: {
    number: `3530556766303567066273000000075733DD63097*LOTOQUEBEC*EL2327004903`,
  },

};