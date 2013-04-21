using Seemok.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Seemok.Controllers
{
    public class DbController : Controller
    {
        protected DataContext ctx = new DataContext();
    }
}
