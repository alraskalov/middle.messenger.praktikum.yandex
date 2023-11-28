import './safetyPinButton.scss';
import template from './safetyPinButton.template';
import Block from '../../utils/scripts/Block/Block';

interface IProps {
  attr?: {
    [key: string]: unknown;
  }
}
export default class SafetyPinButton extends Block {
  constructor(tag: string = 'div', _props: IProps) {
    super(tag, _props);
  }

  render() {
    return this.compile(template, this._props);
  }
}
