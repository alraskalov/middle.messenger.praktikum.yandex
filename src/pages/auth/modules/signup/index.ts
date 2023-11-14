import Popup from '../../../../components/popup';
import Form from '../../components/form';
import InputWrapper from '../../layouts/inputWrapper';
import Input from '../../../../components/input';
import ButtonsBlockWrapper from '../../layouts/buttonsBlockWrapper';
import Button from '../../../../components/button';
import Link from '../../../../components/link';
import renderDOM from '../../../../utils/scripts/renderDOM';
import validate from '../../../../utils/scripts/validate/validate';

const inputEmail = new Input('label', {
  inputName: 'email',
  labelText: 'Почта',
  inputType: 'email',
  inputValue: '',
  inputPlaceholder: 'Почта',
  error: '',
  attr: {
    class: 'label',
  },
});

const inputLogin = new Input('label', {
  inputName: 'login',
  labelText: 'Логин',
  inputType: 'text',
  inputValue: '',
  inputPlaceholder: 'Логин',
  error: '',
  attr: {
    class: 'label',
  },
});

const inputFirstName = new Input('label', {
  inputName: 'first_name',
  labelText: 'Имя',
  inputType: 'text',
  inputValue: '',
  inputPlaceholder: 'Имя',
  error: '',
  attr: {
    class: 'label',
  },
  events: {
    change: (event) => {
      const target = event.target as HTMLInputElement;

      const valid = validate(target.value, 'name');
      console.log(valid);
      inputLogin.setProps({ error: valid.message });
      inputLogin.setProps({ inputValue: 'asd' });
      console.log(inputFirstName);
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
  attr: {
    class: 'label',
  },
});

const inputPhone = new Input('label', {
  inputName: 'phone',
  labelText: 'Телефон',
  inputType: 'tel',
  inputValue: '',
  inputPlaceholder: 'Телефон',
  error: '',
  attr: {
    class: 'label',
  },
});

const inputPassword = new Input('label', {
  inputName: 'password',
  labelText: 'Пароль',
  inputType: 'password',
  inputValue: '',
  inputPlaceholder: 'Пароль',
  error: '',
  attr: {
    class: 'label',
  },
});

const inputRepeatPassword = new Input('label', {
  inputName: 'repeatPassword',
  labelText: 'Пароль (ещё раз)',
  inputType: 'password',
  inputValue: '',
  inputPlaceholder: 'Пароль (ещё раз)',
  error: '',
  attr: {
    class: 'label',
  },
});

const inputWrapper = new InputWrapper(
  'div',
  {
    inputs: [
      inputEmail,
      inputLogin,
      inputFirstName,
      inputSecondName,
      inputPhone,
      inputPassword,
      inputRepeatPassword,
    ],
    attr: {
      class: 'input-wrapper',
    },
  },
);

const buttonsWrapper = new ButtonsBlockWrapper('buttons-block-wrapper', {
  buttons: [
    new Button('button', {
      'button-text': 'Зарегистрироваться',
      attr: {
        class: 'button',
      },
      events: {
        click: (e) => {
          e.preventDefault();
        },
      },
    }),
    new Link('div', {
      'link-class': 'link_xs',
      'link-text': 'Войти',
      'link-href': '/pages/auth/modules/login/index.html',
    }),
  ],
  attr: {
    class: 'buttons-block-wrapper',
  },
});

const popup = new Popup('popup', {
  element: new Form('form', {
    formTitle: 'Регистрация',
    wrapper: [inputWrapper, buttonsWrapper],
    attr: {
      class: 'auth-form auth-form_signup',
    },
  }),
  attr: {
    class: 'popup',
  },
});

renderDOM('.container', popup);
