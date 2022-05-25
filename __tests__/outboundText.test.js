import InputData from "../src/outboundText";
describe('InputData', () => {
  let inputData;

  beforeEach(() => {
    inputData = new InputData('Devon Cowell', '5031231234, 11122, frs', '1894921');
    inputData.devoncowell = '15990947474';
    inputData.othersalesmember = '13434441234'
  })

  test('should correctly creat an InputData object with these key value pairs', () => {
    expect(inputData.owner).toEqual('Devon Cowell');
    expect(inputData.numbers).toEqual('5031231234, 11122, frs');
    expect(inputData.parentTypeIdentifier).toEqual('1894921');
    expect(inputData.devoncowell).toEqual('15990947474');
    expect(inputData.othersalesmember).toEqual('13434441234');
  });
  
  test('')
})