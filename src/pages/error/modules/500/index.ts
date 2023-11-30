import ErrorLayout from '../../layouts/error';
import Link from '../../../../components/link';
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

const error500 = new ErrorLayout('div', {
  title: '500',
  subtitle: 'Мы уже фиксим',
  element: link,
  attr: {
    class: 'error',
  },
});

export default error500;
