import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from "./app/add.component";
import { ViewComponent } from "./app/view/view.component";
import { NotFoundComponent } from "./app/not-found/not-found.component";
import { ModalComponent } from "./app/modal/modal.component";
import { MultiSelectComponent } from './app/multi-select/multi-select.component';
import { LoginComponent } from './app/login/login.component';
import { ForComponent } from './app/for/for.component';

const MAINMENU_ROUTES: Routes = [
    //full : makes sure the path is absolute path
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: 'add', component: AddComponent },
    { path: 'view', component: ViewComponent },
    { path: 'modal', component: ModalComponent },
    { path: 'ngMultiSelected', component: MultiSelectComponent },
    { path: 'login', component: LoginComponent },
    { path: 'for', component: ForComponent },
    { path: '**', component: NotFoundComponent }
];

export const CONST_ROUTING = RouterModule.forRoot(
	MAINMENU_ROUTES,
	{ 
		enableTracing: true 
	}
);