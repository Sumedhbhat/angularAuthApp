using Microsoft.EntityFrameworkCore;
using SimpleAPI.Filter;
using SimpleAPI.Helpers;
using SimpleAPI.Middlewear;
using SimpleAPI.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddCors();
//builder.Services.AddSwaggerGen();
builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddScoped<IEmployeeRepository, EmployeeRepository>();
builder.Services.AddScoped<JwtService>();
builder.Services.AddDbContext<UserContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("DevConnection")));
builder.Services.AddDbContext<EmployeeContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("DevConnection")));
builder.Services.AddScoped<ApiAuthFilter>();
var app = builder.Build();
// Configure the HTTP request pipeline.
//if (app.Environment.IsDevelopment())
//{
   // app.UseSwagger();
    //app.UseSwaggerUI();
//}

app.UseCors(options => options.AllowAnyHeader().WithOrigins("http://localhost:4200").AllowAnyMethod().AllowCredentials());
app.UseAuthorization();

app.MapControllers();

app.Run();
