import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { RouterModule } from '@angular/router';
import { PatientState } from './emr/state/patient.state';
import { routes } from './emr/emr-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { EmrModule } from './emr/emr.module';
import { AuthInterceptor } from './emr/core/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmrModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // NgxsModule.forRoot([], { developmentMode: /** !environment.production */ false }),

    NgxsModule.forRoot([]),
    NgxsModule.forFeature([PatientState])

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true } // تسجيل الـ Interceptor
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
