import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AgGridModule } from 'ag-grid-angular';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule, MatOptionModule, MatSelectModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS }    from '@angular/common/http';
import { RouterLinkRendererComponent } from './shared/components/router-link-renderer/router-link-renderer.component';
import { CompanionDetailComponent } from './modules/companion-detail/companion-detail.page';
import { LoginComponent } from './modules/login/login.page';
import { AuthenticationGuard } from './guards/authentication-guard';
import { HomeComponent } from './modules/home/home.page';
import { CompanionsSummaryComponent } from './modules/companions-summary/companions-summary.page';
import { HeaderComponent } from './core/header/header/header.component';
import { JwtInterceptor } from './core/auth/jwt.interceptor';
import { HasPermissionDirective } from './shared/directives/has-permission.directive';
import { MissingPermissionDirective } from './shared/directives/missing-permission.directive';

@NgModule({
  declarations: [
    AppComponent,
    CompanionsSummaryComponent,
    RouterLinkRendererComponent,
    CompanionDetailComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    HasPermissionDirective,
    MissingPermissionDirective
  ],
  entryComponents: [RouterLinkRendererComponent],
  imports: [
    AgGridModule.withComponents(null),
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatToolbarModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },    
    AuthenticationGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
