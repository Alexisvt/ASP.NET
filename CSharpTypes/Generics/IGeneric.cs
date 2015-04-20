using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Generics
{
    public interface IGeneric<T>
    {
        bool Equals(T obj);
    }

    public class Ballon : IGeneric<Ballon>
    {
        public bool Equals(Ballon obj)
        {
            return true;
        }
    }
}
