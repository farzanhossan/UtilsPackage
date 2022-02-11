import { IsValidEmail, IsValidPhoneNumber } from '../index';
test('IsValidPhoneNumber', () => {
    expect(IsValidPhoneNumber('01719020642')).toBe(true);
});
test('IsValidEmail', () => {
    expect(IsValidEmail('test@gmail.com')).toBe(true);
});