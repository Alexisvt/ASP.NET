using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using _2azInternet.Models;
using _2azInternet.ViewModels;

namespace _2azInternet.Controllers
{
    public class MoviesController : Controller
    {
       
        public ActionResult Random()
        {
            var movie = new Movie {Name = "Shrek"};

            var customers = new List<Customer>
            {
                new Customer
                {
                    Name = "Customer 1"
                },
                new Customer
                {
                    Name = "Customer 2"
                }
            };

            RandomMovieViewModel vm = new RandomMovieViewModel
            {
                Movie = movie,
                Customers = customers
            };

            return View(vm);
        }
    }
}