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
    id : 'mecanic-navigation',
    title : 'Navigation Mécanicien',
    type : 'group',
    children : [    
      {
        id: 'travaux',
        title : 'Travaux affiliés',
        type: 'item',
        icon: '',
        classes: 'nav-item',
        url: '/mecanic/travaux/1',
        breadcrumbs: true
      },
      {
        id: 'disconnect',
        title : 'Déconnexion',
        type: 'item',
        icon: '',
        classes: 'nav-item',
        url: '/employee/login',
        breadcrumbs: true
      }
    ]
  }
];
