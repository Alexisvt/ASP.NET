using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Vega.Controllers.Resources
{
  public class MakeResource
  {
    public int Id { get; set; }

    public string Name { get; set; }

    public ICollection<ModelResource> Models { get; set; }

    public MakeResource()
    {
      Models = new HashSet<ModelResource>();
    }
  }
}