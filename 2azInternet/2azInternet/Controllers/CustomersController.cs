using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using _2azInternet.Models;
using _2azInternet.ViewModels;

namespace _2azInternet.Controllers
{
    public class CustomersController : Controller
    {
        private readonly ApplicationDbContext _context;

        public CustomersController()
        {
            _context = ApplicationDbContext.Create();
        }

        protected override void Dispose(bool disposing)
        {
            _context.Dispose();
            base.Dispose(disposing);
        }

        // GET: Customer
        public ActionResult Index()
        {
            var customers = _context.Customers.Include(c => c.MembershipType).ToList();

            return View(customers);
        }

        [Route("customers/details/{customerId}")]
        public ActionResult Details(int customerId)
        {
            var customer = _context.Customers.Include(c => c.MembershipType).SingleOrDefault(c => c.Id == customerId);

            if (customer == default(Customer))
            {
                return HttpNotFound();
            }

            return View(customer);
        }

        public ActionResult New()
        {
            var membershipTypes = _context.MembershipTypes.ToList();
            var vm = new CustomerFormViewModel
            {
                MembershipTypes = membershipTypes
            };
            return View("CustomerForm",vm);
        }

        public ActionResult Save(CustomerFormViewModel formViewModel)
        {
            if (formViewModel.Customer.Id == 0)
            {
                _context.Customers.Add(formViewModel.Customer);
            } else
            {
                var customerInDb = _context.Customers.Single(c => c.Id == formViewModel.Customer.Id);
                customerInDb.Name = formViewModel.Customer.Name;
                customerInDb.Birthdate = formViewModel.Customer.Birthdate;
                customerInDb.IsSubscribedToNewsletter = formViewModel.Customer.IsSubscribedToNewsletter;
                customerInDb.MembershipTypeId = formViewModel.Customer.MembershipTypeId;
            }

            _context.SaveChanges();
            return RedirectToAction("Index", "Customers");
        }

        public ActionResult Edit(int customerid)
        {
            var customer = _context.Customers.SingleOrDefault(c => c.Id == customerid);

            if (customer == null)
            {
                return HttpNotFound();
            }

            var vm = new CustomerFormViewModel
            {
                Customer = customer,
                MembershipTypes = _context.MembershipTypes.ToList()

            };

            return View("CustomerForm", vm);
        }
    }
}