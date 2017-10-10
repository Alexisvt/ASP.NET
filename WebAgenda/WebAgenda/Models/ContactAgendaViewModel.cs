using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebAgenda.Models
{
    public class ContactAgendaViewModel
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string ContactName { get; set; }
        public string PhoneNumber { get; set; }
    }
}