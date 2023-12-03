import Router from "./utils/scripts/router/Router.ts";
import Routes from "./utils/scripts/router/Routes.ts";
import login from "./pages/auth/modules/login";
import signup from "./pages/auth/modules/signup";
import chat from "./pages/chat";
import viewProfile from "./pages/profile/modules/viewProfile";
import error404 from "./pages/error/modules/404";
import editDataProfile from "./pages/profile/modules/editDataProfile";
import editPasswordProfile from "./pages/profile/modules/editPasswordProfile";
import error500 from "./pages/error/modules/500";
import {authController, chatController} from "./controllerApi";

document.addEventListener("DOMContentLoaded", async () => {
    Router
        .use(Routes.Root, login)
        .use(Routes.Signup, signup)
        .use(Routes.Chat, chat)
        .use(Routes.Profile, viewProfile)
        .use(Routes.EditDataProfile, editDataProfile)
        .use(Routes.EditProfilePassword, editPasswordProfile)
        .use(Routes.Error_404, error404)
        .use(Routes.Error_500, error500)


    let isProtectedRoute: boolean = true;

    switch (window.location.pathname) {
        case Routes.Error_404:
            isProtectedRoute = false;
            break;
        case Routes.Login:
            isProtectedRoute = false;
            break;
        case Routes.Signup:
            isProtectedRoute = false;
            break;
        case Routes.Error_500:
            isProtectedRoute = false;
            break;
        default:
            isProtectedRoute = true;
            break;
    }

    try {
        await authController.fetchUser();
        Router.start();

        await chatController.fetchChats()
            .catch((err) => console.log(err))
            .finally(() => {
                console.log('Получили чаты');
            });

        if (!isProtectedRoute) {
            Router.go(Routes.Profile);
        }
    } catch (e) {
        Router.start();

        if (isProtectedRoute) {
            Router.go(Routes.Root);
        }
    }


})
