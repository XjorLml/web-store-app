namespace MerchStoreBackend.Models;

public class Order
{
    public int Id { get; set; }
    public string CustomerName { get; set; } = string.Empty;
    public string ShippingAddress { get; set; } = string.Empty;
    public DateTime OrderDate { get; set; } = DateTime.UtcNow;

    public List<OrderItem> Items { get; set; } = new();
}
