import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from "./layout/header/header.component";
import { SharedModule } from './shared/shared.module';
import { TranslateService } from '@ngx-translate/core';
import { Lanauages } from './core/enums/languages';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SharedModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'micro-frontend';

  translate = inject(TranslateService);

  ngOnInit(): void {
  }

}
