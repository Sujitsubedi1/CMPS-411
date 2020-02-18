using Microsoft.AspNetCore.Mvc;
using ProjectInfo.Data_Context;
using ProjectInfo.Model;
using System;
using System.Collections.Generic;
using System.Linq;
namespace ProjectInfo.Service
{
    public class UserService
    {
        private readonly Datacontext _context;

        public UserService(Datacontext context)
        {
            this._context = context;
        }

        public bool ExistsInDb(User user)
        {
            return this.ExistsInDb(user.Email);
        }
        public bool ExistsInDb(string email)
        {
            return _context.Users.Any(x => x.Email == email);
        }

        public User UpdateToken(User user)
        {
            var resultUser = GetUser(user.Email);
            resultUser.Token = user.Token;
            resultUser.TokenExpiresIn = DateTime.Now.AddHours(1);
            _context.SaveChanges();
            return resultUser;
        }

        public bool AddUser(User user)
        {
        //    try
          //  {
                _context.Users.Add(user);
                _context.SaveChanges();
                return true;
           // }
            //catch (Exception e)
            //{
              //  return false;
            //}
        }

        public User GetUser(int id)
        {
            return _context.Users.First(x => x.Id == id);
        }
        public User GetUser(string email)
        {
            return _context.Users.First(x => x.Email == email);
        }
        public ActionResult<List<User>> GetAllUser()
        {
            return _context.Users.ToList();
        }
    }
}
