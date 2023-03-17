import { Component } from '@angular/core';
import { VirtualStorageService } from '../services/virtual-storage.service';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent {
  constructor(public virtualStorage:VirtualStorageService){}
}
