using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectInfo.Model
{
    public class AdminData
    {
        [Key]
        public int ID { get; set; }
        public string Names { get; set; }

        public string Framework { get; set; }
      
        public ClassInfo Classinfos { get; set; }

    }
}
