import { capitalize, formatError } from "utils";

describe('utils', () => {
  it('capitalize function', () => {
    expect(capitalize(123)).toEqual('');
    expect(capitalize('pragati')).toEqual('Pragati');
  });

  it('formatError function', () => {
    expect(formatError('price_sign is a required field')).toEqual('Price sign is a required field');
  });
});
