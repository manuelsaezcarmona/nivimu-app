/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable arrow-parens */
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
// Install jest Mock for all the app
import fetchMock from 'jest-fetch-mock';

// And in my test always mock the jest function.
fetchMock.enableMocks();
// Disable fetchMock by default , using fetchMock.doMock() in a single testsuite
fetchMock.dontMock();

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
});
