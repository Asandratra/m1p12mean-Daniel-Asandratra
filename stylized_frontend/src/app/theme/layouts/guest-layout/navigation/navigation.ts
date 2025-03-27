export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  groupClasses?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  children?: NavigationItem[];
  link?: string;
  description?: string;
  path?: string;
}

export const NavigationItems: NavigationItem[] = [
  {
    id : 'client-navigation',
    title : 'Navigation Client',
    type : 'group',
    children : [    
      {
        id: 'garages',
        title : 'Garages',
        type: 'item',
        icon: '',
        classes: 'nav-item',
        url: '/client/garages/1',
        breadcrumbs: true
      },
      {
        id: 'rendez-vous',
        title : 'Mes Rendez-vous',
        type: 'item',
        icon: '',
        classes: 'nav-item',
        url: '/client/rendez-vous/1',
        breadcrumbs: true
      },
      {
        id: 'travaux',
        title : 'Etat des travaux',
        type: 'item',
        icon: '',
        classes: 'nav-item',
        url: '/client/travaux/1',
        breadcrumbs: true
      },
      {
        id: 'disconnect',
        title : 'Déconnexion',
        type: 'item',
        icon: '',
        classes: 'nav-item',
        url: '/client/login',
        breadcrumbs: true
      }
    ]
  }
];
