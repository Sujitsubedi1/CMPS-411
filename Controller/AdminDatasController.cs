using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjectInfo.Data_Context;
using ProjectInfo.DTOs;
using ProjectInfo.Model;

namespace ProjectInfo.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminDatasController : ControllerBase
    {
        private readonly Datacontext _context;
        private readonly IMapper _mapper;

        public AdminDatasController(Datacontext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        // GET: api/AdminDatas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AdminDatadtos>>> GetAdminData()

        {
            var config = _context.Set<AdminData>();
            var getdata =  _mapper.ProjectTo<AdminDatadtos>(config);
            var itemdtos = await getdata.ToArrayAsync();
            return itemdtos;
        }

        // GET: api/AdminDatas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<AdminData>> GetAdminData(int id)
        {
            var adminData = await _context.AdminData.FindAsync(id);

            if (adminData == null)
            {
                return NotFound();
            }

            return adminData;
        }

        // PUT: api/AdminDatas/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAdminData(int id, AdminData adminData)
        {
            if (id != adminData.ID)
            {
                return BadRequest();
            }

            _context.Entry(adminData).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AdminDataExists(id))
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

        // POST: api/AdminDatas
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<AdminData>> PostAdminData(AdminData adminData)
        {
            _context.AdminData.Add(adminData);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAdminData", new { id = adminData.ID }, adminData);
        }

        // DELETE: api/AdminDatas/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<AdminData>> DeleteAdminData(int id)
        {
            var adminData = await _context.AdminData.FindAsync(id);
            if (adminData == null)
            {
                return NotFound();
            }

            _context.AdminData.Remove(adminData);
            await _context.SaveChangesAsync();

            return adminData;
        }

        private bool AdminDataExists(int id)
        {
            return _context.AdminData.Any(e => e.ID == id);
        }
    }
}
