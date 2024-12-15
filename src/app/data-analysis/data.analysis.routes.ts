import { Routes } from "@angular/router";

export const DATA_ANALYSIS_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./data-analysis.module').then(m => m.DataAnalysisModule),
  }
];
