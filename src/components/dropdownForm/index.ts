import Block from '../../utils/scripts/Block/Block';
import './dropdownForm.scss';
import template from './dropdownForm.template';

interface IProps {
    element: Block,
    isVisible: boolean,
    attr?: {
        [key: string]: unknown;
    },
    events?: {
        [key: string]: (e: Event) => void;
    }
}
export default class DropdownForm extends Block {
    constructor(tag: string = 'button', _props: IProps) {
        super(tag, _props);
    }

    render() {
        return this.compile(template, this._props);
    }
}
