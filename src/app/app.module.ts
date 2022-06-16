import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { IdentificationComponent } from './identification/identification.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FriendComponent } from './friend/friend.component';
// routing
import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    IdentificationComponent,
    TransactionsComponent,
    UserprofileComponent,
    NavigationComponent,
    FriendComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    FormsModule,
    CommonModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
