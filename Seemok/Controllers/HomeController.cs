using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Seemok.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            //return View();
            return RedirectToAction("service");
        }

        public PartialViewResult Settings()
        {
            return PartialView();
        }

        public ActionResult Dashboard()
        {
            return View();
        }

        public ActionResult Master()
        {
            return View();
        }

        public ActionResult Service()
        {
            return View();
        }
    }
}
