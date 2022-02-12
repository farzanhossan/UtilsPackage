import { CamelCaseToSeparateString, IsValidBDPhoneNumber, IsValidEmail, IsValidUuid } from '../index';
test('IsValidBDPhoneNumber', () => {
    expect(IsValidBDPhoneNumber('01719020642')).toBe(true);
});
test('IsValidEmail', () => {
    expect(IsValidEmail('example@example.com')).toBe(true);
});
test('IsValidUuid', () => {
    expect(IsValidUuid('48a2d845-edfa-4681-926e-31f635771da5')).toBe(true);
});
test('CamelCaseToSeparateString', () => {
    expect(CamelCaseToSeparateString('camelCaseString')).toBe('Camel Case String');
});
