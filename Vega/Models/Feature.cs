using System.ComponentModel.DataAnnotations;

namespace Vega.Models
{
  public class Feature
  {
    [Display(Name = "id")]
    public int Id { get; set; }

    [Required]
    [Display(Name = "name")]
    [StringLength(255)]
    public string Name { get; set; }
  }
}