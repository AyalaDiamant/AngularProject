
//using Microsoft.AspNetCore.Mvc;
//using System.Collections.Generic;
//using System.Linq;
//using Server.Models;


//namespace Server.Controllers
//{
//    [ApiController]
//    [Route("[controller]")]
//    public class UserController : ControllerBase
//    {
//        private readonly List<User> _users = new List<User>
//        {
//            new User { Id = 1, UserName = "user1", Password = "password1", JobSearchField = "Field1" },
//            new User { Id = 2, UserName = "user2", Password = "password2", JobSearchField = "Field2" },
//            new User { Id = 3, UserName = "user3", Password = "password3", JobSearchField = "Field3" }
//        };

//        [HttpGet("{username}/{password}")]
//        public IActionResult Authenticate(string username, string password)
//        {
//            var user = _users.FirstOrDefault(u => u.UserName == username && u.Password == password);

//            if (user == null)
//            {
//                return NotFound();
//            }

//            return Ok(user);
//        }
//    }
//}

// ------------------

using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Server.Models;

namespace Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly string _jsonFilePath = "./Data/users.json";

        [HttpGet("{username}/{password}")]
        public IActionResult Authenticate(string username, string password)
        {

            List<User> users = LoadUsersFromJson();
            User user = users.FirstOrDefault(u => u.UserName == username && u.Password == password);

            if (user == null)
            {
                return NotFound();
            }

            return Ok(user);
        }

        [HttpGet("{username}")]
        public IActionResult getJobCount(string username)
        {

            List<User> users = LoadUsersFromJson();
            User user = users.FirstOrDefault(u => u.UserName == username);

            if (user == null)
            {
                return NotFound();
            }

            return Ok(user.JobCount);
        }


        [HttpPut]
        public void UpdateUser(string userName)
        {
            List<User> users = LoadUsersFromJson();
            User user = users.FirstOrDefault(u => u.UserName == userName);

            if (!(user == null))
            {
                user.JobCount = user.JobCount + 1;

                SaveUsersToJson(users);
            }
       
        }

        private List<User> LoadUsersFromJson()
        {
            string json = System.IO.File.ReadAllText(_jsonFilePath);
            return JsonConvert.DeserializeObject<List<User>>(json);
        }

        private void SaveUsersToJson(List<User> users)
        {
            string json = JsonConvert.SerializeObject(users, Formatting.Indented);
            System.IO.File.WriteAllText(_jsonFilePath, json);
        }
    }
}

