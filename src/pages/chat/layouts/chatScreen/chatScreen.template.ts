const template = `
    <div class="chat-screen__header">
        <div class="chat-screen__user-info">
            <div class="chat-screen__avatar-wrapper">
                {{{ avatar }}}
            </div>

            <p class="chat-screen__user-name">{{ userName }}</p>
        </div>

        {{{ settingsButton }}}
    </div>

    <div class="chat-screen__content">

    </div>

    <div class="chat-screen__bottom-panel">
        {{{ safetyPinButton }}}

        <form class="chat-screen__form-message">
            {{{ input }}}
        </form>

        {{{ submitButton }}}
    </div>
`;

export default template;
