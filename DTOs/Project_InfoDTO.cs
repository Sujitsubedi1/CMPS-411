using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectInfo.DTOs
{
    public class Project_InfoDTO
    {
        public int ID { get; set; }
        public string ProjectName { get; set; }

        public string Technologyused { get; set; }
        public string GithubRepo { get; set; }
        public string MemberNames { get; set; }

        public string ClassName { get; set; }
        public string Semester { get; set; }
        public string Year { get; set; }

        public string ClassInfoID { get; set; }
    }
}
