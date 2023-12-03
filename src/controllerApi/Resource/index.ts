import {ResourceApi} from "../../classApi";
import store from "../../utils/scripts/store";

class ResourceController {
    private api = new ResourceApi();

    sendFile = async (data: FormData) => {
        try {
            await this.api.send(data);

            store.set('resources.error', undefined);
        } catch (error: unknown) {
            store.set('resources.error', (error as Error).message);
            console.error((error as Error).message);
        }
    };
}

export const resourceController = new ResourceController();
