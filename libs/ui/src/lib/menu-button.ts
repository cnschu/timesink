export interface MenuButton {
  entries: MenuButtonEntry[];
  label: string;
  type?: 'primary' | 'accent' | 'warn';
}

export interface MenuButtonEntry {
  label: string;
  route?: string;
  params?: string[];
}