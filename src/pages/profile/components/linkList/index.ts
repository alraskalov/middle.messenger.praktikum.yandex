import Block from '../../../../utils/scripts/Block/Block';
import template from './linkList.template';
import './linkList.scss';

interface IProps {
  element: Array<Block>;
  attr?: {
    [key: string]: unknown;
  }
}
export default class LinkList extends Block {
  constructor(tag: string = 'ul', _props: IProps) {
    super(tag, _props);
  }

  render() {
    return this.compile(template, this._props);
  }
}
