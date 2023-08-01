import { Directive } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { NzModalService } from "ng-zorro-antd/modal";
import { NzNotificationService } from "ng-zorro-antd/notification";
import { AppService } from "src/app/app.service";
import { FormGroupTemplate } from "src/app/structures/interfaces/interfaces";
import { BasicComponent } from "./basic-component.template";

@Directive()
export abstract class BasicComponentFormTemplate<T> extends BasicComponent {
  protected form!: FormGroup<FormGroupTemplate<T>>;

  constructor(
    protected readonly toast: NzNotificationService,
    protected readonly modal: NzModalService,
    protected readonly appService: AppService,
  ) {
    super(toast, modal, appService);
  }
}
