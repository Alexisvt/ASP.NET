using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HindingInheritedMembers
{
    public class override2: Overrider
    {
        //As you see we can only override the unsealed methods and properties
        public override void Foo()
        {
            base.Foo();
        }
    }
}
