export enum Barcodes {
  ASTRO,
  BANCO,
  BANCOSPECIAL,
  GRANDEVIE,
  LOTTO649,
  LOTTO649WITHQUEBEC49,
  LOTTOMAX,
  LOTTOMAXWITHQUEBECMAX,
  QUEBEC49,
  QUEBECMAX,
  QUOTIDIENNE2,
  QUOTIDIENNE3,
  QUOTIDIENNE4,
  TOUTOURIEN
}

export interface BarcodeInfos {
  xml: string,
  price: number
}

export const BarcodeInfoMap: { [key in Barcodes]: BarcodeInfos } = {

  [Barcodes.ASTRO]: {
    xml:     
    `<cab type="mise" ver="02">
      <jeu>218</jeu>
      <nbTir>1</nbTir>
      <astro choix="1">
        <s>12125312</s>
      </astro>
      <extra>5</extra>
    </cab>`,
    price: 6.00
  },

  [Barcodes.BANCO]: {
    xml: 
    `<cab type="mise" ver="02">
      <jeu>208</jeu>
      <nbTir>5</nbTir>
      <banco choix="2">
        <s type="2" mnt="1.00" t="1">0336</s>
        <s type="3" mnt="1.00" t="1">041420</s>
      </banco>
      <extra>5</extra>
    </cab>`,
    price: 45.00
  },

  [Barcodes.BANCOSPECIAL]: {
    xml: 
    `<cab type="mise" ver="02">
      <jeu>204</jeu>
      <nbTir>3</nbTir>
      <bancoSpecial choix="2">
        <s t="1">0204061114162022243034364648495859606667</s>
        <s t="1">0609121416232839424344474852555661646566</s>
      </bancoSpecial>
      <extra>4</extra>
    </cab>`,
    price: 72.00
  },

  [Barcodes.GRANDEVIE]: {
    xml: 
    `<cab type="mise" ver="02">
      <jeu>239</jeu>
      <nbTir>1</nbTir>
      <grandeVie choix="6">
        <s>012330354506</s>
        <s>061317243802</s>
        <s>041327334101</s>
        <s>051417434406</s>
        <s>151620434604</s>
        <s>013335434802</s>
      </grandeVie>
      <extra>4</extra>
    </cab>`,
    price: 22.00
  },

  [Barcodes.LOTTO649]: {
    xml: 
    `<cab type="mise" ver="02">
      <jeu>212</jeu>
      <nbTir>1</nbTir>
      <produit49 choix="3">
        <s>661144966156</s>,
        <s>398433845807</s>,
        <s>635017366780</s>
      </produit49>
      <extra>1</extra>
    </cab>`,
    price: 10.00
  },

  [Barcodes.LOTTO649WITHQUEBEC49]: {
    xml:
    `<cab type="mise" ver="02">
      <jeu>216</jeu>
      <nbTir>1</nbTir>
      <produit49 choix="1">
        <s>081526343543</s>
      </produit49>
      <extra>5</extra>
    </cab>`,
    price: 9.00
  },

  [Barcodes.LOTTOMAX]: {
    xml: 
    `<cab type="mise" ver="02">
      <jeu>223</jeu>
      <nbTir>2</nbTir>
      <produitMax>
        <p choix="3">082425293338500711121822344203091014172230</p>
        <p choix="3">040513142728311218202330344914171924304247</p>
        <p choix="3">091125264344470103081824273303061021273545</p>
        <p choix="3">071423454647480524303540444601152331364647</p>
      </produitMax>
      <extra>4</extra>
    </cab>`,
    price: 48.00
  },

  [Barcodes.LOTTOMAXWITHQUEBECMAX]: {
    xml: 
    `<cab type="mise" ver="02">
      <jeu>229</jeu>
      <nbTir>2</nbTir>
      <produitMax>
        <p choix="3">091823272839440105141828314807111223303648</p>
        <p choix="3">102028394045490816212228404701050614163745</p>
        <p choix="3">071015162434371415303537384415172627404349</p>
        <p choix="3">151925293036451113152627354404081116203543</p>
        <p choix="3">070812172240460516202125274018283033404549</p>
      </produitMax>
      <extra>10</extra>
    </cab>`,
    price: 90.00
  },

  [Barcodes.QUEBEC49]: {
    xml: 
    `<cab type="mise" ver="02">
      <jeu>214</jeu>
      <nbTir>3</nbTir>
      <produit49 choix="2">
        <s>041118263747</s>
        <s>050921282949</s>
      </produit49>
      <extra>4</extra>
    </cab>`,
    price: 18.00
  },

  [Barcodes.QUEBECMAX]: {
    xml: 
    `<cab type="mise" ver="02">
      <jeu>228</jeu>
      <nbTir>2</nbTir>
      <produitMax>
        <p choix="3">010310213036451117323338424801051520232932</p>
        <p choix="3">071323273142440415162729454703182026323748</p>
        <p choix="3">050623242845480810131415263813323336414348</p>
        <p choix="3">051416253242440204111220273809132223263042</p>
        <p choix="3">061220242838480521222329355002050713274648</p>
      </produitMax>
      <extra>10</extra>
    </cab>`,
    price: 40.00
  },

  [Barcodes.QUOTIDIENNE2]: {
    xml: 
    `<cab type="mise" ver="02">
      <jeu>238</jeu>
      <nbTir>4</nbTir>
      <mntOrdre>1.00</mntOrdre>
      <mntDesordre>2.00</mntDesordre>
      <quot choix="3">
        <s>33</s>
        <s>53</s>
        <s>76</s>
      </quot>
      <extra>6</extra>
    </cab>`,
    price: 60.00
  },

  [Barcodes.QUOTIDIENNE3]: {
    xml: 
    `<cab type="mise" ver="02">
      <jeu>206</jeu>
      <nbTir>4</nbTir>
      <mntOrdre>1.00</mntOrdre>
      <mntDesordre>2.00</mntDesordre>
      <quot choix="3">
        <s>132</s>
        <s>822</s>
        <s>672</s>
      </quot>
      <extra>6</extra>
    </cab>`,
    price: 60.00
  },

  [Barcodes.QUOTIDIENNE4]: {
    xml: 
    `<cab type="mise" ver="02">
        <jeu>207</jeu>
        <nbTir>3</nbTir>
        <mntOrdre>5.00</mntOrdre>
        <mntDesordre>0.50</mntDesordre>
        <quot choix="5">
          <s>2306</s>
          <s>0637</s>
          <s>2797</s>
          <s>1405</s>
          <s>2191</s>
        </quot>
        <extra>3</extra>
      </cab>`,
    price: 91.50
  },

  [Barcodes.TOUTOURIEN]: {
    xml:
    `<cab type="mise" ver="02">
      <jeu>234</jeu>
      <nbTir>4</nbTir>
      <toutOuRien choix="4">
        <s>010203040710131718192223</s>
        <s>020305080910131618192122</s>
        <s>010203040608121316181921</s>
        <s>020407080910141519202324</s>
      </toutOuRien>
      <extra>4</extra>
    </cab>`,
    price: 48.00
  },
};