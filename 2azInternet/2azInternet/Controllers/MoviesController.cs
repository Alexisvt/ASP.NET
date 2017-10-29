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
       
        public ActionResult Index()
        {
            var vm = new MovieViewModel
            {
                Movies = new List<Movie>
                {
                    new Movie
                    {
                        Name = "Movie 1"
                    },
                    new Movie
                    {
                        Name = "Movie 2"
                    }
                }
            };

            vm = new MovieViewModel();

            return View(vm);
        }
    }
}