import {expect} from 'chai';
import {
    beforeEach, describe, it
} from 'mocha';
import Sinon from 'sinon';
import Router from './Router';
import Block from '../Block/Block';
import Routes from "./Routes.ts";

describe('Router', () => {
    const template = ``;

    class TestBlock extends Block {
        constructor(tag: string = 'div', _props: unknown) {
            super(tag, _props);
        }

        render() {
            return this.compile(template, this._props);
        }
    }

    beforeEach(() => {
        Router.use(Routes.Login, new TestBlock('div', {}));
        window.history.forward = Sinon.fake();
        window.history.back = Sinon.fake();
    });

    it('go()', () => {
        const historyLength = window.history.length;
        Router.go(Routes.Login);
        const newLength = historyLength + 1;

        expect(window.history.length).to.eq(newLength);
    });

    it('forward()', () => {
        Router.forward();
        expect((window.history.forward as unknown as any).callCount).to.eq(1);
    });

    it('back()', () => {
        Router.back();
        expect((window.history.back as unknown as any).callCount).to.eq(1);
    });
});
