import store from "./index.ts";
import {Props} from "../Block/types.ts";
import {StoreEvents} from "./types.ts";
import isEqual from "../isEqual.ts";

export default function connect(mapStateToProps: (state: unknown) => any) {
    function HOC(Component: any) {
        let currState: object = {};
        class ConnectStore extends Component {
            constructor(props: Props) {
                const state = store.getState();
                currState = mapStateToProps(state);

                super({ ...props, ...currState });

                store.on(StoreEvents.Updated, () => {
                    const state = store.getState();
                    const propsFromState = mapStateToProps(state);

                    if (isEqual(currState, propsFromState)) {
                        return;
                    }

                    this.setProps({ ...propsFromState });
                });
            }
        }

        return ConnectStore;
    }

    return HOC;
}
