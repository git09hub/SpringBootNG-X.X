import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AddComponent } from './add.component';
import { CONST_ROUTING } from '../app.routing';
import { ViewComponent } from './view/view.component';
import { NotFoundComponent } from './not-found/not-found.component'; 
import { FilterPipe } from './pipes/filter.pipe';
import { OrderOrSortPipe } from './pipes/orderOrSort.pipe';

/*for modal popup*/
import { ModalModule, OverlayRenderer, DOMOverlayRenderer, Overlay } from 'angular2-modal';
import { Modal, BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { ModalComponent } from './modal/modal.component';
import { ModalControlsComponent } from './modalcontrols/modalcontrols.component';
import { ModalService } from './modal/modal.service';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { User } from './models/User';

/*multi select drop down */
import { AngularMultiSelectModule } from '../../node_modules/angular2-multiselect-checkbox-dropdown/angular2-multiselect-dropdown';
import { LoginComponent } from './login/login.component';
import { ForComponent } from './for/for.component';


const MODAL_PROVIDERS = [
  Modal,
  Overlay,
  { provide: OverlayRenderer, useClass: DOMOverlayRenderer }
];


@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ViewComponent,
    NotFoundComponent,
    FilterPipe,
    OrderOrSortPipe,
    ModalComponent,
    ModalControlsComponent,
    MultiSelectComponent,
    LoginComponent,
    ForComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CONST_ROUTING,
    ModalModule,
    BootstrapModalModule,
    AngularMultiSelectModule
  ],
  providers: [MODAL_PROVIDERS, ModalService, User],
  bootstrap: [AppComponent]
})

export class AppModule { }
