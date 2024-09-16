import { DrawGames } from "../../../pagesObjects/CommonPage/drawGamesConfig";

export enum VerbalPlays {
  QUEBEC49_DOUBLEGAME,
  QUEBECMAX_DOUBLEGAME,
  LOTTO649_DOUBLEGAME,
  LOTTOMAX_DOUBLEGAME
}

export interface VerbalPlayInfos {
  drawGame: DrawGames,
  selection: number,
  draw: number,
  doubleGame: number, // 1 means "yes", 2 means "No".
  extra: number,
  price: number
}

export const VerbalPlayInfoMap: { [key in VerbalPlays]: VerbalPlayInfos } = {

  [VerbalPlays.QUEBEC49_DOUBLEGAME]: {
    drawGame: DrawGames.QUEBEC_49,
    selection: 3.00,
    draw: 5.00,
    doubleGame: 1.00,
    extra: 1.00,
    price: 65.00
  },

  [VerbalPlays.QUEBECMAX_DOUBLEGAME]: {
    drawGame: DrawGames.QUEBEC_MAX,
    selection: 4.00,
    draw: 2.00,
    doubleGame: 2.00,
    extra: 10.00,
    price: 36.00
  },

  [VerbalPlays.LOTTO649_DOUBLEGAME]: {
    drawGame: DrawGames.LOTTO_649,
    selection: 3.00,
    draw: 1.00,
    doubleGame: 1.00,
    extra: 1.00,
    price: 13.00
  },

  [VerbalPlays.LOTTOMAX_DOUBLEGAME]: {
    drawGame: DrawGames.LOTTO_MAX,
    selection: 3.00,
    draw: 1.00,
    doubleGame: 1.00,
    extra: 1.00,
    price: 22.00
  },

};