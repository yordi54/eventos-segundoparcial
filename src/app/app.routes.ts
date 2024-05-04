import { Routes } from '@angular/router';
import { PrincipalComponent } from './public/components/principal/principal.component';

export const routes: Routes = [
    { path: '', component: PrincipalComponent},
    { path: 'principal', component: PrincipalComponent},
    { path: '**', redirectTo: ''}
];
