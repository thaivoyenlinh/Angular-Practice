import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddComponent } from "./add.component";
import { AddProductRoutingModule } from "./add-routing.module";

@NgModule({
    declarations: [
        AddComponent,
    ],
    imports: [
        AddProductRoutingModule,
        CommonModule
    ] 
})

export class AddProductModule { }