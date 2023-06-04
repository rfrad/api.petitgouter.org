import 'jasmine';
import { Printer } from ".";

describe('Printer', () => {
    it('should print hello', () => {
        const printer: Printer = new Printer();
        expect(printer.echo()).toEqual('hello');
    });
});