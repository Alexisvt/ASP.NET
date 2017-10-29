using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using _2azInternet.Models;
using _2azInternet.ViewModels;

namespace _2azInternet.Controllers
{
    public class CustomersController : Controller
    {
        private readonly List<Customer> _customers;

        public CustomersController()
        {
            _customers = new List<Customer>
            {
                new Customer
                {
                    Id = 1,
                    Name = "Alexis"
                },
                new Customer
                {
                    Id = 2,
                    Name = "David"
                }
            };
        }
        // GET: Customer
        public ActionResult Index()
        {
            var vm = new CustomerViewModel
            {
                Customers = _customers
            };

            return View(vm);
        }

        [Route("customers/details/{customerId}")]
        public ActionResult Details(int customerId)
        {
            var customer = _customers.FirstOrDefault(c => c.Id == customerId);

            if (customer == default(Customer))
            {
                return HttpNotFound();
            }

            return View(customer);
        }
    }
}