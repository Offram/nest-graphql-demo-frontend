import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Apollo } from 'apollo-angular';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { last, lastValueFrom, takeUntil } from 'rxjs';
import { AppService } from 'src/app/app.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { BasicComponentFormTemplate } from 'src/app/core/templates/basic-component-form.template';
import { FormTemplate } from 'src/app/core/templates/form.template';
import { GET_OWNERS } from 'src/app/graphql.operations';
import { Users } from 'src/app/structures/enums/enums';
import { FormGroupBuilderTemplate, RoleForm } from 'src/app/structures/interfaces/interfaces';
import { PetsGQL } from 'src/generated-types';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent extends BasicComponentFormTemplate<RoleForm> {
  owners: any[] = [];
  pets: any[] = [];
  errors: any;

  private loadingCustomTimeout: any;

  constructor(
    protected readonly toast: NzNotificationService,
    protected readonly modal: NzModalService,
    protected readonly appService: AppService,
    private readonly fb: FormBuilder,
    private readonly apollo: Apollo,
    private readonly getPetsService: PetsGQL,
    private readonly authService: AuthService,
  ) {
    super(toast, modal, appService);
    const formObj: FormGroupBuilderTemplate<RoleForm> = {
      role: [Users.ALL_ALLOWED_USER, [Validators.required,]],
    }
    this.form = this.fb.group(formObj);

    if (this.form.value.role)
      this.login(this.form.value.role);

    this.form.get('role')?.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((val) => {
      if (val) {
        this.login(val);
      }
    });

  }

  private getOwners() {
    this.apollo.query({
      query: GET_OWNERS
    }).pipe(takeUntil(this.destroy$)).subscribe({
      next: ({ data }: any) => {
        this.owners = data.owners;
      },
      error: (err) => {
        this.owners = [];
        this.errors = err;
      }
    });
  }

  private getOwnersQuery() {
    return lastValueFrom(
      this.apollo.query({
        query: GET_OWNERS
      }));
  }

  private getPets() {
    this.setLoading(true);
    lastValueFrom(this.getPetsService.fetch(undefined, {
      fetchPolicy: 'no-cache'
    })).then(({ data }) => {
      this.pets = data.pets;
    }).catch((err) => {
      this.pets = [];
      this.errors = err;
    }).finally(() => this.setLoading(false));
  }

  private getPetsQuery() {
    return lastValueFrom(this.getPetsService.fetch(undefined, {
      fetchPolicy: 'no-cache'
    }));
  }

  private login(type: Users) {
    if (type) {
      this.authService.logout();
      if (type === Users.LOGOUT) {
        this.getAllData();
      } else {
        this.setLoading(true);
        this.authService.login(type).then(() => {
          this.getAllData();
        });
      }
    }
  }

  private getOwnersAndPets() {
    this.setLoading(true);
    const promises = [];
    promises.push(this.getOwnersQuery());
    promises.push(this.getPetsQuery());

    this.owners = [];
    this.pets = [];
    this.errors = '';

    const result = Promise.all(promises).then((res) => {
      this.owners = (res[0] as any).data.owners;
      this.pets = (res[1] as any).data.pets;

    }).catch((err) => {
      this.errors = err;
    }).finally(() => this.setLoading(false));
  }

  private getAllData() {
    this.errors = '';
    this.getOwners();
    this.getPets();
  }

  setComponentLoading() {
    this.setLoading(true);

    if (this.loadingCustomTimeout) {
      clearTimeout(this.loadingCustomTimeout);
    }
    this.loadingCustomTimeout = setTimeout(() => {
      this.setLoading(false);
    }, 6000);
  }

  get Users() {
    return Users;
  }

}
