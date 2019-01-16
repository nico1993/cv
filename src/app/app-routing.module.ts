//Modules
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

//Components
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
    { 
        path: '', 
        component: PagesComponent,
        loadChildren: './pages/pages.module#PagesModule'
    },
    // { path: '**', component: NopagefoundComponent },    
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
