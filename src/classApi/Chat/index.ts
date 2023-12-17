import Api from "../../utils/scripts/api/Api.ts";
import {ValidError} from "../types.ts";
import {Id, UserListId, Response} from "./types.ts";

export class ChatApi extends Api {
    constructor() {
        super('/chats');
    }

    create = (chatName: string) => {
        const data = { title: chatName };
        return this.request.post('/', { data });
    };

    delete = (id: number): Promise<unknown> => {
        const data = { chatId: id };
        return this.request.delete('/', { data });
    };

    read = (): Promise<unknown> => this.request.get('/');

    getUsers = (id: Id): Promise<unknown> => this.request.get(`/${id}/users`);

    async addUsers(id: Id, users: UserListId): Promise<unknown> {
        const data = {users, chatId: id};
        try {
            return await this.request.put('/users', {data});
        } catch (e: unknown) {
            const {reason} = e as ValidError;
            throw new Error(reason);
        }
    }

    async deleteUsers(id: Id, users: UserListId): Promise<unknown> {
        const data = {users, chatId: id};
        try {
            return await this.request.delete('/users', {data});
        } catch (e: unknown) {
            const {reason} = e as ValidError;
            throw new Error(reason);
        }
    }

    getToken = async (id: Id): Promise<string> => {
        const response: Response = await this.request.post(`/token/${id}`) as Response;
        return response.token;
    };
}
