using Microsoft.AspNetCore.Mvc;
using SimpleAPI.Dtos;
using SimpleAPI.Filter;
using SimpleAPI.Helpers;
using SimpleAPI.Models;

namespace SimpleAPI.Controllers
{
    [Route("/api")]
    [ApiController]
    public class AuthController: Controller
    {

        private readonly IUserRepository _repository;
        private readonly JwtService _jwtservice;
        public AuthController(IUserRepository repository,JwtService jwtService) {
            _repository=repository;
            _jwtservice=jwtService;  
        }
        [HttpPost("register")]
        public IActionResult Register(RegisterDtos dto) {
            var User = new User
            {
                Name = dto.Name,
                Email = dto.Email,
                Password = BCrypt.Net.BCrypt.HashPassword(dto.Password) 
            };
            var newuser = _repository.Create(User);
            if (newuser == null)
            {
                return BadRequest();
            }
            return Created("Success",newuser);
        }
        [HttpPost("login")]
        public IActionResult Login(LoginDto loginDto)
        {
            var auth=Request.Headers.Authorization;
            var user= _repository.GetUserByEmail(loginDto.Email);
            if (user == null)
            {
                return BadRequest(new { message = "Invalid Credentials" });
            }

            if(!BCrypt.Net.BCrypt.Verify(loginDto.Password, user.Password))
            {
                return BadRequest(new { message = "Invalid Credentials" });
            }
            var jwt = _jwtservice.Generate(user.Id);
            Response.Cookies.Append("jwt", jwt, new CookieOptions
            {
                HttpOnly = true
            });
            return Ok(new { jwt,user }); ;
        }

        [HttpGet("user")]
        public IActionResult User()
        {
            try
            {

            var jwt = Request.Cookies["jwt"];
            var token = _jwtservice.Verify(jwt);
            int userId = int.Parse(token.Issuer);
            var user = _repository.GetById(userId);
            return Ok(user);
            }catch(Exception _)
            {
                return Unauthorized();
            }
        }
        [HttpPost("Logout")]
        public IActionResult Logout()
        {
            Response.Cookies.Delete("jwt");
            return Ok(new { message = "Success" });
        }

        [HttpGet("checkAuth")]
        [ServiceFilter(typeof(ApiAuthFilter))]
        public IActionResult checkAuth()
        {
            /*
            try
            {
                var auth=Request.Headers.Authorization;
                var jwt = auth.ToString().Split(" ")[1];
                var token = _jwtservice.Verify(jwt);
                int userId = int.Parse(token.Issuer);
                var user = _repository.GetById(userId);
                return Ok(new {message="user Authenticated"});
            }
            catch(Exception _)
            {
                return Unauthorized();
            }*/
            return Ok(new { message = "Reached Here" });
        }
    }

}
