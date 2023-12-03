import './form.scss';
import template from './form.template';
import Block from '../../../../utils/scripts/Block/Block';
import {authController} from "../../../../controllerApi";
import {SignIn, SignUp} from "../../../../classApi/Auth/types.ts";
import store from "../../../../utils/scripts/store";
import connect from "../../../../utils/scripts/store/connect.ts";

interface IProps {
    formTitle: string;
    wrapper: Array<Block>;
    attr?: {
        [key: string]: unknown;
    }
}

class Form extends Block {
    constructor(tag: string = 'div', _props: IProps) {
        super(tag, _props);
    }

    public sendLogIn = async (data: SignIn) => {
        await authController.signIn(data);

        if (store.getState().user.error !== undefined) {
            this.setProps({
                error: store.getState().user.error,
            });
        }
    }

    public sendSignUp = (data: SignUp) => {
        authController.signUp(data).then(r => r);
    }

    render() {
        return this.compile(template, this._props);
    }
}

const withUser = connect(state => ({ storeData: { ...state.user }.data }));

export default withUser(Form);
