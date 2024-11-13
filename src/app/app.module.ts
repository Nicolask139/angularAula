import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeNGModule } from './primeng.module';
import { CepComponent } from './cep/cep.component';
import { CnpjComponent } from './cnpj/cnpj.component';
import { CepService } from './cep/cep.service';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';
import { CnpjService } from './cnpj/cnpj.service';

@NgModule({
  declarations: [	
    AppComponent,
      CepComponent,
      CnpjComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    PrimeNGModule,
    FormsModule
  ],
  providers: [CnpjService, CepService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
