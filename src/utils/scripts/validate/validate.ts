interface IValidate {
  [key: string]: {
    pattern: RegExp;
    message?: string;
  }
}
const validateRules: IValidate = {
  name: {
    pattern: /^[A-ZА-Я]{1}[a-zа-я-]*$/,
    message: 'Поле может содержать латиницу или кириллицу, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис)',
  },
  login: {
    pattern: /(?!^\d+$)^[\w-]{3,20}$/,
    message: 'Поле может содержать от 3 до 20 символов, латиницу, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание)',
  },
  email: {
    pattern: /^[\w-]+@[A-Za-z]+\.\w+$/,
    message: 'Поле может содержать латиницу, может включать цифры и спецсимволы вроде дефиса и подчёркивания',
  },
  password: {
    pattern: /^(?=.*[A-Z])(?=.*[0-9]).{8,40}$/,
    message: 'Поле может содержать от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
  },
  phone: {
    pattern: /^((\+)*([0-9]){10,15})$/,
    message: 'Поле может содержать от 10 до 15 символов, состоит из цифр, может начинается с плюса',
  },
  message: {
    pattern: /^\S+$/,
  },
  displayName: {
    pattern: /^\S+$/,
    message: 'Минимум 1 символ',
  },
};

const validate = (testString: string, type: string) => {
  const regex: RegExp = validateRules[type].pattern;
  const isValid: boolean = regex.test(testString);

  return {
    isValid,
    message: isValid ? '' : validateRules[type]?.message,
  };
};

export default validate;
