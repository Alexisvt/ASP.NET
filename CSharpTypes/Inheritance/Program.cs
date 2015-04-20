using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Inheritance
{
    public class Program
    {
        static void Main(string[] args)
        {
            showStock();
            Console.WriteLine("------------------------------");
            showMansion();
            Console.WriteLine("------------------------------");
            UpcastExample();
            Console.WriteLine("------------------------------");
            DowncastingExample();
            Console.WriteLine("------------------------------");
            //InvalidaDowncasting();
            BetterInvalidDowncasting();
            Console.WriteLine("------------------------------");
            isOperatorExample();
            Console.WriteLine("------------------------------");
            virtualExample();
            Console.ReadLine();

        }

        protected static void showStock()
        {
            Stock msft = new Stock { name = "MSFT", SharesOwned = 1000 };

            Console.WriteLine(msft.name);
            Console.WriteLine(msft.SharesOwned);
            Display(msft);
        }

        protected static void showMansion()
        {
            House mansion = new House { name = "Mansion", Mortgage = 25000 };

            Console.WriteLine(mansion.name);
            Console.WriteLine(mansion.Mortgage);
            Display(mansion);
        }

        protected static void Display(Asset asset)
        {
            Console.WriteLine("Displayed from Display Polymorphism method");
            Console.WriteLine(asset.name);
        }

        protected static void UpcastExample()
        {
            Stock msft = new Stock { name = "Test", SharesOwned = 25000 };
            Asset a = msft; // Upcasting!

            Console.WriteLine(a == msft);
            Console.WriteLine(a.name);
            //Console.WriteLine(a.SharesOwned); cant do this
        }

        protected static void DowncastingExample()
        {
            Stock msft = new Stock { name = "Alexis", SharesOwned = 1000 };
            Asset a = msft; // Upcast
            
            Console.WriteLine(a.name);

            Stock s = (Stock)a; // Downcast need explicit cast because it can potentially fail at runtime
            Console.WriteLine(s.SharesOwned);
            Console.WriteLine(s == a); // true
            Console.WriteLine(s == msft); // true;
        }

        protected static void InvalidaDowncasting()
        {
            House h = new House();
            Asset a = h; // Upcast always succeeds
            Stock s = (Stock)a; // Downcast fails: a is not a Stock
        }

        protected static void BetterInvalidDowncasting()
        {
            Asset a = new Asset();
            Stock s = a as Stock; // s is null; no exception thrown

            if (s != null)
            {
                Console.WriteLine("Cast works! But you know that will never happens buuu");
            }
            else
            {
                Console.WriteLine("The downcastin fail!!");
            }
        }

        protected static void isOperatorExample()
        {
            House h = new House { name = "ONE", Mortgage = 5000 };
            Asset a = h; // upcasting always work

            if (a is House)
            {
                Console.WriteLine(((House)a).Mortgage);
            }
            else
            {
                Console.WriteLine("Opps something went wrong!");
            }
        }

        protected static void virtualExample()
        {
            House mansion = new House { Mortgage = 25000, name = "McMansion" };
            Asset a = mansion; //Upcasting always work

            Console.WriteLine("virtualExample");
            Console.WriteLine(mansion.Liability); // 250000
            Console.WriteLine(a.Liability); // 250000
        }
    }
}
