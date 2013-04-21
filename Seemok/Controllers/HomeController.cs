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
            return RedirectToAction("Dashboard");
        }

        public PartialViewResult Grid()
        {
            return PartialView();
        }

        public PartialViewResult Form()
        {
            return PartialView();
        }

        public ActionResult Menu()
        {
            return View();
        }

        public ActionResult Dashboard()
        {
            return View();
        }

        public ActionResult Master()
        {
            return View();
        }

        public ActionResult Process()
        {
            return View();
        }

        public ActionResult Monitor()
        {
            return View();
        }

        public ActionResult Report()
        {
            return View();
        }
    }
}
