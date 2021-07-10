import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { MatIconModule } from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
const MaterialComponents = [
  MatButtonModule,
  MatDialogModule,
  MatToolbarModule,
  MatSnackBarModule,
  MatPaginatorModule,
  MatMenuModule,
  MatTableModule,
  MatIconModule
];
@NgModule({
  imports: [ MaterialComponents],
  exports: [ MaterialComponents]
})
export class MaterialModule { }
