import { Employee } from '../types';

interface StatusBadgeProps {
  status: Employee['status'];
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const styles: Record<Employee['status'], string> = {
    Active: 'bg-green-100 text-green-800 border-green-200',
    'On Leave': 'bg-yellow-100 text-yellow-800 border-yellow-200',
    Remote: 'bg-blue-100 text-blue-800 border-blue-200',
  };

  const dots: Record<Employee['status'], string> = {
    Active: 'bg-green-500',
    'On Leave': 'bg-yellow-500',
    Remote: 'bg-blue-500',
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${styles[status]}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${dots[status]}`}></span>
      {status}
    </span>
  );
}
