const template = `
<div class="wrapper">
    {{{ sidebar }}}
    <main class="main">
        <section class="content {{ content-class }}">
            {{{ avatar }}}
            {{{ form }}}
            {{{ buttons }}}
            {{{ dropdown }}}
        </section>
    </main>
</div>
`;

export default template;
