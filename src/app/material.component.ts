import { MatIconRegistry, MatToolbarModule, MatIconModule, MatButtonModule, MatCheckbox } from '@angular/material';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
    imports: [MatIconRegistry, MatToolbarModule, MatIconModule, MatButtonModule, MatCheckbox, BrowserAnimationsModule, MatFormFieldModule ],
    exports: [MatIconRegistry, MatToolbarModule, MatIconModule, MatButtonModule, MatCheckbox, BrowserAnimationsModule, MatFormFieldModule ]
})
export class MaterialModule {
}