using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class CukContext : DbContext
    {
        public CukContext(DbContextOptions<CukContext> options) : base(options)
        {
        }

        public DbSet<Product> Products { get; set; }
    }
}