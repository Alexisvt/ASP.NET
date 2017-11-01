using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Vega.Models;

namespace Vega.Controllers
{
  public class MakesController : Controller
  {
    private readonly VegaDbContext _context;

    public MakesController(VegaDbContext context)
    {
      _context = context;
    }

    [HttpGet("/api/makes")]
    public IActionResult GetMakes()
    {
      var makes = _context.Makes.Include(m => m.Models).ToList();

      return Ok(makes);
    }

    [HttpGet("/api/features")]
    public IActionResult GetFeatures()
    {
      var features = _context.Features.ToList();

      return Ok(features);
    }
  }
}