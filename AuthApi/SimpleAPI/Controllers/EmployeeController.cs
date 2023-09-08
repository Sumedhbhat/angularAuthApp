using Microsoft.AspNetCore.Mvc;
using SimpleAPI.Dtos;
using SimpleAPI.Models;

namespace SimpleAPI.Controllers
{
    [Route("/api/employee")]
    [ApiController]
    public class EmployeeController : Controller
    {
        private readonly IEmployeeRepository _employeeRepository;
        public EmployeeController(IEmployeeRepository employeeRepository) {
            _employeeRepository = employeeRepository; 
        }

        [HttpGet]
        public async Task<IActionResult> GetAllEmployeeData()
        {
            var employees = await _employeeRepository.GetAllEmployees();
            if(employees == null)
            {
                return NotFound();
            }
            return Ok(new { employees });
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmployee(int id)
        {
            var employee =await _employeeRepository.DeleteById(id);
            if(employee == null)
            {
                return NotFound(new { message=$"User with Id {id} not found"});
            }
            return Ok(new { message="User Deleted",employee});
        }

        [HttpPut]
        public async Task<IActionResult> UpdateEmployee(Employee employee)
        {
            var employeeUpdated =await _employeeRepository.Update(employee);
            if(employeeUpdated == null)
            {
                return NotFound(new {message="Unable to update the employee Details"});
            }
            return Ok(new {message="Employee Details Updated",employeeUpdated});
        }

        [HttpGet("search")]
        public async Task<IActionResult> Search(
            [FromQuery(Name = "search")]
        string search)
        {
            var data =await _employeeRepository.SearchEmployees(search);
            if (data == null)
            {
                return NotFound(new {message="No user has been found related to the query" });
            }
            return Ok(data);
        }

        [HttpGet("order")]
        public async Task<IActionResult> Order(
            [FromQuery(Name = "orderParam")]
        string param)
        {
            var ordered=await _employeeRepository.OrderEmployees(param);
            return Ok(ordered);
        }

        [HttpPost]
        public async Task<IActionResult> CreateUser(CreateEmployeeDto employeeDto)
        {
            var employee = new Employee
            {
                Name = employeeDto.Name,
                Email = employeeDto.Email,
                Salary = employeeDto.Salary,
                Mobile = employeeDto.Mobile,
            };
            var createdEmployee= await _employeeRepository.Create(employee);
            if(createdEmployee == null)
            {
                return BadRequest(new { message = "Unable to create the user" });
            }
            return Ok(new {message="User Created",employee=createdEmployee});
        }

    }
}
