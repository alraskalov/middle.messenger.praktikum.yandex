import ProfileInput from "../components/profileInput";
import validate from "../../../utils/scripts/validate/validate.ts";
import Routes from "../../../utils/scripts/router/Routes.ts";

export const inputOldPassword = new ProfileInput('label', {
    labelText: 'Старый пароль',
    inputName: 'oldPassword',
    inputType: 'password',
    inputValue: '',
    inputPlaceholder: '••••••••',
    error: '',
    isValid: false,
    inputDisabled: false,
    attr: {
        class: 'profile-label',
    },
    events: {
        change: (event: InputEvent) => {
            const target = event.target as HTMLInputElement;

            const { message, isValid } = validate(target.value, 'password');

            inputOldPassword.setProps({ error: message, inputValue: target.value, isValid });
        },
    },
});

export const inputNewPassword = new ProfileInput('label', {
    labelText: 'Новый пароль',
    inputName: 'newPassword',
    inputType: 'password',
    inputValue: '',
    inputPlaceholder: '••••••••',
    error: '',
    isValid: false,
    inputDisabled: false,
    attr: {
        class: 'profile-label',
    },
    events: {
        change: (event: InputEvent) => {
            const target = event.target as HTMLInputElement;

            const { message, isValid } = validate(target.value, 'password');

            inputNewPassword.setProps({ error: message, inputValue: target.value, isValid });
        },
    },
});


export const inputRepeatPassword = new ProfileInput('label', {
    labelText: 'Повторите новый пароль',
    inputName: 'repeatPassword',
    inputType: 'password',
    inputValue: '',
    inputPlaceholder: '••••••••',
    error: '',
    isValid: false,
    inputDisabled: false,
    attr: {
        class: 'profile-label',
    },
    events: {
        change: (event: InputEvent) => {
            const target = event.target as HTMLInputElement;

            const { message, isValid } = validate(target.value, 'password');

            inputRepeatPassword.setProps({ error: message, inputValue: target.value, isValid });
        },
    },
});



export const inputEmail = new ProfileInput('label', {
    labelText: 'Почта',
    inputName: 'email',
    inputType: 'email',
    inputValue: '',
    inputPlaceholder: '',
    inputDisabled: false,
    error: '',
    isValid: false,
    attr: {
        class: 'profile-label',
    },
    events: {
        change: (event: InputEvent) => {
            const target = event.target as HTMLInputElement;

            const { message, isValid } = validate(target.value, 'email');

            inputEmail.setProps({ error: message, inputValue: target.value, isValid });
        },
    },
});

export const inputLogin = new ProfileInput('label', {
    labelText: 'Логин',
    inputName: 'login',
    inputType: 'text',
    inputValue: '',
    inputPlaceholder: '',
    inputDisabled: false,
    error: '',
    isValid: false,

    attr: {
        class: 'profile-label',
    },
    events: {
        change: (event: InputEvent) => {
            const target = event.target as HTMLInputElement;

            const { message, isValid } = validate(target.value, 'login');

            inputLogin.setProps({ error: message, inputValue: target.value, isValid });
        },
    },
});

export const inputFirstName = new ProfileInput('label', {
    labelText: 'Имя',
    inputName: 'first_name',
    inputType: 'text',
    inputValue: '',
    inputPlaceholder: '',
    inputDisabled: false,
    error: '',
    isValid: false,

    attr: {
        class: 'profile-label',
    },
    events: {
        change: (event: InputEvent) => {
            const target = event.target as HTMLInputElement;

            const { message, isValid } = validate(target.value, 'first_name');

            inputFirstName.setProps({ error: message, inputValue: target.value, isValid });
        },
    },
});

export const inputSecondName = new ProfileInput('label', {
    labelText: 'Фамилия',
    inputName: 'second_name',
    inputType: 'text',
    inputValue: '',
    inputPlaceholder: '',
    inputDisabled: false,
    error: '',
    isValid: false,

    attr: {
        class: 'profile-label',
    },
    events: {
        change: (event: InputEvent) => {
            const target = event.target as HTMLInputElement;

            const { message, isValid } = validate(target.value, 'second_name');

            inputSecondName.setProps({ error: message, inputValue: target.value, isValid });
        },
    },
});

export const inputDisplayName = new ProfileInput('label', {
    labelText: 'Имя в чате',
    inputName: 'display_name',
    inputType: 'text',
    inputValue: '',
    inputPlaceholder: '',
    inputDisabled: false,
    error: '',
    isValid: false,
    attr: {
        class: 'profile-label',
    },
    events: {
        change: (event: InputEvent) => {
            if (!(window.location.pathname === Routes.Profile)) {
                const target = event.target as HTMLInputElement;

                const { message, isValid } = validate(target.value, 'display_name');

                inputDisplayName.setProps({ error: message, inputValue: target.value, isValid });
            }
        },
    },
});

export const inputPhone = new ProfileInput('label', {
    labelText: 'Телефон',
    inputName: 'phone',
    inputType: 'tel',
    inputValue: '',
    inputPlaceholder: '',
    inputDisabled: false,
    error: '',
    isValid: false,

    attr: {
        class: 'profile-label',
    },
    events: {
        change: (event: InputEvent) => {
            const target = event.target as HTMLInputElement;

            const { message, isValid } = validate(target.value, 'phone');

            inputPhone.setProps({ error: message, inputValue: target.value, isValid });
        },
    },
});
