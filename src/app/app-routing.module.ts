import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeVisualComponent } from './components/poke-visual/poke-visual.component';
import { PokeTableComponent } from './components/poke-table/poke-table.component';

const routes: Routes = [
  {path: 'home', component:PokeTableComponent},
  {path: 'pokeVisual/:id', component:PokeVisualComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '**', pathMatch: 'full', redirectTo: 'home'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
