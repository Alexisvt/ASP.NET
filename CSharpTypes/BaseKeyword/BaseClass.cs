using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BaseKeyword
{
    public class BaseClass
    {
        public int x;
        public BaseClass(int x = 0)
        {
            this.x = x;
        }

        public BaseClass()
        {
            this.x = 100;
        }
    }
}
