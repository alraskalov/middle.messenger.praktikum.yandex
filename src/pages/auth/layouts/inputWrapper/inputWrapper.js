export default function inputWrapper({fn}) {
    return `
        <div class="input-wrapper">
            ${fn(this)}
        </div>
    `
}
