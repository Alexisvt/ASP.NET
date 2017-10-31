using Microsoft.EntityFrameworkCore;

namespace Vega.Models
{
  public class VegaDbContext : DbContext
  {

    public DbSet<Make> Makes { get; set; }

    public VegaDbContext(DbContextOptions<VegaDbContext> options) : base(options)
    {

    }
  }
}