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
  test('should correctly creat an InputData object with these key value pairs', () => {
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

  test('correctly gives error code if customer number is too small', () => {
    expect(cleanNumbers('503444123')).toEqual('customer number is too short');
    expect(cleanNumbers('103444123')).toEqual('customer number is too short');
    expect(cleanNumbers('1503444123')).toEqual('customer number is too short');
  })
})