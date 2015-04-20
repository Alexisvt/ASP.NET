using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ObjectType
{
    class Program
    {
        static void Main(string[] args)
        {
            Stack stack = new Stack();
            stack.Push("Sausege");
            stack.Push("Trim");

            string s = (string)stack.Pop(); // Downcast, so explicit cast is needed
            string t = (stack.Pop() as string); // Downcast with as operator

            Console.WriteLine(s);

            if (!string.IsNullOrEmpty(t))
            {
                Console.WriteLine(t);
            }

            boxingUnboxingExample();

            Console.ReadLine();
        }

        static void boxingUnboxingExample()
        {
            //Boxing es the act of converting a value-type instance to a reference-type instance\
            int n = 10;
            object obj = n; // box the int
 
            // Unboxing
            int n2 = (int)obj; // unbox need explicit cast
            int? n3 = (obj as int?); //it work because in this example int is nullable type

            long l = (int)obj;

            object obj2 = 9.5; // 9.5 is inferred to be of type double
            int x = (int)(double)obj2; //the first double unbox the content and the int performs a numeric conversion

            object[] a1 = new string[3];
            
            //object[] a2 = new int[3]; this operation is illegal because generics supports only reference conversion and not boxing conversions
            

            //boxing copies the value type instance into the new object
            int i = 3;
            object boxed = i;
            i = 5;
            Console.WriteLine(boxed); // 3

            //object y = "5";
            //int z = (int)y;

        }
    }
}
