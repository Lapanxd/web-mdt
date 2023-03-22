import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DungeonMapComponent } from './dungeon-map.component';

describe('DungeonMapComponent', () => {
  let component: DungeonMapComponent;
  let fixture: ComponentFixture<DungeonMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DungeonMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DungeonMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
