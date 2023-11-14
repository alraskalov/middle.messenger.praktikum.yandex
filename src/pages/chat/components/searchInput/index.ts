import Block from '../../../../utils/scripts/Block/Block';
import './searchInput.scss';
import template from './searchInput.template';

interface IProps {
  value?: string;
  attr?: {
    [key: string]: unknown;
  }
}
export default class SearchInput extends Block {
  constructor(tag: string = 'div', _props: IProps) {
    super(tag, _props);
  }

  render() {
    return this.compile(template, this._props);
  }
}
