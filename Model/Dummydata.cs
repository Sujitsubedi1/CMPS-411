﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectInfo.Model
{
    public class Dummydata
    {
        [Key]
        public int Id { get; set; }
        public String name { get; set; }
    }
}