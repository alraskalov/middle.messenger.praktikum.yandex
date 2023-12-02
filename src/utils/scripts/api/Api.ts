import HTTPTransport from "./Fetch.ts";

export default class Api {
    protected request: HTTPTransport;

    protected constructor(endpoint: string) {
        this.request = new HTTPTransport(endpoint);
    }

    public create?(data: unknown): Promise<unknown>;

    public read?(data: unknown): Promise<unknown>;

    public update?(data: unknown): Promise<unknown>;

    public delete?(data: unknown): Promise<unknown>;
}
