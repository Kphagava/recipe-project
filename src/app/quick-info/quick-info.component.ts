import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quick-info',
  templateUrl: './quick-info.component.html',
  styleUrls: ['./quick-info.component.css']
})
export class QuickInfoComponent {
@Input() recipeDifficulty: string = "unkown difficulty"
}
