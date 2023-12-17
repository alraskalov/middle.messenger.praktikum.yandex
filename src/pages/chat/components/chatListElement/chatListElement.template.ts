const template = `
    <div class="chat-list-element__wrapper">
        {{{ avatar }}}

        <div class="chat-list-element__description">
            <h3 class="chat-list-element__user-name">{{ userName }}</h3>
            <p class="chat-list-element__user-message">{{ userMessage }}</p>
        </div>

        <div class="chat-list-element__info">
            <p class="chat-list-element__date">{{ messageDate }}</p>
            {{#if messageCount}}
                <div class="chat-list-element__message-count">{{ messageCount }}</div>
            {{/if}}
            
        </div>
    </div>
`;

export default template;
