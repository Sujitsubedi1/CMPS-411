using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectInfo.Model
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        public string Email { get; set; }
        public string Name { get; set; }
        public string Token { get; set; }
        public string ImageUrl { get; set; }
        public DateTime TokenExpiresIn { get; set; }
    }
}
