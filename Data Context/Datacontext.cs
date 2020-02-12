using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ProjectInfo.Model;

namespace ProjectInfo.Data_Context
{
    public class Datacontext : DbContext
    {
<<<<<<< HEAD
        public DbSet<Dummydata> DummyData { get; set; }

        public DbSet<ProjectInfo.Model.AdminData> AdminData { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
=======
        public Datacontext(DbContextOptions<Datacontext> options) : base(options)
>>>>>>> e85a09dc7bd0cbec9af68aa51bffdc4cc08eb5e6
        {
        }
        
     

        // protected override void OnModelCreating(ModelBuilder modelBuilder)
        // {
        //     modelBuilder.ApplyConfigurationsFromAssembly(typeof(Datacontext).Assembly);
        //     base.OnModelCreating(modelBuilder);
        // }
        public DbSet<ProjectInfo.Model.User> Users { get; set; }

    }

    
}
