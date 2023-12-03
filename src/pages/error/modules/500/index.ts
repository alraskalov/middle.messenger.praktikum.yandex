import ErrorLayout from '../../layouts/error';
import Router from "../../../../utils/scripts/router/Router.ts";
import Routes from "../../../../utils/scripts/router/Routes.ts";
import Button from "../../../../components/button";

const link = new Button('button', {
    'button-text': 'Назад к чатам',
    "attr": {
        class: 'link link_regular link_button',
    },
    "events": {
        click: (e) => {
            e.preventDefault();

            Router.go(Routes.Chat)
        },
    },
});

const error500 = new ErrorLayout('div', {
  title: '500',
  subtitle: 'Мы уже фиксим',
  element: link,
  attr: {
    class: 'error',
  },
});

export default error500;
