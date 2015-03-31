﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Chapter6.Models
{
    public interface IDiscountHelper
    {
        decimal ApplyDiscount(decimal totalParam);
    }

    public class DefaultDiscountHelper : IDiscountHelper 
    {
        public decimal ApplyDiscount(decimal totalParam)
        {
            return (totalParam - (10M / 100M * totalParam));
        }
    }
}