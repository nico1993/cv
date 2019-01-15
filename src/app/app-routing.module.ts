//Modules
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

//Components
import { PagesComponent } from './components/pages/pages.component';

const routes: Routes = [
    { path: '', component: PagesComponent },
    { path: '**', component: PagesComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
