import Block from '../Block/Block';

function isEqual(lhs: string, rhs: string) {
    return lhs === rhs;
}
function render(query: string, block: Block | null) {
    console.log(query)
    const root = document.querySelector(query) as HTMLElement;

    if (root) {
        root.append(block!.getContent())
    }
}

class Route {
    _pathname: string;

    _blockClass: any;

    _block: Block | null;

    _props: Record<string, any>;
    constructor(pathname: string, view: unknown, props: Record<string, unknown>) {
        this._pathname = pathname;
        this._blockClass = view;
        this._block = null;
        this._props = props;
    }

    navigate(pathname: string) {
        if (this.match(pathname)) {
            this._pathname = pathname;
            this.render();
        }
    }

    leave() {
        if (this._block) {
            this._block.hide();
        }
    }

    match(pathname: string) {
        return isEqual(pathname, this._pathname);
    }

    render() {
        if (!this._block) {
            this._block = this._blockClass;
            render(this._props.rootQuery, this._block);
            return;
        }

        this._block.show();
    }
}

export default Route;
