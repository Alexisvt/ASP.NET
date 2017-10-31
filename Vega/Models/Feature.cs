using System.ComponentModel.DataAnnotations;

namespace Vega.Models
{
  public class Feature
  {
    [Display(Name = "id")]
    public int Id { get; set; }

    [Required]
    [Display(Name = "name")]
    public string Name { get; set; }
  }
}