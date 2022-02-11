import { CamelCaseToSeparateString, IsValidEmail, IsValidPhoneNumber } from '../index';
test('IsValidPhoneNumber', () => {
    expect(IsValidPhoneNumber('01719020642')).toBe(true);
});
test('IsValidEmail', () => {
    expect(IsValidEmail('test@gmail.com')).toBe(true);
});
test('CamelCaseToSeparateString', () => {
    expect(CamelCaseToSeparateString('camelCaseString')).toBe('Camel Case String');
});