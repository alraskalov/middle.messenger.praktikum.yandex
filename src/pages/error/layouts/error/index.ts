import Block from '../../../../utils/scripts/Block/Block';
import './error.scss';
import template from './error.template';

interface IProps {
  title: string;
  subtitle: string;
  element: Block;
  attr?: {
    [key: string]: unknown;
  }
}
export default class ErrorLayout extends Block {
  constructor(tag: string = 'div', _props: IProps) {
    super(tag, _props);
  }

  render() {
    return this.compile(template, this._props);
  }
}
