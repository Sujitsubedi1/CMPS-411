using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ProjectInfo.Model;

namespace ProjectInfo.Data_Context
{
    public class Datacontext: DbContext
    {
        public DbSet<Dummydata> DummyData { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(@"Server=(localdb)\MSSQLLOCALDB;Database=CMPS411;Trusted_Connection=True;");
            }
        }

    }

    
}
