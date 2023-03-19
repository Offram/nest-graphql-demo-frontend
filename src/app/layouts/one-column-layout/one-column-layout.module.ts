import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneColumnLayoutComponent } from './one-column-layout.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { IconsProviderModule } from 'src/app/icons-provider.module';



@NgModule({
  declarations: [
    OneColumnLayoutComponent
  ],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzMenuModule,
    AppRoutingModule,
    IconsProviderModule,
  ]
})
export class OneColumnLayoutModule { }
