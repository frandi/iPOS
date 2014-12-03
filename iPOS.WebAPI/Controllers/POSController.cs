using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace iPOS.WebAPI.Controllers
{
    [RoutePrefix("api/POS")]
    public class POSController : ApiController
    {
        [Authorize]
        [Route("Products")]
        public IHttpActionResult Get()
        {
            return Ok(POS.GetProducts());
        }
    }

    #region Helpers

    public class POS
    {
        public static List<string> GetProducts()
        {
            return new List<string>() { "TV", "SmartPhone", "Radio", "DVD Player" };
        }
    }

    #endregion
}
