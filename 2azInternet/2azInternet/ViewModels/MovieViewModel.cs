using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using _2azInternet.Models;

namespace _2azInternet.ViewModels
{
    public class MovieViewModel
    {
        public List<Movie> Movies { get; set; }

        public MovieViewModel()
        {
            Movies = new List<Movie>();
        }
    }
}
