import Popup from '../../../../components/popup';
import Form from '../../components/form';
import InputWrapper from '../../layouts/inputWrapper';
import Input from '../../../../components/input';
import ButtonsBlockWrapper from '../../layouts/buttonsBlockWrapper';
import Button from '../../../../components/button';
import Link from '../../../../components/link';
import renderDOM from '../../../../utils/scripts/renderDOM';

const inputWrapper = new InputWrapper(
  'div',
  {
    inputs: [
      new Input('label', {
        inputName: 'login',
        labelText: 'Логин',
        inputType: 'text',
        inputValue: '',
        inputPlaceholder: 'Логин',
        error: 'Неверный логин',
        attr: {
          class: 'label',
        },
      }),
      new Input('label', {
        inputName: 'password',
        labelText: 'Пароль',
        inputType: 'password',
        inputValue: '',
        inputPlaceholder: 'Пароль',
        error: '',
        attr: {
          class: 'label',
        },
      }),
    ],
    attr: {
      class: 'input-wrapper',
    },
  },
);

const buttonsWrapper = new ButtonsBlockWrapper('buttons-block-wrapper', {
  buttons: [
    new Button('button', {
      'button-text': 'Авторизоваться',
      attr: {
        class: 'button',
      },
    }),
    new Link('div', {
      'link-class': 'link_xs',
      'link-text': 'Нет аккаунта?',
      'link-href': '/pages/auth/modules/signup/index.html',
    }),
  ],
  attr: {
    class: 'buttons-block-wrapper',
  },
});

const popup = new Popup('popup', {
  element: new Form('form', {
    formTitle: 'Вход',
    wrapper: [inputWrapper, buttonsWrapper],
    attr: {
      class: 'auth-form auth-form_login',
    },
  }),
  attr: {
    class: 'popup',
  },
});

renderDOM('.container', popup);
