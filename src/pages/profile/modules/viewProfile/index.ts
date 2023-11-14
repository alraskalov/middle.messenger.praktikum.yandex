import Avatar from '../../../../components/avatar';
import LayoutSidebar from '../../layouts/sidebar';
import BackButton from '../../../../components/backButton';
import BackSidebar from '../../components/backSidebar';
import ProfileForm from '../../components/profileForm';
import ProfileInput from '../../components/profileInput';
import renderDOM from '../../../../utils/scripts/renderDOM';
import LinkList from '../../components/linkList';
import ListElement from '../../components/listElement';
import Link from '../../../../components/link';

const avatar = new Avatar(
  'div',
  {
    src: '/assets/icons/avatar.svg',
    attr: {
      class: 'avatar-wrapper avatar-wrapper_edit',
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

const linkList = new LinkList('ul', {
  element: [
    new ListElement('li', {
      element: new Link('div', {
        'link-class': 'link_regular',
        'link-text': 'Изменить данные',
        'link-href': '/src/pages/profile/modules/editDataProfile/index.html',
      }),
      attr: {
        class: 'list-element',
      },
    }),
    new ListElement('li', {
      element: new Link('div', {
        'link-class': 'link_regular',
        'link-text': 'Изменить пароль',
        'link-href': '/src/pages/profile/modules/editPasswordProfile/index.html',
      }),
      attr: {
        class: 'list-element',
      },
    }),
    new ListElement('li', {
      element: new Link('div', {
        'link-class': 'link_regular link_red',
        'link-text': 'Выйти',
        'link-href': '/src/pages/auth/modules/login/index.html',
      }),
      attr: {
        class: 'list-element',
      },
    }),
  ],
  attr: {
    class: 'link-list',
  },
});

const profileForm = new ProfileForm('form', {
  'form-title': 'Иван',
  inputs: [
    new ProfileInput('label', {
      'label-text': 'Почта',
      'input-name': 'email',
      'input-type': 'email',
      'input-value': 'pochta@yandex.ru',
      'input-placeholder': '',
      'input-disabled': true,
      attr: {
        class: 'profile-label',
      },
    }),
    new ProfileInput('label', {
      'label-text': 'Логин',
      'input-name': 'login',
      'input-type': 'text',
      'input-value': 'ivanivanov',
      'input-placeholder': '',
      'input-disabled': true,
      attr: {
        class: 'profile-label',
      },
    }),
    new ProfileInput('label', {
      'label-text': 'Имя',
      'input-name': 'first_name',
      'input-type': 'text',
      'input-value': 'Иван',
      'input-placeholder': '',
      'input-disabled': true,
      attr: {
        class: 'profile-label',
      },
    }),
    new ProfileInput('label', {
      'label-text': 'Фамилия',
      'input-name': 'second_name',
      'input-type': 'text',
      'input-value': 'Иванов',
      'input-placeholder': '',
      'input-disabled': true,
      attr: {
        class: 'profile-label',
      },
    }),
    new ProfileInput('label', {
      'label-text': 'Имя в чате',
      'input-name': 'display_name',
      'input-type': 'text',
      'input-value': 'Иван',
      'input-placeholder': '',
      'input-disabled': true,
      attr: {
        class: 'profile-label',
      },
    }),
    new ProfileInput('label', {
      'label-text': 'Телефон',
      'input-name': 'phone',
      'input-type': 'tel',
      'input-value': '+7 (909) 967 30 30',
      'input-placeholder': '',
      'input-disabled': true,
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
  content: [avatar, profileForm, linkList],
  'content-class': 'content_height_576',
  attr: {
    class: 'container container_column',
  },
});

renderDOM('body', sidebarLayout);
