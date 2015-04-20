using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Interfaces
{
    class Program
    {
        static void Main(string[] args)
        {
            IEnumerator e = new Countdown();
            while (e.MoveNext())
            {
                Console.WriteLine(e.Current);
            }

            Console.ReadLine();

            IEnumerator f = (IEnumerator)Util.GetCountDown();
            f.MoveNext();
        }
    }
}
