using MerchStoreBackend.Models;

namespace MerchStoreBackend.Data;

public static class DbInitializer
{
    public static void Initialize(AppDbContext context)
    {
        if (context.Products.Any())
            return;

        var products = new List<Product>
        {
            new Product { Name = "Basic Tshirt", Description = "Classic plain tee made from soft cotton.", Price = 299.00M, ImageUrl = "https://blanktees.co.nz/img/products/cloke-t401-edit-tee-white.jpg" },
            new Product { Name = "Sports", Description = "Lightweight and breathable singlet ideal for workouts, running, or sports activities.", Price = 249.00M, ImageUrl = "https://blanktees.co.nz/img/products/spiro-s296x-adult-impact-performance-aircool-singlet.jpg" },
            new Product { Name = "Long Sleeve", Description = "Moisture-wicking long sleeve perfect for layering or cool weather training.s", Price = 14.99M, ImageUrl = "https://blanktees.co.nz/img/products/resized/spiro-s289x-adult-impact-performance-aircool-longsleeve_600_850_85_1749676287.webp" },
            new Product { Name = "Hoodie", Description = "Warm and stylish hoodie with a modern fit—great for chilly days or casual wear.", Price = 14.99M, ImageUrl = "https://blanktees.co.nz/img/products/resized/thread-project-tp2001x-epic-hoodie---plus_600_850_85_1740011446.webp" }
        };

        context.Products.AddRange(products);
        context.SaveChanges();
    }
}
