using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Vega.Controllers.Resources;
using Vega.Models;

namespace Vega.Controllers
{
  public class FeaturesController : Controller
  {
    private readonly VegaDbContext context;
    private readonly IMapper mapper;
    public FeaturesController(VegaDbContext context, IMapper mapper)
    {
      this.mapper = mapper;
      this.context = context;

    }

    [HttpGet("/api/features")]
    public IActionResult GetFeatures()
    {
      var features = context.Features.ToList();

      return Ok(mapper.Map<List<Feature>, List<FeatureResource>>(features));
    }
  }
}