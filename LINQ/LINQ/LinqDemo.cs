using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LINQ
{
    class LinqDemo
    {
        static void Main(string[] args)
        {
            string[] names = { "Alexis", "Melissa", "David", "Margoth" };

            IEnumerable<string> filteredNames = names.Where(n => n.Length >= 4);

            foreach (string item in filteredNames)
            {
                Console.WriteLine(item);
                Console.ReadKey();
            }
        }
    }
}
