using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectInfo.Model
{
    public class Project_Info
    {
        public int ID { get; set; }
        public string P_Names { get; set; }

        public string T_used { get; set; }
        public string G_Repo { get; set; }
        public string members { get; set; }

        public ClassInfo classinfo { get; set; }




    }
}
