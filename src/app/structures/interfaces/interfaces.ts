import { AsyncValidatorFn, FormControl, ValidatorFn } from "@angular/forms";
import { Users } from "../enums/enums";

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

// export type IUserTypeFormGroup = FormGroupTemplate<IUserTypeForm>;


declare type ValidatorConfig = ValidatorFn | AsyncValidatorFn | ValidatorFn[] | AsyncValidatorFn[];

//TS Mapped Types, Conditional Types
export type FormGroupTemplate<Type> = {
    [Property in keyof Type]: FormControl<Type[Property] | null>;
};

//TS Mapped Types, Conditional Types
export type FormGroupBuilderTemplate<Type> = {
    [Property in keyof Type]: (Type[Property] | ValidatorConfig | null)[];
};



export interface RoleForm {
  role: Users,
}
