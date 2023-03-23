import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { DungeonPackService } from '../dungeon-pack.service';
import { IDungeonPack } from '../models/dungeon-pack';

@Component({
  selector: 'app-dungeon-pack',
  templateUrl: './dungeon-pack.component.html',
  styleUrls: ['./dungeon-pack.component.scss']
})
export class DungeonPackComponent implements OnInit {

  @Input() id!: number;
  @Input() packs!: number[];
  @Input() percentage!: number;

  @Output() dungeonPackState = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }


  setActiveDungeonPack(){
    this.dungeonPackState.emit(this.id)
  }
}
