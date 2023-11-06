export interface PaginationProps {
  total: number;
  limit: string;
  page: string;
  onClick: React.MouseEventHandler<HTMLSpanElement>;
  pathTemplate: string;
}
