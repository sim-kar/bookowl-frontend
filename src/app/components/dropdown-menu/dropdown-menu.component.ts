import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.css', '../../../assets/styles/navigation.css'],
})
export class DropdownMenuComponent implements OnInit {
  @Input() text: string = '';
  @Input() links: { text: string, target: string }[] = [];

  ngOnInit(): void {
  }
}
