using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HindingInheritedMembers
{
    public class Hider: BaseClass
    {
        // We are hidden the sealed property
        public new int MySealedProperty { get; set; }

        // In this context new is creating a new Foo functions is not overriding anything!
        public new void Foo()
        {
            Console.WriteLine("Hider.Foo");
            this.MySealedProperty = 10;

            Console.WriteLine(this.MySealedProperty);

            //try to access to base Foo even if it hidden by this
            //((BaseClass)Foo());
            base.Foo();
        }
    }
}
