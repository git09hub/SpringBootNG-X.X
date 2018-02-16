import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

import { ModalService } from './modal.service';

@Component({
	moduleId: module.id.toString(),
    templateUrl: './modal.component.html'    
})

export class ModalComponent implements OnInit{

	private bodyText: string;

    constructor(private modalService: ModalService) {
    }

    ngOnInit() {
        this.bodyText = 'This text can be updated in modal 1';
    }

    openModal(id: string){
    	alert('open modal');
        this.modalService.open(id);
    }

    closeModal(id: string){
        this.modalService.close(id);
    }

}
