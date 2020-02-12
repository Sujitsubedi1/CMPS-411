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
        public Datacontext(DbContextOptions<Datacontext> options) : base(options)
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
