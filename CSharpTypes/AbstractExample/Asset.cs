using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbstractExample
{
    public abstract class Asset
    {
        // Note empty implementation
        public abstract decimal NetValue { get; }

        protected abstract void exampleMethod(string variable);
    }
}
