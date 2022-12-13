import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
// import { LoadingComponent } from './loading/loading.component';
// import { VisionComponent } from './vision/vision.component';
// import { PalletpackComponent } from './palletpack/palletpack.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material.module';
import { httpInterceptorProviders } from './http-inteceptors';
import { NoaccessComponent } from './home/noaccess/noaccess.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // LoadingComponent,
    // VisionComponent,
    HomeComponent,
    NoaccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, FormsModule, ReactiveFormsModule, MaterialModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
