import { Component, Input } from "@angular/core";
import { NzModalRef } from "ng-zorro-antd/modal";
import { DestroyTemplate } from "./destroy.template";

@Component({
    selector: 'app-nz-modal-component-template',
    template: `{{InputData}}`
})
export abstract class NzModalTemplateComponent extends DestroyTemplate {
    @Input() InputData: unknown;

    constructor(
        protected modal: NzModalRef
    ) {
        super();
    }

    protected destroyModal(): void {
        this.modal.destroy();
    }

    protected beforeCancel() {
        //Override this
    }

    cancel(): void {
        this.beforeCancel();
        this.modal.triggerCancel();
        this.destroyModal();
    }

    protected beforeSubmit() {
        //Override this
    }

    submit(): void {
        this.beforeSubmit();
        this.modal.triggerOk();
        this.destroyModal();
    }

}
