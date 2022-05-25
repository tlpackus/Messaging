# Messaging

#### This application cleans a phone number and helps send a message from twilio through Copper CRM.

#### By Theron Packus & Devon Cowell

## Technologies Used

* VS Code
* HTML/CSS
* JavaScript
* jQuery
* Bootstrap
* Webpack
* Jest
* Babel
* eslint
* Node
* popper.js

## Description

## Pre Setup Installation Requirements

- Requires Visual Studio Code Installation
- Requires Terminal Installation
- Requires Google Chrome
- Requires Node.js

## Setup/Installation Requirements

*

## Current Zap Code 
```
function findOwnerNumber(messageData) {
    let keyArray = Object.keys(messageData);
    let valueArray = Object.values(messageData);
    let ownerNameReadyToCompare = (messageData.owner.toLowerCase()).split(" ").join("");
    let ownerIndexValue = keyArray.indexOf(ownerNameReadyToCompare);
    return (valueArray.splice(ownerIndexValue, 1).toString());
}

function parentNameHandler(newParentId) {
switch (newParentId) {
    case ('21'):
    return 'leads';
    break;
    case ('3'):
    return 'people';
    break;
    case ('7'):
    return 'opportunities';
    break;
    default:
    return 'NoMatchFoundError';
    };
};

function removeNonIntegers (dirtyNumberString) {
    let cleanedCustomerPhone = "";
    for (let i = 0; i < dirtyNumberString.length; i++) {
        if (!isNaN(dirtyNumberString[i])) {
        cleanedCustomerPhone += dirtyNumberString[i];
        } else {
        cleanedCustomerPhone += "";
        }  
    }
    return lengthCheck(cleanedCustomerPhone);
}

function lengthCheck(number) {
    const error = "number entered is too long or the country code is incorrect";
    if (number.length < 10) {
        return "customer number is too short";
    } else if (number.length === 10) {
        return ("1" + number);
    } else if (number.length === 11) {
        if (number[0] === '1' || number[0] === '7'){;
            return number;
        } else {
            return error;
        }
    } else if (number.length === 12 || number.length === 13) {
        if (number[0] === '1') {
            return error;
        } else {
            return number;
        }
    }  else if (number.length === 14) {
        if (number[1]==='1') {
            return error;
        } else if (number[0] != 1) {
            return error;
        } else {
            return number;
        }
    } else {
        return error;
    }
}

function cleanNumbers(numbers){
    let numberArray = numbers.split(",");
    let selectedNumberString = numberArray[0];
    let spaceRemovedString = selectedNumberString.split(" ").join("");
    return removeNonIntegers(spaceRemovedString);
};

function newMessageHandler(newMessageData) {
   output = {
        ownerName: newMessageData.owner,
        ownerNumber: findOwnerNumber(newMessageData),
        parentName: parentNameHandler(newMessageData.parentTypeIdentifier),
        customerNumber: cleanNumbers(newMessageData.numbers)
    };
    return output;
};

newMessageHandler(inputData); 
'''
## Commit Aligned Performance Documentation

* _runtime meta
memory used mb
57
duration ms
31_

* _runtime meta
memory used mb
56
duration ms
20_

* _runtime meta
memory used mb
56
duration ms
under 10_

## Known Bugs

## License

[MIT](LICENSE.txt)

Copyright © 2021 Theron Packus

All rights Reserved

## Support and Contact Information

For contact support, please email me. My name's Theron Packus <a href = "mailto: tlpackus@gamil.com">Send Email</a>