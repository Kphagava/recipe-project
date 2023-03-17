import { Component } from '@angular/core';
import { VirtualStorageService } from 'src/app/services/virtual-storage.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  constructor(public virtualStorage:VirtualStorageService){}
}
