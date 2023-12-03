import Avatar from '../../../../components/avatar';
import LayoutSidebar from '../../layouts/sidebar';
import BackButton from '../../../../components/backButton';
import BackSidebar from '../../components/backSidebar';
import ProfileForm from '../../components/profileForm';
import Button from '../../../../components/button';
import Router from "../../../../utils/scripts/router/Router.ts";
import Routes from "../../../../utils/scripts/router/Routes.ts";
import {inputNewPassword, inputOldPassword, inputRepeatPassword} from "../data.ts";

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
  avatar: avatar,
  form: profileForm,
  buttons: button,
  'content-class': 'content_height_507',
  attr: {
    class: 'container container_column',
  },
});

export default sidebarLayout;
