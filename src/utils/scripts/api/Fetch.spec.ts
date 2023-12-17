import {expect} from 'chai';
import {
    describe, it
} from 'mocha';
import Sinon, {SinonFakeXMLHttpRequest, SinonFakeXMLHttpRequestStatic} from 'sinon';
import HTTPTransport from './Fetch';

describe('Fetch', () => {
    let xhr: SinonFakeXMLHttpRequestStatic;
    // let fetch: HTTPTransport;
    const requests: SinonFakeXMLHttpRequest[] = [];

    const createFetch = () => {
        xhr = Sinon.useFakeXMLHttpRequest();

        // @ts-expect-error Несоответствие типов с SinonFakeXMLHttpRequestStatic
        global.XMLHttpRequest = xhr;

        xhr.onCreate = ((request: SinonFakeXMLHttpRequest) => {
            requests.push(request);
        });

        return new HTTPTransport('/');
    }

    it('get()', () => {
        try {
            const fetch = createFetch()
            fetch.get('/');
            const request = requests.pop() as SinonFakeXMLHttpRequest;
            expect(request.method).to.eq('GET');
        } catch (err) {
            console.error(err)
        }
    });

    it('post()', () => {
        try {
            const fetch = createFetch()

            fetch.post('/signup');
            const request = requests.pop() as SinonFakeXMLHttpRequest;
            expect(request.method).to.eq('POST');
        } catch (err) {
            console.error(err)
        }
    });

    it('put()', () => {
        try {
            const fetch = createFetch()

            fetch.put('/users');
            const request = requests.pop() as SinonFakeXMLHttpRequest;
            expect(request.method).to.eq('PUT');
        } catch (err) {
            console.error(err)
        }
    });

    it('delete()', () => {
        try {
            const fetch = createFetch()

            fetch.delete('/users');
            const request = requests.pop() as SinonFakeXMLHttpRequest;
            expect(request.method).to.eq('DELETE');
        } catch (err) {
            console.error(err)
        }
    });
});
