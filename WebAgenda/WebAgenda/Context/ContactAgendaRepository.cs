using System.Collections.Generic;
using System.Linq;
using WebAgenda.Models;

namespace WebAgenda.Context
{
    public class ContactAgendaRepository
    {
        public List<ContactAgendaViewModel> GetAllContacts()
        {
            using (MVCQuizContext mvcQuizContext = new MVCQuizContext())
            {
                return mvcQuizContext.Contacts.ToList();
            }
        }

        public ContactAgendaViewModel CreateContact(ContactAgendaViewModel contact)
        {
            using (MVCQuizContext context = new MVCQuizContext())
            {
                var newItem = context.Contacts.Add(contact);

                context.SaveChanges();
                return newItem;
            }
        }
    }
}