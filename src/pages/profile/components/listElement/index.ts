import Block from '../../../../utils/scripts/Block/Block';
import template from './listElement.template';
import './listElement.scss';

interface IProps {
  element: Block;
  attr?: {
    [key: string]: unknown;
  }
}
export default class ListElement extends Block {
  constructor(tag: string = 'li', _props: IProps) {
    super(tag, _props);
  }

  render() {
    return this.compile(template, this._props);
  }
}
