using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
namespace MerchStoreBackend.Models;

 public class OrderItem
    {
        public int Id { get; set; }
        public int ProductId { get; set; }
        public Product Product { get; set; } = null!;
        public int Quantity { get; set; }
        public string? CustomText { get; set; }
        public string? TextColor { get; set; }
        public string? TextPosition { get; set; }

        public int OrderId { get; set; }
        [JsonIgnore]
        public Order Order { get; set; } = null!;
    }
