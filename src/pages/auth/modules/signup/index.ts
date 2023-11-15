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
  isValid: false,
  attr: {
    class: 'label',
  },
  events: {
    change: (event) => {
      const target = event.target as HTMLInputElement;

      const { message, isValid } = validate(target.value, 'email');

      inputEmail.setProps({ error: message, inputValue: target.value, isValid });
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

      const { message, isValid } = validate(target.value, 'name');

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

      const { message, isValid } = validate(target.value, 'name');

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
          if (inputEmail._props.isValid
            && inputLogin._props.isValid
            && inputFirstName._props.isValid
            && inputSecondName._props.isValid
            && inputPhone._props.isValid
            && inputPassword._props.isValid
            && inputRepeatPassword._props.isValid
          ) {
            console.log({
              mail: inputEmail._props.inputValue,
              login: inputLogin._props.inputValue,
              firstName: inputFirstName._props.inputValue,
              secondName: inputSecondName._props.inputValue,
              phone: inputPhone._props.inputValue,
              password: inputPassword._props.inputValue,
              repeatPassword: inputRepeatPassword._props.inputValue,
            });
          }
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
