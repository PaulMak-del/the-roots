import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { MatButton, MatIconButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatTabNav } from '@angular/material/tabs';

@NgModule({
    declarations: [NavigationMenuComponent],
    imports: [CommonModule, MatButton, MatIconButton, RouterLink, MatTabNav],
    exports: [NavigationMenuComponent],
})
export class SharedModule {}
