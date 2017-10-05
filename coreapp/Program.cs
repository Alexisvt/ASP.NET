using System;
using static System.Console;

namespace coreapp
{
  class Program
  {
    static void Main(string[] args)
    {
      WriteLine("Hello World!");

      NumerosRecursivos(0);

      ReadKey();

    }

    private static void NumerosRecursivos(int n)
    {
      if (n <= 100)
      {

        if ((n % 2 == 0) || (n % 5 == 0))
        {
          WriteLine(n);
        }

        n++;
        NumerosRecursivos(n);
      }
    }
  }
}
