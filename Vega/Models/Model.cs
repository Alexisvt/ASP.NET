using System.ComponentModel.DataAnnotations;

namespace Vega.Models
{
  public class Model
  {
    [Display(Name = "id")]
    public int Id { get; set; }

    [Required]
    [Display(Name = "name")]
    public string Name { get; set; }
  }
}