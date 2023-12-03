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

const inputOldPassword = new ProfileInput('label', {
  labelText: 'Старый пароль',
  inputName: 'oldPassword',
  inputType: 'password',
  inputValue: '',
  inputPlaceholder: '••••••••',
  error: '',
  isValid: false,

  inputDisabled: false,
  attr: {
    class: 'profile-label',
  },
  events: {
    change: (event: InputEvent) => {
      const target = event.target as HTMLInputElement;

      const { message, isValid } = validate(target.value, 'password');

      inputOldPassword.setProps({ error: message, inputValue: target.value, isValid });
    },
  },
});

const inputNewPassword = new ProfileInput('label', {
  labelText: 'Новый пароль',
  inputName: 'newPassword',
  inputType: 'password',
  inputValue: '',
  inputPlaceholder: '••••••••',
  error: '',
  isValid: false,

  inputDisabled: false,
  attr: {
    class: 'profile-label',
  },
  events: {
    change: (event: InputEvent) => {
      const target = event.target as HTMLInputElement;

      const { message, isValid } = validate(target.value, 'password');

      inputNewPassword.setProps({ error: message, inputValue: target.value, isValid });
    },
  },
});


const inputRepeatPassword = new ProfileInput('label', {
  labelText: 'Повторите новый пароль',
  inputName: 'repeatPassword',
  inputType: 'password',
  inputValue: '',
  inputPlaceholder: '••••••••',
  error: '',
  isValid: false,

  inputDisabled: false,
  attr: {
    class: 'profile-label',
  },
  events: {
    change: (event: InputEvent) => {
      const target = event.target as HTMLInputElement;

      const { message, isValid } = validate(target.value, 'password');

      inputRepeatPassword.setProps({ error: message, inputValue: target.value, isValid });
    },
  },
});



const profileForm = new ProfileForm('form', {
  'form-title': '',
  inputs: [
    inputOldPassword,
    inputNewPassword,
    inputRepeatPassword,
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
      if (inputOldPassword._props.isValid
          && inputNewPassword._props.isValid
          && inputRepeatPassword._props.isValid
      ) {
        profileForm.sendNewUserPassword({
            oldPassword: inputOldPassword._props.inputValue,
            newPassword: inputNewPassword._props.inputValue,
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
