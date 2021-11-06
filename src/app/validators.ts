import { AbstractControl, Validators } from "@angular/forms";

export const phoneNumber = (control: AbstractControl) => {
    const controlValue = control.value;
    if (controlValue && controlValue.match(/^\+?3?8?(0\d{9})$/)) {
        return null;
    }
    return {
        phoneNumber: true
    }
}