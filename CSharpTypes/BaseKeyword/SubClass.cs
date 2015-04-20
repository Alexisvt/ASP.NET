using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BaseKeyword
{
    class SubClass : BaseClass
    {
        public SubClass(int y = 0)
            : base(y)
        {
            Console.WriteLine(this.x);
        }

        // We are no calling the base parameterless base constructor here
        public SubClass()
        {
            Console.WriteLine(this.x);
        }
    }
}
