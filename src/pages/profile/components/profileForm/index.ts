import Block from '../../../../utils/scripts/Block/Block';
import './profileForm.scss';
import template from './profileForm.template';

interface IProps {
  'form-title': string;
  inputs: Array<Block>;
  attr?: {
    [key: string]: unknown;
  }
}
export default class ProfileForm extends Block {
  constructor(tag: string = 'form', _props: IProps) {
    super(tag, _props);
  }

  render() {
    return this.compile(template, this._props);
  }
}
