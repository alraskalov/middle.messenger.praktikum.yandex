import renderDOM from '../../../../utils/scripts/renderDOM';
import ErrorLayout from '../../layouts/error';
import Link from '../../../../components/link';

const link = new Link('div', {
  'link-class': 'link_xs',
  'link-text': 'Назад к чатам',
  'link-href': '/',
});

const errorLayout = new ErrorLayout('div', {
  title: '404',
  subtitle: 'Не туда попали',
  element: link,
  attr: {
    class: 'error',
  },
});

renderDOM('.container', errorLayout);
