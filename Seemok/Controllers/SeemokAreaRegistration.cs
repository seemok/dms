using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Seemok.Controllers
{
    public class DashboardAreaRegistration : AreaRegistration
    {
        public override string AreaName
        {
            get { return "Dashboard"; }
        }

        public override void RegisterArea(AreaRegistrationContext context)
        {
            context.MapRoute("dashboard", "das-{controller}/{action}/{id}", new { action = "Index", id = UrlParameter.Optional }, new string[] { "Seemok.Controllers.Dashboard" });
        }
    }

    public class ServiceAreaRegistration : AreaRegistration
    {
        public override string AreaName
        {
            get { return "Service"; }
        }

        public override void RegisterArea(AreaRegistrationContext context)
        {
            context.MapRoute("service", "sv-{controller}/{action}/{id}", new { action = "Index", id = UrlParameter.Optional }, new string[] { "Seemok.Controllers.Service" });
        }
    }
}