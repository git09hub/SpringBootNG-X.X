import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styles: []
})
export class ForComponent implements OnInit {
  items = [];
  constructor() {
    this.items = [{ 'id': '1', 'name': 'taraq' }, { 'id': '2', 'name': 'sai' }, { 'id': '3', 'name': 'test' }];
  }

  ngOnInit() {
  }

}
