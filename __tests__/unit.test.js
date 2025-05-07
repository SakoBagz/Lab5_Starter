// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
describe('isPhoneNumber', () => {
  test('valid phone numbers should return true', () => {
    expect(isPhoneNumber('123-456-7890')).toBe(true);
    expect(isPhoneNumber('(123) 456-7890')).toBe(true);
  });

  test('invalid phone numbers should return false', () => {
    expect(isPhoneNumber('01234567890')).toBe(false);
    expect(isPhoneNumber('12345678901')).toBe(false);
  });
});

describe('isEmail', () => {
  test('valid emails should return true', () => {
    expect(isEmail('test@example.com')).toBe(true);
    expect(isEmail('user_name@domain.co')).toBe(true);
  });

  test('invalid emails should return false', () => {
    expect(isEmail('test@domain')).toBe(false);
    expect(isEmail('test@domain.comm')).toBe(false);
  });
});

describe('isStrongPassword', () => {
  test('valid strong passwords should return true', () => {
    expect(isStrongPassword('a123')).toBe(true);
    expect(isStrongPassword('Z_user1')).toBe(true);
  });

  test('invalid strong passwords should return false', () => {
    expect(isStrongPassword('1abc')).toBe(false);
    expect(isStrongPassword('ab')).toBe(false);
  });
});

describe('isDate', () => {
  test('valid dates should return true', () => {
    expect(isDate('1/1/2000')).toBe(true);
    expect(isDate('12/31/2025')).toBe(true);
  });

  test('invalid dates should return false', () => {
    expect(isDate('01-01-2000')).toBe(false);
    expect(isDate('123/1/2000')).toBe(false);
  });
});

describe('isHexColor', () => {
  test('valid hex colors should return true', () => {
    expect(isHexColor('#FFF')).toBe(true);
    expect(isHexColor('123ABC')).toBe(true);
  });

  test('invalid hex colors should return false', () => {
    expect(isHexColor('#FF')).toBe(false);
    expect(isHexColor('ZZZ')).toBe(false);
  });
});
