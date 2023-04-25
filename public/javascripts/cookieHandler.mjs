export default class HandleCookie {
    constructor(name, value, days = 0, path = `'/'`, sameSite = 'Strict', domain = '', httpOnly = false, secure = false) {
        this.name = name;
        this.days = days;
        this.path = path;
        this.sameSite = sameSite;
        this.domain = domain;
        this.httpOnly = httpOnly;
        this.secure = secure;
        if (this.exists()) {
            this.value = this.getCookieValue();
            this.setCookie();
        } else {
            this.value = value;
            this.setCookie();
        }
    }

    exists() {
        return (document.cookie.indexOf(`${this.name}=`) !== -1);
    }
    getCookie() {
        const cookies = document.cookie.split('; ');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].split('=');
            if (cookie[0] === this.name) {
                return cookie.join('=');
            }
        }
        return null;
    }

    getCookieValue() {
        const cookie = this.getCookie();
        return cookie.split("=")[1];
    }

    setCookie() {
        let expires = '';
        if (this.days == 999) {
            const date = new Date("2038-01-19T00:00:00");

            expires = `; expires=${date.toUTCString()}`;
        } else {
            const date = new Date();
            date.setTime(date.getTime() + (this.days * 24 * 60 * 60 * 1000));
            expires = `; expires=${date.toUTCString()}`;
        }

        const domainAttr = this.domain ? `; Domain=${this.domain}` : '';
        const httpOnlyAttr = this.httpOnly ? '; HttpOnly' : '';
        const secureAttr = this.secure ? '; Secure' : '';
        document.cookie = `${this.name}=${this.value}${expires}; path=${this.path}; SameSite=${this.sameSite}${domainAttr}${httpOnlyAttr}${secureAttr}`;
    }

    deleteCookie() {
        document.cookie = `${this.name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }

    handleInput(name) {
        const value = this.value;
        const inputs = document.querySelectorAll(`input[name="${name}"]`);
        inputs.forEach(input => {

            switch (input.type) {
                case 'radio':

                    if (value.toString() === input.value.toString()) {
                        input.checked = true;

                    } else {

                        input.checked = false;
                    }
                    input.addEventListener('change', () => {
                        this.value = input.value;
                        this.setCookie();
                    });
                    break;
                case 'checkbox':
                    input.checked = input.value === value;
                    input.addEventListener('change', () => {
                        this.value = input.value;
                        this.setCookie();
                    });
                    break;
                case 'select-one':
                case 'select-multiple':
                    const options = input.options;
                    for (let i = 0; i < options.length; i++) {
                        const option = options[i];
                        option.selected = option.value === value;
                    }
                    input.addEventListener('change', () => {
                        this.value = input.value
                        this.setCookie();
                    });
                    break;
                default:
                    input.value = value;
                    input.addEventListener('input', () => {
                        this.value = input.value
                        this.setCookie();
                    });
            }
        });
    }
}