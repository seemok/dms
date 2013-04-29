using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Seemok.Models
{
    [Table("JobOrder")]
    public class JobOrder
    {
        [Key]
        public string JobOrderID { get; set; }
        public string JobOrderNo { get; set; }
        public DateTime JobOrderDate { get; set; }
        public string JobOrderCode { get; set; }
        public string VehicleID { get; set; }
        public int Odometer { get; set; }
        public string CustomerBill { get; set; }
        public string FMCode { get; set; }
        public string SACode { get; set; }
        public string Status { get; set; }
        public string CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public string UpdatedBy { get; set; }
        public DateTime? UpdatedDate { get; set; }
    }
}