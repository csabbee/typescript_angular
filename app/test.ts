import {StringValidator} from './validation';
import {ZipCodeValidator, myAdd, myNewAdd} from './ZipCodeValidator';
import {LettersOnlyValidator} from './LettersOnlyValidator';

// Some samples to try
var strings = ['Hello', '98052', '101'];
// Validators to use
var validators: { [s: string]: StringValidator; } = {};
validators['ZIP code'] = new ZipCodeValidator();
validators['Letters only'] = new LettersOnlyValidator();
// Show whether each string passed each validator
strings.forEach(s => {
    for (var name in validators) {
        console.log(`${s} ${validators[name].isAcceptable(s) ? 'matches' : 'does not match'} ${name}`);
    }
});