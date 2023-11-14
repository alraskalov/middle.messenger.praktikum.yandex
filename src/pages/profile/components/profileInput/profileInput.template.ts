const template = `
<p class="profile-label__text">{{ label-text }}</p>
<input class="profile-input"
       name="{{ input-name }}"
       type="{{ input-type }}"
       value="{{ input-value }}"
       placeholder="{{ input-placeholder }}"

       {{#if input-disabled}}
        disabled
       {{/if}}
       >
`;

export default template;
