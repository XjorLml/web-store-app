using Microsoft.AspNetCore.Mvc;
using MerchStoreBackend.Data;
using MerchStoreBackend.Models;

[ApiController]
[Route("api/[controller]")]
public class ProductController : ControllerBase
{
    private readonly AppDbContext _context;

    public ProductController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public IActionResult GetAll()
    {
        var products = _context.Products.ToList();
        return Ok(new
        {
            message = "Fetched all products.",
            count = products.Count,
            data = products
        });
    }

    [HttpPost]
    public IActionResult Create(Product product)
    {
        _context.Products.Add(product);
        _context.SaveChanges();

        return CreatedAtAction(nameof(GetAll), new { id = product.Id }, new
        {
            message = "Product created successfully.",
            data = product
        });
    }
}
