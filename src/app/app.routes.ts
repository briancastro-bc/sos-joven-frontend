import { Route } from "@angular/router";

export const APPLICATION_ROUTES: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'startup'
  },
  {
    path: 'startup',
    data: {
      title: 'titles.startup'
    },
    loadComponent: () => import('./views/startup/startup.component'),
  },
  {
    path: 'chat',
    data: {
      title: 'titles.chat'
    },
    loadComponent: () => import('./views/chat/chat.component'),
  },
  {
    path: 'clearyourhead',
    data: {
      title: 'titles.clearyourhead',
    },
    loadComponent: () => import('./views/clearyourhead/clearyourhead.component'),
  },
  {
    path: '**',
    data: {
      title: 'titles.not_found'
    },
    loadComponent: () => import('./views/page-not-found/page-not-found.component'),
  }
];
