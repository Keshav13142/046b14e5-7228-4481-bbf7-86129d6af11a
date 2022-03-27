import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserhomeComponent } from './pages/userhome/userhome.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UserexpensesComponent } from './components/user-comp/userexpenses/userexpenses.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddExpenseComponent } from './components/user-comp/add-expense/add-expense.component';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { ViewExpenseComponent } from './components/user-comp/view-expense/view-expense.component';
import { AdminComponent } from './components/user-comp/admin/admin.component';
import { ViewemployeeComponent } from './components/user-comp/viewemployee/viewemployee.component';
import { ManagerApproveComponent } from './components/user-comp/manager-approve/manager-approve.component';
import {MatSelectModule} from '@angular/material/select';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { DeleteEmployeeComponent } from './components/delete-employee/delete-employee.component';
import { EmployeeDashboardComponent } from './components/user-comp/dashboards/employee-dashboard/employee-dashboard/employee-dashboard.component';
import { UploadFilesComponent } from './components/upload-files/upload-files.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewFileComponent } from './components/user-comp/view-file/view-file.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    UserhomeComponent,
    SidebarComponent,
    ProfileComponent,
    UserexpensesComponent,
    AddExpenseComponent,
    ViewExpenseComponent,
    AdminComponent,
    ViewemployeeComponent,
    ManagerApproveComponent,
    EditEmployeeComponent,
    DeleteEmployeeComponent,
    EmployeeDashboardComponent,
    UploadFilesComponent,
    ViewFileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRippleModule,
    NgxUiLoaderModule,
    ReactiveFormsModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true
    }),
    MatSelectModule,
    Ng2SearchPipeModule
  ],
  providers: [
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    UserhomeComponent,
    SidebarComponent,
    ProfileComponent,
    UserexpensesComponent,
    AddExpenseComponent,
    ViewExpenseComponent,
    AdminComponent,
    ViewemployeeComponent,
    ManagerApproveComponent,
    EditEmployeeComponent,
    DeleteEmployeeComponent,
    EmployeeDashboardComponent,
    UploadFilesComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
