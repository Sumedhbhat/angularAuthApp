using Microsoft.EntityFrameworkCore;

namespace SimpleAPI.Models
{
    public class EmployeeContext:DbContext
    {
        public EmployeeContext(DbContextOptions<EmployeeContext> options) : base(options) { }

        public DbSet<Employee> Employees { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Employee>(entity => entity.HasIndex(e => e.Email).IsUnique());
        }
    }
}
