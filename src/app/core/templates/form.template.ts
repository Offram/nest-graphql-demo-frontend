import { Directive } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DestroyTemplate } from "./destroy.template";
import { FormGroupTemplate } from "src/app/structures/interfaces/interfaces";

@Directive()
export abstract class FormTemplate<T> extends DestroyTemplate {
  protected form!: FormGroup<FormGroupTemplate<T>>;
  constructor(
  ) {
    super();
  }
}
