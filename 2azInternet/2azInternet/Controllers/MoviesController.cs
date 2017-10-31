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

        public ActionResult Edit(int movieId)
        {
            var vm = new MovieFormViewModel
            {
                Movie = _context.Movies.Single(movie => movie.Id == movieId),
                Genres = _context.Genres
            };

            return View("MovieForm", vm);
        }

        public ActionResult Save(MovieFormViewModel formViewModel)
        {
            // if the movie is new then save it
            if (formViewModel.Movie.Id == 0)
            {
                formViewModel.Movie.DateAdded = DateTime.Now;
                _context.Movies.Add(formViewModel.Movie);
            }
            else
            {
                var movieInDb = _context.Movies.Single(movie => movie.Id == formViewModel.Movie.Id);

                movieInDb.Name = formViewModel.Movie.Name;
                movieInDb.GenreId = formViewModel.Movie.GenreId;
                movieInDb.NumberInStock = formViewModel.Movie.NumberInStock;
                movieInDb.ReleaseDate = formViewModel.Movie.ReleaseDate;
            }

            _context.SaveChanges();
            return RedirectToAction("Index");
        }

        public ActionResult New()
        {
            var vm = new MovieFormViewModel
            {
                Genres = _context.Genres.ToList()
            };
            return View("MovieForm", vm);
        }
    }
}