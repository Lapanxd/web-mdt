import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dungeon-pack',
  templateUrl: './dungeon-pack.component.html',
  styleUrls: ['./dungeon-pack.component.scss']
})
export class DungeonPackComponent implements OnInit {

  @Input() id!: number;
  @Input() packs!: number[];
  @Input() percentage!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
