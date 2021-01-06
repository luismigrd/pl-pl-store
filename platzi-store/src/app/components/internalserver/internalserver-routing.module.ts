import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternalserverComponent } from './components/internalserver/internalserver.component';

const routes: Routes = [
    {
        path: '',
        component: InternalserverComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class InternalServerRoutingModule {}
