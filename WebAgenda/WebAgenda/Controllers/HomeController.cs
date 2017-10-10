using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebAgenda.Context;
using WebAgenda.Models;

namespace WebAgenda.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            var repository = new ContactAgendaRepository();

            return View(repository.GetAllContacts());
        }

        // POST: Home/Create
        [HttpPost]
        public ActionResult Create(ContactAgendaViewModel data)
        {
            try
            {
                // TODO: Add insert logic here
                var repository = new ContactAgendaRepository();
                repository.CreateContact(data);
                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        [HttpGet]
        public ActionResult Create()
        {
            try
            {
                // TODO: Add insert logic here

                return View();
            }
            catch
            {
                return View();
            }
        }

        //// GET: Home/Edit/5
        //public ActionResult Edit(int id)
        //{
        //    return View();
        //}

        //// POST: Home/Edit/5
        //[HttpPost]
        //public ActionResult Edit(int id, FormCollection collection)
        //{
        //    try
        //    {
        //        // TODO: Add update logic here

        //        return RedirectToAction("Index");
        //    }
        //    catch
        //    {
        //        return View();
        //    }
        //}

        //// GET: Home/Delete/5
        //public ActionResult Delete(int id)
        //{
        //    return View();
        //}

        //// POST: Home/Delete/5
        //[HttpPost]
        //public ActionResult Delete(int id, FormCollection collection)
        //{
        //    try
        //    {
        //        // TODO: Add delete logic here

        //        return RedirectToAction("Index");
        //    }
        //    catch
        //    {
        //        return View();
        //    }
        //}
    }
}
