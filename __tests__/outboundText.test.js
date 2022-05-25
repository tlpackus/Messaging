import { cleanNumbers, newMessageHandler } from "../src/outboundText";
describe('newMessageHandler', () => {
  const inputData = {
    owner: 'Devon Cowell',
    numbers: '5033334444,788776,N/A',
    devoncowell: '15035033030',
    alexis: '7777777777',
    parentTypeIdentifier: '21'
  }
  let output = newMessageHandler(inputData);

  test('should correctly create an InputData object with these key value pairs', () => {
    expect(inputData.owner).toEqual('Devon Cowell');
    expect(inputData.numbers).toEqual('5033334444,788776,N/A');
    expect(inputData.parentTypeIdentifier).toEqual('21');
    expect(inputData.devoncowell).toEqual('15035033030');
    expect(inputData.alexis).toEqual('7777777777');
  });

  test('code correctly returns owner name in output', () => {
    expect(output.ownerName).toEqual('Devon Cowell');
  })

  test('code correctly gets lead owners number as a string in the output', () => {
    expect(output.ownerNumber).toEqual('15035033030');
  })

  test('code correctly gets parent type identifier', () => {
    expect(output.parentName).toEqual('leads');
  })
  
  test('code correctly separates input numbers by(",")', () => {
    expect(output.customerNumber).toEqual('15033334444');
  })

  test('correctly gives error code if customer number is < 10 characters', () => {
    expect(cleanNumbers('a 444123 ')).toEqual('customer number is too short');
    expect(cleanNumbers('103444123')).toEqual('customer number is too short');
    expect(cleanNumbers('703444123')).toEqual('customer number is too short');
    expect(cleanNumbers('703444123')).toEqual('customer number is too short');
  })

  test('correctly adds +1 if customer number is 10 characters', () => {
    expect(cleanNumbers('a 444123 ')).toEqual('customer number is too short');
    expect(cleanNumbers('5103444123')).toEqual('15103444123');
    expect(cleanNumbers('1703444123')).toEqual('11703444123');
    expect(cleanNumbers('7903444123')).toEqual('17903444123');
  })

  test('correctly handles customer number in the case its 11 characters', () => {
    expect(cleanNumbers('59939934343')).toEqual('number entered is too long or the country code is incorrect');
    expect(cleanNumbers('19939%93@434 3')).toEqual('19939934343');
    expect(cleanNumbers('11939934343')).toEqual('11939934343');
    expect(cleanNumbers('19939934343')).toEqual('19939934343');
  })

  test('correctly handles customer number in the case its 12 or 13 characters long', () => {
    expect(cleanNumbers('959939934343')).toEqual('959939934343');
    expect(cleanNumbers('959 939$%9343**43')).toEqual('959939934343');
    expect(cleanNumbers('159939934343')).toEqual('number entered is too long or the country code is incorrect');
    expect(cleanNumbers('15& 99399$34343$')).toEqual('number entered is too long or the country code is incorrect');
  })

  test('correctly handles customer number in the case its 14 characters long', () => {
    expect(cleanNumbers('8959939934343')).toEqual('8959939934343');
    expect(cleanNumbers('895993993434*&  @@3')).toEqual('8959939934343');
    expect(cleanNumbers('1659939934343')).toEqual('number entered is too long or the country code is incorrect');
  })

  test('correctly handles customer number in the case is 14 characters long', () => {
    expect(cleanNumbers('18959939934343')).toEqual('18959939934343');
    expect(cleanNumbers('1895993993434///???@@  3')).toEqual('18959939934343');
    expect(cleanNumbers('89659939934343')).toEqual('number entered is too long or the country code is incorrect');
    expect(cleanNumbers('81599399343436')).toEqual('number entered is too long or the country code is incorrect');
  })

  test('correctly handles customer number in the case is over 14 characters long', () => {
    expect(cleanNumbers('189659939934343')).toEqual('number entered is too long or the country code is incorrect');
    expect(cleanNumbers('981599399343436')).toEqual('number entered is too long or the country code is incorrect');
  })
})