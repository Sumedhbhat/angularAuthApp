using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace SimpleAPI.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string Name { get; set; } = "";

        [Column(TypeName = "nvarchar(100)")]
        public string Email { get; set; } = "";

        [JsonIgnore]
        [Column(TypeName = "nvarchar(100)")]
        public string Password { get; set; } = "";

    }
}
