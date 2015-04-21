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
            string[] names = { "Alexis", "Mel", "David", "Margoth" };

            IEnumerable<string> filteredNames = 
                names.Where(n => n.Length >= 4)
                .OrderBy(n => n.Length)
                .Select(n => n.ToUpper());

            foreach (string item in filteredNames)
            {
                Console.WriteLine(item);
            }

            Console.ReadLine();
        }
    }
}
