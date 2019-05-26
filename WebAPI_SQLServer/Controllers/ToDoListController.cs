using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI_SQLServer.Models;

namespace WebAPI_SQLServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ToDoListController : ControllerBase
    {
        private readonly ToDoListContext _context;

        public ToDoListController(ToDoListContext context)
        {
            _context = context;
        }

        // GET: api/ToDoList
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ToDoList>>> GetToDoLists()
        {
            return await _context.ToDoLists.ToListAsync();
        }
        

        // PUT: api/ToDoList/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutToDoList(int id, ToDoList ToDoList)
        {
            if(id!=ToDoList.ToDoListId)
            {
                return BadRequest();
            }
            _context.Entry(ToDoList).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ToDoListExists(id))
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

        // GET: api/ToDoList/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ToDoList>> GetToDoList(int id)
        {
            var ToDoList = await _context.ToDoLists.FindAsync(id);

            if (ToDoList == null)
            {
                return NotFound();
            }

            return ToDoList;
        }

        // POST: api/ToDoList
        [HttpPost]
        public async Task<ActionResult<ToDoList>> PostToDoList(ToDoList ToDoList)
        {
            _context.ToDoLists.Add(ToDoList);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetToDoList", new { id = ToDoList.ToDoListId }, ToDoList);
        }

        // DELETE: api/ToDoList/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ToDoList>> DeleteToDoList(int id)
        {
            var ToDoList = await _context.ToDoLists.FindAsync(id);
            if (ToDoList == null)
            {
                return NotFound();
            }

            _context.ToDoLists.Remove(ToDoList);
            await _context.SaveChangesAsync();

            return ToDoList;
        }

        private bool ToDoListExists(int id)
        {
            return _context.ToDoLists.Any(e => e.ToDoListId == id);
        }
    }
}
