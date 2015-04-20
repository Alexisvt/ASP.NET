using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Inheritance
{
    public class Asset
    {
        public string name;
        public virtual decimal Liability { get { return 0; } set { Liability = value; } }
    }
}
