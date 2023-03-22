import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DungeonSettingsComponent } from './dungeon-settings.component';

describe('DungeonSettingsComponent', () => {
  let component: DungeonSettingsComponent;
  let fixture: ComponentFixture<DungeonSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DungeonSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DungeonSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
