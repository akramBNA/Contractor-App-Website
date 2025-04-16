import { Routes } from '@angular/router';
import { MainComponentComponent } from '../components/main-component/main-component.component';
import { DefaultRedirectComponent } from '../components/default-redirect/default-redirect.component';

export const routes: Routes = [
    { path: '', component: MainComponentComponent },
    { path: 'login', component: DefaultRedirectComponent },
];
