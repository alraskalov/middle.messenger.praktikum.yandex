import Avatar from '../../../../components/avatar';
import LayoutSidebar from '../../layouts/sidebar';
import BackButton from '../../../../components/backButton';
import BackSidebar from '../../components/backSidebar';
import ProfileForm from '../../components/profileForm';
import Button from '../../../../components/button';
import Router from "../../../../utils/scripts/router/Router.ts";
import Routes from "../../../../utils/scripts/router/Routes.ts";
import {inputDisplayName, inputEmail, inputFirstName, inputLogin, inputPhone, inputSecondName} from "../data.ts";

const avatar = new Avatar(
  'div',
  {
    src: '',
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
  avatar: avatar,
  form: profileForm,
  buttons: button,
  'content-class': 'content_height_507',
  attr: {
    class: 'container container_column',
  },
});

export default sidebarLayout;

