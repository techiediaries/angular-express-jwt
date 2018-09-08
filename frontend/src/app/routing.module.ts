

import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";

import { ContactListComponent }  from './contact-list/contact-list.component';
import { ContactCreateComponent }  from './contact-create/contact-create.component';
import { ContactUpdateComponent }  from './contact-update/contact-update.component';
import { ContactDetailComponent }  from './contact-detail/contact-detail.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
    { path: 'contact-list',   component: ContactListComponent, canActivate: [AuthGuard] , pathMatch:  'full'},
    { path: 'contact-create', component: ContactCreateComponent, canActivate: [AuthGuard] , pathMatch: 'full'},
    { path: 'contact-update', component: ContactUpdateComponent},
    { path: 'contact-detail/:id', component: ContactDetailComponent},
    { path: 'login', component: LoginComponent},
    { path: '',  redirectTo: '/contact-list', pathMatch: 'full' }        
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);






