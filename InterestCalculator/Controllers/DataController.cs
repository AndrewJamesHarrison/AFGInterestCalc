using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace InterestCalculator.Controllers
{
    [Route("api/[controller]")]
    public class DataController : Controller
    {
        [HttpPost("[action]")]
        public double Calculate(double LoanValue, double InterestRate, double Term)
        {
            var repayment = LoanValue / ((1 - (1 / Math.Pow((1 + (InterestRate / 12)), (Term * 12)))) / InterestRate / 12);
            return repayment;
        }
    }
}
