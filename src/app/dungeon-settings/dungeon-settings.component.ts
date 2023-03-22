import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DungeonPackService } from '../dungeon-pack.service';
import { IDungeonPack } from '../models/dungeon-pack';

@Component({
  selector: 'app-dungeon-settings',
  templateUrl: './dungeon-settings.component.html',
  styleUrls: ['./dungeon-settings.component.scss']
})
export class DungeonSettingsComponent implements OnInit {

  dungeonPacks!: IDungeonPack[];
  dungeonPercentages!: number;
  dungeonPackSubscribtion!: Subscription;
  dungeonPercentagesSubscribtion!: Subscription;

  constructor(private dungeonPackService: DungeonPackService) {}

  ngOnInit(): void {
    this.dungeonPackSubscribtion = this.dungeonPackService.dungeonPacks$.subscribe((dungeonPacks: IDungeonPack[]) => {
      this.dungeonPacks = dungeonPacks;
    });

    this.dungeonPercentagesSubscribtion = this.dungeonPackService.dungeonPercentage$.subscribe((dungeonPercentages: number) => {
      this.dungeonPercentages = dungeonPercentages;
    });
  }

  addPull = () => { this.dungeonPackService.addNewPack(); }

}
