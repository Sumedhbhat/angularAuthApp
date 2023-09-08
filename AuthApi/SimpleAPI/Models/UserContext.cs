using Microsoft.EntityFrameworkCore;

namespace SimpleAPI.Models
{
    public class UserContext:DbContext
    {
        public UserContext(DbContextOptions options):base(options)
        {
            
        }
        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>(entity=> entity.HasIndex(e=>e.Email).IsUnique());
        }
    }

}
