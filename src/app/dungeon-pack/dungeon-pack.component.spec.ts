import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DungeonPackComponent } from './dungeon-pack.component';

describe('DungeonPackComponent', () => {
  let component: DungeonPackComponent;
  let fixture: ComponentFixture<DungeonPackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DungeonPackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DungeonPackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
