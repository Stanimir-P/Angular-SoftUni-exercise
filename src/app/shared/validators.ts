import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export function emailValidator(control: AbstractControl): ValidationErrors | null {
    const value = (control.value as string);

    if (!value) { return null };
    
    const isValidEmail = /^[a-zA-Z0-9\.-]{6,}@\w+\.(com|bg)$/.test(value);

    return isValidEmail ? null : { emailValidator: true};
}

export function rePasswordValidatorFactory(targetControl: AbstractControl): ValidatorFn {
    return function rePassowrdValidator(control: AbstractControl): ValidationErrors | null {
        const areMatching = targetControl.value === control.value;
        return areMatching ? null : { rePassowrdValidator: true }
    }
}