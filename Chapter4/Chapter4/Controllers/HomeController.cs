using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Chapter4.Models;
using System.Text;

namespace Chapter4.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public string Index()
        {
            return "Navigate to a URL to show an example";
        }

        public ViewResult AutoProperty()
        {
            Product myProduct = new Product();

            myProduct.Name = "Kayak";

            string productName = myProduct.Name;

            return View("Result", (object)String.Format("Product name: {0}", productName));
        }

        public ViewResult CreateProduct()
        {
            Product myProduct = new Product { 
                Category = "Fruits"
            };

            return View("Result", (object)String.Format("Category: {0}", myProduct.Category));
        }

        public ViewResult CreateCollection()
        {
            string[] stringArray = { "apple", "orange", "plum" };

            List<int> intList = new List<int> { 10, 20, 30, 40 };

            Dictionary<string, int> myDict = new Dictionary<string, int> { { "orange", 10 }, { "orange", 20 }, { "plum", 30 } };

            return View("Result", (object)stringArray[1]);
        }

        public ViewResult UseExtension()
        {
            ShoppingCart cart = new ShoppingCart
            {
                Products = new List<Product>{
                    new Product {Name = "Kayak", Price = 275M},
                    new Product {Name = "Lifejacket", Price = 48.95M},
                    new Product {Name = "Soccer ball", Price = 19.50M}
                }
            };

            decimal cartTotal = cart.TotalPrices();

            return View("Result", (object)String.Format("Total: {0:c}", cartTotal));
        }

        public ViewResult UseExtensionEnumerable()
        {
            IEnumerable<Product> products = new ShoppingCart
            {
                Products = new List<Product> {
                    new Product {Name= "Kayak", Price= 275M},
                    new Product {Name= "Soccer ball", Price= 19.50M}
                }
            };

            Product[] productArray = {
                                         new Product {Name="Kayak", Price= 275M},
                                         new Product {Name="Soccer ball", Price= 19.50M}
                                     };

            decimal cartTotal = products.TotalPrices();
            decimal arrayTotal = products.TotalPrices();

            return View("Result", (object)String.Format("Cart Total: {0}, Array Total: {1}", cartTotal, arrayTotal));
        }

        public ViewResult UseFilterExtensionMethod()
        {
            IEnumerable<Product> products = new ShoppingCart
            {
                Products = new List<Product> {
                    new Product { Name="kayac", Price=270M, Category="Watersports"},
                    new Product {Name="Soccer Ball", Price= 18.9M, Category= "Soccer"},
                    new Product {Name= "Corner Flag", Price= 37.5M, Category= "Soccer"}
                }
            };

            //Func<Product, bool> categoryFilter = delegate(Product prod)
            //{
            //    return prod.Category == "Soccer";
            //};

            //Func<Product, bool> categoryFilter = prod => prod.Category == "Soccer";

            decimal total = 0;

            //foreach (Product prod in products.Filter(categoryFilter))
            foreach (Product prod in products.Filter(prod => prod.Category == "Soccer" || prod.Price > 20))
            {
                total += prod.Price;
            }

            return View("Result", (object)String.Format("Total: {0}", total));
        }

        public ViewResult CreateAnonArray()
        {
            var oddsAndEnd = new[]{
                new {Name= "MVC", Category= "Pattern"},
                new {Name= "Hat", Category= "Clothing"},
                new {Name= "Apple", Category= "Fruit"}
            };

            StringBuilder result = new StringBuilder();
            foreach (var item in oddsAndEnd)
            {
                result.Append(item.Name).Append(" ");
            }

            return View("Result", (object)result.ToString());
        }

        /// <summary>
        /// Deffered LINQ Example
        /// </summary>
        /// <returns></returns>
        public ViewResult FindProducts()
        {
            Product[] products = {
                                     new Product {Name= "Kayak", Price= 275M, Category= "Watersports"},
                                     new Product {Name= "Lifejacket", Price= 48.95M, Category= "Watersports"},
                                     new Product {Name= "Soccer ball", Category= "Soccer", Price= 19.50M},
                                     new Product {Name= "Corner Flag", Category= "Soccer", Price= 34.95M}
                                 };
            var foundProducts = products.OrderByDescending(e => e.Price).Take(3).Select(e => new { e.Name, e.Price });

            products[2] = new Product { Name = "Stadium", Price = 79600M };

            StringBuilder result = new StringBuilder();

            foreach (var p in foundProducts)
            {
                result.AppendFormat("Price: {0}", p.Price);
            }

            return View("Result", (Object)result.ToString());
        }

        /// <summary>
        /// non-deferred extension methods causes a LINQ query to be performed immediately
        /// </summary>
        /// <returns></returns>
        public ViewResult SumProducts()
        {
            Product[] products = {
                                     new Product {Name= "Kayak", Price= 275M, Category= "Watersports"},
                                     new Product {Name= "Soccer", Category="Soccer",Price=19.50M}
                                 };

            //non-deferred method Sum
            var results = products.Sum(e => e.Price);

            products[2] = new Product { Name = "Stadium", Price = 79500M };

            return View("Result", (object)String.Format("Sum: {0}", results));
        }
    }
}