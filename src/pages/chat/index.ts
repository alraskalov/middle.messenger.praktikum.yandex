import Avatar from '../../components/avatar';
import ChatSidebar from './layouts/chatSidebar';
import SearchInput from './components/searchInput';
import ChatList from './components/chatList';
import ChatListElement from './components/chatListElement';
import ChatInput from './components/chatInput';
import validate from '../../utils/scripts/validate/validate';
import "./index.scss"
import Router from "../../utils/scripts/router/Router.ts";
import Routes from "../../utils/scripts/router/Routes.ts";
import Button from "../../components/button";
import Form from "../../components/form";
import ButtonsBlockWrapper from "../auth/layouts/buttonsBlockWrapper";
import ProfileInput from "../profile/components/profileInput";
import Popup from "../../components/popup";
import DropdownForm from "../../components/dropdownForm";
import {chatController} from "../../controllerApi";
import WrapperChat from "./components/wrapperChat";
import Wrapper from "../../components/wrapper";

const inputMessage = new ChatInput('label', {
  inputName: 'message',
  inputType: 'text',
  inputValue: '',
  inputPlaceholder: 'Сообщение',
  isValid: false,
  attr: {
    class: 'label-message',
  },
  events: {
    change: (event: InputEvent) => {
      const target = event.target as HTMLInputElement;

      const { isValid } = validate(target.value, 'message');

      inputMessage.setProps({ inputValue: target.value, isValid });
    },
  },
});

const inputCreateChat = new ProfileInput('label', {
  labelText: '',
  inputName: 'create_chat',
  inputType: 'text',
  inputValue: '',
  inputDisabled: false,
  isValid: true,
  attr: {
    class: 'profile-label',
  },
  events: {
    change: (event: InputEvent) => {
      const target = event.target as HTMLInputElement;

      const { message, isValid } = validate(target.value, 'create_chat');

      inputCreateChat.setProps({ error: message, inputValue: target.value, isValid });
    }
  }
})

const buttonCreateChat = new ButtonsBlockWrapper('div', {
  buttons: [
    new Button('button', {
      'button-text': 'Создать чат',
      "attr": {
        class: 'button',
      },
      "events": {
        click: (e) => {
          e.preventDefault();

          chatController.create(inputCreateChat._props.inputValue);
          inputCreateChat.setProps({inputValue: ""})

          dropdown.hide()
        },
      },
    }),
  ],

  attr: {
    class: 'buttons-block-wrapper',
  },
})

