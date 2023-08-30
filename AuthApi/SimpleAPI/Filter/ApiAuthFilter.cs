using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using SimpleAPI.Helpers;
using SimpleAPI.Models;
using System.Web.Http.Controllers;

namespace SimpleAPI.Filter
{

    public class ApiAuthFilter : IAuthorizationFilter
    {

        private readonly IConfiguration _configuration;
        private readonly IUserRepository _repository;
        private readonly JwtService _jwtService;
        public ApiAuthFilter(IConfiguration configuration,IUserRepository repository,JwtService jwtservice)
        {
            _configuration = configuration;
            _jwtService = jwtservice;
            _repository = repository;
        }

        public void OnAuthorization(AuthorizationFilterContext context)
        {
            try
            {
                var auth=context.HttpContext.Request.Headers.Authorization;
                var jwt = auth.ToString().Split(" ")[1];
                var token = _jwtService.Verify(jwt);
                int userId = int.Parse(token.Issuer);
                var user = _repository.GetById(userId);
            }
            catch(Exception _)
            {
                context.Result = new UnauthorizedObjectResult(new { message = "Invalid Authentication" });
                return;
            }
        }
    }
}
