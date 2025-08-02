public class UserSignupDto
{
    public required string Email { get; set; }
    public required string Password { get; set; }  // Plain text, for signup only
}