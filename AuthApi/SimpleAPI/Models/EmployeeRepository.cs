using Microsoft.EntityFrameworkCore;
using SimpleAPI.Dtos;

namespace SimpleAPI.Models
{
    public class EmployeeRepository:IEmployeeRepository
    {
        private readonly EmployeeContext _context;
        public EmployeeRepository(EmployeeContext context) {
            _context = context; 
        }

        public async Task<Employee> Create(Employee employee)
        {
            
            var existing = _context.Employees.FirstOrDefault(x=>(x.Email==employee.Email || x.Mobile==employee.Mobile));
            
            if(existing == null)
            {
                await _context.Employees.AddAsync(employee);
                await _context.SaveChangesAsync();
                return employee;
            }
            return null;
        }

        public async Task<Employee> DeleteById(int Id)
        {
            var employee=await _context.Employees.FindAsync(Id);
            if (employee == null)
            {
                return null;
            }
            _context.Employees.Remove(employee);
            await _context.SaveChangesAsync();
            return employee;
        }

        public async Task<List<Employee>> GetAllEmployees()
        {
            var result =await _context.Employees.ToListAsync();
            return result;
        }

        public Employee GetById(int Id)
        {
            var employee = _context.Employees.Find(Id);
            if(employee == null)
            {
                return null;
            }
            return employee;
        }

        public async Task<Employee> Update(Employee employee)
        {
            //var existing =_context.Employees.Find(employee.Id);
            //if(existing == null)
            //{
            //    return null;
            //}
            if (employee == null) return null;
            //_context.Employees.Update(employee);
            _context.Entry(employee).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return employee; 
        }

        public async Task<List<Employee>> SearchEmployees(string search)
        {

            var data=await (from employees 
                            in _context.Employees 
                            where employees.Name.Contains(search) || employees.Email.Contains(search) || employees.Id.ToString().Contains(search)
                            select employees)
                            .ToListAsync();
            if(data.Count == 0)
            {
                return null;
            }
            return data;
        }

        public async Task<List<Employee>> OrderEmployees(string parameter)
        {
            var data=await (from employee in _context.Employees select employee).ToListAsync();
            List<Employee> orderedData;
            switch (parameter.ToLower())
            {
                case "name":
                    orderedData = data.OrderBy(e => e.Name).ToList();
                    break;
                case "email":
                    orderedData = data.OrderBy(e => e.Email).ToList();
                    break;
                case "salary":
                    orderedData = data.OrderBy(e => e.Salary).ToList();
                    break;
                case "id":
                default:
                    orderedData = data.OrderBy(e => e.Id).ToList();
                    break;
            }

            return orderedData;
        }
    }
}
