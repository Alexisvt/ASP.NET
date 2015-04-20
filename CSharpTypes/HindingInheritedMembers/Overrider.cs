using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HindingInheritedMembers
{
    public class Overrider: BaseClass
    {
        public sealed override int MySealedProperty
        {
            get
            {
                return base.MySealedProperty;
            }
            set
            {
                base.MySealedProperty = value;
            }
        }

        public override void Foo()
        {
            Console.WriteLine("Overrider.Foo");
        }
    }
}
