using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Generics
{
    public class GenericClass1
    {
        // Example of Generic Method
        public static void Swap<T>(ref T a, ref T b)
        {
            T temp = a;
            a = b;
            b = temp;

            Console.WriteLine(a);
            Console.WriteLine(b);
        }

        public static void Zap<T>(T[] array)
        {
            for (int i = 0; i < array.Length; i++)
            {
                array[i] = default(T);
                Console.WriteLine(array[i]);
            }
        }

        public static T Max<T>(T a, T b) where T : IComparable<T>
        {
            return a.CompareTo(b) > 0 ? a : b;
        }
    }
}
