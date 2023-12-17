import isEqual from "../isEqual.ts";
import store from "./index.ts";
import {StoreEvents} from "./types.ts";
import Block from "../Block/Block.ts";

function connect<T extends Record<string, any>>(mapStateToProps: (state: T) => T): (Component: typeof Block<T>) => any {
    return function HOC(Component: typeof Block<T>) {
        let currentState: any = null;

        return class WithStore extends Component {
            constructor(tag: string, props: T) {
                const state = store.getState();
                currentState = mapStateToProps(state);

                super(tag, { ...props, ...currentState });

                store.on(StoreEvents.Updated, () => {
                    const state = store.getState();
                    const propsFromState = mapStateToProps(state);

                    if (isEqual(currentState, propsFromState)) {
                        return;
                    }

                    this.setProps({ ...propsFromState });
                });
            }
        };
    };
}

export default connect;
