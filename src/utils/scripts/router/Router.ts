import Block from "../Block/Block.ts";
import Route from "./Route.ts";
import Routes from "./Routes.ts";

class Router {
    private static __instance: Router;
    private routes: Route[] = [];
    private _currentRoute: Route | null = null;
    private history = window.history;
    private readonly _rootQuery: string = ""

    constructor(rootQuery: string) {
        if (Router.__instance) {
            return Router.__instance;
        }

        this.routes = [];
        this.history = window.history;
        this._currentRoute = null;
        this._rootQuery = rootQuery;

        Router.__instance = this;
    }

    public use(pathname: string, block: Block): Router {
        const route = new Route(pathname, block, {rootQuery: this._rootQuery});
        this.routes.push(route);

        return this;
    }

    public start() {
        window.onpopstate = (event: PopStateEvent) => {
            this._onRoute((event.currentTarget as Window).location.pathname);
        };

        this._onRoute(window.location.pathname);
    }

    private _onRoute(pathname: string) {
        const route = this.getRoute(pathname);

        if (typeof route === "undefined") {
            return this.go(Routes.Error_404)
        }

        if (this._currentRoute) {
            this._currentRoute.leave();
        }

        this._currentRoute = route;
        route.render();
    }

    public go(pathname: string) {
        this.history.pushState({}, "", pathname);
        this._onRoute(pathname);
    }

    public back() {
        this.history.back()
    }

    public forward() {
        this.history.forward()
    }

    private getRoute(pathname: string) {
        return this.routes.find(route => route.match(pathname));
    }
}

export default new Router('body');