const form = new Form('form', {
  formTitle: 'Введите название чата',
  wrapper: [
    new ButtonsBlockWrapper('div', {
      buttons: [inputCreateChat, buttonCreateChat,
          new Button('button', {
          'button-text': 'Закрыть окно',
          "attr": {
              class: 'button',
          },
          "events": {
              click: (e) => {
                  e.preventDefault();

                  dropdown.hide()
              },
          },
      }),],

      attr: {
        class: 'buttons-block-wrapper',
      },
    }),
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

const chatSidebar = new ChatSidebar('aside', {
  search: new SearchInput('div', {
    attr: {
      class: 'search-input-wrapper',
    },
  }),
  buttons: [
    new Button('button', {
      'button-text': 'Профиль',
      "attr": {
        class: 'button',
      },
      "events": {
        click: (e) => {
          e.preventDefault();

          Router.go(Routes.Profile)
        },
      },
    }),
    new Button('button', {
      'button-text': 'Создать чат',
      "attr": {
        class: 'button',
      },
      "events": {
        click: (e) => {
          e.preventDefault();

          dropdown.show()
        },
      },
    }),
  ],
  chatList: new ChatList('ul', {
    element: [
      new ChatListElement('li', {
        avatar: new Avatar('div', {
          src: '/assets/icons/avatar.svg',
          attr: {
            class: 'chat-list-element__avatar-wrapper',
          },
        }),
        userName: 'Иван',
        userMessage: 'Раз Два Три',
        messageDate: 'Пн',
        messageCount: '1',
        attr: {
          class: 'chat-list-element',
        },
      }), new ChatListElement('li', {
        avatar: new Avatar('div', {
          src: '/assets/icons/avatar.svg',
          attr: {
            class: 'chat-list-element__avatar-wrapper',
          },
        }),
        userName: 'Иван',
        userMessage: 'Раз Два Три',
        messageDate: 'Пн',
        messageCount: '1',
        attr: {
          class: 'chat-list-element',
        },
      }),
      new ChatListElement('li', {
        avatar: new Avatar('div', {
          src: '/assets/icons/avatar.svg',
          attr: {
            class: 'chat-list-element__avatar-wrapper',
          },
        }),
        userName: 'Иван',
        userMessage: 'Раз Два Три',
        messageDate: 'Пн',
        messageCount: '1',
        attr: {
          class: 'chat-list-element',
        },
      }),
      new ChatListElement('li', {
        avatar: new Avatar('div', {
          src: '/assets/icons/avatar.svg',
          attr: {
            class: 'chat-list-element__avatar-wrapper',
          },
        }),
        userName: 'Иван',
        userMessage: 'Раз Два Три',
        messageDate: 'Пн',
        messageCount: '1',
        attr: {
          class: 'chat-list-element',
        },
      }),
      new ChatListElement('li', {
        avatar: new Avatar('div', {
          src: '/assets/icons/avatar.svg',
          attr: {
            class: 'chat-list-element__avatar-wrapper',
          },
        }),
        userName: 'Иван',
        userMessage: 'Раз Два Три',
        messageDate: 'Пн',
        messageCount: '1',
        attr: {
          class: 'chat-list-element',
        },
      }),
      new ChatListElement('li', {
        avatar: new Avatar('div', {
          src: '/assets/icons/avatar.svg',
          attr: {
            class: 'chat-list-element__avatar-wrapper',
          },
        }),
        userName: 'Иван',
        userMessage: 'Раз Два Три',
        messageDate: 'Пн',
        messageCount: '1',
        attr: {
          class: 'chat-list-element',
        },
      }),
      new ChatListElement('li', {
        avatar: new Avatar('div', {
          src: '/assets/icons/avatar.svg',
          attr: {
            class: 'chat-list-element__avatar-wrapper',
          },
        }),
        userName: 'Иван',
        userMessage: 'Раз Два Три',
        messageDate: 'Пн',
        messageCount: '1',
        attr: {
          class: 'chat-list-element',
        },
      }),
      new ChatListElement('li', {
        avatar: new Avatar('div', {
          src: '/assets/icons/avatar.svg',
          attr: {
            class: 'chat-list-element__avatar-wrapper',
          },
        }),
        userName: 'Иван',
        userMessage: 'Раз Два Три',
        messageDate: 'Пн',
        messageCount: '1',
        attr: {
          class: 'chat-list-element',
        },
      }),
      new ChatListElement('li', {
        avatar: new Avatar('div', {
          src: '/assets/icons/avatar.svg',
          attr: {
            class: 'chat-list-element__avatar-wrapper',
          },
        }),
        userName: 'Иван',
        userMessage: 'Раз Два Три',
        messageDate: 'Пн',
        messageCount: '1',
        attr: {
          class: 'chat-list-element',
        },
      }),
      new ChatListElement('li', {
        avatar: new Avatar('div', {
          src: '/assets/icons/avatar.svg',
          attr: {
            class: 'chat-list-element__avatar-wrapper',
          },
        }),
        userName: 'Иван',
        userMessage: 'Раз Два Три',
        messageDate: 'Пн',
        messageCount: '1',
        attr: {
          class: 'chat-list-element',
        },
      }),
    ],
    attr: {
      class: 'chat-list',
    },
  }),
  attr: {
    class: 'chat-sidebar',
  },
});

const main = new Wrapper("main", {
  element: [],
    attr: {
        class: "main",
    }
})

const chat = new WrapperChat("div", {
  dropdown: dropdown,
  chatSidebar: chatSidebar,
  main: main,
    attr: {
        class: "container",
    }
})
export default chat;
