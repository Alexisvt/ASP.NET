using System.Data.Entity;
using WebAgenda.Models;

namespace WebAgenda.Context
{
    public class MVCQuizContext: DbContext
    {
        public DbSet<ContactAgendaViewModel> Contacts { get; set; }

        public MVCQuizContext()
        {
            
        }
    }
}