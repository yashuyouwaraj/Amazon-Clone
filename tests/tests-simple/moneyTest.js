import {formatCurrency} from '../../scripts/utils/money.js';

console.log('test suite: formatCurrency');

console.log('converts cents into dollears');
if(formatCurrency(2095)==='20.95'){
    console.log('Test passed');
} else {
    console.log('Test failed');
}

console.log('workds with 0');
if(formatCurrency(0)==='0.00'){
    console.log('Test passed');
} else {
    console.log('Test failed');
}

console.log('rounds up cents correctly');
if(formatCurrency(2000.5)==='20.01'){
    console.log('Test passed');
} else {
    console.log('Test failed');
}

console.log('rounds down cents correctly');
if(formatCurrency(2000.4)==='20.00'){
    console.log('Test passed');
} else {
    console.log('Test failed');
}