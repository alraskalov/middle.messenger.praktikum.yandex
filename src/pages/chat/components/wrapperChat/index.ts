import template from './wrapper.template';
import Block from "../../../../utils/scripts/Block/Block.ts";
import connect from "../../../../utils/scripts/store/connect.ts";
import ChatListElement from "../chatListElement";
import Avatar from "../../../../components/avatar";
import store from "../../../../utils/scripts/store";
import {chatController} from "../../../../controllerApi";
import isEqual from "../../../../utils/scripts/isEqual.ts";
import ChatScreen from "../../layouts/chatScreen";
import SubmitButton from "../../../../components/submitButton";
import SafetyPinButton from "../../../../components/safetyPinButton";
import ChatInput from "../chatInput";
import validate from "../../../../utils/scripts/validate/validate.ts";
import Message from "../message";
import Button from "../../../../components/button";
import Form from "../../../../components/form";
import ButtonsBlockWrapper from "../../../auth/layouts/buttonsBlockWrapper";
import Popup from "../../../../components/popup";
import DropdownForm from "../../../../components/dropdownForm";
import Input from "../../../../components/input";

interface IProps {
    first: Block;
    second: Block;
    third: Block;
    attr?: {
        [key: string]: unknown;
    }
}

class WrapperChat extends Block {
    constructor(tag: string = 'div', _props: IProps) {
        super(tag, _props);
    }

