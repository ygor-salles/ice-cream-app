/* eslint-disable prefer-const */
import { useMemo, useState } from 'react';

import { TextApp } from '../TextApp';
import { ArrowButton, Container, Icon, Number, Page } from './styles';
import { PaginationProps } from './types';

function getRange(start: number, end: number) {
  let length = end - start + 1;
  return Array.from({ length }, (_, index) => index + start);
}

export function Pagination({
  itemsCount,
  itemsPerPage,
  onPageChange,
  currentPage,
  siblingCount,
  ...rest
}: PaginationProps) {
  const [currentPageState, setCurrentPageState] = useState(currentPage);
  const totalPageCount = Math.ceil(itemsCount / itemsPerPage);

  const disabledNext = currentPageState === totalPageCount;
  const disabledPrevious = currentPageState === 1;

  const paginationRange = useMemo(() => {
    const totalPageNumbers = siblingCount + 5;

    if (totalPageNumbers >= totalPageCount) {
      return getRange(1, totalPageCount);
    }

    const leftSiblingIndex = Math.max(currentPageState - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPageState + siblingCount, totalPageCount);
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;
    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = getRange(1, leftItemCount);
      return [...leftRange, 'right-dot', totalPageCount];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = getRange(totalPageCount - rightItemCount + 1, totalPageCount);
      return [firstPageIndex, 'left-dot', ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = getRange(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, 'left-dot', ...middleRange, 'right-dot', lastPageIndex];
    }

    return [];
  }, [siblingCount, totalPageCount, currentPageState]);

  const onNext = () => {
    function currentPageStateCallback(currentPage: number) {
      const nextPage = currentPage + 1;
      onPageChange(nextPage);
      return nextPage;
    }

    setCurrentPageState(currentPageStateCallback);
  };

  const onPrevious = () => {
    function currentPageStateCallback(currentPage: number) {
      const previousPage = currentPage - 1;
      onPageChange(previousPage);
      return previousPage;
    }

    setCurrentPageState(currentPageStateCallback);
  };

  function handleChangeCurrentPage(page: number) {
    return () => {
      onPageChange(page);
      setCurrentPageState(page);
    };
  }

  return (
    <Container {...rest}>
      <ArrowButton disabled={disabledPrevious} onPress={onPrevious}>
        <Icon name="arrow-left" size={32} />
      </ArrowButton>
      {paginationRange.map(item => {
        const isActive = item === currentPageState;

        if (typeof item === 'string') return <TextApp key={item}>...</TextApp>;

        return (
          <Page key={item} isActive={isActive} onPress={handleChangeCurrentPage(item)}>
            <Number isActive={isActive}>{item}</Number>
          </Page>
        );
      })}
      <ArrowButton disabled={disabledNext} onPress={onNext}>
        <Icon name="arrow-right" size={32} />
      </ArrowButton>
    </Container>
  );
}
