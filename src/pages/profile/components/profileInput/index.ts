import Block from '../../../../utils/scripts/Block/Block';
import './profileInput.scss';
import template from './profileInput.template';
import connect from "../../../../utils/scripts/store/connect.ts";
import validate from "../../../../utils/scripts/validate/validate.ts";

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
class ProfileInput extends Block {
  constructor(tag: string = 'label', _props: IProps) {
    super(tag, _props);
  }

  render() {
      if (this._props?.storeData && this._props?.storeData[this._props.inputName] && this._props.inputValue === '') {
          try {
              const { message, isValid } = validate(this._props.storeData[this._props.inputName], this._props.inputName);

              this.setProps({inputValue: this._props.storeData[this._props.inputName], error: message, isValid})
          } catch (error: unknown) {
              console.error(error as Error)
          }
      }

    return this.compile(template, this._props);
  }
}

const withUser = connect(state => ({ storeData: { ...state.user }.data }));

export default withUser(ProfileInput);
