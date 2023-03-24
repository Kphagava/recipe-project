import { Component } from '@angular/core';
import { VirtualStorageService } from 'src/app/services/virtual-storage.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  suggestions = [
    {
      id: 0,
      image: '/assets/Images/1.png',
      title: 'Easy Lasagna',
      description:'Cook Lasagna with these simple ingredients',
      time: '5 minutes'
    },
    {
      id: 1,
      image: '/assets/Images/3.png',
      title: 'Easy Lasagna',
      description:'Cook Lasagna with these simple ingredients',
      time: '15 minutes'
    },
    {
      id: 2,
      image: '/assets/Images/5.png',
      title: 'Easy Lasagna',
      description:'Cook Lasagna with these simple ingredients',
      time: '25 minutes'
    },
    {
      id: 3,
      image: '/assets/Images/9.png',
      title: 'Easy Lasagna',
      description:'Cook Lasagna with these simple ingredients',
      time: '35 minutes'
    },
  ];
  suggestions2 = [
    {
      id: 4,
      image: '/assets/Images/6.png',
      title: 'Easy Lasagna',
      description:'Cook Lasagna with these simple ingredients',
      time: '40 minutes'
    },
    {
      id: 5,
      image: '/assets/Images/2.png',
      title: 'Easy Lasagna',
      description:'Cook Lasagna with these simple ingredients',
      time: '30 minutes'
    },
    {
      id: 6,
      image: '/assets/Images/2.png',
      title: 'Easy Lasagna',
      description:'Cook Lasagna with these simple ingredients',
      time: '10 minutes'
    },
    {
      id: 3,
      image: '/assets/Images/2.png',
      title: 'Easy Lasagna',
      description:'Cook Lasagna with these simple ingredients',
      time: '5 minutes'
    },
  ];
  suggestions3 = [
    {
      id: 7,
      image: '/assets/Images/4.png',
      title: 'Easy Lasagna',
      description:'Cook Lasagna with these simple ingredients',
      time: '30 minutes'
    },
    {
      id: 8,
      image: '/assets/Images/7.png',
      title: 'Easy Lasagna',
      description:'Cook Lasagna with these simple ingredients',
      time: '25 minutes'
    },
    {
      id: 9,
      image: '/assets/Images/8.png',
      title: 'Easy Lasagna',
      description:'Cook Lasagna with these simple ingredients',
      time: '15 minutes'
    },
    {
      id: 10,
      image: '/assets/Images/10.png',
      title: 'Easy Lasagna',
      description:'Cook Lasagna with these simple ingredients',
      time: '25 minutes'
    },
  ];
  constructor(public virtualStorage:VirtualStorageService){}
}

