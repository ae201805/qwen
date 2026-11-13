import { Employee } from '../types';
import { StatusBadge } from './StatusBadge';

interface TableRowProps {
  employee: Employee;
  index: number;
}

export function TableRow({ employee, index }: TableRowProps) {
  const formatSalary = (salary: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(salary);

  return (
    <tr
      className={`border-b border-gray-100 transition-colors duration-150 hover:bg-indigo-50/50 ${
        index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
      }`}
    >
      <td className="px-4 py-3 text-sm text-gray-500 font-mono">#{employee.id}</td>
      <td className="px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white text-xs font-bold shadow-sm">
            {employee.name.split(' ').map(n => n[0]).join('')}
          </div>
          <span className="text-sm font-medium text-gray-900">{employee.name}</span>
        </div>
      </td>
      <td className="px-4 py-3 text-sm text-gray-600">{employee.email}</td>
      <td className="px-4 py-3">
        <span className="text-sm text-gray-700 bg-gray-100 px-2 py-0.5 rounded">
          {employee.department}
        </span>
      </td>
      <td className="px-4 py-3 text-sm text-gray-600">{employee.role}</td>
      <td className="px-4 py-3 text-sm font-medium text-gray-900">{formatSalary(employee.salary)}</td>
      <td className="px-4 py-3 text-sm text-gray-600">{employee.startDate}</td>
      <td className="px-4 py-3">
        <StatusBadge status={employee.status} />
      </td>
    </tr>
  );
}
