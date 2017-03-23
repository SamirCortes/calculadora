import { Component } from '@angular/core';

import { EspeciesPage } from '../especies/especies';
import { CalculadoraPage } from '../calculadora/calculadora';
import { MapaPage } from '../mapa/mapa';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = EspeciesPage;
  tab2Root: any = CalculadoraPage;
  tab3Root: any = MapaPage;

  constructor() {

  }
}
