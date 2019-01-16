import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ReferencesComponent } from './references/references.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
    { 
        path: 'home', 
        component: HomeComponent,
        data: { titulo: 'Perfil' }
    },
    { 
        path: 'resume', 
        component: ResumeComponent,
        data: { titulo: 'Curriculum' }
    },
    { 
        path: 'portfolio', 
        component: PortfolioComponent,
        data: { titulo: 'Portfolio' }
    },
    { 
        path: 'references', 
        component: ReferencesComponent,
        data: { titulo: 'Referencias' }
    },
    { 
        path: 'contact', 
        component: ContactComponent,
        data: { titulo: 'Contacto' }
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
}) 
export class PagesRoutingModule {}
