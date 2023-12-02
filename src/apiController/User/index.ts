import {UserApi} from "../../classApi";
import store from "../../utils/scripts/store";
import Router from "../../utils/scripts/router/Router.ts";
import Routes from "../../utils/scripts/router/Routes.ts";
import {UserData, UserPasswordData} from "../../classApi/User/types.ts";
import {authController} from "../Auth";

class UserController {
    private api = new UserApi();

    async changeUserData(data: UserData) {
        try {
            await this.api.changeUserData(data);
            await authController.fetchUser();

            store.set('user.error', undefined);
            Router.go(Routes.Profile);
        } catch (error: unknown) {
            store.set('user.error', (error as Error).message);
            console.error((error as Error).message);
        }
    }

    async changeUserAvatar(data: FormData) {
        try {
            console.log(data);
            await this.api.changeUserAvatar(data);
            await authController.fetchUser();
            store.set('user.error', undefined);
            Router.go(Routes.Profile);
        } catch (error: unknown) {
            store.set('user.error', (error as Error).message);
            console.error((error as Error).message);
        }
    }

    async changeUserPassword(password: UserPasswordData) {
        try {
            await this.api.changeUserPassword(password);
            await authController.fetchUser();
            store.set('user.error', undefined);
        } catch (error: unknown) {
            store.set('user.error', (error as Error).message);
            console.error((error as Error).message);
        }
    }
}
export const userController = new UserController();
