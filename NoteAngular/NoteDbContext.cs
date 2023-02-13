using Microsoft.EntityFrameworkCore;
using NoteReact;

public class NoteDbContext : DbContext, INoteDbContext
{
    public NoteDbContext(DbContextOptions options): base(options)
    {
        Database.EnsureCreated();
    }
    public DbSet<NoteModel> Notes { get ; set ; }

    public async Task<int> SaveChangesAsync()
    {
        return  await base.SaveChangesAsync();
    }
}