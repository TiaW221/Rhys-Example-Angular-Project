import { Routes } from '@angular/router';
import {Page1} from './Pages/page1/page1';
import {Page2} from './Pages/page2/page2';

export const routes: Routes = [
  { path: '',
    component: Page1,
    title: 'Homepage',
  },
  { path: 'Page2',
    component: Page2,
    title: 'Page2',
  },
];

