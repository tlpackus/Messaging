import { newMessageHandler } from "../src/outboundText";
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

  test('code correctly outputs owner name', () => {
    expect(output.ownerName).toEqual('Devon Cowell');
  })
  
})