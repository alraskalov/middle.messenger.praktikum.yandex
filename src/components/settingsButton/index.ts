import './settingsButton.scss';
import template from './settingsButton.template';
import Block from '../../utils/scripts/Block/Block';

interface IProps {
  attr?: {
    [key: string]: unknown;
  }
}
export default class SettingsButton extends Block {
  constructor(tag: string = 'div', _props: IProps) {
    super(tag, _props);
  }

  render() {
    return this.compile(template, this._props);
  }
}
