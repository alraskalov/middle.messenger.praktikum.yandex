import {describe, it} from 'mocha';
import {assert} from 'chai';
import Block from './Block'

const template = ``;

interface IProps {
    attr?: {
        [key: string]: unknown;
    }
    events?: {
        [key: string]: (event: Event) => void
    }
}

class TestBlock extends Block {
    constructor(tag: string = 'div', _props: IProps) {
        super(tag, _props);
    }

    render() {
        return this.compile(template, this._props);
    }
}

const block = new TestBlock('div', {
    attr: {
        class: "test-class-mocha",
    }
});
console.log(block._element.innerHTML)
describe('Block', () => {
    it('render', () => {
        assert.equal(block._element.tagName, 'DIV');
    });

    it('check attr', () => {
        assert.equal(block._element.getAttribute('class'), 'test-class-mocha');
    });

    it('setProps', () => {
        block.setProps({_id: 'test'})
        assert.deepEqual(block._props, {_id: 'test', attr: {class: 'test-class-mocha'}});
    });
});
