import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css', '../../../assets/styles/navigation.css'],
})
export class NavigationComponent implements OnInit {
  @Input() links: { text: string, target: string }[] = [];

  constructor() { }

  ngOnInit(): void {
  }
}
