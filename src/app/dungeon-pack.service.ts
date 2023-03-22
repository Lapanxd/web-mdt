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
      packs: [1, 2, 3],
      percentage: 0

    },
  ];

  public dungeonPacks$: BehaviorSubject<IDungeonPack[]>;
  public dungeonPercentage$: BehaviorSubject<number>;

  constructor() { 
    this.dungeonPacks$ = new BehaviorSubject<IDungeonPack[]>(this.dungeonPacks);
    this.dungeonPercentage$ = new BehaviorSubject<number>(0);

    this.dungeonPacks.forEach((pack) => {
      this.dungeonPercentage$.next(this.dungeonPercentage$.value + pack.percentage)
    })
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
