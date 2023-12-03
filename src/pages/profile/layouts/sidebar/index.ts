import Block from '../../../../utils/scripts/Block/Block';
import template from './sidebar.template';
import './sidebar.scss';
import connect from "../../../../utils/scripts/store/connect.ts";
import validate from "../../../../utils/scripts/validate/validate.ts";
import isEqual from "../../../../utils/scripts/isEqual.ts";
import {userController} from "../../../../controllerApi";

interface IProps {
  sidebar: Block;
  avatar: Block;
  form: Block;
  buttons: Block;
  dropdown?: Block;
  'content-class': string;
  attr?: {
    [key: string]: unknown;
  }
}
class LayoutSidebar extends Block {
  constructor(tag: string = 'div', _props: IProps) {
    super(tag, _props);
  }

  setAvatar() {
    const avatar = this._children.avatar;


    if (avatar && this._props.storeData) {
      try {
        avatar.setProps({src: this._props.storeData.avatar ? `https://ya-praktikum.tech/api/v2/resources/${this._props.storeData.avatar}` : '/assets/icons/avatar.svg'})
      } catch (error: unknown) {
        console.log(error as Error)
      }
    }
  }

  async sendFile(formName: string) {
    const name: any = formName;
    const formData: FormData = new FormData(document.forms[name] as HTMLFormElement);

    await userController.changeUserAvatar(formData);

    this.setAvatar()

    return this._props;
  }

  componentDidUpdate(oldProps: any, newProps: any): boolean {
    if (this._props.storeData && this._children.form && this._children.form._lists["inputs"]) {
      this._children.form._lists["inputs"].forEach((el) => {

        const { message, isValid } = validate(el._props?.storeData[el._props?.inputName], el._props?.inputName);

        el.setProps({inputValue: this._props.storeData[el._props.inputName], error: message, isValid})
      })
    }

    this.setAvatar()

    return isEqual(oldProps, newProps)
  }

  render() {
    this.setAvatar()

    return this.compile(template, this._props);
  }
}

const withUser = connect((state) => ({ storeData: { ...state.user }.data }));

export default withUser(LayoutSidebar)
