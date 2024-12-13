export interface HeaderLinkType {
  title: string;
  link: string;
  disabled?: boolean;
  items?: Array<{
    title: string;
    link: string;
    disabled?: boolean;
  }>
}