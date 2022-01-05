import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css', '../../../assets/styles/navigation.css'],
})

/** A navigation element displaying links as a horizontal list. */
export class NavigationComponent {
  @Input() links: { text: string, target: string }[] = [];
}
