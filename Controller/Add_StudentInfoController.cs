﻿using System;
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
    public class Add_StudentInfoController : ControllerBase
    {
        private readonly Datacontext _context;
        private readonly IMapper _mapper;

        public Add_StudentInfoController(Datacontext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        // GET: api/Add_StudentInfo
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Add_StudentInfoDTO>>> GetAdd_StudentInfo()
        {
            var config = _context.Set<Add_StudentInfo>();
            var getdata = _mapper.ProjectTo<Add_StudentInfoDTO>(config);
            var itemdtos = await getdata.ToArrayAsync();
            return itemdtos;
        }

        // GET: api/Add_StudentInfo/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Add_StudentInfo>> GetAdd_StudentInfo(int id)
        {
            var add_StudentInfo = await _context.Add_StudentInfo.FindAsync(id);

            if (add_StudentInfo == null)
            {
                return NotFound();
            }

            return add_StudentInfo;
        }

        // POST: api/Add_StudentInfo
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<Add_StudentInfo>> PostAdd_StudentInfo(Add_StudentInfo add_StudentInfo)
        {
            _context.Add_StudentInfo.Add(add_StudentInfo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAdd_StudentInfo", new { id = add_StudentInfo.ID }, add_StudentInfo);
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
    }
}
