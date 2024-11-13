import { NgModule } from "@angular/core";
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { KeyFilterModule } from 'primeng/keyfilter';
import { InputMaskModule } from 'primeng/inputmask';


@NgModule({
    exports:[
        ButtonModule,
        InputTextModule,
        KeyFilterModule,
        InputMaskModule
    ]
})


export class PrimeNGModule { }