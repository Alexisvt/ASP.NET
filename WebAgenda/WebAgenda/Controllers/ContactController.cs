using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Newtonsoft.Json;
using WebAgenda.Context;

namespace WebAgenda.Controllers
{
    public class ContactController : ApiController
    {
        // GET: api/Contact
        [HttpGet]
        public IHttpActionResult GetAllContacts()
        {
            ContactAgendaRepository repository = new ContactAgendaRepository();

            var listOfContacts = repository.GetAllContacts();

            return Ok(listOfContacts);
        }

        // GET: api/Contact/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Contact
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Contact/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Contact/5
        public void Delete(int id)
        {
        }
    }
}
