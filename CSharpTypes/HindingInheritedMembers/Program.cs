using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HindingInheritedMembers
{
    public class Program
    {
        static void Main(string[] args)
        {
            Overrider over = new Overrider();
            BaseClass b1 = over; // Upcasting
            over.Foo(); // Overrider.Foo
            b1.Foo(); // Overrider.Foo

            Console.WriteLine("------------------------------");

            Hider h = new Hider();
            BaseClass b2 = h; // upcasting
            h.Foo(); // Hider.Foo
            b2.Foo(); // BaseClass.Foo

            Console.WriteLine("------------------------------");

            override2 o2 = new override2();
            o2.Foo();
            
            Console.ReadLine();
        }
    }
}
