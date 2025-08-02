using MerchStoreBackend.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add EF Core
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// Add Controllers and Views
builder.Services.AddControllersWithViews();

// Add CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend",
        policy => policy.WithOrigins("http://localhost:5173") // React Vite URL
                        .AllowAnyHeader()
                        .AllowAnyMethod());
});

var app = builder.Build();

// Apply Migrations Automatically
using (var scope = app.Services.CreateScope())
{
    var dbContext = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    dbContext.Database.Migrate();

    // Initialize with seed data (optional)
    DbInitializer.Initialize(dbContext);
}

// Middleware pipeline
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
}

app.UseStaticFiles();
app.UseRouting();

// 🔁 CORS must come BEFORE endpoints
app.UseCors("AllowFrontend");

// Uncomment only if you're using authentication
// app.UseAuthentication();
// app.UseAuthorization();

// API + MVC Routes
app.MapControllers(); // ← Enables `[ApiController]` endpoints
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
