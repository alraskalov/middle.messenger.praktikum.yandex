import Block from '../../../../utils/scripts/Block/Block';
import './profileInput.scss';
import template from './profileInput.template';

interface IProps {
  labelText: string;
  inputName: string;
  inputType: string;
  inputValue: string;
  inputPlaceholder: string;
  inputDisabled: boolean;
  error: string;
  isValid: boolean;
  attr?: {
    [key: string]: unknown;
  }
  events?: {
    [key: string]: (event: InputEvent) => void
  }
}
export default class ProfileInput extends Block {
  constructor(tag: string = 'label', _props: IProps) {
    super(tag, _props);
  }

  render() {
    return this.compile(template, this._props);
  }
}
