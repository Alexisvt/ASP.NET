using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using _2azInternet.Models;

namespace _2azInternet.ViewModels
{
    public class CustomerViewModel
    {
        public List<Customer> Customers { get; set; }

        public CustomerViewModel()
        {
            Customers = new List<Customer>();
        }
    }
}
