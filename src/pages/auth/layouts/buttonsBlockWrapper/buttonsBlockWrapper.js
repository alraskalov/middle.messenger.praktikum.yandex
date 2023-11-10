export default function buttonsBlockWrapper({fn}) {
    return `
        <div class="buttons-block-wrapper">
            ${fn(this)}
        </div>
    `
}
