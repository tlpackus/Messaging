// inputData = {
//     owner: 'Devon Cowell',
//     numbers: '5033334444,788776,N/A',
//     devoncowell: '15035033030',
//     alexis: '7777777777',
//     parentTypeIdentifier: '21'
// }

export default class InputData {
    constructor(owner, numbers, parentTypeIdentifier) {
        this.owner = owner;
        this.numbers = numbers;
        this.parentTypeIdentifier = parentTypeIdentifier;
    }
}

function parentNameHandler(newParentId) {
let parentNameFix = newParentId;
switch (parentNameFix) {
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
      if (number[0] === 1 || number[0] === 7){
          return number;
      } else {
          return error;
      }
    } else if (number.length === 12 || number.length === 13) {
      if (number[0] === 1) {
          return error;
      } else {
          return number;
      }
    }  else if (number.length === 14) {
      if (number[1]===1) {
          return error;
      } else if (number[0] !== 1) {
          return error;
      } else {
          return number;
      }
    } else {
        return "error";
    }
}

function cleanNumbers(numbers){
    let numberArray = numbers.split(",");
    let selectedNumberString = numberArray[0];
    let spaceRemovedString = selectedNumberString.split(" ").join("");
    return removeNonIntegers(spaceRemovedString);
};

function newMessageHandler(newMessageData) {
    let ownerNameLowCase = newMessageData.owner.toLowerCase();
    let ownerNameReadyToCompare = ownerNameLowCase.split(" ").join("");
    let keyArray = Object.keys(newMessageData);
    let ownerIndexValue = keyArray.indexOf(ownerNameReadyToCompare);
    let valueArray = Object.values(newMessageData);
    let ownerConfirmedNumber = valueArray.splice(ownerIndexValue, 1)
    let confirmedParentName = parentNameHandler(newMessageData.parentTypeIdentifier);
    let confirmedCustomerPhone = cleanNumbers(newMessageData.numbers);
    console.log(confirmedCustomerPhone);
    output = {
        ownerName: newMessageData.owner,
        ownerNumber: ownerConfirmedNumber.toString(),
        parentName: confirmedParentName,
        customerNumber: confirmedCustomerPhone
    };
    return output;
};