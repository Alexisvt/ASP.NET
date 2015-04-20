using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Generics
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] arreglo = {10, 20};
            bool[] arreglo2 = { true, true };

            Stack<int> stack = new Stack<int>();
            stack.Push(5);
            stack.Push(10);
            int x = stack.Pop();
            int y = stack.Pop();

            GenericClass1.Swap<int>(ref x, ref y);
            GenericClass1.Zap(arreglo);

            var generic = new GenericClass2<int>();

            generic.MyProperty = 30;
            Console.WriteLine(generic.MyProperty);

            var generic2 = new GenericClass3<int, string>();
            generic2.MyProperty = 10;
            generic2.MyProperty2 = "hola";

            Type a1 = typeof(GenericClass2<>);
            Type a2 = typeof(GenericClass3<,>);

            Console.WriteLine(a1);
            Console.WriteLine(a1);

            //This functions compares to values and return the higher one
            Console.WriteLine(GenericClass1.Max(x, y));

            Console.ReadLine();
        }
    }
}
