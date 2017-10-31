using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Vega.Models
{
  [Table("Models")]
  public class Model
  {
    [Display(Name = "id")]
    public int Id { get; set; }

    [Required]
    [Display(Name = "name")]
    [StringLength(255)]
    public string Name { get; set; }

    public int MakeId { get; set; }

    public Make Make { get; set; }
  }
}