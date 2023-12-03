import Popup from '../../../../components/popup';
import Form from '../../components/form';
import InputWrapper from '../../layouts/inputWrapper';
import Input from '../../../../components/input';
import ButtonsBlockWrapper from '../../layouts/buttonsBlockWrapper';
import Button from '../../../../components/button';
import Link from '../../../../components/link';
import validate from '../../../../utils/scripts/validate/validate';
import Wrapper from "../../../../components/wrapper";
import Router from "../../../../utils/scripts/router/Router.ts";
import Routes from "../../../../utils/scripts/router/Routes.ts";

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



const form = new Form('form', {
    "formTitle": 'Вход',
    "wrapper": [new InputWrapper(
        'div',
        {
            "inputs": [
                inputLogin,
                inputPassword,
            ],
            "attr": {
                "class": 'input-wrapper',
            },
        },
    ),
        new ButtonsBlockWrapper('div', {
            buttons: [
                new Button('button', {
                    'button-text': 'Авторизоваться',
                    attr: {
                        class: 'button',
                    },
                    events: {
                        click: (e) => {
                            e.preventDefault();
                            if (inputLogin._props.isValid
                                && inputPassword._props.isValid
                            ) {
                                form.sendLogIn({
                                    "login": inputLogin._props.inputValue,
                                    "password": inputPassword._props.inputValue
                                })
                            }
                        },
                    },
                }),
                new Link('div', {
                    'link-class': 'link_xs',
                    'link-text': 'Нет аккаунта?',
                    'link-href': '',
                    events: {
                        click: () => {
                            Router.go(Routes.Signup)
                        }
                    }
                }),
            ],
            attr: {
                class: 'buttons-block-wrapper',
            },
        })],
    attr: {
        class: 'auth-form auth-form_login',
    },
});

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
