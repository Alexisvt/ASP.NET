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
        // GET: Movies
        //public ActionResult Random()
        //{
        //    var movie = new Movie { Name = "Shrek!"};
        //    //return View(movie);
        //    //return Content("Hola mundo");
        //    //return HttpNotFound();
        //    //return new EmptyResult();
        //    return RedirectToAction("Index", "Home", new {page = 1, sortBy = "name"});
        //}

        //public ActionResult Edit(int id)
        //{
        //    return Content($"id={id}");
        //}

        //public ActionResult Index(int? pageIndex, string sortBy)
        //{
        //    if (!pageIndex.HasValue)
        //    {
        //        pageIndex = 1;
        //    }

        //    if (string.IsNullOrEmpty(sortBy))
        //    {
        //        sortBy = "name";
        //    }

        //    return Content($"pageIndex={pageIndex}&sortby={sortBy}");
        //}

        //[Route(@"movies/released/{year}/{month:regex(\d{2}):range(1, 12)}")]
        //public ActionResult ByReleaseDate(int year, short month)
        //{
        //    return Content($"year={year}&month={month}");
        //}

        // Passing data sample
        public ActionResult Random()
        {
            var movie = new Movie {Name = "Shrek"};
            //ViewData["Movie"] = movie;
            //ViewBag.Movie = movie;

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