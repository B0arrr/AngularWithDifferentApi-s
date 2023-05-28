using Microsoft.EntityFrameworkCore;

namespace minimalAPI;

public class UserDb: DbContext
{
    public UserDb(DbContextOptions options): base(options) {}
    public DbSet<User> users { get; set; } = null!;
}