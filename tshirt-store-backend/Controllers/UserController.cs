using Microsoft.AspNetCore.Mvc;
using MerchStoreBackend.Data;
using MerchStoreBackend.Models;
using System.Security.Cryptography;
using System.Text;

[ApiController]
[Route("api/[controller]")]
public class UserController : ControllerBase
{
    private readonly AppDbContext _context;

    public UserController(AppDbContext context)
    {
        _context = context;
    }

    [HttpPost("signup")]
    public IActionResult Signup(UserSignupDto dto)
    {
        if (_context.Users.Any(u => u.Email == dto.Email))
        {
            return BadRequest("Email is already registered.");
        }

        string passwordHash = ComputeSha256Hash(dto.Password);

        var user = new User
        {
            Email = dto.Email,
            PasswordHash = passwordHash
        };

        _context.Users.Add(user);
        _context.SaveChanges();

        return Ok("User registered successfully.");
    }

    [HttpPost("login")]
    public IActionResult Login(UserLoginDto dto)
    {
        string passwordHash = ComputeSha256Hash(dto.Password);

        var user = _context.Users.FirstOrDefault(u => u.Email == dto.Email && u.PasswordHash == passwordHash);

        if (user == null)
        {
            return Unauthorized("Invalid email or password.");
        }

        return Ok("Login successful.");
    }

    private static string ComputeSha256Hash(string rawData)
    {
        using var sha256 = SHA256.Create();
        var bytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(rawData));
        return Convert.ToBase64String(bytes);
    }
}
