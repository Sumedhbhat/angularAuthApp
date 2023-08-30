namespace SimpleAPI.Middlewear
{
    public class PermissionMiddlewear
    {
        private readonly RequestDelegate _next;
        public PermissionMiddlewear(RequestDelegate next)
        {
            _next = next;
        }
        public async Task InvokeAsync(HttpContext context)
        {
            

        }
    }
}
