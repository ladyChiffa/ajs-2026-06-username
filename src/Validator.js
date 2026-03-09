export default class Validator {
    constructor(){
        this.usernameRE = /^[a-zA-Z][a-zA-Z\-_\d]*/; // начинаем только с лат.букв, далее буквы, _- и цифры
        this.userendRE = /[a-zA-Z]$/; // проверка, что заканчивается только лат.буквами
        this.userdigitsRE = /\d{4,}/; // более 3 цифр подряд - запрещаем
    }
    validateUsername(username) {
        return this.usernameRE.test(username) && this.userendRE.test(username) && !this.userdigitsRE.test(username);
    }
}