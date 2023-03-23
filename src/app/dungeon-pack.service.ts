import { Injectable } from '@angular/core';
import { IDungeonPack } from './models/dungeon-pack';
import { BehaviorSubject, scan } from 'rxjs';
import { packPercents } from './dungeon-databases/tjs';

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

  public activePack: number = 0;
  public totalPercentage: number = 0;

  public dungeonPacks$: BehaviorSubject<IDungeonPack[]>;
  public dungeonPercentage$: BehaviorSubject<number>;
  public activePack$: BehaviorSubject<number>;

  constructor() { 
    this.dungeonPacks$ = new BehaviorSubject<IDungeonPack[]>(this.dungeonPacks);
    this.dungeonPercentage$ = new BehaviorSubject<number>(this.totalPercentage);
    this.activePack$ = new BehaviorSubject<number>(this.activePack);

    this.dungeonPacks.forEach((pack) => {
      this.dungeonPercentage$.next(this.dungeonPercentage$.value + pack.percentage)
    });
  }

  addNewPack(): void {
    let lastId = this.dungeonPacks.map(pack => pack.id).reduce((prev, curr) => curr > prev ? curr : prev);
    this.dungeonPacks.push({
      id: lastId+1,
      packs: [],
      percentage: 0
    });
  }

  updatePack(pack: number): void {
    const isPackAlreadyPresent = this.dungeonPacks.some(dungeonPack => dungeonPack.packs.includes(pack));
    if(!isPackAlreadyPresent){
      this.dungeonPacks[this.activePack].packs = [...this.dungeonPacks[this.activePack].packs, pack];
      this.dungeonPacks[this.activePack].percentage+=packPercents[pack-1];  
      this.updateTotalPercentage(pack)
    } else {
      alert("Ce pack est déjà dans un pull.")
    }
  }

  updateTotalPercentage(pack: number): void {
    this.dungeonPercentage$.next(parseFloat((this.dungeonPercentage$.value + packPercents[pack-1]).toFixed(2)));
  }
}
