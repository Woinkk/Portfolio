import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-school-path',
  templateUrl: './school-path.component.html',
  styleUrls: ['./school-path.component.less']
})
export class SchoolPathComponent implements OnInit {

  timeline: any[] = [
    {
      year: '2018',
      title: 'Titre',
      details: 'Détails'
    },
    {
      year: '2018 - 2020',
      title: 'Titre',
      details: 'Détails'
    },
    {
      year: '2020 - 2022',
      title: 'Titre',
      details: 'Détails'
    },
    {
      year: '2022 - Maintenant',
      title: 'Titre',
      details: 'Détails'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
