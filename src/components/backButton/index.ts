import Block from '../../utils/scripts/Block/Block';
import './backButton.scss';
import template from './backButton.template';

interface IProps {
  attr: {
    [key: string]: unknown;
  }
    events?: {
        [key: string]: (event: InputEvent) => void
    }
}
export default class BackButton extends Block {
  constructor(tag: string = 'button', _props: IProps) {
    super(tag, _props);
  }

  render() {
    return this.compile(template, this._props);
  }
}
