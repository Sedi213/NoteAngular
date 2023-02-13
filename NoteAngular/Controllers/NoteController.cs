using Azure.Core;
using Microsoft.AspNetCore.Mvc;

namespace NoteReact.Controllers
{
    [ApiController]

    [Route("[controller]")]
    public class NoteController : ControllerBase
    {
        private readonly INoteDbContext _dbContext;
        public NoteController(INoteDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public IEnumerable<NoteModel> Get()
        {

            return _dbContext.Notes.ToList();
        }
        [HttpPost]
        public async Task<IActionResult> New(NewNoteVm note)
        {
            NoteModel newnote = new NoteModel
            {
                CreateTime = DateTime.Now,
                title = note.title,
                description = note.description,
            };
            _dbContext.Notes.Add(newnote);
            await _dbContext.SaveChangesAsync();
            return Ok();
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            var Res = Request.Body; 
            var entity = await _dbContext.Notes.FindAsync(new object[] { id });

            if (entity == null)
            {
                throw new Exception("NotFound " + id.ToString());
            }

            _dbContext.Notes.Remove(entity);
            await _dbContext.SaveChangesAsync();
            return Ok(_dbContext.Notes.ToList());
        }
    }
}