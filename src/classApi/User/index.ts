import Api from "../../utils/scripts/api/Api.ts";
import {ValidError} from "../types.ts";
import {UserData, UserPasswordData} from "./types.ts";

export class UserApi extends Api {
    constructor() {
        super('/user');
    }

    public async changeUserData(data: UserData) {
        try {
            return await this.request.put('/profile', {data});
        } catch (e: unknown) {
            const {reason} = e as ValidError;
            throw new Error(reason);
        }
    }

    public async changeUserAvatar(data: FormData) {
        try {
            return await this.request.put('/profile/avatar', {data});
        } catch (e: unknown) {
            const {reason} = e as ValidError;
            throw new Error(reason);
        }
    }

    public async changeUserPassword(data: UserPasswordData) {
        try {
            return await this.request.put('/password', {data});
        } catch (e: unknown) {
            const {reason} = e as ValidError;
            throw new Error(reason);
        }
    }

    public async read(data: UserData) {
        try {
            return await this.request.get(`/${data.id}`);
        } catch (e: unknown) {
            const {reason} = e as ValidError;
            throw new Error(reason);
        }
    }
}
