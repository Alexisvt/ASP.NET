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
    public class MoviesController : Controller
    {
        private ApplicationDbContext _context;

        public MoviesController()
        {
            _context = new ApplicationDbContext();
        }
       
        public ActionResult Index()
        {

            var movies = _context.Movies.Include(m => m.Genre);

            return View(movies);
        }

        [Route("movies/details/{movieId}")]
        public ActionResult Details(int movieId)
        {
            var movie = _context.Movies.Include(m => m.Genre).SingleOrDefault(m => m.Id == movieId);

            if (movie == null)
            {
                return HttpNotFound();
            }

            return View(movie);
        }
    }
}