using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace Seemok
{
    // Note: For instructions on enabling IIS6 or IIS7 classic mode, 
    // visit http://go.microsoft.com/?LinkId=9394801

    public class MvcApplication : System.Web.HttpApplication
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }

        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute("default", "{controller}/{action}/{id}", new { controller = "Home", action = "Index", id = UrlParameter.Optional });
        }

        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();

            // Use LocalDB for Entity Framework by default
            Database.DefaultConnectionFactory = new SqlConnectionFactory(@"Data Source=(localdb)\v11.0; Integrated Security=True; MultipleActiveResultSets=True");

            RegisterGlobalFilters(GlobalFilters.Filters);
            RegisterRoutes(RouteTable.Routes);

            ViewEngines.Engines.Clear();
            ViewEngines.Engines.Add(new RazorCSharpViewEngine());
        }
    }

    public class RazorCSharpViewEngine : RazorViewEngine
    {
        public RazorCSharpViewEngine()
            : base()
        {
            ViewLocationFormats = new[] 
            { 
                "~/Views/{1}/{0}.cshtml"
            };
            MasterLocationFormats = new[] 
            {
                "~/Views/Shared/{0}.cshtml" 
            };
            PartialViewLocationFormats = new[] 
            { 
                "~/Views/{1}/{0}.cshtml", 
                "~/Views/Shared/{0}.cshtml" 
            };
            AreaViewLocationFormats = new[] 
            { 
                "~/Views/{2}/{1}/{0}.cshtml"
            };
            AreaMasterLocationFormats = new[] 
            { 
                "~/Areas/{2}/Views/Shared/{0}.cshtml" 
            };
            AreaPartialViewLocationFormats = new[] 
            { 
                "~/Areas/{2}/Views/{1}/{0}.cshtml"
            };
            //AreaViewLocationFormats = new[] { "~/Areas/{2}/Views/{1}/{0}.cshtml", "~/Areas/{2}/Views/Shared/{0}.cshtml" };
            //AreaMasterLocationFormats = new[] { "~/Areas/{2}/Views/{1}/{0}.cshtml", "~/Areas/{2}/Views/Shared/{0}.cshtml" };
            //AreaPartialViewLocationFormats = new[] { "~/Areas/{2}/Views/{1}/{0}.cshtml", "~/Areas/{2}/Views/Shared/{0}.cshtml" };
            //ViewLocationFormats = new[] { "~/Views/{1}/{0}.cshtml", "~/Views/Shared/{0}.cshtml" };
            //MasterLocationFormats = new[] { "~/Views/{1}/{0}.cshtml", "~/Views/Shared/{0}.cshtml" };
            //PartialViewLocationFormats = new[] { "~/Views/{1}/{0}.cshtml", "~/Views/Shared/{0}.cshtml" };
        }
    }
}