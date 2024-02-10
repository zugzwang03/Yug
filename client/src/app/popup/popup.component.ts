import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [MatDialogModule, RouterLink],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent {

}
