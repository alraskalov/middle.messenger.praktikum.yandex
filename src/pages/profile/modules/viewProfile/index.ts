import Avatar from '../../../../components/avatar';
import LayoutSidebar from '../../layouts/sidebar';
import BackButton from '../../../../components/backButton';
import BackSidebar from '../../components/backSidebar';
import ProfileForm from '../../components/profileForm';
import ProfileInput from '../../components/profileInput';
import LinkList from '../../components/linkList';
import ListElement from '../../components/listElement';
import Router from "../../../../utils/scripts/router/Router.ts";
import Routes from "../../../../utils/scripts/router/Routes.ts";
import {authController} from "../../../../controllerApi";
import Form from "../../../../components/form";
import ButtonsBlockWrapper from "../../../auth/layouts/buttonsBlockWrapper";
import DropdownForm from "../../../../components/dropdownForm";
import Popup from "../../../../components/popup";
import Button from "../../../../components/button";

const form = new Form('form', {
  formTitle: 'Загрузить изображение',
  wrapper: [
    new ButtonsBlockWrapper('div', {
      buttons: [new ProfileInput('label', {
        labelText: '',
        inputName: 'avatar',
        inputType: 'file',
        inputValue: '',
        inputDisabled: false,
        isValid: true,
        attr: {
          class: 'profile-label',
        },
      }),
        new ButtonsBlockWrapper('div', {
          buttons: [
            new Button('button', {
              'button-text': 'Загрузить аватар',
              "attr": {
                class: 'button',
              },
              "events": {
                click: (e) => {
                  e.preventDefault();
                  sidebarLayout.sendFile("dropdown-form")

                  dropdown.hide()
                },
              },
            }),
          ],

          attr: {
            class: 'buttons-block-wrapper',
          },
        })
      ],

      attr: {
        class: 'buttons-block-wrapper',
      },
    })
  ],
  attr: {
    class: 'dropdown-form',
    name: "dropdown-form",
  },
})

const dropDownWrapper = new Popup("div", {
  element: form,
  attr: {
    class: 'popup',
  },
})

const dropdown = new DropdownForm("div", {
  isVisible: false,
  element: dropDownWrapper,
  attr: {
    class: "dropdown"
  }
})
dropdown.hide()


const avatar = new Avatar(
  'div',
  {
    src: ``,
    attr: {
      class: 'avatar-wrapper avatar-wrapper_edit',
    },
    events: {
      click: () => {

        dropdown.show()
      }
    }
  },
);

const backButton = new BackButton('button', {
  attr: {
    class: 'back-button',
  },
    events: {
        click: () => {
            Router.go(Routes.Chat)
        }
    }
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
      element: new Button('button', {
        'button-text': 'Изменить данные',
        "attr": {
          class: 'link link_regular link_button',
        },
        "events": {
          click: (e) => {
            e.preventDefault();

            Router.go(Routes.EditDataProfile)

          },
        },
      }),
      attr: {
        class: 'list-element',
      },
    }),
    new ListElement('li', {
      element:
          new Button('button', {
            'button-text': 'Изменить пароль',
            "attr": {
              class: 'link link_regular link_button',
            },
            "events": {
              click: (e) => {
                e.preventDefault();

                Router.go(Routes.EditProfilePassword)

              },
            },
          }),
      attr: {
        class: 'list-element',
      },
    }),
    new ListElement('li', {
      element:
          new Button('button', {
            'button-text': 'Выйти',
            "attr": {
              class: 'link link_regular link_red link_button',
            },
            "events": {
              click: (e) => {
                e.preventDefault();

                authController.logOut();
              },
            },
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
  inputs: [
    new ProfileInput('label', {
      labelText: 'Почта',
      inputName: 'email',
      inputType: 'email',
      inputValue: '',
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
      inputValue: '',
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
      inputValue: '',
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
      inputValue: '',
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
      inputValue: '',
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
      inputValue: '',
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
  avatar: avatar,
  form: profileForm,
  dropdown: dropdown,
  buttons: linkList,
  'content-class': 'content_height_576',
  attr: {
    class: 'container container_column',
  },
});

export default sidebarLayout;
