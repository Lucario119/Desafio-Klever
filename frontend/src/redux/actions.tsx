import {
  ChangeName,
  ChangeEmail,
  ChangeWhatsapp,
  ChangeSocialMedias,
} from './types';

export const changeName = (name: string): ChangeName => ({
  type: 'change-name',
  name,
});

export const changeEmail = (email: string): ChangeEmail => ({
  type: 'change-email',
  email,
});
export const changeWhatsapp = (whatsapp: string): ChangeWhatsapp => ({
  type: 'change-whatsapp',
  whatsapp,
});
export const changeSocialMedias = (
  social_medias: string
): ChangeSocialMedias => ({
  type: 'change-socialmedias',
  social_medias,
});
