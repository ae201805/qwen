import { useState, useCallback, useRef } from 'react';
import { Employee } from '../types';
import { generateEmployees } from '../utils/generateData';

const PAGE_SIZE = 30;

export function useInfiniteData() {
  const [data, setData] = useState<Employee[]>(() => generateEmployees(1, PAGE_SIZE));
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const nextIdRef = useRef(PAGE_SIZE + 1);
  const maxRows = 1000; // Simulate a finite dataset

  const loadMore = useCallback(() => {
    if (loading || !hasMore) return;

    setLoading(true);

    // Simulate network delay
    setTimeout(() => {
      const remaining = maxRows - (nextIdRef.current - 1);
      const count = Math.min(PAGE_SIZE, remaining);

      if (count <= 0) {
        setHasMore(false);
        setLoading(false);
        return;
      }

      const newEmployees = generateEmployees(nextIdRef.current, count);
      nextIdRef.current += count;

      setData(prev => [...prev, ...newEmployees]);
      setHasMore(nextIdRef.current <= maxRows);
      setLoading(false);
    }, 600);
  }, [loading, hasMore]);

  return { data, loading, hasMore, loadMore };
}
