import ErrorLayout from '../../layouts/error';
import Wrapper from "../../../../components/wrapper";
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

const errorLayout = new ErrorLayout('div', {
  title: '404',
  subtitle: 'Не туда попали',
  element: link,
  attr: {
    class: 'error',
  },
});

const error404 = new Wrapper("div", {
    element: [errorLayout],
    attr: {
        class: "container container_column container_center",
    }
})

export default error404;

// renderDOM('.container', errorLayout);