    createDeleteUserDropdown() {
        const inputDeleteUser = new Input('label', {
            labelText: '',
            inputName: 'add_user',
            inputType: 'number',
            inputValue: '',
            inputPlaceholder: '',
            error: '',
            isValid: false,
            attr: {
                class: 'label',
            },
            events: {
                change: (event) => {
                    const target = event.target as HTMLInputElement;

                    const { message, isValid } = validate(target.value, 'add_user');

                    inputDeleteUser.setProps({ error: message, inputValue: target.value, isValid });
                },
            },
        })

        const buttonDeleteUser = new ButtonsBlockWrapper('div', {
            buttons: [
                new Button('button', {
                    'button-text': 'Удалить пользователя',
                    "attr": {
                        class: 'button button_red',
                    },
                    "events": {
                        click: (e) => {
                            e.preventDefault();
                            chatController.removeUserFromChat(this._props.selectedChat, Number(inputDeleteUser._props.inputValue))
                            chatController.updateChats()
                                .catch(() => false)
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
            formTitle: 'Введите имя пользователя',
            wrapper: [
                new ButtonsBlockWrapper('div', {
                    buttons: [inputDeleteUser, buttonDeleteUser],

                    attr: {
                        class: 'buttons-block-wrapper',
                    },
                })
            ],
            attr: {
                class: 'dropdown-form',
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
                class: "dropdown dropdown_height"
            }
        })
        dropdown.hide()

        return dropdown;
    }

    createAddUserDropdown() {
        const inputAddUser = new Input('label', {
            labelText: '',
            inputName: 'add_user',
            inputType: 'text',
            inputValue: '',
            inputPlaceholder: '',
            error: '',
            isValid: false,
            attr: {
                class: 'label',
            },
            events: {
                change: (event) => {
                    const target = event.target as HTMLInputElement;

                    const { message, isValid } = validate(target.value, 'add_user');

                    inputAddUser.setProps({ error: message, inputValue: target.value, isValid });
                },
            },
        })

        const buttonAddUser = new ButtonsBlockWrapper('div', {
            buttons: [
                new Button('button', {
                    'button-text': 'Добавить пользователя',
                    "attr": {
                        class: 'button',
                    },
                    "events": {
                        click: (e) => {
                            e.preventDefault();
                            chatController.addUserToChat(this._props.selectedChat, Number(inputAddUser._props.inputValue))
                            chatController.updateChats()
                                .catch(() => false)
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
            formTitle: 'Введите имя пользователя',
            wrapper: [
                new ButtonsBlockWrapper('div', {
                    buttons: [inputAddUser, buttonAddUser],

                    attr: {
                        class: 'buttons-block-wrapper',
                    },
                })
            ],
            attr: {
                class: 'dropdown-form',
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
                class: "dropdown dropdown_height"
            }
        })
        dropdown.hide()

        return dropdown;
    }

    createAddUserButton(userDropdown: Block) {
        return new Button('button', {
            'button-text': 'Добавить пользователя',
            attr: {
                class: 'button',
            },
            events: {
                click: (e) => {
                    e.preventDefault();

                    userDropdown.show()
                },
            },
        })
    }

    createDeleteUserButton(userDropdown: Block) {
        return new Button('button', {
            'button-text': 'Удалить пользователя',
            attr: {
                class: 'button button_red',
            },
            events: {
                click: (e) => {
                    e.preventDefault();

                    userDropdown.show()
                },
            },
        })
    }

    updateChat() {
        const userDropdownAdd = this.createAddUserDropdown()
        const userDropdownDelete = this.createDeleteUserDropdown()

        const addUserButton = this.createAddUserButton(userDropdownAdd)
        const deleteUserButton = this.createDeleteUserButton(userDropdownDelete)

        const currentChat = this._lists.chats.filter((el: any) => el.id === this._props.selectedChat)
        this._children.main._lists.element = currentChat.map((el: any) => {
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
                    change: (event: Event) => {
                        const target = event.target as HTMLInputElement;

                        const {isValid} = validate(target.value, 'message');

                        inputMessage.setProps({inputValue: target.value, isValid});
                    },
                },
            })

            return new ChatScreen('section', {
                avatar: new Avatar('div', {
                    src: '/assets/icons/avatar.svg',
                }),
                submitButton: new SubmitButton('div', {
                    events: {
                        click: (event) => {
                            event.preventDefault();

                            if (inputMessage._props.isValid) {
                                inputMessage.sendMessage(inputMessage._props.inputValue)

                                inputMessage.setProps({inputValue: ''})
                            }
                        },
                    },
                }),
                safetyPinButton: new SafetyPinButton('div', {}),
                settingsButton: [addUserButton, deleteUserButton],
                userName: el.title,
                input: inputMessage,
                dropdowns: [userDropdownAdd, userDropdownDelete],
                listMessage: this._props.messages[this._props.selectedChat].map((el: any) => {
                    const isMe = el.user_id === this._props.storeData.id
                    return new Message("div", {
                        value: el.content,
                        attr: {
                            class: `message ${isMe ? "message_me" : "message_other"}`
                        }
                    })
                }),
                attr: {
                    class: 'chat-screen',
                },
            })
        })
    }
    setChats() {
        this._children.chatSidebar._children.chatList._lists["element"] = this._lists.chats.map((el: any) => {
            return new ChatListElement('li', {
                avatar: new Avatar('div', {
                    src: '/assets/icons/avatar.svg',
                    attr: {
                        class: 'chat-list-element__avatar-wrapper',
                    },
                }),
                userName: el.title,
                userMessage: el.last_message?.content || "Сообщений не было...",
                messageDate: el.last_message?.time || '',
                messageCount: el.unread_count,
                attr: {
                    class: 'chat-list-element',
                },
                events: {
                    click: () => {
                        store.set('selectedChat', el.id)
                        chatController.selectChat(el.id);

                        this.updateChat()
                    }
                }
            })
        })
    }

    _init() {
        chatController.fetchChats()
            .catch(() => false)
    }

    componentDidUpdate(oldProps: any, newProps: any): boolean {
        this.updateChat()
        this.setChats()

        return isEqual(oldProps, newProps)
    }

    render() {
        this.setChats()

        return this.compile(template, this._props);
    }
}


const withChats = connect((state) => ({ storeData: { ...state.user }.data, chats: [...(state.chats || [])], selectedChat: state.selectedChat || null, messages: state.messages}));

export default withChats(WrapperChat)
