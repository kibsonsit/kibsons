import { FormGroup, FormControl } from '@angular/forms';export function emailValidator(control: FormControl): {[key: string]: any} {
    const emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;

    if (control.value && !emailRegexp.test(control.value)) {
        return {invalidEmail: true};
    }
}

export function alphabetValidator(control: FormControl): {[key: string]: any} {
    const alphabetRegexp = /^[A-Za-z ]+$/;

    if (control.value && !alphabetRegexp.test(control.value)) {
        return {invalidalphabet: true};
    }
}

export function numericValidator(control: FormControl): {[key: string]: any} {
    const alphabetRegexp = /^[0-9]+$/;

    if (control.value && !alphabetRegexp.test(control.value)) {
        return {invalidnumeric: true};
    }
}

export function alphanumericValidator(control: FormControl): {[key: string]: any} {
    const alphanumericRegexp = /[a-zA-Z0-9]+$/;

    if (control.value && !alphanumericRegexp.test(control.value)) {
        return {invalidEmail: true};
    }
}

export function dateValidator(control: FormControl): {[key: string]: any} {
    const emailRegexp = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;

    if (control.value && !emailRegexp.test(control.value)) {
        return {invalidDate: true};
    }
}


export function matchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
        const password = group.controls[passwordKey];
        const passwordConfirmation = group.controls[passwordConfirmationKey];
        if (password.value !== passwordConfirmation.value) {
            return passwordConfirmation.setErrors({mismatchedPasswords: true});
        }
    };
}


