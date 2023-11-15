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
      labelText: 'Почта',
      inputName: 'email',
      inputType: 'email',
      inputValue: 'pochta@yandex.ru',
      inputPlaceholder: '',
      inputDisabled: true,
      error: '',
      isValid: true,
      attr: {
        class: 'profile-label',
      },
    }),
    new ProfileInput('label', {
      labelText: 'Логин',
      inputName: 'login',
      inputType: 'text',
      inputValue: 'ivanivanov',
      inputPlaceholder: '',
      inputDisabled: true,
      error: '',
      isValid: true,
      attr: {
        class: 'profile-label',
      },
    }),
    new ProfileInput('label', {
      labelText: 'Имя',
      inputName: 'first_name',
      inputType: 'text',
      inputValue: 'Иван',
      inputPlaceholder: '',
      inputDisabled: true,
      error: '',
      isValid: true,
      attr: {
        class: 'profile-label',
      },
    }),
    new ProfileInput('label', {
      labelText: 'Фамилия',
      inputName: 'second_name',
      inputType: 'text',
      inputValue: 'Иванов',
      inputPlaceholder: '',
      inputDisabled: true,
      error: '',
      isValid: true,
      attr: {
        class: 'profile-label',
      },
    }),
    new ProfileInput('label', {
      labelText: 'Имя в чате',
      inputName: 'display_name',
      inputType: 'text',
      inputValue: 'Иван',
      inputPlaceholder: '',
      inputDisabled: true,
      error: '',
      isValid: true,
      attr: {
        class: 'profile-label',
      },
    }),
    new ProfileInput('label', {
      labelText: 'Телефон',
      inputName: 'phone',
      inputType: 'tel',
      inputValue: '+79099673030',
      inputPlaceholder: '',
      inputDisabled: true,
      error: '',
      isValid: true,
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
