import { Component } from '@angular/core';
import { IMenu } from 'src/app/structures/interfaces/interfaces';
import { MAIN_MENU } from 'src/app/menu';
import { DestroyTemplate } from 'src/app/core/templates/destroy.template';

@Component({
  selector: 'app-one-column-layout',
  templateUrl: './one-column-layout.component.html',
  styleUrls: ['./one-column-layout.component.scss']
})
export class OneColumnLayoutComponent extends DestroyTemplate {
  isCollapsed = false;
  private _children: IMenu[] = [];
  readonly mainMenu: IMenu[] = MAIN_MENU;

  constructor() {
    super();
  }

}
