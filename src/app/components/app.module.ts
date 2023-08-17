import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LovesItemComponent } from './loves-item/loves-item.component';
import { HasItemComponent } from './has-item/has-item.component';
import { LovesItemDetailComponent } from './loves-item-detail/loves-item-detail.component';
import { HasItemDetailComponent } from './has-item-detail/has-item-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LovesItemComponent,
    HasItemComponent,
    LovesItemDetailComponent,
    HasItemDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
