import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

import { MatPaginatorModule } from '@angular/material/paginator';
const MaterialComponents = [
  MatButtonModule,
  MatDialogModule,
  MatToolbarModule,
  MatSnackBarModule,
  MatPaginatorModule,
  MatMenuModule
];
@NgModule({
  imports: [ MaterialComponents],
  exports: [ MaterialComponents]
})
export class MaterialModule { }
