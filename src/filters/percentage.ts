import { PageNumber } from '../state';

// パーセント表記
export default function percentage(pageNumber: PageNumber): string {
  const { currentPage, maxPage } = pageNumber;
  return `${Math.ceil(currentPage / maxPage * 100)}%`;
}
