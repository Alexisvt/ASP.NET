using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Delegates
{
    delegate int Transformer(int i);

    class Program
    {
        static void Main(string[] args)
        {
            Transformer t = Square;
            Transformer squareAnoni = x => x * x;

            int result = t(3);
            Console.WriteLine(result);
            Console.WriteLine(squareAnoni(9));

            //Using Func delegates
            Func<int, int> sqt = x => x * x;

            //Capture external variables
            int dato = 2;

            Func<int, int> multi = n => n * dato;

            Console.WriteLine(multi(4));

            Func<int> test = Test();

            Console.WriteLine(test()); // 1
            Console.WriteLine(test()); // 2
            Console.WriteLine(test()); // 3
            Console.WriteLine((Test())());

            Action[] action = new Action[3];

            for (int i = 0; i < action.Length; i++)
            {
                int i2 = i;
                action[i] = () => Console.WriteLine(i2);
            }

            foreach (var act in action)
            {
                act();
            }

            Console.ReadLine();
        }

        private static int Square(int x)
        {
            return x * x;
        }

        private static Func<int> Test()
        {
            int dato= 0;
            return () => dato++;
        }
    }
}
