import {HelperOptions} from "handlebars"

export default function inputWrapper(this: object, {fn}: HelperOptions): string {
    return `
        <div class="input-wrapper">
            ${fn(this)}
        </div>
    `
}
