import {AuthApi} from "../../classApi";
import store from "../../utils/scripts/store";
import {SignIn, SignUp} from "../../classApi/Auth/types.ts";
import Router from "../../utils/scripts/router/Router.ts";
import Routes from "../../utils/scripts/router/Routes.ts";
import {chatController} from "../Chat";

class AuthController {
    private api = new AuthApi();

    signUp = async (data: SignUp) => {
        try {
            await this.api.signUp(data);
            await this.fetchUser();

            store.set('user.error', undefined);

            Router.go(Routes.Chat);
        } catch (error: unknown) {
            store.set('user.error', (error as Error).message);
            console.error((error as Error).message);
        }
    };

    async signIn(data: SignIn) {
        try {
            await this.api.signIn(data);
            await this.fetchUser();

            store.set('user.error', undefined);

            await chatController.fetchChats()
                .catch((err) => console.log(err))


            Router.go(Routes.Chat);
        } catch (error: unknown) {
            store.set('user.error', (error as Error).message);
            console.error((error as Error).message);
        }
    }

    async logOut() {
        try {
            await this.api.logOut();

            store.set('user.error', undefined);
            Router.go(Routes.Root);
        } catch (error: unknown) {
            store.set('user.error', error);
            console.error((error as Error).message);
        }
    }

    async fetchUser() {
        const user = await this.api.read();
        store.set('user.data', user);
    }
}

export const authController = new AuthController();
