import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatCardModule, MatToolbarModule, MatInputModule, MatSnackBarModule, MatProgressSpinnerModule } 
  from '@angular/material';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, FormsModule, MatButtonModule, MatCardModule, MatToolbarModule,
    MatInputModule, MatSnackBarModule, HttpClientModule, MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
