// import renderDOM from '../../../../utils/scripts/renderDOM';
import ErrorLayout from '../../layouts/error';
import Link from '../../../../components/link';
import Wrapper from "../../../../components/wrapper";
import Router from "../../../../utils/scripts/router/Router.ts";
import Routes from "../../../../utils/scripts/router/Routes.ts";

const link = new Link('div', {
  'link-class': 'link_xs',
  'link-text': 'Назад к чатам',
  'link-href': '',
    events: {
      click: () => {
          Router.go(Routes.Chat)
      }
    }
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
