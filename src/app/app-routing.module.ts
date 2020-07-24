import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from './components/forms/forms.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { DropdownsComponent } from './components/dropdowns/dropdowns.component';
import { RegFormComponent } from './components/reg-form/reg-form.component';
import { DropdownsJsonComponent } from './components/dropdowns-json/dropdowns-json.component';


const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'forms'
}, {
  path: 'forms',
  component: FormsComponent
}, {
  path: 'contact-us',
  component: ContactUsComponent
}, {
  path: 'dropdowns',
  component: DropdownsComponent
}, {
  path: 'dropdowns-json',
  component: DropdownsJsonComponent
}, {
  path: 'registration',
  component: RegFormComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
