import Block from '../../../../utils/scripts/Block/Block';
import './profileInput.scss';
import template from './profileInput.template';

interface IProps {
  'label-text': string;
  'input-name': string;
  'input-type': string;
  'input-value': string;
  'input-placeholder': string;
  'input-disabled': boolean;
  attr?: {
    [key: string]: unknown;
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
