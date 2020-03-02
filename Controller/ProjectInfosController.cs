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
    public class ProjectInfoesController : ControllerBase
    {
        private readonly Datacontext _context;
        private readonly IMapper _mapper;

        public ProjectInfoesController(Datacontext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        // GET: api/ClassInfoes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Project_InfoDTO>>> GetProjectinfo()
        {
            var config = _context.Set<Project_Info>();
            var getdata = _mapper.ProjectTo<Project_InfoDTO>(config);
            var itemdtos = await getdata.ToArrayAsync();
            return itemdtos;
        }

        // GET: api/ClassInfoes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Project_Info>> GetProjectinfo(int id)
        {
            var ProjectInfo = await _context.ProjectInfo.FindAsync(id);

            if (ProjectInfo == null)
            {
                return NotFound();
            }

            return ProjectInfo;
        }

        // PUT: api/ClassInfoes/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProjectInfo(int id, Project_Info projectinfo)
        {
            if (id != projectinfo.ID)
            {
                return BadRequest();
            }

            _context.Entry(projectinfo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProjectInfoExists(id))
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
        public async Task<ActionResult<Project_Info>> PostClassInfo(Project_Info projectinfo)
        {
            _context.ProjectInfo.Add(projectinfo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProjectInfo", new { id = projectinfo.ID }, projectinfo);
        }

        // DELETE: api/ClassInfoes/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Project_Info>> DeleteProjectInfo(int id)
        {
            var projectinfo = await _context.ProjectInfo.FindAsync(id);
            if (projectinfo == null)
            {
                return NotFound();
            }

            _context.ProjectInfo.Remove(projectinfo);
            await _context.SaveChangesAsync();

            return projectinfo;
        }

        private bool ProjectInfoExists(int id)
        {
            return _context.ProjectInfo.Any(e => e.ID == id);
        }
    }
}
