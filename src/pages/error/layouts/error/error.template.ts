const template = `
    <div class="error__description">
        <h1 class="error__title">{{ title }}</h1>
        <p class="error__subtitle">{{ subtitle }}</p>
    </div>
    {{{ element }}}
`;

export default template;
