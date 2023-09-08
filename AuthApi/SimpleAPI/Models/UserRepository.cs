using System.Net;
using System.Web.Http;

namespace SimpleAPI.Models
{
    public class UserRepository : IUserRepository
    {
        private readonly UserContext _context;
        public UserRepository(UserContext context) {
            _context = context; 
        }
        public User Create(User user)
        {
            var existing=_context.Users.FirstOrDefault(x => x.Email == user.Email);
            if (existing == null)
            {
                _context.Users.Add(user);
                user.Id = _context.SaveChanges();
                return user;
            }
            else
            {
                user.Id = 0;
                return null;
            }
        }

        public User GetUserByEmail(string email)
        {
            return _context.Users.FirstOrDefault(u => u.Email == email);
        }

        public User GetById(int id)
        {
            return _context.Users.FirstOrDefault(u => u.Id == id);
        }
        public User DeleteUserById(int id)
        {
            var user= _context.Users.Find(id);
            if (user == null)
            {
                return null;
            }
             _context.Users.Remove(user);
            _context.SaveChanges();
            return user;
        }
    }
}
