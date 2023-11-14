import renderDOM from '../../../../utils/scripts/renderDOM';
import ErrorLayout from '../../layouts/error';
import Link from '../../../../components/link';

const link = new Link('div', {
  'link-class': 'link_xs',
  'link-text': 'Назад к чатам',
  'link-href': '/',
});

const errorLayout = new ErrorLayout('div', {
  title: '500',
  subtitle: 'Мы уже фиксим',
  element: link,
  attr: {
    class: 'error',
  },
});

renderDOM('.container', errorLayout);
