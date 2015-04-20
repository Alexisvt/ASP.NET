using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GetTypeTypeOfExample
{
    public class Point
    {
        public int X, Y;
    }

    class Program
    {
        static void Main(string[] args)
        {
            Point p = new Point();
            Console.WriteLine(p.GetType().Name); // Point
            Console.WriteLine(typeof(Point).Name); // Point
            Console.WriteLine(p.GetType() == typeof(Point)); //True
            Console.WriteLine(p.X.GetType().Name); // Int32
            Console.WriteLine(p.Y.GetType().FullName); // System.Int32
            
            Console.ReadLine();
        }
    }
}
