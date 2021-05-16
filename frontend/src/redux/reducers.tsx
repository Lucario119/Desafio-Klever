import produce from 'immer';

import { RegisterAction, IRegisterState } from './types';

export const registerState: IRegisterState = {
  loading: {
    register: false,
  },
  register: {
    name: '',
    email: '',
    whatsapp: '',
    social_medias: '',
  },
};

const register = (state = registerState, action: RegisterAction) => {
  switch (action.type) {
    case 'change-name':
      return produce(state, (draft: any) => {
        draft.register.name = action.name;
      });
    case 'change-email':
      return produce(state, (draft: any) => {
        draft.register.email = action.email;
      });
    case 'change-whatsapp':
      return produce(state, (draft: any) => {
        draft.register.whatsapp = action.whatsapp;
      });
    case 'change-socialmedias':
      return produce(state, (draft: any) => {
        draft.register.social_medias = action.social_medias;
      });
    default:
      return produce(state, (draft: any) => draft);
  }
};

export default register;
