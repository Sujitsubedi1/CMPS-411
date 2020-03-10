using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using ProjectInfo.Data_Context;
using ProjectInfo.Model;
using ProjectInfo.Service;






// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ProjectInfo.NewFolder
{
    // GET: /<controller>/

    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private UserService _userService;

        public UserController(Datacontext context)
        {
            this._userService = new UserService(context);
        }

        [HttpPost("login")]
        public User Login([FromBody] User user)
        {
            if (!_userService.ExistsInDb(user))
            {
                _userService.AddUser(user);
                return user;
            }
            return _userService.UpdateToken(user);
        }

        [HttpGet("{id}")]
        public ActionResult<User> Get(int id)
        {
            var getUser = _userService.GetUser(id);

            return getUser;
        }
        [HttpGet]
        public ActionResult<List<User>> GetUser()
        {
            var getAll = _userService.GetAllUser();
            return getAll;

        }

        [HttpGet("{email}")]
        public ActionResult<User> GetByEmail(string email)
        {
            var getUser = _userService.GetUser(email);

            return getUser;
        }

    }
}
