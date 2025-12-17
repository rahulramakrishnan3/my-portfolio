export class Constants {
  name: string = 'Rahul KR';
  role: string = 'Software Developer';
}
export const APP_CONSTANTS = {
  NAME: 'Rahul KR',
  ROLE: 'Angular Developer',
  TAGLINE:
    'A Software Developer with solid foundation in Angular. Passionate about crafting seamless user experience.',
};
export interface NavItem {
  label: string;
  route: string;
  exact?: boolean;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', route: '/', exact: true },
  { label: 'About', route: '/about' },
  { label: 'Contact', route: '/contact-form' },
  { label: 'Projects', route: '/projects' },
];
