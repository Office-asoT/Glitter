import percentage from '@/filters/percentage';

describe('filters', () => {
  describe('percentage', () => {
    it('pageNumberを百分率にフォーマットすること', () => {
      const pageNumber = { currentPage: 1, maxPage: 3 };
      expect(percentage(pageNumber)).toBe('34%');
    });
  });
});
