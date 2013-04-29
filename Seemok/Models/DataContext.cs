using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Seemok.Models
{
    public class DataContext : DbContext
    {
        public IDbSet<Menu> Menus { get; set; }
        public IDbSet<JobOrder> JobOrders { get; set; }
    }
}