import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Authentication/login/login.component';
import { ForgetPasswordComponent } from './Authentication/forget-password/forget-password.component';
import { DashboardComponent } from './PartnerDashboard/dashboard/dashboard.component';
import { SidebarComponent } from './PartnerDashboard/sidebar/sidebar.component';
import { AssetsComponent } from './PartnerDashboard/assets/assets.component';
import { WalletComponent } from './PartnerDashboard/wallet/wallet.component';
import { MessageComponent } from './PartnerDashboard/message/message.component';
import { AccountSettingsComponent } from './PartnerDashboard/account-settings/account-settings.component';
import { HelpComponent } from './PartnerDashboard/help/help.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgetPasswordComponent,
    DashboardComponent,
    SidebarComponent,
    AssetsComponent,
    WalletComponent,
    MessageComponent,
    AccountSettingsComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
