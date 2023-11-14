import Block from '../../utils/scripts/Block/Block';
import './link.scss';
import template from './link.template';

interface IProps {
  'link-class': string;
  'link-href': string;
  'link-text': string;
  attr?: {
    [key: string]: unknown;
  }
}
export default class Link extends Block {
  constructor(tag: string = 'div', _props: IProps) {
    super(tag, _props);
  }

  render() {
    return this.compile(template, this._props);
  }
}
