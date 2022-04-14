import { FormatDatePipe } from './format-date.pipe';

describe('FormatDatePipe', () => {
  it('should format date', () => {
    const formatPipe = new FormatDatePipe();
    expect(formatPipe.transform('2022-04-14T20:22:00Z')).toEqual('14/4/2022');
  });
});
