import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';

import { MatToolbarModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatTableModule, MatDialogModule } from '@angular/material';

import { HomePageComponent } from './home-page/home-page.component';

import { from } from 'rxjs';
import { TitleComponent } from './title/title.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TitleComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    ChartsModule
    

  ],
  providers: [AuthGuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
