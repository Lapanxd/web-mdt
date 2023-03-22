import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DungeonPackService } from '../dungeon-pack.service';
import { IDungeonPack } from '../models/dungeon-pack';

@Component({
  selector: 'app-dungeon',
  templateUrl: './dungeon.component.html',
  styleUrls: ['./dungeon.component.scss']
})
export class DungeonComponent implements OnInit {

  dungeonPacks!: IDungeonPack[];

  dungeonPackSubscribtion!: Subscription;

  constructor(private dungeonPackService: DungeonPackService) { }

  ngOnInit(): void {
    // this.dungeonPackSubscribtion = this.dungeonPackService.dungeonPacks$.subscribe((dungeonPacks: IDungeonPack[]) => {
    //   this.dungeonPacks.id,

    // })
  }

}
