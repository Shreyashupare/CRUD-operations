import { Component, OnInit,Inject } from '@angular/core';

import {MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-deletedialogue',
  templateUrl: './deletedialogue.component.html',
  styleUrls: ['./deletedialogue.component.css']
})
export class DeletedialogueComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
