

import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";

import { ContactListComponent }  from './contact-list/contact-list.component';
import { ContactCreateComponent }  from './contact-create/contact-create.component';
import { ContactUpdateComponent }  from './contact-update/contact-update.component';
import { ContactDetailComponent }  from './contact-detail/contact-detail.component';


const routes: Routes = [
    { path: 'contact-list',   component: ContactListComponent},
    { path: 'contact-create', component: ContactCreateComponent},
    { path: 'contact-update', component: ContactUpdateComponent},
    { path: 'contact-detail/:id', component: ContactDetailComponent},
    { path: '',  redirectTo: '/contact-list', pathMatch: 'full' }        
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);






