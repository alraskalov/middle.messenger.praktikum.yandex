import WebSocketTransport from "../../utils/scripts/api/WebSocket.ts";
import {SocketEvent} from "../../utils/scripts/api/types.ts";
import store from "../../utils/scripts/store";
import {Message} from "./types.ts";
import {chatController} from "./index.ts";

class MessagesController {
    private sockets: Map<number, WebSocketTransport> = new Map();

    async connect(id: number, token: string) {
        if (this.sockets.has(id)) {
            return;
        }

        const userId = store.getState().user.data.id;

        const WebTransport = new WebSocketTransport(`wss://ya-praktikum.tech/ws/chats/${userId}/${id}/${token}`);

        this.sockets.set(id, WebTransport);

        await WebTransport.connect();

        this.subscribe(WebTransport, id);
        this.fetchOldMessages(id);
    }

    sendMessage(id: number, message: string) {
        const socket = this.sockets.get(id);

        if (!socket) {
            throw new Error(`Chat ${id} is not connected`);
        }

        socket.send({
            type: 'message',
            content: message,
        });
    }

    fetchOldMessages(id: number) {
        const socket = this.sockets.get(id);

        if (!socket) {
            throw new Error(`Chat is not connected`);
        }

        socket.send({ type: 'get old', content: '0' });
    }

    private onMessage(id: number, messages: Message | Message[]) {
        let messagesToAdd: Message[] = [];

        if (Array.isArray(messages)) {
            messagesToAdd = messages.reverse();
        } else if (messages.type === "user connected") {
            return;
        } else {
            messagesToAdd.push(messages);
        }

        const currentMessages = (store.getState().messages || {})[id] || [];

        messagesToAdd = [...currentMessages, ...messagesToAdd];

        store.set(`messages.${id}`, messagesToAdd);

        chatController.updateChats()
            .catch(() => false)
    }

    private onClose(id: number) {
        this.sockets.delete(id);
    }

    private subscribe(transport: WebSocketTransport, id: number) {
        transport.on(SocketEvent.Message, (message) => this.onMessage(id, message as Message | Message[]));
        transport.on(SocketEvent.Close, () => this.onClose(id));
    }
}

const messagesController = new MessagesController();

export default messagesController;
