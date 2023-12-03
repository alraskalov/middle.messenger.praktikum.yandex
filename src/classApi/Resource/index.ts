import Api from "../../utils/scripts/api/Api.ts";
import {ValidError} from "../types.ts";
import {Path} from "./types.ts";

export class ResourceApi extends Api {
    constructor() {
        super('/resources');
    }

    public async send(data: FormData) {
        try {
            await this.request.put('/', {data});
            return true;
        } catch (e: unknown) {
            const {reason} = e as ValidError;
            throw new Error(reason);
        }
    }

    public async read(path: Path) {
        try {
            const response = await this.request.get(`/${path}`);
            return await response;
        } catch (e: unknown) {
            const {reason} = e as ValidError;
            throw new Error(reason);
        }
    }
}
