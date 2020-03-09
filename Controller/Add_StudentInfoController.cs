using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjectInfo.Data_Context;
using ProjectInfo.Model;

namespace ProjectInfo.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class Add_StudentInfoController : ControllerBase
    {
        private readonly Datacontext _context;

        public Add_StudentInfoController(Datacontext context)
        {
            _context = context;
        }

        // GET: api/Add_StudentInfo
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Add_StudentInfo>>> GetAdd_StudentInfo()
        {
            return await _context.Add_StudentInfo.ToListAsync();
        }

        // GET: api/Add_StudentInfo/5
     

        // POST: api/Add_StudentInfo
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<Add_StudentInfo>> PostAdd_StudentInfo(Add_StudentInfo add_StudentInfo)
        {
            _context.Add_StudentInfo.Add(add_StudentInfo);
            await _context.SaveChangesAsync();

            return add_StudentInfo;
        }

        // DELETE: api/Add_StudentInfo/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Add_StudentInfo>> DeleteAdd_StudentInfo(int id)
        {
            var add_StudentInfo = await _context.Add_StudentInfo.FindAsync(id);
            if (add_StudentInfo == null)
            {
                return NotFound();
            }

            _context.Add_StudentInfo.Remove(add_StudentInfo);
            await _context.SaveChangesAsync();

            return add_StudentInfo;
        }

        private bool Add_StudentInfoExists(int id)
        {
            return _context.Add_StudentInfo.Any(e => e.ID == id);
        }

        [HttpGet("{userId}")]
        public ActionResult<List<Add_StudentInfo>> GetByUserId(int userId)
        {  
            var userValue = _context.Add_StudentInfo.Where(e => e.UserId == userId);
            return userValue.ToList();         
        }
    }
}
