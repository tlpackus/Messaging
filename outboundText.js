inputData = {
    owner: 'Devon Cowell',
    numbers: '5033334444,788776,N/A',
    devoncowell: '15035033030',
    alexis: '7777777777',
    parentTypeIdentifier: '21'
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
    if (number.length > 10) {
        return number;
    } else if (number.length === 10) {
        return ("1" + number);
    } else {
        return "Number entered is too short";
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


newMessageHandler(inputData);