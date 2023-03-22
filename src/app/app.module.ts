import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DungeonComponent } from './dungeon/dungeon.component';
import { DungeonSettingsComponent } from './dungeon-settings/dungeon-settings.component';
import { DungeonPackComponent } from './dungeon-pack/dungeon-pack.component';
import { DungeonMapComponent } from './dungeon-map/dungeon-map.component';

@NgModule({
  declarations: [
    AppComponent,
    DungeonComponent,
    DungeonSettingsComponent,
    DungeonPackComponent,
    DungeonMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
