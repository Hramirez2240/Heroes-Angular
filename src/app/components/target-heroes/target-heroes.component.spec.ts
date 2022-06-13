import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetHeroesComponent } from './target-heroes.component';

describe('TargetHeroesComponent', () => {
  let component: TargetHeroesComponent;
  let fixture: ComponentFixture<TargetHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TargetHeroesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
