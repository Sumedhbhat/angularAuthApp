using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SimpleAPI.Models
{
    public class Employee
    {
        [Key]
        public int Id { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string Name { get; set; } = "";
        [Column(TypeName ="nvarchar(100)")]
        public string Email { get; set; } = "";

        public int Salary { get; set; }
        [Column(TypeName ="nvarchar(20)")]
        public string Mobile { get; set; } = "";

    }
}
