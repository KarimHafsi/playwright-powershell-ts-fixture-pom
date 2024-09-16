import { ValidationButtons } from "../../../pagesObjects/ValidationPage/ValidationPageLocators";

export enum ControlNumbers {
  ARGENT_WEB,
  FORMULE_GROUPE_JEF,
  FORMULE_SUPER_GROUPE,
  PARI_SPORTIF_PFE,
  PARI_SPORTIF_JEF,
  SCRATCH_ONTARIO,
  SCRATCH_BOS_23,
  SCRATCH_BOS_24,
  SCRATCH_BOS_25,
  SCRATCH_BOS_27,
  SCRATCH_WCLC,
  SCRATCH_ALC
  }

export interface ControlNumbersInfos {
  regex: string,
  button: ValidationButtons
}

export const controlNumbersInfoMap: { [key in ControlNumbers]: ControlNumbersInfos } = {

  [ControlNumbers.ARGENT_WEB]: {
    regex: `^[a-zA-Z0-9]{24}[a-fA-F0-9]{4}$`,
    button: ValidationButtons.OTHER
  },
  
  [ControlNumbers.FORMULE_GROUPE_JEF]: {
    regex: `^(2|3|5|6|8)[0-9]{20}$`,
    button: ValidationButtons.GROUP
  },

  [ControlNumbers.FORMULE_SUPER_GROUPE]: {
    regex: `^[a-zA-Z2-7]{24}[a-fA-F0-9]{4}$`,
    button:ValidationButtons.SUPER_GROUP
  },

  [ControlNumbers.PARI_SPORTIF_JEF]: {
    regex: `^21[0-9]{19}$`,
    button:ValidationButtons.SPORT_BETTING
  },

  [ControlNumbers.PARI_SPORTIF_PFE]: {
    regex: `^40[0-9]{19}$`,
    button:ValidationButtons.SPORT_BETTING
  },

  [ControlNumbers.SCRATCH_ALC]: {
    regex: `^88[a-zA-Z0-9]{23}$`,
    button:ValidationButtons.SCRATCH
  },

  [ControlNumbers.SCRATCH_BOS_23]: {
    regex: `^[0-9]{23}$`,
    button:ValidationButtons.SCRATCH
  },

  [ControlNumbers.SCRATCH_BOS_24]: {
    regex: `^[a-zA-Z]{1}[a-zA-Z0-9]{23}$`,
    button:ValidationButtons.SCRATCH
  },

  [ControlNumbers.SCRATCH_BOS_25]: {
    regex: `^[0-9]{25}$`,
    button:ValidationButtons.SCRATCH
  },

  [ControlNumbers.SCRATCH_BOS_27]: {
    regex: `^[a-zA-Z]{1}[a-zA-Z0-9]{26}$`,
    button:ValidationButtons.SCRATCH
  },

  [ControlNumbers.SCRATCH_ONTARIO]: {
    regex: `^1[0-9]{21}$`,
    button:ValidationButtons.SCRATCH
  },

  [ControlNumbers.SCRATCH_WCLC]: {
    regex: `^[0-9]{24}$`,
    button:ValidationButtons.SCRATCH
  }

};

export const validationControlNumbers = [
  ControlNumbers.FORMULE_GROUPE_JEF,
  ControlNumbers.FORMULE_SUPER_GROUPE,
  ControlNumbers.PARI_SPORTIF_JEF,
  ControlNumbers.PARI_SPORTIF_PFE,
  ControlNumbers.SCRATCH_ALC,
  ControlNumbers.SCRATCH_BOS_23,
  ControlNumbers.SCRATCH_BOS_24,
  ControlNumbers.SCRATCH_BOS_25,
  ControlNumbers.SCRATCH_BOS_27,
  ControlNumbers.SCRATCH_ONTARIO,
  ControlNumbers.SCRATCH_WCLC,
];

export const cancelationControlNumbers = [
  ControlNumbers.ARGENT_WEB,
  ControlNumbers.FORMULE_GROUPE_JEF,
  ControlNumbers.FORMULE_SUPER_GROUPE,
  ControlNumbers.PARI_SPORTIF_JEF,
  ControlNumbers.PARI_SPORTIF_PFE,
];