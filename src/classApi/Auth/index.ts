import Api from "../../utils/scripts/api/Api.ts";
import {ValidError} from "../types.ts";
import {SignIn, SignUp} from "./types.ts";

export class AuthApi extends Api {
    constructor() {
        super('/auth');
    }

    public async signIn(data: SignIn) {
        try {
            await this.request.post('/signin', {data});
            return true;
        } catch (e: unknown) {
            const {reason} = e as ValidError;
            throw new Error(reason);
        }
    }

    public async signUp(data: SignUp) {
        try {
            await this.request.post('/signup', {data});
            return true;
        } catch (e: unknown) {
            const {reason} = e as ValidError;
            throw new Error(reason);
        }
    }

    public read = () => this.request.get('/user');

    public async logOut() {
        try {
            await this.request.post('/logout');
            return true;
        } catch (e: unknown) {
            throw new Error(e as string);
        }
    }
}
