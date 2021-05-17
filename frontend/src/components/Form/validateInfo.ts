interface IValues {
  name: string;
  email: string;
  whatsapp: string;
  social_medias: string;
}

const urlRegex: RegExp =
  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
const phoneRegex: RegExp = /(0?[1-9]{2})*\D*(9?)\D?(\d{4})+\D?(\d{4})\b/;
const emailRegex: RegExp = /\S+@\S+\.\S+/;

export default function validateInfo(values: IValues) {
  let errors = {
    name: '',
    email: '',
    whatsapp: '',
    social_medias: '',
  };

  if (!values.name.trim()) {
    errors.name = '*Necessário preencher esse campo';
  } else if (values.name.length < 5) {
    errors.name = '*Nome deve ter pelo menos mais de 5 caracteres';
  }

  if (!values.email) {
    errors.email = '*Necessário preencher esse campo';
  } else if (!emailRegex.test(values.email)) {
    errors.email = '*Endereço de email inválido';
  }
  if (!values.whatsapp) {
    errors.whatsapp = '*Necessário preencher esse campo';
  } else if (!phoneRegex.test(values.whatsapp)) {
    errors.whatsapp = '*Número de telefone inválido';
  }

  if (!values.social_medias) {
    errors.social_medias = '*Necessário preencher esse campo';
  } else if (!urlRegex.test(values.social_medias)) {
    errors.social_medias = 'Esta não é uma url válida';
  }

  return errors;
}
