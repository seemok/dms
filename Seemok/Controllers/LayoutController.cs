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
            var list = ctx.Menus.Where(p => p.MenuHeader == "").OrderBy(p => p.MenuIndex).Select(p => new { p.MenuId, p.MenuName, p.MenuHeader, p.MenuUrl });
            return Json(new { success = true, data = list.ToArray() });
        }

        public ActionResult NavList(string id)
        {
            var list = ctx.Menus.Where(p => p.MenuHeader == id).OrderBy(p => p.MenuIndex).Select(p => new { p.MenuId, p.MenuName, p.MenuHeader, p.MenuUrl });
            return Json(new { success = true, data = list.ToArray() });
        }

        public ActionResult GetContent(string id)
        {
            var model = ctx.Menus.Find(id);
            if (model != null)
            {
                return Json(new { success = true, data = model });
            }
            else
            {
                return Json(new { success = false, message = "object not found" });
            }
        }
    }
}
