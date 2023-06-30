import { AfterViewInit, Directive } from "@angular/core";
import { NzModalRef, NzModalService } from "ng-zorro-antd/modal";
import { NzNotificationService } from "ng-zorro-antd/notification";
import { environment } from "src/environments/environment.development";
import { AppService } from "../../app.service";
import { DestroyTemplate } from "./destroy.template";


@Directive()
export abstract class BasicComponent extends DestroyTemplate implements AfterViewInit {
    protected title!: string;
    protected isLoading!: boolean;
    protected loadingTimeout!: string | number | NodeJS.Timeout | undefined;
    protected static initalised = false;
    protected ref!: NzModalRef<unknown>;

    protected connection!: NzModalRef<unknown>;

    constructor(
        protected readonly toast: NzNotificationService,
        protected readonly modal: NzModalService,
        protected readonly appService: AppService,
    ) {
        super();
    }

    ngAfterViewInit() {
        BasicComponent.initalised = true;
    }

    private setOffline() {
        this.connection = this.modal.error({
            nzTitle: 'Connection',
            nzContent: 'You are Offline',
            nzMaskClosable: false,
            nzClosable: false,
            nzOkDisabled: true,
        })
    }

    private setOnline() {
        if(this.connection) {
            this.connection.destroy();
        }
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    openDialog(component: any, title: string, _onConfirm: (ref: any) => any = () => { }, _onCancel: (ref: any) => any = () => {}, data?: any) {
        const dialogRef = this.modal.create({
            nzTitle: title,
            nzContent: component,
            nzMaskClosable: false,
            nzOnOk: _onConfirm,
            nzOnCancel: _onCancel,
            nzComponentParams: {
                InputData: data
            }
        });

        this.ref = dialogRef;
        return dialogRef;
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    showConfirmation(message: string, _onConfirm: () => any, _onCancel: () => any = () => {}) {
        this.ref = this.modal.confirm({
            nzTitle: 'Confirmation Required',
            nzContent: message,
            nzOkText: 'Confirm',
            nzOkType: 'primary',
            nzOkDanger: true,
            nzOnOk: _onConfirm,
            nzOnCancel: _onCancel,
        })
    }

    showError(message: string, title: string = this.title, loadingIncomplete?: boolean) {
        this.toast.error(title, message, environment.toastError);

        if(!loadingIncomplete) {
            this.setLoading(false);
        }
    }

    showSuccess(message: string, title: string = this.title, loadingIncomplete?: boolean) {
        this.toast.success(title, message, environment.toastSuccess);

        if(!loadingIncomplete) {
            this.setLoading(false);
        }
    }

    protected setLoading(isLoading: boolean) {
        if(!BasicComponent.initalised && isLoading) {
            this.loadingTimeout = setTimeout(() => {
                this.setLoading(isLoading);
            }, 500);
        } else {
            clearTimeout(this.loadingTimeout);
            this.isLoading = isLoading;

            if(isLoading && this.appService.loading.value) {
                this.appService.loading.next(false);
            }
        }
    }
}
