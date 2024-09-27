import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header-bar',
  standalone: true,
  templateUrl: './header-bar.component.html',
  imports: [
    NgbDropdownModule,
  ],
  styleUrl: './header-bar.component.scss'
})
export class HeaderBarComponent {

}
