using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectInfo.DTOs
{
    public class Add_StudentInfoDTO
    {
        public int ID { get; set; }

        public string PNames { get; set; }

        public string Tused { get; set; }
        public string GRepo { get; set; }
        public string Tmembers { get; set; }
        public string GName { get; set; }
        public string description { get; set; }

        public string ClassName { get; set; }
        public string Semester { get; set; }
        public string Year { get; set; }

        public string ClassInfoID { get; set; }
        public string UserId { get; set; }
    }
}
