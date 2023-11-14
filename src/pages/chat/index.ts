import ChatScreen from './layouts/chatScreen';
import Avatar from '../../components/avatar';
import SubmitButton from '../../components/submitButton';
import SafetyPinButton from '../../components/safetyPinButton';
import SettingsButton from '../../components/settingsButton';
import ChatSidebar from './layouts/chatSidebar';
import SearchInput from './components/searchInput';
import ChatList from './components/chatList';
import ChatListElement from './components/chatListElement';
import renderDOM from '../../utils/scripts/renderDOM';
import ChatInput from './components/chatInput';

const chatScreen = new ChatScreen('section', {
  avatar: new Avatar('div', {
    src: '/assets/icons/avatar.svg',
  }),
  submitButton: new SubmitButton('div', {}),
  safetyPinButton: new SafetyPinButton('div', {}),
  settingsButton: new SettingsButton('div', {}),
  userName: 'Вадим',
  input: new ChatInput('label', {
    inputName: 'message',
    inputType: 'text',
    inputValue: '',
    inputPlaceholder: 'Сообщение',
    attr: {
      class: 'label-message',
    },
  }),
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

renderDOM('.main', chatScreen);

renderDOM('.container', chatSidebar);
