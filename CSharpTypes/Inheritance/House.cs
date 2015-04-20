using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Inheritance
{
    public class House: Asset
    {
        public decimal Mortgage;
        public override decimal Liability
        {
            get
            {
                return Mortgage;
            }
        }
    }
}
