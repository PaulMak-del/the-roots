import { Component } from '@angular/core';
import { NavigationItemModel } from './navigation-item.model';

@Component({
    selector: 'app-navigation-menu',
    templateUrl: './navigation-menu.component.html',
    styleUrl: './navigation-menu.component.scss',
    standalone: false,
})
export class NavigationMenuComponent {
    protected menuElements: NavigationItemModel[] = [
        { name: 'Label_1', iconURL: 'fa-solid fa-kiwi-bird fa-2xl' },
        { name: 'Label_2', iconURL: 'fa-solid fa-edit fa-2xl' },
    ];
}
