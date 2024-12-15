import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-data-analysis',
  standalone: true,
  imports: [SharedModule],
  template: `
    data-analysis works!
    <router-outlet />
  `,
  styles: ``
})
export class DataAnalysisComponent {

}
