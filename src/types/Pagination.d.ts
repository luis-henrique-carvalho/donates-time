export interface IPagination {
  scaffold_url: string;
  first_url: string;
  prev_url: string | null;
  page_url: string;
  next_url: string | null;
  last_url: string;
  count: number;
  page: number;
  items: number;
  vars: IPaginationVars;
  pages: number;
  last: number;
  in: number;
  from: number;
  to: number;
  prev: number | null;
  next: number | null;
  series: string[];
}
