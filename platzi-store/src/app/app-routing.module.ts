import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { DemoComponent } from './components/demo/demo.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AdminGuard } from './core/guards/admin.guard';

const routes: Routes = [
  { path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'products',
        loadChildren: () => import('./components/products/products.module').then(m => m.ProductsModule)
      },
      // {
      //   path: 'products/:id',
      //   component: ProductDetailComponent
      // },
      {
        path: 'contact',
        loadChildren: () => import('./components/contact/contact.module').then(m => m.ContactModule)
      },
      { path: '404',
        loadChildren: () => import('./components/notfound/notfound.module').then(m => m.NotFoundModule)
      },
      { path: '500',
        loadChildren: () => import('./components/internalserver/internalserver.module').then(m => m.InternalServerModule)
      },
      {
        path: 'demo',
        canActivate: [AdminGuard],
        component: DemoComponent
      }
    ]
  },
  // el orden de las rutas es importante,
  // si algo no matchea una ruta no seguira a la siguiente, por lo que el notfound deberia ser la ultima ruta, siempre
  { path: '**', pathMatch: 'full', redirectTo: '404' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // configuracion para que precargue todos los modulos en una red lenta 3g
    // preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
