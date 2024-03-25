

using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Collections;
using Server.Models;

namespace Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class JobController : ControllerBase
    {
        private readonly List<Job> _jobs = new List<Job>
        {
            new Job { JobTitle = "Job 1", JobField = "Software Developer", ScopeOfHours = 40, Area = "Area1", Requirements = "Req1", WorkFromHome = false },
            new Job { JobTitle = "Job 2", JobField = "Project Manager", ScopeOfHours = 30, Area = "Area2", Requirements = "Req2", WorkFromHome = true },
            new Job { JobTitle = "Job 3", JobField = "Data Analyst", ScopeOfHours = 20, Area = "Area3", Requirements = "Req3", WorkFromHome = false },
            new Job { JobTitle = "Job 4", JobField = "Project Manager", ScopeOfHours = 30, Area = "Area2", Requirements = "Req2", WorkFromHome = true },
            new Job { JobTitle = "Job 5", JobField = "Project Manager", ScopeOfHours = 20, Area = "Area3", Requirements = "Req3", WorkFromHome = false },
            new Job { JobTitle = "Job 6", JobField = "Data Analyst", ScopeOfHours = 30, Area = "Area2", Requirements = "Req2", WorkFromHome = true },
            new Job { JobTitle = "Job 7", JobField = "Software Developer", ScopeOfHours = 20, Area = "Area3", Requirements = "Req3", WorkFromHome = false },
            new Job { JobTitle = "Job 8", JobField = "Software Developer", ScopeOfHours = 30, Area = "Area2", Requirements = "Req2", WorkFromHome = true },
            new Job { JobTitle = "Job 9", JobField = "Software Developer", ScopeOfHours = 20, Area = "Area3", Requirements = "Req3", WorkFromHome = false },
            new Job { JobTitle = "Job 10", JobField = "Project Manager", ScopeOfHours = 30, Area = "Area1", Requirements = "Req2", WorkFromHome = true }
        };

        [HttpGet]
        public IActionResult GetJobs()
        {
            return Ok(_jobs);
        }
    }
}
