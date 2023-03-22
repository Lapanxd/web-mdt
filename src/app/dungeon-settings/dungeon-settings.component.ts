import { Component, OnInit } from '@angular/core';
import { IDungeonPack } from '../models/dungeon-pack';
import { DungeonPackService } from '../dungeon-pack.service';

@Component({
  selector: 'app-dungeon-settings',
  templateUrl: './dungeon-settings.component.html',
  styleUrls: ['./dungeon-settings.component.scss']
})
export class DungeonSettingsComponent implements OnInit {

  constructor(private dungeonPackService: DungeonPackService) {}

  ngOnInit(): void {
  }

  addPull(){
    this.dungeonPackService.addNewPack();
  }

}
