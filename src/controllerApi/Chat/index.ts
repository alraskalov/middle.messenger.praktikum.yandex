import {ChatApi} from "../../classApi";
import store from "../../utils/scripts/store";
import {Chat} from "./types.ts";
import messagesController from "./MessageController.ts";

class ChatController {
    private readonly api: ChatApi;

    constructor() {
        this.api = new ChatApi();
    }

    create = async (title: string) => {
        try {
            await this.api.create(title);
            await this.fetchChats();

            store.set('chats.error', undefined);
        } catch (error: unknown) {
            store.set('chats.error', (error as Error).message);
            console.error((error as Error).message);
        }
    };

    updateChats = async () => {
        const chats: Chat[] = await this.api.read() as Chat[];

        store.set('chats', chats);
    }

    fetchChats = async () => {
        const chats: Chat[] = await this.api.read() as Chat[];

        chats.map(async (chat) => {
            const token = await this.getToken(chat.id);
            await messagesController.connect(chat.id, token);
        });

        store.set('chats', chats);
    };

    addUserToChat = (id: number, userId: number) => {
        this.api.addUsers(id, [userId])
            .then(r => r);
    };

    removeUserFromChat = (id: number, userId: number) => {
        this.api.deleteUsers(id, [userId])
            .then(r => r);
    };

    delete = async (id: number) => {
        await this.api.delete(id);
        await this.fetchChats();
    };

    getToken = (id: number) => this.api.getToken(id);

    selectChat = async (id: number) => {
        const token = await this.getToken(id);
        messagesController.connect(id, token);
        store.set('selectedChat', id);
    };
}

export const chatController = new ChatController();
