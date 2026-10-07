/**
 * Master Web Admin — Unified Application Script
 * Compatible with file:// protocol (double-clicking index.html directly) AND http:// localhost dev servers.
 */

// ==========================================
// 1. MOCK DATA & REACTIVE STORE MANAGER
// ==========================================
const initialData = {
  storeInfo: {
    name: "Apex Fashion Store",
    branch: "Main Street Branch #01",
    currency: "₹",
    currencyCode: "INR",
    phone: "+91 98765 43210",
    email: "manager@apexfashion.com",
    address: "124 Commerce Avenue, Fashion District, City",
    defaultMinStock: 10
  },

  categories: ["Shirts", "T-Shirts", "Jeans", "Trousers", "Hoodies"],
  brands: ["ClassicFit", "UrbanWear", "DenimCo", "EssentialStudio"],
  sizes: ["S", "M", "L", "XL"],
  colors: ["Black", "White", "Navy", "Beige", "Olive"],

  suppliers: [
    { id: "SUP-01", name: "Apex Apparel Ltd", contact: "Rajesh Kumar (+91 98111 22334)", city: "Tirupur" },
    { id: "SUP-02", name: "SilkRoute Fabrics", contact: "Anita Sharma (+91 98222 33445)", city: "Surat" },
    { id: "SUP-03", name: "Urban Thread Co", contact: "Vikram Singh (+91 98333 44556)", city: "Ludhiana" }
  ],

  products: [
  {
    "id": "PROD-101",
    "name": "Classic Oxford Shirt",
    "category": "Shirts",
    "brand": "ClassicFit",
    "description": "100% Cotton button-down Oxford shirt suitable for daily formal and casual wear.",
    "purchasePrice": 650,
    "sellingPrice": 1499,
    "minStock": 12,
    "supplier": "Apex Apparel Ltd",
    "status": "Active",
    "variants": [
      {
        "sku": "OXF-BLK-S",
        "color": "Black",
        "size": "S",
        "stock": 18,
        "damaged": 1,
        "daysInStock": 25
      },
      {
        "sku": "OXF-BLK-M",
        "color": "Black",
        "size": "M",
        "stock": 4,
        "damaged": 0,
        "daysInStock": 40
      },
      {
        "sku": "OXF-BLK-L",
        "color": "Black",
        "size": "L",
        "stock": 0,
        "damaged": 2,
        "daysInStock": 15
      },
      {
        "sku": "OXF-WHT-M",
        "color": "White",
        "size": "M",
        "stock": 22,
        "damaged": 0,
        "daysInStock": 12
      },
      {
        "sku": "OXF-WHT-L",
        "color": "White",
        "size": "L",
        "stock": 15,
        "damaged": 1,
        "daysInStock": 10
      }
    ]
  },
  {
    "id": "PROD-102",
    "name": "Premium Cotton T-Shirt",
    "category": "T-Shirts",
    "brand": "UrbanWear",
    "description": "220 GSM combed cotton crewneck t-shirt with pre-shrunk fabric.",
    "purchasePrice": 280,
    "sellingPrice": 699,
    "minStock": 20,
    "supplier": "SilkRoute Fabrics",
    "status": "Active",
    "variants": [
      {
        "sku": "TSH-WHT-S",
        "color": "White",
        "size": "S",
        "stock": 35,
        "damaged": 0,
        "daysInStock": 8
      },
      {
        "sku": "TSH-WHT-M",
        "color": "White",
        "size": "M",
        "stock": 28,
        "damaged": 1,
        "daysInStock": 14
      },
      {
        "sku": "TSH-BLK-L",
        "color": "Black",
        "size": "L",
        "stock": 2,
        "damaged": 0,
        "daysInStock": 95
      },
      {
        "sku": "TSH-NAV-XL",
        "color": "Navy",
        "size": "XL",
        "stock": 0,
        "damaged": 0,
        "daysInStock": 60
      }
    ]
  },
  {
    "id": "PROD-103",
    "name": "Slim Fit Denim Jeans",
    "category": "Jeans",
    "brand": "DenimCo",
    "description": "Stretch denim 5-pocket jeans with stone wash finish.",
    "purchasePrice": 850,
    "sellingPrice": 1999,
    "minStock": 10,
    "supplier": "Urban Thread Co",
    "status": "Active",
    "variants": [
      {
        "sku": "JNS-NAV-M",
        "color": "Navy",
        "size": "M",
        "stock": 14,
        "damaged": 0,
        "daysInStock": 18
      },
      {
        "sku": "JNS-NAV-L",
        "color": "Navy",
        "size": "L",
        "stock": 8,
        "damaged": 1,
        "daysInStock": 22
      },
      {
        "sku": "JNS-BLK-M",
        "color": "Black",
        "size": "M",
        "stock": 3,
        "damaged": 0,
        "daysInStock": 102
      }
    ]
  },
  {
    "id": "PROD-104",
    "name": "Regular Fit Chino Trousers",
    "category": "Trousers",
    "brand": "ClassicFit",
    "description": "Breathable cotton stretch trousers for everyday comfort.",
    "purchasePrice": 600,
    "sellingPrice": 1399,
    "minStock": 15,
    "supplier": "Apex Apparel Ltd",
    "status": "Active",
    "variants": [
      {
        "sku": "TRS-BEI-M",
        "color": "Beige",
        "size": "M",
        "stock": 25,
        "damaged": 0,
        "daysInStock": 16
      },
      {
        "sku": "TRS-BEI-L",
        "color": "Beige",
        "size": "L",
        "stock": 19,
        "damaged": 0,
        "daysInStock": 19
      },
      {
        "sku": "TRS-NAV-S",
        "color": "Navy",
        "size": "S",
        "stock": 5,
        "damaged": 0,
        "daysInStock": 34
      }
    ]
  },
  {
    "id": "PROD-105",
    "name": "Essential Fleece Hoodie",
    "category": "Hoodies",
    "brand": "EssentialStudio",
    "description": "Heavyweight fleece lined hoodie with kangaroo pocket.",
    "purchasePrice": 750,
    "sellingPrice": 1799,
    "minStock": 8,
    "supplier": "Urban Thread Co",
    "status": "Active",
    "variants": [
      {
        "sku": "HD-OLV-L",
        "color": "Olive",
        "size": "L",
        "stock": 12,
        "damaged": 2,
        "daysInStock": 110
      },
      {
        "sku": "HD-BLK-M",
        "color": "Black",
        "size": "M",
        "stock": 16,
        "damaged": 0,
        "daysInStock": 14
      }
    ]
  }
],

  damagedStockRegister: [
    {
      id: "DMG-1001",
      product: "Classic Oxford Shirt",
      sku: "OXF-BLK-L",
      quantity: 2,
      supplier: "Apex Apparel Ltd",
      purchaseId: "PUR-2026-088",
      date: "2026-10-02",
      reason: "Stained collar fabric from supplier packing",
      notes: "Isolated from inventory immediately during quality check."
    },
    {
      id: "DMG-1002",
      product: "Essential Fleece Hoodie",
      sku: "HD-OLV-L",
      quantity: 2,
      supplier: "Urban Thread Co",
      purchaseId: "PUR-2026-092",
      date: "2026-09-28",
      reason: "Defective zipper mechanism",
      notes: "Claim submitted to supplier for credit memo."
    },
    {
      id: "DMG-1003",
      product: "Slim Fit Denim Jeans",
      sku: "JNS-NAV-L",
      quantity: 1,
      supplier: "Urban Thread Co",
      purchaseId: "PUR-2026-092",
      date: "2026-09-28",
      reason: "Seam tear along back pocket",
      notes: "Retained for supplier inspection."
    }
  ],

  stockMovements: [
    { id: "MOV-5005", date: "2026-10-06 08:15 PM", product: "Classic Oxford Shirt", sku: "OXF-WHT-M", type: "Sale", quantity: -3, reference: "BILL-2026-1042", user: "Staff - Priya" },
    { id: "MOV-5004", date: "2026-10-06 05:10 PM", product: "Premium Cotton T-Shirt", sku: "TSH-WHT-S", type: "Sale", quantity: -5, reference: "BILL-2026-1040", user: "Staff - Priya" },
    { id: "MOV-5003", date: "2026-10-05 04:15 PM", product: "Classic Oxford Shirt", sku: "OXF-WHT-M", type: "Stock In", quantity: 20, reference: "PUR-2026-095", user: "Manager - Suresh" },
    { id: "MOV-5002", date: "2026-10-05 04:15 PM", product: "Classic Oxford Shirt", sku: "OXF-BLK-L", type: "Damage", quantity: 2, reference: "PUR-2026-095", user: "Manager - Suresh" },
    { id: "MOV-5001", date: "2026-09-28 11:30 AM", product: "Essential Fleece Hoodie", sku: "HD-OLV-L", type: "Stock In", quantity: 15, reference: "PUR-2026-092", user: "Manager - Suresh" }
  ],

  purchases: [
    {
      id: "PUR-2026-095",
      supplier: "Apex Apparel Ltd",
      invoiceNumber: "INV-APX-8842",
      date: "2026-10-05",
      productCount: 2,
      totalQuantity: 40,
      totalAmount: 26000,
      status: "Completed",
      items: [
        { product: "Classic Oxford Shirt", sku: "OXF-WHT-M", received: 20, good: 20, damaged: 0, price: 650 },
        { product: "Classic Oxford Shirt", sku: "OXF-BLK-L", received: 20, good: 18, damaged: 2, price: 650 }
      ]
    },
    {
      id: "PUR-2026-092",
      supplier: "Urban Thread Co",
      invoiceNumber: "INV-UTC-4109",
      date: "2026-09-28",
      productCount: 2,
      totalQuantity: 30,
      totalAmount: 24000,
      status: "Completed",
      items: [
        { product: "Essential Fleece Hoodie", sku: "HD-OLV-L", received: 15, good: 13, damaged: 2, price: 750 },
        { product: "Slim Fit Denim Jeans", sku: "JNS-NAV-L", received: 15, good: 14, damaged: 1, price: 850 }
      ]
    },
    {
      id: "PUR-2026-090",
      supplier: "SilkRoute Fabrics",
      invoiceNumber: "INV-SRF-3021",
      date: "2026-09-20",
      productCount: 1,
      totalQuantity: 50,
      totalAmount: 14000,
      status: "Completed",
      items: [
        { product: "Premium Cotton T-Shirt", sku: "TSH-WHT-S", received: 50, good: 50, damaged: 0, price: 280 }
      ]
    },
    {
      id: "PUR-2026-088",
      supplier: "Apex Apparel Ltd",
      invoiceNumber: "INV-APX-7910",
      date: "2026-09-12",
      productCount: 2,
      totalQuantity: 40,
      totalAmount: 25000,
      status: "Completed",
      items: [
        { product: "Classic Oxford Shirt", sku: "OXF-BLK-S", received: 20, good: 20, damaged: 0, price: 650 },
        { product: "Regular Fit Chino Trousers", sku: "TRS-BEI-M", received: 20, good: 20, damaged: 0, price: 600 }
      ]
    }
  ],

  sales: [
  {
    "id": "BILL-2026-1042",
    "date": "Oct 6, 08:15 PM",
    "customer": "Amit Verma",
    "phone": "+91 98123 45678",
    "itemCount": 5,
    "totalAmount": 8495,
    "paymentMethod": "UPI",
    "status": "Completed",
    "items": [
      {
        "product": "Classic Oxford Shirt",
        "sku": "OXF-WHT-M",
        "qty": 3,
        "price": 1499,
        "discount": 0,
        "amount": 4497
      },
      {
        "product": "Slim Fit Denim Jeans",
        "sku": "JNS-NAV-M",
        "qty": 2,
        "price": 1999,
        "discount": 0,
        "amount": 3998
      }
    ]
  },
  {
    "id": "BILL-2026-1041",
    "date": "Oct 6, 06:45 PM",
    "customer": "Kavita Reddy",
    "phone": "+91 97654 32109",
    "itemCount": 5,
    "totalAmount": 8195,
    "paymentMethod": "Card",
    "status": "Completed",
    "items": [
      {
        "product": "Essential Fleece Hoodie",
        "sku": "HD-BLK-M",
        "qty": 3,
        "price": 1799,
        "discount": 0,
        "amount": 5397
      },
      {
        "product": "Regular Fit Chino Trousers",
        "sku": "TRS-BEI-M",
        "qty": 2,
        "price": 1399,
        "discount": 0,
        "amount": 2798
      }
    ]
  },
  {
    "id": "BILL-2026-1040",
    "date": "Oct 6, 05:10 PM",
    "customer": "Rohan Gupta",
    "phone": "+91 99887 76655",
    "itemCount": 7,
    "totalAmount": 7493,
    "paymentMethod": "UPI",
    "status": "Completed",
    "items": [
      {
        "product": "Premium Cotton T-Shirt",
        "sku": "TSH-WHT-S",
        "qty": 5,
        "price": 699,
        "discount": 0,
        "amount": 3495
      },
      {
        "product": "Slim Fit Denim Jeans",
        "sku": "JNS-NAV-L",
        "qty": 2,
        "price": 1999,
        "discount": 0,
        "amount": 3998
      }
    ]
  },
  {
    "id": "BILL-2026-1039",
    "date": "Oct 6, 03:30 PM",
    "customer": "Sneha Patel",
    "phone": "+91 98765 11223",
    "itemCount": 5,
    "totalAmount": 8095,
    "paymentMethod": "Cash",
    "status": "Completed",
    "items": [
      {
        "product": "Classic Oxford Shirt",
        "sku": "OXF-BLK-S",
        "qty": 3,
        "price": 1499,
        "discount": 0,
        "amount": 4497
      },
      {
        "product": "Essential Fleece Hoodie",
        "sku": "HD-OLV-L",
        "qty": 2,
        "price": 1799,
        "discount": 0,
        "amount": 3598
      }
    ]
  },
  {
    "id": "BILL-2026-1038",
    "date": "Oct 6, 01:15 PM",
    "customer": "Vikram Malhotra",
    "phone": "+91 98234 56789",
    "itemCount": 4,
    "totalAmount": 5596,
    "paymentMethod": "UPI",
    "status": "Completed",
    "items": [
      {
        "product": "Regular Fit Chino Trousers",
        "sku": "TRS-BEI-L",
        "qty": 4,
        "price": 1399,
        "discount": 0,
        "amount": 5596
      }
    ]
  },
  {
    "id": "BILL-2026-1037",
    "date": "Oct 6, 11:00 AM",
    "customer": "Ananya Deshmukh",
    "phone": "+91 97112 23344",
    "itemCount": 7,
    "totalAmount": 6493,
    "paymentMethod": "Card",
    "status": "Completed",
    "items": [
      {
        "product": "Premium Cotton T-Shirt",
        "sku": "TSH-WHT-M",
        "qty": 5,
        "price": 699,
        "discount": 0,
        "amount": 3495
      },
      {
        "product": "Classic Oxford Shirt",
        "sku": "OXF-WHT-L",
        "qty": 2,
        "price": 1499,
        "discount": 0,
        "amount": 2998
      }
    ]
  },
  {
    "id": "BILL-2026-1036",
    "date": "Oct 5, 08:30 PM",
    "customer": "Rajesh Iyer",
    "phone": "+91 98334 45566",
    "itemCount": 6,
    "totalAmount": 9994,
    "paymentMethod": "UPI",
    "status": "Completed",
    "items": [
      {
        "product": "Classic Oxford Shirt",
        "sku": "OXF-WHT-M",
        "qty": 4,
        "price": 1499,
        "discount": 0,
        "amount": 5996
      },
      {
        "product": "Slim Fit Denim Jeans",
        "sku": "JNS-NAV-M",
        "qty": 2,
        "price": 1999,
        "discount": 0,
        "amount": 3998
      }
    ]
  },
  {
    "id": "BILL-2026-1035",
    "date": "Oct 5, 07:10 PM",
    "customer": "Meera Joshi",
    "phone": "+91 99445 56677",
    "itemCount": 5,
    "totalAmount": 8195,
    "paymentMethod": "Card",
    "status": "Completed",
    "items": [
      {
        "product": "Essential Fleece Hoodie",
        "sku": "HD-BLK-M",
        "qty": 3,
        "price": 1799,
        "discount": 0,
        "amount": 5397
      },
      {
        "product": "Regular Fit Chino Trousers",
        "sku": "TRS-BEI-M",
        "qty": 2,
        "price": 1399,
        "discount": 0,
        "amount": 2798
      }
    ]
  },
  {
    "id": "BILL-2026-1034",
    "date": "Oct 5, 05:45 PM",
    "customer": "Suresh Kumar",
    "phone": "+91 98556 67788",
    "itemCount": 7,
    "totalAmount": 8793,
    "paymentMethod": "UPI",
    "status": "Completed",
    "items": [
      {
        "product": "Slim Fit Denim Jeans",
        "sku": "JNS-BLK-M",
        "qty": 3,
        "price": 1999,
        "discount": 0,
        "amount": 5997
      },
      {
        "product": "Premium Cotton T-Shirt",
        "sku": "TSH-WHT-S",
        "qty": 4,
        "price": 699,
        "discount": 0,
        "amount": 2796
      }
    ]
  },
  {
    "id": "BILL-2026-1033",
    "date": "Oct 5, 04:20 PM",
    "customer": "Pooja Sharma",
    "phone": "+91 97667 78899",
    "itemCount": 4,
    "totalAmount": 5996,
    "paymentMethod": "Cash",
    "status": "Completed",
    "items": [
      {
        "product": "Classic Oxford Shirt",
        "sku": "OXF-BLK-M",
        "qty": 4,
        "price": 1499,
        "discount": 0,
        "amount": 5996
      }
    ]
  },
  {
    "id": "BILL-2026-1032",
    "date": "Oct 5, 02:00 PM",
    "customer": "Arjun Nair",
    "phone": "+91 98778 89900",
    "itemCount": 4,
    "totalAmount": 5596,
    "paymentMethod": "UPI",
    "status": "Completed",
    "items": [
      {
        "product": "Regular Fit Chino Trousers",
        "sku": "TRS-NAV-S",
        "qty": 4,
        "price": 1399,
        "discount": 0,
        "amount": 5596
      }
    ]
  },
  {
    "id": "BILL-2026-1031",
    "date": "Oct 5, 11:30 AM",
    "customer": "Neha Kapoor",
    "phone": "+91 99889 90011",
    "itemCount": 5,
    "totalAmount": 5695,
    "paymentMethod": "Card",
    "status": "Completed",
    "items": [
      {
        "product": "Essential Fleece Hoodie",
        "sku": "HD-OLV-L",
        "qty": 2,
        "price": 1799,
        "discount": 0,
        "amount": 3598
      },
      {
        "product": "Premium Cotton T-Shirt",
        "sku": "TSH-BLK-L",
        "qty": 3,
        "price": 699,
        "discount": 0,
        "amount": 2097
      }
    ]
  },
  {
    "id": "BILL-2026-1030",
    "date": "Oct 4, 08:10 PM",
    "customer": "Amit Verma",
    "phone": "+91 98123 45678",
    "itemCount": 4,
    "totalAmount": 7996,
    "paymentMethod": "UPI",
    "status": "Completed",
    "items": [
      {
        "product": "Slim Fit Denim Jeans",
        "sku": "JNS-NAV-L",
        "qty": 4,
        "price": 1999,
        "discount": 0,
        "amount": 7996
      }
    ]
  },
  {
    "id": "BILL-2026-1029",
    "date": "Oct 4, 06:40 PM",
    "customer": "Kavita Reddy",
    "phone": "+91 97654 32109",
    "itemCount": 5,
    "totalAmount": 7295,
    "paymentMethod": "Card",
    "status": "Completed",
    "items": [
      {
        "product": "Classic Oxford Shirt",
        "sku": "OXF-WHT-L",
        "qty": 3,
        "price": 1499,
        "discount": 0,
        "amount": 4497
      },
      {
        "product": "Regular Fit Chino Trousers",
        "sku": "TRS-BEI-L",
        "qty": 2,
        "price": 1399,
        "discount": 0,
        "amount": 2798
      }
    ]
  },
  {
    "id": "BILL-2026-1028",
    "date": "Oct 4, 05:00 PM",
    "customer": "Rohan Gupta",
    "phone": "+91 99887 76655",
    "itemCount": 7,
    "totalAmount": 4893,
    "paymentMethod": "UPI",
    "status": "Completed",
    "items": [
      {
        "product": "Premium Cotton T-Shirt",
        "sku": "TSH-WHT-M",
        "qty": 7,
        "price": 699,
        "discount": 0,
        "amount": 4893
      }
    ]
  },
  {
    "id": "BILL-2026-1027",
    "date": "Oct 4, 03:15 PM",
    "customer": "Sneha Patel",
    "phone": "+91 98765 11223",
    "itemCount": 5,
    "totalAmount": 9395,
    "paymentMethod": "Cash",
    "status": "Completed",
    "items": [
      {
        "product": "Essential Fleece Hoodie",
        "sku": "HD-BLK-M",
        "qty": 3,
        "price": 1799,
        "discount": 0,
        "amount": 5397
      },
      {
        "product": "Slim Fit Denim Jeans",
        "sku": "JNS-NAV-M",
        "qty": 2,
        "price": 1999,
        "discount": 0,
        "amount": 3998
      }
    ]
  },
  {
    "id": "BILL-2026-1026",
    "date": "Oct 4, 01:00 PM",
    "customer": "Vikram Malhotra",
    "phone": "+91 98234 56789",
    "itemCount": 3,
    "totalAmount": 4497,
    "paymentMethod": "UPI",
    "status": "Completed",
    "items": [
      {
        "product": "Classic Oxford Shirt",
        "sku": "OXF-BLK-S",
        "qty": 3,
        "price": 1499,
        "discount": 0,
        "amount": 4497
      }
    ]
  },
  {
    "id": "BILL-2026-1025",
    "date": "Oct 4, 10:45 AM",
    "customer": "Ananya Deshmukh",
    "phone": "+91 97112 23344",
    "itemCount": 3,
    "totalAmount": 4197,
    "paymentMethod": "Card",
    "status": "Completed",
    "items": [
      {
        "product": "Regular Fit Chino Trousers",
        "sku": "TRS-BEI-M",
        "qty": 3,
        "price": 1399,
        "discount": 0,
        "amount": 4197
      }
    ]
  },
  {
    "id": "BILL-2026-1024",
    "date": "Oct 3, 08:00 PM",
    "customer": "Rajesh Iyer",
    "phone": "+91 98334 45566",
    "itemCount": 6,
    "totalAmount": 9994,
    "paymentMethod": "UPI",
    "status": "Completed",
    "items": [
      {
        "product": "Classic Oxford Shirt",
        "sku": "OXF-WHT-M",
        "qty": 4,
        "price": 1499,
        "discount": 0,
        "amount": 5996
      },
      {
        "product": "Slim Fit Denim Jeans",
        "sku": "JNS-NAV-M",
        "qty": 2,
        "price": 1999,
        "discount": 0,
        "amount": 3998
      }
    ]
  },
  {
    "id": "BILL-2026-1023",
    "date": "Oct 3, 06:20 PM",
    "customer": "Meera Joshi",
    "phone": "+91 99445 56677",
    "itemCount": 3,
    "totalAmount": 5397,
    "paymentMethod": "Card",
    "status": "Completed",
    "items": [
      {
        "product": "Essential Fleece Hoodie",
        "sku": "HD-OLV-L",
        "qty": 3,
        "price": 1799,
        "discount": 0,
        "amount": 5397
      }
    ]
  },
  {
    "id": "BILL-2026-1022",
    "date": "Oct 3, 04:30 PM",
    "customer": "Suresh Kumar",
    "phone": "+91 98556 67788",
    "itemCount": 6,
    "totalAmount": 4194,
    "paymentMethod": "UPI",
    "status": "Completed",
    "items": [
      {
        "product": "Premium Cotton T-Shirt",
        "sku": "TSH-WHT-S",
        "qty": 6,
        "price": 699,
        "discount": 0,
        "amount": 4194
      }
    ]
  },
  {
    "id": "BILL-2026-1021",
    "date": "Oct 3, 02:15 PM",
    "customer": "Pooja Sharma",
    "phone": "+91 97667 78899",
    "itemCount": 3,
    "totalAmount": 4197,
    "paymentMethod": "Cash",
    "status": "Completed",
    "items": [
      {
        "product": "Regular Fit Chino Trousers",
        "sku": "TRS-BEI-L",
        "qty": 3,
        "price": 1399,
        "discount": 0,
        "amount": 4197
      }
    ]
  },
  {
    "id": "BILL-2026-1020",
    "date": "Oct 3, 11:30 AM",
    "customer": "Arjun Nair",
    "phone": "+91 98778 89900",
    "itemCount": 3,
    "totalAmount": 4497,
    "paymentMethod": "UPI",
    "status": "Completed",
    "items": [
      {
        "product": "Classic Oxford Shirt",
        "sku": "OXF-BLK-M",
        "qty": 3,
        "price": 1499,
        "discount": 0,
        "amount": 4497
      }
    ]
  },
  {
    "id": "BILL-2026-1019",
    "date": "Oct 2, 07:45 PM",
    "customer": "Neha Kapoor",
    "phone": "+91 99889 90011",
    "itemCount": 5,
    "totalAmount": 9595,
    "paymentMethod": "Card",
    "status": "Completed",
    "items": [
      {
        "product": "Slim Fit Denim Jeans",
        "sku": "JNS-NAV-L",
        "qty": 3,
        "price": 1999,
        "discount": 0,
        "amount": 5997
      },
      {
        "product": "Essential Fleece Hoodie",
        "sku": "HD-BLK-M",
        "qty": 2,
        "price": 1799,
        "discount": 0,
        "amount": 3598
      }
    ]
  },
  {
    "id": "BILL-2026-1018",
    "date": "Oct 2, 05:50 PM",
    "customer": "Amit Verma",
    "phone": "+91 98123 45678",
    "itemCount": 3,
    "totalAmount": 4497,
    "paymentMethod": "UPI",
    "status": "Completed",
    "items": [
      {
        "product": "Classic Oxford Shirt",
        "sku": "OXF-WHT-L",
        "qty": 3,
        "price": 1499,
        "discount": 0,
        "amount": 4497
      }
    ]
  },
  {
    "id": "BILL-2026-1017",
    "date": "Oct 2, 04:10 PM",
    "customer": "Kavita Reddy",
    "phone": "+91 97654 32109",
    "itemCount": 3,
    "totalAmount": 4197,
    "paymentMethod": "UPI",
    "status": "Completed",
    "items": [
      {
        "product": "Regular Fit Chino Trousers",
        "sku": "TRS-BEI-M",
        "qty": 3,
        "price": 1399,
        "discount": 0,
        "amount": 4197
      }
    ]
  },
  {
    "id": "BILL-2026-1016",
    "date": "Oct 2, 02:00 PM",
    "customer": "Rohan Gupta",
    "phone": "+91 99887 76655",
    "itemCount": 5,
    "totalAmount": 3495,
    "paymentMethod": "Cash",
    "status": "Completed",
    "items": [
      {
        "product": "Premium Cotton T-Shirt",
        "sku": "TSH-WHT-M",
        "qty": 5,
        "price": 699,
        "discount": 0,
        "amount": 3495
      }
    ]
  },
  {
    "id": "BILL-2026-1015",
    "date": "Oct 2, 11:00 AM",
    "customer": "Sneha Patel",
    "phone": "+91 98765 11223",
    "itemCount": 2,
    "totalAmount": 3598,
    "paymentMethod": "UPI",
    "status": "Completed",
    "items": [
      {
        "product": "Essential Fleece Hoodie",
        "sku": "HD-OLV-L",
        "qty": 2,
        "price": 1799,
        "discount": 0,
        "amount": 3598
      }
    ]
  },
  {
    "id": "BILL-2026-1014",
    "date": "Oct 1, 08:20 PM",
    "customer": "Vikram Malhotra",
    "phone": "+91 98234 56789",
    "itemCount": 3,
    "totalAmount": 5997,
    "paymentMethod": "Card",
    "status": "Completed",
    "items": [
      {
        "product": "Slim Fit Denim Jeans",
        "sku": "JNS-NAV-M",
        "qty": 3,
        "price": 1999,
        "discount": 0,
        "amount": 5997
      }
    ]
  },
  {
    "id": "BILL-2026-1013",
    "date": "Oct 1, 06:30 PM",
    "customer": "Ananya Deshmukh",
    "phone": "+91 97112 23344",
    "itemCount": 3,
    "totalAmount": 4497,
    "paymentMethod": "UPI",
    "status": "Completed",
    "items": [
      {
        "product": "Classic Oxford Shirt",
        "sku": "OXF-WHT-M",
        "qty": 3,
        "price": 1499,
        "discount": 0,
        "amount": 4497
      }
    ]
  },
  {
    "id": "BILL-2026-1012",
    "date": "Oct 1, 04:45 PM",
    "customer": "Rajesh Iyer",
    "phone": "+91 98334 45566",
    "itemCount": 6,
    "totalAmount": 4194,
    "paymentMethod": "UPI",
    "status": "Completed",
    "items": [
      {
        "product": "Premium Cotton T-Shirt",
        "sku": "TSH-WHT-S",
        "qty": 6,
        "price": 699,
        "discount": 0,
        "amount": 4194
      }
    ]
  },
  {
    "id": "BILL-2026-1011",
    "date": "Oct 1, 02:30 PM",
    "customer": "Meera Joshi",
    "phone": "+91 99445 56677",
    "itemCount": 3,
    "totalAmount": 4197,
    "paymentMethod": "Cash",
    "status": "Completed",
    "items": [
      {
        "product": "Regular Fit Chino Trousers",
        "sku": "TRS-BEI-L",
        "qty": 3,
        "price": 1399,
        "discount": 0,
        "amount": 4197
      }
    ]
  },
  {
    "id": "BILL-2026-1010",
    "date": "Oct 1, 11:15 AM",
    "customer": "Suresh Kumar",
    "phone": "+91 98556 67788",
    "itemCount": 2,
    "totalAmount": 3598,
    "paymentMethod": "UPI",
    "status": "Completed",
    "items": [
      {
        "product": "Essential Fleece Hoodie",
        "sku": "HD-BLK-M",
        "qty": 2,
        "price": 1799,
        "discount": 0,
        "amount": 3598
      }
    ]
  },
  {
    "id": "BILL-2026-1009",
    "date": "Sep 30, 07:30 PM",
    "customer": "Pooja Sharma",
    "phone": "+91 97667 78899",
    "itemCount": 6,
    "totalAmount": 9994,
    "paymentMethod": "Card",
    "status": "Completed",
    "items": [
      {
        "product": "Classic Oxford Shirt",
        "sku": "OXF-BLK-S",
        "qty": 4,
        "price": 1499,
        "discount": 0,
        "amount": 5996
      },
      {
        "product": "Slim Fit Denim Jeans",
        "sku": "JNS-BLK-M",
        "qty": 2,
        "price": 1999,
        "discount": 0,
        "amount": 3998
      }
    ]
  },
  {
    "id": "BILL-2026-1008",
    "date": "Sep 30, 05:00 PM",
    "customer": "Arjun Nair",
    "phone": "+91 98778 89900",
    "itemCount": 3,
    "totalAmount": 5397,
    "paymentMethod": "UPI",
    "status": "Completed",
    "items": [
      {
        "product": "Essential Fleece Hoodie",
        "sku": "HD-OLV-L",
        "qty": 3,
        "price": 1799,
        "discount": 0,
        "amount": 5397
      }
    ]
  },
  {
    "id": "BILL-2026-1007",
    "date": "Sep 29, 06:15 PM",
    "customer": "Neha Kapoor",
    "phone": "+91 99889 90011",
    "itemCount": 4,
    "totalAmount": 5596,
    "paymentMethod": "UPI",
    "status": "Completed",
    "items": [
      {
        "product": "Regular Fit Chino Trousers",
        "sku": "TRS-BEI-M",
        "qty": 4,
        "price": 1399,
        "discount": 0,
        "amount": 5596
      }
    ]
  },
  {
    "id": "BILL-2026-1006",
    "date": "Sep 29, 03:40 PM",
    "customer": "Amit Verma",
    "phone": "+91 98123 45678",
    "itemCount": 7,
    "totalAmount": 4893,
    "paymentMethod": "Card",
    "status": "Completed",
    "items": [
      {
        "product": "Premium Cotton T-Shirt",
        "sku": "TSH-WHT-M",
        "qty": 7,
        "price": 699,
        "discount": 0,
        "amount": 4893
      }
    ]
  },
  {
    "id": "BILL-2026-1005",
    "date": "Sep 28, 07:00 PM",
    "customer": "Kavita Reddy",
    "phone": "+91 97654 32109",
    "itemCount": 3,
    "totalAmount": 5997,
    "paymentMethod": "UPI",
    "status": "Completed",
    "items": [
      {
        "product": "Slim Fit Denim Jeans",
        "sku": "JNS-NAV-M",
        "qty": 3,
        "price": 1999,
        "discount": 0,
        "amount": 5997
      }
    ]
  },
  {
    "id": "BILL-2026-1004",
    "date": "Sep 28, 04:20 PM",
    "customer": "Rohan Gupta",
    "phone": "+91 99887 76655",
    "itemCount": 3,
    "totalAmount": 4497,
    "paymentMethod": "Cash",
    "status": "Completed",
    "items": [
      {
        "product": "Classic Oxford Shirt",
        "sku": "OXF-WHT-M",
        "qty": 3,
        "price": 1499,
        "discount": 0,
        "amount": 4497
      }
    ]
  },
  {
    "id": "BILL-2026-1003",
    "date": "Sep 27, 06:00 PM",
    "customer": "Sneha Patel",
    "phone": "+91 98765 11223",
    "itemCount": 3,
    "totalAmount": 5397,
    "paymentMethod": "UPI",
    "status": "Completed",
    "items": [
      {
        "product": "Essential Fleece Hoodie",
        "sku": "HD-BLK-M",
        "qty": 3,
        "price": 1799,
        "discount": 0,
        "amount": 5397
      }
    ]
  },
  {
    "id": "BILL-2026-1002",
    "date": "Sep 27, 02:15 PM",
    "customer": "Vikram Malhotra",
    "phone": "+91 98234 56789",
    "itemCount": 3,
    "totalAmount": 4197,
    "paymentMethod": "Card",
    "status": "Completed",
    "items": [
      {
        "product": "Regular Fit Chino Trousers",
        "sku": "TRS-BEI-L",
        "qty": 3,
        "price": 1399,
        "discount": 0,
        "amount": 4197
      }
    ]
  },
  {
    "id": "BILL-2026-1001",
    "date": "Sep 26, 05:30 PM",
    "customer": "Ananya Deshmukh",
    "phone": "+91 97112 23344",
    "itemCount": 6,
    "totalAmount": 35479,
    "paymentMethod": "UPI",
    "status": "Completed",
    "items": [
      {
        "product": "Premium Cotton T-Shirt",
        "sku": "TSH-WHT-S",
        "qty": 6,
        "price": 699,
        "discount": 0,
        "amount": 35479
      }
    ]
  }
],

  customers: [
  {
    "id": "CUST-01",
    "name": "Amit Verma",
    "phone": "+91 98123 45678",
    "ordersCount": 4,
    "lastPurchase": "2026-10-06",
    "totalSpend": 25881
  },
  {
    "id": "CUST-02",
    "name": "Kavita Reddy",
    "phone": "+91 97654 32109",
    "ordersCount": 4,
    "lastPurchase": "2026-10-06",
    "totalSpend": 25684
  },
  {
    "id": "CUST-03",
    "name": "Rohan Gupta",
    "phone": "+91 99887 76655",
    "ordersCount": 4,
    "lastPurchase": "2026-10-06",
    "totalSpend": 20378
  },
  {
    "id": "CUST-04",
    "name": "Sneha Patel",
    "phone": "+91 98765 11223",
    "ordersCount": 4,
    "lastPurchase": "2026-10-06",
    "totalSpend": 26485
  },
  {
    "id": "CUST-05",
    "name": "Vikram Malhotra",
    "phone": "+91 98234 56789",
    "ordersCount": 4,
    "lastPurchase": "2026-10-06",
    "totalSpend": 20287
  },
  {
    "id": "CUST-06",
    "name": "Ananya Deshmukh",
    "phone": "+91 97112 23344",
    "ordersCount": 4,
    "lastPurchase": "2026-10-06",
    "totalSpend": 50666
  },
  {
    "id": "CUST-07",
    "name": "Rajesh Iyer",
    "phone": "+91 98334 45566",
    "ordersCount": 3,
    "lastPurchase": "2026-10-05",
    "totalSpend": 24182
  },
  {
    "id": "CUST-08",
    "name": "Meera Joshi",
    "phone": "+91 99445 56677",
    "ordersCount": 3,
    "lastPurchase": "2026-10-05",
    "totalSpend": 17789
  },
  {
    "id": "CUST-09",
    "name": "Suresh Kumar",
    "phone": "+91 98556 67788",
    "ordersCount": 3,
    "lastPurchase": "2026-10-05",
    "totalSpend": 16585
  },
  {
    "id": "CUST-10",
    "name": "Pooja Sharma",
    "phone": "+91 97667 78899",
    "ordersCount": 3,
    "lastPurchase": "2026-10-05",
    "totalSpend": 20187
  },
  {
    "id": "CUST-11",
    "name": "Arjun Nair",
    "phone": "+91 98778 89900",
    "ordersCount": 3,
    "lastPurchase": "2026-10-05",
    "totalSpend": 15490
  },
  {
    "id": "CUST-12",
    "name": "Neha Kapoor",
    "phone": "+91 99889 90011",
    "ordersCount": 3,
    "lastPurchase": "2026-10-05",
    "totalSpend": 20886
  }
],

  users: [
    { id: "USR-01", name: "Suresh Menon", role: "Store Owner / Admin", email: "suresh@apexfashion.com", status: "Active" },
    { id: "USR-02", name: "Priya Nair", role: "Billing Staff", email: "priya@apexfashion.com", status: "Active" }
  ]
};

