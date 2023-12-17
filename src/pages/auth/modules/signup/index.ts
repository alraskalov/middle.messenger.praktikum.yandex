import Popup from '../../../../components/popup';
import InputWrapper from '../../layouts/inputWrapper';
import Input from '../../../../components/input';
import ButtonsBlockWrapper from '../../layouts/buttonsBlockWrapper';
import Button from '../../../../components/button';
import validate from '../../../../utils/scripts/validate/validate';
import Wrapper from "../../../../components/wrapper";
import Router from "../../../../utils/scripts/router/Router.ts";
import Routes from "../../../../utils/scripts/router/Routes.ts";
import Form from "../../../../components/form";

const inputEmailSignUp = new Input('label', {
    labelText: 'Почта',
    inputName: 'email',
    inputType: 'email',
  inputValue: '',
  inputPlaceholder: 'Почта',
  error: '',
  isValid: false,
  attr: {
    class: 'label',
  },
  events: {
    change: (event) => {
      const target = event.target as HTMLInputElement;

      const { message, isValid } = validate(target.value, 'email');

        inputEmailSignUp.setProps({ error: message, inputValue: target.value, isValid });
    },
  },
});

const inputLogin = new Input('label', {
  inputName: 'login',
  labelText: 'Логин',
  inputType: 'text',
  inputValue: '',
  inputPlaceholder: 'Логин',
  error: '',
  isValid: false,
  attr: {
    class: 'label',
  },
  events: {
    change: (event) => {
      const target = event.target as HTMLInputElement;

      const { message, isValid } = validate(target.value, 'login');

      inputLogin.setProps({ error: message, inputValue: target.value, isValid });
    },
  },
});

const inputFirstName = new Input('label', {
  inputName: 'first_name',
  labelText: 'Имя',
  inputType: 'text',
  inputValue: '',
  inputPlaceholder: 'Имя',
  error: '',
  isValid: false,
  attr: {
    class: 'label',
  },
  events: {
    change: (event) => {
      const target = event.target as HTMLInputElement;

      const { message, isValid } = validate(target.value, 'first_name');

      inputFirstName.setProps({ error: message, inputValue: target.value, isValid });
    },
  },
});

const inputSecondName = new Input('label', {
  inputName: 'second_name',
  labelText: 'Фамилия',
  inputType: 'text',
  inputValue: '',
  inputPlaceholder: 'Фамилия',
  error: '',
  isValid: false,
  attr: {
    class: 'label',
  },
  events: {
    change: (event) => {
      const target = event.target as HTMLInputElement;

      const { message, isValid } = validate(target.value, 'second_name');

      inputSecondName.setProps({ error: message, inputValue: target.value, isValid });
    },
  },
});

const inputPhone = new Input('label', {
  inputName: 'phone',
  labelText: 'Телефон',
  inputType: 'tel',
  inputValue: '',
  inputPlaceholder: 'Телефон',
  error: '',
  isValid: false,
  attr: {
    class: 'label',
  },
  events: {
    change: (event) => {
      const target = event.target as HTMLInputElement;

      const { message, isValid } = validate(target.value, 'phone');

      inputPhone.setProps({ error: message, inputValue: target.value, isValid });
    },
  },
});

const inputPassword = new Input('label', {
  inputName: 'password',
  labelText: 'Пароль',
  inputType: 'password',
  inputValue: '',
  inputPlaceholder: 'Пароль',
  error: '',
  isValid: false,
  attr: {
    class: 'label',
  },
  events: {
    change: (event) => {
      const target = event.target as HTMLInputElement;

      const { message, isValid } = validate(target.value, 'password');

      inputPassword.setProps({ error: message, inputValue: target.value, isValid });
    },
  },
});

const inputRepeatPassword = new Input('label', {
  inputName: 'repeatPassword',
  labelText: 'Пароль (ещё раз)',
  inputType: 'password',
  inputValue: '',
  inputPlaceholder: 'Пароль (ещё раз)',
  error: '',
  isValid: false,
  attr: {
    class: 'label',
  },
  events: {
    change: (event) => {
      const target = event.target as HTMLInputElement;

      const { message, isValid } = validate(target.value, 'password');

      inputRepeatPassword.setProps({ error: message, inputValue: target.value, isValid });
    },
  },
});

const form = new Form('form', {
    formTitle: 'Регистрация',
    wrapper: [new InputWrapper(
        'div',
        {
            "inputs": [
                inputEmailSignUp,
                inputLogin,
                inputFirstName,
                inputSecondName,
                inputPhone,
                inputPassword,
                inputRepeatPassword,
            ],
            "attr": {
                "class": 'input-wrapper',
            },
        },
    ),
        new ButtonsBlockWrapper('div', {
            buttons: [
                new Button('button', {
                    'button-text': 'Зарегистрироваться',
                    "attr": {
                        class: 'button',
                    },
                    "events": {
                        click: (e) => {
                            e.preventDefault();

                            if (inputEmailSignUp._props.isValid
                                && inputLogin._props.isValid
                                && inputFirstName._props.isValid
                                && inputSecondName._props.isValid
                                && inputPhone._props.isValid
                                && inputPassword._props.isValid
                                && inputRepeatPassword._props.isValid
                            ) {
                                form.sendSignUp({
                                    "first_name": inputFirstName._props.inputValue,
                                    "second_name": inputSecondName._props.inputValue,
                                    "login": inputLogin._props.inputValue,
                                    "email": inputEmailSignUp._props.inputValue,
                                    "password": inputPassword._props.inputValue,
                                    "phone": inputPhone._props.inputValue
                                })
                            }
                        },
                    },
                }),
                new Button('button', {
                    'button-text': 'Войти',
                    "attr": {
                        class: 'link link_regular link_button',
                    },
                    "events": {
                        click: (e) => {
                            e.preventDefault();

                            Router.go(Routes.Root)
                        },
                    },
                }),
            ],
            attr: {
                class: 'buttons-block-wrapper',
            },
        })
    ],
    attr: {
        class: 'auth-form auth-form_signup',
    },
})

const popup = new Popup('div', {
  element: form,
  attr: {
    class: 'popup',
  },
});

const container = new Wrapper("div", {
    element: [popup],
    attr: {
        class: "container container_column container_center",
    }
})

const main = new Wrapper("main", {
    element: [container],
    attr: {},
})

export default main;

// renderDOM('.container', popup);
