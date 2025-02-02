import { Component } from '@angular/core';
import { CounterButtonComponent } from './components/counter-button.component/counter-button.component';
import { CounterComponent } from './components/counter.component/counter.component';
import { InventoriesButtonComponent } from './components/inventories-button.component/inventories-button.component';
import { InventoriesComponent } from './components/inventories.component/inventories.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false,
  /*
  imports: [
    CounterButtonComponent,
    CounterComponent,
    InventoriesButtonComponent,
    InventoriesComponent
  ]

   */
})
export class AppComponent {
}
