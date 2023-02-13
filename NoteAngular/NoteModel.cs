namespace NoteReact
{
    public class NoteModel
    {
        public Guid id { get; set; }
        public string title { get; set; }
        public string description { get; set; }
        public DateTime CreateTime { get; set; }
    }
}
