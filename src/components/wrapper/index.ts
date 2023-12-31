import template from './wrapper.template';
import Block from '../../utils/scripts/Block/Block';

interface IProps {
    element: Block[];
    attr?: {
        [key: string]: unknown;
    }
}
export default class Wrapper extends Block {
    constructor(tag: string = 'div', _props: IProps) {
        super(tag, _props);
    }

    render() {
        return this.compile(template, this._props);
    }
}
