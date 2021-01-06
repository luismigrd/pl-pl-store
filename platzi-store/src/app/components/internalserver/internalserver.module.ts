import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InternalserverComponent } from './components/internalserver/internalserver.component';
import { InternalServerRoutingModule } from './internalserver-routing.module';


@NgModule({
  declarations: [
    InternalserverComponent
  ],
  imports: [
    CommonModule,
    InternalServerRoutingModule
  ]
})
export class InternalServerModule { }
