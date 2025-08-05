namespace MerchStoreBackend.Models;

public class Order
{
    public int Id { get; set; }
    public string CustomerName { get; set; } = string.Empty;
    public string ShippingAddress { get; set; } = string.Empty;
    public DateTime OrderDate { get; set; } = DateTime.UtcNow;
    public string PaymentMethod { get; set; } = string.Empty;
    public string? CardNumber { get; set; }
    public string? CardHolder { get; set; }
    public string? ExpiryDate { get; set; }
    public string? CVV { get; set; }
    public List<OrderItem> Items { get; set; } = new List<OrderItem>();
}