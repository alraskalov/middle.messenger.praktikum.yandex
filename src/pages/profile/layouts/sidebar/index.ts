import Block from '../../../../utils/scripts/Block/Block';
import template from './sidebar.template';
import './sidebar.scss';

interface IProps {
  sidebar: Block;
  content: Array<Block>;
  'content-class': string;
  attr?: {
    [key: string]: unknown;
  }
}
export default class LayoutSidebar extends Block {
  constructor(tag: string = 'div', _props: IProps) {
    super(tag, _props);
  }

  render() {
    return this.compile(template, this._props);
  }
}
