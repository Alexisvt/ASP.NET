using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HindingInheritedMembers
{
    public class BaseClass
    {
        // A sealed property can override but you can hidden with the new operator
        public virtual int MySealedProperty { get; set; }

        public virtual void Foo()
        {
            Console.WriteLine("BaseClass.Foo");
        }
    }
}
