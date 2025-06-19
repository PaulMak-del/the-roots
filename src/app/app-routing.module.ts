import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    {
        path: 'auth',
        loadChildren: () =>
            import('./features/auth/auth.module').then(m => m.AuthModule),
    },
    {
        path: 'welcome',
        loadChildren: () =>
            import('./features/welcome/welcome.module').then(
                m => m.WelcomeModule
            ),
    },

    { path: '**', redirectTo: 'welcome' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
