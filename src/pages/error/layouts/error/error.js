export default function error({fn, hash}) {
    return `
        <div class="error">
            <div class="error__description">
                <h1 class="error__title">${ hash["error-title"] }</h1>
                <p class="error__subtitle">${ hash["error-subtitle"] }</p>
            </div>
            ${fn(this)}
        </div>
    `
}
