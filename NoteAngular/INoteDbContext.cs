using Microsoft.EntityFrameworkCore;
using NoteReact;

public interface INoteDbContext
{
     DbSet<NoteModel>  Notes {get;set;}

    Task<int> SaveChangesAsync();
}