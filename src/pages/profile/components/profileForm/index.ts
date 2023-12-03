import Block from '../../../../utils/scripts/Block/Block';
import './profileForm.scss';
import template from './profileForm.template';
import isEqual from "../../../../utils/scripts/isEqual.ts";
import {userController} from "../../../../controllerApi";
import {UserData, UserPasswordData} from "../../../../classApi/User/types.ts";
import connect from "../../../../utils/scripts/store/connect.ts";

interface IProps {
  'form-title': string;
  inputs: Array<Block>;
  attr?: {
    [key: string]: unknown;
  }
}
class ProfileForm extends Block {
  constructor(tag: string = 'form', _props: IProps) {
    super(tag, _props);
  }

    sendNewUserAvatar(formName: string) {
        const name: any = formName;
        const formData: FormData = new FormData(document.forms[name] as HTMLFormElement);
        userController.changeUserAvatar(formData);

        this._children.avatar.setProps({
            src: this._props.storeData.avatar,
        });

        return this._props;
    }

    sendNewUserData = (data: UserData) => {
      userController.changeUserData(data)
    }

    sendNewUserPassword = (data: UserPasswordData) => {
      userController.changeUserPassword(data)
    }

    public componentDidUpdate(oldProps: Record<string, any>, newProps: Record<string, any>): boolean {
        const avatar = this._children.avatar;
        if (avatar) {
            this.setAvatar(avatar);
        }

        return isEqual(oldProps, newProps);
    }

    protected setAvatar(avatar: Block) {
        try {
            avatar.setProps({
                src: this._props.storeData.avatar,
                title: this._props.storeData.display_name,
            });
        } catch (error: unknown) {
            console.error(error as Error)
        }
    }

  render() {
    return this.compile(template, this._props);
  }
}

const withUser = connect(state => ({ storeData: { ...state.user }.data }));

export default withUser(ProfileForm);
