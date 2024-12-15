import { Routes } from "@angular/router";

export const DATA_ANALYSIS_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./data-analysis.component').then(m => m.DataAnalysisComponent),
  }
];
