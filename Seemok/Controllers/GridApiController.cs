using Seemok.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Telerik.Web.Mvc;

namespace Seemok.Controllers
{
    public class GridApiController : DbController
    {
        [HttpPost, GridAction]
        public ActionResult JobOrderList(JobOrder model)
        {
            var list = ctx.JobOrders;
            return View(new GridModel<JobOrder> { Data = list });
        }
    }
}
