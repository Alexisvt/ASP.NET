using Microsoft.AspNet.Mvc;

namespace ANGULARMVC6.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
         
    }
}