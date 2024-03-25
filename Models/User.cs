

namespace Server.Models
{
    
    public class User
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string JobSearchField { get; set; }
        public int JobCount { get; set; }
    }

    
}
