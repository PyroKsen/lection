// @ts-check

import { test } from 'node:test';
import assert from 'assert/strict';
import Validator from '../index.js';

test('step1', () => {
  const v = new Validator();
  const postalCodeSchema = v.postalCode();

  assert.equal(postalCodeSchema.isValid('ZIP_12345'), true);
  assert.equal(postalCodeSchema.isValid('ZIP_67890'), true);
  assert.equal(postalCodeSchema.isValid('ZIP_54321'), true);
  assert.equal(postalCodeSchema.isValid(10), false);
});

test('step2', () => {
  const v = new Validator();

  const postalCodeSchema1 = v.postalCode();
  assert.equal(postalCodeSchema1.isValid('ZIP_12345'), true);

  const postalCodeSchema2 = v.postalCode().setPostalCodeLengthConstraint(7);
  assert.equal(postalCodeSchema2.isValid('ZIP_6789056889'), true);
  assert.equal(postalCodeSchema2.isValid('54321'), false);

  const postalCodeSchema3 = v.postalCode().setPostalCodeLengthConstraint(4, 6);
  assert.equal(postalCodeSchema3.isValid('ZIP_54321'), true);
  assert.equal(postalCodeSchema3.isValid('ZIP_67'), false);
});

test('step3', () => {
  const v = new Validator();
  const ipAddressSchema = v.ipAddress();

  assert.equal(ipAddressSchema.isValid('27.168.0.1'), true);
  assert.equal(ipAddressSchema.isValid('27.0.0.1'), true);
  assert.equal(ipAddressSchema.isValid('172.16.0.1'), false);
  assert.equal(ipAddressSchema.isValid('8.8.8.8'), false);
  assert.equal(ipAddressSchema.isValid('another.invalid@123.45'), false);
  assert.equal(ipAddressSchema.isValid(15613854), false);
});

test('step4', () => {
  const v = new Validator();

  const ipAddressSchema1 = v.ipAddress();
  assert.equal(ipAddressSchema1.isValid('27.168.0.1'), true);

  const ipAddressSchema2 = v.ipAddress().ipAddressValues();
  assert.equal(ipAddressSchema2.isValid('27.0.0.1'), true);
  assert.equal(ipAddressSchema2.isValid('192.168.0.1'), false);

  const ipAddressSchema3 = v.ipAddress().ipAddressValues();
  assert.equal(ipAddressSchema3.isValid('27.16.0'), false);
  assert.equal(ipAddressSchema3.isValid('8.8.8.8'), false);
  assert.equal(ipAddressSchema3.isValid('27.255.139.8'), true);
});

test('step5', () => {
  const v = new Validator();
  const userSchema = v.user().shape({
    postalCode: v.postalCode().setPostalCodeLengthConstraint(7),
    ipAddress: v.ipAddress().ipAddressValues(),
  });

  assert.equal(userSchema.isValid({ postalCode: 'ZIP_6789056889', ipAddress: '27.16.0.255' }), true);
  assert.equal(userSchema.isValid({ postalCode: 'ZIP_6789054', ipAddress: '10.0.0.1' }), false);
  assert.equal(userSchema.isValid({ postalCode: 'ZIP_6789', ipAddress: '27.0.0.1' }), false);
  assert.equal(userSchema.isValid({ postalCode: 'ZIP_6789', ipAddress: '192.0.0.1' }), false);
});
