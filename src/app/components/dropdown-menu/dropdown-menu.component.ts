import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.css', '../../../assets/styles/navigation.css'],
})

/**
 * A dropdown menu with links. It has a button with the provided text on it, and hovering over the
 * button displays the menu with the provided links.
 */
export class DropdownMenuComponent {
  @Input() text: string = '';
  @Input() links: { text: string, target: string }[] = [];
}
