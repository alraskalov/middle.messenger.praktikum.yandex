import Avatar from '../../../../components/avatar';
import LayoutSidebar from '../../layouts/sidebar';
import BackButton from '../../../../components/backButton';
import BackSidebar from '../../components/backSidebar';
import ProfileForm from '../../components/profileForm';
import ProfileInput from '../../components/profileInput';
import Button from '../../../../components/button';
import renderDOM from '../../../../utils/scripts/renderDOM';

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
});

const backSidebar = new BackSidebar('aside', {
  button: backButton,
  attr: {
    class: 'back-sidebar',
  },
});

const button = new Button('button', {
  'button-text': 'Сохранить',
  attr: {
    class: 'button',
  },
});

const profileForm = new ProfileForm('form', {
  'form-title': '',
  inputs: [
    new ProfileInput('label', {
      'label-text': 'Старый пароль',
      'input-name': 'oldPassword',
      'input-type': 'password',
      'input-value': '123123',
      'input-placeholder': '',
      'input-disabled': false,
      attr: {
        class: 'profile-label',
      },
    }),
    new ProfileInput('label', {
      'label-text': 'Новый пароль',
      'input-name': 'newPassword',
      'input-type': 'password',
      'input-value': '123123',
      'input-placeholder': '',
      'input-disabled': false,
      attr: {
        class: 'profile-label',
      },
    }),
    new ProfileInput('label', {
      'label-text': 'Повторите новый пароль',
      'input-name': 'repeatPassword',
      'input-type': 'password',
      'input-value': '123123',
      'input-placeholder': '',
      'input-disabled': false,
      attr: {
        class: 'profile-label',
      },
    }),
  ],
  attr: {
    class: 'profile-form',
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

renderDOM('body', sidebarLayout);
