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
  dungeonPackSubscribtion!: Subscription;

  dungeonPercentages!: number;
  dungeonPercentagesSubscribtion!: Subscription;

  activeDungeonPack!: number;
  activeDungeonPackSubscribtion!: Subscription;
  

  constructor(private dungeonPackService: DungeonPackService) {}

  ngOnInit(): void {
    this.dungeonPackSubscribtion = this.dungeonPackService.dungeonPacks$.subscribe((dungeonPacks: IDungeonPack[]) => {
      this.dungeonPacks = dungeonPacks;
    });

    this.dungeonPercentagesSubscribtion = this.dungeonPackService.dungeonPercentage$.subscribe((dungeonPercentages: number) => {
      this.dungeonPercentages = dungeonPercentages;
    });

    this.activeDungeonPackSubscribtion = this.dungeonPackService.activePack$.subscribe((activePack: number) => {
      this.activeDungeonPack = activePack;
    });
  }

  addPull = () => {
    this.dungeonPackService.addNewPack(); 
    this.dungeonPackService.activePack++;
  }

  setActiveDungeonPack(id: number){
    this.dungeonPackService.activePack = id;
  }

  ngOnDestroy(): void {
    if(this.dungeonPackSubscribtion){
      this.dungeonPackSubscribtion.unsubscribe();
    }

    if(this.dungeonPercentagesSubscribtion){
      this.dungeonPercentagesSubscribtion.unsubscribe();
    }

    if(this.activeDungeonPackSubscribtion){
      this.activeDungeonPackSubscribtion.unsubscribe();
    }
  }
}
