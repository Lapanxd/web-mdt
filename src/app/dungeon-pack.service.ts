import { Injectable } from '@angular/core';
import { IDungeonPack } from './models/dungeon-pack';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DungeonPackService {

  private dungeonPacks: IDungeonPack[] = [
    {
      id: 0,
      packs: [],
      percentage: 0
    },
  ];

  public dungeonPacks$: BehaviorSubject<IDungeonPack[]>

  constructor() { 
    this.dungeonPacks$ = new BehaviorSubject<IDungeonPack[]>(this.dungeonPacks);
  }

  addNewPack(): void {
    let lastId = this.dungeonPacks.map(pack => pack.id).reduce((prev, curr) => curr > prev ? curr : prev);
    this.dungeonPacks.push({
      id: lastId+1,
      packs: [],
      percentage: 0
    });
  }

  
}
