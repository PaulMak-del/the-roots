import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { MatButtonToggle } from '@angular/material/button-toggle';
import { MatSlideToggle } from '@angular/material/slide-toggle';

@NgModule({
    declarations: [WelcomeComponent],
    imports: [
        CommonModule,
        WelcomeRoutingModule,
        MatButtonToggle,
        MatSlideToggle,
    ],
})
export class WelcomeModule {}
