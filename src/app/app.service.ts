import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { DestroyTemplate } from './core/templates/destroy.template';

@Injectable({
  providedIn: 'root'
})
export class AppService extends DestroyTemplate implements OnDestroy {
  public sidebarTimeout: unknown;

  private appSettings = {};
  loading: BehaviorSubject<boolean>;

  constructor() {
    super();
    this.loading = new BehaviorSubject(false);

    if (!this.appSettings) {
      const localData = localStorage.getItem(`${environment.appName}-settings`);

      if (localData) {
        this.appSettings = JSON.parse(localData);
      }
    }

    console.log('Version: ', environment?.version);
  }

  init() {
    //
  }

  override ngOnDestroy(): void {
    super.ngOnDestroy();
    this.loading.next(false);
    this.loading.complete();
  }

}
