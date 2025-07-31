using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MerchStoreBackend.Data;
using MerchStoreBackend.Models;

[ApiController]
[Route("api/[controller]")]
public class OrderController : ControllerBase
{
    private readonly AppDbContext _context;

    public OrderController(AppDbContext context)
    {
        _context = context;
    }

    [HttpPost]
    public IActionResult CreateOrder(Order order)
    {
        _context.Orders.Add(order);
        _context.SaveChanges();
        return Ok(order);
    }

    [HttpGet("{id}")]
    public IActionResult GetOrder(int id)
    {
        var order = _context.Orders
            .Include(o => o.Items)
            .ThenInclude(i => i.Product)
            .FirstOrDefault(o => o.Id == id);

        if (order == null) return NotFound();
        return Ok(order);
    }
}
