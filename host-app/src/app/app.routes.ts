import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'remote-two',
    loadChildren: () =>
      import('remote-two/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'remote-one',
    loadChildren: () =>
      import('remote-one/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
