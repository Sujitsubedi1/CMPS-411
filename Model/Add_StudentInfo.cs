﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectInfo.Model
{
    public class Add_StudentInfo
    {
        public int ID { get; set; }
        public string PNames { get; set; }

        public string Tused { get; set; }
        public string GRepo { get; set; }
        public string Tmembers { get; set; }
        public string GName { get; set; }
        public string description { get; set; }

        public int UserId { get; set; }
        public User User { get; set; }

        public int ClassInfoId { get; set; }
        public ClassInfo ClassInfo { get; set; }

    }
}
