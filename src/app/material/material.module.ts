import * as Material from "@angular/material";
import { NgModule } from "@angular/core";

@NgModule({
    imports: [
        Material.MatGridListModule, // for grid column
        Material.MatFormFieldModule, //form
        Material.MatInputModule, //input
        Material.MatRadioModule, //mat-radio-group - radio button
        Material.MatDatepickerModule, //matDatepicker - datepicker
        Material.MatNativeDateModule, //required for datepicker
        Material.MatSelectModule, //mat-select - dropdown
        Material.MatCheckboxModule, //mat-checkbox - checkbox
        Material.MatButtonModule, // for button
        Material.MatIconModule,
        Material.MatButtonModule, 
        Material.MatCheckboxModule,
        Material.MatToolbarModule,
        Material.MatInputModule,
        Material.MatProgressSpinnerModule,
        Material.MatCardModule,
        Material.MatMenuModule,
        Material.MatTableModule,
        Material.MatPaginatorModule,
        Material.MatSortModule
    ],
    exports: [
        Material.MatGridListModule,
        Material.MatFormFieldModule,
        Material.MatInputModule,
        Material.MatRadioModule,
        Material.MatDatepickerModule,
        Material.MatNativeDateModule,
        Material.MatSelectModule,
        Material.MatCheckboxModule,
        Material.MatButtonModule,
        Material.MatIconModule,
        Material.MatButtonModule, 
        Material.MatCheckboxModule,
        Material.MatToolbarModule,
        Material.MatInputModule,
        Material.MatProgressSpinnerModule,
        Material.MatCardModule,
        Material.MatMenuModule,
        Material.MatTableModule,
        Material.MatPaginatorModule,
        Material.MatSortModule
    ]
})
export class MaterialModule { }