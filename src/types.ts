export interface Employee {
  id: number;
  name: string;
  email: string;
  department: string;
  role: string;
  salary: number;
  startDate: string;
  status: 'Active' | 'On Leave' | 'Remote';
}
