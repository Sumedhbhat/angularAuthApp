namespace SimpleAPI.Models
{
    public interface IEmployeeRepository
    {
        Task<Employee> Create(Employee employee);
        Task<Employee> Update(Employee employee);
        Task<Employee> DeleteById(int Id);
        Employee GetById(int Id);
        Task<List<Employee>> GetAllEmployees();
        Task<List<Employee>> SearchEmployees(string search);
        Task<List<Employee>> OrderEmployees(string parameter);
    }
}
