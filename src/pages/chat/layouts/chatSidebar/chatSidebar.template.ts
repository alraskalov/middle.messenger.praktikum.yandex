const template = `
    <div class="chat-sidebar__header">
        
        <button class="chat-sidebar__button">
            {{{ button }}}
            <svg class="chat-sidebar__arrow-icon" xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
                <path d="M1 9L5 5L1 1" stroke="#999999"/>
            </svg>
        </button>
        {{{ search }}}
    </div>

    <div class="chat-sidebar__chat-list">
        {{{ chatList }}}
    </div>
`;

export default template;
