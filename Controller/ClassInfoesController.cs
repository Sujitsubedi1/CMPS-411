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
    public class ClassInfoesController : ControllerBase
    {
        private readonly Datacontext _context;

        public ClassInfoesController(Datacontext context)
        {
            _context = context;
        }

        // GET: api/ClassInfoes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ClassInfo>>> GetClassInfos()
        {
            return await _context.ClassInfos.ToListAsync();
        }

        // GET: api/ClassInfoes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ClassInfo>> GetClassInfo(int id)
        {
            var classInfo = await _context.ClassInfos.FindAsync(id);

            if (classInfo == null)
            {
                return NotFound();
            }

            return classInfo;
        }

        // PUT: api/ClassInfoes/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutClassInfo(int id, ClassInfo classInfo)
        {
            if (id != classInfo.Id)
            {
                return BadRequest();
            }

            _context.Entry(classInfo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ClassInfoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ClassInfoes
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<ClassInfo>> PostClassInfo(ClassInfo classInfo)
        {
            _context.ClassInfos.Add(classInfo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetClassInfo", new { id = classInfo.Id }, classInfo);
        }

        // DELETE: api/ClassInfoes/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ClassInfo>> DeleteClassInfo(int id)
        {
            var classInfo = await _context.ClassInfos.FindAsync(id);
            if (classInfo == null)
            {
                return NotFound();
            }

            _context.ClassInfos.Remove(classInfo);
            await _context.SaveChangesAsync();

            return classInfo;
        }

        private bool ClassInfoExists(int id)
        {
            return _context.ClassInfos.Any(e => e.Id == id);
        }
    }
}
