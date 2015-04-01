using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Chapter6.Models;
using Ninject;

namespace Chapter6.Controllers
{
    public class HomeController : Controller
    {
        private IValueCalculator calc;
        private Product[] products = {
                                         new Product {Name= "Kayak", Price= 275M, Category= "Watersports"},
                                         new Product {Name= "Lifejacket", Category= "Watersports", Price= 48.95M},
                                         new Product {Name= "Soccer ball", Category="Soccer", Price= 19.50M},
                                         new Product {Name= "Corner Flag", Category= "Soccer", Price= 34.95M}
                                     };

        public HomeController(IValueCalculator calcParam, IValueCalculator calc2)
        {
            calc = calcParam;
        }
        
        // GET: Home
        public ActionResult Index()
        {
            //IKernel ninjectKernel = new StandardKernel();
            //ninjectKernel.Bind<IValueCalculator>().To<LinqValueCalculator>();

            //IValueCalculator calc = ninjectKernel.Get<IValueCalculator>();

            ShoppingCart cart = new ShoppingCart(calc) { Products = products };

            decimal totalValue = cart.CalculateProductTotal();

            return View(totalValue);
        }
    }
}