import { Employee } from '../types';
import { TableRow } from './TableRow';
import { LoadingRow } from './LoadingRow';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface InfiniteTableProps {
  data: Employee[];
  loading: boolean;
  hasMore: boolean;
  loadMore: () => void;
}

export function InfiniteTable({ data, loading, hasMore, loadMore }: InfiniteTableProps) {
  const sentinelRef = useIntersectionObserver(loadMore, { rootMargin: '200px' });

  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-lg bg-white">
      <table className="w-full text-left">
        <thead>
          <tr className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
            <th className="px-4 py-3.5 text-xs font-semibold uppercase tracking-wider">ID</th>
            <th className="px-4 py-3.5 text-xs font-semibold uppercase tracking-wider">Name</th>
            <th className="px-4 py-3.5 text-xs font-semibold uppercase tracking-wider">Email</th>
            <th className="px-4 py-3.5 text-xs font-semibold uppercase tracking-wider">Department</th>
            <th className="px-4 py-3.5 text-xs font-semibold uppercase tracking-wider">Role</th>
            <th className="px-4 py-3.5 text-xs font-semibold uppercase tracking-wider">Salary</th>
            <th className="px-4 py-3.5 text-xs font-semibold uppercase tracking-wider">Start Date</th>
            <th className="px-4 py-3.5 text-xs font-semibold uppercase tracking-wider">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((employee, index) => (
            <TableRow key={employee.id} employee={employee} index={index} />
          ))}
          {loading && <LoadingRow />}
          {!hasMore && (
            <tr className="border-b border-gray-100">
              <td colSpan={8} className="px-4 py-6 text-center">
                <div className="flex items-center justify-center gap-2 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm font-medium">All {data.length} records loaded</span>
                </div>
              </td>
            </tr>
          )}
          {hasMore && (
            <tr ref={sentinelRef} className="h-4">
              <td colSpan={8}></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
