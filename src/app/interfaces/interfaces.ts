import { AsyncValidatorFn, FormArray, FormControl, FormGroup, ValidatorFn } from "@angular/forms";

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
  [Property in keyof Type]: Type[Property] extends Array<infer U> ? FormArray<FormGroup<FormGroupTemplate<U>>> : FormControl<Type[Property] | null> ;
};

// type Unarray<T> = T extends Array<infer U> ? U : T;

//TS Mapped Types, Conditional Types

export type FormGroupBuilderTemplate<Type> = {
  // [Property in keyof Type]: (Type[Property] | ValidatorConfig | null)[] | FormArray<FormGroup<FormGroupTemplate2<Unarray<Type[Property]>>>>;
  [Property in keyof Type]: Type[Property] extends Array<infer U> ? FormArray<FormGroup<FormGroupTemplate<U>>> : (Type[Property] | ValidatorConfig | null)[];
};
