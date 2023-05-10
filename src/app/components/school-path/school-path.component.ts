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
      title: 'BAC STI2D',
      facility: 'Lycée Langevin Wallon',
      details: 'Spécialité SIN'
    },
    {
      year: '2018 à 2020',
      title: 'Pilote de machine de mise sous pli',
      facility: 'SOCIETE GENERALE',
      details: 'Détails'
    },
    {
      year: '2020 à 2021',
      title: 'Stage de fin de bachelor',
      facility: 'Signature Code',
      details: 'Détails'
    },
    {
      year: '2021 à 2022',
      title: 'Alternance',
      facility: 'Signature Code',
      details: 'Détails'
    },
    {
      year: '2022 à Aujourd\'hui',
      title: 'Alternance',
      facility: 'Vinci Construction SI',
      details: 'Détails'
    },
  ];

  constructor() { }

  ngOnInit(): void {
    this.timeline = this.timeline.reverse();
  }

}
