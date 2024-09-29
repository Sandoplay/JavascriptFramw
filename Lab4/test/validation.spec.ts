import { Validation } from '../src/validation';
import * as assert from 'assert';
import { describe } from 'mocha';

describe('New book input validating', () => {
  context('no book title', () => {
    it('false', () => {
      const validation = Validation.getInstance();
      const validationResult = validation.validateCreateBookRequest(
        '',
        'somebody',
        2024
      );
      assert.equal(validationResult, false);
    });
  });
  context('no author', () => {
    it('false', () => {
      const validation = Validation.getInstance();
      const validationResult = validation.validateCreateBookRequest(
        'title',
        '',
        2024
      );
      assert.equal(validationResult, false);
    });
  });
  context('invalid year', () => {
    it('false', () => {
      const validation = Validation.getInstance();
      const validationResult = validation.validateCreateBookRequest(
        'title',
        'somebody',
        0
      );
      assert.equal(validationResult, false);
    });
  });
  context('valid input', () => {
    it('true', () => {
      const validation = Validation.getInstance();
      const validationResult = validation.validateCreateBookRequest(
        'title',
        'somebody',
        1234
      );
      assert.equal(validationResult, true);
    });
  });
});

describe('New user input validating', () => {
  context('no username', () => {
    it('false', () => {
      const validation = Validation.getInstance();
      const validationResult = validation.validateCreateUserRequest(
        '',
        'amogus@sus.com'
      );
      assert.equal(validationResult, false);
    });
  });
  context('no email', () => {
    it('false', () => {
      const validation = Validation.getInstance();
      const validationResult = validation.validateCreateUserRequest('123', '');
      assert.equal(validationResult, false);
    });
  });
  context('invalid email', () => {
    it('false', () => {
      const validation = Validation.getInstance();
      const validationResult = validation.validateCreateUserRequest(
        '',
        'qwerty'
      );
      assert.equal(validationResult, false);
    });
  });
  context('valid input', () => {
    it('true', () => {
      const validation = Validation.getInstance();
      const validationResult = validation.validateCreateUserRequest(
        'qwerty',
        'amogus@sus.com'
      );
      assert.equal(validationResult, true);
    });
  });
});
