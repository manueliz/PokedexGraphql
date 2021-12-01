import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeVisualComponent } from './components/poke-visual/poke-visual.component';
import { PokeTableComponent } from './components/poke-table/poke-table.component';
import { InfoComponent } from './components/info/info.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: 'home', component:PokeTableComponent},
  {path: 'login', component:LoginComponent},
  {path: 'about', component:InfoComponent},
  {path: 'pokeVisual/:id', component:PokeVisualComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '**', pathMatch: 'full', redirectTo: 'home'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
