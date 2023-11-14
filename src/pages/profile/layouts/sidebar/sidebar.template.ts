const template = `
<div class="wrapper">
    {{{ sidebar }}}
    <main class="main">
        <section class="content {{ content-class }}">
            {{{ content }}}
        </section>
    </main>
</div>
`;

export default template;
