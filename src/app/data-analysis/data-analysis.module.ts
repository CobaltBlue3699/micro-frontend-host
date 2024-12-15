import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { DataAnalysisComponent } from './data-analysis.component';
import { LoadMicroFrontendGuard } from 'src/micro-frontend/load-microfrontend.guard';
import { MicroFrontendRoutingDirective } from 'src/micro-frontend/micro-frontend-routing.directive';
import { MicroFrontendLanguageDirective } from 'src/micro-frontend/micro-frontend-language.directive';

const getMicrofrontendBundleUrl = (frontendName: 'data-analysis') =>
  `/frontends/${frontendName}/main.js`;

@NgModule({
  declarations: [
    DataAnalysisComponent,
    MicroFrontendRoutingDirective,
    MicroFrontendLanguageDirective,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '**',
        canActivate: [LoadMicroFrontendGuard],
        component: DataAnalysisComponent,
        data: {
          bundleUrl: getMicrofrontendBundleUrl('data-analysis'),
        },
      },
    ])
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DataAnalysisModule { }
