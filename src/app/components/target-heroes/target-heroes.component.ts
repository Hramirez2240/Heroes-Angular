import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-target-heroes',
  templateUrl: './target-heroes.component.html',
  styleUrls: ['./target-heroes.component.css']
})
export class TargetHeroesComponent implements OnInit {

  @Input() hero: any = {};
  @Input() index: any;
  @Output() selectedHero: EventEmitter<number>;

  constructor(private _router: Router) {
    this.selectedHero = new EventEmitter();
  }

  ngOnInit(): void {
  }

  showHero(){
    this._router.navigate(['/hero', this.index]);
  }

}
