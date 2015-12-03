import {StringValidator} from './validation';

var numberRegexp = /^[0-9]+$/;

export var myAdd = function(x: number, y: number): number { return x+y; };
export var myNewAdd = function(x: number, y = 2): number { return x+y; };

export class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}