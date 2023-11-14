const template = `
    <p class="label__text">{{ labelText }}</p>
    <input class="input" name="{{ inputName }}" type="{{ inputType }}" value="{{ inputValue }}" placeholder="{{ inputPlaceholder }}">
    <p class="label__error">{{ error }}</p>
`;

export default template;
