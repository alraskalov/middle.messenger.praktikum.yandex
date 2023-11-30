import ChatScreen from './layouts/chatScreen';
import Avatar from '../../components/avatar';
import SubmitButton from '../../components/submitButton';
import SafetyPinButton from '../../components/safetyPinButton';
import SettingsButton from '../../components/settingsButton';
import ChatSidebar from './layouts/chatSidebar';
import SearchInput from './components/searchInput';
import ChatList from './components/chatList';
import ChatListElement from './components/chatListElement';
import ChatInput from './components/chatInput';
import validate from '../../utils/scripts/validate/validate';
import Wrapper from "../../components/wrapper";
import "./index.scss"

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
    change: (event) => {
      const target = event.target as HTMLInputElement;

      const { isValid } = validate(target.value, 'message');

      inputMessage.setProps({ inputValue: target.value, isValid });
    },
  },
});

const chatScreen = new ChatScreen('section', {
  avatar: new Avatar('div', {
    src: '/assets/icons/avatar.svg',
  }),
  submitButton: new SubmitButton('div', {
    events: {
      click: (event) => {
        event.preventDefault();

        if (inputMessage._props.isValid) {
          console.log({
            inputMessage: inputMessage._props.inputValue,
          });
        }
      },
    },
  }),
  safetyPinButton: new SafetyPinButton('div', {}),
  settingsButton: new SettingsButton('div', {}),
  userName: 'Вадим',
  input: inputMessage,
  attr: {
    class: 'chat-screen',
  },
});

const chatSidebar = new ChatSidebar('aside', {
  search: new SearchInput('div', {
    attr: {
      class: 'search-input-wrapper',
    },
  }),
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
    element: [chatScreen],
    attr: {
        class: "main",
    }
})

const chat = new Wrapper("div", {
    element: [chatSidebar, main],
    attr: {
        class: "container",
    }
})

export default chat;
