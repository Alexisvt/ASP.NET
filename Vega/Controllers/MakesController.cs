using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Vega.Controllers.Resources;
using Vega.Models;

namespace Vega.Controllers
{
  public class MakesController : Controller
  {
    private readonly VegaDbContext _context;
    private readonly IMapper mapper;

    public MakesController(VegaDbContext context, IMapper mapper)
    {
      this.mapper = mapper;
      _context = context;
    }

    [HttpGet("/api/makes")]
    public IActionResult GetMakes()
    {
      var makes = _context.Makes.Include(m => m.Models).ToList();

      return Ok(mapper.Map<List<Make>, List<MakeResource>>(makes));
    }

  }
}