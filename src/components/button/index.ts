import Block from '../../utils/scripts/Block/Block';
import './button.scss';
import template from './button.template';

interface IProps {
  'button-text': string;
  attr?: {
    [key: string]: unknown;
  },
  events: {
    [key: string]: (e: Event) => void;
  }
}
export default class Button extends Block {
  constructor(tag: string = 'button', _props: IProps) {
    super(tag, _props);
  }

  render() {
    return this.compile(template, this._props);
  }
}
