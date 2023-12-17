import EventBus from '../EventBus/EventBus';
import set from '../set.ts'
import {Props} from "../Block/types.ts";
import {StoreEvents} from "./types.ts";



export class Store extends EventBus< { [name: string]: Props[] }> {
    private state: any = {};

    public set(path: string, value: unknown) {
        set(this.state, path, value);

        this.emit(StoreEvents.Updated, this.getState());
    }

    public getState() {
        return this.state;
    }
}

const store = new Store();

export default store;
