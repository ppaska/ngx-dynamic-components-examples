import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DynamicComponentsCoreModule } from '@ngx-dynamic-components/core';
import { DynamicComponentsBootstrapModule } from '@ngx-dynamic-components/bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './components/forms/forms.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { DropdownsComponent } from './components/dropdowns/dropdowns.component';
import { RegFormComponent } from './components/reg-form/reg-form.component';
import { DropdownsJsonComponent } from './components/dropdowns-json/dropdowns-json.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    ContactUsComponent,
    DropdownsComponent,
    RegFormComponent,
    DropdownsJsonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DynamicComponentsCoreModule,
    DynamicComponentsBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
