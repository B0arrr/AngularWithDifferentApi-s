using System.Text.Json;
using Microsoft.EntityFrameworkCore;
using minimalAPI;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors();

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<UserDb>(options =>
{
    options.UseSqlite(connectionString);
});

var app = builder.Build();

app.UseCors(corsPolicyBuilder => corsPolicyBuilder
    .AllowAnyOrigin()
    .AllowAnyHeader()
    .AllowAnyMethod());

app.MapGet("/users", (UserDb db) => JsonSerializer.Serialize(db.users));

app.MapPost("/add_user", async (User user, UserDb db) =>
{
    await db.users.AddAsync(user);
    await db.SaveChangesAsync();
    return JsonSerializer.Serialize(user);
});

app.UseSwagger();
app.UseSwaggerUI();

app.Run();
