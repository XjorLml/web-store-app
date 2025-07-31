using MerchStoreBackend.Models;

namespace MerchStoreBackend.Data;

public static class DbInitializer
{
    public static void Initialize(AppDbContext context)
    {
        if (context.Products.Any())
            return; // DB has been seeded

        var products = new List<Product>
        {
            new Product { Name = "Basic Tee", Description = "Plain shirt", Price = 9.99M, ImageUrl = "/images/basic.jpg" },
            new Product { Name = "Custom Graphic Tee", Description = "Design your own", Price = 19.99M, ImageUrl = "/images/custom.jpg" },
            new Product { Name = "Long Sleeve", Description = "Great for cold days", Price = 14.99M, ImageUrl = "/images/longsleeve.jpg" }
        };

        context.Products.AddRange(products);
        context.SaveChanges();
    }
}
