namespace SimpleAPI.Dtos
{
    public class CreateEmployeeDto
    {
        public string Name { get; set; } = "";
        public string Email { get; set; } = "";
        public int Mobile { get; set; }
        public int Salary { get; set; }
    }
}
