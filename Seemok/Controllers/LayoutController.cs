using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Seemok.Controllers
{
    public class LayoutController : DbController
    {
        public ActionResult MenuList()
        {
            var list = ctx.Menus.OrderBy(p => p.MenuIndex).Select(p => new { p.MenuId, p.MenuName, p.MenuHeader, p.MenuArea, p.MenuController, p.MenuAction });
            return Json(list.ToArray().Select(p => new
            {
                p.MenuId,
                p.MenuName,
                p.MenuHeader,
                MenuUrl = (string.IsNullOrWhiteSpace(p.MenuArea)) ? string.Format("/{0}/{1}", p.MenuController, p.MenuAction) : string.Format("{0}/{1}/{2}", p.MenuArea, p.MenuController, p.MenuAction)
            }));
        }
    }
}
