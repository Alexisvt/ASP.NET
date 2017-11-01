using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Vega.Models
{
  public class Make
  {
    [Display(Name = "id")]
    public int Id { get; set; }

    [Required]
    [Display(Name = "name")]
    public string Name { get; set; }

    [Display(Name = "models")]
    public ICollection<Model> Models { get; set; }

    public Make()
    {
      Models = new HashSet<Model>();
    }
  }
}