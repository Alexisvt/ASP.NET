using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbstractExample
{
    public class Stock: Asset
    {
        public long SharesOwned;
        public decimal CurrentPrice;

        // Override like a virtual method
        public override decimal NetValue
        {
            get
            {
                return CurrentPrice * SharesOwned;
            }
        }

        protected override void exampleMethod(string variable)
        {
            if (!String.IsNullOrEmpty(variable))
            {
                Console.WriteLine(variable);
            }
        }
    }
}
