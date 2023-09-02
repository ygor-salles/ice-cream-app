export interface PaginationProps {
  onPageChange: (page: number) => void;
  itemsCount: number;
  siblingCount?: number;
  itemsPerPage: number;
  currentPage?: number;
}
