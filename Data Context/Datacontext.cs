using Microsoft.EntityFrameworkCore;
using ProjectInfo.Model;

namespace ProjectInfo.Data_Context
{
    public class Datacontext : DbContext
    {
        public Datacontext(DbContextOptions<Datacontext> options) : base(options)
        {
        }




        // }
        public DbSet<User> Users { get; set; }


       public DbSet<AdminData> AdminData {get;set;}

        public DbSet<ClassInfo> ClassInfos { get; set; }
        public DbSet<Project_Info> ProjectInfo { get; set; }


   
    }


    }