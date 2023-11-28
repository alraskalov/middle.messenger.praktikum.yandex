const template = `
<div class="profile-label__wrapper">
    <p class="profile-label__text">{{ labelText }}</p>
    <input class="profile-input"
           name="{{ inputName }}"
           type="{{ inputType }}"
           value="{{ inputValue }}"
           placeholder="{{ inputPlaceholder }}"
           
           {{#if inputDisabled}}
            disabled
           {{/if}}
           >
</div>

<p class="profile-label__error">{{error}}</p>
`;

export default template;
