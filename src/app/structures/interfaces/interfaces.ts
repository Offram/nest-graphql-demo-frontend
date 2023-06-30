import { FormControl } from "@angular/forms";

export interface IMenu {
    routerLink?: string,
    name: string,
    children?: IMenu[]
}

export interface IUserTypeForm {
    userType1: boolean,
    userType2: boolean,
    userType3: boolean,
}

// export interface IUserTypeFormGroup extends FormGroup {
//     value: IUserTypeForm

//     controls: {
//         userType1: AbstractControl,
//         userType2: AbstractControl,
//         userType3: AbstractControl,
//     }
// }

// export interface IUserTypeFormGroup {
//     userType1: FormControl<boolean | null>,
//     userType2: FormControl<boolean | null>,
//     userType3: FormControl<boolean | null>,
// }

//TS Mapped Types, Conditional Types
type FormGroupTemplate<Type> = {
    [Property in keyof Type]: FormControl<Type[Property] | null>;
};

export type IUserTypeFormGroup = FormGroupTemplate<IUserTypeForm>