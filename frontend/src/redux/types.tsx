import { Action } from 'redux';

interface IRegister {
  name: string;
  email: string;
  whatsapp: string;
  social_medias: string;
}

export interface IRegisterLoading {
  register: boolean;
}

export interface IRegisterState {
  loading: IRegisterLoading;
  register: IRegister;
}

export interface ChangeName extends Action {
  type: 'change-name';
  name: string;
}

export interface ChangeEmail extends Action {
  type: 'change-email';
  email: string;
}
export interface ChangeWhatsapp extends Action {
  type: 'change-whatsapp';
  whatsapp: string;
}
export interface ChangeSocialMedias extends Action {
  type: 'change-socialmedias';
  social_medias: string;
}

export type RegisterAction =
  | ChangeName
  | ChangeEmail
  | ChangeWhatsapp
  | ChangeSocialMedias;
