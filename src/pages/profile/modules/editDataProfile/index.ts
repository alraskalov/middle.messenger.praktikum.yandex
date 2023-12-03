import Avatar from '../../../../components/avatar';
import LayoutSidebar from '../../layouts/sidebar';
import BackButton from '../../../../components/backButton';
import BackSidebar from '../../components/backSidebar';
import ProfileForm from '../../components/profileForm';
import ProfileInput from '../../components/profileInput';
import Button from '../../../../components/button';
import validate from '../../../../utils/scripts/validate/validate';
import Router from "../../../../utils/scripts/router/Router.ts";
import Routes from "../../../../utils/scripts/router/Routes.ts";

const avatar = new Avatar(
  'div',
  {
    src: '/assets/icons/avatar.svg',
    attr: {
      class: 'avatar-wrapper',
    },
  },
);

const backButton = new BackButton('button', {
  attr: {
    class: 'back-button',
  },
    events: {
        click: () => {
            Router.go(Routes.Profile)
        }
    }
});

const backSidebar = new BackSidebar('aside', {
  button: backButton,
  attr: {
    class: 'back-sidebar',
  },
});

const inputEmail = new ProfileInput('label', {
  labelText: 'Почта',
  inputName: 'email',
  inputType: 'email',
  inputValue: '',
  inputPlaceholder: '',
  inputDisabled: false,
  error: '',
  isValid: false,
  attr: {
    class: 'profile-label',
  },
  events: {
    change: (event: InputEvent) => {
      const target = event.target as HTMLInputElement;

      const { message, isValid } = validate(target.value, 'email');

      inputEmail.setProps({ error: message, inputValue: target.value, isValid });
    },
  },
});

const inputLogin = new ProfileInput('label', {
  labelText: 'Логин',
  inputName: 'login',
  inputType: 'text',
  inputValue: '',
  inputPlaceholder: '',
  inputDisabled: false,
  error: '',
  isValid: false,

  attr: {
    class: 'profile-label',
  },
  events: {
    change: (event: InputEvent) => {
      const target = event.target as HTMLInputElement;

      const { message, isValid } = validate(target.value, 'login');

      inputLogin.setProps({ error: message, inputValue: target.value, isValid });
    },
  },
});

const inputFirstName = new ProfileInput('label', {
  labelText: 'Имя',
  inputName: 'first_name',
  inputType: 'text',
  inputValue: '',
  inputPlaceholder: '',
  inputDisabled: false,
  error: '',
  isValid: false,

  attr: {
    class: 'profile-label',
  },
  events: {
    change: (event: InputEvent) => {
      const target = event.target as HTMLInputElement;

      const { message, isValid } = validate(target.value, 'first_name');

      inputFirstName.setProps({ error: message, inputValue: target.value, isValid });
    },
  },
});

const inputSecondName = new ProfileInput('label', {
  labelText: 'Фамилия',
  inputName: 'second_name',
  inputType: 'text',
  inputValue: '',
  inputPlaceholder: '',
  inputDisabled: false,
  error: '',
  isValid: false,

  attr: {
    class: 'profile-label',
  },
  events: {
    change: (event: InputEvent) => {
      const target = event.target as HTMLInputElement;

      const { message, isValid } = validate(target.value, 'second_name');

      inputSecondName.setProps({ error: message, inputValue: target.value, isValid });
    },
  },
});

const inputDisplayName = new ProfileInput('label', {
  labelText: 'Имя в чате',
  inputName: 'display_name',
  inputType: 'text',
  inputValue: '',
  inputPlaceholder: '',
  inputDisabled: false,
  error: '',
  isValid: false,

  attr: {
    class: 'profile-label',
  },
  events: {
    change: (event: InputEvent) => {
      const target = event.target as HTMLInputElement;

      const { message, isValid } = validate(target.value, 'display_name');

      inputDisplayName.setProps({ error: message, inputValue: target.value, isValid });
    },
  },
});

const inputPhone = new ProfileInput('label', {
  labelText: 'Телефон',
  inputName: 'phone',
  inputType: 'tel',
  inputValue: '',
  inputPlaceholder: '',
  inputDisabled: false,
  error: '',
  isValid: false,

  attr: {
    class: 'profile-label',
  },
  events: {
    change: (event: InputEvent) => {
      const target = event.target as HTMLInputElement;

      const { message, isValid } = validate(target.value, 'phone');

      inputPhone.setProps({ error: message, inputValue: target.value, isValid });
    },
  },
});

const profileForm = new ProfileForm('form', {
  'form-title': '',
  inputs: [
    inputEmail,
    inputLogin,
    inputFirstName,
    inputSecondName,
    inputDisplayName,
    inputPhone,
  ],

  attr: {
    class: 'profile-form',
  },
});

const button = new Button('button', {
  'button-text': 'Сохранить',
  attr: {
    class: 'button',
  },
  events: {
    click: (event) => {
      event.preventDefault();

      if (inputEmail._props.isValid
          && inputLogin._props.isValid
          && inputFirstName._props.isValid
          && inputSecondName._props.isValid
          && inputDisplayName._props.isValid
          && inputPhone._props.isValid
      ) {
        profileForm.sendNewUserData({
          "first_name": inputFirstName._props.inputValue,
          "second_name": inputSecondName._props.inputValue,
          "display_name": inputDisplayName._props.inputValue,
          "login": inputLogin._props.inputValue,
          "email": inputEmail._props.inputValue,
          "phone": inputPhone._props.inputValue
        })
      }
    },
  },
});

const sidebarLayout = new LayoutSidebar('div', {
  sidebar: backSidebar,
  content: [avatar, profileForm, button],
  'content-class': 'content_height_507',
  attr: {
    class: 'container container_column',
  },
});

export default sidebarLayout;

