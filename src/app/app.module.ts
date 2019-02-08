import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.components';
import { ConvertToSpace } from './shared/convert-to-spaces.pipe';

@NgModule({
  declarations: [
    AppComponent, ProductListComponent, ConvertToSpace
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
