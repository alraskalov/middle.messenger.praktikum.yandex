import {HelperOptions} from "handlebars"

export default function buttonsBlockWrapper(this: object, {fn}: HelperOptions): string {
    return `
        <div class="buttons-block-wrapper">
            ${fn(this)}
        </div>
    `
}
