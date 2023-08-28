using SimpleAPI.Dtos;

namespace SimpleAPI.Models
{
    public interface IUserRepository
    {
        User Create(User user);
        User GetUserByEmail(string email);
        User GetById(int id);
    }
}
