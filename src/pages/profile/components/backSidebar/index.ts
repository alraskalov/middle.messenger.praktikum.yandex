import Block from '../../../../utils/scripts/Block/Block';
import './backSidebar.scss';
import template from './backSidebar.template';

interface IProps {
  button: Block;
  attr?: {
    [key: string]: unknown;
  }
}
export default class BackSidebar extends Block {
  constructor(tag: string = 'button', _props: IProps) {
    super(tag, _props);
  }

  render() {
    return this.compile(template, this._props);
  }
}
