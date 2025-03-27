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
    title : 'Navigation Manager',
    type : 'group',
    children : [
      {
        id: 'travaux',
        title : 'Travaux',
        type: 'item',
        icon: '',
        classes: 'nav-item',
        url: '/manager/travaux/1',
        breadcrumbs: true
      },
      {
        id: 'rendez-vous',
        title : 'Rendez-vous',
        type: 'item',
        icon: '',
        classes: 'nav-item',
        url: '/manager/rendez-vous/1',
        breadcrumbs: true
      },    
      {
        id: 'employee',
        title : 'Mécaniciens',
        type: 'item',
        icon: '',
        classes: 'nav-item',
        url: '/manager/employees/1',
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
