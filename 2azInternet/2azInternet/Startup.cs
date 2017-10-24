using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(_2azInternet.Startup))]
namespace _2azInternet
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
