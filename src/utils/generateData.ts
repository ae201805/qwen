import { Employee } from '../types';

const firstNames = [
  'James', 'Mary', 'John', 'Patricia', 'Robert', 'Jennifer', 'Michael', 'Linda',
  'William', 'Elizabeth', 'David', 'Barbara', 'Richard', 'Susan', 'Joseph', 'Jessica',
  'Thomas', 'Sarah', 'Charles', 'Karen', 'Daniel', 'Lisa', 'Matthew', 'Nancy',
  'Anthony', 'Betty', 'Mark', 'Margaret', 'Donald', 'Sandra', 'Steven', 'Ashley',
  'Paul', 'Dorothy', 'Andrew', 'Kimberly', 'Joshua', 'Emily', 'Kenneth', 'Donna',
  'Kevin', 'Michelle', 'Brian', 'Carol', 'George', 'Amanda', 'Timothy', 'Melissa',
  'Ronald', 'Deborah',
];

const lastNames = [
  'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis',
  'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson',
  'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin', 'Lee', 'Perez', 'Thompson',
  'White', 'Harris', 'Sanchez', 'Clark', 'Ramirez', 'Lewis', 'Robinson', 'Walker',
  'Young', 'Allen', 'King', 'Wright', 'Scott', 'Torres', 'Nguyen', 'Hill', 'Flores',
];

const departments = [
  'Engineering', 'Marketing', 'Sales', 'Human Resources', 'Finance',
  'Operations', 'Product', 'Design', 'Legal', 'Support',
];

const roles = [
  'Manager', 'Senior Developer', 'Junior Developer', 'Analyst', 'Director',
  'Coordinator', 'Specialist', 'Lead', 'Associate', 'Intern',
  'VP', 'Architect', 'Designer', 'Consultant', 'Administrator',
];

const statuses: Employee['status'][] = ['Active', 'On Leave', 'Remote'];

function randomFrom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateEmail(firstName: string, lastName: string): string {
  const domain = randomFrom(['company.com', 'work.org', 'corp.net', 'biz.io']);
  return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${domain}`;
}

function generateDate(): string {
  const start = new Date(2015, 0, 1);
  const end = new Date(2025, 11, 31);
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return date.toISOString().split('T')[0];
}

function generateSalary(): number {
  return Math.floor(Math.random() * (150000 - 40000) + 40000);
}

export function generateEmployees(startId: number, count: number): Employee[] {
  const employees: Employee[] = [];
  for (let i = 0; i < count; i++) {
    const firstName = randomFrom(firstNames);
    const lastName = randomFrom(lastNames);
    employees.push({
      id: startId + i,
      name: `${firstName} ${lastName}`,
      email: generateEmail(firstName, lastName),
      department: randomFrom(departments),
      role: randomFrom(roles),
      salary: generateSalary(),
      startDate: generateDate(),
      status: randomFrom(statuses),
    });
  }
  return employees;
}
