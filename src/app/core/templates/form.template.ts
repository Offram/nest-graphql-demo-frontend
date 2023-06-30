import { Directive } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormGroupTemplate } from "../interfaces/interfaces";
import { DestroyTemplate } from "./destroy.template";

@Directive()
export abstract class FormTemplate<T> extends DestroyTemplate {
  protected form!: FormGroup<FormGroupTemplate<T>>;
  constructor(
  ) {
    super();
  }
}
