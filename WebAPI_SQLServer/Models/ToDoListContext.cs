using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI_SQLServer.Models
{
    public class ToDoListContext : DbContext
    {
        public ToDoListContext(DbContextOptions<ToDoListContext> options) : base(options)
        {
        }

        //protected override void onConfiguring(DbContextOptionsBuilder optionsBuilder)
        //protected override void onModelCreating(ModelBuilder modelBuilder)



        public DbSet<ToDoList> ToDoLists { get; set; }
        public DbSet<User> Users { get; set; }

    }
}