class StoreManager {
  constructor() {
    this.data = JSON.parse(localStorage.getItem('master_web_admin_data_v2')) || initialData;
    this.listeners = [];
  }

  save() {
    try {
      localStorage.setItem('master_web_admin_data_v2', JSON.stringify(this.data));
    } catch (e) {
      console.warn('LocalStorage save error:', e);
    }
    this.notify();
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notify() {
    this.listeners.forEach(fn => fn(this.data));
  }

  getMetrics() {
    let totalProducts = this.data.products.length;
    let totalStock = 0;
    let damagedStockCount = 0;
    let stockValue = 0;
    let lowStockCount = 0;
    let outOfStockCount = 0;

    this.data.products.forEach(p => {
      p.variants.forEach(v => {
        totalStock += (v.stock || 0);
        damagedStockCount += (v.damaged || 0);
        stockValue += ((v.stock || 0) * (p.purchasePrice || 0));

        if (v.stock === 0) {
          outOfStockCount++;
        } else if (v.stock <= p.minStock) {
          lowStockCount++;
        }
      });
    });

    const todaySales = this.data.sales.reduce((sum, s) => sum + s.totalAmount, 0);

    return {
      todaySales,
      totalProducts,
      totalStock,
      lowStockCount,
      outOfStockCount,
      damagedStockCount,
      stockValue
    };
  }

  addStockIn(purchasePayload) {
    let totalQty = 0;
    let totalAmount = 0;

    purchasePayload.items.forEach(item => {
      totalQty += item.received;
      totalAmount += (item.good * item.price);

      const product = this.data.products.find(p => p.name === item.product || p.id === item.productId);
      if (product) {
        const variant = product.variants.find(v => v.sku === item.sku);
        if (variant) {
          variant.stock += item.good;
          variant.damaged += item.damaged;

          this.data.stockMovements.unshift({
            id: `MOV-${Date.now()}-${Math.floor(Math.random()*1000)}`,
            date: new Date().toLocaleString(),
            product: product.name,
            sku: item.sku,
            type: 'Stock In',
            quantity: item.good,
            reference: purchasePayload.invoiceNumber,
            user: 'Manager'
          });

          if (item.damaged > 0) {
            this.data.stockMovements.unshift({
              id: `MOV-DMG-${Date.now()}`,
              date: new Date().toLocaleString(),
              product: product.name,
              sku: item.sku,
              type: 'Damage',
              quantity: item.damaged,
              reference: purchasePayload.invoiceNumber,
              user: 'Manager'
            });

            this.data.damagedStockRegister.unshift({
              id: `DMG-${Date.now()}`,
              product: product.name,
              sku: item.sku,
              quantity: item.damaged,
              supplier: purchasePayload.supplier,
              purchaseId: purchasePayload.invoiceNumber,
              date: purchasePayload.date,
              reason: item.damageReason || "Damaged during shipment quality check",
              notes: item.damageNotes || "Isolated from available sellable stock."
            });
          }
        }
      }
    });

    this.data.purchases.unshift({
      id: `PUR-${Date.now().toString().slice(-4)}`,
      supplier: purchasePayload.supplier,
      invoiceNumber: purchasePayload.invoiceNumber,
      date: purchasePayload.date,
      productCount: purchasePayload.items.length,
      totalQuantity: totalQty,
      totalAmount: totalAmount,
      status: 'Completed',
      items: purchasePayload.items
    });
    this.save();
  }

  addSale(salePayload) {
    let totalAmt = 0;
    const saleItems = [];

    salePayload.items.forEach(item => {
      let finalAmt = (item.price * item.qty) - (item.discount || 0);
      totalAmt += finalAmt;

      let foundProd = null;
      let foundVariant = null;

      for (let p of this.data.products) {
        let v = p.variants.find(v => v.sku === item.sku);
        if (v) {
          foundProd = p;
          foundVariant = v;
          break;
        }
      }

      if (foundVariant) {
        foundVariant.stock = Math.max(0, foundVariant.stock - item.qty);

        this.data.stockMovements.unshift({
          id: `MOV-SALE-${Date.now()}`,
          date: new Date().toLocaleString(),
          product: foundProd.name,
          sku: item.sku,
          type: 'Sale',
          quantity: -item.qty,
          reference: salePayload.billNumber || `BILL-${Date.now().toString().slice(-4)}`,
          user: 'Staff'
        });
      }

      saleItems.push({
        product: foundProd ? foundProd.name : item.sku,
        sku: item.sku,
        qty: item.qty,
        price: item.price,
        discount: item.discount || 0,
        amount: finalAmt
      });
    });

    const billNo = salePayload.billNumber || `BILL-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    this.data.sales.unshift({
      id: billNo,
      date: new Date().toLocaleString('en-US', { dateStyle: 'short', timeStyle: 'short' }),
      customer: salePayload.customerName || "Walk-in Customer",
      phone: salePayload.phone || "-",
      itemCount: salePayload.items.length,
      totalAmount: totalAmt,
      paymentMethod: salePayload.paymentMethod || 'UPI',
      status: 'Completed',
      items: saleItems
    });

    this.save();
  }

  addProduct(prod) {
    this.data.products.unshift(prod);
    this.save();
  }

  adjustStock(sku, newStock, reason) {
    for (let p of this.data.products) {
      let v = p.variants.find(v => v.sku === sku);
      if (v) {
        let diff = newStock - v.stock;
        v.stock = newStock;

        this.data.stockMovements.unshift({
          id: `MOV-ADJ-${Date.now()}`,
          date: new Date().toLocaleString(),
          product: p.name,
          sku: sku,
          type: 'Adjustment',
          quantity: diff,
          reference: reason || 'Manual Audit',
          user: 'Admin'
        });
        break;
      }
    }
    this.save();
  }
}

const store = new StoreManager();

// ==========================================
// 2. UI HELPER COMPONENTS
// ==========================================
function createButton({ text, icon = null, variant = 'primary', size = 'md', onClick = null, type = 'button', extraClass = '' }) {
  const btn = document.createElement('button');
  btn.type = type;
  btn.className = `btn btn-${variant} ${size === 'sm' ? 'btn-sm' : ''} ${extraClass}`.trim();
  
  let content = '';
  if (icon) content += `<i data-lucide="${icon}" style="width: 16px; height: 16px;"></i>`;
  if (text) content += `<span>${text}</span>`;
  btn.innerHTML = content;
  
  if (onClick) btn.addEventListener('click', onClick);
  return btn;
}

function createBadge({ label, variant = 'secondary', icon = null }) {
  const badge = document.createElement('span');
  badge.className = `badge badge-${variant}`;
  let html = '';
  if (icon) html += `<i data-lucide="${icon}" style="width: 12px; height: 12px;"></i>`;
  html += `<span>${label}</span>`;
  badge.innerHTML = html;
  return badge;
}

function createMetricCard({ label, value, subtext = null, icon = null, variant = 'default', onClick = null }) {
  const card = document.createElement('div');
  card.className = `metric-card ${onClick ? 'metric-card-clickable' : ''}`;
  
  let borderColor = 'var(--border-color)';
  if (variant === 'danger') borderColor = 'var(--status-danger-border)';
  if (variant === 'warning') borderColor = 'var(--status-warning-border)';
  if (variant === 'success') borderColor = 'var(--status-success-border)';
  card.style.borderColor = borderColor;

  let iconHtml = icon ? `
    <div style="width: 32px; height: 32px; border-radius: var(--radius-sm); background: var(--bg-secondary); display: flex; align-items: center; justify-content: center; border: 1px solid var(--border-color);">
      <i data-lucide="${icon}" style="width: 16px; height: 16px; color: var(--text-secondary);"></i>
    </div>
  ` : '';

  card.innerHTML = `
    <div class="metric-header" style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
      <span style="font-size: 0.725rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; color: var(--text-secondary);">${label}</span>
      ${iconHtml}
    </div>
    <div class="metric-value" style="font-size: 1.55rem; font-weight: 700; color: var(--text-primary); letter-spacing: -0.02em; line-height: 1.2;">${value}</div>
    ${subtext ? `<div class="metric-footer" style="font-size: 0.775rem; margin-top: 0.35rem; display: flex; align-items: center; gap: 0.35rem;">${subtext}</div>` : ''}
  `;

  if (onClick) {
    card.addEventListener('click', onClick);
  }

  return card;
}

function createModal({ title, bodyElement, footerButtons = [], onClose = null }) {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  
  const modal = document.createElement('div');
  modal.className = 'modal-content';
  
  const header = document.createElement('div');
  header.className = 'modal-header';
  header.innerHTML = `
    <h3 class="card-title" style="font-weight: 600; font-size: 1.1rem; color: var(--text-primary);">${title}</h3>
    <button class="btn btn-ghost btn-sm close-modal-btn" style="padding: 0.25rem;">
      <i data-lucide="x" style="width: 18px; height: 18px;"></i>
    </button>
  `;
  
  const body = document.createElement('div');
  body.className = 'modal-body';
  if (typeof bodyElement === 'string') body.innerHTML = bodyElement;
  else if (bodyElement instanceof HTMLElement) body.appendChild(bodyElement);
  
  const footer = document.createElement('div');
  footer.className = 'modal-footer';
  footerButtons.forEach(btn => footer.appendChild(btn));
  
  modal.appendChild(header);
  modal.appendChild(body);
  modal.appendChild(footer);
  overlay.appendChild(modal);
  
  const closeModal = () => {
    overlay.remove();
    if (onClose) onClose();
  };
  
  header.querySelector('.close-modal-btn').addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });
  
  document.body.appendChild(overlay);
  if (window.lucide) window.lucide.createIcons();

  return { overlay, closeModal };
}

const toast = {
  show({ message, type = 'success', duration = 3000 }) {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const t = document.createElement('div');
    t.className = 'toast';
    let icon = type === 'danger' ? 'alert-circle' : (type === 'warning' ? 'alert-triangle' : 'check-circle-2');
    let color = type === 'danger' ? 'var(--status-danger)' : (type === 'warning' ? 'var(--status-warning)' : 'var(--status-success)');

    t.innerHTML = `
      <i data-lucide="${icon}" style="width: 18px; height: 18px; color: ${color}; flex-shrink: 0;"></i>
      <span style="font-size: 0.875rem; font-weight: 500; color: var(--text-primary);">${message}</span>
    `;

    container.appendChild(t);
    if (window.lucide) window.lucide.createIcons();

    setTimeout(() => {
      t.style.opacity = '0';
      t.style.transform = 'translateY(10px)';
      t.style.transition = 'all 0.2s ease';
      setTimeout(() => t.remove(), 200);
    }, duration);
  }
};

function openProductDetailsModal(productInput) {
  let product = productInput;
  if (typeof productInput === 'string') {
    product = store.data.products.find(p => p.name.toLowerCase() === productInput.toLowerCase() || p.id.toLowerCase() === productInput.toLowerCase());
    if (!product) product = store.data.products[0];
  }
  if (!product) return;

  const unitsSold = store.data.sales.reduce((sum, s) => {
    return sum + s.items.filter(i => i.product === product.name).reduce((iSum, i) => iSum + i.qty, 0);
  }, 0);

  const salesRevenue = store.data.sales.reduce((sum, s) => {
    return sum + s.items.filter(i => i.product === product.name).reduce((iSum, i) => iSum + i.amount, 0);
  }, 0);

  const totalStock = product.variants.reduce((sum, v) => sum + v.stock, 0);
  const margin = Math.round(((product.sellingPrice - product.purchasePrice) / product.sellingPrice) * 100);

  const productSales = store.data.sales.filter(s => s.items.some(i => i.product === product.name));

  const modalEl = document.createElement('div');
  modalEl.style.cssText = 'display: flex; flex-direction: column; gap: 1.25rem; width: 100%;';

  modalEl.innerHTML = `
    <!-- Top Metadata Header -->
    <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; padding-bottom: 0.75rem; border-bottom: 1px solid var(--border-color);">
      <div>
        <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.25rem;">
          <h3 style="font-size: 1.2rem; font-weight: 700; color: var(--text-primary);">${product.name}</h3>
          ${createBadge({ label: product.status, variant: 'success' }).outerHTML}
        </div>
        <div style="font-size: 0.8rem; color: var(--text-secondary); display: flex; gap: 0.75rem; align-items: center; flex-wrap: wrap;">
          <span>Category: <strong>${product.category}</strong></span>
          <span>Brand: <strong>${product.brand}</strong></span>
        </div>
      </div>
    </div>

    <!-- Metric Summary Grid -->
    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.75rem;">
      <div style="background: var(--bg-secondary); padding: 0.65rem 0.85rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
        <div style="font-size: 0.7rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase;">Selling Price</div>
        <div style="font-size: 1.15rem; font-weight: 700; color: var(--text-primary);">₹${product.sellingPrice.toLocaleString()}</div>
        <div style="font-size: 0.7rem; color: var(--text-secondary);">Cost: ₹${product.purchasePrice.toLocaleString()} (${margin}% margin)</div>
      </div>
      <div style="background: var(--bg-secondary); padding: 0.65rem 0.85rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
        <div style="font-size: 0.7rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase;">Current Stock</div>
        <div style="font-size: 1.15rem; font-weight: 700; color: ${totalStock === 0 ? 'var(--status-danger)' : 'var(--text-primary)'};">${totalStock} units</div>
        <div style="font-size: 0.7rem; color: var(--text-secondary);">Min stock level: ${product.minStock}</div>
      </div>
      <div style="background: var(--bg-secondary); padding: 0.65rem 0.85rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
        <div style="font-size: 0.7rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase;">Total Units Sold</div>
        <div style="font-size: 1.15rem; font-weight: 700; color: var(--brand-primary);">${unitsSold} units</div>
        <div style="font-size: 0.7rem; color: var(--text-secondary);">Across ${productSales.length} bills</div>
      </div>
      <div style="background: var(--bg-secondary); padding: 0.65rem 0.85rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
        <div style="font-size: 0.7rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase;">Sales Revenue</div>
        <div style="font-size: 1.15rem; font-weight: 700; color: var(--status-success);">₹${salesRevenue.toLocaleString('en-IN')}</div>
        <div style="font-size: 0.7rem; color: var(--text-secondary);">Total revenue</div>
      </div>
    </div>

    <!-- Product Description -->
    <div style="font-size: 0.825rem; color: var(--text-secondary); background: var(--bg-surface); padding: 0.65rem 0.85rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
      <strong style="color: var(--text-primary);">Description:</strong> ${product.description || 'No description provided.'}
    </div>

    <!-- Product Variants Table -->
    <div>
      <h4 style="font-size: 0.875rem; font-weight: 600; margin-bottom: 0.5rem; color: var(--text-primary);">Variant Inventory Stock</h4>
      <div class="table-responsive">
        <table class="admin-table" style="font-size: 0.825rem;">
          <thead>
            <tr>
              <th>Color</th>
              <th>Size</th>
              <th>Available Stock</th>
              <th>Damaged</th>
              <th>Days in Stock</th>
            </tr>
          </thead>
          <tbody>
            ${product.variants.map(v => `
              <tr>
                <td>${v.color}</td>
                <td>${v.size}</td>
                <td style="font-weight: 600; color: ${v.stock === 0 ? 'var(--status-danger)' : (v.stock <= product.minStock ? 'var(--status-warning)' : 'var(--text-primary)')};">${v.stock} units</td>
                <td>${v.damaged > 0 ? `<span class="badge badge-danger">${v.damaged}</span>` : '0'}</td>
                <td style="color: var(--text-secondary);">${v.daysInStock || 0} days</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;

  const closeBtn = createButton({ text: 'Close', variant: 'secondary', onClick: () => modal.closeModal() });
  const modal = createModal({ title: `Product Details — ${product.name}`, bodyElement: modalEl, footerButtons: [closeBtn] });
}

function openSaleDetailsModal(sale) {
  const modalEl = document.createElement('div');
  modalEl.style.cssText = 'display: flex; flex-direction: column; gap: 1rem; width: 100%;';

  const subtotal = sale.items.reduce((sum, i) => sum + (i.price * i.qty), 0);
  const totalDiscount = sale.items.reduce((sum, i) => sum + (i.discount || 0), 0);

  modalEl.innerHTML = `
    <div style="background: var(--bg-secondary); padding: 0.85rem 1rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color); display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.75rem; font-size: 0.85rem;">
      <div>
        <div style="font-size: 0.725rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase;">Customer</div>
        <div style="font-weight: 600; color: var(--text-primary); margin-top: 0.15rem;">${sale.customer}</div>
        <div style="font-size: 0.75rem; color: var(--text-secondary);">${sale.phone || ''}</div>
      </div>
      <div>
        <div style="font-size: 0.725rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase;">Date & Time</div>
        <div style="font-weight: 600; color: var(--text-primary); margin-top: 0.15rem;">${sale.date}</div>
      </div>
      <div>
        <div style="font-size: 0.725rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase;">Payment Method</div>
        <div style="margin-top: 0.15rem;">${createBadge({ label: sale.paymentMethod, variant: 'secondary' }).outerHTML}</div>
      </div>
      <div>
        <div style="font-size: 0.725rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase;">Status</div>
        <div style="margin-top: 0.15rem;">${createBadge({ label: sale.status, variant: 'success' }).outerHTML}</div>
      </div>
    </div>

    <div>
      <h4 style="font-size: 0.875rem; font-weight: 600; margin-bottom: 0.5rem; color: var(--text-primary);">Itemized Bill Details</h4>
      <div class="table-responsive">
        <table class="admin-table" style="font-size: 0.825rem;">
          <thead>
            <tr>
              <th>Product</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Discount</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            ${sale.items.map(i => `
              <tr>
                <td style="font-weight: 600;">${i.product}</td>
                <td style="font-weight: 600;">${i.qty}</td>
                <td>₹${i.price.toLocaleString()}</td>
                <td style="color: var(--text-secondary);">₹${i.discount || 0}</td>
                <td style="font-weight: 600;">₹${i.amount.toLocaleString()}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>

    <!-- Financial Summary -->
    <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 0.35rem; padding-top: 0.75rem; border-top: 1px solid var(--border-color); font-size: 0.875rem;">
      <div style="display: flex; justify-content: space-between; width: 220px; color: var(--text-secondary);">
        <span>Subtotal:</span>
        <strong>₹${subtotal.toLocaleString()}</strong>
      </div>
      ${totalDiscount > 0 ? `
        <div style="display: flex; justify-content: space-between; width: 220px; color: var(--status-warning);">
          <span>Discount:</span>
          <strong>-₹${totalDiscount.toLocaleString()}</strong>
        </div>
      ` : ''}
      <div style="display: flex; justify-content: space-between; width: 220px; font-size: 1.05rem; font-weight: 700; color: var(--text-primary); border-top: 1px solid var(--border-color); padding-top: 0.35rem; margin-top: 0.25rem;">
        <span>Final Total:</span>
        <span style="color: var(--brand-primary);">₹${sale.totalAmount.toLocaleString()}</span>
      </div>
    </div>
  `;

  const printBtn = createButton({ text: 'Print Receipt', icon: 'printer', variant: 'secondary', onClick: () => window.print() });
  const closeBtn = createButton({ text: 'Close', variant: 'secondary', onClick: () => modal.closeModal() });
  const modal = createModal({ title: `Sale Details — ${sale.customer}`, bodyElement: modalEl, footerButtons: [printBtn, closeBtn] });
}


// ==========================================
// 3. LAYOUT COMPONENTS
// ==========================================
const NAV_ITEMS = [
  { id: 'overview', label: 'Overview', icon: 'layout-dashboard' },
  { id: 'inventory', label: 'Inventory', icon: 'boxes' },
  { id: 'products', label: 'Products', icon: 'shirt' },
  { id: 'purchases', label: 'Purchases / Stock In', icon: 'truck' },
  { id: 'sales', label: 'Sales', icon: 'shopping-cart' },
  { id: 'customers', label: 'Customers', icon: 'users' },
  { id: 'reports', label: 'Reports', icon: 'bar-chart-3' },
  { id: 'settings', label: 'Settings', icon: 'settings' }
];

function createSidebar(activeNavId, onNavigate) {
  const sidebar = document.createElement('aside');
  sidebar.className = 'sidebar';
  
  const header = document.createElement('div');
  header.className = 'sidebar-header';
  header.innerHTML = `
    <div class="brand-badge">M</div>
    <div>
      <div class="brand-title">Master Admin</div>
      <div class="brand-subtitle">Apex Store #01</div>
    </div>
  `;
  
  const nav = document.createElement('nav');
  nav.className = 'sidebar-nav';
  
  NAV_ITEMS.forEach(item => {
    const btn = document.createElement('button');
    btn.className = `nav-item ${item.id === activeNavId ? 'active' : ''}`;
    btn.innerHTML = `
      <i data-lucide="${item.icon}" style="width: 18px; height: 18px;"></i>
      <span>${item.label}</span>
    `;
    btn.addEventListener('click', () => onNavigate(item.id));
    nav.appendChild(btn);
  });
  
  sidebar.appendChild(header);
  sidebar.appendChild(nav);
  return sidebar;
}

function createTopbar(activeTitle, onThemeToggle) {
  const topbar = document.createElement('header');
  topbar.className = 'topbar';
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  
  topbar.innerHTML = `
    <div class="topbar-left">
      <h1 class="page-title" style="font-size: 1.35rem;">${activeTitle}</h1>
    </div>
    <div class="topbar-right">
      <div style="font-size: 0.8rem; background: var(--bg-secondary); padding: 0.35rem 0.75rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color); display: flex; align-items: center; gap: 0.4rem;">
        <span style="width: 8px; height: 8px; border-radius: 50%; background-color: var(--status-success);"></span>
        <span style="font-weight: 500; color: var(--text-secondary);">Store #01 • Online</span>
      </div>
      
      <button class="btn btn-secondary btn-sm theme-toggle-btn" title="Toggle Light/Dark Mode" style="padding: 0.45rem;">
        <i data-lucide="${currentTheme === 'dark' ? 'sun' : 'moon'}" style="width: 16px; height: 16px;"></i>
      </button>

      <div style="display: flex; align-items: center; gap: 0.6rem; padding-left: 0.5rem; border-left: 1px solid var(--border-color);">
        <div style="width: 32px; height: 32px; border-radius: 50%; background-color: var(--brand-primary); color: #fff; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 0.85rem;">
          SM
        </div>
        <div style="display: flex; flex-direction: column;">
          <span style="font-size: 0.85rem; font-weight: 600; line-height: 1.2;">Suresh Menon</span>
          <span style="font-size: 0.725rem; color: var(--text-secondary);">Store Owner</span>
        </div>
      </div>
    </div>
  `;
  
  topbar.querySelector('.theme-toggle-btn').addEventListener('click', onThemeToggle);
  return topbar;
}

// ==========================================
// 4. PAGE RENDERERS
// ==========================================

// OVERVIEW PAGE
function renderOverview(onNavigate) {
  const container = document.createElement('div');
  container.className = 'page-container';

  const metrics = store.getMetrics();
  const data = store.data;

  const headerDiv = document.createElement('div');
  headerDiv.style.cssText = 'display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;';
  headerDiv.innerHTML = `
    <div>
      <h2 class="section-heading">Store Overview</h2>
      <p style="font-size: 0.85rem; color: var(--text-secondary);">Key store metrics, sales trend, top performing products, and recent stock intake.</p>
    </div>
  `;
  container.appendChild(headerDiv);

  // 4 KPI Cards
  const kpiGrid = document.createElement('div');
  kpiGrid.className = 'kpi-grid';

  const lowCount = metrics.lowStockCount;
  const outCount = metrics.outOfStockCount;
  const totalStockUnits = metrics.totalStock;
  const totalRevenue = data.sales.reduce((sum, s) => sum + s.totalAmount, 0);

  kpiGrid.appendChild(createMetricCard({
    label: 'Total Revenue',
    value: `₹${totalRevenue.toLocaleString('en-IN')}`,
    subtext: `<span style="color: var(--status-success); font-weight: 600;">↑ +18.4%</span> <span style="color: var(--text-secondary);">across ${data.sales.length} sales orders</span>`,
    icon: 'dollar-sign',
    onClick: () => onNavigate('sales')
  }));

  kpiGrid.appendChild(createMetricCard({
    label: 'Total Products',
    value: `${totalStockUnits} Units`,
    subtext: `<span style="color: var(--text-secondary);">Across ${data.products.length} catalog products</span>`,
    icon: 'package',
    onClick: () => onNavigate('products')
  }));

  kpiGrid.appendChild(createMetricCard({
    label: 'Low Stock',
    value: `${lowCount} Items`,
    subtext: `<span style="color: var(--status-warning-text); font-weight: 600;">${lowCount} items</span> <span style="color: var(--text-secondary);">below min threshold</span>`,
    icon: 'alert-triangle',
    variant: 'warning',
    onClick: () => onNavigate('inventory', { status: 'LOW' })
  }));

  kpiGrid.appendChild(createMetricCard({
    label: 'Out of Stock',
    value: `${outCount} Items`,
    subtext: `<span style="color: var(--status-danger-text); font-weight: 600;">${outCount} items</span> <span style="color: var(--text-secondary);">require immediate PO</span>`,
    icon: 'alert-circle',
    variant: 'danger',
    onClick: () => onNavigate('inventory', { status: 'OUT' })
  }));

  container.appendChild(kpiGrid);

  // 2-Column Row (Sales Trend & Top Selling)
  const grid2Col = document.createElement('div');
  grid2Col.style.cssText = 'display: grid; grid-template-columns: 2fr 1fr; gap: 1.5rem; width: 100%; align-items: stretch;';
  if (window.innerWidth <= 1024) grid2Col.style.gridTemplateColumns = '1fr';

  let activePeriod = '1W';
  const salesTrendCard = document.createElement('div');
  salesTrendCard.className = 'card';
  salesTrendCard.style.display = 'flex';
  salesTrendCard.style.flexDirection = 'column';
  salesTrendCard.style.justifyContent = 'space-between';

  const chartDatasets = {
    '1W': {
      periodLabel: '1W',
      startRevLabel: 'Start of Week',
      startRevVal: '₹70,000',
      endRevLabel: 'End of Week',
      endRevVal: '₹82,450',
      revDiff: '+₹12,450',
      revGrowth: '+17.8%',
      isRevPositive: true,
      cogs: '₹55,000',
      profitLabel: 'Profit',
      profitVal: '+₹27,450',
      profitMargin: '33.3%',
      isProfit: true,
      yMax: '₹85k',
      yMid: '₹75k',
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      coords: [
        { x: 25, y: 101, val: '₹70,000', label: 'Mon' },
        { x: 100, y: 87, val: '₹72,500', label: 'Tue' },
        { x: 175, y: 68, val: '₹75,800', label: 'Wed' },
        { x: 250, y: 77, val: '₹74,200', label: 'Thu' },
        { x: 325, y: 52, val: '₹78,600', label: 'Fri' },
        { x: 400, y: 37, val: '₹81,200', label: 'Sat' },
        { x: 475, y: 30, val: '₹82,450', label: 'Sun' }
      ],
      pointsPath: '25,101 100,87 175,68 250,77 325,52 400,37 475,30',
      areaPoly: '25,130 25,101 100,87 175,68 250,77 325,52 400,37 475,30 475,130 25,130'
    },
    '1M': {
      periodLabel: '1M',
      startRevLabel: 'Start of Month',
      startRevVal: '₹2,20,000',
      endRevLabel: 'End of Month',
      endRevVal: '₹2,84,500',
      revDiff: '+₹64,500',
      revGrowth: '+29.3%',
      isRevPositive: true,
      cogs: '₹1,85,000',
      profitLabel: 'Profit',
      profitVal: '+₹99,500',
      profitMargin: '35.0%',
      isProfit: true,
      yMax: '₹300k',
      yMid: '₹250k',
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      coords: [
        { x: 40, y: 100, val: '₹2,20,000', label: 'Week 1' },
        { x: 185, y: 75, val: '₹2,45,000', label: 'Week 2' },
        { x: 330, y: 58, val: '₹2,62,000', label: 'Week 3' },
        { x: 460, y: 32, val: '₹2,84,500', label: 'Week 4' }
      ],
      pointsPath: '40,100 185,75 330,58 460,32',
      areaPoly: '40,130 40,100 185,75 330,58 460,32 460,130 40,130'
    },
    '3M': {
      periodLabel: '3M',
      startRevLabel: 'Start of 3M',
      startRevVal: '₹6,80,000',
      endRevLabel: 'End of 3M',
      endRevVal: '₹7,92,100',
      revDiff: '+₹1,12,100',
      revGrowth: '+16.5%',
      isRevPositive: true,
      cogs: '₹5,10,000',
      profitLabel: 'Profit',
      profitVal: '+₹2,82,100',
      profitMargin: '35.6%',
      isProfit: true,
      yMax: '₹800k',
      yMid: '₹700k',
      labels: ['August', 'September', 'October'],
      coords: [
        { x: 50, y: 75, val: '₹6,80,000', label: 'August' },
        { x: 250, y: 52, val: '₹7,40,000', label: 'September' },
        { x: 450, y: 22, val: '₹7,92,100', label: 'October' }
      ],
      pointsPath: '50,75 250,52 450,22',
      areaPoly: '50,130 50,75 250,52 450,22 450,130 50,130'
    },
    '1Y': {
      periodLabel: '1Y',
      startRevLabel: 'Start of Year',
      startRevVal: '₹24,00,000',
      endRevLabel: 'End of Year',
      endRevVal: '₹31,45,800',
      revDiff: '+₹7,45,800',
      revGrowth: '+31.1%',
      isRevPositive: true,
      cogs: '₹20,50,000',
      profitLabel: 'Profit',
      profitVal: '+₹10,95,800',
      profitMargin: '34.8%',
      isProfit: true,
      yMax: '₹32L',
      yMid: '₹26L',
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      coords: [
        { x: 40, y: 80, val: '₹24,00,000', label: 'Q1' },
        { x: 185, y: 65, val: '₹26,50,000', label: 'Q2' },
        { x: 330, y: 45, val: '₹29,00,000', label: 'Q3' },
        { x: 460, y: 22, val: '₹31,45,800', label: 'Q4' }
      ],
      pointsPath: '40,80 185,65 330,45 460,22',
      areaPoly: '40,130 40,80 185,65 330,45 460,22 460,130 40,130'
    }
  };

  function renderSalesChart(periodKey) {
    const ds = chartDatasets[periodKey];
    salesTrendCard.innerHTML = `
      <div class="card-header" style="flex-wrap: wrap; gap: 0.75rem; align-items: center; padding-bottom: 0.75rem; border-bottom: 1px solid var(--border-color); margin-bottom: 0.75rem;">
        <div>
          <h3 class="card-title" style="font-size: 1.05rem; font-weight: 600;">Sales Trend</h3>
          <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.15rem;">Revenue performance & gross profit summary</div>
        </div>
        
        <!-- Period Selectors: 1W, 1M, 3M, 1Y -->
        <div style="display: flex; gap: 0.2rem; background: var(--bg-secondary); padding: 0.2rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
          ${['1W', '1M', '3M', '1Y'].map(p => `
            <button class="btn period-btn" data-period="${p}" style="padding: 0.25rem 0.6rem; font-size: 0.75rem; font-weight: 600; border: none; cursor: pointer;">${p}</button>
          `).join('')}
        </div>
      </div>

      <!-- Financial Summary Bar -->
      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; background: var(--bg-secondary); padding: 0.75rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); margin-bottom: 0.75rem;">
        <div>
          <div style="font-size: 0.725rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.03em; color: var(--text-secondary);">Total Revenue</div>
          <div style="display: flex; align-items: baseline; gap: 0.5rem; margin-top: 0.15rem; flex-wrap: wrap;">
            <span style="font-size: 1.45rem; font-weight: 700; color: var(--text-primary); letter-spacing: -0.02em;">${ds.endRevVal}</span>
            <span style="font-size: 0.825rem; font-weight: 600; color: ${ds.isRevPositive ? 'var(--status-success)' : 'var(--status-danger)'}; display: inline-flex; align-items: center; gap: 0.25rem;">
              ${ds.isRevPositive ? '↑' : '↓'} ${ds.revDiff} (${ds.revGrowth}) <span style="color: var(--text-secondary); font-weight: 400;">· ${ds.periodLabel}</span>
            </span>
          </div>
        </div>

        <!-- Profit / Loss Box -->
        <div style="text-align: right;">
          <div style="font-size: 0.725rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.03em; color: var(--text-secondary);">${ds.profitLabel}</div>
          <div style="font-size: 1.15rem; font-weight: 700; color: ${ds.isProfit ? 'var(--status-success)' : 'var(--status-danger)'}; margin-top: 0.15rem;">
            ${ds.profitVal}
          </div>
          <div style="font-size: 0.725rem; font-weight: 600; color: ${ds.isProfit ? 'var(--status-success)' : 'var(--status-danger)'};">
            ${ds.profitMargin} margin
          </div>
        </div>
      </div>

      <!-- Start vs End Period Benchmarks -->
      <div style="display: flex; justify-content: space-between; font-size: 0.775rem; color: var(--text-secondary); margin-bottom: 0.35rem; padding: 0 0.25rem;">
        <div>${ds.startRevLabel}: <strong style="color: var(--text-primary); font-weight: 600;">${ds.startRevVal}</strong></div>
        <div>${ds.endRevLabel}: <strong style="color: var(--text-primary); font-weight: 600;">${ds.endRevVal}</strong></div>
      </div>

      <!-- Perfectly Aligned SVG Chart Canvas -->
      <div style="position: relative; height: 160px; display: flex; align-items: stretch; margin-top: 0.25rem;">
        <div style="display: flex; flex-direction: column; justify-content: space-between; font-size: 0.7rem; color: var(--text-secondary); padding-right: 0.6rem; width: 45px; text-align: right; font-weight: 500; height: 130px;">
          <span>${ds.yMax}</span>
          <span>${ds.yMid}</span>
          <span>₹0</span>
        </div>

        <div style="flex: 1; position: relative; display: flex; flex-direction: column;">
          <svg width="100%" height="155" viewBox="0 0 500 155" style="overflow: visible;">
            <defs>
              <linearGradient id="salesGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="var(--brand-primary)" stop-opacity="0.22"/>
                <stop offset="100%" stop-color="var(--brand-primary)" stop-opacity="0.0"/>
              </linearGradient>
            </defs>
            <line x1="0" y1="15" x2="500" y2="15" stroke="var(--border-color)" stroke-dasharray="4" vector-effect="non-scaling-stroke" />
            <line x1="0" y1="72" x2="500" y2="72" stroke="var(--border-color)" stroke-dasharray="4" vector-effect="non-scaling-stroke" />
            <line x1="0" y1="130" x2="500" y2="130" stroke="var(--border-color)" vector-effect="non-scaling-stroke" />
            
            <polygon points="${ds.areaPoly}" fill="url(#salesGrad)" />
            <polyline points="${ds.pointsPath}" fill="none" stroke="var(--brand-primary)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" />
            
            ${ds.coords.map(c => `
              <circle cx="${c.x}" cy="${c.y}" r="5" fill="var(--brand-primary)" stroke="var(--bg-surface)" stroke-width="2.5">
                <title>${c.label}: ${c.val}</title>
              </circle>
              <text x="${c.x}" y="152" text-anchor="middle" fill="var(--text-secondary)" font-size="12" font-weight="500">${c.label}</text>
            `).join('')}
          </svg>
        </div>
      </div>
    `;

    salesTrendCard.querySelectorAll('.period-btn').forEach(btn => {
      const p = btn.dataset.period;
      if (p === periodKey) {
        btn.style.backgroundColor = 'var(--brand-primary)';
        btn.style.color = '#ffffff';
        btn.style.fontWeight = '600';
        btn.style.borderRadius = 'var(--radius-sm)';
      } else {
        btn.style.backgroundColor = 'transparent';
        btn.style.color = 'var(--text-secondary)';
        btn.style.fontWeight = '500';
      }

      btn.addEventListener('click', (e) => {
        activePeriod = e.target.dataset.period;
        renderSalesChart(activePeriod);
      });
    });

    if (window.lucide) window.lucide.createIcons();
  }

  renderSalesChart(activePeriod);
  grid2Col.appendChild(salesTrendCard);

  // Top Selling Products Card
  const topSellingCard = document.createElement('div');
  topSellingCard.className = 'card';
  topSellingCard.style.display = 'flex';
  topSellingCard.style.flexDirection = 'column';
  topSellingCard.style.justifyContent = 'space-between';

  const topSellingMap = {};
  data.sales.forEach(s => {
    s.items.forEach(item => {
      if (!topSellingMap[item.product]) {
        topSellingMap[item.product] = { name: item.product, units: 0, revenue: 0 };
      }
      topSellingMap[item.product].units += item.qty;
      topSellingMap[item.product].revenue += item.amount;
    });
  });
  const topSellingList = Object.values(topSellingMap)
    .sort((a, b) => b.units - a.units)
    .slice(0, 5);

  topSellingCard.innerHTML = `
    <div>
      <div class="card-header" style="margin-bottom: 0.75rem; padding-bottom: 0.85rem; border-bottom: 1px solid var(--border-color);">
        <div>
          <div style="font-size: 0.725rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; color: var(--text-secondary); margin-bottom: 0.25rem;">BESTSELLERS</div>
          <h3 class="card-title">Top Selling Products</h3>
        </div>
        <button class="btn btn-ghost btn-sm view-all-products-btn" style="font-size: 0.775rem; padding: 0.25rem 0.5rem; color: var(--brand-primary); font-weight: 600;">View all</button>
      </div>
      
      <div style="display: flex; flex-direction: column; gap: 0.75rem;">
        ${topSellingList.map((p, idx) => `
          <div class="top-selling-item" data-product-name="${p.name}" style="display: flex; align-items: center; justify-content: space-between; cursor: pointer; padding: 0.35rem 0.5rem; border-radius: var(--radius-sm); transition: background-color 0.15s ease; ${idx < topSellingList.length - 1 ? 'border-bottom: 1px solid var(--border-color);' : ''}">
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <span style="font-weight: 700; font-size: 0.85rem; color: ${idx === 0 ? 'var(--brand-primary)' : 'var(--text-secondary)'}; background: ${idx === 0 ? 'var(--brand-soft)' : 'var(--bg-secondary)'}; width: 24px; height: 24px; border-radius: 4px; display: flex; align-items: center; justify-content: center;">0${idx + 1}</span>
              <div>
                <div style="font-weight: 600; font-size: 0.875rem; color: var(--text-primary);">${p.name}</div>
                <div style="font-size: 0.75rem; color: var(--text-secondary);">${p.units} sold</div>
              </div>
            </div>
            <div style="font-weight: 600; font-size: 0.875rem; color: var(--text-primary);">₹${p.revenue.toLocaleString('en-IN')}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  topSellingCard.querySelectorAll('.top-selling-item').forEach(item => {
    item.addEventListener('click', () => {
      onNavigate('products', { openProduct: item.dataset.productName });
    });
  });

  topSellingCard.querySelector('.view-all-products-btn').addEventListener('click', () => onNavigate('sales'));
  grid2Col.appendChild(topSellingCard);

  container.appendChild(grid2Col);

  // Section 4: RECENT SALES HISTORY
  const salesHistoryCard = document.createElement('div');
  salesHistoryCard.className = 'card';
  const salesList = data.sales.slice(0, 5);

  salesHistoryCard.innerHTML = `
    <div class="card-header">
      <div>
        <h3 class="card-title">Recent Sales History</h3>
        <p style="font-size: 0.78rem; color: var(--text-secondary);">Latest customer billing transactions & sales receipts</p>
      </div>
      <button class="btn btn-ghost btn-sm view-all-sales-btn" style="font-size: 0.775rem; color: var(--brand-primary); font-weight: 600;">View all</button>
    </div>

    <div class="table-responsive">
      <table class="admin-table">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Date & Time</th>
            <th>Items</th>
            <th>Amount</th>
            <th>Payment Method</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          ${salesList.map(s => `
            <tr>
              <td style="font-weight: 600; color: var(--text-primary);">${s.customer}</td>
              <td style="color: var(--text-secondary); font-size: 0.8rem;">${s.date}</td>
              <td style="color: var(--text-secondary);">${s.itemCount} item${s.itemCount > 1 ? 's' : ''}</td>
              <td style="font-weight: 600; color: var(--text-primary);">₹${s.totalAmount.toLocaleString()}</td>
              <td>${createBadge({ label: s.paymentMethod, variant: 'secondary' }).outerHTML}</td>
              <td>${createBadge({ label: s.status, variant: 'success' }).outerHTML}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;

  salesHistoryCard.querySelector('.view-all-sales-btn').addEventListener('click', () => onNavigate('sales'));
  container.appendChild(salesHistoryCard);

  if (window.lucide) window.lucide.createIcons();
  return container;
}

// INVENTORY PAGE
function renderInventory(params = {}) {
  const container = document.createElement('div');
  container.className = 'page-container';

  const metrics = store.getMetrics();
  let activeTab = 'inventory';
  let searchQuery = '';
  let selectedCategory = 'ALL';
  let selectedStatus = params.status || 'ALL';

  const headerDiv = document.createElement('div');
  headerDiv.style.cssText = 'display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;';
  headerDiv.innerHTML = `
    <div>
      <h2 class="section-heading">Stock Inventory & Movements</h2>
      <p style="font-size: 0.85rem; color: var(--text-secondary);">Track real-time sellable stock, damaged stock isolation, and inventory audit logs.</p>
    </div>
    <div id="inv-header-actions"></div>
  `;

  const adjustBtn = createButton({
    text: 'Stock Audit / Adjust',
    icon: 'sliders-horizontal',
    variant: 'secondary',
    size: 'sm',
    onClick: () => openStockAdjustModal()
  });
  headerDiv.querySelector('#inv-header-actions').appendChild(adjustBtn);
  container.appendChild(headerDiv);

  const summaryBar = document.createElement('div');
  summaryBar.style.cssText = 'display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center;';
  summaryBar.innerHTML = `
    <div class="card" style="padding: 0.6rem 1rem; flex: 1; min-width: 140px;">
      <div style="font-size: 0.75rem; color: var(--text-secondary);">Available Stock</div>
      <div style="font-size: 1.15rem; font-weight: 600; color: var(--status-success);">${metrics.totalStock} units</div>
    </div>
    <div class="card" style="padding: 0.6rem 1rem; flex: 1; min-width: 140px;">
      <div style="font-size: 0.75rem; color: var(--text-secondary);">Low Stock</div>
      <div style="font-size: 1.15rem; font-weight: 600; color: var(--status-warning);">${metrics.lowStockCount} items</div>
    </div>
    <div class="card" style="padding: 0.6rem 1rem; flex: 1; min-width: 140px;">
      <div style="font-size: 0.75rem; color: var(--text-secondary);">Out of Stock</div>
      <div style="font-size: 1.15rem; font-weight: 600; color: var(--status-danger);">${metrics.outOfStockCount} items</div>
    </div>
    <div class="card" style="padding: 0.6rem 1rem; flex: 1; min-width: 140px;">
      <div style="font-size: 0.75rem; color: var(--text-secondary);">Damaged Stock</div>
      <div style="font-size: 1.15rem; font-weight: 600; color: var(--status-danger);">${metrics.damagedStockCount} units</div>
    </div>
  `;
  container.appendChild(summaryBar);

  const tabsDiv = document.createElement('div');
  tabsDiv.className = 'tab-list';
  tabsDiv.innerHTML = `
    <button class="tab-button ${activeTab === 'inventory' ? 'active' : ''}" id="tab-btn-inv">Current Inventory Table</button>
    <button class="tab-button ${activeTab === 'movements' ? 'active' : ''}" id="tab-btn-mov">Stock Movement Log</button>
  `;
  container.appendChild(tabsDiv);

  const mainCard = document.createElement('div');
  mainCard.className = 'card';
  container.appendChild(mainCard);

  function renderTabContent() {
    mainCard.innerHTML = '';
    if (activeTab === 'inventory') {
      const filterBar = document.createElement('div');
      filterBar.className = 'filter-bar';
      filterBar.style.marginBottom = '1.25rem';
      filterBar.innerHTML = `
        <div class="search-box">
          <i data-lucide="search" class="search-icon" style="width: 16px; height: 16px;"></i>
          <input type="text" class="form-input" id="inv-search-input" placeholder="Search by Product name, Color, Category..." value="${searchQuery}">
        </div>
        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
          <select class="form-select" id="inv-category-select" style="width: 160px;">
            <option value="ALL">All Categories</option>
            ${store.data.categories.map(c => `<option value="${c}" ${selectedCategory === c ? 'selected' : ''}>${c}</option>`).join('')}
          </select>
          <select class="form-select" id="inv-status-select" style="width: 160px;">
            <option value="ALL">All Statuses</option>
            <option value="NORMAL" ${selectedStatus === 'NORMAL' ? 'selected' : ''}>Normal</option>
            <option value="LOW" ${selectedStatus === 'LOW' ? 'selected' : ''}>Low Stock</option>
            <option value="OUT" ${selectedStatus === 'OUT' ? 'selected' : ''}>Out of Stock</option>
          </select>
        </div>
      `;

      filterBar.querySelector('#inv-search-input').addEventListener('input', (e) => { searchQuery = e.target.value; renderTableRows(); });
      filterBar.querySelector('#inv-category-select').addEventListener('change', (e) => { selectedCategory = e.target.value; renderTableRows(); });
      filterBar.querySelector('#inv-status-select').addEventListener('change', (e) => { selectedStatus = e.target.value; renderTableRows(); });

      mainCard.appendChild(filterBar);

      const tableResp = document.createElement('div');
      tableResp.className = 'table-responsive';
      tableResp.innerHTML = `
        <table class="admin-table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Category</th>
              <th>Size / Color</th>
              <th>Available Stock</th>
              <th>Damaged</th>
              <th>Min Stock</th>
              <th>Stock Value</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody id="inventory-tbody"></tbody>
        </table>
      `;
      mainCard.appendChild(tableResp);
      renderTableRows();
    } else {
      mainCard.innerHTML = `
        <div style="margin-bottom: 1rem;">
          <h3 class="card-title">Stock Movement History</h3>
          <p style="font-size: 0.78rem; color: var(--text-secondary);">Audit log of all stock increases, sales deductions, damages, and manual adjustments.</p>
        </div>
        <div class="table-responsive">
          <table class="admin-table">
            <thead>
              <tr>
                <th>Date & Time</th>
                <th>Movement Type</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>User</th>
              </tr>
            </thead>
            <tbody>
              ${store.data.stockMovements.map(m => `
                <tr>
                  <td style="color: var(--text-secondary);">${m.date}</td>
                  <td>${createBadge({ label: m.type, variant: m.type === 'Stock In' ? 'success' : (m.type === 'Sale' ? 'info' : 'danger') }).outerHTML}</td>
                  <td style="font-weight: 500;">${m.product}</td>
                  <td style="font-weight: 600; color: ${m.quantity > 0 ? 'var(--status-success)' : 'var(--status-danger)'};">${m.quantity > 0 ? `+${m.quantity}` : m.quantity}</td>
                  <td style="color: var(--text-secondary);">${m.user}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `;
    }

    if (window.lucide) window.lucide.createIcons();
  }

  function renderTableRows() {
    const tbody = mainCard.querySelector('#inventory-tbody');
    if (!tbody) return;
    tbody.innerHTML = '';

    const rows = [];
    store.data.products.forEach(p => {
      p.variants.forEach(v => {
        const q = searchQuery.toLowerCase();
        const matchesSearch = !q || p.name.toLowerCase().includes(q) || v.sku.toLowerCase().includes(q) || v.color.toLowerCase().includes(q);
        const matchesCat = selectedCategory === 'ALL' || p.category === selectedCategory;
        let statusKey = v.stock === 0 ? 'OUT' : (v.stock <= p.minStock ? 'LOW' : 'NORMAL');
        const matchesStatus = selectedStatus === 'ALL' || selectedStatus === statusKey;

        if (matchesSearch && matchesCat && matchesStatus) rows.push({ product: p, variant: v, statusKey });
      });
    });

    if (rows.length === 0) {
      tbody.innerHTML = `<tr><td colspan="10" style="text-align: center; color: var(--text-secondary); padding: 2rem;">No inventory records match the selected filters.</td></tr>`;
      return;
    }

    rows.forEach(({ product, variant, statusKey }) => {
      const tr = document.createElement('tr');
      let badgeVariant = statusKey === 'OUT' ? 'danger' : (statusKey === 'LOW' ? 'warning' : 'success');
      let badgeLabel = statusKey === 'OUT' ? 'Out of Stock' : (statusKey === 'LOW' ? 'Low Stock' : 'Available');

      tr.innerHTML = `
        <td>
          <div style="font-weight: 600;">${product.name}</div>
          <div style="font-size: 0.725rem; color: var(--text-secondary);">${product.brand}</div>
        </td>
        <td>${createBadge({ label: product.category, variant: 'secondary' }).outerHTML}</td>
        <td>${variant.color} / ${variant.size}</td>
        <td><span style="font-weight: 600; color: ${variant.stock === 0 ? 'var(--status-danger)' : 'var(--text-primary)'};">${variant.stock} units</span></td>
        <td>${variant.damaged > 0 ? `<span class="badge badge-danger">${variant.damaged} damaged</span>` : '<span style="color: var(--text-tertiary);">0</span>'}</td>
        <td style="color: var(--text-secondary);">${product.minStock}</td>
        <td>₹${(variant.stock * product.purchasePrice).toLocaleString()}</td>
        <td>${createBadge({ label: badgeLabel, variant: badgeVariant }).outerHTML}</td>
        <td>
          <button class="btn btn-ghost btn-sm quick-adj-btn" data-sku="${variant.sku}" style="padding: 0.25rem 0.5rem;">
            <i data-lucide="edit-2" style="width: 14px; height: 14px;"></i> Adjust
          </button>
        </td>
      `;

      tr.querySelector('.quick-adj-btn').addEventListener('click', () => openStockAdjustModal(variant.sku, variant.stock));
      tbody.appendChild(tr);
    });

    if (window.lucide) window.lucide.createIcons();
  }

  function openStockAdjustModal(defaultSku = '', defaultStock = 0) {
    const formHtml = `
      <div class="form-group">
        <label class="form-label">Select Product Variant</label>
        <select class="form-select" id="adj-sku-select">
          ${store.data.products.flatMap(p => p.variants.map(v => `<option value="${v.sku}" ${v.sku === defaultSku ? 'selected' : ''}>${p.name} (${v.color}/${v.size}) [Current: ${v.stock}]</option>`)).join('')}
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">New Usable Available Stock Quantity</label>
        <input type="number" class="form-input" id="adj-new-stock" value="${defaultStock}" min="0">
      </div>
      <div class="form-group">
        <label class="form-label">Audit / Adjustment Reason</label>
        <select class="form-select" id="adj-reason-select">
          <option value="Physical Stock Audit Correction">Physical Stock Audit Correction</option>
          <option value="Stock Damaged In Store">Stock Damaged In Store</option>
          <option value="Sample / Display Unit">Sample / Display Unit</option>
        </select>
      </div>
    `;

    const bodyEl = document.createElement('div');
    bodyEl.innerHTML = formHtml;

    const cancelBtn = createButton({ text: 'Cancel', variant: 'secondary', onClick: () => modal.closeModal() });
    const saveBtn = createButton({
      text: 'Save Adjustment',
      variant: 'primary',
      onClick: () => {
        const sku = bodyEl.querySelector('#adj-sku-select').value;
        const newStock = parseInt(bodyEl.querySelector('#adj-new-stock').value, 10);
        const reason = bodyEl.querySelector('#adj-reason-select').value;
        if (isNaN(newStock) || newStock < 0) {
          toast.show({ message: 'Please enter a valid stock quantity', type: 'danger' });
          return;
        }
        store.adjustStock(sku, newStock, reason);
        toast.show({ message: `Updated stock to ${newStock} units`, type: 'success' });
        modal.closeModal();
        renderTabContent();
      }
    });

    const modal = createModal({ title: 'Manual Stock Audit / Adjustment', bodyElement: bodyEl, footerButtons: [cancelBtn, saveBtn] });
  }

  tabsDiv.querySelector('#tab-btn-inv').addEventListener('click', () => { activeTab = 'inventory'; renderTabContent(); });
  tabsDiv.querySelector('#tab-btn-mov').addEventListener('click', () => { activeTab = 'movements'; renderTabContent(); });

  renderTabContent();
  return container;
}

// PRODUCTS PAGE
function renderProducts(params = {}) {
  const container = document.createElement('div');
  container.className = 'page-container';

  let searchQuery = '';
  let selectedCategory = 'ALL';
  let selectedBrand = 'ALL';

  const headerDiv = document.createElement('div');
  headerDiv.style.cssText = 'display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;';
  headerDiv.innerHTML = `
    <div>
      <h2 class="section-heading">Product Catalog & Variants</h2>
      <p style="font-size: 0.85rem; color: var(--text-secondary);">Manage products, pricing, minimum reorder thresholds, and size/color variants.</p>
    </div>
    <div id="prod-header-actions"></div>
  `;

  const addProductBtn = createButton({ text: 'Add New Product', icon: 'plus', variant: 'primary', size: 'sm', onClick: () => openAddProductModal() });
  headerDiv.querySelector('#prod-header-actions').appendChild(addProductBtn);
  container.appendChild(headerDiv);

  const mainCard = document.createElement('div');
  mainCard.className = 'card';
  container.appendChild(mainCard);

  const filterBar = document.createElement('div');
  filterBar.className = 'filter-bar';
  filterBar.style.marginBottom = '1.25rem';
  filterBar.innerHTML = `
    <div class="search-box">
      <i data-lucide="search" class="search-icon" style="width: 16px; height: 16px;"></i>
      <input type="text" class="form-input" id="prod-search-input" placeholder="Search by Product Name, Category, Brand..." value="${searchQuery}">
    </div>
    <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
      <select class="form-select" id="prod-category-select" style="width: 160px;">
        <option value="ALL">All Categories</option>
        ${store.data.categories.map(c => `<option value="${c}">${c}</option>`).join('')}
      </select>
      <select class="form-select" id="prod-brand-select" style="width: 160px;">
        <option value="ALL">All Brands</option>
        ${store.data.brands.map(b => `<option value="${b}">${b}</option>`).join('')}
      </select>
    </div>
  `;

  filterBar.querySelector('#prod-search-input').addEventListener('input', (e) => { searchQuery = e.target.value; renderProductsList(); });
  filterBar.querySelector('#prod-category-select').addEventListener('change', (e) => { selectedCategory = e.target.value; renderProductsList(); });
  filterBar.querySelector('#prod-brand-select').addEventListener('change', (e) => { selectedBrand = e.target.value; renderProductsList(); });

  mainCard.appendChild(filterBar);

  const tableResp = document.createElement('div');
  tableResp.className = 'table-responsive';
  tableResp.innerHTML = `
    <table class="admin-table">
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Category</th>
          <th>Brand</th>
          <th>Purchase Price</th>
          <th>Selling Price</th>
          <th>Margin</th>
          <th>Variants Count</th>
          <th>Total Stock</th>
          <th>Min Level</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody id="products-tbody"></tbody>
    </table>
  `;
  mainCard.appendChild(tableResp);

  function renderProductsList() {
    const tbody = mainCard.querySelector('#products-tbody');
    if (!tbody) return;
    tbody.innerHTML = '';

    const filtered = store.data.products.filter(p => {
      const q = searchQuery.toLowerCase();
      const matchesQuery = !q || p.name.toLowerCase().includes(q) || p.variants.some(v => v.sku.toLowerCase().includes(q));
      const matchesCat = selectedCategory === 'ALL' || p.category === selectedCategory;
      const matchesBrand = selectedBrand === 'ALL' || p.brand === selectedBrand;
      return matchesQuery && matchesCat && matchesBrand;
    });

    if (filtered.length === 0) {
      tbody.innerHTML = `<tr><td colspan="10" style="text-align: center; color: var(--text-secondary); padding: 2rem;">No products found in catalog.</td></tr>`;
      return;
    }

    if (params.openProduct) {
      setTimeout(() => {
        openProductDetailsModal(params.openProduct);
      }, 100);
    }

    filtered.forEach(p => {
      const totalStock = p.variants.reduce((sum, v) => sum + (v.stock || 0), 0);
      const margin = Math.round(((p.sellingPrice - p.purchasePrice) / p.sellingPrice) * 100);

      const tr = document.createElement('tr');
      tr.style.cursor = 'pointer';
      tr.addEventListener('click', (e) => {
        openProductDetailsModal(p);
      });
      tr.innerHTML = `
        <td>
          <div style="font-weight: 600; font-size: 0.925rem; color: var(--brand-primary);">${p.name}</div>
        </td>
        <td>${createBadge({ label: p.category, variant: 'secondary' }).outerHTML}</td>
        <td style="color: var(--text-secondary);">${p.brand}</td>
        <td>₹${p.purchasePrice}</td>
        <td style="font-weight: 600;">₹${p.sellingPrice}</td>
        <td><span style="color: var(--status-success); font-weight: 600;">${margin}%</span></td>
        <td><span style="font-weight: 500;">${p.variants.length} Variants</span></td>
        <td style="font-weight: 600; color: ${totalStock === 0 ? 'var(--status-danger)' : 'var(--text-primary)'};">${totalStock} units</td>
        <td style="color: var(--text-secondary);">${p.minStock}</td>
        <td>${createBadge({ label: p.status, variant: 'success' }).outerHTML}</td>
      `;
      tbody.appendChild(tr);
    });

    if (window.lucide) window.lucide.createIcons();
  }

  function openAddProductModal() {
    const modalEl = document.createElement('div');
    modalEl.style.cssText = 'display: flex; flex-direction: column; gap: 1rem; width: 100%;';
    
    const catOptions = ['Shirts', 'T-Shirts', 'Jeans', 'Trousers', 'Hoodies'];
    const brandOptions = store.data.brands.length > 0 ? store.data.brands : ['ClassicFit', 'UrbanWear', 'DenimCo', 'EssentialStudio'];

    modalEl.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <!-- Product Name * -->
        <div class="form-group">
          <label class="form-label" style="font-size: 0.825rem; font-weight: 600; color: var(--text-primary); margin-bottom: 0.35rem; display: block;">Product Name *</label>
          <input type="text" class="form-input" id="new-prod-name" placeholder="e.g. Linen Casual Shirt">
        </div>

        <!-- Category * & Brand -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
          <div class="form-group">
            <label class="form-label" style="font-size: 0.825rem; font-weight: 600; color: var(--text-primary); margin-bottom: 0.35rem; display: block;">Category *</label>
            <select class="form-select" id="new-prod-cat">
              ${catOptions.map(c => `<option value="${c}">${c}</option>`).join('')}
            </select>
          </div>
          <div class="form-group">
            <label class="form-label" style="font-size: 0.825rem; font-weight: 600; color: var(--text-primary); margin-bottom: 0.35rem; display: block;">Brand</label>
            <select class="form-select" id="new-prod-brand">
              ${brandOptions.map(b => `<option value="${b}">${b}</option>`).join('')}
            </select>
          </div>
        </div>

        <!-- Purchase Price (₹) & Selling Price (₹) -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
          <div class="form-group">
            <label class="form-label" style="font-size: 0.825rem; font-weight: 600; color: var(--text-primary); margin-bottom: 0.35rem; display: block;">Purchase Price (₹) *</label>
            <input type="number" class="form-input" id="new-prod-pprice" placeholder="500" min="0" step="1">
          </div>
          <div class="form-group">
            <label class="form-label" style="font-size: 0.825rem; font-weight: 600; color: var(--text-primary); margin-bottom: 0.35rem; display: block;">Selling Price (₹) *</label>
            <input type="number" class="form-input" id="new-prod-sprice" placeholder="1299" min="0" step="1">
          </div>
        </div>

        <!-- Status -->
        <div class="form-group" style="max-width: 48%;">
          <label class="form-label" style="font-size: 0.825rem; font-weight: 600; color: var(--text-primary); margin-bottom: 0.35rem; display: block;">Status</label>
          <select class="form-select" id="new-prod-status">
            <option value="Active" selected>Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        <!-- Description -->
        <div class="form-group">
          <label class="form-label" style="font-size: 0.825rem; font-weight: 600; color: var(--text-primary); margin-bottom: 0.35rem; display: block;">Description</label>
          <textarea class="form-input" id="new-prod-desc" rows="3" placeholder="Enter product description (optional)" style="resize: vertical; font-family: inherit;"></textarea>
        </div>
      </div>
    `;

    const cancelBtn = createButton({ text: 'Cancel', variant: 'secondary', onClick: () => modal.closeModal() });
    const saveBtn = createButton({
      text: 'Create Product',
      variant: 'primary',
      onClick: () => {
        const name = modalEl.querySelector('#new-prod-name').value.trim();
        const category = modalEl.querySelector('#new-prod-cat').value;
        const brand = modalEl.querySelector('#new-prod-brand').value || 'ClassicFit';
        const ppriceRaw = modalEl.querySelector('#new-prod-pprice').value;
        const spriceRaw = modalEl.querySelector('#new-prod-sprice').value;
        const status = modalEl.querySelector('#new-prod-status').value || 'Active';
        const description = modalEl.querySelector('#new-prod-desc').value.trim();

        // 1. Validation
        if (!name) {
          toast.show({ message: 'Product Name is required.', type: 'danger' });
          return;
        }

        if (!category) {
          toast.show({ message: 'Category is required.', type: 'danger' });
          return;
        }

        const pprice = parseFloat(ppriceRaw);
        if (isNaN(pprice) || pprice <= 0) {
          toast.show({ message: 'Purchase Price must be a valid positive number.', type: 'danger' });
          return;
        }

        const sprice = parseFloat(spriceRaw);
        if (isNaN(sprice) || sprice <= 0) {
          toast.show({ message: 'Selling Price must be a valid positive number.', type: 'danger' });
          return;
        }

        // Selling Price < Purchase Price warning (does NOT reject form)
        if (sprice < pprice) {
          toast.show({ message: 'Warning: Selling price is lower than purchase price. This may result in a loss.', type: 'warning', duration: 4000 });
        }

        // 2. Add product (NO stock quantity created)
        const newProd = {
          id: `PROD-${Date.now().toString().slice(-3)}`,
          name: name,
          category: category,
          brand: brand,
          description: description,
          purchasePrice: pprice,
          sellingPrice: sprice,
          minStock: 10,
          supplier: 'Apex Apparel Ltd',
          status: status,
          variants: []
        };

        store.addProduct(newProd);

        // 3. Success notification & modal close
        toast.show({ message: 'Product created successfully.', type: 'success' });
        modal.closeModal();
        renderProductsList();
      }
    });

    const modal = createModal({ title: 'Add New Product', bodyElement: modalEl, footerButtons: [cancelBtn, saveBtn] });
  }

  renderProductsList();
  return container;
}

// PURCHASES PAGE
function renderPurchases() {
  const container = document.createElement('div');
  container.className = 'page-container';

  const headerDiv = document.createElement('div');
  headerDiv.style.cssText = 'display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;';
  headerDiv.innerHTML = `
    <div>
      <h2 class="section-heading">Purchases & Stock In</h2>
      <p style="font-size: 0.85rem; color: var(--text-secondary);">Receive inventory shipments, run quality checks, and isolate damaged stock.</p>
    </div>
  `;
  container.appendChild(headerDiv);

  const mainCard = document.createElement('div');
  mainCard.className = 'card';
  mainCard.innerHTML = `
    <div class="table-responsive">
      <table class="admin-table">
        <thead>
          <tr>
            <th>Supplier</th>
            <th>Date</th>
            <th>Items Count</th>
            <th>Total Qty</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          ${store.data.purchases.map(p => `
            <tr>
              <td style="font-weight: 500;">${p.supplier}</td>
              <td style="color: var(--text-secondary);">${p.date}</td>
              <td>${p.productCount} items</td>
              <td style="font-weight: 600;">${p.totalQuantity} units</td>
              <td style="font-weight: 600;">₹${p.totalAmount.toLocaleString()}</td>
              <td>${createBadge({ label: p.status, variant: 'success' }).outerHTML}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
  container.appendChild(mainCard);

  if (window.lucide) window.lucide.createIcons();
  return container;
}

// SALES PAGE
function renderSales(params = {}) {
  const container = document.createElement('div');
  container.className = 'page-container';

  let searchQuery = '';
  let selectedDate = 'ALL';
  let selectedCategory = 'ALL';
  let selectedPayment = 'ALL';
  let selectedStatus = 'ALL';

  // 1. Header
  const headerDiv = document.createElement('div');
  headerDiv.style.cssText = 'display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;';
  headerDiv.innerHTML = `
    <div>
      <h2 class="section-heading">Sales</h2>
      <p style="font-size: 0.85rem; color: var(--text-secondary);">Track completed sales, payments, and inventory deductions.</p>
    </div>
  `;
  container.appendChild(headerDiv);

  // 2. Summary Cards (Compact 4 Cards Row)
  const todaySalesList = store.data.sales.filter(s => s.date.includes('Oct 6'));
  const todaysSalesAmount = todaySalesList.reduce((sum, s) => sum + s.totalAmount, 0);
  const todaysBillsCount = todaySalesList.length;
  const todaysUnitsSold = todaySalesList.reduce((sum, s) => sum + s.itemCount, 0);
  const avgBillValue = todaysBillsCount > 0 ? Math.round(todaysSalesAmount / todaysBillsCount) : 0;

  const summaryGrid = document.createElement('div');
  summaryGrid.className = 'kpi-grid';
  summaryGrid.style.marginBottom = '1.25rem';
  summaryGrid.innerHTML = `
    <div class="metric-card">
      <div class="metric-header">
        <span style="font-size: 0.725rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; color: var(--text-secondary);">Today's Sales</span>
        <div style="width: 32px; height: 32px; border-radius: var(--radius-sm); background: var(--bg-secondary); display: flex; align-items: center; justify-content: center; border: 1px solid var(--border-color);">
          <i data-lucide="dollar-sign" style="width: 16px; height: 16px; color: var(--text-secondary);"></i>
        </div>
      </div>
      <div class="metric-value" style="font-size: 1.55rem; font-weight: 700; color: var(--text-primary); line-height: 1.2;">₹${todaysSalesAmount.toLocaleString('en-IN')}</div>
    </div>

    <div class="metric-card">
      <div class="metric-header">
        <span style="font-size: 0.725rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; color: var(--text-secondary);">Bills Today</span>
        <div style="width: 32px; height: 32px; border-radius: var(--radius-sm); background: var(--bg-secondary); display: flex; align-items: center; justify-content: center; border: 1px solid var(--border-color);">
          <i data-lucide="receipt" style="width: 16px; height: 16px; color: var(--text-secondary);"></i>
        </div>
      </div>
      <div class="metric-value" style="font-size: 1.55rem; font-weight: 700; color: var(--text-primary); line-height: 1.2;">${todaysBillsCount}</div>
    </div>

    <div class="metric-card">
      <div class="metric-header">
        <span style="font-size: 0.725rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; color: var(--text-secondary);">Units Sold</span>
        <div style="width: 32px; height: 32px; border-radius: var(--radius-sm); background: var(--bg-secondary); display: flex; align-items: center; justify-content: center; border: 1px solid var(--border-color);">
          <i data-lucide="shopping-bag" style="width: 16px; height: 16px; color: var(--text-secondary);"></i>
        </div>
      </div>
      <div class="metric-value" style="font-size: 1.55rem; font-weight: 700; color: var(--text-primary); line-height: 1.2;">${todaysUnitsSold}</div>
    </div>

    <div class="metric-card">
      <div class="metric-header">
        <span style="font-size: 0.725rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; color: var(--text-secondary);">Average Bill Value</span>
        <div style="width: 32px; height: 32px; border-radius: var(--radius-sm); background: var(--bg-secondary); display: flex; align-items: center; justify-content: center; border: 1px solid var(--border-color);">
          <i data-lucide="trending-up" style="width: 16px; height: 16px; color: var(--text-secondary);"></i>
        </div>
      </div>
      <div class="metric-value" style="font-size: 1.55rem; font-weight: 700; color: var(--text-primary); line-height: 1.2;">₹${avgBillValue.toLocaleString('en-IN')}</div>
    </div>
  `;
  container.appendChild(summaryGrid);

  // 3. Search & Filter Bar
  const mainCard = document.createElement('div');
  mainCard.className = 'card';

  const filterBar = document.createElement('div');
  filterBar.className = 'filter-bar';
  filterBar.style.marginBottom = '1.25rem';
  filterBar.style.display = 'flex';
  filterBar.style.gap = '0.75rem';
  filterBar.style.flexWrap = 'wrap';
  filterBar.style.alignItems = 'center';
  filterBar.innerHTML = `
    <div class="search-box" style="flex: 1; min-width: 240px;">
      <i data-lucide="search" class="search-icon" style="width: 16px; height: 16px;"></i>
      <input type="text" class="form-input" id="sales-search-input" placeholder="Search customer, product or date..." value="${searchQuery}">
    </div>
    <div style="display: flex; gap: 0.6rem; flex-wrap: wrap; align-items: center;">
      <select class="form-select" id="sales-date-select" style="width: 130px;">
        <option value="ALL">All Dates</option>
        <option value="TODAY">Today</option>
        <option value="YESTERDAY">Yesterday</option>
        <option value="THIS_WEEK">This Week</option>
        <option value="THIS_MONTH">This Month</option>
      </select>
      <select class="form-select" id="sales-cat-select" style="width: 145px;">
        <option value="ALL">All Categories</option>
        ${store.data.categories.map(c => `<option value="${c}">${c}</option>`).join('')}
      </select>
      <select class="form-select" id="sales-payment-select" style="width: 140px;">
        <option value="ALL">All Payments</option>
        <option value="Cash">Cash</option>
        <option value="UPI">UPI</option>
        <option value="Card">Card</option>
      </select>
      <select class="form-select" id="sales-status-select" style="width: 135px;">
        <option value="ALL">All Statuses</option>
        <option value="Completed">Completed</option>
        <option value="Pending">Pending</option>
        <option value="Cancelled">Cancelled</option>
      </select>
    </div>
  `;

  filterBar.querySelector('#sales-search-input').addEventListener('input', (e) => { searchQuery = e.target.value; renderSalesTable(); });
  filterBar.querySelector('#sales-date-select').addEventListener('change', (e) => { selectedDate = e.target.value; renderSalesTable(); });
  filterBar.querySelector('#sales-cat-select').addEventListener('change', (e) => { selectedCategory = e.target.value; renderSalesTable(); });
  filterBar.querySelector('#sales-payment-select').addEventListener('change', (e) => { selectedPayment = e.target.value; renderSalesTable(); });
  filterBar.querySelector('#sales-status-select').addEventListener('change', (e) => { selectedStatus = e.target.value; renderSalesTable(); });

  mainCard.appendChild(filterBar);

  const tableResp = document.createElement('div');
  tableResp.className = 'table-responsive';
  tableResp.innerHTML = `
    <table class="admin-table">
      <thead>
        <tr>
          <th>Customer</th>
          <th>Date & Time</th>
          <th>Items</th>
          <th>Total Amount</th>
          <th>Payment Method</th>
          <th>Status</th>
          <th style="text-align: right;">Action</th>
        </tr>
      </thead>
      <tbody id="sales-tbody"></tbody>
    </table>
  `;
  mainCard.appendChild(tableResp);
  container.appendChild(mainCard);

  function renderSalesTable() {
    const tbody = mainCard.querySelector('#sales-tbody');
    if (!tbody) return;
    tbody.innerHTML = '';

    const filtered = store.data.sales.filter(s => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q ||
        s.id.toLowerCase().includes(q) ||
        s.customer.toLowerCase().includes(q) ||
        s.items.some(i => i.product.toLowerCase().includes(q) || i.sku.toLowerCase().includes(q));

      const matchesCat = selectedCategory === 'ALL' || s.items.some(i => {
        const p = store.data.products.find(prod => prod.name === i.product);
        return p && p.category === selectedCategory;
      });

      const matchesPay = selectedPayment === 'ALL' || s.paymentMethod === selectedPayment;
      const matchesStatus = selectedStatus === 'ALL' || s.status === selectedStatus;

      let matchesDate = true;
      if (selectedDate === 'TODAY') {
        matchesDate = s.date.includes('Oct 6');
      } else if (selectedDate === 'YESTERDAY') {
        matchesDate = s.date.includes('Oct 5');
      } else if (selectedDate === 'THIS_WEEK') {
        matchesDate = s.date.includes('Oct');
      } else if (selectedDate === 'THIS_MONTH') {
        matchesDate = s.date.includes('Oct') || s.date.includes('Sep');
      }

      return matchesSearch && matchesCat && matchesPay && matchesStatus && matchesDate;
    });

    if (filtered.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: var(--text-secondary); padding: 2rem;">No sales transactions match the selected filters.</td></tr>`;
      return;
    }

    filtered.forEach(s => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td style="font-weight: 600; color: var(--text-primary);">${s.customer}</td>
        <td style="color: var(--text-secondary); font-size: 0.825rem;">${s.date}</td>
        <td style="color: var(--text-secondary);">${s.itemCount} item${s.itemCount > 1 ? 's' : ''}</td>
        <td style="font-weight: 600; color: var(--text-primary);">₹${s.totalAmount.toLocaleString('en-IN')}</td>
        <td>${createBadge({ label: s.paymentMethod, variant: 'secondary' }).outerHTML}</td>
        <td>${createBadge({ label: s.status, variant: 'success' }).outerHTML}</td>
        <td style="text-align: right;">
          <button class="btn btn-sm view-receipt-btn" style="color: var(--text-primary); background: var(--bg-surface); border: 1px solid var(--border-color); font-weight: 600; padding: 0.25rem 0.65rem; display: inline-flex; align-items: center; gap: 0.35rem; border-radius: var(--radius-sm); cursor: pointer;">
            <i data-lucide="receipt" style="width: 14px; height: 14px; color: var(--text-secondary);"></i> View Receipt
          </button>
        </td>
      `;

      tr.querySelector('.view-receipt-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        openSaleDetailsModal(s);
      });

      tbody.appendChild(tr);
    });

    if (window.lucide) window.lucide.createIcons();
  }

  renderSalesTable();
  if (window.lucide) window.lucide.createIcons();
  return container;
}

// CUSTOMERS PAGE
function renderCustomers() {
  const container = document.createElement('div');
  container.className = 'page-container';

  const headerDiv = document.createElement('div');
  headerDiv.style.cssText = 'display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;';
  headerDiv.innerHTML = `
    <div>
      <h2 class="section-heading">Customer Directory</h2>
      <p style="font-size: 0.85rem; color: var(--text-secondary);">Manage store customer purchase history and total spend records.</p>
    </div>
  `;
  container.appendChild(headerDiv);

  const mainCard = document.createElement('div');
  mainCard.className = 'card';
  mainCard.innerHTML = `
    <div class="table-responsive">
      <table class="admin-table">
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Customer Name</th>
            <th>Phone</th>
            <th>Orders</th>
            <th>Last Purchase</th>
            <th>Total Spend</th>
          </tr>
        </thead>
        <tbody>
          ${store.data.customers.map(c => `
            <tr>
              <td style="font-family: monospace; color: var(--text-secondary);">${c.id}</td>
              <td style="font-weight: 600;">${c.name}</td>
              <td style="color: var(--text-secondary);">${c.phone}</td>
              <td>${c.ordersCount} purchases</td>
              <td style="color: var(--text-secondary);">${c.lastPurchase}</td>
              <td style="font-weight: 600; color: var(--brand-primary);">₹${c.totalSpend.toLocaleString()}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
  container.appendChild(mainCard);

  if (window.lucide) window.lucide.createIcons();
  return container;
}

// REPORTS PAGE
function renderReports() {
  const container = document.createElement('div');
  container.className = 'page-container';

  const metrics = store.getMetrics();
  const data = store.data;

  let totalRevenue = data.sales.reduce((sum, s) => sum + s.totalAmount, 0);
  let totalCogs = 0;
  data.sales.forEach(s => {
    s.items.forEach(item => {
      const prod = data.products.find(p => p.name === item.product);
      const unitCost = prod ? prod.purchasePrice : (item.price * 0.5);
      totalCogs += item.qty * unitCost;
    });
  });
  let grossProfit = totalRevenue - totalCogs;
  let marginPct = totalRevenue > 0 ? ((grossProfit / totalRevenue) * 100).toFixed(1) : '0.0';

  const headerDiv = document.createElement('div');
  headerDiv.style.cssText = 'display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;';
  headerDiv.innerHTML = `
    <div>
      <h2 class="section-heading">Business Reports & Financial Analytics</h2>
      <p style="font-size: 0.85rem; color: var(--text-secondary);">Financial profit breakdown, inventory valuation, and supplier purchase reports.</p>
    </div>
  `;
  container.appendChild(headerDiv);

  const profitGrid = document.createElement('div');
  profitGrid.className = 'kpi-grid';
  profitGrid.appendChild(createMetricCard({ label: 'Total Revenue', value: `₹${totalRevenue.toLocaleString()}`, icon: 'dollar-sign', variant: 'success' }));
  profitGrid.appendChild(createMetricCard({ label: 'Gross Profit', value: `₹${grossProfit.toLocaleString()} (${marginPct}% margin)`, icon: 'trending-up', variant: 'success' }));
  profitGrid.appendChild(createMetricCard({ label: 'Total Available Inventory Value', value: `₹${metrics.stockValue.toLocaleString()}`, icon: 'boxes' }));
  container.appendChild(profitGrid);

  if (window.lucide) window.lucide.createIcons();
  return container;
}

// SETTINGS PAGE
function renderSettings(onThemeToggle) {
  const container = document.createElement('div');
  container.className = 'page-container';

  const data = store.data;
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';

  const headerDiv = document.createElement('div');
  headerDiv.style.cssText = 'display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;';
  headerDiv.innerHTML = `
    <div>
      <h2 class="section-heading">System & Store Settings</h2>
      <p style="font-size: 0.85rem; color: var(--text-secondary);">Configure store parameters, catalog metadata, user access roles, and theme settings.</p>
    </div>
  `;
  container.appendChild(headerDiv);

  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: space-between; padding-bottom: 1rem; border-bottom: 1px solid var(--border-color);">
      <div>
        <h3 class="card-title">Interface Theme</h3>
        <p style="font-size: 0.78rem; color: var(--text-secondary);">Switch between Light Mode (#F7F8FC) and Dark Mode (#080D1C)</p>
      </div>
      <button class="btn btn-secondary btn-sm" id="settings-theme-toggle-btn">
        <i data-lucide="${currentTheme === 'dark' ? 'sun' : 'moon'}" style="width: 16px; height: 16px;"></i> Toggle Theme
      </button>
    </div>
    <div style="margin-top: 1rem;">
      <h3 class="card-title" style="margin-bottom: 0.5rem;">Store Details</h3>
      <p style="font-size: 0.85rem; color: var(--text-secondary);">${data.storeInfo.name} — ${data.storeInfo.branch}</p>
    </div>
  `;

  card.querySelector('#settings-theme-toggle-btn').addEventListener('click', onThemeToggle);
  container.appendChild(card);

  if (window.lucide) window.lucide.createIcons();
  return container;
}

// ==========================================
// 5. APPLICATION ORCHESTRATOR
// ==========================================
class MasterWebAdminApp {
  constructor() {
    this.appEl = document.getElementById('app');
    this.activeNavId = 'overview';
    this.navParams = {};
    
    const savedTheme = localStorage.getItem('master_web_admin_theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    this.parseHashAndNavigate(false);
    window.addEventListener('popstate', () => {
      this.parseHashAndNavigate(false);
    });
  }

  parseHashAndNavigate(pushToHistory = false) {
    const hash = window.location.hash || '#overview';
    const cleanHash = hash.replace(/^#/, '');
    const [navId, queryStr] = cleanHash.split('?');
    const params = {};
    if (queryStr) {
      const searchParams = new URLSearchParams(queryStr);
      for (const [key, value] of searchParams.entries()) {
        params[key] = value;
      }
    }

    const validNavIds = NAV_ITEMS.map(i => i.id);
    const targetNavId = validNavIds.includes(navId) ? navId : 'overview';

    this.activeNavId = targetNavId;
    this.navParams = params;
    this.render();

    if (pushToHistory) {
      let newHash = '#' + targetNavId;
      if (Object.keys(params).length > 0) {
        newHash += '?' + new URLSearchParams(params).toString();
      }
      if (window.location.hash !== newHash) {
        history.pushState(null, '', newHash);
      }
    }
  }

  toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('master_web_admin_theme', nextTheme);
    this.render();
  };

  navigateTo = (navId, params = {}) => {
    let newHash = '#' + navId;
    if (Object.keys(params).length > 0) {
      newHash += '?' + new URLSearchParams(params).toString();
    }
    this.activeNavId = navId;
    this.navParams = params;
    if (window.location.hash !== newHash) {
      history.pushState(null, '', newHash);
    }
    this.render();
  };

  render() {
    if (!this.appEl) return;
    this.appEl.innerHTML = '';

    const activeItem = NAV_ITEMS.find(item => item.id === this.activeNavId) || NAV_ITEMS[0];

    const layout = document.createElement('div');
    layout.className = 'app-layout';

    const sidebar = createSidebar(this.activeNavId, this.navigateTo);
    layout.appendChild(sidebar);

    const mainContent = document.createElement('main');
    mainContent.className = 'main-content';

    const topbar = createTopbar(activeItem.label, this.toggleTheme);
    mainContent.appendChild(topbar);

    let pageView;
    switch (this.activeNavId) {
      case 'overview': pageView = renderOverview(this.navigateTo); break;
      case 'inventory': pageView = renderInventory(this.navParams); break;
      case 'products': pageView = renderProducts(this.navParams); break;
      case 'purchases': pageView = renderPurchases(this.navParams); break;
      case 'sales': pageView = renderSales(this.navParams); break;
      case 'customers': pageView = renderCustomers(this.navParams); break;
      case 'reports': pageView = renderReports(this.navParams); break;
      case 'settings': pageView = renderSettings(this.toggleTheme); break;
      default: pageView = renderOverview(this.navigateTo);
    }

    mainContent.appendChild(pageView);
    layout.appendChild(mainContent);
    this.appEl.appendChild(layout);

    if (window.lucide) window.lucide.createIcons();
  }
}

// Global initialization helper
function initApp() {
  window.app = new MasterWebAdminApp();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
