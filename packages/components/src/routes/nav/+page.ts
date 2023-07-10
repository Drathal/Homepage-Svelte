import { Nav } from '../../lib';

const leftNavItems = [
  {
    name: '$home',
    path: '/'
  }
];

const rightNavItems = [
  {
    name: 'demo1',
    path: '/nav#1'
  },
  {
    name: 'demo2',
    path: '/nav#1'
  },
  {
    name: 'nav',
    path: '/nav'
  },
  {
    name: 'demo3',
    path: '/nav#1'
  }
];

export function load({ route }) {
  return {
    component: Nav,
    props: {
      leftNavItems,
      rightNavItems,
      github: route.id + '#github',
      currentRoute: route.id
    }
  };
}
