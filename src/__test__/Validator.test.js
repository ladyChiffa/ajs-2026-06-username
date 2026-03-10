import Validator from '../Validator.js';

test('Validator 1', () => {
    const userName = 'ladyChiffa';
    const validator = new Validator();
    expect(validator.validateUsername(userName)).toBe(true);
});

test('Validator 2', () => {
    const userName = 'ladyChiffa1';
    const validator = new Validator();
    expect(validator.validateUsername(userName)).toBe(false);
});

test('Validator 3', () => {
    const userName = 'ladyChiffa199v';
    const validator = new Validator();
    expect(validator.validateUsername(userName)).toBe(true);
});
test('Validator 4', () => {
    const userName = 'ladyChiffa1990v';
    const validator = new Validator();
    expect(validator.validateUsername(userName)).toBe(false);
});
test('Validator 5', () => {
    const userName = '-ladyChiffa199v';
    const validator = new Validator();
    expect(validator.validateUsername(userName)).toBe(false);
});
test('Validator 6', () => {
    const userName = 'ladyChiffa_199-v';
    const validator = new Validator();
    expect(validator.validateUsername(userName)).toBe(true);
});
