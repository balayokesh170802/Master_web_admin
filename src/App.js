const sampleDemoData = {
  storeInfo: {
    name: "Apex Fashion Store",
    branch: "Main Street Branch #01",
    ownerName: "Suresh Menon",
    ownerRole: "Store Owner",
    currency: "₹",
    currencyCode: "INR",
    phone: "+91 98765 43210",
    email: "manager@apexfashion.com",
    address: "124 Commerce Avenue, Fashion District, City",
    defaultMinStock: 10
  },

  inventorySettings: {
    lowStockThreshold: 5
  },

  categories: ["Shirts", "T-Shirts", "Jeans", "Trousers", "Hoodies"],
  brands: ["ClassicFit", "UrbanWear", "DenimCo", "EssentialStudio"],
  sizes: ["S", "M", "L", "XL"],
  
  suppliers: [
    { id: "SUP-01", name: "Apex Apparel Ltd", contact: "Rajesh Kumar (+91 98111 22334)", city: "Tirupur" },
    { id: "SUP-02", name: "SilkRoute Fabrics", contact: "Anita Sharma (+91 98222 33445)", city: "Surat" },
    { id: "SUP-03", name: "Urban Thread Co", contact: "Vikram Singh (+91 98333 44556)", city: "Ludhiana" }
  ],

  products: [
  {
    "id": "PROD-101",
    "createdAt": "2026-10-01T08:00:00.000Z",
    "name": "Classic Oxford Shirt",
    "category": "Shirts",
    "brand": "ClassicFit",
    "description": "100% Cotton button-down Oxford shirt suitable for daily formal and casual wear.",
    "purchasePrice": 650,
    "sellingPrice": 1499,
    "minStock": 12,
    "totalStock": 59,
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
    "createdAt": "2026-10-01T08:05:00.000Z",
    "name": "Premium Cotton T-Shirt",
    "category": "T-Shirts",
    "brand": "UrbanWear",
    "description": "220 GSM combed cotton crewneck t-shirt with pre-shrunk fabric.",
    "purchasePrice": 280,
    "sellingPrice": 699,
    "minStock": 20,
    "totalStock": 65,
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
    "createdAt": "2026-10-01T08:10:00.000Z",
    "name": "Slim Fit Denim Jeans",
    "category": "Jeans",
    "brand": "DenimCo",
    "description": "Stretch denim 5-pocket jeans with stone wash finish.",
    "purchasePrice": 850,
    "sellingPrice": 1999,
    "minStock": 10,
    "totalStock": 25,
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
    "createdAt": "2026-10-01T08:15:00.000Z",
    "name": "Regular Fit Chino Trousers",
    "category": "Trousers",
    "brand": "ClassicFit",
    "description": "Breathable cotton stretch trousers for everyday comfort.",
    "purchasePrice": 600,
    "sellingPrice": 1399,
    "minStock": 15,
    "totalStock": 49,
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
    "createdAt": "2026-10-01T08:20:00.000Z",
    "name": "Essential Fleece Hoodie",
    "category": "Hoodies",
    "brand": "EssentialStudio",
    "description": "Heavyweight fleece lined hoodie with kangaroo pocket.",
    "purchasePrice": 750,
    "sellingPrice": 1799,
    "minStock": 8,
    "totalStock": 28,
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

const emptyInitialData = {
  storeInfo: {
    name: "Apex Fashion Store",
    branch: "Main Street Branch #01",
    ownerName: "Suresh Menon",
    ownerRole: "Store Owner",
    currency: "₹",
    currencyCode: "INR",
    phone: "+91 98765 43210",
    email: "manager@apexfashion.com",
    address: "124 Commerce Avenue, Fashion District, City",
    defaultMinStock: 10
  },
  inventorySettings: {
    lowStockThreshold: 5
  },
  categories: ["Shirts", "T-Shirts", "Jeans", "Trousers", "Hoodies"],
  brands: ["ClassicFit", "UrbanWear", "DenimCo", "EssentialStudio"],
  sizes: ["S", "M", "L", "XL"],
  suppliers: [
    { id: "SUP-01", name: "Apex Apparel Ltd", contact: "Rajesh Kumar (+91 98111 22334)", city: "Tirupur" },
    { id: "SUP-02", name: "SilkRoute Fabrics", contact: "Anita Sharma (+91 98222 33445)", city: "Surat" },
    { id: "SUP-03", name: "Urban Thread Co", contact: "Vikram Singh (+91 98333 44556)", city: "Ludhiana" }
  ],
  products: [],
  purchases: [],
  sales: [],
  stockMovements: [],
  customers: [],
  users: [
    { id: "USR-01", name: "Suresh Menon", role: "Store Owner / Admin", email: "suresh@apexfashion.com", status: "Active" },
    { id: "USR-02", name: "Priya Nair", role: "Billing Staff", email: "priya@apexfashion.com", status: "Active" }
  ]
};

const initialData = emptyInitialData;

// ==========================================
// PURCHASE LIFECYCLE
// ------------------------------------------
// Waiting for Receive  ->  Received
//
// There is no approval step. 'Draft' and 'Approved' are legacy statuses from
// the old approval workflow; both meant "ordered, no stock moved", which is
// exactly what 'Waiting for Receive' means now. Existing records are migrated
// on load, and every check below still accepts the legacy values so that a
// record written by an older build behaves correctly either way.
// 'Partially Received' is NOT a legacy status — it is a real state produced
// when a delivery arrives short, and it keeps its own handling.
// ==========================================
const PURCHASE_STATUS_WAITING = 'Waiting for Receive';
const PURCHASE_STATUS_RECEIVED = 'Received';
const PURCHASE_LEGACY_PENDING = ['Draft', 'Approved'];

/** True while a purchase is ordered but no stock has been moved for it. */
function isPurchaseWaiting(status) {
  return status === PURCHASE_STATUS_WAITING || PURCHASE_LEGACY_PENDING.includes(status);
}

/** True once a purchase is fully received and therefore view-only. */
function isPurchaseReceived(status) {
  return status === PURCHASE_STATUS_RECEIVED || status === 'Completed';
}

/** True while a purchase can still take stock in. */
function isPurchaseReceivable(status) {
  return isPurchaseWaiting(status) || status === 'Partially Received';
}

class StoreManager {
  constructor() {
    try {
      // Clean up legacy storage versions so deleted database is in effect
      localStorage.removeItem('master_web_admin_data');
      localStorage.removeItem('master_web_admin_data_v2');
      const saved = localStorage.getItem('master_web_admin_data_v3');
      this.data = saved ? JSON.parse(saved) : JSON.parse(JSON.stringify(emptyInitialData));
    } catch (e) {
      this.data = JSON.parse(JSON.stringify(emptyInitialData));
    }

    if (!this.data || typeof this.data !== 'object') {
      this.data = JSON.parse(JSON.stringify(emptyInitialData));
    }

    if (!Array.isArray(this.data.products)) this.data.products = [];
    if (!Array.isArray(this.data.categories)) this.data.categories = emptyInitialData.categories || [];
    if (!Array.isArray(this.data.brands)) this.data.brands = emptyInitialData.brands || [];
    if (!Array.isArray(this.data.purchases)) this.data.purchases = [];
    if (!Array.isArray(this.data.sales)) this.data.sales = [];
    if (!Array.isArray(this.data.customers)) this.data.customers = [];
    if (!Array.isArray(this.data.stockMovements)) this.data.stockMovements = [];

    this.migrateAndRepairData();
    this.listeners = [];
  }

  loadFromStorage() {
    try {
      const saved = localStorage.getItem('master_web_admin_data_v3');
      if (saved) {
        this.data = JSON.parse(saved);
        this.migrateAndRepairData();
      }
    } catch (e) {
      console.error('Error loading from storage:', e);
    }
    return this.data;
  }

  migrateAndRepairData() {
    if (!this.data || typeof this.data !== 'object') return;
    if (!Array.isArray(this.data.products)) this.data.products = [];
    if (!Array.isArray(this.data.purchases)) this.data.purchases = [];
    if (!Array.isArray(this.data.sales)) this.data.sales = [];
    if (!Array.isArray(this.data.customers)) this.data.customers = [];
    if (!Array.isArray(this.data.stockMovements)) this.data.stockMovements = [];
    if (!Array.isArray(this.data.categories)) this.data.categories = ['Shirts', 'T-Shirts', 'Jeans', 'Trousers', 'Hoodies'];
    if (!Array.isArray(this.data.brands)) this.data.brands = ['ClassicFit', 'UrbanWear', 'DenimCo', 'EssentialStudio'];
    if (!Array.isArray(this.data.sizes)) this.data.sizes = ['S', 'M', 'L', 'XL'];

    // 1. Ensure totalStock consistency and authoritative createdAt for every product
    const baseSeedTime = new Date('2026-10-01T08:00:00.000Z').getTime();
    this.data.products.forEach((p, idx) => {
      p.totalStock = (p.variants || []).reduce((sum, v) => sum + (Number(v.stock) || 0), 0);
      p.stock = p.totalStock;

      if (!p.createdAt) {
        let earliestDate = null;
        if (Array.isArray(this.data.purchases)) {
          this.data.purchases.forEach(pur => {
            const matchedItem = (pur.items || []).some(it =>
              (it.productId && it.productId === p.id) ||
              (it.product && p.name && it.product.trim().toLowerCase() === p.name.trim().toLowerCase())
            );
            if (matchedItem && pur.date) {
              const pt = new Date(pur.date).getTime();
              if (!isNaN(pt) && (earliestDate === null || pt < earliestDate)) {
                earliestDate = pt;
              }
            }
          });
        }
        if (earliestDate === null && Array.isArray(this.data.stockMovements)) {
          this.data.stockMovements.forEach(m => {
            if ((m.productId === p.id || m.product === p.name) && m.date) {
              const mt = new Date(m.date).getTime();
              if (!isNaN(mt) && (earliestDate === null || mt < earliestDate)) {
                earliestDate = mt;
              }
            }
          });
        }
        if (earliestDate !== null) {
          p.createdAt = new Date(earliestDate).toISOString();
        } else {
          p.createdAt = new Date(baseSeedTime + (idx * 60000)).toISOString();
        }
      }
    });

    // 2. Normalize and reconcile purchase order receipt quantities
    const productReceivedMap = {};
    const historicalCostMap = {};
    this.data.purchases.forEach(pur => {
      const isCompletedOrReceived = isPurchaseReceived(pur.status);
      const isDraftOrApproved = isPurchaseWaiting(pur.status);

      let purRecSum = 0;
      (pur.items || []).forEach(it => {
        const pName = (it.product || it.productName || '').trim().toLowerCase();
        const ord = Math.max(0, Number(it.qty !== undefined ? it.qty : (it.received || 0)));
        const cost = Number(it.buyingPrice || it.price || 0);

        if (cost > 0 && !historicalCostMap[pName]) {
          historicalCostMap[pName] = { cost, category: it.category, brand: it.brand, sellingPrice: it.sellingPrice };
        }

        let rec = 0;
        if (isDraftOrApproved) {
          rec = 0;
          it.receivedQty = 0;
        } else if (it.receivedQty !== undefined && it.receivedQty !== null) {
          rec = Math.max(0, Number(it.receivedQty) || 0);
        } else if (it.received !== undefined && it.received !== null) {
          rec = Math.max(0, Number(it.received) || 0);
          it.receivedQty = rec;
        } else if (isCompletedOrReceived) {
          rec = ord;
          it.receivedQty = rec;
        }

        purRecSum += rec;
        if (rec > 0 && pName) {
          if (!productReceivedMap[pName]) productReceivedMap[pName] = { units: 0, cost: cost || 0, sellingPrice: it.sellingPrice || 0, category: it.category, brand: it.brand };
          productReceivedMap[pName].units += rec;
          if (cost > 0) productReceivedMap[pName].cost = cost;
        }
      });

      pur.totalReceived = purRecSum;
      pur.receivedQuantity = purRecSum;
    });

    // 3. Map total sold units across active sales
    const productSoldMap = {};
    this.data.sales.forEach(sale => {
      if (sale.status !== 'Cancelled' && sale.status !== 'Failed') {
        (sale.items || []).forEach(it => {
          const pName = (it.product || it.productName || '').trim().toLowerCase();
          const qty = Number(it.qty !== undefined ? it.qty : (it.quantity || 1)) || 0;
          if (pName && qty > 0) {
            if (!productSoldMap[pName]) productSoldMap[pName] = { units: 0 };
            productSoldMap[pName].units += qty;
          }
        });
      }
    });

    // 4. Discover orphaned products from sales or purchases and register/preserve archived records with real physical stock
    const knownProductIds = new Set(this.data.products.map(p => p.id));
    const knownProductNames = new Set(this.data.products.map(p => (p.name || '').trim().toLowerCase()));

    // Check existing archived products and restore legitimate remaining stock if erroneously zeroed out without write-off
    this.data.products.forEach(p => {
      if (p.status === 'Archived') {
        const pNameLower = (p.name || '').trim().toLowerCase();
        const rec = productReceivedMap[pNameLower]?.units || 0;
        const sold = productSoldMap[pNameLower]?.units || 0;
        const expectedNet = Math.max(0, rec - sold);

        if (p.totalStock === 0 && expectedNet > 0) {
          const hasWriteOff = (this.data.stockMovements || []).some(m =>
            (m.productId === p.id || (m.product && m.product.trim().toLowerCase() === pNameLower)) &&
            (m.type === 'Adjustment' || m.type === 'Damaged' || m.type === 'Write-off')
          );
          if (!hasWriteOff) {
            // Restore actual physical remaining stock
            if (Array.isArray(p.variants) && p.variants.length > 0) {
              p.variants[0].stock = expectedNet;
            } else {
              p.variants = [{ size: 'Standard', stock: expectedNet, damaged: 0, purchasePrice: p.purchasePrice || 0, sellingPrice: p.sellingPrice || 0 }];
            }
            p.totalStock = expectedNet;
            p.stock = expectedNet;
          }
        }
      }
    });

    this.data.sales.forEach(sale => {
      (sale.items || []).forEach(it => {
        const pName = (it.product || it.productName || '').trim();
        const pNameLower = pName.toLowerCase();
        const pId = it.productId;

        if (pName && (!pId || !knownProductIds.has(pId)) && !knownProductNames.has(pNameLower)) {
          // Register archived product stub with genuine remaining physical stock
          const hist = historicalCostMap[pNameLower] || productReceivedMap[pNameLower] || {};
          const recUnits = productReceivedMap[pNameLower]?.units || 0;
          const soldUnits = productSoldMap[pNameLower]?.units || 0;
          const remainingUnits = Math.max(0, recUnits - soldUnits);

          const stubId = pId || `PROD-ARCH-${Date.now().toString().slice(-4)}-${Math.floor(Math.random()*900+100)}`;
          const stubProduct = {
            id: stubId,
            name: pName,
            category: hist.category || it.category || 'General',
            brand: hist.brand || it.brand || 'Generic',
            description: 'Historical product record retained for audit, stock reconciliation, and transactional integrity.',
            purchasePrice: hist.cost || Number(it.purchasePrice || it.buyingPrice || 0),
            sellingPrice: hist.sellingPrice || Number(it.price || it.sellingPrice || 0),
            minStock: 5,
            totalStock: remainingUnits,
            stock: remainingUnits,
            status: 'Archived',
            variants: [
              {
                id: `VAR-ARCH-${stubId}`,
                size: it.size || 'Standard',
                stock: remainingUnits,
                damaged: 0,
                purchasePrice: hist.cost || Number(it.purchasePrice || it.buyingPrice || 0),
                sellingPrice: hist.sellingPrice || Number(it.price || it.sellingPrice || 0)
              }
            ],
            createdAt: new Date('2026-10-01T08:00:00.000Z').toISOString()
          };
          this.data.products.push(stubProduct);
          knownProductIds.add(stubId);
          knownProductNames.add(pNameLower);
          it.productId = stubId;
        }
      });
    });

    // 3. Ensure sales data integrity (subtotal, customerName, customerId, item unit cost snapshot)
    this.data.sales.forEach(sale => {
      if (sale.subtotal === undefined || sale.subtotal === null) {
        const itemsSum = (sale.items || []).reduce((acc, it) => acc + (Number(it.amount !== undefined ? it.amount : (it.price * it.qty)) || 0), 0);
        sale.subtotal = itemsSum > 0 ? itemsSum : (Number(sale.totalAmount || 0) + Number(sale.discount || 0));
      }
      if (!sale.customerName) {
        sale.customerName = sale.customer || 'Walk-in Customer';
      }
      if (!sale.customer) {
        sale.customer = sale.customerName;
      }

      // Link a legacy sale that has no customerId yet, by exact name only and
      // only when that name is unambiguous. An existing customerId is never
      // overwritten and phone numbers are never used, so a sale cannot move
      // to a different customer on page load.
      if (sale.customerName && sale.customerName.toLowerCase() !== 'walk-in customer') {
        if (!sale.customerId) {
          const nameLower = sale.customerName.trim().toLowerCase();
          const sameName = this.data.customers.filter(c => c.name && c.name.trim().toLowerCase() === nameLower);
          if (sameName.length === 1) {
            sale.customerId = sameName[0].id;
          }
        }
      } else {
        sale.customerId = '';
      }

      // Snapshot unit costs on sale items
      (sale.items || []).forEach(it => {
        if (it.purchasePrice === undefined || it.purchasePrice === null || it.purchasePrice === 0) {
          it.purchasePrice = this.getItemUnitCost(it);
        }
        if (it.buyingPrice === undefined || it.buyingPrice === null) {
          it.buyingPrice = it.purchasePrice;
        }
      });
    });

    // 4. Ensure inventorySettings exists and has valid lowStockThreshold
    if (!this.data.inventorySettings || typeof this.data.inventorySettings !== 'object') {
      this.data.inventorySettings = { lowStockThreshold: 5 };
    } else {
      const val = parseInt(this.data.inventorySettings.lowStockThreshold, 10);
      this.data.inventorySettings.lowStockThreshold = (!isNaN(val) && val >= 1) ? val : 5;
    }

    // 5. Ensure storeInfo exists and carries the owner fields
    if (!this.data.storeInfo || typeof this.data.storeInfo !== 'object') {
      this.data.storeInfo = JSON.parse(JSON.stringify(emptyInitialData.storeInfo));
    } else {
      const defaults = emptyInitialData.storeInfo || {};
      ['name', 'branch', 'ownerName', 'ownerRole', 'currency', 'currencyCode', 'phone', 'email', 'address'].forEach(k => {
        if (this.data.storeInfo[k] === undefined || this.data.storeInfo[k] === null) {
          this.data.storeInfo[k] = defaults[k] !== undefined ? defaults[k] : '';
        }
      });
    }

    // 5b. Retire the approval workflow on existing records.
    //     Draft and Approved both meant "ordered, nothing received", so they
    //     become 'Waiting for Receive'. Nothing else about the record is
    //     touched: items, quantities, prices, receipt history and any
    //     Received / Partially Received status are all left exactly as saved.
    (this.data.purchases || []).forEach(pur => {
      if (!pur) return;
      if (PURCHASE_LEGACY_PENDING.includes(pur.status)) {
        pur.legacyStatus = pur.status;
        pur.status = PURCHASE_STATUS_WAITING;
      }
    });

    // 6. Build the payment ledger for sales saved before it existed.
    //    Monetary values are preserved; only payments[] is inferred.
    (this.data.sales || []).forEach(s => this._migrateSalePayments(s));

    // 7. Recalculate customer metrics from actual sales
    this.recalculateCustomerMetrics();
  }

  /**
   * Next unique ID in a `PREFIX-NN` series.
   *
   * The sequence is persisted under `this.data.idSequences[key]` and only
   * ever moves forward, so an ID freed by a deletion is never handed out
   * again. It is also seeded from the highest number already in use, and
   * every candidate is checked against `existingIds` before it is returned.
   * Existing IDs are never rewritten.
   */
  _nextSequentialId(key, prefix, existingIds, padLength = 2) {
    if (!this.data.idSequences || typeof this.data.idSequences !== 'object') {
      this.data.idSequences = {};
    }
    const taken = new Set(existingIds.filter(Boolean).map(id => String(id).toUpperCase()));

    let highest = 0;
    taken.forEach(id => {
      const m = id.match(/(\d+)$/);
      if (m) highest = Math.max(highest, parseInt(m[1], 10));
    });

    let seq = Math.max(Number(this.data.idSequences[key]) || 0, highest);
    let candidate;
    do {
      seq += 1;
      candidate = `${prefix}-${String(seq).padStart(padLength, '0')}`;
    } while (taken.has(candidate.toUpperCase()));

    this.data.idSequences[key] = seq;
    return candidate;
  }

  /** Unique customer ID. Also avoids IDs still referenced by sales. */
  _nextCustomerId() {
    const ids = [
      ...(this.data.customers || []).map(c => c && c.id),
      ...(this.data.sales || []).map(s => s && s.customerId)
    ].filter(id => /^CUST-/i.test(String(id || '')));
    return this._nextSequentialId('customer', 'CUST', ids, 2);
  }

  /** Unique sale / bill ID in the existing BILL-XXXX style. */
  _nextSaleId() {
    // Only plain BILL-<digits> IDs can collide with a generated ID, so only
    // they seed the counter; the sample data's BILL-2026-1042 style cannot.
    const ids = (this.data.sales || [])
      .map(s => s && (s.id || s.reference))
      .filter(id => /^BILL-\d+$/i.test(String(id || '')));
    return this._nextSequentialId('sale', 'BILL', ids, 4);
  }

  /**
   * Decide which customer a sale belongs to. Phone number is never used to
   * pick a customer: two people can share a household number.
   *
   *  1. An explicit customerId that still exists (and whose name matches what
   *     was entered) is used as-is.
   *  2. Otherwise an existing customer with the same name is reused. If more
   *     than one shares the name, the one with the same phone is preferred.
   *  3. Otherwise a new customer is created with a unique ID.
   *
   * Returns '' for walk-in customers.
   */
  _resolveSaleCustomer({ customerId = '', name = '', phone = '-' } = {}) {
    const custName = (name || '').trim();
    const custPhone = (phone || '-').trim() || '-';
    if (!custName || custName.toLowerCase() === 'walk-in customer') return '';
    if (!Array.isArray(this.data.customers)) this.data.customers = [];

    const lower = custName.toLowerCase();
    let customer = null;

    if (customerId) {
      const byId = this.data.customers.find(c => c.id === customerId);
      if (byId && (byId.name || '').trim().toLowerCase() === lower) customer = byId;
    }

    if (!customer) {
      const sameName = this.data.customers.filter(c => (c.name || '').trim().toLowerCase() === lower);
      if (sameName.length > 0) {
        customer = (custPhone !== '-' && sameName.find(c => c.phone === custPhone)) || sameName[0];
      }
    }

    if (!customer) {
      customer = {
        id: this._nextCustomerId(),
        name: custName,
        phone: custPhone,
        ordersCount: 0,
        lastPurchase: new Date().toISOString().split('T')[0],
        totalSpend: 0
      };
      this.data.customers.unshift(customer);
    } else if (custPhone !== '-' && (!customer.phone || customer.phone === '-')) {
      customer.phone = custPhone;
    }

    return customer.id;
  }

  getStoreInfo() {
    if (!this.data.storeInfo || typeof this.data.storeInfo !== 'object') {
      this.data.storeInfo = JSON.parse(JSON.stringify(emptyInitialData.storeInfo));
    }
    return this.data.storeInfo;
  }

  /**
   * Update editable store/owner details. Only known fields are accepted, and
   * the owner and store names must not be blank.
   */
  updateStoreInfo(payload = {}) {
    const info = this.getStoreInfo();
    const editable = ['name', 'branch', 'ownerName', 'ownerRole', 'phone', 'email', 'address'];

    const next = {};
    editable.forEach(k => {
      if (payload[k] !== undefined) next[k] = String(payload[k]).trim();
    });

    if (next.ownerName !== undefined && !next.ownerName) {
      throw new Error('Owner name cannot be empty.');
    }
    if (next.name !== undefined && !next.name) {
      throw new Error('Store name cannot be empty.');
    }
    if (next.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(next.email)) {
      throw new Error('Please enter a valid email address.');
    }

    Object.assign(info, next);
    this.save();
    return info;
  }

  getItemUnitCost(item, product = null) {
    if (!item) return 0;

    // 1. Snapshot on item
    if (item.purchasePrice !== undefined && item.purchasePrice !== null && Number(item.purchasePrice) > 0) {
      return Number(item.purchasePrice);
    }
    if (item.buyingPrice !== undefined && item.buyingPrice !== null && Number(item.buyingPrice) > 0) {
      return Number(item.buyingPrice);
    }

    // 2. Product lookup in catalog
    const prod = product || (this.data.products || []).find(p =>
      (item.productId && p.id === item.productId) ||
      (item.product && p.name && p.name.trim().toLowerCase() === item.product.trim().toLowerCase())
    );

    if (prod) {
      if (item.size && Array.isArray(prod.variants)) {
        const v = prod.variants.find(varnt => (varnt.size || 'Standard').trim().toUpperCase() === (item.size || 'Standard').trim().toUpperCase());
        if (v && (Number(v.purchasePrice) > 0 || Number(v.buyingPrice) > 0)) {
          return Number(v.purchasePrice || v.buyingPrice);
        }
      }
      if (Number(prod.purchasePrice) > 0 || Number(prod.buyingPrice) > 0) {
        return Number(prod.purchasePrice || prod.buyingPrice);
      }
    }

    // 3. Historical purchase orders lookup
    const purchases = this.data.purchases || [];
    for (const pur of purchases) {
      if (Array.isArray(pur.items)) {
        const match = pur.items.find(pi =>
          (item.productId && pi.productId === item.productId) ||
          (item.product && pi.product && pi.product.trim().toLowerCase() === item.product.trim().toLowerCase())
        );
        if (match && (Number(match.buyingPrice) > 0 || Number(match.price) > 0)) {
          return Number(match.buyingPrice || match.price);
        }
      }
    }

    return 0;
  }

  calculateSaleCogs(sale) {
    if (!sale || !Array.isArray(sale.items)) return 0;
    return sale.items.reduce((sum, item) => {
      const qty = Number(item.qty !== undefined ? item.qty : (item.quantity || 1)) || 0;
      const unitCost = this.getItemUnitCost(item);
      return sum + (qty * unitCost);
    }, 0);
  }

  /**
   * The single place that decides which sales belong to a customer. The
   * customers table, the customer view page and the stored metrics all read
   * it, so their totals can never disagree.
   *
   * A sale is matched by customerId. A legacy sale saved without one falls
   * back to an exact name match. Phone is deliberately NOT a fallback: two
   * customers can share a household number, which would count one sale twice.
   * Cancelled / Failed / Draft sales are never billed, so they are excluded.
   */
  getCustomerSales(customerOrId) {
    const cust = (typeof customerOrId === 'string')
      ? (this.data.customers || []).find(c => c.id === customerOrId)
      : customerOrId;
    if (!cust) return [];

    const name = (cust.name || '').trim().toLowerCase();
    return (this.data.sales || []).filter(s => {
      if (!s) return false;
      if (s.status === 'Cancelled' || s.status === 'Failed' || s.status === 'Draft') return false;
      if (s.customerId) return s.customerId === cust.id;
      return !!name && (s.customer || s.customerName || '').trim().toLowerCase() === name;
    });
  }

  /**
   * Billed vs collected for one customer.
   *
   * Every figure is derived from the sale payment ledger (amountPaid /
   * balanceDue), never from a status label — a "Partial" sale contributes
   * only the amount actually recorded against it, and a sale with no recorded
   * payment contributes zero however it is labelled.
   *
   * Outstanding is the sum of each sale's own balanceDue rather than
   * (purchases - paid) so that an overpayment on one sale cannot silently
   * cancel out a genuine due on another.
   */
  getCustomerPaymentSummary(customerOrId) {
    const sales = this.getCustomerSales(customerOrId);

    const rows = sales.map(s => {
      const total = this._money(Number(s.totalAmount) || 0);
      const paid = this._money(Number(s.amountPaid) || 0);
      const due = this._money(
        s.balanceDue !== undefined && s.balanceDue !== null
          ? Math.max(0, Number(s.balanceDue) || 0)
          : Math.max(0, total - paid)
      );
      return {
        id: s.id,
        reference: s.id || s.reference || '—',
        date: s.date || '',
        totalAmount: total,
        amountPaid: paid,
        balanceDue: due,
        status: s.status || 'Pending',
        needsReview: !!s.paymentsNeedReview,
        sale: s
      };
    });

    return {
      orders: rows.length,
      totalPurchases: this._money(rows.reduce((sum, r) => sum + r.totalAmount, 0)),
      totalPaid: this._money(rows.reduce((sum, r) => sum + r.amountPaid, 0)),
      outstanding: this._money(rows.reduce((sum, r) => sum + r.balanceDue, 0)),
      sales: rows
    };
  }

  recalculateCustomerMetrics() {
    if (!Array.isArray(this.data.customers)) this.data.customers = [];

    this.data.customers.forEach(c => {
      const summary = this.getCustomerPaymentSummary(c);

      c.ordersCount = summary.orders;
      c.totalSpend = summary.totalPurchases;
      // Billed vs collected, so a customer's dues are visible.
      c.totalPaid = summary.totalPaid;
      c.outstanding = summary.outstanding;

      if (summary.sales.length > 0) {
        const lastSale = summary.sales[0];
        c.lastPurchase = lastSale.date ? String(lastSale.date).split(',')[0] : c.lastPurchase;
      }
    });
  }

  getCategories() {
    const list = Array.isArray(this.data.categories) ? this.data.categories : [];
    const fromProds = (this.data.products || []).map(p => p.category).filter(Boolean);
    return Array.from(new Set([...list, ...fromProds])).sort();
  }

  addCategory(category) {
    const clean = (category || '').trim();
    if (!clean) return false;
    if (!Array.isArray(this.data.categories)) this.data.categories = [];
    if (this.data.categories.some(c => c.toLowerCase() === clean.toLowerCase())) {
      return false;
    }
    this.data.categories.push(clean);
    this.save();
    this.notify();
    return true;
  }

  checkCategoryUsage(category) {
    const clean = (category || '').trim();
    if (!clean) return { inUse: false, count: 0, details: '', summary: '' };
    const lower = clean.toLowerCase();

    // 1. Check products
    const products = (this.data.products || []).filter(p => {
      const pCat = (p.category || '').trim().toLowerCase();
      return pCat === lower;
    });

    // 2. Check purchases
    const purchases = (this.data.purchases || []).filter(pur => {
      return (pur.items || []).some(it => {
        if (it.category && it.category.trim().toLowerCase() === lower) return true;
        if (it.productId) {
          const matchedProd = (this.data.products || []).find(p => p.id === it.productId);
          if (matchedProd && (matchedProd.category || '').trim().toLowerCase() === lower) return true;
        }
        if (it.product) {
          const matchedProd = (this.data.products || []).find(p => p.name && p.name.trim().toLowerCase() === it.product.trim().toLowerCase());
          if (matchedProd && (matchedProd.category || '').trim().toLowerCase() === lower) return true;
        }
        return false;
      });
    });

    // 3. Check sales
    const sales = (this.data.sales || []).filter(sale => {
      return (sale.items || []).some(it => {
        if (it.category && it.category.trim().toLowerCase() === lower) return true;
        if (it.productId) {
          const matchedProd = (this.data.products || []).find(p => p.id === it.productId);
          if (matchedProd && (matchedProd.category || '').trim().toLowerCase() === lower) return true;
        }
        if (it.product) {
          const matchedProd = (this.data.products || []).find(p => p.name && p.name.trim().toLowerCase() === it.product.trim().toLowerCase());
          if (matchedProd && (matchedProd.category || '').trim().toLowerCase() === lower) return true;
        }
        return false;
      });
    });

    const parts = [];
    if (products.length > 0) {
      const prodNames = products.slice(0, 3).map(p => `"${escapeHtml(p.name)}"`).join(', ');
      const more = products.length > 3 ? ` and ${products.length - 3} more` : '';
      parts.push(`${products.length} product(s) (${prodNames}${more})`);
    }
    if (purchases.length > 0) {
      parts.push(`${purchases.length} purchase record(s)`);
    }
    if (sales.length > 0) {
      parts.push(`${sales.length} sales record(s)`);
    }

    const inUse = parts.length > 0;
    return {
      inUse,
      count: products.length + purchases.length + sales.length,
      productsCount: products.length,
      purchasesCount: purchases.length,
      salesCount: sales.length,
      details: parts.join(', '),
      summary: `${products.length} product(s), ${purchases.length} purchase(s), ${sales.length} sale(s)`
    };
  }

  deleteCategory(category) {
    const clean = (category || '').trim();
    if (!clean) return { success: false, error: 'Category name is required.' };
    const usage = this.checkCategoryUsage(clean);
    if (usage.inUse) {
      return {
        success: false,
        inUse: true,
        usage,
        error: `Cannot delete category "${clean}" because it is currently used by ${usage.details}. Deactivate or archive associated products instead.`
      };
    }
    const beforeCount = (this.data.categories || []).length;
    this.data.categories = (this.data.categories || []).filter(c => c.trim().toLowerCase() !== clean.toLowerCase());
    this.save();
    this.notify();
    return { success: true, removed: beforeCount !== this.data.categories.length };
  }

  getBrands() {
    const list = Array.isArray(this.data.brands) ? this.data.brands : [];
    const fromProds = (this.data.products || []).map(p => p.brand).filter(Boolean);
    return Array.from(new Set([...list, ...fromProds])).sort();
  }

  addBrand(brand) {
    const clean = (brand || '').trim();
    if (!clean) return false;
    if (!Array.isArray(this.data.brands)) this.data.brands = [];
    if (this.data.brands.some(b => b.toLowerCase() === clean.toLowerCase())) {
      return false;
    }
    this.data.brands.push(clean);
    this.save();
    this.notify();
    return true;
  }

  checkBrandUsage(brand) {
    const clean = (brand || '').trim();
    if (!clean) return { inUse: false, count: 0, details: '', summary: '' };
    const lower = clean.toLowerCase();

    // 1. Check products
    const products = (this.data.products || []).filter(p => {
      const pBrand = (p.brand || '').trim().toLowerCase();
      return pBrand === lower;
    });

    // 2. Check purchases
    const purchases = (this.data.purchases || []).filter(pur => {
      return (pur.items || []).some(it => {
        if (it.brand && it.brand.trim().toLowerCase() === lower) return true;
        if (it.productId) {
          const matchedProd = (this.data.products || []).find(p => p.id === it.productId);
          if (matchedProd && (matchedProd.brand || '').trim().toLowerCase() === lower) return true;
        }
        if (it.product) {
          const matchedProd = (this.data.products || []).find(p => p.name && p.name.trim().toLowerCase() === it.product.trim().toLowerCase());
          if (matchedProd && (matchedProd.brand || '').trim().toLowerCase() === lower) return true;
        }
        return false;
      });
    });

    // 3. Check sales
    const sales = (this.data.sales || []).filter(sale => {
      return (sale.items || []).some(it => {
        if (it.brand && it.brand.trim().toLowerCase() === lower) return true;
        if (it.productId) {
          const matchedProd = (this.data.products || []).find(p => p.id === it.productId);
          if (matchedProd && (matchedProd.brand || '').trim().toLowerCase() === lower) return true;
        }
        if (it.product) {
          const matchedProd = (this.data.products || []).find(p => p.name && p.name.trim().toLowerCase() === it.product.trim().toLowerCase());
          if (matchedProd && (matchedProd.brand || '').trim().toLowerCase() === lower) return true;
        }
        return false;
      });
    });

    const parts = [];
    if (products.length > 0) {
      const prodNames = products.slice(0, 3).map(p => `"${escapeHtml(p.name)}"`).join(', ');
      const more = products.length > 3 ? ` and ${products.length - 3} more` : '';
      parts.push(`${products.length} product(s) (${prodNames}${more})`);
    }
    if (purchases.length > 0) {
      parts.push(`${purchases.length} purchase record(s)`);
    }
    if (sales.length > 0) {
      parts.push(`${sales.length} sales record(s)`);
    }

    const inUse = parts.length > 0;
    return {
      inUse,
      count: products.length + purchases.length + sales.length,
      productsCount: products.length,
      purchasesCount: purchases.length,
      salesCount: sales.length,
      details: parts.join(', '),
      summary: `${products.length} product(s), ${purchases.length} purchase(s), ${sales.length} sale(s)`
    };
  }

  deleteBrand(brand) {
    const clean = (brand || '').trim();
    if (!clean) return { success: false, error: 'Brand name is required.' };
    const usage = this.checkBrandUsage(clean);
    if (usage.inUse) {
      return {
        success: false,
        inUse: true,
        usage,
        error: `Cannot delete brand "${clean}" because it is currently used by ${usage.details}. Deactivate or archive associated products instead.`
      };
    }
    const beforeCount = (this.data.brands || []).length;
    this.data.brands = (this.data.brands || []).filter(b => b.trim().toLowerCase() !== clean.toLowerCase());
    this.save();
    this.notify();
    return { success: true, removed: beforeCount !== this.data.brands.length };
  }

  getSizes() {
    const list = Array.isArray(this.data.sizes) ? this.data.sizes : [];
    const fromProds = [];
    (this.data.products || []).forEach(p => {
      (p.variants || []).forEach(v => {
        if (v.size && v.size !== 'Standard') fromProds.push(v.size);
      });
    });
    return Array.from(new Set([...list, ...fromProds]));
  }

  addSize(size) {
    const clean = (size || '').trim();
    if (!clean) return false;
    const formatted = clean.length <= 4 ? clean.toUpperCase() : clean;
    if (!Array.isArray(this.data.sizes)) this.data.sizes = [];
    if (this.data.sizes.some(s => s.toLowerCase() === clean.toLowerCase())) {
      return false;
    }
    this.data.sizes.push(formatted);
    this.save();
    this.notify();
    return true;
  }

  checkSizeUsage(size) {
    const clean = (size || '').trim();
    if (!clean) return { inUse: false, count: 0, details: '', summary: '' };
    const cleanLower = clean.toLowerCase();

    // 1. Check products & variants (including inventory)
    const products = [];
    let variantsCount = 0;
    let stockCount = 0;
    (this.data.products || []).forEach(p => {
      const matchedVariants = (p.variants || []).filter(v => (v.size || '').trim().toLowerCase() === cleanLower);
      if (matchedVariants.length > 0) {
        products.push(p);
        variantsCount += matchedVariants.length;
        matchedVariants.forEach(v => {
          stockCount += (Number(v.stock) || 0);
        });
      }
    });

    // 2. Check purchases
    const purchases = (this.data.purchases || []).filter(pur => {
      return (pur.items || []).some(it => {
        if (it.size && it.size.trim().toLowerCase() === cleanLower) return true;
        if (it.sku) {
          const matchedProd = (this.data.products || []).find(p => (p.variants || []).some(v => v.sku === it.sku && (v.size || '').trim().toLowerCase() === cleanLower));
          if (matchedProd) return true;
          if (it.sku.toLowerCase().endsWith('-' + cleanLower)) return true;
        }
        return false;
      });
    });

    // 3. Check sales
    const sales = (this.data.sales || []).filter(sale => {
      return (sale.items || []).some(it => {
        if (it.size && it.size.trim().toLowerCase() === cleanLower) return true;
        if (it.sku) {
          const matchedProd = (this.data.products || []).find(p => (p.variants || []).some(v => v.sku === it.sku && (v.size || '').trim().toLowerCase() === cleanLower));
          if (matchedProd) return true;
          if (it.sku.toLowerCase().endsWith('-' + cleanLower)) return true;
        }
        return false;
      });
    });

    const parts = [];
    if (products.length > 0) {
      const prodNames = products.slice(0, 3).map(p => `"${escapeHtml(p.name)}"`).join(', ');
      const more = products.length > 3 ? ` and ${products.length - 3} more` : '';
      parts.push(`${products.length} product(s) with ${stockCount} unit(s) in inventory (${prodNames}${more})`);
    }
    if (purchases.length > 0) {
      parts.push(`${purchases.length} purchase record(s)`);
    }
    if (sales.length > 0) {
      parts.push(`${sales.length} sales record(s)`);
    }

    const inUse = parts.length > 0;
    return {
      inUse,
      count: products.length + purchases.length + sales.length,
      productsCount: products.length,
      variantsCount,
      stockCount,
      purchasesCount: purchases.length,
      salesCount: sales.length,
      details: parts.join(', '),
      summary: `${products.length} product(s) (${stockCount} in stock), ${purchases.length} purchase(s), ${sales.length} sale(s)`
    };
  }

  deleteSize(size) {
    const clean = (size || '').trim();
    if (!clean) return { success: false, error: 'Size name is required.' };
    const usage = this.checkSizeUsage(clean);
    if (usage.inUse) {
      return {
        success: false,
        inUse: true,
        usage,
        error: `Cannot delete size "${clean}" because it is currently used by ${usage.details}. Deactivate or archive associated products instead.`
      };
    }
    const beforeCount = (this.data.sizes || []).length;
    this.data.sizes = (this.data.sizes || []).filter(s => s.trim().toLowerCase() !== clean.toLowerCase());
    this.save();
    this.notify();
    return { success: true, removed: beforeCount !== this.data.sizes.length };
  }

  getLowStockThreshold() {
    if (this.data && this.data.inventorySettings && this.data.inventorySettings.lowStockThreshold !== undefined) {
      const val = parseInt(this.data.inventorySettings.lowStockThreshold, 10);
      if (!isNaN(val) && val >= 1) return val;
    }
    return 5;
  }

  setLowStockThreshold(newThreshold) {
    const num = Number(newThreshold);
    if (!Number.isInteger(num) || num < 1) {
      return { success: false, error: 'Please enter a valid positive whole number (minimum 1).' };
    }
    if (!this.data.inventorySettings || typeof this.data.inventorySettings !== 'object') {
      this.data.inventorySettings = {};
    }
    this.data.inventorySettings.lowStockThreshold = num;
    this.save();
    return { success: true, threshold: num };
  }

  save() {
    try {
      localStorage.setItem('master_web_admin_data_v3', JSON.stringify(this.data));
    } catch (e) {
      console.warn('LocalStorage save error:', e);
    }
    this.notify();
  }

  clearDatabase() {
    this.data = JSON.parse(JSON.stringify(emptyInitialData));
    this.migrateAndRepairData();
    this.save();
    return true;
  }

  loadSampleData() {
    this.data = JSON.parse(JSON.stringify(sampleDemoData));
    this.migrateAndRepairData();
    this.save();
    return true;
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
    const products = this.data.products || [];
    const sales = this.data.sales || [];
    const purchases = this.data.purchases || [];
    const customers = this.data.customers || [];
    const threshold = this.getLowStockThreshold();

    let totalProducts = products.length;
    let activeProductsCount = 0;
    let archivedProductsCount = 0;

    let totalStock = 0;
    let activeStock = 0;
    let archivedStock = 0;

    let stockValue = 0;
    let activeStockValue = 0;
    let archivedStockValue = 0;

    let damagedStockCount = 0;
    let inStockCount = 0;
    let partialStockCount = 0;
    let lowStockCount = 0;
    let outOfStockCount = 0;

    let lowStockVariantsCount = 0;
    let outOfStockVariantsCount = 0;

    products.forEach(p => {
      const isArchived = (p.status === 'Archived');
      const isInactive = (p.status === 'Inactive');
      const isActive = !isArchived && !isInactive;

      if (isActive) activeProductsCount++;
      if (isArchived) archivedProductsCount++;

      const statusInfo = getProductStockStatus(p, threshold);
      if (isActive) {
        if (statusInfo.status === 'IN_STOCK') {
          inStockCount++;
        } else if (statusInfo.status === 'PARTIAL_STOCK') {
          partialStockCount++;
        } else if (statusInfo.status === 'LOW_STOCK') {
          lowStockCount++;
        } else if (statusInfo.status === 'OUT_OF_STOCK') {
          outOfStockCount++;
        }
      }

      const variants = (p.variants && p.variants.length > 0)
        ? p.variants
        : [{ size: 'Standard', stock: Number(p.totalStock || p.stock || 0), damaged: 0 }];

      variants.forEach(v => {
        const vStock = Math.max(0, Number(v.stock) || 0);
        const unitCost = Number(v.purchasePrice || v.buyingPrice || p.purchasePrice || p.buyingPrice || 0);
        const vVal = vStock * unitCost;

        totalStock += vStock;
        stockValue += vVal;
        damagedStockCount += Math.max(0, Number(v.damaged) || 0);

        if (isArchived) {
          archivedStock += vStock;
          archivedStockValue += vVal;
        } else if (isActive) {
          activeStock += vStock;
          activeStockValue += vVal;
          if (vStock === 0) {
            outOfStockVariantsCount++;
          } else if (vStock <= threshold) {
            lowStockVariantsCount++;
          }
        }
      });
    });

    const qualifyingSales = sales.filter(s => s && s.status !== 'Cancelled' && s.status !== 'Failed' && s.status !== 'Draft');
    const totalRevenue = qualifyingSales.reduce((sum, s) => sum + (Number(s.totalAmount) || 0), 0);
    const todaySales = totalRevenue;

    // Single Authoritative COGS, Units Sold, and Missing Cost Detection
    let totalCogs = 0;
    let totalUnitsSold = 0;
    let missingCostsCount = 0;
    const missingCostItems = [];

    qualifyingSales.forEach(s => {
      totalCogs += this.calculateSaleCogs(s);
      (s.items || []).forEach(it => {
        const itemQty = Number(it.qty !== undefined ? it.qty : (it.quantity || 1)) || 0;
        totalUnitsSold += itemQty;
        const itemUnitCost = this.getItemUnitCost(it);
        if (itemUnitCost === null || itemUnitCost === undefined || itemUnitCost === 0) {
          missingCostsCount++;
          missingCostItems.push({
            saleId: s.id,
            product: it.product || it.productName,
            size: it.size,
            qty: itemQty
          });
        }
      });
    });

    const hasMissingCosts = missingCostsCount > 0;
    const grossProfit = Math.max(0, totalRevenue - totalCogs);
    const marginPct = totalRevenue > 0 ? ((grossProfit / totalRevenue) * 100).toFixed(1) : '0.0';

    const qualifyingPurchases = purchases.filter(p => p && (p.status === 'Completed' || p.status === 'Received' || p.status === 'Partially Received'));
    const totalPurchases = qualifyingPurchases.reduce((sum, p) => sum + (Number(p.totalAmount || p.total) || 0), 0);

    // Calculate total confirmed received units across all purchases
    let purchasesUnitsReceived = 0;
    let purchasesOrderedUnits = 0;
    let purchasesCompletedCount = 0;

    purchases.forEach(p => {
      const isCompletedOrReceived = (p.status === 'Completed' || p.status === 'Received');
      if (isCompletedOrReceived) purchasesCompletedCount++;

      const itemsList = Array.isArray(p.items) ? p.items : [];
      let pRecUnits = 0;
      let pOrdUnits = 0;

      itemsList.forEach(it => {
        const ord = Math.max(0, Number(it.qty !== undefined ? it.qty : (it.received !== undefined ? it.received : 0)));
        pOrdUnits += ord;

        let rec = 0;
        if (isPurchaseWaiting(p.status)) {
          rec = 0;
        } else if (it.receivedQty !== undefined && it.receivedQty !== null) {
          rec = Math.max(0, Number(it.receivedQty) || 0);
        } else if (it.received !== undefined && it.received !== null) {
          rec = Math.max(0, Number(it.received) || 0);
        } else if (isCompletedOrReceived) {
          rec = ord;
        }
        pRecUnits += rec;
      });

      if (!isPurchaseWaiting(p.status)) {
        if (p.totalReceived !== undefined && Number(p.totalReceived) > 0) {
          pRecUnits = Math.max(pRecUnits, Number(p.totalReceived));
        } else if (p.receivedQuantity !== undefined && Number(p.receivedQuantity) > 0) {
          pRecUnits = Math.max(pRecUnits, Number(p.receivedQuantity));
        }
      } else {
        pRecUnits = 0;
      }

      purchasesUnitsReceived += pRecUnits;
      purchasesOrderedUnits += pOrdUnits;
    });

    return {
      todaySales,
      totalRevenue,
      totalCogs,
      grossProfit,
      marginPct,
      salesCount: qualifyingSales.length,
      qualifyingSalesCount: qualifyingSales.length,
      totalUnitsSold,
      totalProducts,
      activeProducts: activeProductsCount,
      archivedProducts: archivedProductsCount,
      totalStock,
      activeStock,
      archivedStock,
      lowStockCount,
      outOfStockCount,
      partialStockCount,
      inStockCount,
      lowStockVariantsCount,
      outOfStockVariantsCount,
      damagedStockCount,
      stockValue,
      inventoryValuation: stockValue,
      activeStockValue,
      archivedStockValue,
      totalPurchases,
      purchasesUnitsReceived,
      purchasesOrderedUnits,
      purchasesCount: purchases.length,
      purchasesCompletedCount,
      totalCustomers: customers.length,
      hasMissingCosts,
      missingCostsCount,
      missingCostItems
    };
  }

  saveProductDefinition(payload) {
    // Saves product definition ONLY (does not create purchase or add stock)
    let product = (this.data.products || []).find(p => p.name.toLowerCase() === payload.productName.toLowerCase());

    const buyPrice = payload.purchasePrice !== undefined ? payload.purchasePrice : 0;
    const sellPrice = payload.sellingPrice !== undefined ? payload.sellingPrice : 0;

    let parsedSizes = [];
    if (Array.isArray(payload.sizes) && payload.sizes.length > 0) {
      parsedSizes = payload.sizes;
    } else if (typeof payload.sizes === 'string' && payload.sizes.trim()) {
      parsedSizes = payload.sizes.split(',').map(s => s.trim()).filter(Boolean);
    }
    if (parsedSizes.length === 0) parsedSizes = ['Standard'];

    if (!product) {
      const newProdId = `PROD-${Date.now().toString().slice(-4)}-${Math.floor(Math.random()*100)}`;
      product = {
        id: newProdId,
        name: payload.productName,
        category: payload.category || 'General',
        brand: payload.brand || 'Unbranded',
        description: payload.description || '',
        purchasePrice: buyPrice,
        sellingPrice: sellPrice,
        status: 'Active',
        minStock: 5,
        variants: parsedSizes.map(sz => ({
          size: sz,
          stock: 0,
          damaged: 0,
          purchasePrice: buyPrice,
          sellingPrice: sellPrice
        })),
        totalStock: 0,
        createdAt: new Date().toISOString()
      };
      this.data.products.unshift(product);
    } else {
      if (payload.category) product.category = payload.category;
      if (payload.brand) product.brand = payload.brand;
      if (payload.description) product.description = payload.description;
      if (payload.purchasePrice !== undefined) product.purchasePrice = buyPrice;
      if (payload.sellingPrice !== undefined) product.sellingPrice = sellPrice;

      if (!product.variants || product.variants.length === 0) {
        product.variants = parsedSizes.map(sz => ({
          size: sz,
          stock: 0,
          damaged: 0,
          purchasePrice: buyPrice,
          sellingPrice: sellPrice
        }));
      } else {
        parsedSizes.forEach(sz => {
          if (!product.variants.some(v => v.size.toLowerCase() === sz.toLowerCase())) {
            product.variants.push({
              size: sz,
              stock: 0,
              damaged: 0,
              purchasePrice: buyPrice,
              sellingPrice: sellPrice
            });
          }
        });
        if (parsedSizes.some(s => s !== 'Standard')) {
          product.variants = product.variants.filter(v => v.size !== 'Standard' || v.stock > 0);
        }
      }
    }

    if (!product.variants || product.variants.length === 0) {
      product.variants = [
        { size: 'Standard', stock: 0, damaged: 0, purchasePrice: buyPrice, sellingPrice: sellPrice }
      ];
    } else {
      product.variants.forEach(v => {
        if (buyPrice > 0 && (!v.purchasePrice || v.purchasePrice === 0)) v.purchasePrice = buyPrice;
        if (sellPrice > 0 && (!v.sellingPrice || v.sellingPrice === 0)) v.sellingPrice = sellPrice;
      });
    }

    this.save();
    return { product };
  }

  saveProductAndReceiveStock(payload) {
    // payload: { productName, category, brand, description, hasSizes, pricingMethod, pricingValue, supplier, purchaseDate, notes, items: [...], totalUnits, totalCost, estimatedSellingValue, estimatedGrossProfit }
    let product = (this.data.products || []).find(p => p.name.toLowerCase() === payload.productName.toLowerCase());

    if (!product) {
      const newProdId = `PROD-${Date.now().toString().slice(-4)}-${Math.floor(Math.random()*100)}`;
      product = {
        id: newProdId,
        name: payload.productName,
        category: payload.category || 'General',
        brand: payload.brand || 'Unbranded',
        description: payload.description || '',
        status: 'Active',
        minStock: 5,
        variants: [],
        totalStock: 0,
        createdAt: new Date().toISOString()
      };
      this.data.products.unshift(product);
    } else {
      if (payload.category) product.category = payload.category;
      if (payload.brand) product.brand = payload.brand;
      if (payload.description) product.description = payload.description;
    }

    if (!product.variants) product.variants = [];

    (payload.items || []).forEach(item => {
      const targetSize = payload.hasSizes ? (item.size || 'Standard') : 'Standard';
      let variant = product.variants.find(v => v.size === targetSize);

      if (!variant) {
        variant = {
          size: targetSize,
          stock: 0,
          purchasePrice: item.buyingPrice || 0,
          sellingPrice: item.sellingPrice || 0,
          damaged: 0
        };
        product.variants.push(variant);
      }

      variant.stock = (variant.stock || 0) + item.qty;
      variant.purchasePrice = item.buyingPrice || variant.purchasePrice || 0;
      variant.sellingPrice = item.sellingPrice || variant.sellingPrice || 0;
    });

    if (product.variants.length > 0) {
      product.sellingPrice = product.variants[0].sellingPrice || (payload.items[0] ? payload.items[0].sellingPrice : null);
      product.purchasePrice = product.variants[0].purchasePrice || (payload.items[0] ? payload.items[0].buyingPrice : 0);
    }

    product.totalStock = product.variants.reduce((sum, v) => sum + (v.stock || 0), 0);

    const purchaseRecord = {
      id: `PUR-${Date.now().toString().slice(-4)}`,
      supplier: payload.supplier || 'General Supplier',
      date: payload.purchaseDate || new Date().toISOString().split('T')[0],
      notes: payload.notes || '',
      productName: product.name,
      productCount: payload.items.length,
      totalQuantity: payload.totalUnits,
      totalAmount: payload.totalCost,
      estimatedSellingValue: payload.estimatedSellingValue,
      estimatedGrossProfit: payload.estimatedGrossProfit,
      status: 'Completed',
      items: payload.items.map(i => ({
        size: i.size || 'Standard',
        qty: i.qty,
        buyingPrice: i.buyingPrice,
        totalCost: i.totalCost,
        sellingPrice: i.sellingPrice,
        totalValue: i.totalValue
      }))
    };

    this.data.purchases.unshift(purchaseRecord);

    if (!Array.isArray(this.data.stockMovements)) this.data.stockMovements = [];
    (payload.items || []).forEach(item => {
      this.data.stockMovements.unshift({
        id: `MOV-${Date.now().toString().slice(-4)}-${Math.floor(Math.random()*100)}`,
        date: new Date().toLocaleString(),
        product: product.name,
        sku: `${product.name.slice(0,3).toUpperCase()}-${item.size || 'STD'}`,
        type: 'Stock In',
        quantity: item.qty,
        reference: purchaseRecord.id,
        user: 'Manager'
      });
    });

    this.save();
    return { product, purchase: purchaseRecord };
  }

  savePurchaseDraft(payload, existingId = null) {
    // Saves purchase as Draft WITHOUT updating inventory stock
    let totalQty = 0;
    let totalAmount = 0;
    const itemRecords = [];
    const newlyCreatedThisRun = [];

    const findMatch = (list, name, brand, cat, reqId) => {
      if (reqId) {
        const byId = list.find(p => p.id === reqId);
        if (byId) return byId;
      }
      if (!name) return null;
      const cleanName = name.trim().toLowerCase();
      const cleanBrand = (brand || '').trim().toLowerCase();
      const cleanCat = (cat || '').trim().toLowerCase();

      const candidates = list.filter(p => p.name && p.name.trim().toLowerCase() === cleanName);
      if (candidates.length === 0) return null;

      if (candidates.length === 1) {
        const cand = candidates[0];
        const candBrand = (cand.brand || '').trim().toLowerCase();
        // Confident match if user provided same brand, or one/both have no brand/generic/unbranded
        if (!cleanBrand || !candBrand || candBrand === 'generic' || candBrand === 'unbranded' || candBrand === cleanBrand) {
          return cand;
        }
        return null;
      }

      if (cleanBrand) {
        const brandMatch = candidates.find(p => (p.brand || '').trim().toLowerCase() === cleanBrand);
        if (brandMatch) return brandMatch;
      }

      if (cleanCat) {
        const catMatch = candidates.find(p => (p.category || '').trim().toLowerCase() === cleanCat);
        if (catMatch) return catMatch;
      }

      return candidates[0];
    };

    (payload.items || []).forEach(item => {
      const q = parseInt(item.qty, 10) || 0;
      const buyPrice = parseFloat(item.buyingPrice) || 0;
      const sellPrice = parseFloat(item.sellingPrice) || 0;
      const lineCost = q * buyPrice;

      totalQty += q;
      totalAmount += lineCost;

      const prodName = (item.productName || item.product || '').trim();
      let enteredCat = (item.category || '').trim();
      let enteredBrand = (item.brand || '').trim();

      // Normalize category casing or register custom category
      if (enteredCat && Array.isArray(this.data.categories)) {
        const catMatch = this.data.categories.find(c => c.trim().toLowerCase() === enteredCat.toLowerCase());
        if (catMatch) {
          enteredCat = catMatch;
        } else {
          this.data.categories.push(enteredCat);
        }
      }
      if (enteredBrand && Array.isArray(this.data.brands)) {
        const brandMatch = this.data.brands.find(b => b.trim().toLowerCase() === enteredBrand.toLowerCase());
        if (brandMatch) {
          enteredBrand = brandMatch;
        } else {
          this.data.brands.push(enteredBrand);
        }
      }

      // 1. Check if a product with this name + brand was created during this save
      let foundProd = findMatch(newlyCreatedThisRun, prodName, enteredBrand, enteredCat, item.productId);

      // 2. Check existing catalog products
      if (!foundProd) {
        foundProd = findMatch(this.data.products || [], prodName, enteredBrand, enteredCat, item.productId);
      }

      // 3. If no confident match, create ONE authoritative product record
      if (!foundProd && prodName) {
        const newProdId = `PROD-${Date.now().toString().slice(-4)}-${Math.floor(Math.random() * 900 + 100)}`;
        foundProd = {
          id: newProdId,
          name: prodName,
          category: enteredCat || 'General',
          brand: enteredBrand || 'Generic',
          description: item.description || '',
          purchasePrice: buyPrice || 0,
          sellingPrice: sellPrice || 0,
          minStock: 5,
          status: 'Active',
          variants: [],
          totalStock: 0,
          createdAt: new Date(Date.now() + (newlyCreatedThisRun.length * 20)).toISOString()
        };
        if (!Array.isArray(this.data.products)) this.data.products = [];
        this.data.products.unshift(foundProd);
        newlyCreatedThisRun.push(foundProd);
      }

      let prodVariantId = item.variantId || '';
      let prodSku = item.sku || '';

      if (foundProd) {
        if (enteredCat && (!foundProd.category || foundProd.category === 'General')) {
          foundProd.category = enteredCat;
        }
        if (enteredBrand && (!foundProd.brand || foundProd.brand === 'Generic')) {
          foundProd.brand = enteredBrand;
        }
        if (buyPrice > 0 && (!foundProd.purchasePrice || foundProd.purchasePrice === 0)) {
          foundProd.purchasePrice = buyPrice;
        }
        if (sellPrice > 0 && (!foundProd.sellingPrice || foundProd.sellingPrice === 0)) {
          foundProd.sellingPrice = sellPrice;
        }

        // Register size variant on the product definition with initial stock 0
        if (!Array.isArray(foundProd.variants)) foundProd.variants = [];
        const targetSize = (item.size || 'Standard').trim();
        let matchingVar = foundProd.variants.find(v => (v.size || 'Standard').trim().toUpperCase() === targetSize.toUpperCase());
        if (!matchingVar) {
          const varId = `VAR-${Date.now().toString().slice(-4)}-${Math.floor(Math.random() * 9000 + 1000)}`;
          const genSku = item.sku || `${(foundProd.name || 'PRD').slice(0, 3).toUpperCase()}-${targetSize.replace(/\s+/g, '')}`;
          matchingVar = {
            id: varId,
            size: targetSize,
            sku: genSku,
            stock: 0, // DRAFT DOES NOT INCREASE STOCK
            damaged: 0,
            purchasePrice: buyPrice || 0,
            sellingPrice: sellPrice || 0
          };
          foundProd.variants.push(matchingVar);
        } else {
          // If variant already existed, update prices if missing/zero
          if (buyPrice > 0 && (!matchingVar.purchasePrice || matchingVar.purchasePrice === 0)) {
            matchingVar.purchasePrice = buyPrice;
          }
          if (sellPrice > 0 && (!matchingVar.sellingPrice || matchingVar.sellingPrice === 0)) {
            matchingVar.sellingPrice = sellPrice;
          }
        }

        // Clean up any dummy Standard variant with 0 stock if specific sizes are entered
        if (targetSize.toUpperCase() !== 'STANDARD' && foundProd.variants.length > 1) {
          foundProd.variants = foundProd.variants.filter(v => (v.size || '').toUpperCase() !== 'STANDARD' || (Number(v.stock) || 0) > 0);
        }

        // Recalculate parent product total stock from variant stocks
        foundProd.totalStock = foundProd.variants.reduce((sum, v) => sum + (Number(v.stock) || 0), 0);
        foundProd.stock = foundProd.totalStock;

        // Link item records
        prodVariantId = matchingVar.id || prodVariantId;
        prodSku = matchingVar.sku || prodSku;
      }

      const prodId = foundProd ? foundProd.id : (item.productId || '');

      itemRecords.push({
        productId: prodId,
        variantId: prodVariantId,
        sku: prodSku,
        product: prodName || (foundProd ? foundProd.name : 'Standard Item'),
        category: enteredCat || (foundProd ? foundProd.category : 'General'),
        brand: enteredBrand || (foundProd ? foundProd.brand : 'Generic'),
        size: (item.size || 'Standard').trim(),
        qty: q,
        buyingPrice: buyPrice,
        sellingPrice: sellPrice,
        totalCost: lineCost,
        receivedQty: item.receivedQty || 0
      });
    });

    let purchaseRecord;
    if (existingId) {
      purchaseRecord = (this.data.purchases || []).find(p => p.id === existingId);
      if (purchaseRecord) {
        purchaseRecord.supplier = payload.supplier;
        purchaseRecord.date = payload.date;
        purchaseRecord.notes = payload.notes || '';
        purchaseRecord.items = itemRecords;
        purchaseRecord.productCount = itemRecords.length;
        purchaseRecord.totalQuantity = totalQty;
        purchaseRecord.totalAmount = totalAmount;
        purchaseRecord.totalReceived = (purchaseRecord.items || []).reduce((s, it) => s + (Number(it.receivedQty) || 0), 0);
        purchaseRecord.receivedQuantity = purchaseRecord.totalReceived;
      }
    }

    if (!purchaseRecord) {
      let seq = Date.now().toString().slice(-4);
      let newId = `PUR-${seq}`;
      let counter = 1;
      while ((this.data.purchases || []).some(p => p.id === newId)) {
        newId = `PUR-${seq}-${counter++}`;
      }
      purchaseRecord = {
        id: newId,
        supplier: payload.supplier || 'General Supplier',
        date: payload.date || new Date().toISOString().split('T')[0],
        notes: payload.notes || '',
        productCount: itemRecords.length,
        totalQuantity: totalQty,
        totalAmount: totalAmount,
        status: PURCHASE_STATUS_WAITING,
        totalReceived: 0,
        receivedQuantity: 0,
        items: itemRecords,
        receiptHistory: []
      };
      if (!Array.isArray(this.data.purchases)) this.data.purchases = [];
      this.data.purchases.unshift(purchaseRecord);
    }

    this.save();
    return purchaseRecord;
  }

  /**
   * Save a purchase AND receive its full ordered quantity in one step.
   * Used by the "Received Product" button on the Add Purchase page.
   *
   * Stock moves exactly once: receivePurchaseStock() is the only thing that
   * touches inventory, and it refuses a purchase that is already received.
   */
  savePurchaseAndReceive(payload, existingId = null) {
    const purchase = this.savePurchaseDraft(payload, existingId);

    const receiveMap = {};
    (purchase.items || []).forEach((item, idx) => {
      receiveMap[item.id || idx] = Number(item.qty) || 0;
    });

    return this.receivePurchaseStock(
      purchase.id,
      receiveMap,
      payload.date || purchase.date,
      payload.notes || ''
    );
  }

  receivePurchaseStock(purchaseId, receivedQuantitiesMap, receiptDate, notes = '') {
    const purchase = (this.data.purchases || []).find(p => p.id === purchaseId);
    if (!purchase) throw new Error('Purchase not found');
    // No approval step: a purchase waiting for receipt can be received
    // directly. Receiving twice is still refused, so stock moves only once.
    if (!isPurchaseReceivable(purchase.status)) {
      if (isPurchaseReceived(purchase.status)) {
        throw new Error(`Purchase order ${purchaseId} has already been received.`);
      }
      throw new Error(`This purchase cannot be received (current status: ${purchase.status})`);
    }

    if (!this._receivingLocks) this._receivingLocks = new Set();
    if (this._receivingLocks.has(purchaseId)) {
      throw new Error(`A stock receiving operation is already in progress for purchase ${purchaseId}.`);
    }

    this._receivingLocks.add(purchaseId);

    try {
      // 1. Pre-validation phase (All-or-Nothing / Transaction Safety)
      const itemsToProcess = [];
      let totalNewlyReceived = 0;

      const itemsList = Array.isArray(purchase.items) ? purchase.items : [];
      if (itemsList.length === 0) {
        throw new Error('Purchase order contains no items to receive.');
      }

      for (let index = 0; index < itemsList.length; index++) {
        const item = itemsList[index];
        const rawRequested = (receivedQuantitiesMap !== undefined && receivedQuantitiesMap !== null && receivedQuantitiesMap[index] !== undefined)
          ? receivedQuantitiesMap[index]
          : 0;
        const requested = parseInt(rawRequested, 10) || 0;

        if (requested < 0) {
          throw new Error(`Received quantity cannot be negative for item ${index + 1} (${item.product || 'Product'}).`);
        }

        const ordered = Math.max(0, Number(item.qty !== undefined ? item.qty : (item.received || 0)));
        const alreadyRec = Math.max(0, Number(item.receivedQty !== undefined ? item.receivedQty : (item.received !== undefined && (purchase.status === 'Received' || purchase.status === 'Completed') ? ordered : 0)));
        const outstanding = Math.max(0, ordered - alreadyRec);

        if (requested > outstanding) {
          throw new Error(`Cannot receive ${requested} units for "${item.product || 'item'}". Maximum outstanding balance is ${outstanding} units.`);
        }

        if (requested > 0) {
          // Authoritative Product Lookup: Match by ID first, then SKU, then normalized name
          let product = null;
          if (item.productId) {
            product = (this.data.products || []).find(p => p.id === item.productId);
          }
          if (!product && item.sku) {
            product = (this.data.products || []).find(p => (p.variants || []).some(v => v.sku && v.sku.toLowerCase() === item.sku.toLowerCase()));
          }
          if (!product && item.product) {
            const cleanName = item.product.trim().toLowerCase();
            product = (this.data.products || []).find(p => p.name && p.name.trim().toLowerCase() === cleanName);
          }

          if (!product) {
            throw new Error(`Product "${item.product || item.productId || 'Unknown'}" not found in inventory. Stock intake cannot proceed without an authoritative product record.`);
          }

          totalNewlyReceived += requested;
          itemsToProcess.push({
            item,
            index,
            product,
            requested,
            alreadyRec,
            ordered
          });
        }
      }

      if (totalNewlyReceived <= 0) {
        throw new Error('Please enter at least 1 unit to receive.');
      }

      // 2. Execution phase — Apply inventory updates accurately
      const receiptEventItems = [];

      itemsToProcess.forEach(({ item, product, requested, alreadyRec }) => {
        item.receivedQty = alreadyRec + requested;

        if (!Array.isArray(product.variants) || product.variants.length === 0) {
          product.variants = [{
            size: item.size || 'Standard',
            stock: Number(product.stock || product.totalStock) || 0,
            damaged: 0,
            purchasePrice: Number(item.buyingPrice || item.price || product.purchasePrice || 0),
            sellingPrice: product.sellingPrice || null
          }];
        }

        const targetSize = (item.size || 'Standard').trim().toUpperCase();
        let variant = null;

        // Match by variantId if available
        if (item.variantId) {
          variant = product.variants.find(v => v.id === item.variantId);
        }
        // Match by SKU if available
        if (!variant && item.sku) {
          variant = product.variants.find(v => v.sku && v.sku.toLowerCase() === item.sku.toLowerCase());
        }
        // Match by normalized size
        if (!variant) {
          variant = product.variants.find(v => (v.size || 'Standard').trim().toUpperCase() === targetSize);
        }

        // If variant doesn't exist on this product, safely create it on the existing product record
        if (!variant) {
          const varId = `VAR-${Date.now().toString().slice(-4)}-${Math.floor(Math.random() * 900 + 100)}`;
          variant = {
            id: varId,
            size: item.size || 'Standard',
            sku: item.sku || (product.name ? `${product.name.slice(0, 3).toUpperCase()}-${targetSize.replace(/\s+/g, '')}` : ''),
            stock: 0,
            damaged: 0,
            purchasePrice: Number(item.buyingPrice || item.price || product.purchasePrice || 0),
            sellingPrice: product.sellingPrice || null
          };
          product.variants.push(variant);
        }

        // Add actual received quantity
        variant.stock = Math.max(0, Number(variant.stock) || 0) + requested;

        // Update product category and brand if provided
        if (item.category && item.category.trim() && (!product.category || product.category === 'General')) {
          product.category = item.category.trim();
        }
        if (item.brand && item.brand.trim() && (!product.brand || product.brand === 'Generic')) {
          product.brand = item.brand.trim();
        }

        // Update purchase / cost price if positive
        const bPrice = Number(item.buyingPrice || item.price || 0);
        if (bPrice > 0) {
          variant.purchasePrice = bPrice;
          product.purchasePrice = bPrice;
        }

        // Update selling price if positive
        const sPrice = Number(item.sellingPrice || 0);
        if (sPrice > 0) {
          variant.sellingPrice = sPrice;
          if (!product.sellingPrice || product.sellingPrice === 0) {
            product.sellingPrice = sPrice;
          }
        }

        // Recalculate parent product total available stock directly from size-wise quantities
        product.totalStock = product.variants.reduce((sum, v) => sum + (Number(v.stock) || 0), 0);
        product.stock = product.totalStock;

        // Log Stock Movement
        if (!Array.isArray(this.data.stockMovements)) this.data.stockMovements = [];
        const movementSku = variant.sku || item.sku || `${(product.name || 'PRD').slice(0, 3).toUpperCase()}-${variant.size || 'STD'}`;
        this.data.stockMovements.unshift({
          id: `MOV-${Date.now().toString().slice(-4)}-${Math.floor(Math.random() * 1000)}`,
          date: receiptDate || new Date().toLocaleString(),
          product: product.name,
          productId: product.id,
          size: variant.size || item.size || 'Standard',
          sku: movementSku,
          type: 'Stock In',
          quantity: requested,
          reference: purchase.id,
          user: 'Manager'
        });

        receiptEventItems.push({
          productId: product.id,
          product: product.name,
          size: variant.size || item.size || 'Standard',
          quantityReceived: requested
        });
      });

      // 3. Purchase status, totals, and receipt history update
      const totalOrdered = itemsList.reduce((s, i) => s + Math.max(0, Number(i.qty !== undefined ? i.qty : (i.received || 0))), 0);
      const totalReceivedAll = itemsList.reduce((s, i) => s + Math.max(0, Number(i.receivedQty !== undefined ? i.receivedQty : (i.received || 0))), 0);

      purchase.totalReceived = totalReceivedAll;
      purchase.receivedQuantity = totalReceivedAll;

      if (totalReceivedAll >= totalOrdered) {
        purchase.status = 'Received';
        purchase.receivedAt = receiptDate || new Date().toISOString();
      } else {
        purchase.status = 'Partially Received';
      }

      if (!Array.isArray(purchase.receiptHistory)) purchase.receiptHistory = [];
      purchase.receiptHistory.unshift({
        date: receiptDate || new Date().toISOString().split('T')[0],
        totalReceived: totalNewlyReceived,
        notes: notes || '',
        items: receiptEventItems
      });

      // 4. Authoritative persistence & reactive UI broadcast
      this.save();
      return purchase;
    } finally {
      this._receivingLocks.delete(purchaseId);
    }
  }

  deleteDraftPurchase(purchaseId) {
    const purchase = (this.data.purchases || []).find(p => p.id === purchaseId);
    if (!purchase) throw new Error('Purchase not found');
    if (!isPurchaseWaiting(purchase.status)) throw new Error('Only purchases waiting for receipt can be deleted this way');
    return this.deletePurchase(purchaseId);
  }

  deletePurchase(purchaseId) {
    const purchase = (this.data.purchases || []).find(p => p.id === purchaseId);
    if (!purchase) throw new Error('Purchase not found');

    const itemsList = Array.isArray(purchase.items) ? purchase.items : [];
    const totalReceivedAll = itemsList.reduce((s, i) => s + Math.max(0, Number(i.receivedQty !== undefined ? i.receivedQty : (i.received || 0))), 0);
    const hasReceivedStock = totalReceivedAll > 0 || purchase.status === 'Received' || purchase.status === 'Partially Received' || purchase.status === 'Completed';

    if (hasReceivedStock) {
      if (!Array.isArray(this.data.stockMovements)) this.data.stockMovements = [];

      itemsList.forEach(item => {
        const receivedQty = Math.max(0, Number(item.receivedQty !== undefined ? item.receivedQty : (item.received || 0)));
        if (receivedQty > 0) {
          const product = (this.data.products || []).find(p =>
            p.id === item.productId ||
            (p.name && item.product && p.name.trim().toLowerCase() === item.product.trim().toLowerCase()) ||
            (p.name && item.productName && p.name.trim().toLowerCase() === item.productName.trim().toLowerCase())
          );

          if (product) {
            let variant = null;
            let extractedSize = item.size || '';
            if (!extractedSize && item.sku) {
              const parts = String(item.sku).split('-');
              if (parts.length > 1) extractedSize = parts[parts.length - 1];
            }
            const targetSize = (extractedSize || 'Standard').trim().toUpperCase();

            if (item.sku) {
              variant = (product.variants || []).find(v => v.sku && v.sku.toUpperCase() === item.sku.toUpperCase());
            }
            if (!variant) {
              variant = (product.variants || []).find(v => (v.size || 'Standard').trim().toUpperCase() === targetSize);
            }
            if (!variant && Array.isArray(product.variants) && product.variants.length > 0) {
              variant = product.variants[0];
            }

            const currentStock = variant ? Number(variant.stock || 0) : Number(product.totalStock || product.stock || 0);
            const actualReversed = Math.min(currentStock, receivedQty);
            const discrepancy = receivedQty - actualReversed;

            if (variant) {
              variant.stock = Math.max(0, currentStock - receivedQty);
            } else {
              product.totalStock = Math.max(0, currentStock - receivedQty);
            }

            if (Array.isArray(product.variants) && product.variants.length > 0) {
              product.totalStock = product.variants.reduce((sum, v) => sum + (Number(v.stock) || 0), 0);
            }
            product.stock = product.totalStock;

            this.data.stockMovements.unshift({
              id: `MOV-REV-${Date.now().toString().slice(-4)}-${Math.floor(Math.random() * 100)}`,
              date: new Date().toLocaleString(),
              product: item.product || product.name,
              productId: product.id,
              size: item.size || 'Standard',
              sku: (variant && variant.sku) ? variant.sku : `${(item.product || product.name || 'PRD').slice(0, 3).toUpperCase()}-${targetSize}`,
              type: 'Purchase Cancelled / Reversal',
              quantity: -actualReversed,
              reference: purchase.id,
              user: 'Admin',
              notes: discrepancy > 0
                ? `Reversed ${actualReversed} units from physical stock. Discrepancy noted: ${discrepancy} units were previously consumed/sold before purchase deletion.`
                : `Reversed ${actualReversed} units from physical stock upon purchase deletion.`
            });
          }
        }
      });
    }

    this.data.purchases = this.data.purchases.filter(p => p.id !== purchaseId);
    this.save();
    return true;
  }


  normalizePurchaseItem(it, purchaseStatus = PURCHASE_STATUS_WAITING) {
    if (!it) return null;
    const pName = (it.product || it.productName || '').trim();
    const productsList = this.data.products || [];

    // Authoritative product lookup
    let matchedProd = null;
    if (it.productId) {
      matchedProd = productsList.find(p => p.id === it.productId);
    }
    if (!matchedProd && pName) {
      matchedProd = productsList.find(p => p.name && p.name.trim().toLowerCase() === pName.toLowerCase());
    }
    if (!matchedProd && it.sku) {
      matchedProd = productsList.find(p => (p.variants || []).some(v => v.sku && v.sku.toUpperCase() === it.sku.toUpperCase()));
    }

    // Authoritative size extraction
    let resolvedSize = (it.size || '').trim();
    if (!resolvedSize && it.sku) {
      const parts = String(it.sku).split('-');
      if (parts.length > 1) resolvedSize = parts[parts.length - 1];
    }
    if (!resolvedSize && matchedProd && Array.isArray(matchedProd.variants) && matchedProd.variants.length > 0) {
      resolvedSize = matchedProd.variants[0].size || 'Standard';
    }
    if (!resolvedSize) resolvedSize = 'Standard';

    // Quantity resolution
    const qty = Number(it.qty !== undefined ? it.qty : (it.received !== undefined ? it.received : (it.good || 1))) || 0;

    // Received quantity resolution
    const isReceived = purchaseStatus === 'Received' || purchaseStatus === 'Completed';
    let receivedQty = 0;
    if (it.receivedQty !== undefined && it.receivedQty !== null) {
      receivedQty = Number(it.receivedQty) || 0;
    } else if (it.received !== undefined && it.received !== null) {
      receivedQty = Number(it.received) || 0;
    } else if (isReceived) {
      receivedQty = qty;
    }

    // Buying price resolution
    const buyingPrice = Number(it.buyingPrice !== undefined ? it.buyingPrice : (it.price !== undefined ? it.price : (matchedProd ? matchedProd.purchasePrice : 0))) || 0;

    // Selling price resolution
    let sellingPrice = Number(it.sellingPrice !== undefined ? it.sellingPrice : 0) || 0;
    if (!sellingPrice && matchedProd) {
      const v = (matchedProd.variants || []).find(v => (v.size || 'Standard').toUpperCase() === resolvedSize.toUpperCase());
      sellingPrice = (v && v.sellingPrice) ? v.sellingPrice : (matchedProd.sellingPrice || 0);
    }

    const prodId = matchedProd ? matchedProd.id : (it.productId || '');
    const finalProdName = matchedProd ? matchedProd.name : pName;
    const brand = (it.brand || (matchedProd ? matchedProd.brand : 'ClassicFit')).trim();
    const category = (it.category || (matchedProd ? matchedProd.category : 'Shirts')).trim();
    const sku = it.sku || (matchedProd ? `${(finalProdName || 'PRD').slice(0, 3).toUpperCase()}-${resolvedSize}` : '');

    return {
      productId: prodId,
      product: finalProdName,
      productName: finalProdName,
      category,
      brand,
      size: resolvedSize,
      sku,
      qty,
      receivedQty,
      buyingPrice,
      sellingPrice,
      totalCost: qty * buyingPrice
    };
  }


  updatePurchase(purchaseId, updatedPayload) {
    const purchase = (this.data.purchases || []).find(p => p.id === purchaseId);
    if (!purchase) throw new Error('Purchase order not found.');

    if (!updatedPayload || !Array.isArray(updatedPayload.items) || updatedPayload.items.length === 0) {
      throw new Error('Purchase must contain at least one product item.');
    }

    const supplier = (updatedPayload.supplier || purchase.supplier || '').trim();
    if (!supplier) throw new Error('Supplier name is required.');
    const date = updatedPayload.date || purchase.date || new Date().toISOString().split('T')[0];
    const notes = updatedPayload.notes !== undefined ? updatedPayload.notes : (purchase.notes || '');

    const oldStatus = purchase.status || PURCHASE_STATUS_WAITING;
    const oldItemsRaw = Array.isArray(purchase.items) ? purchase.items : [];
    const isReceivedOrPartial = oldStatus === 'Received' || oldStatus === 'Completed' || oldStatus === 'Partially Received';

    // Authoritative normalization of old items
    const oldItems = oldItemsRaw.map(it => this.normalizePurchaseItem(it, oldStatus));

    // Authoritative normalization of new items
    const newItems = updatedPayload.items.map(it => {
      const norm = this.normalizePurchaseItem(it, oldStatus);
      if (isNaN(norm.qty) || norm.qty <= 0) {
        throw new Error(`Quantity must be a positive number for "${norm.product || 'item'}".`);
      }
      if (isNaN(norm.buyingPrice) || norm.buyingPrice < 0) {
        throw new Error(`Buying price must be 0 or greater for "${norm.product || 'item'}".`);
      }
      return norm;
    });

    // If purchase was Received or Partially Received, reconcile physical inventory stock!
    if (isReceivedOrPartial) {
      if (!Array.isArray(this.data.stockMovements)) this.data.stockMovements = [];

      // Map old received quantities by canonical key: `${productId || productName}:::${size}`
      const oldRecMap = new Map();
      oldItems.forEach(it => {
        const prodIdent = it.productId || it.product.toLowerCase();
        const sizeIdent = (it.size || 'Standard').toUpperCase();
        const key = `${prodIdent}:::${sizeIdent}`;
        oldRecMap.set(key, (oldRecMap.get(key) || 0) + it.receivedQty);
      });

      // Map new received quantities by canonical key
      const newRecMap = new Map();
      newItems.forEach(it => {
        const prodIdent = it.productId || it.product.toLowerCase();
        const sizeIdent = (it.size || 'Standard').toUpperCase();
        const key = `${prodIdent}:::${sizeIdent}`;
        const rec = (oldStatus === 'Received' || oldStatus === 'Completed') ? it.qty : Math.min(it.qty, Number(it.receivedQty || 0));
        it.receivedQty = rec;
        newRecMap.set(key, (newRecMap.get(key) || 0) + rec);
      });

      const allKeys = new Set([...oldRecMap.keys(), ...newRecMap.keys()]);

      // Phase 1: Pre-validation - ensure no negative stock would be created (Atomic verification)
      for (const key of allKeys) {
        const oldRec = oldRecMap.get(key) || 0;
        const newRec = newRecMap.get(key) || 0;
        const delta = newRec - oldRec;

        if (delta < 0) {
          const reduction = Math.abs(delta);
          const [prodIdent, sizeIdent] = key.split(':::');
          const product = (this.data.products || []).find(p => p.id === prodIdent || (p.name && p.name.trim().toLowerCase() === prodIdent.toLowerCase()));
          if (product) {
            const variant = (product.variants || []).find(v => (v.size || 'Standard').toUpperCase() === sizeIdent) || (product.variants || [])[0];
            const currentStock = variant ? Number(variant.stock || 0) : Number(product.totalStock || 0);
            if (currentStock < reduction) {
              throw new Error(`Cannot reduce received quantity for "${product.name} (${sizeIdent})": current available stock (${currentStock}) is insufficient to reverse ${reduction} units (goods may have already been sold or consumed).`);
            }
          }
        }
      }

      // Phase 2: Atomic Execution - Apply stock adjustments, update costs, log movements
      for (const key of allKeys) {
        const oldRec = oldRecMap.get(key) || 0;
        const newRec = newRecMap.get(key) || 0;
        const delta = newRec - oldRec;

        const [prodIdent, sizeIdent] = key.split(':::');
        let product = (this.data.products || []).find(p => p.id === prodIdent || (p.name && p.name.trim().toLowerCase() === prodIdent.toLowerCase()));

        if (!product && delta > 0) {
          const refItem = newItems.find(it => (it.productId || it.product.toLowerCase()) === prodIdent);
          if (refItem) {
            const newProdId = `PROD-${Date.now().toString().slice(-4)}`;
            product = {
              id: newProdId,
              name: refItem.product,
              category: refItem.category || 'General',
              brand: refItem.brand || 'Generic',
              purchasePrice: refItem.buyingPrice,
              sellingPrice: refItem.sellingPrice,
              totalStock: 0,
              status: 'Active',
              variants: []
            };
            this.data.products.push(product);
          }
        }

        if (product) {
          if (!Array.isArray(product.variants) || product.variants.length === 0) {
            product.variants = [{ size: sizeIdent, stock: 0, purchasePrice: product.purchasePrice || 0, sellingPrice: product.sellingPrice || 0 }];
          }
          let variant = product.variants.find(v => (v.size || 'Standard').toUpperCase() === sizeIdent);
          if (!variant) {
            variant = {
              id: `VAR-${Date.now().toString().slice(-4)}-${Math.floor(Math.random() * 900 + 100)}`,
              size: sizeIdent,
              sku: `${(product.name || 'PRD').slice(0, 3).toUpperCase()}-${sizeIdent.replace(/\s+/g, '')}`,
              stock: 0,
              purchasePrice: product.purchasePrice || 0,
              sellingPrice: product.sellingPrice || 0
            };
            product.variants.push(variant);
          }

          if (delta !== 0) {
            variant.stock = Math.max(0, (variant.stock || 0) + delta);
            product.totalStock = product.variants.reduce((sum, v) => sum + (Number(v.stock) || 0), 0);
            product.stock = product.totalStock;

            this.data.stockMovements.unshift({
              id: `MOV-PUR-EDIT-${Date.now().toString().slice(-4)}-${Math.floor(Math.random() * 100)}`,
              date: new Date().toLocaleString(),
              product: product.name,
              productId: product.id,
              size: sizeIdent,
              sku: variant.sku || `${(product.name || 'PRD').slice(0, 3).toUpperCase()}-${sizeIdent}`,
              type: delta > 0 ? 'Purchase Edit (+)' : 'Purchase Edit (−)',
              quantity: delta,
              reference: purchase.id,
              user: 'Admin',
              notes: delta > 0
                ? `Added ${delta} units upon editing purchase order ${purchase.id}.`
                : `Reversed ${Math.abs(delta)} units upon editing purchase order ${purchase.id}.`
            });
          }

          // Update buying price and inventory valuation reference on variant & product
          const matchingNewItem = newItems.find(it => (it.productId === product.id || it.product.toLowerCase() === product.name.toLowerCase()) && (it.size || 'Standard').toUpperCase() === sizeIdent);
          if (matchingNewItem && matchingNewItem.buyingPrice > 0) {
            variant.purchasePrice = matchingNewItem.buyingPrice;
            product.purchasePrice = matchingNewItem.buyingPrice;
          }
          if (matchingNewItem && matchingNewItem.sellingPrice > 0) {
            variant.sellingPrice = matchingNewItem.sellingPrice;
            if (!product.sellingPrice || product.sellingPrice === 0) product.sellingPrice = matchingNewItem.sellingPrice;
          }
        }
      }
    }

    const totalQty = newItems.reduce((s, it) => s + it.qty, 0);
    const totalAmount = newItems.reduce((s, it) => s + it.totalCost, 0);
    const totalReceived = isReceivedOrPartial
      ? (oldStatus === 'Received' || oldStatus === 'Completed' ? totalQty : newItems.reduce((s, it) => s + (it.receivedQty || 0), 0))
      : 0;

    purchase.supplier = supplier;
    purchase.date = date;
    purchase.notes = notes;
    purchase.items = newItems;
    purchase.totalQuantity = totalQty;
    purchase.totalAmount = totalAmount;
    purchase.totalReceived = totalReceived;
    if (updatedPayload.status && [PURCHASE_STATUS_WAITING, 'Draft', 'Approved', 'Partially Received', 'Received', 'Completed'].includes(updatedPayload.status)) {
      purchase.status = updatedPayload.status;
    }

    this.save();
    return purchase;
  }

  addStockIn(purchasePayload) {
    // purchasePayload: { supplier, date, notes, items: [ { productId, size, qty, buyingPrice, sellingPrice }, ... ] }
    let totalQty = 0;
    let totalAmount = 0;
    const itemRecords = [];

    (purchasePayload.items || []).forEach(item => {
      const q = parseInt(item.qty, 10) || 0;
      const buyPrice = parseFloat(item.buyingPrice) || 0;
      const sellPrice = parseFloat(item.sellingPrice) || 0;
      const lineCost = q * buyPrice;

      totalQty += q;
      totalAmount += lineCost;

      let product = (this.data.products || []).find(p => p.id === item.productId || (p.name && p.name.trim().toLowerCase() === (item.productName || '').trim().toLowerCase()));

      if (product) {
        if (!product.variants || product.variants.length === 0) {
          product.variants = [{ size: 'Standard', stock: Number(product.stock || product.totalStock) || 0, damaged: 0, purchasePrice: buyPrice, sellingPrice: product.sellingPrice || null }];
        }

        const targetSize = (item.size || 'Standard').trim().toUpperCase();
        let variant = product.variants.find(v => (v.size || 'Standard').trim().toUpperCase() === targetSize);
        if (!variant) {
          variant = { size: item.size || 'Standard', stock: 0, damaged: 0, purchasePrice: buyPrice, sellingPrice: product.sellingPrice || null };
          product.variants.push(variant);
        }

        variant.stock = (variant.stock || 0) + q;
        if (buyPrice > 0) {
          variant.purchasePrice = buyPrice;
          product.purchasePrice = buyPrice;
        }

        product.totalStock = product.variants.reduce((sum, v) => sum + (v.stock || 0), 0);
        product.stock = product.totalStock;

        itemRecords.push({
          product: product.name,
          size: targetSize,
          qty: q,
          buyingPrice: buyPrice,
          sellingPrice: sellPrice,
          totalCost: lineCost
        });
      }
    });

    const purchaseRecord = {
      id: `PUR-${Date.now().toString().slice(-4)}`,
      supplier: purchasePayload.supplier || 'General Supplier',
      date: purchasePayload.date || new Date().toISOString().split('T')[0],
      notes: purchasePayload.notes || '',
      productCount: itemRecords.length,
      totalQuantity: totalQty,
      totalAmount: totalAmount,
      status: 'Completed',
      items: itemRecords
    };

    this.data.purchases.unshift(purchaseRecord);

    if (!Array.isArray(this.data.stockMovements)) this.data.stockMovements = [];
    itemRecords.forEach(ir => {
      this.data.stockMovements.unshift({
        id: `MOV-${Date.now().toString().slice(-4)}-${Math.floor(Math.random()*100)}`,
        date: new Date().toLocaleString(),
        product: ir.product,
        sku: `${ir.product.slice(0,3).toUpperCase()}-${ir.size}`,
        type: 'Stock In',
        quantity: ir.qty,
        reference: purchaseRecord.id,
        user: 'Manager'
      });
    });

    this.save();
    return purchaseRecord;
  }

  addSale(salePayload) {
    // salePayload: { customerName, customerPhone, customerId, paymentMethod, paymentStatus, discount, items: [ { productId, size, qty, sellingPrice }, ... ] }
    if (!salePayload.items || salePayload.items.length === 0) {
      throw new Error('Sale must contain at least one product item.');
    }

    // 1. Validate combined stock for all items per product and size
    const requiredStockMap = {};
    (salePayload.items || []).forEach(item => {
      const q = parseInt(item.qty, 10);
      if (isNaN(q) || q <= 0) {
        throw new Error('Quantity must be a positive whole number greater than 0.');
      }
      const key = `${item.productId}:::${escapeHtml(item.size || 'Standard')}`;
      requiredStockMap[key] = (requiredStockMap[key] || 0) + q;
    });

    for (const [key, reqQty] of Object.entries(requiredStockMap)) {
      const [prodId, size] = key.split(':::');
      const prod = this.data.products.find(p => p.id === prodId);
      if (!prod) throw new Error('Product not found in inventory.');
      if (prod.status === 'Archived') {
        throw new Error(`Product "${prod.name}" is archived and cannot be sold unless explicitly reactivated.`);
      }
      const variant = (prod.variants || []).find(v => (v.size || 'Standard').toUpperCase() === (size || 'Standard').toUpperCase()) || (prod.variants || [])[0];
      const avail = variant ? (variant.stock || 0) : (prod.totalStock || 0);
      if (reqQty > avail) {
        throw new Error(`Insufficient stock for "${prod.name}" (${size}). Available: ${avail}, Requested: ${reqQty}.`);
      }
    }

    // A sale is all-or-nothing. Phases 2 and 3 only READ store data; nothing
    // (stock, customers, ID counters, movements, sales) is changed until
    // every check has passed. Phase 4 then applies the changes and undoes
    // them if anything unexpected throws part-way through.

    // 2. Price each line (read-only)
    let totalAmt = 0;
    let totalItemCount = 0;
    const saleItems = [];
    const stockPlan = [];
    const shouldDeductStock = salePayload.paymentStatus !== 'Cancelled' && salePayload.paymentStatus !== 'Failed' && salePayload.paymentStatus !== 'Draft';

    (salePayload.items || []).forEach(item => {
      const prod = this.data.products.find(p => p.id === item.productId);
      if (prod) {
        const variant = (prod.variants || []).find(v => (v.size || 'Standard').toUpperCase() === (item.size || 'Standard').toUpperCase()) || (prod.variants && prod.variants.length > 0 ? prod.variants[0] : null);
        const itemQty = parseInt(item.qty, 10) || 1;

        const priceToUse = (item.sellingPrice !== undefined && item.sellingPrice !== null && Number(item.sellingPrice) > 0)
          ? Number(item.sellingPrice)
          : (variant && variant.sellingPrice > 0 ? variant.sellingPrice : (prod.sellingPrice || 0));
        const lineTotal = priceToUse * itemQty;
        totalAmt += lineTotal;
        totalItemCount += itemQty;

        // Snapshot unit purchase cost for historical profit integrity
        const unitCost = this.getItemUnitCost({ ...item, productId: prod.id, size: item.size }, prod);

        stockPlan.push({ prod, variant, itemQty });
        saleItems.push({
          product: prod.name,
          productId: prod.id,
          size: item.size || 'Standard',
          qty: itemQty,
          price: priceToUse,
          purchasePrice: unitCost,
          buyingPrice: unitCost,
          amount: lineTotal
        });
      }
    });

    const discountVal = Math.max(0, parseFloat(salePayload.discount) || 0);
    const finalTotal = Math.max(0, totalAmt - discountVal);

    // 3. Validate the payment taken at the till (read-only)
    const requestedStatus = salePayload.paymentStatus || 'Paid';
    const payMethod = salePayload.paymentMethod || 'Cash';
    let openingPayment = 0;
    if (requestedStatus === 'Paid' || requestedStatus === 'Completed') {
      openingPayment = this._money(finalTotal);
    } else if (requestedStatus === 'Partial') {
      // Number(), not _money(): _money() turns non-numeric input into 0.
      const rawPaid = Number(salePayload.amountPaid);
      if (salePayload.amountPaid === '' || salePayload.amountPaid === null || !isFinite(rawPaid) || rawPaid <= 0) {
        throw new Error('A partial sale needs the amount actually paid.');
      }
      openingPayment = this._money(rawPaid);
      if (openingPayment - this._money(finalTotal) > 0.005) {
        throw new Error(`Amount paid (₹${openingPayment.toLocaleString()}) cannot exceed the sale total of ₹${this._money(finalTotal).toLocaleString()}.`);
      }
    }

    // 4. Commit. Everything above has passed, so only an unexpected error
    //    can stop us now; if one does, restore what was touched so no half
    //    sale is left in memory for a later save() to persist.
    const custName = (salePayload.customerName || salePayload.customer || 'Walk-in Customer').trim();
    const custPhone = (salePayload.customerPhone || salePayload.phone || '-').trim();

    if (!Array.isArray(this.data.customers)) this.data.customers = [];
    if (!Array.isArray(this.data.stockMovements)) this.data.stockMovements = [];
    if (!Array.isArray(this.data.sales)) this.data.sales = [];

    const touchedProducts = [...new Set(stockPlan.map(p => p.prod))];
    const undo = {
      variants: stockPlan.filter(p => p.variant).map(p => ({ variant: p.variant, stock: p.variant.stock })),
      products: touchedProducts.map(prod => ({ prod, totalStock: prod.totalStock, stock: prod.stock })),
      customers: [...this.data.customers],
      customerPhones: this.data.customers.map(c => [c, c.phone]),
      idSequences: this.data.idSequences ? { ...this.data.idSequences } : undefined,
      stockMovements: [...this.data.stockMovements],
      sales: [...this.data.sales]
    };

    let saleRecord;
    try {
      const custId = this._resolveSaleCustomer({
        customerId: salePayload.customerId || '',
        name: custName,
        phone: custPhone
      });

      saleRecord = {
        id: this._nextSaleId(),
        date: new Date().toLocaleString('en-US', { dateStyle: 'short', timeStyle: 'short' }),
        customer: custName,
        customerName: custName,
        customerId: custId,
        phone: custPhone,
        itemCount: totalItemCount,
        subtotal: totalAmt,
        totalAmount: finalTotal,
        paymentMethod: salePayload.paymentMethod || 'Cash',
        status: requestedStatus,
        discount: discountVal,
        items: saleItems,
        payments: []
      };

      if (openingPayment > 0) {
        saleRecord.payments.push({
          id: `PAY-${Date.now().toString().slice(-6)}-${Math.floor(Math.random() * 900 + 100)}`,
          amount: openingPayment,
          date: saleRecord.date,
          method: payMethod,
          note: 'Payment at point of sale'
        });
      }
      this.recalculateSalePayments(saleRecord);

      // Apply the stock deduction
      if (shouldDeductStock) {
        stockPlan.forEach(({ prod, variant, itemQty }) => {
          if (variant) {
            variant.stock = Math.max(0, (variant.stock || 0) - itemQty);
          } else {
            prod.totalStock = Math.max(0, (prod.totalStock || 0) - itemQty);
          }
        });
      }
      touchedProducts.forEach(prod => {
        if (Array.isArray(prod.variants) && prod.variants.length > 0) {
          prod.totalStock = prod.variants.reduce((sum, v) => sum + (Number(v.stock) || 0), 0);
        }
        prod.stock = prod.totalStock;
      });

      // Log Stock Movement for completed sale
      if (shouldDeductStock) {
        saleItems.forEach(si => {
          this.data.stockMovements.unshift({
            id: `MOV-${Date.now().toString().slice(-4)}-${Math.floor(Math.random()*100)}`,
            date: new Date().toLocaleString(),
            product: si.product,
            productId: si.productId,
            size: si.size,
            sku: `${(si.product || 'PRD').slice(0,3).toUpperCase()}-${si.size || 'STD'}`,
            type: 'Sale',
            quantity: -si.qty,
            reference: saleRecord.id,
            user: 'Cashier'
          });
        });
      }

      this.data.sales.unshift(saleRecord);

      // Dynamic customer metrics reconciliation
      this.recalculateCustomerMetrics();
    } catch (err) {
      undo.variants.forEach(({ variant, stock }) => { variant.stock = stock; });
      undo.products.forEach(({ prod, totalStock, stock }) => { prod.totalStock = totalStock; prod.stock = stock; });
      this.data.customers = undo.customers;
      undo.customerPhones.forEach(([c, phone]) => { c.phone = phone; });
      if (undo.idSequences) this.data.idSequences = undo.idSequences;
      else delete this.data.idSequences;
      this.data.stockMovements = undo.stockMovements;
      this.data.sales = undo.sales;
      this.recalculateCustomerMetrics();
      throw err;
    }

    this.save();
    return saleRecord;
  }

  // ==========================================
  // PAYMENT LEDGER
  // ------------------------------------------
  // A sale carries an immutable `totalAmount` plus a `payments[]` ledger.
  // `amountPaid` and `balanceDue` are always DERIVED from that ledger, never
  // set directly, so they cannot drift. Status follows the balance:
  //   nothing paid -> Pending | part paid -> Partial | balance 0 -> Paid
  // Recording a payment never touches inventory.
  // ==========================================

  /** Round to paise so floating point never leaves a 0.0000001 balance. */
  _money(n) {
    const v = Number(n);
    if (!isFinite(v)) return 0;
    return Math.round(v * 100) / 100;
  }

  /**
   * Recompute amountPaid / balanceDue / status for one sale from its ledger.
   * Terminal states (Cancelled, Failed, Draft) are never overwritten, and the
   * legacy 'Completed' label is preserved rather than rewritten to 'Paid'.
   */
  recalculateSalePayments(sale) {
    if (!sale || typeof sale !== 'object') return sale;
    if (!Array.isArray(sale.payments)) sale.payments = [];

    const total = this._money(sale.totalAmount || 0);
    const paid = this._money(sale.payments.reduce((sum, pm) => sum + (Number(pm.amount) || 0), 0));

    sale.amountPaid = paid;
    sale.balanceDue = this._money(Math.max(0, total - paid));
    // Anything paid beyond the total is surfaced rather than silently dropped.
    sale.overpaidAmount = this._money(Math.max(0, paid - total));

    const terminal = ['Cancelled', 'Failed', 'Draft'];
    if (terminal.includes(sale.status)) return sale;

    if (paid <= 0) {
      sale.status = 'Pending';
    } else if (paid + 0.005 < total) {
      sale.status = 'Partial';
    } else if (sale.overpaidAmount > 0.005) {
      // More was collected than the sale is now worth (e.g. the sale was
      // edited down after payment). Kept visible rather than shown as Paid.
      sale.status = 'Overpaid';
    } else {
      // Keep the historical 'Completed' wording where it was already in use.
      sale.status = sale.status === 'Completed' ? 'Completed' : 'Paid';
    }
    return sale;
  }

  /**
   * One-time migration for sales saved before the ledger existed.
   *
   * Existing monetary values are never altered — only a payments[] ledger is
   * inferred from the status that was already stored:
   *   Paid / Completed -> one migrated payment for the full total
   *   Pending          -> no payments
   *   Partial          -> no recorded amount exists, so the ledger stays empty
   *                       and the Partial status is PRESERVED rather than
   *                       downgraded to Pending. `paymentsNeedReview` marks it
   *                       so the amount can be entered later.
   */
  _migrateSalePayments(sale) {
    if (!sale || typeof sale !== 'object') return;
    if (Array.isArray(sale.payments)) {
      this.recalculateSalePayments(sale);
      return;
    }

    const total = this._money(sale.totalAmount || 0);
    const status = sale.status || 'Paid';
    sale.payments = [];

    if (status === 'Paid' || status === 'Completed') {
      sale.payments.push({
        id: `PAY-MIG-${sale.id || Math.random().toString(36).slice(2, 7)}`,
        amount: total,
        date: sale.date || new Date().toLocaleString(),
        method: sale.paymentMethod || 'Cash',
        note: 'Opening balance migrated from the existing record',
        migrated: true
      });
    } else if (status === 'Partial') {
      // The old model stored no amount for partial sales; flag for review.
      sale.paymentsNeedReview = true;
    }

    this.recalculateSalePayments(sale);

    // Preserve the operator's original intent for legacy partial sales.
    if (status === 'Partial' && sale.amountPaid === 0 && !['Cancelled', 'Failed', 'Draft'].includes(status)) {
      sale.status = 'Partial';
    }
  }

  /**
   * Record a payment against an existing sale.
   * Never deducts inventory and never alters the sale's items or total.
   */
  recordSalePayment(saleId, { amount, method, date, note } = {}) {
    const sale = (this.data.sales || []).find(s => s.id === saleId || s.reference === saleId);
    if (!sale) throw new Error('Sale not found.');

    if (['Cancelled', 'Failed'].includes(sale.status)) {
      throw new Error(`Cannot record a payment against a ${sale.status.toLowerCase()} sale.`);
    }

    this.recalculateSalePayments(sale);

    const amt = this._money(amount);
    if (!isFinite(amt) || amt <= 0) throw new Error('Payment amount must be greater than zero.');

    const balance = this._money(sale.balanceDue);
    if (balance <= 0) throw new Error(`Sale ${sale.id} is already fully paid.`);
    if (amt - balance > 0.005) {
      throw new Error(`Payment of ₹${amt.toLocaleString()} exceeds the outstanding balance of ₹${balance.toLocaleString()}.`);
    }

    sale.payments.push({
      id: `PAY-${Date.now().toString().slice(-6)}-${Math.floor(Math.random() * 900 + 100)}`,
      amount: amt,
      date: date || new Date().toLocaleString('en-US', { dateStyle: 'short', timeStyle: 'short' }),
      method: method || sale.paymentMethod || 'Cash',
      note: (note || '').trim()
    });
    delete sale.paymentsNeedReview;

    this.recalculateSalePayments(sale);
    this.recalculateCustomerMetrics();
    this.save();
    this.notify();
    return sale;
  }

  /** Store-wide money position: billed, collected and still owed. */
  getPaymentTotals() {
    const active = (this.data.sales || []).filter(s => s && s.status !== 'Cancelled' && s.status !== 'Failed' && s.status !== 'Draft');
    const revenue = this._money(active.reduce((a, s) => a + (Number(s.totalAmount) || 0), 0));
    const collected = this._money(active.reduce((a, s) => a + (Number(s.amountPaid) || 0), 0));
    // Each sale's balance stands on its own: an overpayment on one sale must
    // never reduce what another sale (or customer) still owes.
    const outstanding = this._money(active.reduce((a, s) => a + Math.max(0, Number(s.balanceDue) || 0), 0));
    const overpaid = this._money(active.reduce((a, s) => a + Math.max(0, Number(s.overpaidAmount) || 0), 0));
    return {
      revenue,
      collected,
      outstanding,
      overpaid,
      overpaidCount: active.filter(s => (Number(s.overpaidAmount) || 0) > 0).length,
      unpaidCount: active.filter(s => (Number(s.balanceDue) || 0) > 0).length
    };
  }

  updateSalePaymentStatus(saleId, newStatus) {
    const sale = (this.data.sales || []).find(s => s.id === saleId);
    if (!sale) throw new Error('Sale not found.');
    if (sale.status === newStatus) return sale;

    if (newStatus === 'Cancelled') {
      return this.cancelSale(saleId);
    }

    // Changing payment status (e.g. Pending -> Paid) DOES NOT deduct stock again!
    // Marking a sale paid settles the balance through the ledger, so the two
    // can never disagree; clearing it back to Pending removes only the
    // payments this shortcut created, never a real recorded payment.
    if (!Array.isArray(sale.payments)) sale.payments = [];
    if (newStatus === 'Paid' || newStatus === 'Completed') {
      this.recalculateSalePayments(sale);
      if (sale.balanceDue > 0) {
        sale.payments.push({
          id: `PAY-${Date.now().toString().slice(-6)}-${Math.floor(Math.random() * 900 + 100)}`,
          amount: sale.balanceDue,
          date: new Date().toLocaleString('en-US', { dateStyle: 'short', timeStyle: 'short' }),
          method: sale.paymentMethod || 'Cash',
          note: 'Balance settled by status change'
        });
      }
      sale.status = newStatus;
    } else if (newStatus === 'Pending') {
      const realPayments = sale.payments.filter(pm => !/status change|Marked paid while editing/i.test(pm.note || ''));
      if (realPayments.length > 0) {
        throw new Error(`Sale ${sale.id} has recorded payments and cannot be set back to Pending. Adjust the payments instead.`);
      }
      sale.payments = [];
      sale.status = newStatus;
    } else {
      sale.status = newStatus;
    }

    this.recalculateSalePayments(sale);
    this.recalculateCustomerMetrics();
    this.save();
    return sale;
  }

  cancelSale(saleId, reason = 'Cancelled by user') {
    const sale = (this.data.sales || []).find(s => s.id === saleId);
    if (!sale) throw new Error('Sale not found.');
    if (sale.status === 'Cancelled') throw new Error('Sale is already cancelled.');

    const previousStatus = sale.status;
    sale.status = 'Cancelled';
    sale.cancelledAt = new Date().toISOString();
    sale.cancelReason = reason;

    // Restore stock if the sale had previously deducted stock
    const hadDeductedStock = previousStatus !== 'Cancelled' && previousStatus !== 'Failed' && previousStatus !== 'Draft';
    if (hadDeductedStock) {
      if (!Array.isArray(this.data.stockMovements)) this.data.stockMovements = [];
      (sale.items || []).forEach(item => {
        const prod = (this.data.products || []).find(p => p.id === item.productId || (p.name && p.name.trim().toLowerCase() === (item.product || '').trim().toLowerCase()));
        if (prod) {
          const variant = (prod.variants || []).find(v => (v.size || 'Standard').toUpperCase() === (item.size || 'Standard').toUpperCase()) || (prod.variants && prod.variants[0]);
          const itemQty = Number(item.qty || 1);
          if (variant) {
            variant.stock = Math.max(0, Number(variant.stock || 0) + itemQty);
          } else {
            prod.totalStock = Math.max(0, Number(prod.totalStock || 0) + itemQty);
          }
          if (Array.isArray(prod.variants) && prod.variants.length > 0) {
            prod.totalStock = prod.variants.reduce((sum, v) => sum + (Number(v.stock) || 0), 0);
          }
          prod.stock = prod.totalStock;

          this.data.stockMovements.unshift({
            id: `MOV-RET-${Date.now().toString().slice(-4)}-${Math.floor(Math.random()*100)}`,
            date: new Date().toLocaleString(),
            product: item.product || prod.name,
            productId: prod.id,
            size: item.size || 'Standard',
            sku: variant ? variant.sku : '',
            type: 'Sale Return',
            quantity: itemQty,
            reference: sale.id,
            user: 'Admin'
          });
        }
      });
    }

    this.recalculateCustomerMetrics();
    this.save();
    return sale;
  }

  deleteSale(saleId) {
    const sale = (this.data.sales || []).find(s => s.id === saleId);
    if (!sale) throw new Error('Sale not found.');

    const hadDeductedStock = sale.status !== 'Cancelled' && sale.status !== 'Failed' && sale.status !== 'Draft';
    if (hadDeductedStock) {
      if (!Array.isArray(this.data.stockMovements)) this.data.stockMovements = [];
      (sale.items || []).forEach(item => {
        const prod = (this.data.products || []).find(p =>
          p.id === item.productId ||
          (p.name && item.product && p.name.trim().toLowerCase() === item.product.trim().toLowerCase()) ||
          (p.name && item.productName && p.name.trim().toLowerCase() === item.productName.trim().toLowerCase())
        );
        if (prod) {
          let variant = null;
          if (item.sku) {
            variant = (prod.variants || []).find(v => v.sku && v.sku.toUpperCase() === item.sku.toUpperCase());
          }
          if (!variant) {
            let extractedSize = item.size || '';
            if (!extractedSize && item.sku) {
              const parts = String(item.sku).split('-');
              if (parts.length > 1) extractedSize = parts[parts.length - 1];
            }
            const targetSize = (extractedSize || 'Standard').trim().toUpperCase();
            variant = (prod.variants || []).find(v => (v.size || 'Standard').trim().toUpperCase() === targetSize);
          }
          if (!variant && Array.isArray(prod.variants) && prod.variants.length > 0) {
            variant = prod.variants[0];
          }

          const itemQty = Number(item.qty !== undefined ? item.qty : (item.quantity || 1)) || 0;
          if (variant) {
            variant.stock = Math.max(0, Number(variant.stock || 0) + itemQty);
          } else {
            prod.totalStock = Math.max(0, Number(prod.totalStock || prod.stock || 0) + itemQty);
          }
          if (Array.isArray(prod.variants) && prod.variants.length > 0) {
            prod.totalStock = prod.variants.reduce((sum, v) => sum + (Number(v.stock) || 0), 0);
          }
          prod.stock = prod.totalStock;

          this.data.stockMovements.unshift({
            id: `MOV-DEL-${Date.now().toString().slice(-4)}-${Math.floor(Math.random() * 100)}`,
            date: new Date().toLocaleString(),
            product: item.product || prod.name,
            productId: prod.id,
            size: item.size || 'Standard',
            sku: (variant && variant.sku) ? variant.sku : '',
            type: 'Sale Void / Deleted',
            quantity: itemQty,
            reference: sale.id,
            user: 'Admin'
          });
        }
      });
    }

    // Remove only this record, even if older data holds another sale with the
    // same ID (IDs were not guaranteed unique before).
    this.data.sales = this.data.sales.filter(s => s !== sale);
    this.recalculateCustomerMetrics();
    this.save();
    return true;
  }

  updateSale(saleId, updatedPayload) {
    const sale = (this.data.sales || []).find(s => s.id === saleId || s.reference === saleId);
    if (!sale) throw new Error('Sale not found.');

    if (!updatedPayload || !Array.isArray(updatedPayload.items) || updatedPayload.items.length === 0) {
      throw new Error('Sale must contain at least one item.');
    }

    const wasActiveSale = sale.status !== 'Cancelled' && sale.status !== 'Failed' && sale.status !== 'Draft';
    const newStatus = updatedPayload.paymentStatus || sale.status || 'Paid';
    const isActiveSale = newStatus !== 'Cancelled' && newStatus !== 'Failed' && newStatus !== 'Draft';

    // 1. Group original items to know what stock was deducted by this sale
    const oldDeductedMap = new Map();
    if (wasActiveSale) {
      (sale.items || []).forEach(it => {
        const prod = (this.data.products || []).find(p => p.id === it.productId || (p.name && it.product && p.name.trim().toLowerCase() === it.product.trim().toLowerCase()));
        const prodId = prod ? prod.id : (it.productId || '');
        let extractedSize = it.size || '';
        if (!extractedSize && it.sku) {
          const parts = String(it.sku).split('-');
          if (parts.length > 1) extractedSize = parts[parts.length - 1];
        }
        const size = (extractedSize || 'Standard').toUpperCase();
        const key = `${prodId}:::${size}`;
        const q = Number(it.qty !== undefined ? it.qty : (it.quantity || 1)) || 0;
        oldDeductedMap.set(key, (oldDeductedMap.get(key) || 0) + q);
      });
    }

    // 2. Validate updated items and required stock
    const newRequestedMap = new Map();
    (updatedPayload.items || []).forEach(it => {
      const q = parseInt(it.qty, 10);
      if (isNaN(q) || q <= 0) throw new Error('Quantity must be a positive whole number greater than 0.');
      const prodId = it.productId;
      const size = (it.size || 'Standard').toUpperCase();
      const key = `${prodId}:::${size}`;
      newRequestedMap.set(key, (newRequestedMap.get(key) || 0) + q);
    });

    // Check inventory stock availability if active sale
    if (isActiveSale) {
      for (const [key, reqQty] of newRequestedMap.entries()) {
        const [prodId, size] = key.split(':::');
        const prod = (this.data.products || []).find(p => p.id === prodId);
        if (!prod) throw new Error('Product not found in inventory.');
        if (prod.status === 'Archived') {
          throw new Error(`Product "${prod.name}" is archived and cannot be sold.`);
        }
        const variant = (prod.variants || []).find(v => (v.size || 'Standard').toUpperCase() === size) || (prod.variants || [])[0];
        const currentStock = variant ? (variant.stock || 0) : (prod.totalStock || 0);
        const previouslyDeducted = oldDeductedMap.get(key) || 0;
        const effectiveAvailable = currentStock + previouslyDeducted;
        if (reqQty > effectiveAvailable) {
          throw new Error(`Insufficient stock for "${prod.name}" (${size}). Available: ${effectiveAvailable}, Requested: ${reqQty}.`);
        }
      }
    }

    // 3. Reconcile stock
    // A) Restore original deducted quantities if wasActiveSale
    if (wasActiveSale) {
      (sale.items || []).forEach(it => {
        const prod = (this.data.products || []).find(p => p.id === it.productId || (p.name && it.product && p.name.trim().toLowerCase() === it.product.trim().toLowerCase()));
        if (prod) {
          let extractedSize = it.size || '';
          if (!extractedSize && it.sku) {
            const parts = String(it.sku).split('-');
            if (parts.length > 1) extractedSize = parts[parts.length - 1];
          }
          const targetSize = (extractedSize || 'Standard').toUpperCase();
          const variant = (prod.variants || []).find(v => (v.size || 'Standard').toUpperCase() === targetSize) || (prod.variants || [])[0];
          const q = Number(it.qty !== undefined ? it.qty : (it.quantity || 1)) || 0;
          if (variant) {
            variant.stock = Math.max(0, (variant.stock || 0) + q);
          } else {
            prod.totalStock = Math.max(0, (prod.totalStock || 0) + q);
          }
          if (Array.isArray(prod.variants) && prod.variants.length > 0) {
            prod.totalStock = prod.variants.reduce((sum, v) => sum + (Number(v.stock) || 0), 0);
          }
          prod.stock = prod.totalStock;
        }
      });
    }

    // B) Deduct new quantities if isActiveSale
    let totalAmt = 0;
    let totalItemCount = 0;
    const saleItems = [];

    (updatedPayload.items || []).forEach(it => {
      const prod = (this.data.products || []).find(p => p.id === it.productId);
      if (prod) {
        const itemQty = parseInt(it.qty, 10) || 1;
        const targetSize = (it.size || 'Standard').toUpperCase();
        const variant = (prod.variants || []).find(v => (v.size || 'Standard').toUpperCase() === targetSize) || (prod.variants || [])[0];

        if (isActiveSale) {
          if (variant) {
            variant.stock = Math.max(0, (variant.stock || 0) - itemQty);
          } else {
            prod.totalStock = Math.max(0, (prod.totalStock || 0) - itemQty);
          }
          if (Array.isArray(prod.variants) && prod.variants.length > 0) {
            prod.totalStock = prod.variants.reduce((sum, v) => sum + (Number(v.stock) || 0), 0);
          }
          prod.stock = prod.totalStock;
        }

        const priceToUse = (it.sellingPrice !== undefined && it.sellingPrice !== null && Number(it.sellingPrice) >= 0)
          ? Number(it.sellingPrice)
          : (variant && variant.sellingPrice > 0 ? variant.sellingPrice : (prod.sellingPrice || 0));
        const lineTotal = priceToUse * itemQty;
        totalAmt += lineTotal;
        totalItemCount += itemQty;

        const unitCost = this.getItemUnitCost({ ...it, productId: prod.id, size: it.size }, prod);

        saleItems.push({
          product: prod.name,
          productId: prod.id,
          size: it.size || 'Standard',
          qty: itemQty,
          price: priceToUse,
          purchasePrice: unitCost,
          buyingPrice: unitCost,
          amount: lineTotal
        });
      }
    });

    const discountVal = Math.max(0, parseFloat(updatedPayload.discount) || 0);
    const finalTotal = Math.max(0, totalAmt - discountVal);

    const custName = (updatedPayload.customerName || updatedPayload.customer || sale.customer || 'Walk-in Customer').trim();
    const custPhone = (updatedPayload.customerPhone || updatedPayload.phone || sale.phone || '-').trim();
    // Keep the sale's own customer unless the name was changed; never
    // re-match by phone (see _resolveSaleCustomer).
    const custId = this._resolveSaleCustomer({
      customerId: updatedPayload.customerId || sale.customerId || '',
      name: custName,
      phone: custPhone
    });

    // Log the real stock change for each product/size: units this sale
    // previously took out minus units it takes out now. Positive = stock
    // returned to inventory, negative = additional stock sold.
    if (!Array.isArray(this.data.stockMovements)) this.data.stockMovements = [];
    const newDeductedMap = isActiveSale ? newRequestedMap : new Map();
    const movementKeys = new Set([...oldDeductedMap.keys(), ...newDeductedMap.keys()]);
    movementKeys.forEach(key => {
      const oldQty = oldDeductedMap.get(key) || 0;
      const newQty = newDeductedMap.get(key) || 0;
      const delta = oldQty - newQty;
      if (delta === 0) return;

      const [prodId, sizeKey] = key.split(':::');
      const prod = (this.data.products || []).find(p => p.id === prodId);
      const variant = prod ? (prod.variants || []).find(v => (v.size || 'Standard').toUpperCase() === sizeKey) : null;
      const sizeLabel = variant ? (variant.size || 'Standard') : sizeKey;
      const prodName = prod ? prod.name : prodId;

      this.data.stockMovements.unshift({
        id: `MOV-SALE-EDIT-${Date.now().toString().slice(-4)}-${Math.floor(Math.random() * 10000)}`,
        date: new Date().toLocaleString(),
        product: prodName,
        productId: prodId,
        size: sizeLabel,
        sku: (variant && variant.sku) ? variant.sku : `${(prodName || 'PRD').slice(0, 3).toUpperCase()}-${sizeLabel}`,
        type: delta > 0 ? 'Sale Edited — Quantity Reduced' : 'Sale Edited — Quantity Increased',
        quantity: delta,
        reference: sale.id,
        user: 'Cashier',
        notes: `Sale ${sale.id} edited: ${oldQty} → ${newQty} units of ${prodName} (${sizeLabel}). ` +
          (delta > 0 ? `${delta} unit(s) returned to stock.` : `${Math.abs(delta)} additional unit(s) sold.`)
      });
    });

    sale.customer = custName;
    sale.customerName = custName;
    sale.customerId = custId;
    sale.phone = custPhone;
    if (updatedPayload.date) sale.date = updatedPayload.date;
    sale.itemCount = totalItemCount;
    sale.subtotal = totalAmt;
    sale.totalAmount = finalTotal;
    sale.paymentMethod = updatedPayload.paymentMethod || sale.paymentMethod || 'Cash';
    sale.status = newStatus;
    sale.discount = discountVal;
    sale.items = saleItems;

    // Payment history is never rewritten by an item edit. Once any payment
    // exists the ledger is authoritative and the status dropdown cannot
    // override it; only an unpaid sale can still take its status as intent.
    if (!Array.isArray(sale.payments)) sale.payments = [];
    const alreadyPaid = sale.payments.reduce((a, pm) => a + (Number(pm.amount) || 0), 0);

    if (alreadyPaid <= 0 && (newStatus === 'Paid' || newStatus === 'Completed')) {
      sale.payments.push({
        id: `PAY-${Date.now().toString().slice(-6)}-${Math.floor(Math.random() * 900 + 100)}`,
        amount: this._money(finalTotal),
        date: sale.date,
        method: sale.paymentMethod,
        note: 'Marked paid while editing the sale'
      });
    }

    this.recalculateSalePayments(sale);
    this.recalculateCustomerMetrics();
    this.save();
    return sale;
  }


  deleteCustomer(customerId) {
    const customer = (this.data.customers || []).find(c => c.id === customerId);
    if (!customer) throw new Error('Customer not found.');

    // Older data may contain two customers with the same ID. Remove only
    // this record, and only unlink sales when no other customer still
    // carries the ID, so the other customer's sales stay attached.
    const idStillUsed = this.data.customers.some(c => c !== customer && c.id === customerId);
    if (!idStillUsed) {
      (this.data.sales || []).forEach(s => {
        if (s.customerId === customerId) {
          s.customerId = '';
        }
      });
    }

    this.data.customers = this.data.customers.filter(c => c !== customer);
    this.recalculateCustomerMetrics();
    this.save();
    return true;
  }

  updateCustomer(customerId, updatedData) {
    const customer = (this.data.customers || []).find(c => c.id === customerId);
    if (!customer) throw new Error('Customer not found.');

    const name = (updatedData.name || '').trim();
    if (!name) throw new Error('Customer name is required.');
    const phone = updatedData.phone ? updatedData.phone.trim() : '-';
    const email = updatedData.email !== undefined ? updatedData.email.trim() : (customer.email || '');
    const address = updatedData.address !== undefined ? updatedData.address.trim() : (customer.address || '');
    const city = updatedData.city !== undefined ? updatedData.city.trim() : (customer.city || '');
    const notes = updatedData.notes !== undefined ? updatedData.notes.trim() : (customer.notes || '');

    const oldName = customer.name;
    customer.name = name;
    customer.phone = phone;
    customer.email = email;
    customer.address = address;
    customer.city = city;
    customer.notes = notes;

    (this.data.sales || []).forEach(s => {
      if (s.customerId === customer.id || (!s.customerId && (s.customer || s.customerName || '').toLowerCase() === oldName.toLowerCase())) {
        s.customerId = customer.id;
        s.customer = customer.name;
        s.customerName = customer.name;
        if (customer.phone && customer.phone !== '-') s.phone = customer.phone;
      }
    });

    this.recalculateCustomerMetrics();
    this.save();
    return customer;
  }


  adjustProductStock({ productId, size, adjustmentType, quantity, reason }) {
    const product = this.data.products.find(p => p.id === productId);
    if (!product) throw new Error('Product not found');

    if (!Array.isArray(product.variants) || product.variants.length === 0) {
      product.variants = [{ size: 'Standard', stock: Number(product.stock || product.totalStock) || 0 }];
    }

    const hasSizes = product.variants.length > 0 && product.variants.some(v => v.size && v.size !== 'Standard');
    let variant;
    if (size) {
      variant = product.variants.find(v => v.size === size);
      if (!variant) throw new Error(`Size variant "${size}" not found for product "${product.name}".`);
    } else {
      variant = product.variants[0];
      if (!variant) throw new Error(`No stock variants found for product "${product.name}".`);
    }

    const curStock = Number(variant.stock) || 0;
    const qty = parseInt(quantity, 10);
    if (isNaN(qty) || qty <= 0) throw new Error('Quantity must be a positive whole number greater than 0');

    let newStock;
    let qtyChange;
    if (adjustmentType === 'ADD') {
      newStock = curStock + qty;
      qtyChange = qty;
    } else {
      if (qty > curStock) {
        throw new Error(`Cannot remove ${qty} units. Maximum available stock is ${curStock} units.`);
      }
      newStock = curStock - qty;
      qtyChange = -qty;
      if (reason && (reason.toLowerCase().includes('damaged') || reason === 'Damaged Stock (Write-off)')) {
        variant.damaged = (variant.damaged || 0) + qty;
      }
    }

    const prevStock = curStock;
    variant.stock = newStock;
    product.totalStock = (product.variants || []).reduce((sum, v) => sum + (v.stock || 0), 0);
    product.stock = product.totalStock;

    const now = new Date();
    const dateFormatted = now.toLocaleDateString('en-GB') + ' ' + now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    if (!Array.isArray(this.data.stockMovements)) this.data.stockMovements = [];
    const movementRecord = {
      id: `MOV-ADJ-${Date.now().toString().slice(-4)}-${Math.floor(Math.random()*100)}`,
      date: dateFormatted,
      product: product.name,
      productId: product.id,
      size: (hasSizes && variant.size && variant.size !== 'Standard') ? variant.size : null,
      sku: `${(product.name || 'PRD').slice(0,3).toUpperCase()}-${variant.size || 'STD'}`,
      type: 'Adjustment',
      adjustmentType: adjustmentType === 'ADD' ? 'Add Stock (+)' : 'Remove Stock (−)',
      quantity: qtyChange,
      previousStock: prevStock,
      newStock: newStock,
      reason: reason || 'Stock Correction',
      reference: reason || 'Stock Correction',
      notes: `Stock adjusted from ${prevStock} to ${newStock} units (${reason || 'Manual Correction'})`,
      user: 'Manager'
    };
    this.data.stockMovements.unshift(movementRecord);

    this.save();
    return { product, variant, newStock, previousStock: prevStock, movementRecord };
  }

  updateProduct(id, updatedData) {
    const idx = (this.data.products || []).findIndex(p => p.id === id);
    if (idx !== -1) {
      const existing = this.data.products[idx];
      const updatedVariants = (existing.variants || []).map(v => {
        if (updatedData.variantPrices && updatedData.variantPrices[v.size] !== undefined) {
          return {
            ...v,
            sellingPrice: updatedData.variantPrices[v.size]
          };
        }
        return v;
      });

      this.data.products[idx] = {
        ...existing,
        name: updatedData.name !== undefined ? updatedData.name : existing.name,
        category: updatedData.category !== undefined ? updatedData.category : existing.category,
        brand: updatedData.brand !== undefined ? updatedData.brand : existing.brand,
        sellingPrice: updatedData.sellingPrice !== undefined ? updatedData.sellingPrice : existing.sellingPrice,
        description: updatedData.description !== undefined ? updatedData.description : existing.description,
        status: updatedData.status !== undefined ? updatedData.status : existing.status,
        variants: updatedVariants,
        totalStock: updatedVariants.reduce((sum, v) => sum + (v.stock || 0), 0)
      };
      this.data.products[idx].stock = this.data.products[idx].totalStock;
      this.save();
    }
  }

  /**
   * Bring an archived product back into circulation.
   *
   * Archiving only flips `status` — variants, stock and history are left
   * intact — so reactivating is a pure status change. It deliberately does
   * NOT touch stock levels or create purchase records; the units preserved at
   * archive time simply become sellable again.
   */
  reactivateProduct(id) {
    const product = (this.data.products || []).find(p => p.id === id);
    if (!product) throw new Error('Product not found.');
    if (product.status !== 'Archived' && product.status !== 'Inactive') {
      throw new Error(`Product "${product.name}" is already active.`);
    }

    const previousStatus = product.status;
    const stockBefore = Number(product.totalStock || 0);

    product.status = 'Active';

    // Recompute from variants rather than assigning, so no quantity is invented.
    if (Array.isArray(product.variants) && product.variants.length > 0) {
      product.totalStock = product.variants.reduce((sum, v) => sum + (Number(v.stock) || 0), 0);
    }
    product.stock = product.totalStock;

    if (Number(product.totalStock || 0) !== stockBefore) {
      // Should never happen; guard against silent drift.
      console.warn('Reactivation changed stock unexpectedly', stockBefore, product.totalStock);
    }

    if (!Array.isArray(this.data.stockMovements)) this.data.stockMovements = [];
    this.data.stockMovements.unshift({
      id: `MOV-REACT-${Date.now().toString().slice(-4)}-${Math.floor(Math.random() * 100)}`,
      date: new Date().toLocaleString(),
      product: product.name,
      productId: product.id,
      size: 'All',
      sku: `${(product.name || 'PRD').slice(0, 3).toUpperCase()}-REACT`,
      type: 'Product Reactivated',
      quantity: 0,
      reference: `REACTIVATE-${product.id}`,
      user: 'Admin',
      notes: `Product reactivated from ${previousStatus}. Existing stock of ${product.totalStock || 0} units retained; no new stock created.`
    });

    this.save();
    this.notify();
    return product;
  }

  deleteProduct(id) {
    const idx = (this.data.products || []).findIndex(p => p.id === id);
    if (idx === -1) throw new Error('Product not found.');
    const product = this.data.products[idx];

    if (product.status === 'Archived') {
      throw new Error('Product is already archived.');
    }

    // Check if product has historical sales or purchases
    const hasSales = (this.data.sales || []).some(s => (s.items || []).some(it => it.productId === id || (it.product && it.product.trim().toLowerCase() === product.name.trim().toLowerCase())));
    const hasPurchases = (this.data.purchases || []).some(p => (p.items || []).some(it => it.productId === id || (it.product && it.product.trim().toLowerCase() === product.name.trim().toLowerCase())));

    if (hasSales || hasPurchases) {
      // Soft-delete: Mark as Archived to preserve financial, stock, and audit history
      product.status = 'Archived';
      // Physical stock and variants are preserved intact — never discarded
      if (!Array.isArray(this.data.stockMovements)) this.data.stockMovements = [];
      this.data.stockMovements.unshift({
        id: `MOV-ARCH-${Date.now().toString().slice(-4)}-${Math.floor(Math.random()*100)}`,
        date: new Date().toLocaleString(),
        product: product.name,
        productId: product.id,
        size: 'All',
        sku: `${(product.name || 'PRD').slice(0,3).toUpperCase()}-ARCH`,
        type: 'Product Archived',
        quantity: 0,
        reference: `ARCHIVE-${product.id}`,
        user: 'Admin',
        notes: `Product archived. Remaining stock of ${product.totalStock || 0} units preserved for audit and reconciliation.`
      });
    } else {
      // Hard delete: No historical transactions depend on this record
      const prevStock = product.totalStock || 0;
      this.data.products.splice(idx, 1);
      if (!Array.isArray(this.data.stockMovements)) this.data.stockMovements = [];
      this.data.stockMovements.unshift({
        id: `MOV-DEL-${Date.now().toString().slice(-4)}-${Math.floor(Math.random()*100)}`,
        date: new Date().toLocaleString(),
        product: product.name,
        productId: product.id,
        size: 'All',
        sku: `${(product.name || 'PRD').slice(0,3).toUpperCase()}-DEL`,
        type: 'Delete Product',
        quantity: -prevStock,
        reference: `DELETE-${product.id}`,
        user: 'Admin'
      });
    }

    this.save();
    return product;
  }

  adjustStock(sku, newStock, reason) {
    for (let p of (this.data.products || [])) {
      const variants = p.variants || [];
      let v = variants.find(v => v.sku === sku);
      if (v) {
        let diff = newStock - v.stock;
        v.stock = newStock;
        p.totalStock = (p.variants || []).reduce((sum, item) => sum + (Number(item.stock) || 0), 0);

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
window.store = store;
window.StoreManager = StoreManager;

window.clearDatabase = function() {
  store.clearDatabase();
  if (typeof toast !== 'undefined' && toast.show) {
    toast.show({ message: 'Database cleared! Products, purchases, and sales are now empty.', type: 'success' });
  }
  if (window.appInstance) window.appInstance.render();
};

window.loadSampleData = function() {
  store.loadSampleData();
  if (typeof toast !== 'undefined' && toast.show) {
    toast.show({ message: 'Sample demo data restored successfully.', type: 'success' });
  }
  if (window.appInstance) window.appInstance.render();
};

// ==========================================
// 2. UI HELPER COMPONENTS
// ==========================================
function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

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

/**
 * Badge colour family for a status label. The single source of truth so the
 * same meaning looks the same on every page:
 *   success  — Paid, Completed, Received, Active, In Stock
 *   warning  — Partial, Pending, Waiting for Receive, Partially Received,
 *              Low Stock, Partial Stock
 *   danger   — Failed, Out of Stock
 *   info     — Overpaid (excess collected, shown for information)
 *   secondary (neutral) — Cancelled, Draft, Inactive, Archived, anything else
 * Presentation only: it never changes a record's status.
 */
function getStatusBadgeVariant(status) {
  switch (status) {
    case 'Paid':
    case 'Completed':
    case 'Received':
    case 'Active':
    case 'In Stock':
      return 'success';
    case 'Partial':
    case 'Pending':
    case 'Partially Received':
    case 'Low Stock':
    case 'Partial Stock':
      return 'warning';
    case 'Failed':
    case 'Out of Stock':
      return 'danger';
    case 'Overpaid':
      return 'info';
    default:
      return isPurchaseWaiting(status) ? 'warning' : 'secondary';
  }
}

// `statusTint` gives a warning/danger card the soft tinted status surface
// (used by the stock-status KPIs); other cards keep a plain coloured border.
function createMetricCard({ label, value, subtext = null, icon = null, variant = 'default', onClick = null, statusTint = false }) {
  const card = document.createElement('div');
  const tinted = statusTint && (variant === 'warning' || variant === 'danger');
  card.className = `metric-card ${onClick ? 'metric-card-clickable' : ''} ${tinted ? `metric-card-status metric-card-${variant}` : ''}`;

  if (!tinted) {
    let borderColor = 'var(--border-color)';
    if (variant === 'danger') borderColor = 'var(--status-danger-border)';
    if (variant === 'warning') borderColor = 'var(--status-warning-border)';
    if (variant === 'success') borderColor = 'var(--status-success-border)';
    card.style.borderColor = borderColor;
  }

  let iconHtml = icon ? `
    <div class="metric-icon">
      <i data-lucide="${icon}" style="width: 16px; height: 16px;"></i>
    </div>
  ` : '';

  card.innerHTML = `
    <div class="metric-header" style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
      <span style="font-size: 0.725rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; color: var(--text-secondary);">${label}</span>
      ${iconHtml}
    </div>
    <div class="metric-value" style="font-size: 1.55rem; font-weight: 700; letter-spacing: -0.02em; line-height: 1.2;">${value}</div>
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

/**
 * In-app replacement for window.confirm().
 *
 * Native confirm() is unavailable in several embedded contexts (sandboxed
 * iframes and some app webviews), where it returns false immediately. That
 * silently turned destructive and workflow actions — Approve, Receive,
 * Delete — into no-ops. This renders a real modal and resolves to a boolean.
 *
 * Usage: if (await uiConfirm({ message })) { ... }
 */
function uiConfirm({
  title = 'Please confirm',
  message = '',
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  variant = 'primary',
  // When set, the confirm button stays disabled until this exact text is typed.
  requireText = ''
} = {}) {
  return new Promise(resolve => {
    let settled = false;
    const finish = (result) => {
      if (settled) return;
      settled = true;
      document.removeEventListener('keydown', onKey, true);
      resolve(result);
    };

    const body = document.createElement('div');
    body.style.cssText = 'display: flex; flex-direction: column; gap: 0.5rem;';
    // Preserve the \n\n paragraph breaks the old confirm() messages used.
    String(message).split(/\n{2,}/).forEach(para => {
      if (!para.trim()) return;
      const pEl = document.createElement('p');
      pEl.style.cssText = 'margin: 0; font-size: 0.9rem; line-height: 1.5; color: var(--text-secondary); white-space: pre-line;';
      pEl.textContent = para;
      body.appendChild(pEl);
    });

    let confirmInput = null;
    if (requireText) {
      const label = document.createElement('label');
      label.style.cssText = 'margin-top: 0.5rem; font-size: 0.85rem; font-weight: 600; color: var(--text-primary);';
      label.textContent = `Type ${requireText} to confirm`;
      confirmInput = document.createElement('input');
      confirmInput.type = 'text';
      confirmInput.className = 'form-input confirm-require-input';
      confirmInput.autocomplete = 'off';
      confirmInput.setAttribute('aria-label', `Type ${requireText} to confirm`);
      body.appendChild(label);
      body.appendChild(confirmInput);
    }
    const isConfirmTextOk = () => !confirmInput || confirmInput.value.trim() === requireText;

    const cancelBtn = createButton({
      text: cancelText,
      variant: 'secondary',
      onClick: () => { modal.closeModal(); }
    });
    const okBtn = createButton({
      text: confirmText,
      variant: variant,
      // Remove the overlay directly rather than via closeModal(), so onClose
      // (which resolves false) never fires for an accepted dialog.
      onClick: () => {
        if (!isConfirmTextOk()) return;
        modal.overlay.remove();
        finish(true);
      }
    });
    if (confirmInput) {
      const syncOk = () => {
        const ok = isConfirmTextOk();
        okBtn.disabled = !ok;
        okBtn.style.opacity = ok ? '' : '0.5';
        okBtn.style.cursor = ok ? '' : 'not-allowed';
      };
      confirmInput.addEventListener('input', syncOk);
      syncOk();
    }

    const modal = createModal({
      title,
      bodyElement: body,
      footerButtons: [cancelBtn, okBtn],
      onClose: () => finish(false)
    });

    function onKey(e) {
      if (e.key === 'Escape') { e.preventDefault(); modal.closeModal(); }
      else if (e.key === 'Enter') { e.preventDefault(); okBtn.click(); }
    }
    document.addEventListener('keydown', onKey, true);

    modal.overlay.classList.add('confirm-dialog-overlay');
    setTimeout(() => (confirmInput || okBtn).focus(), 0);
  });
}

// Keep a reference for any code path that still expects the native API.
window.uiConfirm = uiConfirm;

const toast = {
  show({ message, type = 'success', duration = 3000 }) {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    // Same semantic families as badges; 'info' previously fell through to the
    // green success check.
    const kind = ['success', 'warning', 'danger', 'info'].includes(type) ? type : 'success';
    const t = document.createElement('div');
    t.className = `toast toast-${kind}`;
    const icon = { success: 'check-circle-2', warning: 'alert-triangle', danger: 'alert-circle', info: 'info' }[kind];
    const color = `var(--status-${kind})`;

    t.innerHTML = `
      <i data-lucide="${icon}" style="width: 18px; height: 18px; color: ${color}; flex-shrink: 0;"></i>
      <span style="font-size: 0.875rem; font-weight: 500; color: var(--text-primary);">${escapeHtml(message)}</span>
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
    product = (store.data.products || []).find(p => p.name.toLowerCase() === productInput.toLowerCase() || p.id.toLowerCase() === productInput.toLowerCase());
    if (!product) product = store.data.products[0];
  }
  if (!product) return;

  const variants = product.variants || [{ size: 'Standard', stock: product.totalStock || 0, purchasePrice: product.purchasePrice || 0, sellingPrice: product.sellingPrice || 0 }];
  const totalStock = variants.reduce((sum, v) => sum + (v.stock || 0), 0);
  const totalCostValue = variants.reduce((sum, v) => sum + ((v.stock || 0) * (v.purchasePrice || product.purchasePrice || 0)), 0);

  const modalEl = document.createElement('div');
  modalEl.style.cssText = 'display: flex; flex-direction: column; gap: 1rem; width: 100%;';

  const modalBreadcrumb = createBreadcrumb([
    { label: 'Inventory', target: 'inventory' },
    { label: 'Product Details' }
  ], (target, params) => {
    if (modalObj && modalObj.closeModal) modalObj.closeModal();
    if (window.appInstance) window.appInstance.navigateTo(target, params);
  });
  modalEl.appendChild(modalBreadcrumb);

  const innerContent = document.createElement('div');
  innerContent.style.cssText = 'display: flex; flex-direction: column; gap: 1rem; width: 100%;';

  const isPriceSet = product.sellingPrice !== null && product.sellingPrice !== undefined && product.sellingPrice > 0;
  const priceDisplay = isPriceSet ? `₹${(product.sellingPrice || 0).toLocaleString()}` : 'Price Not Set';
  const stockInfo = typeof getProductStockStatus === 'function' ? getProductStockStatus(product) : { label: product.status || 'Active', variant: 'secondary' };

  innerContent.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; padding-bottom: 0.75rem; border-bottom: 1px solid var(--border-color);">
      <div>
        <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.25rem;">
          <h3 style="font-size: 1.2rem; font-weight: 700; color: var(--text-primary); margin: 0;">${escapeHtml(product.name)}</h3>
          ${createBadge({ label: stockInfo.label, variant: stockInfo.variant }).outerHTML}
          ${product.status === 'Inactive' ? createBadge({ label: 'Inactive', variant: 'secondary' }).outerHTML : ''}
        </div>
        <div style="font-size: 0.8rem; color: var(--text-secondary); display: flex; gap: 0.75rem; align-items: center; flex-wrap: wrap;">
          <span>Category: <strong>${escapeHtml(product.category || 'General')}</strong></span>
          <span>Brand: <strong>${escapeHtml(product.brand || 'Unbranded')}</strong></span>
        </div>
      </div>
    </div>

    <!-- Size & Pricing Breakdown Table -->
    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
      <h4 style="font-size: 0.95rem; font-weight: 600; color: var(--text-primary); margin: 0;">Size-Wise Stock & Pricing Breakdown</h4>
      <div class="table-responsive">
        <table class="admin-table">
          <thead>
            <tr>
              <th>Size</th>
              <th>Current Stock</th>
              <th>Buying Price / Unit (₹)</th>
              <th>Selling Price / Unit (₹)</th>
              <th>Total Stock Value (₹)</th>
            </tr>
          </thead>
          <tbody>
            ${variants.map(v => `
              <tr>
                <td><span style="font-weight: 600; padding: 0.2rem 0.5rem; background: var(--bg-secondary); border-radius: 4px; font-size: 0.8rem;">${escapeHtml(v.size || 'Standard')}</span></td>
                <td style="font-weight: 600; color: ${v.stock === 0 ? 'var(--status-danger)' : 'var(--text-primary)'};">${v.stock || 0} units</td>
                <td style="color: var(--text-secondary);">₹${(v.purchasePrice || product.purchasePrice || 0).toLocaleString()}</td>
                <td style="font-weight: 600;">${v.sellingPrice ? '₹' + (v.sellingPrice || 0).toLocaleString() : priceDisplay}</td>
                <td style="font-weight: 600;">₹${((v.stock || 0) * (v.sellingPrice || product.sellingPrice || 0)).toLocaleString()}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>

    ${product.description ? `
      <div style="display: flex; flex-direction: column; gap: 0.35rem; background: var(--bg-secondary); padding: 0.85rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
        <strong style="font-size: 0.85rem; color: var(--text-primary);">Description:</strong>
        <p style="font-size: 0.85rem; color: var(--text-secondary); margin: 0; line-height: 1.4;">${escapeHtml(product.description)}</p>
      </div>
    ` : ''}

    <!-- Stock Movement History Section -->
    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
      <h4 style="font-size: 0.95rem; font-weight: 600; color: var(--text-primary); margin: 0; display: flex; align-items: center; gap: 0.4rem;">
        <i data-lucide="history" style="width: 15px; height: 15px; color: var(--brand-primary);"></i>
        Stock Movement History
      </h4>
      <div class="table-responsive" style="max-height: 220px; overflow-y: auto; border: 1px solid var(--border-color); border-radius: var(--radius-sm);">
        <table class="admin-table" style="font-size: 0.8rem; margin: 0;">
          <thead>
            <tr>
              <th>Date & Time</th>
              <th>Type</th>
              <th>Size</th>
              <th>Qty Change</th>
              <th>Reference / Reason</th>
            </tr>
          </thead>
          <tbody>
            ${(() => {
              const allMovements = store.data.stockMovements || [];
              const productMovements = allMovements.filter(m => {
                return (m.product && m.product.toLowerCase() === product.name.toLowerCase()) ||
                       (m.productId && m.productId === product.id);
              });
              if (productMovements.length === 0) {
                return `<tr><td colspan="5" style="text-align: center; color: var(--text-secondary); padding: 1.25rem;">No stock movements recorded for this product yet.</td></tr>`;
              }
              return productMovements.map(m => `
                <tr>
                  <td style="color: var(--text-secondary);">${m.date || '-'}</td>
                  <td>${createBadge({ label: m.type || 'Movement', variant: m.type === 'Stock In' ? 'success' : (m.type === 'Sale' ? 'info' : 'warning') }).outerHTML}</td>
                  <td style="font-weight: 600;">${escapeHtml(m.size || m.sku || 'Standard')}</td>
                  <td style="font-weight: 700; color: ${m.quantity > 0 ? 'var(--status-success)' : 'var(--status-danger)'};">
                    ${m.quantity > 0 ? `+${m.quantity}` : m.quantity} units
                  </td>
                  <td style="color: var(--text-secondary);">${escapeHtml(m.reference || '-')}</td>
                </tr>
              `).join('');
            })()}
          </tbody>
        </table>
      </div>
    </div>
  `;

  modalEl.appendChild(innerContent);

  const modalObj = createModal({
    title: 'Product Inventory Details',
    bodyElement: modalEl,
    footerButtons: [
      createButton({
        text: 'Close',
        variant: 'secondary',
        onClick: () => modalObj.closeModal()
      })
    ]
  });
}


function openSaleDetailsModal(saleInput) {
  if (!saleInput) return;

  // Resolve sale from ID string or object, pulling fresh reference from store if available
  let sale = saleInput;
  if (typeof saleInput === 'string') {
    sale = (store.data.sales || []).find(s => s.id === saleInput || s.reference === saleInput) || { id: saleInput };
  } else if (saleInput && saleInput.id) {
    const liveSale = (store.data.sales || []).find(s => s.id === saleInput.id);
    if (liveSale) sale = liveSale;
  }

  // 1. Customer Information & Customer ID Lookup
  const custName = sale.customer || sale.customerName || 'Walk-in Customer';
  let custId = sale.customerId || '';
  let custPhone = sale.phone || sale.customerPhone || '';
  let matchedCustomer = null;

  if (custName && custName !== 'Walk-in Customer') {
    // The sale's own customerId decides who it belongs to; a name match is
    // only a fallback for legacy sales without one. Never match by phone.
    matchedCustomer = sale.customerId
      ? (store.data.customers || []).find(c => c.id === sale.customerId)
      : (store.data.customers || []).find(c => c.name && c.name.toLowerCase() === custName.toLowerCase());
    if (matchedCustomer) {
      if (!custId) custId = matchedCustomer.id || '';
      if ((!custPhone || custPhone === '-') && matchedCustomer.phone) custPhone = matchedCustomer.phone;
    }
  }

  // 2. Sale Reference & Status Information
  const saleRef = sale.id || sale.reference || '—';
  const saleDate = sale.date || '—';
  const paymentMethod = sale.paymentMethod || 'Cash';
  const paymentStatus = sale.status || sale.paymentStatus || 'Completed';

  const statusBadgeVariant = getStatusBadgeVariant(paymentStatus);

  // 3. Itemized Products Details
  const items = Array.isArray(sale.items) && sale.items.length > 0 ? sale.items : [];
  let calculatedSubtotal = 0;
  let calculatedItemDiscount = 0;
  let totalUnits = 0;

  const itemRowsHtml = items.length > 0 ? items.map((i, idx) => {
    const prodName = i.product || i.productName || i.name || 'Unnamed Product';
    
    // Resolve size from item.size or extract from SKU (e.g., OXF-WHT-M -> M)
    let size = i.size || '';
    if (!size && i.sku) {
      const parts = String(i.sku).split('-');
      if (parts.length > 1) {
        size = parts[parts.length - 1];
      }
    }
    const sizeDisplay = size ? size : 'Standard';

    const qty = Number(i.qty !== undefined ? i.qty : (i.quantity || 1)) || 0;
    const unitPrice = Number(i.price !== undefined ? i.price : (i.sellingPrice || 0)) || 0;
    const itemDiscount = Number(i.discount || 0) || 0;
    const itemSubtotal = unitPrice * qty;
    const itemTotal = i.amount !== undefined ? Number(i.amount) : (itemSubtotal - itemDiscount);

    totalUnits += qty;
    calculatedSubtotal += itemSubtotal;
    calculatedItemDiscount += itemDiscount;

    return `
      <tr style="border-bottom: 1px solid var(--border-color); transition: background-color 0.15s ease;">
        <td style="font-weight: 600; color: var(--text-secondary); text-align: center; padding: 0.75rem 0.5rem; vertical-align: middle;">${idx + 1}</td>
        <td style="padding: 0.75rem; vertical-align: middle;">
          <div style="font-weight: 600; color: var(--text-primary); font-size: 0.875rem;">${escapeHtml(prodName)}</div>
          ${i.sku ? `<div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 2px; font-family: monospace;">SKU: ${escapeHtml(i.sku)}</div>` : ''}
        </td>
        <td style="padding: 0.75rem; text-align: center; vertical-align: middle;">
          <span style="display: inline-block; padding: 0.2rem 0.55rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: 4px; font-size: 0.785rem; font-weight: 600; color: var(--text-primary);">
            ${sizeDisplay}
          </span>
        </td>
        <td style="font-weight: 600; color: var(--text-primary); text-align: center; padding: 0.75rem; font-size: 0.875rem; vertical-align: middle;">${qty}</td>
        <td style="color: var(--text-primary); font-size: 0.875rem; text-align: right; padding: 0.75rem; vertical-align: middle;">₹${unitPrice.toLocaleString('en-IN')}</td>
        <td style="color: var(--text-secondary); font-size: 0.875rem; text-align: right; padding: 0.75rem; vertical-align: middle;">₹${itemSubtotal.toLocaleString('en-IN')}</td>
        <td style="color: ${itemDiscount > 0 ? 'var(--status-warning)' : 'var(--text-secondary)'}; font-size: 0.875rem; text-align: right; padding: 0.75rem; vertical-align: middle; font-weight: ${itemDiscount > 0 ? '600' : 'normal'};">
          ${itemDiscount > 0 ? `-₹${itemDiscount.toLocaleString('en-IN')}` : '—'}
        </td>
        <td style="font-weight: 700; color: var(--text-primary); text-align: right; padding: 0.75rem; font-size: 0.875rem; vertical-align: middle;">₹${itemTotal.toLocaleString('en-IN')}</td>
      </tr>
    `;
  }).join('') : `
    <tr>
      <td colspan="8" style="text-align: center; color: var(--text-secondary); padding: 2rem; font-size: 0.875rem;">No itemized products recorded for this sale.</td>
    </tr>
  `;

  // 4. Financial Calculations
  const subtotal = calculatedSubtotal > 0 ? calculatedSubtotal : (Number(sale.subtotal) || Number(sale.totalAmount) || 0);
  const overallDiscount = (sale.discount !== undefined && sale.discount !== null) ? Number(sale.discount) : calculatedItemDiscount;
  const otherCharges = Number(sale.tax || sale.otherCharges || sale.charges || 0) || 0;
  const finalTotal = sale.totalAmount !== undefined ? Number(sale.totalAmount) : Math.max(0, subtotal - overallDiscount + otherCharges);
  const totalItemsCount = items.length;
  const totalUnitsCount = totalUnits > 0 ? totalUnits : (Number(sale.itemCount) || items.length);

  // 5. Additional Sale Information Check
  const notes = sale.notes || sale.note || '';
  const staff = sale.staff || sale.cashier || sale.salesperson || '';
  const paymentRef = sale.paymentReference || sale.paymentRef || sale.transactionId || '';
  const returnStatus = sale.returnStatus || sale.refundStatus || '';
  const hasAdditionalInfo = Boolean(notes || staff || paymentRef || returnStatus);

  // 6. Build Modal DOM Elements
  const modalEl = document.createElement('div');
  modalEl.style.cssText = 'display: flex; flex-direction: column; gap: 1.25rem; width: 100%;';

  let modalObj;
  const modalBreadcrumb = createBreadcrumb([
    { label: 'Sales', target: 'sales' },
    { label: `Sale Details (${saleRef})` }
  ], (target, params) => {
    if (modalObj && modalObj.closeModal) modalObj.closeModal();
    if (window.appInstance) window.appInstance.navigateTo(target, params);
  });
  modalEl.appendChild(modalBreadcrumb);

  const innerContent = document.createElement('div');
  innerContent.style.cssText = 'display: flex; flex-direction: column; gap: 1.25rem; width: 100%;';
  innerContent.innerHTML = `
    <!-- 1. Top Sale Summary KPI Cards -->
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 0.85rem;">
      <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 0.85rem 1rem;">
        <div style="font-size: 0.7rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em;">Invoice / Bill ID</div>
        <div style="font-weight: 700; font-size: 1.05rem; color: var(--text-primary); margin-top: 0.25rem; font-family: monospace;">${escapeHtml(saleRef)}</div>
        <div style="font-size: 0.775rem; color: var(--text-secondary); margin-top: 0.25rem; display: flex; align-items: center; gap: 0.35rem;">
          <i data-lucide="calendar" style="width: 12px; height: 12px;"></i>
          <span>${saleDate}</span>
        </div>
      </div>

      <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 0.85rem 1rem;">
        <div style="font-size: 0.7rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em;">Total Payable</div>
        <div style="font-weight: 700; font-size: 1.25rem; color: var(--brand-primary); margin-top: 0.2rem;">₹${finalTotal.toLocaleString('en-IN')}</div>
        <div style="margin-top: 0.25rem;">
          ${createBadge({ label: paymentStatus, variant: statusBadgeVariant }).outerHTML}
        </div>
      </div>

      <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 0.85rem 1rem;">
        <div style="font-size: 0.7rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em;">Items & Units Sold</div>
        <div style="font-weight: 700; font-size: 1.15rem; color: var(--text-primary); margin-top: 0.2rem;">
          ${totalUnitsCount} <span style="font-size: 0.825rem; font-weight: 500; color: var(--text-secondary);">Units</span>
        </div>
        <div style="font-size: 0.775rem; color: var(--text-secondary); margin-top: 0.25rem;">
          ${totalItemsCount} line item${totalItemsCount === 1 ? '' : 's'}
        </div>
      </div>

      <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 0.85rem 1rem;">
        <div style="font-size: 0.7rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em;">Payment Method</div>
        <div style="font-weight: 600; font-size: 0.95rem; color: var(--text-primary); margin-top: 0.25rem; display: flex; align-items: center; gap: 0.4rem;">
          <i data-lucide="credit-card" style="width: 15px; height: 15px; color: var(--text-secondary);"></i>
          <span>${paymentMethod}</span>
        </div>
        <div style="font-size: 0.775rem; color: var(--text-secondary); margin-top: 0.3rem;">
          ${createBadge({ label: paymentMethod, variant: 'secondary' }).outerHTML}
        </div>
      </div>
    </div>

    <!-- 2. Dedicated Customer Details Section -->
    <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1rem 1.25rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem;">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <i data-lucide="user" style="width: 16px; height: 16px; color: var(--brand-primary);"></i>
          <h4 style="margin: 0; font-size: 0.875rem; font-weight: 600; color: var(--text-primary); text-transform: uppercase; letter-spacing: 0.04em;">Customer Details</h4>
        </div>
        ${custId ? `<span class="badge badge-secondary" style="font-size: 0.75rem; padding: 0.2rem 0.55rem; font-weight: 600;"><i data-lucide="tag" style="width: 11px; height: 11px; margin-right: 4px; display: inline-block; vertical-align: -1px;"></i>ID: ${escapeHtml(custId)}</span>` : ''}
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 0.85rem 1.25rem; font-size: 0.85rem;">
        <div>
          <div style="font-size: 0.725rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase; letter-spacing: 0.03em;">Customer Name</div>
          <div style="font-weight: 600; color: var(--text-primary); margin-top: 0.2rem; font-size: 0.95rem;">${escapeHtml(custName)}</div>
        </div>
        <div>
          <div style="font-size: 0.725rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase; letter-spacing: 0.03em;">Customer ID</div>
          <div style="font-weight: 500; color: var(--text-primary); margin-top: 0.2rem; font-family: monospace;">${custId ? custId : '—'}</div>
        </div>
        <div>
          <div style="font-size: 0.725rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase; letter-spacing: 0.03em;">Phone Number</div>
          <div style="font-weight: 500; color: ${custPhone && custPhone !== '-' ? 'var(--text-primary)' : 'var(--text-secondary)'}; margin-top: 0.2rem;">
            ${custPhone && custPhone !== '-' ? custPhone : '—'}
          </div>
        </div>
        ${matchedCustomer && matchedCustomer.ordersCount !== undefined ? `
          <div>
            <div style="font-size: 0.725rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase; letter-spacing: 0.03em;">Total Orders</div>
            <div style="font-weight: 600; color: var(--text-primary); margin-top: 0.2rem;">${matchedCustomer.ordersCount} orders</div>
          </div>
        ` : ''}
        ${matchedCustomer && matchedCustomer.totalSpend !== undefined ? `
          <div>
            <div style="font-size: 0.725rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase; letter-spacing: 0.03em;">Lifetime Spend</div>
            <div style="font-weight: 600; color: var(--text-primary); margin-top: 0.2rem;">₹${Number(matchedCustomer.totalSpend).toLocaleString('en-IN')}</div>
          </div>
        ` : ''}
        ${matchedCustomer && matchedCustomer.lastPurchase ? `
          <div>
            <div style="font-size: 0.725rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase; letter-spacing: 0.03em;">Last Purchase</div>
            <div style="font-weight: 500; color: var(--text-primary); margin-top: 0.2rem;">${matchedCustomer.lastPurchase}</div>
          </div>
        ` : ''}
        ${matchedCustomer && matchedCustomer.email ? `
          <div>
            <div style="font-size: 0.725rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase; letter-spacing: 0.03em;">Email</div>
            <div style="font-weight: 500; color: var(--text-primary); margin-top: 0.2rem;">${escapeHtml(matchedCustomer.email)}</div>
          </div>
        ` : ''}
        ${matchedCustomer && matchedCustomer.address ? `
          <div>
            <div style="font-size: 0.725rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase; letter-spacing: 0.03em;">Address</div>
            <div style="font-weight: 500; color: var(--text-primary); margin-top: 0.2rem;">${escapeHtml(matchedCustomer.address)}</div>
          </div>
        ` : ''}
      </div>
    </div>

    <!-- 3. Itemized Bill Details Table -->
    <div>
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.65rem;">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <i data-lucide="shopping-bag" style="width: 16px; height: 16px; color: var(--brand-primary);"></i>
          <h4 style="font-size: 0.9rem; font-weight: 600; margin: 0; color: var(--text-primary); text-transform: uppercase; letter-spacing: 0.04em;">Itemized Bill Details</h4>
        </div>
        <span style="font-size: 0.775rem; color: var(--text-secondary); font-weight: 500;">
          ${items.length} line item${items.length === 1 ? '' : 's'} (${totalUnitsCount} total units)
        </span>
      </div>
      <div class="table-responsive" style="border: 1px solid var(--border-color); border-radius: var(--radius-md); background: var(--bg-surface); overflow-x: auto;">
        <table class="admin-table" style="font-size: 0.85rem; margin: 0; width: 100%; border-collapse: collapse;">
          <thead>
            <tr style="background: var(--bg-secondary); border-bottom: 1px solid var(--border-color);">
              <th style="width: 5%; text-align: center; padding: 0.7rem 0.5rem; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; color: var(--text-secondary);">#</th>
              <th style="width: 27%; text-align: left; padding: 0.7rem 0.75rem; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; color: var(--text-secondary);">Product Name</th>
              <th style="width: 12%; text-align: center; padding: 0.7rem 0.75rem; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; color: var(--text-secondary);">Size / Variant</th>
              <th style="width: 8%; text-align: center; padding: 0.7rem 0.5rem; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; color: var(--text-secondary);">Quantity</th>
              <th style="width: 12%; text-align: right; padding: 0.7rem 0.75rem; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; color: var(--text-secondary);">Price / Unit</th>
              <th style="width: 12%; text-align: right; padding: 0.7rem 0.75rem; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; color: var(--text-secondary);">Item Subtotal</th>
              <th style="width: 10%; text-align: right; padding: 0.7rem 0.75rem; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; color: var(--text-secondary);">Discount</th>
              <th style="width: 14%; text-align: right; padding: 0.7rem 0.75rem; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; color: var(--text-secondary);">Final Total</th>
            </tr>
          </thead>
          <tbody>
            ${itemRowsHtml}
          </tbody>
        </table>
      </div>
    </div>

    <!-- 4. Lower Two-Column Section: Additional Sale Information & Bill Calculation Summary -->
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1rem; align-items: start;">
      <!-- Left Column: Additional Sale Information -->
      <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.15rem 1.25rem;">
        <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem;">
          <i data-lucide="file-text" style="width: 16px; height: 16px; color: var(--brand-primary);"></i>
          <h4 style="margin: 0; font-size: 0.875rem; font-weight: 600; color: var(--text-primary); text-transform: uppercase; letter-spacing: 0.04em;">Additional Sale Information</h4>
        </div>
        <div style="display: flex; flex-direction: column; gap: 0.65rem; font-size: 0.85rem;">
          ${notes ? `
            <div>
              <div style="font-size: 0.725rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase; letter-spacing: 0.03em;">Notes / Remarks</div>
              <div style="color: var(--text-primary); margin-top: 0.15rem; font-style: italic;">"${escapeHtml(notes)}"</div>
            </div>
          ` : ''}
          ${staff ? `
            <div>
              <div style="font-size: 0.725rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase; letter-spacing: 0.03em;">Staff / Cashier</div>
              <div style="color: var(--text-primary); font-weight: 500; margin-top: 0.15rem;">${staff}</div>
            </div>
          ` : ''}
          ${paymentRef ? `
            <div>
              <div style="font-size: 0.725rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase; letter-spacing: 0.03em;">Payment Reference</div>
              <div style="color: var(--text-primary); font-family: monospace; font-size: 0.8rem; margin-top: 0.15rem;">${paymentRef}</div>
            </div>
          ` : ''}
          ${returnStatus ? `
            <div>
              <div style="font-size: 0.725rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase; letter-spacing: 0.03em;">Return / Refund Status</div>
              <div style="margin-top: 0.2rem;"><span class="badge badge-warning">${returnStatus}</span></div>
            </div>
          ` : ''}
          ${!hasAdditionalInfo ? `
            <div style="color: var(--text-secondary); font-size: 0.825rem; line-height: 1.6;">
              <div style="display: flex; justify-content: space-between; padding: 0.2rem 0;">
                <span style="color: var(--text-secondary);">Sales Channel:</span>
                <span style="font-weight: 500; color: var(--text-primary);">Point of Sale (In-Store)</span>
              </div>
              <div style="display: flex; justify-content: space-between; padding: 0.2rem 0;">
                <span style="color: var(--text-secondary);">Terminal:</span>
                <span style="font-weight: 500; color: var(--text-primary);">Master Admin Register</span>
              </div>
              <div style="display: flex; justify-content: space-between; padding: 0.2rem 0;">
                <span style="color: var(--text-secondary);">Fulfillment Status:</span>
                <span style="font-weight: 500; color: var(--status-success);">Fulfilled & Delivered</span>
              </div>
            </div>
          ` : ''}
        </div>
      </div>

      <!-- Right Column: Bill Calculation Summary -->
      <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.15rem 1.25rem;">
        <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem;">
          <i data-lucide="calculator" style="width: 16px; height: 16px; color: var(--brand-primary);"></i>
          <h4 style="margin: 0; font-size: 0.875rem; font-weight: 600; color: var(--text-primary); text-transform: uppercase; letter-spacing: 0.04em;">Bill Calculation Summary</h4>
        </div>
        <div style="display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.875rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; color: var(--text-secondary);">
            <span>Items Subtotal:</span>
            <strong style="color: var(--text-primary);">₹${subtotal.toLocaleString('en-IN')}</strong>
          </div>
          ${overallDiscount > 0 ? `
            <div style="display: flex; justify-content: space-between; align-items: center; color: var(--status-warning);">
              <span>Discount:</span>
              <strong>-₹${overallDiscount.toLocaleString('en-IN')}</strong>
            </div>
          ` : ''}
          ${otherCharges > 0 ? `
            <div style="display: flex; justify-content: space-between; align-items: center; color: var(--text-secondary);">
              <span>Additional Charges / Taxes:</span>
              <strong style="color: var(--text-primary);">+₹${otherCharges.toLocaleString('en-IN')}</strong>
            </div>
          ` : ''}
          <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-color); padding-top: 0.65rem; margin-top: 0.35rem; font-size: 1.05rem; font-weight: 700;">
            <span style="color: var(--text-primary);">Final Total:</span>
            <span style="color: var(--brand-primary); font-size: 1.2rem;">₹${finalTotal.toLocaleString('en-IN')}</span>
          </div>
          ${sale.amountPaid !== undefined && sale.amountPaid !== null ? `
            <div style="display: flex; justify-content: space-between; align-items: center; color: var(--text-secondary); padding-top: 0.25rem;">
              <span>Amount Paid:</span>
              <strong style="color: var(--text-primary);">₹${Number(sale.amountPaid).toLocaleString('en-IN')}</strong>
            </div>
          ` : ''}
          ${sale.balanceDue !== undefined && sale.balanceDue !== null ? `
            <div style="display: flex; justify-content: space-between; align-items: center; color: var(--status-warning);">
              <span>Balance Due:</span>
              <strong>₹${Number(sale.balanceDue).toLocaleString('en-IN')}</strong>
            </div>
          ` : ''}
          ${Number(sale.overpaidAmount || 0) > 0 ? `
            <div style="display: flex; justify-content: space-between; align-items: center; color: var(--status-danger);">
              <span>Overpaid:</span>
              <strong>₹${Number(sale.overpaidAmount).toLocaleString('en-IN')}</strong>
            </div>
          ` : ''}
          ${sale.changeReturned !== undefined && sale.changeReturned !== null ? `
            <div style="display: flex; justify-content: space-between; align-items: center; color: var(--text-secondary);">
              <span>Change Returned:</span>
              <strong style="color: var(--text-primary);">₹${Number(sale.changeReturned).toLocaleString('en-IN')}</strong>
            </div>
          ` : ''}
        </div>
      </div>
    </div>
  `;

  // Crucial: Append inner content to modalEl
  modalEl.appendChild(innerContent);

  const deleteBtn = createButton({
    text: 'Delete Sale',
    icon: 'trash-2',
    variant: 'ghost',
    onClick: async () => {
      const confirmed = await uiConfirm({ title: 'Confirm deletion', message: `Are you sure you want to delete sale "${saleRef}"?\n\nThis will restore deducted inventory quantities and recalculate customer metrics.\n\nThis action cannot be undone.`, confirmText: 'Delete', variant: 'danger' });
      if (confirmed) {
        try {
          store.deleteSale(sale.id);
          toast.show({ message: `Sale ${saleRef} deleted successfully.`, type: 'info' });
          if (modalObj && modalObj.closeModal) modalObj.closeModal();
          const salesTbody = document.getElementById('sales-table-body');
          if (salesTbody && window.appInstance) {
            window.appInstance.renderPage('sales');
          }
        } catch (err) {
          toast.show({ message: err.message, type: 'danger' });
        }
      }
    }
  });
  deleteBtn.style.color = 'var(--status-danger)';

  const printBtn = createButton({
    text: 'Print Receipt',
    icon: 'printer',
    variant: 'secondary',
    onClick: () => window.print()
  });
  const closeBtn = createButton({
    text: 'Close',
    variant: 'secondary',
    onClick: () => {
      if (modalObj && modalObj.closeModal) modalObj.closeModal();
    }
  });

  modalObj = createModal({
    title: `Sale Details — ${saleRef}`,
    bodyElement: modalEl,
    footerButtons: [deleteBtn, printBtn, closeBtn]
  });

  if (modalObj && modalObj.overlay) {
    const mc = modalObj.overlay.querySelector('.modal-content');
    if (mc) {
      mc.style.maxWidth = '840px';
      mc.style.width = '95%';
      mc.style.maxHeight = '90vh';
      mc.style.display = 'flex';
      mc.style.flexDirection = 'column';
      mc.style.overflow = 'hidden';
    }
    const mb = modalObj.overlay.querySelector('.modal-body');
    if (mb) {
      mb.style.overflowY = 'auto';
      mb.style.flex = '1';
      mb.style.padding = '1.25rem 1.5rem';
    }
    if (window.lucide) window.lucide.createIcons();
  }
}

function createBreadcrumb(items = [], onNavigate = null) {
  const container = document.createElement('div');
  container.className = 'content-header-nav';
  container.style.cssText = 'display: flex; align-items: center; gap: 0.25rem; font-size: 0.875rem; font-weight: 500; line-height: 1.4;';

  // Single top-level page: render compact page context label in active accent color
  if (items.length === 1) {
    const span = document.createElement('span');
    span.className = 'page-context-label';
    span.style.cssText = 'font-size: 0.875rem; font-weight: 500; color: var(--brand-primary); line-height: 1.4; margin: 0; letter-spacing: 0.01em;';
    span.textContent = items[0].label;
    container.appendChild(span);
    return container;
  }

  // Child / Detail page: render hierarchical parent / child breadcrumb
  const nav = document.createElement('nav');
  nav.setAttribute('aria-label', 'Breadcrumb');
  nav.style.cssText = 'display: flex; align-items: center; gap: 0.25rem; font-size: 0.875rem; font-weight: 500; line-height: 1.4;';

  items.forEach((item, index) => {
    const isLast = index === items.length - 1;

    if (index > 0) {
      const sep = document.createElement('span');
      sep.style.cssText = 'color: var(--text-tertiary); margin: 0 0.3rem; user-select: none; font-size: 0.825rem; opacity: 0.7;';
      sep.textContent = '/';
      nav.appendChild(sep);
    }

    if (isLast) {
      const span = document.createElement('span');
      span.style.cssText = 'color: var(--brand-primary); font-weight: 600; font-size: 0.875rem;';
      span.textContent = item.label;
      nav.appendChild(span);
    } else {
      const link = document.createElement('a');
      link.href = '#';
      link.style.cssText = 'color: var(--text-secondary); text-decoration: none; transition: color 0.15s ease; cursor: pointer; font-weight: 500; font-size: 0.875rem;';
      link.textContent = item.label;
      link.addEventListener('mouseenter', () => { link.style.color = 'var(--brand-primary)'; });
      link.addEventListener('mouseleave', () => { link.style.color = 'var(--text-secondary)'; });
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetPage = item.target || item.page;
        if (onNavigate) {
          onNavigate(targetPage, item.params || {});
        } else if (window.appInstance && window.appInstance.navigateTo) {
          window.appInstance.navigateTo(targetPage, item.params || {});
        }
      });
      nav.appendChild(link);
    }
  });

  container.appendChild(nav);
  return container;
}


// ==========================================
// 3. LAYOUT COMPONENTS
// ==========================================
const NAV_ITEMS = [
  { id: 'overview', label: 'Overview', icon: 'layout-dashboard' },
  { id: 'inventory', label: 'Inventory', icon: 'boxes' },
  { id: 'purchases', label: 'Purchases / Stock In', icon: 'truck' },
  { id: 'sales', label: 'Sales', icon: 'shopping-cart' },
  { id: 'customers', label: 'Customers', icon: 'users' },
  { id: 'reports', label: 'Reports', icon: 'bar-chart-3' },
  { id: 'settings', label: 'Settings', icon: 'settings' }
];

function createSidebar(activeNavId, onNavigate) {
  const sidebar = document.createElement('aside');
  sidebar.className = 'sidebar';
  
  // Store identity comes from Settings -> Store Details.
  const sbInfo = (typeof store !== 'undefined' && store.getStoreInfo) ? store.getStoreInfo() : {};
  const storeName = sbInfo.name || 'Master Admin';
  const storeBranch = sbInfo.branch || '';
  const storeBadge = (storeName.trim()[0] || 'M').toUpperCase();

  const header = document.createElement('div');
  header.className = 'sidebar-header';
  header.innerHTML = `
    <div class="brand-badge">${escapeHtml(storeBadge)}</div>
    <div>
      <div class="brand-title">${escapeHtml(storeName)}</div>
      <div class="brand-subtitle">${escapeHtml(storeBranch)}</div>
    </div>
  `;
  
  const nav = document.createElement('nav');
  nav.className = 'sidebar-nav';
  
  const effectiveNavId = activeNavId === 'manage-product' ? 'inventory' : activeNavId;
  NAV_ITEMS.forEach(item => {
    const btn = document.createElement('button');
    btn.className = `nav-item ${item.id === effectiveNavId ? 'active' : ''}`;
    btn.innerHTML = `
      <i data-lucide="${item.icon}" style="width: 18px; height: 18px;"></i>
      <span>${item.label}</span>
    `;
    btn.addEventListener('click', () => onNavigate(item.id));
    nav.appendChild(btn);
  });
  
  // Logout is an action, not a route: it lives in its own footer below the
  // navigation and never receives the active-page styling.
  const footer = document.createElement('div');
  footer.className = 'sidebar-footer';
  const logoutBtn = document.createElement('button');
  logoutBtn.type = 'button';
  logoutBtn.className = 'nav-item nav-logout';
  logoutBtn.innerHTML = `
    <i data-lucide="log-out" style="width: 18px; height: 18px;"></i>
    <span>Logout</span>
  `;
  logoutBtn.addEventListener('click', handleLogout);
  footer.appendChild(logoutBtn);

  sidebar.appendChild(header);
  sidebar.appendChild(nav);
  sidebar.appendChild(footer);
  return sidebar;
}

/**
 * Logout action for the sidebar.
 *
 * The app has no authentication yet — no sign-in, session or user account
 * (see renderProfilePage) — so there is no session to end. This is the single
 * place to connect a real sign-out once authentication exists. Until then it
 * only explains that, and deliberately touches no store data or localStorage.
 */
function handleLogout() {
  toast.show({
    message: 'Logout isn’t available yet — this admin has no sign-in, so there is no session to end.',
    type: 'info',
    duration: 4500
  });
}

function createTopbar(activeTitle, onThemeToggle, onNavigate = null) {
  const topbar = document.createElement('header');
  topbar.className = 'topbar';
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';

  // Owner identity comes from Settings -> Store Details.
  const sInfo = (typeof store !== 'undefined' && store.getStoreInfo) ? store.getStoreInfo() : {};
  const ownerName = sInfo.ownerName || 'Store Owner';
  const ownerRole = sInfo.ownerRole || 'Store Owner';
  const ownerInitials = ownerName
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map(w => w[0].toUpperCase())
    .join('') || 'S';
  const branchLabel = sInfo.branch || 'Store #01';

  topbar.innerHTML = `
    <div class="topbar-left">
      <h1 class="page-title" style="font-size: 1.35rem;">${activeTitle}</h1>
    </div>
    <div class="topbar-right">
      <div style="font-size: 0.8rem; background: var(--bg-secondary); padding: 0.35rem 0.75rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color); display: flex; align-items: center; gap: 0.4rem;">
        <span style="width: 8px; height: 8px; border-radius: 50%; background-color: var(--status-success);"></span>
        <span style="font-weight: 500; color: var(--text-secondary);">${escapeHtml(branchLabel)} • Online</span>
      </div>
      
      <button class="btn btn-secondary btn-sm theme-toggle-btn" title="Toggle Light/Dark Mode" style="padding: 0.45rem;">
        <i data-lucide="${currentTheme === 'dark' ? 'sun' : 'moon'}" style="width: 16px; height: 16px;"></i>
      </button>

      <button type="button" class="topbar-profile-btn" title="View profile" aria-label="View profile" style="display: flex; align-items: center; gap: 0.6rem; padding: 0.25rem 0.5rem 0.25rem 0.75rem; margin-left: 0.25rem; border: none; border-left: 1px solid var(--border-color); border-radius: var(--radius-sm); background: transparent; cursor: pointer; text-align: left; font: inherit; color: inherit;">
        <div style="width: 32px; height: 32px; border-radius: 50%; background-color: var(--brand-primary); color: var(--brand-text); display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 0.85rem; flex-shrink: 0;">
          ${escapeHtml(ownerInitials)}
        </div>
        <div style="display: flex; flex-direction: column;">
          <span style="font-size: 0.85rem; font-weight: 600; line-height: 1.2; color: var(--text-primary);">${escapeHtml(ownerName)}</span>
          <span style="font-size: 0.725rem; color: var(--text-secondary);">${escapeHtml(ownerRole)}</span>
        </div>
        <i data-lucide="chevron-right" style="width: 15px; height: 15px; color: var(--text-secondary); flex-shrink: 0;"></i>
      </button>
    </div>
  `;
  
  topbar.querySelector('.theme-toggle-btn').addEventListener('click', onThemeToggle);

  const profileBtn = topbar.querySelector('.topbar-profile-btn');
  if (profileBtn) {
    profileBtn.addEventListener('click', () => {
      if (onNavigate) onNavigate('profile');
      else if (window.appInstance) window.appInstance.navigateTo('profile');
    });
    profileBtn.addEventListener('mouseenter', () => { profileBtn.style.background = 'var(--bg-secondary)'; });
    profileBtn.addEventListener('mouseleave', () => { profileBtn.style.background = 'transparent'; });
  }

  return topbar;
}

// ==========================================
// REUSABLE PAGINATION HELPERS
// ==========================================
function getPageNumbers(current, total) {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  const pages = [];
  if (current <= 4) {
    for (let i = 1; i <= 5; i++) pages.push(i);
    pages.push('...');
    pages.push(total);
  } else if (current >= total - 3) {
    pages.push(1);
    pages.push('...');
    for (let i = total - 4; i <= total; i++) pages.push(i);
  } else {
    pages.push(1);
    pages.push('...');
    pages.push(current - 1);
    pages.push(current);
    pages.push(current + 1);
    pages.push('...');
    pages.push(total);
  }
  return pages;
}

function renderPaginationBar({
  container,
  totalItems,
  currentPage,
  pageSize,
  pageSizeOptions = [5, 10, 25, 50],
  itemName = 'records',
  onPageChange,
  onPageSizeChange,
  customPrefix = ''
}) {
  if (!container) return;
  if (totalItems === 0) {
    container.style.display = 'none';
    container.innerHTML = '';
    return;
  }
  container.style.display = 'flex';
  container.className = 'table-pagination-container';
  container.style.cssText = 'display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; padding-top: 0.25rem;';

  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const validCurrentPage = Math.min(Math.max(1, currentPage), totalPages);
  const startIdx = (validCurrentPage - 1) * pageSize;
  const endIdx = Math.min(startIdx + pageSize, totalItems);

  const prefixClass = customPrefix ? `${customPrefix}-` : '';

  container.innerHTML = `
    <div style="display: flex; align-items: center; gap: 1.25rem; flex-wrap: wrap;">
      <span class="${prefixClass}pagination-info pagination-info" style="font-size: 0.825rem; color: var(--text-secondary);">
        Showing <strong style="color: var(--text-primary); font-weight: 600;">${startIdx + 1}–${endIdx}</strong> of <strong style="color: var(--text-primary); font-weight: 600;">${totalItems}</strong> ${itemName}
      </span>
      <div style="display: flex; align-items: center; gap: 0.45rem; font-size: 0.825rem; color: var(--text-secondary);">
        <span>Rows per page:</span>
        <select class="form-select ${prefixClass}page-size-select pagination-page-size" style="padding: 0.25rem 0.55rem; font-size: 0.8rem; width: auto; height: auto;">
          ${pageSizeOptions.map(opt => `<option value="${opt}" ${opt === pageSize ? 'selected' : ''}>${opt}</option>`).join('')}
        </select>
      </div>
    </div>
    <div class="${prefixClass}pagination-nav pagination-nav" style="display: flex; align-items: center; gap: 0.35rem; flex-wrap: wrap;"></div>
  `;

  const sizeSelect = container.querySelector(`.${prefixClass}page-size-select`);
  if (sizeSelect && onPageSizeChange) {
    sizeSelect.addEventListener('change', (e) => {
      onPageSizeChange(parseInt(e.target.value, 10) || 5);
    });
  }

  const navEl = container.querySelector(`.${prefixClass}pagination-nav`);
  if (navEl) {
    const prevBtn = document.createElement('button');
    prevBtn.type = 'button';
    prevBtn.className = `btn btn-sm btn-secondary ${prefixClass}prev-btn pagination-prev-btn`;
    prevBtn.style.cssText = 'padding: 0.3rem 0.65rem; font-size: 0.8rem; display: inline-flex; align-items: center; gap: 0.35rem;';
    prevBtn.innerHTML = `<i data-lucide="chevron-left" style="width: 14px; height: 14px;"></i> Previous`;
    if (validCurrentPage <= 1) {
      prevBtn.disabled = true;
      prevBtn.style.opacity = '0.5';
      prevBtn.style.cursor = 'not-allowed';
    } else {
      prevBtn.addEventListener('click', () => onPageChange(validCurrentPage - 1));
    }
    navEl.appendChild(prevBtn);

    const pageNumbers = getPageNumbers(validCurrentPage, totalPages);
    pageNumbers.forEach(p => {
      if (p === '...') {
        const dots = document.createElement('span');
        dots.style.cssText = 'padding: 0.3rem 0.45rem; font-size: 0.8rem; color: var(--text-secondary); user-select: none;';
        dots.textContent = '...';
        navEl.appendChild(dots);
      } else {
        const pageBtn = document.createElement('button');
        pageBtn.type = 'button';
        pageBtn.className = `btn btn-sm ${p === validCurrentPage ? 'btn-primary' : 'btn-secondary'} ${prefixClass}page-btn ${prefixClass}page-num-btn pagination-page-btn`;
        pageBtn.style.cssText = `padding: 0.3rem 0.65rem; font-size: 0.8rem; min-width: 32px; font-weight: ${p === validCurrentPage ? '700' : '500'};`;
        pageBtn.textContent = p;
        if (p === validCurrentPage) {
          pageBtn.setAttribute('aria-current', 'page');
        } else {
          pageBtn.addEventListener('click', () => onPageChange(p));
        }
        navEl.appendChild(pageBtn);
      }
    });

    const nextBtn = document.createElement('button');
    nextBtn.type = 'button';
    nextBtn.className = `btn btn-sm btn-secondary ${prefixClass}next-btn pagination-next-btn`;
    nextBtn.style.cssText = 'padding: 0.3rem 0.65rem; font-size: 0.8rem; display: inline-flex; align-items: center; gap: 0.35rem;';
    nextBtn.innerHTML = `Next <i data-lucide="chevron-right" style="width: 14px; height: 14px;"></i>`;
    if (validCurrentPage >= totalPages) {
      nextBtn.disabled = true;
      nextBtn.style.opacity = '0.5';
      nextBtn.style.cursor = 'not-allowed';
    } else {
      nextBtn.addEventListener('click', () => onPageChange(validCurrentPage + 1));
    }
    navEl.appendChild(nextBtn);
  }

  if (window.lucide) window.lucide.createIcons();
}

// ==========================================
// 4. PAGE RENDERERS
// ==========================================

// ADD NEW PRODUCT PAGE (With Purchase & Pricing Details, No Size Fields)
function renderAddProductPage(params = {}, onNavigate = null) {
  if (typeof params === 'function') {
    onNavigate = params;
    params = {};
  }
  const returnTo = (params && params.returnTo) || null;
  const container = document.createElement('div');
  container.className = 'page-container';

  // 1. Header (Breadcrumb & Back Button)
  const headerDiv = document.createElement('div');
  headerDiv.style.cssText = 'display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;';
  
  // Where Cancel / Back / Save return to. Opened from Add Purchase it returns
  // there with the new product selected; opened from Inventory it returns to
  // Inventory, which is where a standalone product is managed.
  const exitNav = returnTo === 'add-purchase' ? 'purchases' : 'inventory';

  const breadcrumbItems = returnTo === 'add-purchase'
    ? [{ label: 'Purchases', target: 'purchases' }, { label: 'Add Purchase', target: 'purchases', params: { action: 'add' } }, { label: 'Create New Product' }]
    : [{ label: 'Inventory', target: 'inventory' }, { label: 'Add New Product' }];

  const breadcrumb = createBreadcrumb(breadcrumbItems, onNavigate);

  const backBtn = createButton({
    text: returnTo === 'add-purchase' ? 'Back to Add Purchase' : 'Back to Inventory',
    icon: 'arrow-left',
    variant: 'secondary',
    size: 'sm',
    onClick: () => {
      if (onNavigate) {
        if (returnTo === 'add-purchase') onNavigate('purchases', { action: 'add' });
        else onNavigate(exitNav);
      }
    }
  });

  headerDiv.appendChild(breadcrumb);
  headerDiv.appendChild(backBtn);
  container.appendChild(headerDiv);

  // 2. Main Form Card
  const mainCard = document.createElement('div');
  mainCard.className = 'card';
  mainCard.style.cssText = 'display: flex; flex-direction: column; gap: 1.5rem; width: 100%;';

  const catOptions = store.getCategories();
  const brandOptions = store.getBrands();

  let isSubmitting = false;

  const formContainer = document.createElement('div');
  formContainer.style.cssText = 'display: flex; flex-direction: column; gap: 1.5rem;';

  formContainer.innerHTML = `
    <!-- Section 1: Product Information -->
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <h4 style="font-size: 0.95rem; font-weight: 600; color: var(--text-primary); border-bottom: 1px solid var(--border-color); padding-bottom: 0.4rem; margin: 0; display: flex; align-items: center; gap: 0.5rem;">
        <i data-lucide="package" style="width: 18px; height: 18px; color: var(--brand-primary);"></i>
        1. Product Information
      </h4>
      
      <div class="form-group">
        <label class="form-label" style="font-size: 0.825rem; font-weight: 600; color: var(--text-primary);">Product Name *</label>
        <input type="text" class="form-input" id="new-prod-name" placeholder="e.g. Oxford Cotton Formal Shirt" style="font-size: 0.9rem;">
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem;">
        <div class="form-group">
          <label class="form-label" style="font-size: 0.825rem; font-weight: 600; color: var(--text-primary);">Category *</label>
          <select class="form-select" id="new-prod-cat">
            ${catOptions.map(c => `<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`).join('')}
          </select>
        </div>
        <div class="form-group">
          <label class="form-label" style="font-size: 0.825rem; font-weight: 600; color: var(--text-primary);">Brand</label>
          <select class="form-select" id="new-prod-brand">
            ${brandOptions.map(b => `<option value="${escapeHtml(b)}">${escapeHtml(b)}</option>`).join('')}
          </select>
        </div>
      </div>

      <!-- Size Input with Quick Select Pills -->
      <div class="form-group">
        <label class="form-label" style="font-size: 0.825rem; font-weight: 600; color: var(--text-primary); display: flex; justify-content: space-between; align-items: center;">
          <span>Size / Sizes *</span>
          <span style="font-size: 0.75rem; font-weight: normal; color: var(--text-secondary);">Click pills or enter comma-separated</span>
        </label>
        <div style="display: flex; gap: 0.35rem; align-items: center; flex-wrap: wrap; margin-bottom: 0.5rem;" id="new-prod-size-pills">
          <button type="button" class="btn btn-sm size-pill-btn" data-size="S" style="padding: 0.2rem 0.65rem; font-size: 0.775rem;">S</button>
          <button type="button" class="btn btn-sm size-pill-btn" data-size="M" style="padding: 0.2rem 0.65rem; font-size: 0.775rem;">M</button>
          <button type="button" class="btn btn-sm size-pill-btn" data-size="L" style="padding: 0.2rem 0.65rem; font-size: 0.775rem;">L</button>
          <button type="button" class="btn btn-sm size-pill-btn" data-size="XL" style="padding: 0.2rem 0.65rem; font-size: 0.775rem;">XL</button>
          <button type="button" class="btn btn-sm size-pill-btn" data-size="XXL" style="padding: 0.2rem 0.65rem; font-size: 0.775rem;">XXL</button>
          <button type="button" class="btn btn-sm size-pill-btn" data-size="Free Size" style="padding: 0.2rem 0.65rem; font-size: 0.775rem;">Free Size</button>
        </div>
        <input type="text" class="form-input" id="new-prod-sizes" placeholder="e.g. S, M, L, XL, XXL (or Standard)" value="S, M, L, XL, XXL" style="font-size: 0.9rem;">
      </div>

      <div class="form-group">
        <label class="form-label" style="font-size: 0.825rem; font-weight: 600; color: var(--text-primary);">Product Description (Optional)</label>
        <textarea class="form-textarea" id="new-prod-desc" rows="3" placeholder="Enter fabric composition, fit, design, or care details..."></textarea>
      </div>
    </div>

    <!-- Section 2: Purchase & Pricing Information (Live Calculations) -->
    <div style="display: flex; flex-direction: column; gap: 1rem; background: var(--bg-surface); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
      <div>
        <h4 style="font-size: 0.95rem; font-weight: 600; color: var(--text-primary); margin: 0 0 0.25rem 0; display: flex; align-items: center; gap: 0.5rem;">
          <i data-lucide="calculator" style="width: 18px; height: 18px; color: var(--brand-primary);"></i>
          2. Purchase and Pricing Information
        </h4>
        <p style="font-size: 0.8rem; color: var(--text-secondary); margin: 0;">Enter initial purchase volume and selling price. Unit cost, markup %, and profit are calculated automatically.</p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; padding-top: 0.5rem;">
        <!-- Number of Units Purchased -->
        <div class="form-group">
          <label class="form-label" style="font-size: 0.825rem; font-weight: 600; color: var(--text-primary);">Number of Units Purchased *</label>
          <input type="number" class="form-input" id="new-prod-units" value="50" min="1" step="1" style="font-weight: 600;">
        </div>

        <!-- Total Buying Price -->
        <div class="form-group">
          <label class="form-label" style="font-size: 0.825rem; font-weight: 600; color: var(--text-primary);">Total Buying Price (₹) *</label>
          <input type="number" class="form-input" id="new-prod-total-buying" value="20000" min="0" step="100" style="font-weight: 600;">
        </div>

        <!-- Buying Price Per Unit (Auto-calculated) -->
        <div class="form-group">
          <label class="form-label" style="font-size: 0.825rem; font-weight: 600; color: var(--text-secondary);">Buying Price Per Unit (₹)</label>
          <input type="text" class="form-input" id="new-prod-buying-unit" readonly style="font-weight: 700; background: var(--bg-secondary); color: var(--brand-primary);">
        </div>

        <!-- Selling Price Per Unit -->
        <div class="form-group">
          <label class="form-label" style="font-size: 0.825rem; font-weight: 600; color: var(--text-primary);">Selling Price Per Unit (₹) *</label>
          <input type="number" class="form-input" id="new-prod-selling-unit" value="600" min="0" step="10" style="font-weight: 600;">
        </div>

        <!-- Selling Price Markup Percentage (Auto-calculated) -->
        <div class="form-group">
          <label class="form-label" style="font-size: 0.825rem; font-weight: 600; color: var(--text-secondary);">Selling Price Markup (%)</label>
          <input type="text" class="form-input" id="new-prod-markup" readonly style="font-weight: 700; background: var(--bg-secondary); color: var(--status-success);">
        </div>

        <!-- Total Selling Value (Auto-calculated) -->
        <div class="form-group">
          <label class="form-label" style="font-size: 0.825rem; font-weight: 600; color: var(--text-secondary);">Total Selling Value (₹)</label>
          <input type="text" class="form-input" id="new-prod-total-selling" readonly style="font-weight: 700; background: var(--bg-secondary); color: var(--status-success);">
        </div>

        <!-- Estimated Gross Profit (Auto-calculated) -->
        <div class="form-group">
          <label class="form-label" style="font-size: 0.825rem; font-weight: 600; color: var(--text-secondary);">Estimated Gross Profit (₹)</label>
          <input type="text" class="form-input" id="new-prod-gross-profit" readonly style="font-weight: 700; background: var(--bg-secondary); color: var(--status-success);">
        </div>
      </div>

      <div style="font-size: 0.775rem; color: var(--text-secondary); font-style: italic; border-top: 1px solid var(--border-color); padding-top: 0.5rem;">
        *Estimated gross profit before operational expenses. Buying price per unit and markup are calculated automatically. Size breakdown will be configured during purchase intake.
      </div>
    </div>

    <!-- Section 3: Action Buttons -->
    <div style="display: flex; align-items: center; justify-content: flex-end; gap: 0.75rem; padding-top: 1rem; border-top: 1px solid var(--border-color);">
      <button type="button" class="btn btn-secondary" id="cancel-add-prod-btn">${returnTo === 'add-purchase' ? 'Back to Add Purchase' : 'Cancel'}</button>
      <button type="button" class="btn btn-primary" id="save-add-prod-btn" style="padding: 0.65rem 1.5rem; font-weight: 600;">
        <i data-lucide="check-circle" style="width: 18px; height: 18px;"></i>
        Save Product
      </button>
    </div>
  `;

  mainCard.appendChild(formContainer);
  container.appendChild(mainCard);

  // References to calculation inputs
  const unitsInput = formContainer.querySelector('#new-prod-units');
  const totalBuyingInput = formContainer.querySelector('#new-prod-total-buying');
  const buyingUnitEl = formContainer.querySelector('#new-prod-buying-unit');
  const sellingUnitInput = formContainer.querySelector('#new-prod-selling-unit');
  const markupEl = formContainer.querySelector('#new-prod-markup');
  const totalSellingEl = formContainer.querySelector('#new-prod-total-selling');
  const grossProfitEl = formContainer.querySelector('#new-prod-gross-profit');

  // Real-time calculation function
  function recalculatePricing() {
    const units = parseInt(unitsInput.value, 10) || 0;
    const totalBuying = parseFloat(totalBuyingInput.value) || 0;
    const sellingPrice = parseFloat(sellingUnitInput.value) || 0;

    // Buying Price Per Unit = Total Buying Price ÷ Number of Units
    const buyingPricePerUnit = units > 0 ? (totalBuying / units) : 0;

    // Markup Percentage = ((Selling Price Per Unit − Buying Price Per Unit) ÷ Buying Price Per Unit) × 100
    const markupPct = buyingPricePerUnit > 0
      ? (((sellingPrice - buyingPricePerUnit) / buyingPricePerUnit) * 100)
      : 0;

    // Total Selling Value = Selling Price Per Unit × Number of Units
    const totalSellingValue = sellingPrice * units;

    // Estimated Gross Profit = Total Selling Value − Total Buying Price
    const estimatedGrossProfit = totalSellingValue - totalBuying;

    buyingUnitEl.value = units > 0 ? `₹${buyingPricePerUnit.toFixed(2)}` : '₹0.00';
    markupEl.value = buyingPricePerUnit > 0 ? `${markupPct.toFixed(1)}%` : '0.0%';
    totalSellingEl.value = `₹${Math.round(totalSellingValue).toLocaleString()}`;
    grossProfitEl.value = `₹${Math.round(estimatedGrossProfit).toLocaleString()}`;
  }

  // Live input event listeners
  unitsInput.addEventListener('input', recalculatePricing);
  totalBuyingInput.addEventListener('input', recalculatePricing);
  sellingUnitInput.addEventListener('input', recalculatePricing);

  // Initial calculation
  recalculatePricing();

  // Size pills interactivity
  const sizesInput = formContainer.querySelector('#new-prod-sizes');
  const sizePillsContainer = formContainer.querySelector('#new-prod-size-pills');

  function updatePillStyles() {
    if (!sizesInput || !sizePillsContainer) return;
    const currentSizes = sizesInput.value.split(',').map(s => s.trim().toUpperCase()).filter(Boolean);
    sizePillsContainer.querySelectorAll('.size-pill-btn').forEach(btn => {
      const sz = btn.dataset.size.toUpperCase();
      if (currentSizes.includes(sz)) {
        btn.style.backgroundColor = 'var(--brand-primary)';
        btn.style.color = 'var(--brand-text)';
        btn.style.borderColor = 'var(--brand-primary)';
      } else {
        btn.style.backgroundColor = 'var(--bg-secondary)';
        btn.style.color = 'var(--text-secondary)';
        btn.style.borderColor = 'var(--border-color)';
      }
    });
  }

  if (sizePillsContainer && sizesInput) {
    sizePillsContainer.querySelectorAll('.size-pill-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const sz = btn.dataset.size;
        let currentSizes = sizesInput.value.split(',').map(s => s.trim()).filter(Boolean);
        const idx = currentSizes.findIndex(s => s.toUpperCase() === sz.toUpperCase());
        if (idx >= 0) {
          currentSizes.splice(idx, 1);
        } else {
          currentSizes.push(sz);
        }
        sizesInput.value = currentSizes.join(', ');
        updatePillStyles();
      });
    });

    sizesInput.addEventListener('input', updatePillStyles);
    updatePillStyles();
  }

  // Cancel Navigation
  formContainer.querySelector('#cancel-add-prod-btn').addEventListener('click', () => {
    if (onNavigate) {
      if (returnTo === 'add-purchase') onNavigate('purchases', { action: 'add' });
      else onNavigate(exitNav);
    }
  });

  // Save Product Definition
  formContainer.querySelector('#save-add-prod-btn').addEventListener('click', () => {
    if (isSubmitting) return;

    const name = formContainer.querySelector('#new-prod-name').value.trim();
    const category = formContainer.querySelector('#new-prod-cat').value;
    const brand = formContainer.querySelector('#new-prod-brand').value;
    const desc = formContainer.querySelector('#new-prod-desc').value.trim();
    const sizesRaw = formContainer.querySelector('#new-prod-sizes') ? formContainer.querySelector('#new-prod-sizes').value.trim() : '';

    const units = parseInt(unitsInput.value, 10);
    const totalBuying = parseFloat(totalBuyingInput.value);
    const sellingPrice = parseFloat(sellingUnitInput.value);

    if (!name) {
      toast.show({ message: 'Product Name is required.', type: 'danger' });
      return;
    }
    if (isNaN(units) || units <= 0) {
      toast.show({ message: 'Number of units must be a positive whole number.', type: 'danger' });
      return;
    }
    if (isNaN(totalBuying) || totalBuying < 0) {
      toast.show({ message: 'Total buying price must be a valid non-negative amount.', type: 'danger' });
      return;
    }
    if (isNaN(sellingPrice) || sellingPrice < 0) {
      toast.show({ message: 'Selling price per unit must be a valid non-negative amount.', type: 'danger' });
      return;
    }

    const parsedSizes = sizesRaw
      ? sizesRaw.split(',').map(s => s.trim()).filter(Boolean)
      : ['Standard'];

    const buyingPricePerUnit = units > 0 ? Math.round((totalBuying / units) * 100) / 100 : 0;
    const markupPct = buyingPricePerUnit > 0 ? (((sellingPrice - buyingPricePerUnit) / buyingPricePerUnit) * 100) : 0;
    const totalSellingValue = sellingPrice * units;
    const estimatedGrossProfit = totalSellingValue - totalBuying;

    isSubmitting = true;
    const saveBtn = formContainer.querySelector('#save-add-prod-btn');
    saveBtn.disabled = true;
    saveBtn.innerHTML = 'Saving Product...';

    const payload = {
      productName: name,
      category,
      brand,
      description: desc,
      sizes: parsedSizes,
      purchasePrice: buyingPricePerUnit,
      sellingPrice: sellingPrice,
      totalBuyingPrice: totalBuying,
      unitsPurchased: units,
      markupPercentage: markupPct,
      totalSellingValue: totalSellingValue,
      estimatedGrossProfit: estimatedGrossProfit
    };

    try {
      const result = store.saveProductDefinition(payload);
      toast.show({
        message: returnTo === 'add-purchase'
          ? `Product '${name}' created! Continue completing purchase details.`
          : `Product '${name}' created. Receive a purchase order to add stock.`,
        type: 'success'
      });

      if (onNavigate) {
        if (returnTo === 'add-purchase' && result && result.product) {
          onNavigate('purchases', {
            action: 'add',
            selectedProductId: result.product.id,
            sizes: parsedSizes,
            units: units,
            totalBuying: totalBuying,
            buyingPrice: buyingPricePerUnit,
            sellingPrice: sellingPrice
          });
        } else {
          onNavigate(exitNav);
        }
      }
    } catch (err) {
      console.error('Save product error:', err);
      toast.show({ message: `Failed to save product: ${err.message}`, type: 'danger' });
      isSubmitting = false;
      saveBtn.disabled = false;
      saveBtn.innerHTML = 'Save Product';
    }
  });

  if (window.lucide) window.lucide.createIcons();
  return container;
}

/**
 * Master Web Admin — Unified Application Script
 * Compatible with file:// protocol (double-clicking index.html directly) AND http:// localhost dev servers.
 */

// ==========================================
// 1. MOCK DATA & REACTIVE STORE MANAGER
// ==========================================
// OVERVIEW PAGE
let activeOverviewSalesPeriod = '1D';
function renderOverview(onNavigate) {
  const container = document.createElement('div');
  container.className = 'page-container';

  const metrics = store.getMetrics();
  const data = store.data || {};
  const sales = data.sales || [];
  const products = data.products || [];

  const headerDiv = document.createElement('div');
  headerDiv.style.cssText = 'display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;';
  headerDiv.appendChild(createBreadcrumb([
    { label: 'Overview' }
  ], onNavigate));
  container.appendChild(headerDiv);

  // 4 KPI Cards
  const kpiGrid = document.createElement('div');
  kpiGrid.className = 'kpi-grid';

  const lowCount = metrics.lowStockCount || 0;
  const outCount = metrics.outOfStockCount || 0;
  const outVariantsCount = metrics.outOfStockVariantsCount || 0;
  const totalStockUnits = metrics.totalStock || 0;
  const totalRevenue = sales.reduce((sum, s) => sum + (Number(s.totalAmount) || 0), 0);
  const avgOrderVal = sales.length > 0 ? Math.round(totalRevenue / sales.length) : 0;
  const thresholdVal = store.getLowStockThreshold();

  kpiGrid.appendChild(createMetricCard({
    label: 'Total Revenue',
    value: `₹${totalRevenue.toLocaleString('en-IN')}`,
    subtext: `<span style="color: var(--status-success); font-weight: 600;">₹${avgOrderVal.toLocaleString('en-IN')} avg / order</span> <span style="color: var(--text-secondary);">across ${sales.length} sales orders</span>`,
    icon: 'dollar-sign',
    onClick: () => onNavigate('sales')
  }));

  kpiGrid.appendChild(createMetricCard({
    label: 'Total Products',
    value: `${metrics.totalProducts || products.length} Products`,
    subtext: `<span style="color: var(--text-secondary);">${totalStockUnits} total stock units</span>`,
    icon: 'package',
    onClick: () => onNavigate('inventory')
  }));

  kpiGrid.appendChild(createMetricCard({
    label: 'Low Stock',
    value: `${lowCount} Items`,
    // Colour only when there is something to act on: 0 = neutral card.
    subtext: `<span style="color: ${lowCount > 0 ? 'var(--status-warning-text)' : 'var(--text-secondary)'}; font-weight: 600;">${lowCount} items</span> <span style="color: var(--text-secondary);">below min threshold (${thresholdVal})</span>`,
    icon: 'alert-triangle',
    variant: lowCount > 0 ? 'warning' : 'default',
    statusTint: true,
    onClick: () => onNavigate('inventory', { status: 'LOW' })
  }));

  let outSubtext = '';
  if (outVariantsCount > 0) {
    if (outCount > 0) {
      outSubtext = `<span style="color: var(--status-danger-text); font-weight: 600;">${outVariantsCount} ${outVariantsCount === 1 ? 'size' : 'sizes'} at 0 stock</span> <span style="color: var(--text-secondary);">(${outCount} ${outCount === 1 ? 'product' : 'products'} fully out)</span>`;
    } else {
      // No product is fully out, so the card stays neutral (see variant below).
      outSubtext = `<span style="color: var(--text-secondary); font-weight: 600;">${outVariantsCount} ${outVariantsCount === 1 ? 'size' : 'sizes'} at 0 stock</span> <span style="color: var(--text-secondary);">(in partial stock)</span>`;
    }
  } else {
    outSubtext = `<span style="color: var(--text-secondary);">0 sizes at 0 stock</span>`;
  }

  kpiGrid.appendChild(createMetricCard({
    label: 'Out of Stock',
    value: `${outCount} Products`,
    subtext: outSubtext,
    icon: 'alert-circle',
    // Red only when at least one product is fully out of stock.
    variant: outCount > 0 ? 'danger' : 'default',
    statusTint: true,
    onClick: () => onNavigate('inventory', { status: 'OUT' })
  }));

  container.appendChild(kpiGrid);

  // 2-Column Row (Sales Trend & Top Selling)
  const grid2Col = document.createElement('div');
  grid2Col.style.cssText = 'display: grid; grid-template-columns: 2fr 1fr; gap: 1.5rem; width: 100%; align-items: stretch;';
  if (window.innerWidth <= 1024) grid2Col.style.gridTemplateColumns = '1fr';

  let activePeriod = activeOverviewSalesPeriod || '1W';
  const salesTrendCard = document.createElement('div');
  salesTrendCard.className = 'card';
  salesTrendCard.style.display = 'flex';
  salesTrendCard.style.flexDirection = 'column';
  salesTrendCard.style.justifyContent = 'space-between';

  // Dynamic Sales Trend Calculation Engine derived from actual sales & purchase costs
  function parseSaleDate(dateStr) {
    if (!dateStr) return null;
    if (dateStr instanceof Date) return isNaN(dateStr.getTime()) ? null : dateStr;

    const s = String(dateStr).trim();
    const monthNames = {
      jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
      jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11
    };

    // Format 1: "Oct 6, 08:15 PM" or "Oct 6, 2026, 08:15 PM" or "Sep 30, 07:30 PM"
    const m1 = s.match(/^([a-z]{3})\s+(\d{1,2})(?:,\s*(\d{4}))?(?:,\s*(\d{1,2}):(\d{2})\s*(am|pm)?)?/i);
    if (m1) {
      const month = monthNames[m1[1].toLowerCase()];
      if (month !== undefined) {
        const day = parseInt(m1[2], 10);
        const year = m1[3] ? parseInt(m1[3], 10) : 2026;
        let hours = m1[4] ? parseInt(m1[4], 10) : 12;
        const mins = m1[5] ? parseInt(m1[5], 10) : 0;
        const ampm = (m1[6] || '').toLowerCase();
        if (ampm === 'pm' && hours < 12) hours += 12;
        if (ampm === 'am' && hours === 12) hours = 0;
        return new Date(year, month, day, hours, mins);
      }
    }

    // Format 2: "10/12/26, 3:45 PM" or "10/12/2026, 3:45 PM" or "10/12/2026"
    const m2 = s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{2,4})(?:,\s*(\d{1,2}):(\d{2})(?::\d{2})?\s*(am|pm)?)?/i);
    if (m2) {
      const month = parseInt(m2[1], 10) - 1;
      const day = parseInt(m2[2], 10);
      let year = parseInt(m2[3], 10);
      if (year < 100) year += 2000;
      let hours = m2[4] ? parseInt(m2[4], 10) : 12;
      const mins = m2[5] ? parseInt(m2[5], 10) : 0;
      const ampm = (m2[6] || '').toLowerCase();
      if (ampm === 'pm' && hours < 12) hours += 12;
      if (ampm === 'am' && hours === 12) hours = 0;
      return new Date(year, month, day, hours, mins);
    }

    // Format 3: "2026-10-12" or "2026-10-06 08:15 PM" or ISO
    const m3 = s.match(/^(\d{4})-(\d{2})-(\d{2})(?:[T\s](\d{1,2}):(\d{2})(?::\d{2})?\s*(am|pm)?)?/i);
    if (m3) {
      const year = parseInt(m3[1], 10);
      const month = parseInt(m3[2], 10) - 1;
      const day = parseInt(m3[3], 10);
      let hours = m3[4] ? parseInt(m3[4], 10) : 12;
      const mins = m3[5] ? parseInt(m3[5], 10) : 0;
      const ampm = (m3[6] || '').toLowerCase();
      if (ampm === 'pm' && hours < 12) hours += 12;
      if (ampm === 'am' && hours === 12) hours = 0;
      return new Date(year, month, day, hours, mins);
    }

    const fallback = new Date(s);
    return isNaN(fallback.getTime()) ? null : fallback;
  }

  function getDynamicSalesTrend(periodKey, salesList, productsList) {
    const qualifyingSales = (salesList || []).filter(s => s && s.status !== 'Cancelled' && s.status !== 'Failed' && s.status !== 'Draft');

    const prodCostMap = {};
    (productsList || []).forEach(p => {
      if (p) {
        if (p.id) prodCostMap[p.id] = Number(p.purchasePrice || p.buyingPrice || 0);
        if (p.name) prodCostMap[p.name.toLowerCase()] = Number(p.purchasePrice || p.buyingPrice || 0);
      }
    });

    function calculateSaleCogs(sale) {
      return store.calculateSaleCogs(sale);
    }

    const salesWithDates = qualifyingSales.map(s => ({
      sale: s,
      date: parseSaleDate(s.date),
      revenue: Number(s.totalAmount || 0),
      cogs: calculateSaleCogs(s)
    })).filter(s => s.date !== null);

    const now = new Date();
    const refYear = Math.max(now.getFullYear(), 2026);
    const refMonth = now.getMonth();
    const refDate = now.getDate();

    const shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const fullMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let buckets = [];
    let startRevLabel = 'Start of Period';
    let endRevLabel = 'End of Period';

    if (periodKey === '1D') {
      startRevLabel = 'Start of Day';
      endRevLabel = 'End of Day';

      const dayStart = new Date(refYear, refMonth, refDate, 0, 0, 0, 0).getTime();
      const dayEnd = new Date(refYear, refMonth, refDate, 23, 59, 59, 999).getTime();

      const todaySales = salesWithDates.filter(s => {
        const t = s.date.getTime();
        return t >= dayStart && t <= dayEnd;
      });

      const intervals = [
        { label: '12 AM', startH: 0, endH: 2, rangeStr: '12:00 AM – 3:00 AM' },
        { label: '3 AM', startH: 3, endH: 5, rangeStr: '3:00 AM – 6:00 AM' },
        { label: '6 AM', startH: 6, endH: 8, rangeStr: '6:00 AM – 9:00 AM' },
        { label: '9 AM', startH: 9, endH: 11, rangeStr: '9:00 AM – 12:00 PM' },
        { label: '12 PM', startH: 12, endH: 14, rangeStr: '12:00 PM – 3:00 PM' },
        { label: '3 PM', startH: 15, endH: 17, rangeStr: '3:00 PM – 6:00 PM' },
        { label: '6 PM', startH: 18, endH: 20, rangeStr: '6:00 PM – 9:00 PM' },
        { label: '9 PM', startH: 21, endH: 23, rangeStr: '9:00 PM – 12:00 AM' }
      ];

      intervals.forEach(iv => {
        const slotStart = new Date(refYear, refMonth, refDate, iv.startH, 0, 0, 0).getTime();
        const slotEnd = new Date(refYear, refMonth, refDate, iv.endH, 59, 59, 999).getTime();

        const slotSales = todaySales.filter(s => {
          const t = s.date.getTime();
          return t >= slotStart && t <= slotEnd;
        });

        const rev = slotSales.reduce((sum, s) => sum + s.revenue, 0);
        const cogs = slotSales.reduce((sum, s) => sum + s.cogs, 0);

        buckets.push({
          label: iv.label,
          tooltipLabel: `${refDate} ${shortMonths[refMonth]} ${refYear} (${iv.rangeStr})`,
          revenue: rev,
          cogs: cogs
        });
      });
    } else if (periodKey === '1W') {
      startRevLabel = 'Start of Week';
      endRevLabel = 'End of Week';

      for (let i = 6; i >= 0; i--) {
        const d = new Date(refYear, refMonth, refDate - i);
        const y = d.getFullYear();
        const m = d.getMonth();
        const dayNum = d.getDate();
        const dayStart = new Date(y, m, dayNum, 0, 0, 0, 0).getTime();
        const dayEnd = new Date(y, m, dayNum, 23, 59, 59, 999).getTime();

        const daySales = salesWithDates.filter(s => {
          const t = s.date.getTime();
          return t >= dayStart && t <= dayEnd;
        });

        const rev = daySales.reduce((sum, s) => sum + s.revenue, 0);
        const cogs = daySales.reduce((sum, s) => sum + s.cogs, 0);

        buckets.push({
          label: `${dayNum} ${shortMonths[m]}`,
          tooltipLabel: `${dayNum} ${shortMonths[m]} ${y}`,
          revenue: rev,
          cogs: cogs
        });
      }
    } else if (periodKey === '1M') {
      startRevLabel = 'Start of Month';
      endRevLabel = 'End of Month';

      for (let w = 3; w >= 0; w--) {
        const wIdx = 3 - w;
        const startD = new Date(refYear, refMonth, refDate - (w * 7 + 6), 0, 0, 0, 0);
        const endD = new Date(refYear, refMonth, refDate - (w * 7), 23, 59, 59, 999);
        const startT = startD.getTime();
        const endT = endD.getTime();

        const weekSales = salesWithDates.filter(s => {
          const t = s.date.getTime();
          return t >= startT && t <= endT;
        });

        const rev = weekSales.reduce((sum, s) => sum + s.revenue, 0);
        const cogs = weekSales.reduce((sum, s) => sum + s.cogs, 0);

        buckets.push({
          label: `Week ${wIdx + 1}`,
          tooltipLabel: `Week ${wIdx + 1} (${startD.getDate()} ${shortMonths[startD.getMonth()]} – ${endD.getDate()} ${shortMonths[endD.getMonth()]} ${endD.getFullYear()})`,
          revenue: rev,
          cogs: cogs
        });
      }
    } else if (periodKey === '6M') {
      startRevLabel = 'Start of Period';
      endRevLabel = 'End of Period';

      for (let i = 5; i >= 0; i--) {
        const mDate = new Date(refYear, refMonth - i, 1);
        const y = mDate.getFullYear();
        const m = mDate.getMonth();
        const mStart = new Date(y, m, 1, 0, 0, 0, 0).getTime();
        const mEnd = new Date(y, m + 1, 0, 23, 59, 59, 999).getTime();

        const monthSales = salesWithDates.filter(s => {
          const t = s.date.getTime();
          return t >= mStart && t <= mEnd;
        });

        const rev = monthSales.reduce((sum, s) => sum + s.revenue, 0);
        const cogs = monthSales.reduce((sum, s) => sum + s.cogs, 0);

        buckets.push({
          label: shortMonths[m],
          tooltipLabel: `${fullMonths[m]} ${y}`,
          revenue: rev,
          cogs: cogs
        });
      }
    } else if (periodKey === '1Y') {
      startRevLabel = 'Start of Year';
      endRevLabel = 'End of Year';

      for (let i = 11; i >= 0; i--) {
        const mDate = new Date(refYear, refMonth - i, 1);
        const y = mDate.getFullYear();
        const m = mDate.getMonth();
        const mStart = new Date(y, m, 1, 0, 0, 0, 0).getTime();
        const mEnd = new Date(y, m + 1, 0, 23, 59, 59, 999).getTime();

        const monthSales = salesWithDates.filter(s => {
          const t = s.date.getTime();
          return t >= mStart && t <= mEnd;
        });

        const rev = monthSales.reduce((sum, s) => sum + s.revenue, 0);
        const cogs = monthSales.reduce((sum, s) => sum + s.cogs, 0);

        buckets.push({
          label: shortMonths[m],
          tooltipLabel: `${fullMonths[m]} ${y}`,
          revenue: rev,
          cogs: cogs
        });
      }
    }

    const totalPeriodRev = buckets.reduce((sum, b) => sum + b.revenue, 0);
    const totalPeriodCogs = buckets.reduce((sum, b) => sum + b.cogs, 0);
    const totalPeriodProfit = Math.max(0, totalPeriodRev - totalPeriodCogs);
    const profitMarginPct = totalPeriodRev > 0 ? ((totalPeriodProfit / totalPeriodRev) * 100).toFixed(1) : '0.0';

    const startRev = buckets[0] ? buckets[0].revenue : 0;
    const endRev = buckets[buckets.length - 1] ? buckets[buckets.length - 1].revenue : 0;
    const revDiffNum = endRev - startRev;
    const revGrowthPct = startRev > 0 ? ((revDiffNum / startRev) * 100).toFixed(1) : (endRev > 0 ? '+100.0' : '0.0');
    const isRevPos = revDiffNum >= 0;

    const maxVal = Math.max(...buckets.map(b => b.revenue), 1000);
    function formatAxisVal(val) {
      if (val >= 100000) return `₹${(val / 100000).toFixed(1)}L`;
      if (val >= 1000) return `₹${Math.round(val / 1000)}k`;
      return `₹${val}`;
    }
    const yMaxStr = formatAxisVal(maxVal);
    const yMidStr = formatAxisVal(Math.round(maxVal / 2));

    const N = buckets.length;
    const coords = buckets.map((b, i) => {
      const x = N <= 1 ? 250 : Math.round(25 + i * (450 / (N - 1)));
      const normalized = maxVal > 0 ? (b.revenue / maxVal) : 0;
      const y = Math.round(130 - (normalized * 110));
      return {
        x,
        y,
        val: `₹${b.revenue.toLocaleString('en-IN')}`,
        rawRevenue: b.revenue,
        axisLabel: b.label,
        tooltipLabel: b.tooltipLabel
      };
    });

    const pointsPath = coords.map(c => `${c.x},${c.y}`).join(' ');
    const areaPoly = coords.length > 0 ? `${coords[0].x},130 ${pointsPath} ${coords[coords.length - 1].x},130 ${coords[0].x},130` : '';

    return {
      periodLabel: periodKey,
      startRevLabel,
      startRevVal: `₹${startRev.toLocaleString('en-IN')}`,
      endRevLabel,
      endRevVal: `₹${endRev.toLocaleString('en-IN')}`,
      totalPeriodRevVal: `₹${totalPeriodRev.toLocaleString('en-IN')}`,
      revDiff: `${isRevPos ? '+' : '-'}₹${Math.abs(revDiffNum).toLocaleString('en-IN')}`,
      revGrowth: `${isRevPos ? '+' : ''}${revGrowthPct}%`,
      isRevPositive: isRevPos,
      cogs: `₹${totalPeriodCogs.toLocaleString('en-IN')}`,
      profitLabel: 'Gross Profit',
      profitVal: `₹${totalPeriodProfit.toLocaleString('en-IN')}`,
      profitMargin: `${profitMarginPct}%`,
      isProfit: totalPeriodProfit >= 0,
      yMax: yMaxStr,
      yMid: yMidStr,
      coords,
      pointsPath,
      areaPoly
    };
  }

  function renderSalesChart(periodKey) {
    const currentSales = store.data.sales || [];
    const currentProducts = store.data.products || [];
    const ds = getDynamicSalesTrend(periodKey, currentSales, currentProducts);

    salesTrendCard.innerHTML = `
      <div class="card-header" style="flex-wrap: wrap; gap: 0.75rem; align-items: center; padding-bottom: 0.75rem; border-bottom: 1px solid var(--border-color); margin-bottom: 0.75rem;">
        <div>
          <h3 class="card-title" style="font-size: 1.05rem; font-weight: 600;">Sales Trend</h3>
          <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.15rem;">Revenue performance & gross profit summary</div>
        </div>
        
        <div style="display: flex; gap: 0.2rem; background: var(--bg-secondary); padding: 0.2rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
          ${['1D', '1W', '6M', '1Y'].map(p => `
            <button class="btn period-btn" data-period="${p}" style="padding: 0.25rem 0.6rem; font-size: 0.75rem; font-weight: 600; border: none; cursor: pointer;">${p}</button>
          `).join('')}
        </div>
      </div>

      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; background: var(--bg-secondary); padding: 0.75rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); margin-bottom: 0.75rem;">
        <div>
          <div style="font-size: 0.725rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.03em; color: var(--text-secondary);">Period Revenue</div>
          <div style="display: flex; align-items: baseline; gap: 0.5rem; margin-top: 0.15rem; flex-wrap: wrap;">
            <span style="font-size: 1.45rem; font-weight: 700; color: var(--text-primary); letter-spacing: -0.02em;">${ds.totalPeriodRevVal}</span>
            <span style="font-size: 0.825rem; font-weight: 600; color: ${ds.isRevPositive ? 'var(--status-success)' : 'var(--status-danger)'}; display: inline-flex; align-items: center; gap: 0.25rem;">
              ${ds.isRevPositive ? '↑' : '↓'} ${ds.revDiff} (${ds.revGrowth}) <span style="color: var(--text-secondary); font-weight: 400;">trend</span>
            </span>
          </div>
        </div>

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

      <div style="display: flex; justify-content: space-between; font-size: 0.775rem; color: var(--text-secondary); margin-bottom: 0.35rem; padding: 0 0.25rem;">
        <div>${ds.startRevLabel}: <strong style="color: var(--text-primary); font-weight: 600;">${ds.startRevVal}</strong></div>
        <div>${ds.endRevLabel}: <strong style="color: var(--text-primary); font-weight: 600;">${ds.endRevVal}</strong></div>
      </div>

      <div style="position: relative; height: 160px; display: flex; align-items: stretch; margin-top: 0.25rem;">
        <div style="display: flex; flex-direction: column; justify-content: space-between; font-size: 0.7rem; color: var(--text-secondary); padding-right: 0.6rem; width: 45px; text-align: right; font-weight: 500; height: 130px;">
          <span>${ds.yMax}</span>
          <span>${ds.yMid}</span>
          <span>₹0</span>
        </div>

        <div class="sales-chart-wrapper" style="flex: 1; position: relative; display: flex; flex-direction: column;">
          <!-- Floating Tooltip -->
          <div class="sales-chart-tooltip" style="position: absolute; display: none; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 0.45rem 0.75rem; box-shadow: 0 4px 14px rgba(0,0,0,0.4); pointer-events: none; z-index: 50; transform: translate(-50%, -125%); font-size: 0.8rem; white-space: nowrap;">
            <span class="tooltip-text" style="color: var(--text-primary); font-weight: 500;"></span>
          </div>

          <svg width="100%" height="155" viewBox="0 0 500 155" style="overflow: visible;">
            <defs>
              <linearGradient id="salesGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="var(--brand-primary)" stop-opacity="0.22"/>
                <stop offset="100%" stop-color="var(--brand-primary)" stop-opacity="0.0"/>
              </linearGradient>
            </defs>
            <line x1="0" y1="20" x2="500" y2="20" stroke="var(--border-color)" stroke-dasharray="4" vector-effect="non-scaling-stroke" />
            <line x1="0" y1="75" x2="500" y2="75" stroke="var(--border-color)" stroke-dasharray="4" vector-effect="non-scaling-stroke" />
            <line x1="0" y1="130" x2="500" y2="130" stroke="var(--border-color)" vector-effect="non-scaling-stroke" />
            
            <polygon points="${ds.areaPoly}" fill="url(#salesGrad)" />
            <polyline points="${ds.pointsPath}" fill="none" stroke="var(--brand-primary)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" />
            
            ${ds.coords.map((c, idx) => `
              <circle cx="${c.x}" cy="${c.y}" r="4.5" class="chart-point-dot" data-index="${idx}" fill="var(--brand-primary)" stroke="var(--bg-surface)" stroke-width="2.5" style="transition: r 0.15s ease, stroke-width 0.15s ease;" />
              <circle cx="${c.x}" cy="${c.y}" r="16" class="chart-point-hit" data-index="${idx}" fill="transparent" style="cursor: pointer;" />
              <text x="${c.x}" y="150" text-anchor="middle" fill="var(--text-secondary)" font-size="${periodKey === '1Y' || periodKey === '1D' ? '10' : '11'}" font-weight="500">${c.axisLabel}</text>
            `).join('')}
          </svg>
        </div>
      </div>
    `;

    const tooltipEl = salesTrendCard.querySelector('.sales-chart-tooltip');
    const tooltipTextEl = tooltipEl.querySelector('.tooltip-text');
    const hitAreas = salesTrendCard.querySelectorAll('.chart-point-hit');
    const dots = salesTrendCard.querySelectorAll('.chart-point-dot');

    hitAreas.forEach(hit => {
      const idx = parseInt(hit.dataset.index, 10);
      const c = ds.coords[idx];
      if (!c) return;

      const showPointTooltip = () => {
        tooltipTextEl.innerHTML = `<span style="font-weight: 600; color: var(--text-primary);">${c.tooltipLabel}</span> — <span style="font-weight: 700; color: var(--brand-primary);">Sales: ${c.val}</span>`;
        const leftPct = (c.x / 500) * 100;
        let translateX = '-50%';
        if (leftPct < 15) {
          translateX = '0%';
        } else if (leftPct > 85) {
          translateX = '-100%';
        }
        tooltipEl.style.transform = `translate(${translateX}, -125%)`;
        tooltipEl.style.left = `${leftPct}%`;
        tooltipEl.style.top = `${(c.y / 155) * 100}%`;
        tooltipEl.style.display = 'block';

        dots.forEach((d, i) => {
          if (i === idx) {
            d.setAttribute('r', '7');
            d.setAttribute('stroke-width', '3');
            d.setAttribute('fill', 'var(--brand-primary)');
          } else {
            d.setAttribute('r', '4.5');
            d.setAttribute('stroke-width', '2.5');
          }
        });
      };

      const hidePointTooltip = () => {
        tooltipEl.style.display = 'none';
        dots.forEach(d => {
          d.setAttribute('r', '4.5');
          d.setAttribute('stroke-width', '2.5');
        });
      };

      hit.addEventListener('mouseenter', showPointTooltip);
      hit.addEventListener('mouseleave', hidePointTooltip);
      hit.addEventListener('click', (e) => {
        e.stopPropagation();
        showPointTooltip();
      });
      hit.addEventListener('touchstart', (e) => {
        e.stopPropagation();
        showPointTooltip();
      }, { passive: true });
    });

    document.addEventListener('click', (e) => {
      if (!salesTrendCard.contains(e.target) && tooltipEl) {
        tooltipEl.style.display = 'none';
        dots.forEach(d => d.setAttribute('r', '4.5'));
      }
    });

    salesTrendCard.querySelectorAll('.period-btn').forEach(btn => {
      const p = btn.dataset.period;
      if (p === periodKey) {
        btn.style.backgroundColor = 'var(--brand-primary)';
        btn.style.color = 'var(--brand-text)';
        btn.style.fontWeight = '600';
        btn.style.borderRadius = 'var(--radius-sm)';
      } else {
        btn.style.backgroundColor = 'transparent';
        btn.style.color = 'var(--text-secondary)';
        btn.style.fontWeight = '500';
      }

      btn.addEventListener('click', (e) => {
        activePeriod = e.currentTarget.dataset.period;
        activeOverviewSalesPeriod = activePeriod;
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
  const qualOverviewSales = sales.filter(s => s && s.status !== 'Cancelled' && s.status !== 'Failed' && s.status !== 'Draft');
  qualOverviewSales.forEach(s => {
    const saleSubtotal = Number(s.subtotal) || (s.items || []).reduce((acc, it) => acc + (Number(it.amount !== undefined ? it.amount : (it.price * it.qty)) || 0), 0) || Number(s.totalAmount) || 1;
    const saleDiscount = Number(s.discount) || 0;
    const discountRatio = saleSubtotal > 0 ? Math.min(1, saleDiscount / saleSubtotal) : 0;

    (s.items || []).forEach(item => {
      const pName = item.product || item.productName || 'Product';
      if (!topSellingMap[pName]) {
        topSellingMap[pName] = { name: pName, units: 0, revenue: 0 };
      }
      const itemQty = Number(item.qty !== undefined ? item.qty : (item.quantity || 1)) || 0;
      const rawAmt = Number(item.amount !== undefined ? item.amount : (item.price * itemQty)) || 0;
      // Pro-rate discount so product revenue accurately aligns with net store sales revenue
      const netAmt = Math.round(rawAmt * (1 - discountRatio));

      topSellingMap[pName].units += itemQty;
      topSellingMap[pName].revenue += netAmt;
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
        ${topSellingList.length > 0 ? topSellingList.map((p, idx) => `
          <div class="top-selling-item" data-product-name="${escapeHtml(p.name)}" style="display: flex; align-items: center; justify-content: space-between; cursor: pointer; padding: 0.35rem 0.5rem; border-radius: var(--radius-sm); transition: background-color 0.15s ease; ${idx < topSellingList.length - 1 ? 'border-bottom: 1px solid var(--border-color);' : ''}">
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <span style="font-weight: 700; font-size: 0.85rem; color: ${idx === 0 ? 'var(--brand-primary)' : 'var(--text-secondary)'}; background: ${idx === 0 ? 'var(--brand-soft)' : 'var(--bg-secondary)'}; width: 24px; height: 24px; border-radius: 4px; display: flex; align-items: center; justify-content: center;">0${idx + 1}</span>
              <div>
                <div style="font-weight: 600; font-size: 0.875rem; color: var(--text-primary);">${escapeHtml(p.name)}</div>
                <div style="font-size: 0.75rem; color: var(--text-secondary);">${p.units} sold</div>
              </div>
            </div>
            <div style="font-weight: 600; font-size: 0.875rem; color: var(--text-primary);">₹${(p.revenue || 0).toLocaleString('en-IN')}</div>
          </div>
        `).join('') : `
          <div style="text-align: center; color: var(--text-secondary); padding: 1.5rem 0.5rem; font-size: 0.85rem;">
            No sales recorded yet.
          </div>
        `}
      </div>
    </div>
  `;

  topSellingCard.querySelectorAll('.top-selling-item').forEach(item => {
    item.addEventListener('click', () => {
      const prodName = item.dataset.productName;
      const foundInCatalog = (store.data.products || []).some(p => p.name && p.name.trim().toLowerCase() === prodName.trim().toLowerCase() && p.status !== 'Archived');
      if (foundInCatalog) {
        onNavigate('inventory', { openProduct: prodName });
      } else {
        if (typeof toast !== 'undefined' && toast.show) {
          toast.show({ message: `Product "${prodName}" is archived or no longer in active stock.`, type: 'info' });
        }
      }
    });
  });

  topSellingCard.querySelector('.view-all-products-btn').addEventListener('click', () => onNavigate('sales'));
  grid2Col.appendChild(topSellingCard);

  container.appendChild(grid2Col);

  // Section 4: RECENT SALES HISTORY
  const salesHistoryCard = document.createElement('div');
  salesHistoryCard.className = 'card';
  salesHistoryCard.style.cssText = 'display: flex; flex-direction: column; gap: 1.25rem;';

  let overviewSalesPage = 1;
  let overviewSalesPageSize = 5;

  salesHistoryCard.innerHTML = `
    <div class="card-header">
      <div>
        <h3 class="card-title">Recent Sales History</h3>
        <p style="font-size: 0.78rem; color: var(--text-secondary);">Latest customer billing transactions & sales receipts</p>
      </div>
      <button class="btn btn-ghost btn-sm view-all-sales-btn" style="font-size: 0.775rem; color: var(--brand-primary); font-weight: 600;">View all</button>
    </div>

    <div class="table-responsive" style="border: 1px solid var(--border-color); border-radius: var(--radius-sm);">
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
        <tbody id="overview-sales-tbody"></tbody>
      </table>
    </div>

    <div id="overview-sales-pagination-container"></div>
  `;

  function renderOverviewSalesTable() {
    const tbody = salesHistoryCard.querySelector('#overview-sales-tbody');
    tbody.innerHTML = '';

    if (sales.length === 0) {
      tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--text-secondary); padding: 2rem;">No sales records found.</td></tr>`;
      renderPaginationBar({
        container: salesHistoryCard.querySelector('#overview-sales-pagination-container'),
        totalItems: 0
      });
      return;
    }

    const totalPages = Math.max(1, Math.ceil(sales.length / overviewSalesPageSize));
    if (overviewSalesPage > totalPages) overviewSalesPage = totalPages;
    if (overviewSalesPage < 1) overviewSalesPage = 1;

    const startIdx = (overviewSalesPage - 1) * overviewSalesPageSize;
    const endIdx = Math.min(startIdx + overviewSalesPageSize, sales.length);
    const pageSales = sales.slice(startIdx, endIdx);

    pageSales.forEach(s => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td style="font-weight: 600; color: var(--text-primary);">${escapeHtml(s.customer || 'Walk-in Customer')}</td>
        <td style="color: var(--text-secondary); font-size: 0.8rem;">${s.date || '-'}</td>
        <td style="color: var(--text-secondary);">${s.itemCount || (s.items ? s.items.length : 1)} item${(s.itemCount || 1) > 1 ? 's' : ''}</td>
        <td style="font-weight: 600; color: var(--text-primary);">₹${(s.totalAmount || 0).toLocaleString()}</td>
        <td>${createBadge({ label: s.paymentMethod || 'Cash', variant: 'secondary' }).outerHTML}</td>
        <td>${createBadge({ label: s.status || 'Completed', variant: getStatusBadgeVariant(s.status || 'Completed') }).outerHTML}</td>
      `;
      tbody.appendChild(tr);
    });

    renderPaginationBar({
      container: salesHistoryCard.querySelector('#overview-sales-pagination-container'),
      totalItems: sales.length,
      currentPage: overviewSalesPage,
      pageSize: overviewSalesPageSize,
      pageSizeOptions: [5, 10, 25, 50],
      itemName: 'sales',
      onPageChange: (newPage) => {
        overviewSalesPage = newPage;
        renderOverviewSalesTable();
      },
      onPageSizeChange: (newSize) => {
        overviewSalesPageSize = newSize;
        overviewSalesPage = 1;
        renderOverviewSalesTable();
      }
    });

    if (window.lucide) window.lucide.createIcons();
  }

  salesHistoryCard.querySelector('.view-all-sales-btn').addEventListener('click', () => onNavigate('sales'));
  renderOverviewSalesTable();
  container.appendChild(salesHistoryCard);

  if (window.lucide) window.lucide.createIcons();
  return container;
}

// HELPER: CALCULATE OVERALL PRODUCT STOCK STATUS ACCORDING TO SIZE-WISE RULES
function getProductStockStatus(product, customThreshold) {
  if (!product) {
    return {
      status: 'OUT_OF_STOCK',
      label: 'Out of Stock',
      variant: 'danger',
      totalStock: 0,
      hasSizes: false,
      totalSizes: 0,
      availableSizes: 0,
      outOfStockSizes: 0,
      lowStockSizes: 0,
      stockSummary: 'All sizes out of stock'
    };
  }

  if (product.status === 'Archived' || product.status === 'Inactive') {
    const actStock = Array.isArray(product.variants) && product.variants.length > 0
      ? product.variants.reduce((sum, v) => sum + Math.max(0, Number(v.stock) || 0), 0)
      : Math.max(0, Number(product.totalStock || product.stock || 0));
    return {
      status: product.status,
      label: product.status,
      variant: 'secondary',
      totalStock: actStock,
      hasSizes: false,
      totalSizes: Array.isArray(product.variants) ? product.variants.length : 0,
      availableSizes: Array.isArray(product.variants) ? product.variants.filter(v => (Number(v.stock) || 0) > 0).length : 0,
      outOfStockSizes: Array.isArray(product.variants) ? product.variants.filter(v => (Number(v.stock) || 0) === 0).length : 0,
      lowStockSizes: 0,
      stockSummary: `${product.status} (${actStock} units)`
    };
  }

  const variants = Array.isArray(product.variants) ? product.variants : [];
  const hasSizes = variants.length > 0 && variants.some(v => v.size && v.size !== 'Standard');
  const threshold = (typeof customThreshold === 'number' && customThreshold >= 1)
    ? customThreshold
    : (typeof store !== 'undefined' && typeof store.getLowStockThreshold === 'function'
      ? store.getLowStockThreshold()
      : 5);

  if (hasSizes) {
    const totalSizes = variants.length;
    let availableSizes = 0;
    let outOfStockSizes = 0;
    let lowStockSizes = 0;
    let totalStock = 0;

    variants.forEach(v => {
      const stock = Math.max(0, Number(v.stock) || 0);
      totalStock += stock;
      if (stock === 0) {
        outOfStockSizes++;
      } else {
        availableSizes++;
        if (stock <= threshold) {
          lowStockSizes++;
        }
      }
    });

    // Parent Status Priority:
    // 1. All sizes have 0 stock → Out of Stock.
    // Display: All sizes out of stock
    if (outOfStockSizes === totalSizes || totalStock === 0) {
      return {
        status: 'OUT_OF_STOCK',
        label: 'Out of Stock',
        variant: 'danger',
        totalStock,
        hasSizes: true,
        totalSizes,
        availableSizes,
        outOfStockSizes,
        lowStockSizes,
        stockSummary: 'All sizes out of stock'
      };
    }

    // 2. Some sizes have 0 stock and others have stock → Partial Stock.
    // Display: X sizes out of stock, where X is the number of zero-stock sizes.
    if (availableSizes > 0 && outOfStockSizes > 0) {
      return {
        status: 'PARTIAL_STOCK',
        label: 'Partial Stock',
        variant: 'warning',
        totalStock,
        hasSizes: true,
        totalSizes,
        availableSizes,
        outOfStockSizes,
        lowStockSizes,
        stockSummary: `${outOfStockSizes} ${outOfStockSizes === 1 ? 'size' : 'sizes'} out of stock`
      };
    }

    // 3. No sizes have 0 stock, but at least one size is at or below the low-stock threshold → Low Stock.
    // Display: Low stock in X sizes, where X is the number of low-stock sizes.
    if (lowStockSizes > 0) {
      return {
        status: 'LOW_STOCK',
        label: 'Low Stock',
        variant: 'warning',
        totalStock,
        hasSizes: true,
        totalSizes,
        availableSizes,
        outOfStockSizes: 0,
        lowStockSizes,
        stockSummary: `Low stock in ${lowStockSizes} ${lowStockSizes === 1 ? 'size' : 'sizes'}`
      };
    }

    // 4. All sizes are above the threshold → In Stock.
    // Display: All sizes in stock
    return {
      status: 'IN_STOCK',
      label: 'In Stock',
      variant: 'success',
      totalStock,
      hasSizes: true,
      totalSizes,
      availableSizes,
      outOfStockSizes: 0,
      lowStockSizes: 0,
      stockSummary: 'All sizes in stock'
    };
  } else {
    // Products Without Sizes:
    // Retain existing individual-product status logic: In Stock, Low Stock, Out of Stock.
    // Do not display Partial Stock for products without sizes.
    const totalStock = variants.length > 0
      ? variants.reduce((sum, v) => sum + Math.max(0, Number(v.stock) || 0), 0)
      : Math.max(0, Number(product.stock || product.totalStock) || 0);

    if (totalStock === 0) {
      return {
        status: 'OUT_OF_STOCK',
        label: 'Out of Stock',
        variant: 'danger',
        totalStock: 0,
        hasSizes: false,
        totalSizes: 0,
        availableSizes: 0,
        outOfStockSizes: 0,
        lowStockSizes: 0,
        stockSummary: 'All sizes out of stock'
      };
    }

    if (totalStock <= threshold) {
      return {
        status: 'LOW_STOCK',
        label: 'Low Stock',
        variant: 'warning',
        totalStock,
        hasSizes: false,
        totalSizes: 0,
        availableSizes: 0,
        outOfStockSizes: 0,
        lowStockSizes: 1,
        stockSummary: 'Low stock in 1 size'
      };
    }

    return {
      status: 'IN_STOCK',
      label: 'In Stock',
      variant: 'success',
      totalStock,
      hasSizes: false,
      totalSizes: 0,
      availableSizes: 0,
      outOfStockSizes: 0,
      lowStockSizes: 0,
      stockSummary: 'All sizes in stock'
    };
  }
}
window.getProductStockStatus = getProductStockStatus;

// HELPER: CALCULATE SIZE-LEVEL STOCK STATUS
function getSizeStockStatus(stock, customThreshold) {
  const threshold = (typeof customThreshold === 'number' && customThreshold >= 1)
    ? customThreshold
    : (typeof store !== 'undefined' && typeof store.getLowStockThreshold === 'function'
      ? store.getLowStockThreshold()
      : 5);
  const qty = Math.max(0, Number(stock) || 0);
  if (qty === 0) {
    return { status: 'OUT_OF_STOCK', label: 'Out of Stock', variant: 'danger' };
  } else if (qty <= threshold) {
    return { status: 'LOW_STOCK', label: 'Low Stock', variant: 'warning' };
  } else {
    return { status: 'IN_STOCK', label: 'In Stock', variant: 'success' };
  }
}
window.getSizeStockStatus = getSizeStockStatus;

// DEDICATED PRODUCT MANAGEMENT PAGE (4 CLEAR SECTIONS)
function renderProductManagementPage(params = {}, onNavigate = null) {
  if (typeof params === 'function') {
    onNavigate = params;
    params = {};
  }

  const container = document.createElement('div');
  container.className = 'page-container product-management-page';

  const productId = (params && (params.id || params.productId)) || null;
  const requestedSize = (params && (params.size || params.variantSize)) || null;
  const requestedSection = (params && (params.section || params.tab)) || null;
  let activeSelectedSize = requestedSize;
  let hasInitialScrolled = false;

  function renderPage() {
    container.innerHTML = '';

    // Fresh lookup from store
    const productsList = store.data.products || [];
    // Only resolve an explicitly requested product. Falling back to the first
    // product would silently show (and allow editing of) the wrong record.
    const product = productId ? productsList.find(p => p.id === productId) : null;

    if (!product) {
      const errDiv = document.createElement('div');
      errDiv.className = 'card';
      errDiv.style.cssText = 'padding: 2.5rem; text-align: center; border: 1px solid var(--border-color);';
      errDiv.innerHTML = `
        <i data-lucide="alert-circle" style="width: 48px; height: 48px; color: var(--status-danger); margin-bottom: 1rem;"></i>
        <h3 style="font-size: 1.25rem; color: var(--text-primary); margin-bottom: 0.5rem;">Product Not Found</h3>
        <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">The requested product could not be located in inventory records.</p>
      `;
      const backBtn = createButton({
        text: 'Back to Inventory',
        icon: 'arrow-left',
        variant: 'primary',
        onClick: () => {
          if (onNavigate) onNavigate('inventory');
          else if (window.appInstance) window.appInstance.navigateTo('inventory');
        }
      });
      errDiv.appendChild(backBtn);
      container.appendChild(errDiv);
      if (window.lucide) window.lucide.createIcons();
      return;
    }

    // 1. Breadcrumb & Back Action Header
    const topNavDiv = document.createElement('div');
    topNavDiv.style.cssText = 'display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; margin-bottom: 0.25rem;';

    const breadcrumb = createBreadcrumb([
      { label: 'Inventory', target: 'inventory' },
      { label: 'Product Details' }
    ], onNavigate);
    topNavDiv.appendChild(breadcrumb);

    const backBtn = createButton({
      text: 'Back to Inventory',
      icon: 'arrow-left',
      variant: 'secondary',
      size: 'sm',
      onClick: () => {
        if (onNavigate) onNavigate('inventory');
        else if (window.appInstance) window.appInstance.navigateTo('inventory');
      }
    });
    // Reactivate action for archived / inactive products.
    if (product.status === 'Archived' || product.status === 'Inactive') {
      const headerActions = document.createElement('div');
      headerActions.style.cssText = 'display: flex; gap: 0.5rem; align-items: center;';
      const reactivateBtn = createButton({
        text: 'Reactivate Product',
        icon: 'rotate-ccw',
        variant: 'primary',
        size: 'sm',
        extraClass: 'reactivate-product-btn',
        onClick: async () => {
          const ok = await uiConfirm({
            title: 'Reactivate product',
            message: `Reactivate "${product.name}"?\n\nIts existing stock of ${product.totalStock || 0} units stays exactly as it is — no stock is added and no purchase record is created. The product simply becomes sellable again.`,
            confirmText: 'Reactivate',
            variant: 'primary'
          });
          if (!ok) return;
          try {
            store.reactivateProduct(product.id);
            toast.show({ message: `Product "${product.name}" reactivated.`, type: 'success' });
            renderPage();
          } catch (err) {
            toast.show({ message: err.message, type: 'danger' });
          }
        }
      });
      headerActions.appendChild(reactivateBtn);
      headerActions.appendChild(backBtn);
      topNavDiv.appendChild(headerActions);
    } else {
      topNavDiv.appendChild(backBtn);
    }
    container.appendChild(topNavDiv);

    // Normalize Variants
    const variants = (Array.isArray(product.variants) && product.variants.length > 0)
      ? product.variants
      : [{ size: 'Standard', stock: Number(product.stock || product.totalStock) || 0, sellingPrice: product.sellingPrice, purchasePrice: product.purchasePrice }];
    const hasSizes = variants.length > 1 || (variants.length === 1 && variants[0].size && variants[0].size !== 'Standard');
    const totalStock = variants.reduce((sum, v) => sum + (Number(v.stock) || 0), 0);
    const stockInfo = getProductStockStatus(product);

    // 2. Page Header & Product Summary
    const summaryCard = document.createElement('div');
    summaryCard.className = 'card product-summary-card';
    summaryCard.style.cssText = 'padding: 1.25rem 1.5rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md);';
    summaryCard.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem;">
        <div>
          <div style="display: flex; align-items: center; gap: 0.65rem; flex-wrap: wrap;">
            <h2 style="margin: 0; font-size: 1.35rem; font-weight: 700; color: var(--text-primary); line-height: 1.3;">Manage Product</h2>
            ${product.id ? `<span class="badge badge-secondary" style="font-family: monospace; font-size: 0.75rem; padding: 0.2rem 0.55rem; font-weight: 600;">ID: ${escapeHtml(product.id)}</span>` : ''}
            ${createBadge({ label: product.status || 'Active', variant: getStatusBadgeVariant(product.status || 'Active') }).outerHTML}
          </div>
          <div style="font-size: 1.15rem; font-weight: 600; color: var(--text-primary); margin-top: 0.4rem;">${escapeHtml(product.name)}</div>
          <div style="display: flex; align-items: center; gap: 0.75rem; margin-top: 0.35rem; font-size: 0.825rem; color: var(--text-secondary); flex-wrap: wrap;">
            <span>Category: <strong style="color: var(--text-primary); font-weight: 600;">${escapeHtml(product.category || 'General')}</strong></span>
            <span>•</span>
            <span>Brand: <strong style="color: var(--text-primary); font-weight: 600;">${escapeHtml(product.brand || 'Unbranded')}</strong></span>
          </div>
        </div>
        <div style="display: flex; align-items: center; gap: 1.25rem; background: var(--bg-secondary); padding: 0.75rem 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
          <div>
            <div style="font-size: 0.7rem; font-weight: 600; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.04em;">Available Stock</div>
            <div style="font-size: 1.25rem; font-weight: 700; color: var(--brand-primary); margin-top: 2px;">
              ${totalStock} <span style="font-size: 0.8rem; font-weight: 500; color: var(--text-secondary);">Units</span>
            </div>
          </div>
          <div style="height: 34px; width: 1px; background: var(--border-color);"></div>
          <div>
            <div style="font-size: 0.7rem; font-weight: 600; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.04em; margin-bottom: 4px;">Stock Status</div>
            ${createBadge({ label: stockInfo.label || 'In Stock', variant: stockInfo.variant || (stockInfo.status === 'IN_STOCK' ? 'success' : 'warning') }).outerHTML}
          </div>
        </div>
      </div>
    `;
    container.appendChild(summaryCard);

    // 3. SECTION 01 — Basic Information
    const catOptions = store.getCategories();
    const brandOptions = store.getBrands();

    const sec1Card = document.createElement('div');
    sec1Card.className = 'card';
    sec1Card.style.cssText = 'padding: 1.25rem 1.5rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); width: 100%; box-sizing: border-box;';
    sec1Card.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; padding-bottom: 0.65rem; border-bottom: 1px solid var(--border-color);">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <i data-lucide="file-text" style="width: 18px; height: 18px; color: var(--brand-primary);"></i>
          <h3 style="margin: 0; font-size: 1rem; font-weight: 600; color: var(--text-primary);">Section 01 — Basic Information</h3>
        </div>
        <span style="font-size: 0.775rem; color: var(--text-secondary);">Core Catalog Details</span>
      </div>

      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div class="form-group" style="margin: 0;">
          <label class="form-label" style="font-size: 0.825rem; font-weight: 500; margin-bottom: 0.35rem; display: block; color: var(--text-primary);">
            Product Name <span style="color: var(--status-danger);">*</span>
          </label>
          <input type="text" id="manage-prod-name" class="form-input" value="${escapeHtml(product.name || '')}" placeholder="Enter product name" style="font-size: 0.85rem; padding: 0.5rem 0.75rem;">
          <div id="manage-prod-name-err" style="font-size: 0.75rem; color: var(--status-danger); margin-top: 3px; display: none;">Product Name is required.</div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
          <div class="form-group" style="margin: 0;">
            <label class="form-label" style="font-size: 0.825rem; font-weight: 500; margin-bottom: 0.35rem; display: block; color: var(--text-primary);">
              Category
            </label>
            <select id="manage-prod-cat" class="form-select" style="font-size: 0.85rem; padding: 0.5rem 0.75rem;">
              ${catOptions.map(c => `<option value="${escapeHtml(c)}" ${c === product.category ? 'selected' : ''}>${escapeHtml(c)}</option>`).join('')}
            </select>
          </div>
          <div class="form-group" style="margin: 0;">
            <label class="form-label" style="font-size: 0.825rem; font-weight: 500; margin-bottom: 0.35rem; display: block; color: var(--text-primary);">
              Brand
            </label>
            <select id="manage-prod-brand" class="form-select" style="font-size: 0.85rem; padding: 0.5rem 0.75rem;">
              ${brandOptions.map(b => `<option value="${escapeHtml(b)}" ${b === product.brand ? 'selected' : ''}>${escapeHtml(b)}</option>`).join('')}
            </select>
          </div>
          <div class="form-group" style="margin: 0;">
            <label class="form-label" style="font-size: 0.825rem; font-weight: 500; margin-bottom: 0.35rem; display: block; color: var(--text-primary);">
              Status
            </label>
            <select id="manage-prod-status" class="form-select" style="font-size: 0.85rem; padding: 0.5rem 0.75rem;">
              <option value="Active" ${product.status === 'Active' ? 'selected' : ''}>Active</option>
              <option value="Inactive" ${product.status === 'Inactive' ? 'selected' : ''}>Inactive</option>
              ${product.status === 'Archived' ? `<option value="Archived" selected>Archived (use Reactivate to restore)</option>` : ''}
            </select>
          </div>
        </div>

        <div class="form-group" style="margin: 0;">
          <label class="form-label" style="font-size: 0.825rem; font-weight: 500; margin-bottom: 0.35rem; display: block; color: var(--text-primary);">
            Product Description (Optional)
          </label>
          <textarea id="manage-prod-desc" class="form-textarea" rows="2" placeholder="Enter product description, fabric, care instructions..." style="font-size: 0.85rem; padding: 0.5rem 0.75rem; line-height: 1.4; resize: vertical;">${escapeHtml(product.description || '')}</textarea>
        </div>

        <div style="display: flex; justify-content: flex-end; padding-top: 0.75rem; border-top: 1px solid var(--border-color); margin-top: 0.25rem;">
          <button type="button" id="manage-save-basic-btn" class="btn btn-primary" style="padding: 0.5rem 1.25rem; font-size: 0.85rem; font-weight: 600;">
            <i data-lucide="check-circle" style="width: 16px; height: 16px;"></i>
            <span>Save Changes</span>
          </button>
        </div>
      </div>
    `;
    container.appendChild(sec1Card);

    // Basic Info Save Handler
    sec1Card.querySelector('#manage-save-basic-btn').onclick = () => {
      const name = sec1Card.querySelector('#manage-prod-name').value.trim();
      const category = sec1Card.querySelector('#manage-prod-cat').value;
      const brand = sec1Card.querySelector('#manage-prod-brand').value;
      const status = sec1Card.querySelector('#manage-prod-status').value;
      const description = sec1Card.querySelector('#manage-prod-desc').value.trim();
      const errEl = sec1Card.querySelector('#manage-prod-name-err');

      if (!name) {
        if (errEl) errEl.style.display = 'block';
        toast.show({ message: 'Product Name is required.', type: 'danger' });
        sec1Card.querySelector('#manage-prod-name').focus();
        return;
      }
      if (errEl) errEl.style.display = 'none';

      store.updateProduct(product.id, {
        name,
        category,
        brand,
        status,
        description
      });

      toast.show({ message: 'Product basic information updated successfully.', type: 'success' });
      renderPage();
    };

    // 4. SECTION 02 — Size & Pricing
    const sec2Card = document.createElement('div');
    sec2Card.className = 'card';
    sec2Card.style.cssText = 'padding: 1.25rem 1.5rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); width: 100%; box-sizing: border-box;';
    
    let pricingBodyHtml = '';
    if (hasSizes) {
      pricingBodyHtml = `
        <div class="table-responsive" style="border: 1px solid var(--border-color); border-radius: var(--radius-sm); background: var(--bg-surface); margin-bottom: 1rem;">
          <table class="admin-table" style="font-size: 0.85rem; margin: 0; width: 100%;">
            <thead>
              <tr style="background: var(--bg-secondary);">
                <th style="width: 25%; padding: 0.65rem 0.85rem;">Size / Variant</th>
                <th style="width: 25%; text-align: right; padding: 0.65rem 0.85rem;">Buying Price / Unit</th>
                <th style="width: 25%; text-align: right; padding: 0.65rem 0.85rem;">Selling Price / Unit (₹)</th>
                <th style="width: 25%; text-align: center; padding: 0.65rem 0.85rem;">Available Quantity</th>
              </tr>
            </thead>
            <tbody>
              ${variants.map(v => {
                const buyPrice = v.purchasePrice !== undefined && v.purchasePrice !== null && v.purchasePrice > 0
                  ? `₹${Number(v.purchasePrice).toLocaleString('en-IN')}`
                  : (product.purchasePrice ? `₹${Number(product.purchasePrice).toLocaleString('en-IN')}` : '—');
                const sellVal = v.sellingPrice !== undefined && v.sellingPrice !== null && v.sellingPrice !== ''
                  ? v.sellingPrice
                  : (product.sellingPrice || '');
                return `
                  <tr style="border-bottom: 1px solid var(--border-color);">
                    <td style="padding: 0.65rem 0.85rem;">
                      <span class="badge badge-secondary" style="font-weight: 700; font-size: 0.825rem; padding: 0.2rem 0.55rem;">
                        Size ${escapeHtml(v.size)}
                      </span>
                    </td>
                    <td style="padding: 0.65rem 0.85rem; text-align: right; color: var(--text-secondary); font-size: 0.85rem;">
                      ${buyPrice}
                    </td>
                    <td style="padding: 0.65rem 0.85rem; text-align: right;">
                      <div style="display: inline-flex; align-items: center; justify-content: flex-end; gap: 0.35rem;">
                        <span style="color: var(--text-secondary); font-size: 0.85rem;">₹</span>
                        <input type="number" class="form-input manage-variant-price-inp" data-size="${escapeHtml(v.size)}" placeholder="e.g. 1499" value="${sellVal}" min="0" step="1" style="width: 130px; font-size: 0.85rem; padding: 0.35rem 0.6rem; text-align: right;">
                      </div>
                    </td>
                    <td style="padding: 0.65rem 0.85rem; text-align: center;">
                      <span style="font-weight: 600; color: var(--text-primary);">${v.stock || 0} units</span>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem; align-items: flex-end; background: var(--bg-secondary); padding: 0.85rem 1rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color); margin-bottom: 0.5rem;">
          <div class="form-group" style="margin: 0;">
            <label class="form-label" style="font-size: 0.825rem; font-weight: 500; margin-bottom: 0.35rem; display: block; color: var(--text-primary);">
              Default Product Selling Price (₹)
            </label>
            <input type="number" id="manage-default-selling-price" class="form-input" placeholder="e.g. 1499" value="${product.sellingPrice !== null && product.sellingPrice !== undefined ? product.sellingPrice : ''}" min="0" step="1" style="font-size: 0.85rem; padding: 0.45rem 0.75rem;">
            <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 3px;">Catalog baseline price for new variants or references.</div>
          </div>
        </div>
      `;
    } else {
      // Single / standard product without size variants
      const buyPrice = product.purchasePrice ? `₹${Number(product.purchasePrice).toLocaleString('en-IN')}` : '—';
      pricingBodyHtml = `
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; background: var(--bg-secondary); padding: 1rem 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color); margin-bottom: 0.5rem;">
          <div>
            <div style="font-size: 0.725rem; font-weight: 600; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.04em;">Buying Price / Unit</div>
            <div style="font-size: 1.05rem; font-weight: 600; color: var(--text-primary); margin-top: 0.25rem;">${buyPrice}</div>
            <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 2px;">Preserved from purchase records</div>
          </div>
          <div class="form-group" style="margin: 0;">
            <label class="form-label" style="font-size: 0.825rem; font-weight: 500; margin-bottom: 0.35rem; display: block; color: var(--text-primary);">
              Selling Price / Unit (₹)
            </label>
            <input type="number" id="manage-default-selling-price" class="form-input" placeholder="e.g. 1499" value="${product.sellingPrice !== null && product.sellingPrice !== undefined ? product.sellingPrice : ''}" min="0" step="1" style="font-size: 0.85rem; padding: 0.45rem 0.75rem;">
          </div>
          <div>
            <div style="font-size: 0.725rem; font-weight: 600; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.04em;">Available Quantity</div>
            <div style="font-size: 1.05rem; font-weight: 700; color: var(--brand-primary); margin-top: 0.25rem;">${totalStock} units</div>
            <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 2px;">Inventory stock level</div>
          </div>
        </div>
      `;
    }

    sec2Card.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; padding-bottom: 0.65rem; border-bottom: 1px solid var(--border-color);">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <i data-lucide="tag" style="width: 18px; height: 18px; color: var(--brand-primary);"></i>
          <h3 style="margin: 0; font-size: 1rem; font-weight: 600; color: var(--text-primary);">Section 02 — Size & Pricing</h3>
        </div>
        <span style="font-size: 0.775rem; color: var(--text-secondary);">Preserves Inventory Quantities</span>
      </div>

      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div>
          ${pricingBodyHtml}
        </div>
        <div style="display: flex; justify-content: flex-end; padding-top: 0.75rem; border-top: 1px solid var(--border-color); margin-top: 0.25rem;">
          <button type="button" id="manage-save-pricing-btn" class="btn btn-primary" style="padding: 0.5rem 1.25rem; font-size: 0.85rem; font-weight: 600;">
            <i data-lucide="check-circle" style="width: 16px; height: 16px;"></i>
            <span>Save Price Changes</span>
          </button>
        </div>
      </div>
    `;

    container.appendChild(sec2Card);

    // Pricing Save Handler
    sec2Card.querySelector('#manage-save-pricing-btn').onclick = () => {
      const defaultPriceInput = sec2Card.querySelector('#manage-default-selling-price');
      const defaultPriceVal = defaultPriceInput ? defaultPriceInput.value.trim() : '';
      const sellingPrice = defaultPriceVal !== '' ? parseFloat(defaultPriceVal) : null;

      const variantPrices = {};
      sec2Card.querySelectorAll('.manage-variant-price-inp').forEach(inp => {
        const sz = inp.getAttribute('data-size');
        const val = inp.value.trim();
        if (val !== '' && !isNaN(parseFloat(val))) {
          variantPrices[sz] = parseFloat(val);
        }
      });

      store.updateProduct(product.id, {
        sellingPrice,
        variantPrices
      });

      toast.show({ message: 'Size & pricing updated successfully. Inventory quantities preserved.', type: 'success' });
      renderPage();
    };

    // 5. SECTION 03 — Stock Management
    const lowStockThreshold = (typeof store !== 'undefined' && typeof store.getLowStockThreshold === 'function')
      ? store.getLowStockThreshold()
      : 5;

    const initialSelectedSize = (activeSelectedSize && variants.some(v => v.size === activeSelectedSize))
      ? activeSelectedSize
      : (variants[0] ? variants[0].size : 'Standard');

    const sec3Card = document.createElement('div');
    sec3Card.className = 'card';
    sec3Card.id = 'product-stock-management-section';
    sec3Card.style.cssText = 'padding: 1.25rem 1.5rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); width: 100%; box-sizing: border-box;';

    const ADD_STOCK_REASONS = [
      'Found Stock',
      'Stock Correction / Audit',
      'Supplier Extra Stock',
      'Opening Stock',
      'Manual Stock Update',
      'Other'
    ];
    const REMOVE_STOCK_REASONS = [
      'Damaged Stock',
      'Missing / Lost Stock',
      'Stock Correction / Audit',
      'Expired Stock',
      'Manual Stock Update',
      'Other'
    ];

    sec3Card.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; padding-bottom: 0.65rem; border-bottom: 1px solid var(--border-color);">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <i data-lucide="boxes" style="width: 18px; height: 18px; color: var(--brand-primary);"></i>
          <h3 style="margin: 0; font-size: 1rem; font-weight: 600; color: var(--text-primary);">Section 03 — Stock Management</h3>
        </div>
        <span style="font-size: 0.775rem; color: var(--text-secondary);">Threshold: ≤ ${lowStockThreshold} Units</span>
      </div>

      <!-- Size Variants Stock List -->
      <div style="margin-bottom: 1.25rem;">
        <div style="font-size: 0.825rem; font-weight: 600; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.04em; margin-bottom: 0.65rem;">
          Current Variant Stock & Quick Actions
        </div>
        <div class="table-responsive" style="border: 1px solid var(--border-color); border-radius: var(--radius-sm); background: var(--bg-surface);">
          <table class="admin-table" style="font-size: 0.85rem; margin: 0; width: 100%;">
            <thead>
              <tr style="background: var(--bg-secondary);">
                <th style="width: 25%; padding: 0.65rem 0.85rem;">Size Variant</th>
                <th style="width: 25%; text-align: center; padding: 0.65rem 0.85rem;">Current Available Stock</th>
                <th style="width: 25%; text-align: center; padding: 0.65rem 0.85rem;">Stock Status</th>
                <th style="width: 25%; text-align: right; padding: 0.65rem 0.85rem;">Quick Adjust Actions</th>
              </tr>
            </thead>
            <tbody>
              ${variants.map(v => {
                const varStatus = getSizeStockStatus(v.stock, lowStockThreshold);
                const isSelectedRow = (v.size === initialSelectedSize);
                const rowStyle = isSelectedRow
                  ? 'border-bottom: 1px solid var(--border-color); background: var(--brand-soft); transition: background-color 0.2s ease;'
                  : 'border-bottom: 1px solid var(--border-color); transition: background-color 0.2s ease;';
                return `
                  <tr style="${rowStyle}" class="variant-stock-row ${isSelectedRow ? 'selected-variant-row' : ''}" data-variant-size="${escapeHtml(v.size)}">
                    <td style="padding: 0.65rem 0.85rem;">
                      <span class="badge ${isSelectedRow ? 'badge-primary' : 'badge-secondary'}" style="font-weight: 700; font-size: 0.825rem; padding: 0.2rem 0.55rem;">
                        ${hasSizes ? `Size ${escapeHtml(v.size)}` : 'Standard'}
                      </span>
                    </td>
                    <td style="padding: 0.65rem 0.85rem; text-align: center;">
                      <strong style="color: var(--text-primary); font-size: 0.95rem;">${v.stock || 0} units</strong>
                    </td>
                    <td style="padding: 0.65rem 0.85rem; text-align: center;">
                      ${createBadge({ label: varStatus.label, variant: varStatus.variant }).outerHTML}
                    </td>
                    <td style="padding: 0.65rem 0.85rem; text-align: right;">
                      <div style="display: inline-flex; align-items: center; gap: 0.5rem; justify-content: flex-end;">
                        <button type="button" class="btn btn-sm btn-secondary quick-add-stock-btn" data-size="${escapeHtml(v.size)}" style="padding: 0.3rem 0.65rem; font-size: 0.775rem;">
                          <i data-lucide="plus" style="width: 14px; height: 14px;"></i>
                          <span>Add Stock</span>
                        </button>
                        <button type="button" class="btn btn-sm btn-secondary quick-remove-stock-btn" data-size="${escapeHtml(v.size)}" style="padding: 0.3rem 0.65rem; font-size: 0.775rem;">
                          <i data-lucide="minus" style="width: 14px; height: 14px;"></i>
                          <span>Remove Stock</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Dedicated Stock Adjustment Form / Multi-Entries Panel -->
      <div id="manage-adjustment-form-panel" style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 1.15rem 1.25rem;">
      </div>
    `;

    // Stock Management Multi-Adjustment State & Handlers
    const adjPanel = sec3Card.querySelector('#manage-adjustment-form-panel');
    let entryIdCounter = 1;
    let adjustmentEntries = [];

    // If a specific size was requested in URL/params, initialize with an entry for that size
    if (requestedSize && variants.some(v => v.size === requestedSize)) {
      adjustmentEntries.push({
        id: entryIdCounter++,
        size: requestedSize,
        type: 'ADD',
        qty: 1,
        reason: ADD_STOCK_REASONS[0]
      });
    }

    function syncEntriesFromDOM() {
      if (!adjPanel) return;
      const cards = adjPanel.querySelectorAll('.adjustment-entry-card');
      cards.forEach(card => {
        const eid = Number(card.getAttribute('data-entry-id'));
        const entry = adjustmentEntries.find(e => e.id === eid);
        if (!entry) return;
        const szSelect = card.querySelector('.manage-adj-size-select');
        const typeSelect = card.querySelector('.manage-adj-type-select');
        const qtyInp = card.querySelector('.manage-adj-qty-input');
        const reasonSelect = card.querySelector('.manage-adj-reason-select');
        if (szSelect) entry.size = szSelect.value;
        if (typeSelect) entry.type = typeSelect.value;
        if (qtyInp) {
          const raw = (qtyInp.value || '').trim();
          entry.rawQty = raw;
          const parsed = parseInt(raw, 10);
          entry.qty = (!isNaN(parsed) && parsed > 0) ? parsed : 1;
        }
        if (reasonSelect) entry.reason = reasonSelect.value;
      });
    }

    function syncVariantHighlight() {
      const activeSizes = new Set(adjustmentEntries.map(e => e.size));
      if (activeSelectedSize) activeSizes.add(activeSelectedSize);
      sec3Card.querySelectorAll('.variant-stock-row').forEach(row => {
        const rowSz = row.getAttribute('data-variant-size');
        const isSelected = rowSz === activeSelectedSize || activeSizes.has(rowSz);
        if (isSelected) {
          row.style.background = 'var(--brand-soft)';
          row.classList.add('selected-variant-row');
          const b = row.querySelector('.badge');
          if (b) { b.classList.remove('badge-secondary'); b.classList.add('badge-primary'); }
        } else {
          row.style.background = '';
          row.classList.remove('selected-variant-row');
          const b = row.querySelector('.badge');
          if (b) { b.classList.remove('badge-primary'); b.classList.add('badge-secondary'); }
        }
      });
    }

    function validateAndCalculateEntry(card) {
      if (!card) return false;
      const eid = Number(card.getAttribute('data-entry-id'));
      const entry = adjustmentEntries.find(e => e.id === eid);
      const szSelect = card.querySelector('.manage-adj-size-select');
      const typeSelect = card.querySelector('.manage-adj-type-select');
      const qtyInp = card.querySelector('.manage-adj-qty-input');
      const curStockLabel = card.querySelector('.manage-adj-cur-stock-label');
      const curStatusBadgeEl = card.querySelector('.manage-adj-cur-status-badge');
      const newStockLabel = card.querySelector('.manage-adj-new-stock-label');
      const qtyErrorEl = card.querySelector('.manage-adj-entry-error');

      const selectedSz = szSelect ? szSelect.value : (entry ? entry.size : (variants[0] && variants[0].size));
      const targetVar = variants.find(v => v.size === selectedSz) || variants[0];
      const curStock = targetVar ? (Number(targetVar.stock) || 0) : 0;
      const curStatus = getSizeStockStatus(curStock, lowStockThreshold);
      const type = typeSelect ? typeSelect.value : (entry ? entry.type : 'ADD');
      const rawQty = (qtyInp ? qtyInp.value : (entry ? String(entry.qty) : '1')).trim();
      const numQty = Number(rawQty);
      const parsedQty = parseInt(rawQty, 10);

      if (curStockLabel) curStockLabel.textContent = `${curStock} units`;
      if (curStatusBadgeEl) {
        curStatusBadgeEl.innerHTML = createBadge({ label: curStatus.label, variant: curStatus.variant }).outerHTML;
      }

      let hasErr = false;
      if (!rawQty || isNaN(numQty) || numQty <= 0 || !Number.isInteger(numQty)) {
        hasErr = true;
        if (qtyErrorEl) {
          qtyErrorEl.textContent = 'Please enter a positive whole number quantity (1 or greater).';
          qtyErrorEl.style.display = 'block';
        }
        if (qtyInp) qtyInp.style.borderColor = 'var(--status-danger)';
        if (newStockLabel) newStockLabel.innerHTML = `<span style="color: var(--text-secondary); font-size: 0.85rem;">Invalid quantity</span>`;
      } else if (type === 'REMOVE' && parsedQty > curStock) {
        hasErr = true;
        const deficit = curStock - parsedQty;
        if (qtyErrorEl) {
          qtyErrorEl.textContent = `Cannot remove ${parsedQty} units. Maximum available stock is ${curStock} units. (Negative stock prevented)`;
          qtyErrorEl.style.display = 'block';
        }
        if (qtyInp) qtyInp.style.borderColor = 'var(--status-danger)';
        if (newStockLabel) newStockLabel.innerHTML = `<span style="color: var(--status-danger); font-size: 0.875rem; font-weight: 600;">${deficit} units (Negative stock prevented)</span>`;
      } else {
        if (qtyErrorEl) qtyErrorEl.style.display = 'none';
        if (qtyInp) qtyInp.style.borderColor = '';
        const computedNew = type === 'ADD' ? (curStock + parsedQty) : (curStock - parsedQty);
        const sign = type === 'ADD' ? '+' : '−';
        if (newStockLabel) {
          newStockLabel.innerHTML = `<strong style="color: var(--brand-primary); font-size: 0.95rem;">${computedNew} units</strong> <span style="font-size: 0.775rem; color: var(--text-secondary); margin-left: 0.25rem;">(${sign}${parsedQty})</span>`;
        }
      }

      return !hasErr;
    }

    function renderAdjustmentEntries() {
      if (!adjPanel) return;

      if (adjustmentEntries.length === 0) {
        adjPanel.innerHTML = `
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <i data-lucide="sliders" style="width: 16px; height: 16px; color: var(--brand-primary);"></i>
              <h4 style="margin: 0; font-size: 0.95rem; font-weight: 600; color: var(--text-primary);">Adjust Inventory Stock</h4>
            </div>
            <button type="button" class="btn btn-sm btn-primary add-new-adj-entry-btn" style="padding: 0.35rem 0.75rem; font-size: 0.775rem;">
              <i data-lucide="plus" style="width: 14px; height: 14px;"></i>
              <span>Add Adjustment Entry</span>
            </button>
          </div>
          <div style="text-align: center; padding: 2.25rem 1.5rem; background: var(--bg-surface); border: 1px dashed var(--border-color); border-radius: var(--radius-sm);">
            <i data-lucide="layers" style="width: 32px; height: 32px; margin-bottom: 0.5rem; opacity: 0.4; color: var(--text-secondary);"></i>
            <div style="font-weight: 600; font-size: 0.9rem; color: var(--text-primary); margin-bottom: 0.35rem;">No Adjustment Entries Added</div>
            <div style="font-size: 0.8rem; color: var(--text-secondary); max-width: 480px; margin: 0 auto 1.15rem; line-height: 1.4;">
              Click <strong>Add Stock</strong> or <strong>Remove Stock</strong> for any size in the table above to queue adjustments, or click below to add an entry manually.
            </div>
            <button type="button" class="btn btn-sm btn-secondary add-new-adj-entry-btn">
              <i data-lucide="plus" style="width: 14px; height: 14px;"></i>
              <span>+ Add Adjustment Entry</span>
            </button>
          </div>
          <div style="display: none;">
            <select id="manage-adj-size-select"><option value="${escapeHtml(initialSelectedSize)}">${escapeHtml(initialSelectedSize)}</option></select>
            <select id="manage-adj-type-select"><option value="ADD">Add Stock (+)</option></select>
            <input type="number" id="manage-adj-qty-input" value="1" />
            <select id="manage-adj-reason-select"><option value="${ADD_STOCK_REASONS[0]}">${ADD_STOCK_REASONS[0]}</option></select>
            <span id="manage-adj-cur-status-badge"></span>
            <span id="manage-adj-cur-stock-label"></span>
            <span id="manage-adj-new-stock-label"></span>
            <div id="manage-adj-qty-error"></div>
          </div>
        `;
        if (typeof lucide !== 'undefined') lucide.createIcons({ root: adjPanel });

        adjPanel.querySelectorAll('.add-new-adj-entry-btn').forEach(btn => {
          btn.onclick = () => {
            addAdjustmentEntry(initialSelectedSize, 'ADD');
          };
        });
        return;
      }

      // Render Entries List
      let entriesHtml = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.85rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--border-color);">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <i data-lucide="sliders" style="width: 16px; height: 16px; color: var(--brand-primary);"></i>
            <h4 style="margin: 0; font-size: 0.95rem; font-weight: 600; color: var(--text-primary);">Adjust Inventory Stock</h4>
            <span class="badge badge-primary" style="font-size: 0.725rem; padding: 0.15rem 0.5rem; border-radius: 999px;">
              ${adjustmentEntries.length} ${adjustmentEntries.length === 1 ? 'entry' : 'entries'}
            </span>
          </div>
          <button type="button" class="btn btn-sm btn-secondary add-new-adj-entry-btn" style="padding: 0.35rem 0.75rem; font-size: 0.775rem;">
            <i data-lucide="plus" style="width: 14px; height: 14px;"></i>
            <span>Add Another Entry</span>
          </button>
        </div>

        <div class="adjustment-entries-container" style="display: flex; flex-direction: column; gap: 0.85rem;">
      `;

      adjustmentEntries.forEach((entry, index) => {
        const targetVar = variants.find(v => v.size === entry.size) || variants[0];
        const curStock = targetVar ? (Number(targetVar.stock) || 0) : 0;
        const curStatus = getSizeStockStatus(curStock, lowStockThreshold);
        const reasonsList = entry.type === 'ADD' ? ADD_STOCK_REASONS : REMOVE_STOCK_REASONS;

        entriesHtml += `
          <div class="adjustment-entry-card" data-entry-id="${entry.id}" style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 1rem 1.15rem; transition: border-color 0.2s ease;">
            <!-- Entry Header -->
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem; padding-bottom: 0.5rem; border-bottom: 1px dashed var(--border-color);">
              <div style="display: flex; align-items: center; gap: 0.6rem;">
                <span style="font-weight: 700; font-size: 0.825rem; color: var(--text-primary); text-transform: uppercase; letter-spacing: 0.03em;">Entry #${index + 1}</span>
                <span class="badge ${entry.type === 'ADD' ? 'badge-success' : 'badge-danger'}" style="font-size: 0.75rem; padding: 0.15rem 0.5rem;">
                  <i data-lucide="${entry.type === 'ADD' ? 'plus' : 'minus'}" style="width: 12px; height: 12px; margin-right: 3px;"></i>
                  ${entry.type === 'ADD' ? 'Add Stock' : 'Remove Stock'}
                </span>
                <span style="font-size: 0.8rem; color: var(--text-secondary);">Size: <strong style="color: var(--text-primary);">${hasSizes ? `Size ${escapeHtml(entry.size)}` : 'Standard'}</strong></span>
              </div>
              <button type="button" class="btn btn-sm btn-ghost remove-adj-entry-btn" data-entry-id="${entry.id}" title="Remove this adjustment entry" style="color: var(--status-danger); padding: 0.25rem 0.55rem; font-size: 0.775rem; display: flex; align-items: center; gap: 0.35rem;">
                <i data-lucide="trash-2" style="width: 14px; height: 14px;"></i>
                <span>Remove Entry</span>
              </button>
            </div>

            <!-- Form Grid -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.75rem; margin-bottom: 0.75rem;">
              <div>
                <label class="form-label" style="font-size: 0.75rem; margin-bottom: 0.25rem;">Size Variant</label>
                <select ${index === 0 ? 'id="manage-adj-size-select"' : ''} class="form-input manage-adj-size-select" data-entry-id="${entry.id}" style="font-size: 0.825rem; padding: 0.45rem 0.65rem;">
                  ${variants.map(v => `
                    <option value="${escapeHtml(v.size)}" ${v.size === entry.size ? 'selected' : (v.size === initialSelectedSize ? 'selected' : '')}>
                      ${hasSizes ? `Size ${escapeHtml(v.size)}` : 'Standard'} (Current: ${v.stock || 0} units)
                    </option>
                  `).join('')}
                </select>
              </div>

              <div>
                <label class="form-label" style="font-size: 0.75rem; margin-bottom: 0.25rem;">Adjustment Type</label>
                <select ${index === 0 ? 'id="manage-adj-type-select"' : ''} class="form-input manage-adj-type-select" data-entry-id="${entry.id}" style="font-size: 0.825rem; padding: 0.45rem 0.65rem;">
                  <option value="ADD" ${entry.type === 'ADD' ? 'selected' : ''}>Add Stock (+)</option>
                  <option value="REMOVE" ${entry.type === 'REMOVE' ? 'selected' : ''}>Remove Stock (−)</option>
                </select>
              </div>

              <div>
                <label class="form-label" style="font-size: 0.75rem; margin-bottom: 0.25rem;">Quantity (Units)</label>
                <input type="number" min="1" step="1" ${index === 0 ? 'id="manage-adj-qty-input"' : ''} class="form-input manage-adj-qty-input" data-entry-id="${entry.id}" value="${entry.qty}" placeholder="e.g. 5" style="font-size: 0.825rem; padding: 0.45rem 0.65rem;">
              </div>

              <div>
                <label class="form-label" style="font-size: 0.75rem; margin-bottom: 0.25rem;">Reason for Adjustment</label>
                <select ${index === 0 ? 'id="manage-adj-reason-select"' : ''} class="form-input manage-adj-reason-select" data-entry-id="${entry.id}" style="font-size: 0.825rem; padding: 0.45rem 0.65rem;">
                  ${reasonsList.map(r => `
                    <option value="${r}" ${entry.reason === r ? 'selected' : ''}>${r}</option>
                  `).join('')}
                </select>
              </div>
            </div>

            <!-- Error container -->
            <div ${index === 0 ? 'id="manage-adj-qty-error"' : ''} class="manage-adj-entry-error" style="display: none; color: var(--status-danger); font-size: 0.775rem; margin-bottom: 0.6rem; font-weight: 500;"></div>

            <!-- Stock Preview bar -->
            <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 0.6rem 0.85rem; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 0.5rem; font-size: 0.825rem;">
              <div style="display: flex; align-items: center; gap: 0.5rem;">
                <span style="color: var(--text-secondary);">Current Available:</span>
                <strong ${index === 0 ? 'id="manage-adj-cur-stock-label"' : ''} class="manage-adj-cur-stock-label" style="color: var(--text-primary); font-size: 0.875rem;">${curStock} units</strong>
                <span ${index === 0 ? 'id="manage-adj-cur-status-badge"' : ''} class="manage-adj-cur-status-badge">
                  ${createBadge({ label: curStatus.label, variant: curStatus.variant }).outerHTML}
                </span>
              </div>

              <div style="display: flex; align-items: center; gap: 0.5rem;">
                <i data-lucide="arrow-right" style="width: 14px; height: 14px; color: var(--text-secondary);"></i>
                <span style="color: var(--text-secondary);">Calculated New Stock:</span>
                <span ${index === 0 ? 'id="manage-adj-new-stock-label"' : ''} class="manage-adj-new-stock-label"></span>
              </div>
            </div>
          </div>
        `;
      });

      entriesHtml += `
        </div>

        <!-- Action Bar Footer -->
        <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 0.75rem; margin-top: 1.15rem; padding-top: 0.95rem; border-top: 1px solid var(--border-color);">
          <div style="display: flex; align-items: center; gap: 0.65rem;">
            <button type="button" class="btn btn-sm btn-secondary add-new-adj-entry-btn" style="padding: 0.45rem 0.85rem;">
              <i data-lucide="plus" style="width: 14px; height: 14px;"></i>
              <span>+ Add Another Adjustment</span>
            </button>
            <button type="button" class="btn btn-sm btn-ghost clear-all-adj-entries-btn" style="color: var(--text-secondary); padding: 0.45rem 0.75rem;">
              <i data-lucide="x" style="width: 14px; height: 14px;"></i>
              <span>Clear All</span>
            </button>
            <span style="font-size: 0.8rem; color: var(--text-secondary);">
              Total: <strong style="color: var(--text-primary);">${adjustmentEntries.length} ${adjustmentEntries.length === 1 ? 'adjustment' : 'adjustments'}</strong> queued
            </span>
          </div>

          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <button type="button" id="manage-save-adj-btn" class="btn btn-primary" style="padding: 0.5rem 1.25rem; font-weight: 600; display: flex; align-items: center; gap: 0.45rem;">
              <i data-lucide="check-circle" style="width: 16px; height: 16px;"></i>
              <span>Save All Adjustments</span>
            </button>
          </div>
        </div>
      `;

      adjPanel.innerHTML = entriesHtml;
      if (typeof lucide !== 'undefined') lucide.createIcons({ root: adjPanel });

      // Wire up card elements and listeners
      const cards = adjPanel.querySelectorAll('.adjustment-entry-card');
      cards.forEach(card => {
        const eid = Number(card.getAttribute('data-entry-id'));
        const entry = adjustmentEntries.find(e => e.id === eid);
        if (!entry) return;

        const szSelect = card.querySelector('.manage-adj-size-select');
        const typeSelect = card.querySelector('.manage-adj-type-select');
        const qtyInp = card.querySelector('.manage-adj-qty-input');
        const reasonSelect = card.querySelector('.manage-adj-reason-select');
        const removeBtn = card.querySelector('.remove-adj-entry-btn');

        if (szSelect) {
          szSelect.onchange = () => {
            entry.size = szSelect.value;
            activeSelectedSize = szSelect.value;
            validateAndCalculateEntry(card);
            syncVariantHighlight();
          };
        }

        if (typeSelect) {
          typeSelect.onchange = () => {
            const newType = typeSelect.value;
            entry.type = newType;
            const reasonsList = newType === 'ADD' ? ADD_STOCK_REASONS : REMOVE_STOCK_REASONS;
            const curReason = reasonSelect ? reasonSelect.value : '';
            if (reasonSelect) {
              reasonSelect.innerHTML = reasonsList.map(r => `<option value="${r}">${r}</option>`).join('');
              if (reasonsList.includes(curReason)) {
                reasonSelect.value = curReason;
                entry.reason = curReason;
              } else {
                reasonSelect.value = reasonsList[0];
                entry.reason = reasonsList[0];
              }
            }
            const headerBadge = card.querySelector('.badge');
            if (headerBadge) {
              headerBadge.className = `badge ${newType === 'ADD' ? 'badge-success' : 'badge-danger'}`;
              headerBadge.innerHTML = `<i data-lucide="${newType === 'ADD' ? 'plus' : 'minus'}" style="width: 12px; height: 12px; margin-right: 3px;"></i>${newType === 'ADD' ? 'Add Stock' : 'Remove Stock'}`;
              if (typeof lucide !== 'undefined') lucide.createIcons({ root: headerBadge });
            }
            validateAndCalculateEntry(card);
          };
        }

        if (qtyInp) {
          qtyInp.oninput = () => {
            entry.rawQty = qtyInp.value;
            const parsed = parseInt(qtyInp.value, 10);
            if (!isNaN(parsed)) entry.qty = parsed;
            validateAndCalculateEntry(card);
          };
        }

        if (reasonSelect) {
          reasonSelect.onchange = () => {
            entry.reason = reasonSelect.value;
          };
        }

        if (removeBtn) {
          removeBtn.onclick = () => {
            syncEntriesFromDOM();
            adjustmentEntries = adjustmentEntries.filter(e => e.id !== eid);
            renderAdjustmentEntries();
            syncVariantHighlight();
          };
        }

        // Calculate initial preview
        validateAndCalculateEntry(card);
      });

      // Wire bottom / top buttons
      adjPanel.querySelectorAll('.add-new-adj-entry-btn').forEach(btn => {
        btn.onclick = () => {
          addAdjustmentEntry(initialSelectedSize, 'ADD');
        };
      });

      const clearAllBtn = adjPanel.querySelector('.clear-all-adj-entries-btn');
      if (clearAllBtn) {
        clearAllBtn.onclick = () => {
          adjustmentEntries = [];
          renderAdjustmentEntries();
          syncVariantHighlight();
        };
      }

      const saveAllBtn = adjPanel.querySelector('#manage-save-adj-btn');
      if (saveAllBtn) {
        saveAllBtn.onclick = handleSaveAllAdjustments;
      }
    }

    function addAdjustmentEntry(sz, type = 'ADD') {
      syncEntriesFromDOM();
      const selectedSz = sz || (initialSelectedSize || (variants[0] && variants[0].size) || 'Standard');
      activeSelectedSize = selectedSz;
      const reasonsList = type === 'ADD' ? ADD_STOCK_REASONS : REMOVE_STOCK_REASONS;
      const newEntry = {
        id: entryIdCounter++,
        size: selectedSz,
        type: type,
        qty: 1,
        reason: reasonsList[0]
      };
      adjustmentEntries.push(newEntry);
      renderAdjustmentEntries();
      syncVariantHighlight();
      if (adjPanel) {
        adjPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      setTimeout(() => {
        const card = adjPanel.querySelector(`.adjustment-entry-card[data-entry-id="${newEntry.id}"]`);
        if (card) {
          const qInp = card.querySelector('.manage-adj-qty-input');
          if (qInp) {
            qInp.focus();
            qInp.select();
          }
        }
      }, 50);
    }

    // Quick Action button listeners in table
    sec3Card.querySelectorAll('.quick-add-stock-btn').forEach(btn => {
      btn.onclick = () => {
        const sz = btn.getAttribute('data-size');
        addAdjustmentEntry(sz, 'ADD');
      };
    });

    sec3Card.querySelectorAll('.quick-remove-stock-btn').forEach(btn => {
      btn.onclick = () => {
        const sz = btn.getAttribute('data-size');
        addAdjustmentEntry(sz, 'REMOVE');
      };
    });

    // Save All Adjustments handler
    let isSavingAdj = false;
    async function handleSaveAllAdjustments() {
      if (isSavingAdj) return;
      if (!adjustmentEntries || adjustmentEntries.length === 0) {
        toast.show({ message: 'No adjustment entries to save. Please add at least one adjustment.', type: 'warning' });
        return;
      }

      syncEntriesFromDOM();

      const cards = adjPanel.querySelectorAll('.adjustment-entry-card');
      let hasErrors = false;
      cards.forEach(card => {
        const valid = validateAndCalculateEntry(card);
        if (!valid) hasErrors = true;
      });

      if (hasErrors) {
        toast.show({ message: 'Please fix invalid quantities or negative stock before saving.', type: 'danger' });
        return;
      }

      // Check cumulative removals per size
      const removalTotalsBySize = {};
      for (const entry of adjustmentEntries) {
        if (entry.type === 'REMOVE') {
          removalTotalsBySize[entry.size] = (removalTotalsBySize[entry.size] || 0) + entry.qty;
        }
      }

      for (const [sz, totalRemove] of Object.entries(removalTotalsBySize)) {
        const v = variants.find(variant => variant.size === sz);
        const available = v ? (Number(v.stock) || 0) : 0;
        if (totalRemove > available) {
          toast.show({
            message: `Cannot remove total of ${totalRemove} units for Size ${sz}. Maximum available stock is ${available} units. (Negative stock prevented)`,
            type: 'danger'
          });
          return;
        }
      }

      isSavingAdj = true;
      const saveBtn = adjPanel.querySelector('#manage-save-adj-btn');
      if (saveBtn) {
        saveBtn.disabled = true;
        saveBtn.style.opacity = '0.6';
      }

      let appliedCount = 0;
      const updatedSizes = [];
      try {
        for (const entry of adjustmentEntries) {
          const targetSz = entry.size;
          const result = store.adjustProductStock({
            productId: product.id,
            size: targetSz,
            adjustmentType: entry.type,
            quantity: entry.qty,
            reason: entry.reason
          });
          appliedCount++;
          if (!updatedSizes.includes(targetSz)) {
            updatedSizes.push(targetSz);
          }
          activeSelectedSize = targetSz;
        }

        toast.show({
          message: `Stock adjusted successfully: ${appliedCount} adjustment${appliedCount > 1 ? 's' : ''} applied for ${escapeHtml(product.name)} (${updatedSizes.join(', ')}).`,
          type: 'success'
        });

        adjustmentEntries = [];
        renderPage();
      } catch (err) {
        toast.show({ message: err.message || 'Error saving stock adjustment.', type: 'danger' });
        isSavingAdj = false;
        if (saveBtn) {
          saveBtn.disabled = false;
          saveBtn.style.opacity = '';
        }
      }
    }

    // Initial render of adjustment entries panel
    renderAdjustmentEntries();
    syncVariantHighlight();

    // 6. SECTION 04 — Stock History
    const sec4Card = document.createElement('div');
    sec4Card.className = 'card';
    sec4Card.style.cssText = 'padding: 1.25rem 1.5rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); width: 100%; box-sizing: border-box;';

    const allMovements = store.data.stockMovements || [];
    const productMovements = allMovements.filter(m => {
      return (m.product && m.product.toLowerCase() === product.name.toLowerCase()) ||
             (m.productId && m.productId === product.id);
    });

    let historyTableHtml = '';
    if (productMovements.length === 0) {
      historyTableHtml = `
        <div style="text-align: center; color: var(--text-secondary); padding: 2.25rem 1rem; border: 1px dashed var(--border-color); border-radius: var(--radius-sm); background: var(--bg-secondary);">
          <i data-lucide="history" style="width: 32px; height: 32px; margin-bottom: 0.5rem; opacity: 0.5; color: var(--text-secondary);"></i>
          <div style="font-weight: 500; font-size: 0.9rem; color: var(--text-primary); margin-bottom: 0.25rem;">No Stock Movements Recorded</div>
          <div style="font-size: 0.8rem; color: var(--text-secondary);">Stock adjustments, purchases, and sales for this product will be recorded here automatically.</div>
        </div>
      `;
    } else {
      historyTableHtml = `
        <div class="table-responsive" style="border: 1px solid var(--border-color); border-radius: var(--radius-sm); background: var(--bg-surface); max-height: 400px; overflow-y: auto;">
          <table class="admin-table" style="font-size: 0.825rem; margin: 0; width: 100%;">
            <thead>
              <tr style="background: var(--bg-secondary); position: sticky; top: 0; z-index: 2;">
                <th style="width: 18%; padding: 0.65rem 0.75rem;">Date & Time</th>
                <th style="width: 12%; padding: 0.65rem 0.75rem;">Size / SKU</th>
                <th style="width: 14%; padding: 0.65rem 0.75rem;">Movement Type</th>
                <th style="width: 12%; text-align: center; padding: 0.65rem 0.75rem;">Qty Change</th>
                <th style="width: 20%; padding: 0.65rem 0.75rem;">Reason / Reference</th>
                <th style="width: 14%; text-align: center; padding: 0.65rem 0.75rem;">Prev → New Stock</th>
                <th style="width: 10%; text-align: right; padding: 0.65rem 0.75rem;">Logged By</th>
              </tr>
            </thead>
            <tbody>
              ${productMovements.map(m => {
                let badgeVariant = 'secondary';
                if (m.type === 'Stock In') badgeVariant = 'success';
                else if (m.type === 'Sale') badgeVariant = 'info';
                else if (m.type === 'Adjustment') badgeVariant = 'warning';
                else if (m.type === 'Damage') badgeVariant = 'danger';

                const sizeDisplay = m.size || (m.sku ? m.sku.split('-').pop() : 'Standard');
                const qtyVal = Number(m.quantity) || 0;
                const qtyFormatted = qtyVal > 0 ? `+${qtyVal}` : `${qtyVal}`;
                const qtyColor = qtyVal > 0 ? 'var(--status-success)' : 'var(--status-danger)';
                const stockTransition = (m.previousStock !== undefined && m.newStock !== undefined)
                  ? `${m.previousStock} → ${m.newStock} units`
                  : '—';

                return `
                  <tr style="border-bottom: 1px solid var(--border-color);">
                    <td style="color: var(--text-secondary); padding: 0.65rem 0.75rem;">${m.date || '—'}</td>
                    <td style="padding: 0.65rem 0.75rem;">
                      <span class="badge badge-secondary" style="font-size: 0.75rem; font-weight: 600; padding: 0.15rem 0.45rem;">
                        ${sizeDisplay}
                      </span>
                    </td>
                    <td style="padding: 0.65rem 0.75rem;">
                      ${createBadge({ label: m.adjustmentType || m.type || 'Adjustment', variant: badgeVariant }).outerHTML}
                    </td>
                    <td style="text-align: center; font-weight: 700; color: ${qtyColor}; padding: 0.65rem 0.75rem;">
                      ${qtyFormatted} units
                    </td>
                    <td style="color: var(--text-primary); padding: 0.65rem 0.75rem; font-size: 0.8rem;">
                      ${m.reason || m.reference || m.notes || '—'}
                    </td>
                    <td style="text-align: center; color: var(--text-secondary); padding: 0.65rem 0.75rem; font-size: 0.8rem; font-family: monospace;">
                      ${stockTransition}
                    </td>
                    <td style="text-align: right; color: var(--text-secondary); padding: 0.65rem 0.75rem; font-size: 0.8rem;">
                      ${m.user || 'Admin'}
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      `;
    }

    sec4Card.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; padding-bottom: 0.65rem; border-bottom: 1px solid var(--border-color);">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <i data-lucide="history" style="width: 18px; height: 18px; color: var(--brand-primary);"></i>
          <h3 style="margin: 0; font-size: 1rem; font-weight: 600; color: var(--text-primary);">Section 04 — Stock Movement History</h3>
        </div>
        <span style="font-size: 0.775rem; color: var(--text-secondary);">${productMovements.length} Movement${productMovements.length === 1 ? '' : 's'} Logged</span>
      </div>
      ${historyTableHtml}
    `;

    // Append Section 03 and Section 04 sequentially in single-column layout
    container.appendChild(sec3Card);
    container.appendChild(sec4Card);

    if (window.lucide) window.lucide.createIcons();

    // Auto-scroll to Stock Management section on initial navigation if requested (e.g. from size row adjust action)
    if (!hasInitialScrolled && (requestedSection === 'stock' || requestedSize)) {
      hasInitialScrolled = true;
      setTimeout(() => {
        if (sec3Card && sec3Card.isConnected) {
          sec3Card.scrollIntoView({ behavior: 'smooth', block: 'start' });
          const qtyInp = sec3Card.querySelector('#manage-adj-qty-input');
          if (qtyInp) {
            qtyInp.focus();
            qtyInp.select();
          }
        }
      }, 120);
    }
  }

  renderPage();
  return container;
}

// INVENTORY PAGE (GROUPED PRODUCTS + EXPANDABLE SIZE DETAILS)

// ==========================================
// DEDICATED VIEW PRODUCT / INVENTORY PAGE
// ==========================================
function renderViewProductPage(params = {}, onNavigate = null) {
  if (typeof params === 'function') {
    onNavigate = params;
    params = {};
  }
  const container = document.createElement('div');
  container.className = 'page-container product-view-page';
  container.style.cssText = 'display: flex; flex-direction: column; gap: 1.25rem; width: 100%; max-width: 100%; margin: 0; box-sizing: border-box;';

  const productId = params.productId || params.id;
  const productsList = store.data.products || [];
  let product = productsList.find(p => p.id === productId);

  // If not found by exact ID, fallback search by name if provided
  if (!product && params.name) {
    product = productsList.find(p => p.name && p.name.trim().toLowerCase() === String(params.name).trim().toLowerCase());
  }

  // Missing product error state
  if (!product) {
    const errorCard = document.createElement('div');
    errorCard.className = 'card';
    errorCard.style.cssText = 'text-align: center; padding: 3.5rem 1.5rem; display: flex; flex-direction: column; align-items: center; gap: 1.25rem;';
    errorCard.innerHTML = `
      <div style="width: 56px; height: 56px; border-radius: 50%; background: var(--status-danger-bg); display: flex; align-items: center; justify-content: center; color: var(--status-danger);">
        <i data-lucide="alert-triangle" style="width: 28px; height: 28px;"></i>
      </div>
      <div>
        <h2 style="font-size: 1.25rem; font-weight: 700; color: var(--text-primary); margin: 0 0 0.5rem 0;">Product Not Found</h2>
        <p style="color: var(--text-secondary); margin: 0; font-size: 0.9rem; max-width: 440px;">
          The inventory product with identifier "<strong>${escapeHtml(productId || 'unknown')}</strong>" could not be located in records or may have been deleted.
        </p>
      </div>
      <button type="button" class="btn btn-secondary back-to-list-btn" style="margin-top: 0.5rem; display: inline-flex; align-items: center; gap: 0.4rem;">
        <i data-lucide="arrow-left" style="width: 16px; height: 16px;"></i>
        <span>Return to Inventory</span>
      </button>
    `;
    errorCard.querySelector('.back-to-list-btn').addEventListener('click', () => {
      if (onNavigate) onNavigate('inventory');
    });
    container.appendChild(errorCard);
    if (window.lucide) window.lucide.createIcons();
    return container;
  }

  const isArchived = product.status === 'Archived';
  const isInactive = product.status === 'Inactive';
  const stockInfo = getProductStockStatus(product);

  const variants = (Array.isArray(product.variants) && product.variants.length > 0)
    ? product.variants
    : [{ size: 'Standard', stock: Number(product.stock || product.totalStock) || 0, sellingPrice: product.sellingPrice, purchasePrice: product.purchasePrice }];

  const totalStock = variants.reduce((sum, v) => sum + (Number(v.stock) || 0), 0);

  // Price calculations
  let minSelling = Infinity, maxSelling = 0;
  let minBuying = Infinity, maxBuying = 0;
  variants.forEach(v => {
    const sp = Number(v.sellingPrice !== undefined && v.sellingPrice !== null && v.sellingPrice !== '' ? v.sellingPrice : (product.sellingPrice || 0));
    const bp = Number(v.purchasePrice !== undefined && v.purchasePrice !== null && v.purchasePrice !== '' ? v.purchasePrice : (product.purchasePrice || 0));
    if (sp < minSelling) minSelling = sp;
    if (sp > maxSelling) maxSelling = sp;
    if (bp < minBuying) minBuying = bp;
    if (bp > maxBuying) maxBuying = bp;
  });
  if (minSelling === Infinity) minSelling = 0;
  if (minBuying === Infinity) minBuying = 0;

  const sellingDisplay = minSelling === maxSelling
    ? `₹${minSelling.toLocaleString('en-IN')}`
    : `₹${minSelling.toLocaleString('en-IN')} – ₹${maxSelling.toLocaleString('en-IN')}`;

  const buyingDisplay = minBuying === maxBuying
    ? (minBuying > 0 ? `₹${minBuying.toLocaleString('en-IN')}` : '—')
    : `₹${minBuying.toLocaleString('en-IN')} – ₹${maxBuying.toLocaleString('en-IN')}`;

  const totalValuation = variants.reduce((sum, v) => {
    const cost = Number(v.purchasePrice || product.purchasePrice || 0);
    return sum + ((Number(v.stock) || 0) * cost);
  }, 0);

  const totalRetailValue = variants.reduce((sum, v) => {
    const price = Number(v.sellingPrice || product.sellingPrice || 0);
    return sum + ((Number(v.stock) || 0) * price);
  }, 0);

  // Status badges
  const statusBadgeVariant = getStatusBadgeVariant(product.status || 'Active');

  // 1. Header (Breadcrumb, Badges, & Action Buttons)
  const headerDiv = document.createElement('div');
  headerDiv.style.cssText = 'display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.25rem;';

  const breadcrumbWrap = document.createElement('div');
  breadcrumbWrap.style.cssText = 'display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap;';
  breadcrumbWrap.appendChild(createBreadcrumb([
    { label: 'Inventory', target: 'inventory' },
    { label: product.name }
  ], onNavigate));
  breadcrumbWrap.appendChild(createBadge({ label: product.status || 'Active', variant: statusBadgeVariant }));
  breadcrumbWrap.appendChild(createBadge({ label: stockInfo.label, variant: stockInfo.variant }));
  headerDiv.appendChild(breadcrumbWrap);

  const headerActions = document.createElement('div');
  headerActions.style.cssText = 'display: flex; gap: 0.5rem; align-items: center;';

  const btnBack = document.createElement('button');
  btnBack.type = 'button';
  btnBack.className = 'btn btn-secondary btn-sm back-to-list-btn';
  btnBack.innerHTML = `<i data-lucide="arrow-left" style="width: 14px; height: 14px;"></i> <span>Back to Inventory</span>`;
  btnBack.addEventListener('click', () => {
    if (onNavigate) onNavigate('inventory');
  });
  headerActions.appendChild(btnBack);

  // Edit Action only if supported and not archived
  if (!isArchived) {
    const btnEdit = document.createElement('button');
    btnEdit.type = 'button';
    btnEdit.className = 'btn btn-primary btn-sm edit-inv-page-btn';
    btnEdit.innerHTML = `<i data-lucide="pencil" style="width: 14px; height: 14px;"></i> <span>Edit Product</span>`;
    btnEdit.addEventListener('click', () => {
      if (onNavigate) onNavigate('inventory', { action: 'manage-product', id: product.id });
    });
    headerActions.appendChild(btnEdit);
  }

  headerDiv.appendChild(headerActions);
  container.appendChild(headerDiv);

  // Archived Notice Banner
  if (isArchived) {
    const archiveBanner = document.createElement('div');
    archiveBanner.style.cssText = 'background: var(--status-warning-bg); border: 1px solid var(--status-warning-border); border-radius: var(--radius-md); padding: 0.85rem 1.15rem; margin-bottom: 1.25rem; display: flex; align-items: flex-start; gap: 0.75rem;';
    archiveBanner.innerHTML = `
      <i data-lucide="archive" style="width: 20px; height: 20px; color: var(--status-warning); flex-shrink: 0; margin-top: 2px;"></i>
      <div style="font-size: 0.85rem; color: var(--text-primary); line-height: 1.5;">
        <strong>Archived Product:</strong> This product is currently archived. Historical purchase, sales, and stock reconciliation records are preserved, but it is not available for new sales unless reactivated.
      </div>
    `;
    container.appendChild(archiveBanner);
  }

  // 2. Overview KPI Cards
  const kpiGrid = document.createElement('div');
  kpiGrid.className = 'kpi-grid';
  kpiGrid.style.cssText = 'display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem; margin-bottom: 1.25rem;';
  kpiGrid.innerHTML = `
    <div class="kpi-card" style="padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
      <div style="font-size: 0.75rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase;">Available Stock</div>
      <div style="font-size: 1.2rem; font-weight: 700; color: ${totalStock === 0 ? 'var(--status-danger)' : 'var(--brand-primary)'}; margin-top: 0.25rem;">
        ${totalStock} <span style="font-size: 0.8rem; font-weight: 500; color: var(--text-secondary);">units</span>
      </div>
    </div>
    <div class="kpi-card" style="padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
      <div style="font-size: 0.75rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase;">Selling Price</div>
      <div style="font-size: 1.2rem; font-weight: 700; color: var(--text-primary); margin-top: 0.25rem;">${sellingDisplay}</div>
    </div>
    <div class="kpi-card" style="padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
      <div style="font-size: 0.75rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase;">Unit Cost (Buying)</div>
      <div style="font-size: 1.2rem; font-weight: 700; color: var(--text-primary); margin-top: 0.25rem;">${buyingDisplay}</div>
    </div>
    <div class="kpi-card" style="padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
      <div style="font-size: 0.75rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase;">Inventory Valuation</div>
      <div style="font-size: 1.2rem; font-weight: 700; color: var(--status-success); margin-top: 0.25rem;">₹${Math.round(totalValuation).toLocaleString('en-IN')}</div>
    </div>
    <div class="kpi-card" style="padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
      <div style="font-size: 0.75rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase;">Stock Status</div>
      <div style="margin-top: 0.4rem;">${createBadge({ label: stockInfo.label, variant: stockInfo.variant }).outerHTML}</div>
    </div>
  `;
  container.appendChild(kpiGrid);

  // 3. Product General Information Card
  const detailsCard = document.createElement('div');
  detailsCard.className = 'card';
  detailsCard.style.cssText = 'display: flex; flex-direction: column; gap: 1.25rem; margin-bottom: 1.25rem;';
  detailsCard.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem;">
      <h3 style="font-size: 1.05rem; font-weight: 700; color: var(--text-primary); margin: 0; display: flex; align-items: center; gap: 0.5rem;">
        <i data-lucide="tag" style="width: 18px; height: 18px; color: var(--brand-primary);"></i>
        General Information & Catalog Specification
      </h3>
      <span style="font-size: 0.8rem; color: var(--text-secondary); font-family: monospace;">Product ID: <strong>${escapeHtml(product.id)}</strong></span>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.25rem; font-size: 0.875rem;">
      <div>
        <div style="color: var(--text-secondary); font-size: 0.78rem; font-weight: 600; text-transform: uppercase;">Product Name</div>
        <div style="font-weight: 700; color: var(--text-primary); margin-top: 0.25rem; font-size: 1rem;">${escapeHtml(product.name)}</div>
      </div>
      <div>
        <div style="color: var(--text-secondary); font-size: 0.78rem; font-weight: 600; text-transform: uppercase;">Category</div>
        <div style="font-weight: 600; color: var(--text-primary); margin-top: 0.25rem;">${escapeHtml(product.category || 'General')}</div>
      </div>
      <div>
        <div style="color: var(--text-secondary); font-size: 0.78rem; font-weight: 600; text-transform: uppercase;">Brand</div>
        <div style="font-weight: 600; color: var(--text-primary); margin-top: 0.25rem;">${escapeHtml(product.brand || 'Unbranded')}</div>
      </div>
      <div>
        <div style="color: var(--text-secondary); font-size: 0.78rem; font-weight: 600; text-transform: uppercase;">Est. Total Retail Value</div>
        <div style="font-weight: 700; color: var(--brand-primary); margin-top: 0.25rem;">₹${Math.round(totalRetailValue).toLocaleString('en-IN')}</div>
      </div>
    </div>

    ${product.description ? `
      <div style="border-top: 1px solid var(--border-color); padding-top: 0.75rem;">
        <div style="color: var(--text-secondary); font-size: 0.78rem; font-weight: 600; text-transform: uppercase; margin-bottom: 0.25rem;">Product Description</div>
        <div style="color: var(--text-primary); font-size: 0.85rem; line-height: 1.5;">${escapeHtml(product.description)}</div>
      </div>
    ` : ''}
  `;
  container.appendChild(detailsCard);

  // 4. Size-wise Stock Breakdown Table
  const sizeCard = document.createElement('div');
  sizeCard.className = 'card';
  sizeCard.style.cssText = 'display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1.25rem;';
  sizeCard.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem;">
      <h3 style="font-size: 1.05rem; font-weight: 700; color: var(--text-primary); margin: 0; display: flex; align-items: center; gap: 0.5rem;">
        <i data-lucide="layers" style="width: 18px; height: 18px; color: var(--brand-primary);"></i>
        Size-Wise Inventory & Stock Breakdown (${variants.length} variant${variants.length > 1 ? 's' : ''})
      </h3>
    </div>

    <div class="table-responsive" style="border: 1px solid var(--border-color); border-radius: var(--radius-sm);">
      <table class="admin-table" style="font-size: 0.85rem;">
        <thead>
          <tr>
            <th style="width: 6%; text-align: center;">S.No</th>
            <th style="width: 16%;">Size / Variant</th>
            <th style="width: 18%;">SKU Code</th>
            <th style="width: 14%; text-align: center;">Physical Stock</th>
            <th style="width: 14%;">Stock Status</th>
            <th style="width: 16%; text-align: right;">Unit Cost</th>
            <th style="width: 16%; text-align: right;">Selling Price</th>
          </tr>
        </thead>
        <tbody>
          ${variants.map((v, idx) => {
            const vStock = Number(v.stock) || 0;
            const vStatus = getSizeStockStatus(vStock);
            const vBadge = createBadge({ label: vStatus.label, variant: vStatus.variant }).outerHTML;
            const vBuy = Number(v.purchasePrice !== undefined && v.purchasePrice !== null && v.purchasePrice !== '' ? v.purchasePrice : (product.purchasePrice || 0));
            const vSell = Number(v.sellingPrice !== undefined && v.sellingPrice !== null && v.sellingPrice !== '' ? v.sellingPrice : (product.sellingPrice || 0));

            return `
              <tr>
                <td style="text-align: center; color: var(--text-secondary); font-weight: 600;">${idx + 1}</td>
                <td>
                  <span class="badge badge-secondary" style="font-size: 0.8rem; font-weight: 700;">Size ${escapeHtml(v.size || 'Standard')}</span>
                </td>
                <td style="font-family: monospace; font-size: 0.8rem; color: var(--text-secondary);">${escapeHtml(v.sku || `${(product.name || 'PRD').slice(0,3).toUpperCase()}-${v.size || 'STD'}`)}</td>
                <td style="text-align: center; font-weight: 700; color: ${vStock === 0 ? 'var(--status-danger)' : 'var(--text-primary)'};">${vStock} units</td>
                <td>${vBadge}</td>
                <td style="text-align: right; color: var(--text-primary);">${vBuy > 0 ? `₹${vBuy.toLocaleString('en-IN')}` : '—'}</td>
                <td style="text-align: right; font-weight: 600; color: var(--brand-primary);">${vSell > 0 ? `₹${vSell.toLocaleString('en-IN')}` : '—'}</td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    </div>
  `;
  container.appendChild(sizeCard);

  // 5. Stock Movement & Ledger Audit Log
  const pNameLower = product.name.trim().toLowerCase();
  const relMovements = (store.data.stockMovements || []).filter(m =>
    m.productId === product.id || (m.product && m.product.trim().toLowerCase() === pNameLower)
  );

  const historyCard = document.createElement('div');
  historyCard.className = 'card';
  historyCard.style.cssText = 'display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1.25rem;';
  historyCard.innerHTML = `
    <div style="border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem;">
      <h3 style="font-size: 1.05rem; font-weight: 700; color: var(--text-primary); margin: 0; display: flex; align-items: center; gap: 0.5rem;">
        <i data-lucide="history" style="width: 18px; height: 18px; color: var(--brand-primary);"></i>
        Stock Movement & Ledger History (${relMovements.length} log${relMovements.length !== 1 ? 's' : ''})
      </h3>
    </div>
  `;

  if (relMovements.length === 0) {
    historyCard.innerHTML += `
      <div style="padding: 1.5rem; text-align: center; color: var(--text-secondary); font-size: 0.85rem;">
        No physical stock movement events recorded for this product.
      </div>
    `;
  } else {
    historyCard.innerHTML += `
      <div class="table-responsive" style="border: 1px solid var(--border-color); border-radius: var(--radius-sm); max-height: 280px; overflow-y: auto;">
        <table class="admin-table" style="font-size: 0.825rem;">
          <thead>
            <tr>
              <th>Date & Time</th>
              <th>Movement Type</th>
              <th>Size</th>
              <th>Quantity Adjusted</th>
              <th>Reference</th>
              <th>Reason & Notes</th>
            </tr>
          </thead>
          <tbody>
            ${relMovements.map(m => `
              <tr>
                <td style="color: var(--text-secondary);">${escapeHtml(m.date || '')}</td>
                <td><span class="badge ${m.quantity > 0 ? 'badge-success' : 'badge-warning'}">${escapeHtml(m.type || 'Adjustment')}</span></td>
                <td><span class="badge badge-secondary">${escapeHtml(m.size || 'Standard')}</span></td>
                <td style="font-weight: 700; color: ${m.quantity > 0 ? 'var(--status-success)' : 'var(--status-danger)'};">${m.quantity > 0 ? `+${m.quantity}` : m.quantity} units</td>
                <td style="color: var(--text-secondary); font-family: monospace;">${escapeHtml(m.reference || '—')}</td>
                <td style="color: var(--text-secondary);">${escapeHtml(m.notes || '—')}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }
  container.appendChild(historyCard);

  // 6. Related Purchases and Sales
  const relPurchases = (store.data.purchases || []).filter(po =>
    (po.items || []).some(it => it.productId === product.id || (it.product && it.product.trim().toLowerCase() === pNameLower))
  );

  const relSales = (store.data.sales || []).filter(s =>
    (s.items || []).some(it => it.productId === product.id || (it.product && it.product.trim().toLowerCase() === pNameLower))
  );

  if (relPurchases.length > 0 || relSales.length > 0) {
    const txCard = document.createElement('div');
    txCard.className = 'card';
    txCard.style.cssText = 'display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1.25rem;';
    txCard.innerHTML = `
      <div style="border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem;">
        <h3 style="font-size: 1.05rem; font-weight: 700; color: var(--text-primary); margin: 0; display: flex; align-items: center; gap: 0.5rem;">
          <i data-lucide="arrow-left-right" style="width: 18px; height: 18px; color: var(--brand-primary);"></i>
          Related Purchase Orders & Sales Transactions
        </h3>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.25rem;">
        <!-- Related Purchases -->
        <div>
          <h4 style="font-size: 0.9rem; font-weight: 600; color: var(--text-primary); margin-bottom: 0.5rem;">Purchases / Stock In (${relPurchases.length})</h4>
          <div class="table-responsive" style="border: 1px solid var(--border-color); border-radius: var(--radius-sm); max-height: 220px; overflow-y: auto;">
            <table class="admin-table" style="font-size: 0.8rem;">
              <thead>
                <tr>
                  <th>PO ID</th>
                  <th>Supplier</th>
                  <th>Status</th>
                  <th style="text-align: right;">Action</th>
                </tr>
              </thead>
              <tbody>
                ${relPurchases.length === 0 ? `<tr><td colspan="4" style="text-align: center; color: var(--text-secondary); padding: 1rem;">No related purchases.</td></tr>` :
                  relPurchases.map(po => `
                    <tr>
                      <td style="font-weight: 600;">${escapeHtml(po.id)}</td>
                      <td>${escapeHtml(po.supplier || 'Supplier')}</td>
                      <td>${createBadge({ label: po.status || 'Received', variant: getStatusBadgeVariant(po.status || 'Received') }).outerHTML}</td>
                      <td style="text-align: right;">
                        <button type="button" class="btn btn-sm btn-secondary view-rel-po-btn" data-po-id="${po.id}" title="View Purchase" style="padding: 0.2rem 0.5rem;">
                          <i data-lucide="eye" style="width: 13px; height: 13px;"></i>
                        </button>
                      </td>
                    </tr>
                  `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- Related Sales -->
        <div>
          <h4 style="font-size: 0.9rem; font-weight: 600; color: var(--text-primary); margin-bottom: 0.5rem;">Sales Orders (${relSales.length})</h4>
          <div class="table-responsive" style="border: 1px solid var(--border-color); border-radius: var(--radius-sm); max-height: 220px; overflow-y: auto;">
            <table class="admin-table" style="font-size: 0.8rem;">
              <thead>
                <tr>
                  <th>Sale Ref</th>
                  <th>Customer</th>
                  <th>Status</th>
                  <th style="text-align: right;">Action</th>
                </tr>
              </thead>
              <tbody>
                ${relSales.length === 0 ? `<tr><td colspan="4" style="text-align: center; color: var(--text-secondary); padding: 1rem;">No related sales.</td></tr>` :
                  relSales.map(s => `
                    <tr>
                      <td style="font-weight: 600;">${escapeHtml(s.id || s.reference || 'SAL')}</td>
                      <td>${escapeHtml(s.customer || s.customerName || 'Walk-in')}</td>
                      <td>${createBadge({ label: s.status || 'Paid', variant: getStatusBadgeVariant(s.status || 'Paid') }).outerHTML}</td>
                      <td style="text-align: right;">
                        <button type="button" class="btn btn-sm btn-secondary view-rel-sale-btn" data-sale-id="${s.id}" title="View Sale" style="padding: 0.2rem 0.5rem;">
                          <i data-lucide="eye" style="width: 13px; height: 13px;"></i>
                        </button>
                      </td>
                    </tr>
                  `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;

    txCard.querySelectorAll('.view-rel-po-btn').forEach(b => {
      b.addEventListener('click', (e) => {
        e.stopPropagation();
        const poId = b.getAttribute('data-po-id');
        if (onNavigate) onNavigate('purchases', { action: 'view', purchaseId: poId });
      });
    });

    txCard.querySelectorAll('.view-rel-sale-btn').forEach(b => {
      b.addEventListener('click', (e) => {
        e.stopPropagation();
        const sId = b.getAttribute('data-sale-id');
        if (onNavigate) onNavigate('sales', { action: 'view', saleId: sId });
      });
    });

    container.appendChild(txCard);
  }

  // 7. Bottom Sticky Actions Bar
  const bottomBar = document.createElement('div');
  bottomBar.className = 'card';
  bottomBar.style.cssText = 'display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; padding: 1rem 1.25rem;';
  bottomBar.innerHTML = `
    <button type="button" class="btn btn-secondary back-to-list-bottom-btn" style="display: inline-flex; align-items: center; gap: 0.4rem; font-weight: 600;">
      <i data-lucide="arrow-left" style="width: 16px; height: 16px;"></i>
      <span>Back to Inventory</span>
    </button>
    <div style="display: flex; gap: 0.75rem; align-items: center; flex-wrap: wrap;">
      ${!isArchived ? `
        <button type="button" class="btn btn-primary edit-inv-bottom-btn" style="display: inline-flex; align-items: center; gap: 0.4rem;">
          <i data-lucide="pencil" style="width: 16px; height: 16px;"></i>
          <span>Edit Product</span>
        </button>
      ` : ''}
    </div>
  `;

  bottomBar.querySelector('.back-to-list-bottom-btn').addEventListener('click', () => {
    if (onNavigate) onNavigate('inventory');
  });

  const editBottomBtn = bottomBar.querySelector('.edit-inv-bottom-btn');
  if (editBottomBtn) {
    editBottomBtn.addEventListener('click', () => {
      if (onNavigate) onNavigate('inventory', { action: 'manage-product', id: product.id });
    });
  }

  container.appendChild(bottomBar);

  if (window.lucide) window.lucide.createIcons();
  return container;
}

function renderInventory(params = {}, onNavigate = null) {
  // Direct product creation is reachable only as a step of the Purchases
  // workflow (which passes returnTo). A bare #inventory?action=add — an old
  // link or a typed URL — falls through to the inventory list instead of
  // offering a second way to create a product.
  if (params && (params.action === 'add' || params.view === 'add')) {
    if (params.returnTo === 'add-purchase') {
      return renderAddProductPage(params, onNavigate);
    }
  }
  if (params && params.action === 'view') {
    return renderViewProductPage(params, onNavigate);
  }
  if (params && (params.action === 'manage-product' || params.action === 'edit' || params.view === 'manage-product' || params.action === 'manage')) {
    return renderProductManagementPage(params, onNavigate);
  }

  const container = document.createElement('div');
  container.className = 'page-container';

  let searchQuery = '';
  let selectedCategory = 'ALL';
  let selectedBrand = 'ALL';
  let selectedStatus = 'ALL';
  if (params && params.status) {
    if (params.status === 'LOW' || params.status === 'LOW_STOCK') selectedStatus = 'LOW';
    else if (params.status === 'OUT' || params.status === 'OUT_OF_STOCK') selectedStatus = 'OUT';
    else if (params.status === 'PARTIAL' || params.status === 'PARTIAL_STOCK') selectedStatus = 'PARTIAL_STOCK';
    else if (params.status === 'IN_STOCK' || params.status === 'Active') selectedStatus = 'IN_STOCK';
    else selectedStatus = params.status;
  }
  let selectedSort = 'latest';
  let invCurrentPage = 1;
  let invPageSize = 5;
  const expandedProductIds = new Set();

  // 1. Breadcrumb Header with Product Count Badge
  const headerDiv = document.createElement('div');
  headerDiv.style.cssText = 'display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.25rem;';

  let invBreadcrumbItems = [
    { label: 'Inventory' }
  ];
  if (selectedStatus === 'LOW') {
    invBreadcrumbItems = [
      { label: 'Inventory', target: 'inventory' },
      { label: 'Low Stock' }
    ];
  } else if (selectedStatus === 'OUT') {
    invBreadcrumbItems = [
      { label: 'Inventory', target: 'inventory' },
      { label: 'Out of Stock' }
    ];
  } else if (selectedStatus === 'PARTIAL_STOCK') {
    invBreadcrumbItems = [
      { label: 'Inventory', target: 'inventory' },
      { label: 'Partial Stock' }
    ];
  }

  headerDiv.appendChild(createBreadcrumb(invBreadcrumbItems, onNavigate));

  // Dynamic Product Count Badge
  const countBadge = document.createElement('div');
  countBadge.id = 'inv-count-badge';
  countBadge.style.cssText = 'display: flex; align-items: center; gap: 0.4rem; font-size: 0.85rem; color: var(--text-secondary);';
  countBadge.innerHTML = `<span>Showing:</span><span class="badge badge-secondary" id="inv-count-num" style="font-weight: 600;">${(store.data.products || []).length} products</span>`;

  // No "Add Product" action here: products and their size-wise stock enter the
  // system through the Purchases workflow, so Inventory is a read/manage view
  // of what purchases and sales have already produced.
  const invHeaderActions = document.createElement('div');
  invHeaderActions.style.cssText = 'display: flex; gap: 0.75rem; align-items: center;';
  invHeaderActions.appendChild(countBadge);
  headerDiv.appendChild(invHeaderActions);

  container.appendChild(headerDiv);

  // 2. Main Card with Controls & Inventory Table (Standardized with Purchases UI)
  const mainCard = document.createElement('div');
  mainCard.className = 'card';
  mainCard.style.cssText = 'display: flex; flex-direction: column; gap: 1.25rem;';

  const categories = store.data.categories || ['Shirts', 'T-Shirts', 'Jeans', 'Trousers', 'Hoodies'];
  const allBrands = Array.from(new Set([
    ...(store.data.brands || []),
    ...(store.data.products || []).map(p => p.brand).filter(Boolean)
  ])).sort();

  mainCard.innerHTML = `
    <!-- Top Filter Bar -->
    <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center;">
        <select class="form-select category-filter" style="width: auto; min-width: 135px; font-size: 0.85rem; padding: 0.45rem 0.75rem;">
          <option value="ALL">All Categories</option>
          ${categories.map(c => `<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`).join('')}
        </select>

        <select class="form-select brand-filter" style="width: auto; min-width: 130px; font-size: 0.85rem; padding: 0.45rem 0.75rem;">
          <option value="ALL">All Brands</option>
          ${allBrands.map(b => `<option value="${escapeHtml(b)}">${escapeHtml(b)}</option>`).join('')}
        </select>

        <select class="form-select status-filter" style="width: auto; min-width: 145px; font-size: 0.85rem; padding: 0.45rem 0.75rem;">
          <option value="ALL" ${selectedStatus === 'ALL' ? 'selected' : ''}>All Stock Status</option>
          <option value="IN_STOCK" ${selectedStatus === 'IN_STOCK' ? 'selected' : ''}>In Stock</option>
          <option value="PARTIAL_STOCK" ${selectedStatus === 'PARTIAL_STOCK' ? 'selected' : ''}>Partial Stock</option>
          <option value="LOW" ${selectedStatus === 'LOW' ? 'selected' : ''}>Low Stock</option>
          <option value="OUT" ${selectedStatus === 'OUT' ? 'selected' : ''}>Out of Stock</option>
          <option value="Inactive" ${selectedStatus === 'Inactive' ? 'selected' : ''}>Inactive</option>
          <option value="Archived" ${selectedStatus === 'Archived' ? 'selected' : ''}>Archived</option>
        </select>

        <select class="form-select sort-filter" style="width: auto; min-width: 175px; font-size: 0.85rem; padding: 0.45rem 0.75rem;">
          <option value="latest" ${selectedSort === 'latest' ? 'selected' : ''}>Sort: Latest First (Newest)</option>
          <option value="name-asc" ${selectedSort === 'name-asc' ? 'selected' : ''}>Sort: Name (A–Z)</option>
          <option value="name-desc" ${selectedSort === 'name-desc' ? 'selected' : ''}>Sort: Name (Z–A)</option>
          <option value="stock-desc" ${selectedSort === 'stock-desc' ? 'selected' : ''}>Sort: Stock (High to Low)</option>
          <option value="stock-asc" ${selectedSort === 'stock-asc' ? 'selected' : ''}>Sort: Stock (Low to High)</option>
          <option value="price-desc" ${selectedSort === 'price-desc' ? 'selected' : ''}>Sort: Price (High to Low)</option>
          <option value="price-asc" ${selectedSort === 'price-asc' ? 'selected' : ''}>Sort: Price (Low to High)</option>
        </select>

        <button type="button" class="btn btn-ghost btn-sm reset-inv-filters-btn" title="Reset all filters and sorting to defaults" style="font-size: 0.8rem; height: 32px; padding: 0 0.65rem; display: inline-flex; align-items: center; gap: 0.35rem; color: var(--text-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-sm); cursor: pointer;">
          <i data-lucide="rotate-ccw" style="width: 13px; height: 13px;"></i>
          <span>Reset</span>
        </button>
      </div>

      <div class="search-input-wrapper" style="max-width: 280px; width: 100%;">
        <i data-lucide="search" class="search-icon"></i>
        <input type="text" class="form-input search-input" id="inv-search-input" placeholder="Search product or brand..." style="padding-left: 2.25rem; font-size: 0.85rem;">
      </div>
    </div>

    <!-- Inventory Table Container -->
    <div class="table-responsive" style="border: 1px solid var(--border-color); border-radius: var(--radius-sm);">
      <table class="admin-table" style="font-size: 0.875rem;">
        <thead>
          <tr>
            <th style="width: 5%; text-align: center;">S.No</th>
            <th style="width: 30%;">Product Name</th>
            <th style="width: 14%;">Category</th>
            <th style="width: 14%;">Brand</th>
            <th style="width: 13%;">Total Available Stock</th>
            <th style="width: 10%;">Stock Status</th>
            <th style="width: 14%; text-align: right;">Actions</th>
          </tr>
        </thead>
        <tbody id="inventory-table-body"></tbody>
      </table>
    </div>

    <!-- Pagination Footer -->
    <div id="inv-pagination-container"></div>
  `;
  container.appendChild(mainCard);

  const searchInp = mainCard.querySelector('#inv-search-input');
  const catFilter = mainCard.querySelector('.category-filter');
  const brandFilter = mainCard.querySelector('.brand-filter');
  const statusFilter = mainCard.querySelector('.status-filter');
  const sortFilter = mainCard.querySelector('.sort-filter');
  const tbody = mainCard.querySelector('#inventory-table-body');

  searchInp.addEventListener('input', (e) => { searchQuery = e.target.value; invCurrentPage = 1; renderInventoryTable(); });
  catFilter.addEventListener('change', (e) => { selectedCategory = e.target.value; invCurrentPage = 1; renderInventoryTable(); });
  brandFilter.addEventListener('change', (e) => { selectedBrand = e.target.value; invCurrentPage = 1; renderInventoryTable(); });
  statusFilter.addEventListener('change', (e) => { selectedStatus = e.target.value; invCurrentPage = 1; renderInventoryTable(); });
  sortFilter.addEventListener('change', (e) => { selectedSort = e.target.value; invCurrentPage = 1; renderInventoryTable(); });

  const resetBtn = mainCard.querySelector('.reset-inv-filters-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      searchQuery = '';
      searchInp.value = '';
      selectedCategory = 'ALL';
      catFilter.value = 'ALL';
      selectedBrand = 'ALL';
      brandFilter.value = 'ALL';
      selectedStatus = 'ALL';
      statusFilter.value = 'ALL';
      selectedSort = 'latest';
      sortFilter.value = 'latest';
      invCurrentPage = 1;
      renderInventoryTable();
    });
  }

  function getProductPriceInfo(product) {
    if (!product) {
      return {
        display: `<span style="color: var(--text-secondary); font-style: italic;">Price Not Set</span>`,
        price: 0,
        min: 0,
        max: 0
      };
    }

    let price = null;
    const variants = Array.isArray(product.variants) ? product.variants : [];
    const hasSizes = variants.length > 0 && variants.some(v => v.size && v.size !== 'Standard');

    if (hasSizes) {
      // Use the selling price of the first size variant as the parent row's displayed price
      const firstSizeVariant = variants.find(v => v.size && v.size !== 'Standard') || variants[0];
      if (firstSizeVariant) {
        const sp = firstSizeVariant.sellingPrice !== undefined && firstSizeVariant.sellingPrice !== null && firstSizeVariant.sellingPrice !== ''
          ? Number(firstSizeVariant.sellingPrice)
          : null;
        if (sp !== null && !isNaN(sp) && sp > 0) {
          price = sp;
        }
      }
    } else if (variants.length > 0) {
      const firstVariant = variants[0];
      if (firstVariant) {
        const sp = firstVariant.sellingPrice !== undefined && firstVariant.sellingPrice !== null && firstVariant.sellingPrice !== ''
          ? Number(firstVariant.sellingPrice)
          : null;
        if (sp !== null && !isNaN(sp) && sp > 0) {
          price = sp;
        }
      }
    }

    // If product has no size variants (or first variant has no explicit price), use regular product selling price
    if (price === null && product.sellingPrice !== undefined && product.sellingPrice !== null && product.sellingPrice !== '') {
      const sp = Number(product.sellingPrice);
      if (!isNaN(sp) && sp > 0) {
        price = sp;
      }
    }

    if (price === null || price === 0) {
      return {
        display: `<span style="color: var(--text-secondary); font-style: italic;">Price Not Set</span>`,
        price: 0,
        min: 0,
        max: 0
      };
    }

    return {
      display: `₹${Number(price).toLocaleString('en-IN')}`,
      price: Number(price),
      min: Number(price),
      max: Number(price)
    };
  }

  function renderInventoryTable() {
    tbody.innerHTML = '';
    const products = store.data.products || [];

    const filteredProducts = products.filter(p => {
      const q = searchQuery.toLowerCase().trim();
      const matchQuery = !q || p.name.toLowerCase().includes(q) || (p.brand || '').toLowerCase().includes(q) || (p.category || '').toLowerCase().includes(q);
      const matchCat = selectedCategory === 'ALL' || p.category === selectedCategory;
      const matchBrand = selectedBrand === 'ALL' || (p.brand || 'Unbranded') === selectedBrand;

      const stockInfo = getProductStockStatus(p);

      // Archived products are not sellable, so they never satisfy a stock-level
      // filter; they match only their own Archived option.
      const notSellable = p.status === 'Inactive' || p.status === 'Archived';
      let matchStat = true;
      if (selectedStatus === 'Active' || selectedStatus === 'IN_STOCK') {
        matchStat = !notSellable && stockInfo.status === 'IN_STOCK';
      } else if (selectedStatus === 'PARTIAL_STOCK' || selectedStatus === 'PARTIAL') {
        matchStat = !notSellable && stockInfo.status === 'PARTIAL_STOCK';
      } else if (selectedStatus === 'LOW' || selectedStatus === 'LOW_STOCK') {
        matchStat = !notSellable && stockInfo.status === 'LOW_STOCK';
      } else if (selectedStatus === 'OUT' || selectedStatus === 'OUT_OF_STOCK') {
        matchStat = !notSellable && (stockInfo.status === 'OUT_OF_STOCK' || stockInfo.outOfStockSizes > 0);
      } else if (selectedStatus === 'Inactive') {
        matchStat = (p.status === 'Inactive');
      } else if (selectedStatus === 'Archived' || selectedStatus === 'ARCHIVED') {
        matchStat = (p.status === 'Archived');
      }

      return matchQuery && matchCat && matchBrand && matchStat;
    });

    // Update displayed product count after filtering
    const countNumEl = container.querySelector('#inv-count-num');
    if (countNumEl) {
      if (filteredProducts.length === products.length) {
        countNumEl.textContent = `${products.length} products`;
      } else {
        countNumEl.textContent = `${filteredProducts.length} of ${products.length} products`;
      }
    }

    // Sorting
    filteredProducts.sort((a, b) => {
      const stockA = (a.variants || []).reduce((sum, v) => sum + (v.stock || 0), 0);
      const stockB = (b.variants || []).reduce((sum, v) => sum + (v.stock || 0), 0);
      const priceA = getProductPriceInfo(a);
      const priceB = getProductPriceInfo(b);

      if (selectedSort === 'latest') {
        const timeA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
        const timeB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
        if (timeB !== timeA) return timeB - timeA;
        return (b.id || '').localeCompare(a.id || '');
      }
      if (selectedSort === 'name-asc') return a.name.localeCompare(b.name);
      if (selectedSort === 'name-desc') return b.name.localeCompare(a.name);
      if (selectedSort === 'stock-desc') return stockB - stockA;
      if (selectedSort === 'stock-asc') return stockA - stockB;
      if (selectedSort === 'price-desc') return priceB.max - priceA.max;
      if (selectedSort === 'price-asc') return priceA.min - priceB.min;
      return 0;
    });

    if (filteredProducts.length === 0) {
      tbody.innerHTML = `<tr><td colspan="8" style="text-align: center; color: var(--text-secondary); padding: 2.5rem 1rem;">No products found matching filter.</td></tr>`;
      renderPaginationBar({
        container: mainCard.querySelector('#inv-pagination-container'),
        totalItems: 0
      });
      return;
    }

    const totalPages = Math.max(1, Math.ceil(filteredProducts.length / invPageSize));
    if (invCurrentPage > totalPages) invCurrentPage = totalPages;
    if (invCurrentPage < 1) invCurrentPage = 1;

    const startIdx = (invCurrentPage - 1) * invPageSize;
    const endIdx = Math.min(startIdx + invPageSize, filteredProducts.length);
    const pageProducts = filteredProducts.slice(startIdx, endIdx);

    pageProducts.forEach((p, index) => {
      const stockInfo = getProductStockStatus(p);
      const totalStock = stockInfo.totalStock;
      const hasSizes = stockInfo.hasSizes;
      const isExpanded = expandedProductIds.has(p.id);

      let statusBadge;
      if (p.status === 'Archived') {
        // Archived products are not sellable; never show them as In Stock.
        statusBadge = createBadge({ label: 'Archived', variant: 'secondary' });
      } else if (p.status === 'Inactive') {
        statusBadge = createBadge({ label: 'Inactive', variant: 'secondary' });
      } else if (stockInfo.status === 'OUT_OF_STOCK') {
        statusBadge = createBadge({ label: 'Out of Stock', variant: 'danger' });
      } else if (stockInfo.status === 'PARTIAL_STOCK') {
        statusBadge = createBadge({ label: 'Partial Stock', variant: 'warning' });
      } else if (stockInfo.status === 'LOW_STOCK') {
        statusBadge = createBadge({ label: 'Low Stock', variant: 'warning' });
      } else {
        statusBadge = createBadge({ label: 'In Stock', variant: 'success' });
      }

      // Subtitle under Total Available Stock for products with sizes
      let stockSubtitle = '';
      if (hasSizes) {
        let subColor = 'var(--text-secondary)';
        if (stockInfo.status === 'OUT_OF_STOCK') {
          subColor = 'var(--status-danger-text)';
        } else if (stockInfo.status === 'PARTIAL_STOCK' || stockInfo.status === 'LOW_STOCK') {
          subColor = 'var(--status-warning-text)';
        }
        stockSubtitle = `<div class="product-stock-summary" style="font-size: 0.75rem; font-weight: 500; color: ${subColor}; margin-top: 2px;">${stockInfo.stockSummary}</div>`;
      }

      // Main Product Row
      const tr = document.createElement('tr');
      tr.style.cssText = 'transition: background-color 0.15s ease;';

      const chevronIcon = hasSizes
        ? `<button type="button" class="expand-toggle-btn" title="${isExpanded ? 'Collapse sizes' : 'Expand sizes'}" style="background: none; border: none; padding: 2px 4px; color: var(--text-secondary); cursor: pointer; display: inline-flex; align-items: center; justify-content: center; margin-right: 6px; border-radius: 4px; transition: color 0.15s ease;">
             <i data-lucide="${isExpanded ? 'chevron-down' : 'chevron-right'}" style="width: 15px; height: 15px;"></i>
           </button>`
        : '';

      tr.innerHTML = `
        <td style="font-weight: 600; color: var(--text-secondary); text-align: center;">${startIdx + index + 1}</td>
        <td>
          <div style="display: flex; align-items: center; gap: 0.25rem;">
            ${chevronIcon}
            <div>
              <div style="font-weight: 600; font-size: 0.9rem; color: var(--text-primary);">${escapeHtml(p.name)}</div>
              ${hasSizes ? `<div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 2px;">${stockInfo.totalSizes} size variants</div>` : ''}
            </div>
          </div>
        </td>
        <td style="color: var(--text-secondary);">${escapeHtml(p.category || 'General')}</td>
        <td style="color: var(--text-secondary);">${escapeHtml(p.brand || 'Unbranded')}</td>
        <td style="font-weight: 600; color: ${totalStock === 0 ? 'var(--status-danger)' : 'var(--text-primary)'};">
          <div>${totalStock} units</div>
          ${stockSubtitle}
        </td>
        <td>${statusBadge.outerHTML}</td>
        <td style="text-align: right;">
          <div style="display: flex; gap: 0.35rem; justify-content: flex-end;" class="row-actions-box">
            <button type="button" class="btn btn-sm btn-secondary table-action-btn view-inv-btn" title="View" aria-label="View">
              <i data-lucide="eye"></i>
              <span class="sr-only">View</span>
            </button>
            <button type="button" class="btn btn-sm btn-secondary table-action-btn edit-inv-btn" title="Edit" aria-label="Edit">
              <i data-lucide="pencil"></i>
              <span class="sr-only">Edit</span>
            </button>
            <button type="button" class="btn btn-sm btn-secondary table-action-btn delete-inv-btn" title="Delete" aria-label="Delete" style="color: var(--status-danger);">
              <i data-lucide="trash-2"></i>
              <span class="sr-only">Delete</span>
            </button>
          </div>
        </td>
      `;

      // Expand/collapse toggle helper
      const toggleExpand = () => {
        if (!hasSizes) return;
        if (expandedProductIds.has(p.id)) expandedProductIds.delete(p.id);
        else expandedProductIds.add(p.id);
        renderInventoryTable();
      };

      // Expand/collapse ONLY via chevron toggle button (row background click does nothing)
      if (hasSizes) {
        const toggleBtn = tr.querySelector('.expand-toggle-btn');
        if (toggleBtn) {
          toggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleExpand();
          });
        }
      }

      tr.querySelector('.view-inv-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        if (onNavigate) {
          onNavigate('inventory', { action: 'view', productId: p.id });
        } else {
          openProductDetailsModal(p);
        }
      });

      tr.querySelector('.edit-inv-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        if (onNavigate) {
          onNavigate('inventory', { action: 'manage-product', id: p.id });
        } else if (window.appInstance && window.appInstance.navigateTo) {
          window.appInstance.navigateTo('inventory', { action: 'manage-product', id: p.id });
        } else {
          openEditProductModal(p, () => renderInventoryTable());
        }
      });

      const deleteInvBtn = tr.querySelector('.delete-inv-btn');
      if (deleteInvBtn) {
        deleteInvBtn.addEventListener('click', async (e) => {
          e.stopPropagation();
          const hasHistory = (store.data.sales || []).some(s => (s.items || []).some(it => it.productId === p.id || (it.product && it.product.trim().toLowerCase() === p.name.trim().toLowerCase()))) ||
                             (store.data.purchases || []).some(po => (po.items || []).some(it => it.productId === p.id || (it.product && it.product.trim().toLowerCase() === p.name.trim().toLowerCase())));
          const confirmMsg = hasHistory
            ? `Are you sure you want to delete "${p.name}" (${p.id})?\n\nThis product has transaction history. It will be safely archived to preserve financial records and stock reconciliation, and will no longer be available for new sales.`
            : `Are you sure you want to delete "${p.name}" (${p.id})?\n\nThis will remove the product and all its size variants from inventory.`;
          const confirmed = await uiConfirm({ title: 'Confirm deletion', message: confirmMsg, confirmText: 'Delete', variant: 'danger' });
          if (confirmed) {
            try {
              if (expandedProductIds.has(p.id)) {
                expandedProductIds.delete(p.id);
              }
              store.deleteProduct(p.id);
              toast.show({ message: hasHistory ? `Product "${p.name}" archived successfully.` : `Product "${p.name}" deleted successfully.`, type: 'info' });
              renderInventoryTable();
            } catch (err) {
              toast.show({ message: err.message, type: 'danger' });
            }
          }
        });
      }

      const parentAdjBtn = tr.querySelector('.adjust-inv-btn');
      if (parentAdjBtn) {
        tr.querySelector('.adjust-inv-btn').addEventListener('click', (e) => {
          e.stopPropagation();
          openRowStockAdjustModal(p, null, () => renderInventoryTable());
        });
      }

      tbody.appendChild(tr);

      // Expandable Size Breakdown Table Sub-Row
      if (hasSizes && isExpanded) {
        const subTr = document.createElement('tr');
        subTr.className = 'size-breakdown-row';

        const variantsList = (p.variants || []);
        const sizeRowsHtml = variantsList.map(v => {
          const buyPrice = v.purchasePrice !== undefined && v.purchasePrice !== null && v.purchasePrice > 0 
            ? `₹${Number(v.purchasePrice).toLocaleString('en-IN')}` 
            : (p.purchasePrice ? `₹${Number(p.purchasePrice).toLocaleString('en-IN')}` : '—');

          const sellPrice = v.sellingPrice !== undefined && v.sellingPrice !== null && v.sellingPrice > 0 
            ? `₹${Number(v.sellingPrice).toLocaleString('en-IN')}` 
            : (p.sellingPrice ? `₹${Number(p.sellingPrice).toLocaleString('en-IN')}` : '—');

          const vStock = v.stock || 0;
          const vStatus = getSizeStockStatus(vStock);
          const vBadge = createBadge({ label: vStatus.label, variant: vStatus.variant }).outerHTML;

          return `
            <tr style="border-bottom: 1px solid var(--border-color);">
              <td style="padding: 0.6rem 0.85rem; font-weight: 600;">
                <span style="display: inline-block; padding: 0.15rem 0.5rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: 4px; font-size: 0.8rem;">
                  Size ${escapeHtml(v.size)}
                </span>
              </td>
              <td style="padding: 0.6rem 0.85rem; color: var(--text-secondary); font-size: 0.85rem;">${buyPrice}</td>
              <td style="padding: 0.6rem 0.85rem; font-weight: 600; font-size: 0.85rem;">${sellPrice}</td>
              <td style="padding: 0.6rem 0.85rem; font-weight: 600; font-size: 0.85rem; color: ${vStock === 0 ? 'var(--status-danger)' : 'var(--text-primary)'};">${vStock} units</td>
              <td style="padding: 0.6rem 0.85rem;">${vBadge}</td>
              <td style="padding: 0.6rem 0.85rem; text-align: right;">
                <button type="button" class="btn btn-sm btn-secondary table-action-btn size-adjust-btn adjust-inv-btn" data-size="${escapeHtml(v.size)}" title="Adjust Stock" aria-label="Adjust Stock">
                  <i data-lucide="sliders"></i>
                  <span class="sr-only">Adjust Stock</span>
                </button>
              </td>
            </tr>
          `;
        }).join('');

        subTr.innerHTML = `
          <td colspan="7" style="padding: 0; background: var(--bg-secondary); border-bottom: 1px solid var(--border-color);">
            <div style="padding: 1rem 1.25rem; display: flex; flex-direction: column; gap: 0.75rem;">
              <div style="display: flex; align-items: center; justify-content: space-between;">
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                  <span style="font-size: 0.8rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; color: var(--brand-primary);">
                    Size-Wise Inventory Details
                  </span>
                  <span style="font-size: 0.8rem; color: var(--text-secondary);">&mdash; ${escapeHtml(p.name)}</span>
                </div>
                <span style="font-size: 0.75rem; color: var(--text-secondary);">Total Available: <strong>${totalStock} units</strong> across ${variantsList.length} sizes${stockInfo.outOfStockSizes > 0 ? ` (${stockInfo.outOfStockSizes} out of stock)` : ''}</span>
              </div>

              <div class="table-responsive" style="border: 1px solid var(--border-color); border-radius: var(--radius-sm); background: var(--bg-surface);">
                <table class="admin-table" style="margin: 0; font-size: 0.825rem;">
                  <thead>
                    <tr style="background: var(--bg-secondary);">
                      <th style="padding: 0.55rem 0.85rem;">Size</th>
                      <th style="padding: 0.55rem 0.85rem;">Buying Price / Unit</th>
                      <th style="padding: 0.55rem 0.85rem;">Selling Price / Unit</th>
                      <th style="padding: 0.55rem 0.85rem;">Available Quantity</th>
                      <th style="padding: 0.55rem 0.85rem;">Stock Status</th>
                      <th style="padding: 0.55rem 0.85rem; text-align: right;">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${sizeRowsHtml}
                  </tbody>
                </table>
              </div>
            </div>
          </td>
        `;

        subTr.querySelectorAll('.size-adjust-btn').forEach(btn => {
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const sz = btn.getAttribute('data-size');
            if (onNavigate) {
              onNavigate('inventory', { action: 'manage-product', id: p.id, size: sz, section: 'stock' });
            } else if (window.appInstance && window.appInstance.navigateTo) {
              window.appInstance.navigateTo('inventory', { action: 'manage-product', id: p.id, size: sz, section: 'stock' });
            } else {
              openRowStockAdjustModal(p, sz, () => renderInventoryTable());
            }
          });
        });

        tbody.appendChild(subTr);
      }
    });

    renderPaginationBar({
      container: mainCard.querySelector('#inv-pagination-container'),
      totalItems: filteredProducts.length,
      currentPage: invCurrentPage,
      pageSize: invPageSize,
      pageSizeOptions: [5, 10, 25, 50],
      itemName: 'products',
      onPageChange: (newPage) => {
        invCurrentPage = newPage;
        renderInventoryTable();
      },
      onPageSizeChange: (newSize) => {
        invPageSize = newSize;
        invCurrentPage = 1;
        renderInventoryTable();
      }
    });

    if (window.lucide) window.lucide.createIcons();
  }

  renderInventoryTable();
  return container;
}

// EDIT PRODUCT INFO MODAL (PRESERVES STOCK INTACT)
function openEditProductModal(product, onSaved) {
  const existingModal = document.getElementById('modal-edit-product');
  if (existingModal) existingModal.remove();

  const modal = document.createElement('div');
  modal.id = 'modal-edit-product';
  modal.className = 'modal-overlay active';

  const catOptions = store.getCategories();
  const brandOptions = store.getBrands();
  const hasSizes = Array.isArray(product.variants) && product.variants.length > 0 && product.variants.some(v => v.size !== 'Standard');

  let sizePricesHtml = '';
  if (hasSizes) {
    sizePricesHtml = `
      <div class="form-group" style="margin: 0;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.35rem;">
          <label class="form-label" style="font-size: 0.825rem; font-weight: 500; margin: 0; color: var(--text-primary);">
            Size-Wise Selling Prices (₹)
          </label>
          <span style="font-size: 0.75rem; color: var(--text-secondary);">Optional per size</span>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(105px, 1fr)); gap: 0.5rem; background: var(--bg-secondary); padding: 0.65rem 0.85rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
          ${(product.variants || []).map(v => `
            <div>
              <label style="font-size: 0.75rem; font-weight: 600; color: var(--text-primary); display: block; margin-bottom: 3px;">Size ${escapeHtml(v.size)}</label>
              <input type="number" class="form-input variant-price-input" data-size="${escapeHtml(v.size)}" placeholder="e.g. 599" value="${v.sellingPrice !== undefined && v.sellingPrice !== null && v.sellingPrice !== '' ? v.sellingPrice : (product.sellingPrice || '')}" style="font-size: 0.825rem; padding: 0.35rem 0.55rem;">
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  modal.innerHTML = `
    <div class="modal-content" style="max-width: 480px; width: 92%; max-height: 90vh; display: flex; flex-direction: column; overflow: hidden; padding: 0; border: 1px solid var(--border-color); border-radius: var(--radius-md); background: var(--bg-surface); box-shadow: var(--shadow-md);">
      
      <!-- 1. Header (Pinned at top) -->
      <div class="modal-header" style="display: flex; justify-content: space-between; align-items: flex-start; padding: 0.9rem 1.15rem; border-bottom: 1px solid var(--border-color); background: var(--bg-surface);">
        <div style="flex: 1; padding-right: 0.75rem;">
          <h3 style="margin: 0; font-size: 1.05rem; font-weight: 600; color: var(--text-primary); line-height: 1.3;">Edit Product Details</h3>
          <div style="font-size: 0.775rem; color: var(--text-secondary); margin-top: 3px; line-height: 1.3;">
            Update product details and pricing for ${escapeHtml(product.name)}
          </div>
        </div>
        <button type="button" class="modal-close-btn" style="background: none; border: none; color: var(--text-secondary); cursor: pointer; padding: 2px; border-radius: 4px; display: inline-flex; align-items: center; justify-content: center; transition: color 0.15s ease;" title="Close">
          <i data-lucide="x" style="width: 18px; height: 18px;"></i>
        </button>
      </div>

      <!-- 2. Scrollable Body Content -->
      <div style="padding: 1rem 1.15rem; overflow-y: auto; display: flex; flex-direction: column; gap: 0.85rem; flex: 1;">
        
        <div class="form-group" style="margin: 0;">
          <label class="form-label" style="font-size: 0.825rem; font-weight: 500; margin-bottom: 0.35rem; display: block; color: var(--text-primary);">
            Product Name <span style="color: var(--status-danger);">*</span>
          </label>
          <input type="text" id="edit-prod-name" class="form-input" value="${product.name || ''}" style="font-size: 0.85rem; padding: 0.45rem 0.75rem;">
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
          <div class="form-group" style="margin: 0;">
            <label class="form-label" style="font-size: 0.825rem; font-weight: 500; margin-bottom: 0.35rem; display: block; color: var(--text-primary);">
              Category
            </label>
            <select id="edit-prod-cat" class="form-select" style="font-size: 0.85rem; padding: 0.45rem 0.75rem;">
              ${catOptions.map(c => `<option value="${escapeHtml(c)}" ${c === product.category ? 'selected' : ''}>${escapeHtml(c)}</option>`).join('')}
            </select>
          </div>
          <div class="form-group" style="margin: 0;">
            <label class="form-label" style="font-size: 0.825rem; font-weight: 500; margin-bottom: 0.35rem; display: block; color: var(--text-primary);">
              Brand
            </label>
            <select id="edit-prod-brand" class="form-select" style="font-size: 0.85rem; padding: 0.45rem 0.75rem;">
              ${brandOptions.map(b => `<option value="${escapeHtml(b)}" ${b === product.brand ? 'selected' : ''}>${escapeHtml(b)}</option>`).join('')}
            </select>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
          <div class="form-group" style="margin: 0;">
            <label class="form-label" style="font-size: 0.825rem; font-weight: 500; margin-bottom: 0.35rem; display: block; color: var(--text-primary);">
              Default Selling Price (₹)
            </label>
            <input type="number" id="edit-prod-price" class="form-input" placeholder="e.g. 1499" value="${product.sellingPrice !== null && product.sellingPrice !== undefined ? product.sellingPrice : ''}" style="font-size: 0.85rem; padding: 0.45rem 0.75rem;">
          </div>
          <div class="form-group" style="margin: 0;">
            <label class="form-label" style="font-size: 0.825rem; font-weight: 500; margin-bottom: 0.35rem; display: block; color: var(--text-primary);">
              Status
            </label>
            <select id="edit-prod-status" class="form-select" style="font-size: 0.85rem; padding: 0.45rem 0.75rem;">
              <option value="Active" ${product.status === 'Active' ? 'selected' : ''}>Active</option>
              <option value="Inactive" ${product.status === 'Inactive' ? 'selected' : ''}>Inactive</option>
              ${product.status === 'Archived' ? `<option value="Archived" selected>Archived (use Reactivate to restore)</option>` : ''}
            </select>
          </div>
        </div>

        ${sizePricesHtml}

        <div class="form-group" style="margin: 0;">
          <label class="form-label" style="font-size: 0.825rem; font-weight: 500; margin-bottom: 0.35rem; display: block; color: var(--text-primary);">
            Product Description (Optional)
          </label>
          <textarea id="edit-prod-desc" class="form-textarea" rows="2" placeholder="Enter product description, material, care instructions..." style="font-size: 0.85rem; padding: 0.45rem 0.75rem; line-height: 1.4; resize: vertical;">${product.description || ''}</textarea>
        </div>
      </div>

      <!-- 3. Footer Actions (Pinned at bottom) -->
      <div class="modal-footer" style="display: flex; justify-content: flex-end; align-items: center; gap: 0.65rem; padding: 0.85rem 1.15rem; border-top: 1px solid var(--border-color); background: var(--bg-surface);">
        <button type="button" class="btn btn-secondary cancel-modal-btn" style="padding: 0.45rem 1rem; font-size: 0.85rem;">Cancel</button>
        <button type="button" class="btn btn-primary save-modal-btn" style="padding: 0.45rem 1.15rem; font-size: 0.85rem;">Save Changes</button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  if (window.lucide) window.lucide.createIcons();

  const closeModal = () => modal.remove();
  modal.querySelector('.modal-close-btn').onclick = closeModal;
  modal.querySelector('.cancel-modal-btn').onclick = closeModal;

  modal.querySelector('.save-modal-btn').onclick = () => {
    const name = modal.querySelector('#edit-prod-name').value.trim();
    const category = modal.querySelector('#edit-prod-cat').value;
    const brand = modal.querySelector('#edit-prod-brand').value;
    const priceVal = modal.querySelector('#edit-prod-price').value.trim();
    const sellingPrice = priceVal !== '' ? parseFloat(priceVal) : null;
    const status = modal.querySelector('#edit-prod-status').value;
    const description = modal.querySelector('#edit-prod-desc').value.trim();

    if (!name) {
      toast.show({ message: 'Product Name is required.', type: 'danger' });
      return;
    }

    const variantPrices = {};
    modal.querySelectorAll('.variant-price-input').forEach(inp => {
      const sz = inp.getAttribute('data-size');
      const val = inp.value.trim();
      if (val !== '' && !isNaN(parseFloat(val))) {
        variantPrices[sz] = parseFloat(val);
      }
    });

    store.updateProduct(product.id, {
      name,
      category,
      brand,
      sellingPrice,
      status,
      description,
      variantPrices
    });

    toast.show({ message: 'Product details updated successfully.', type: 'success' });
    closeModal();
    if (onSaved) onSaved();
  };
}

// ROW MANUAL STOCK ADJUSTMENT MODAL (CONTEXT-AWARE SIZE POPULATION)
function openRowStockAdjustModal(product, initialSize = null, onAdjusted = null) {
  const existingModal = document.getElementById('modal-adjust-row-stock');
  if (existingModal) existingModal.remove();

  // Fresh reference to live product from store to ensure current data
  const liveProduct = store.data.products.find(p => p.id === product.id) || product;

  // Normalize variants list
  const variants = (Array.isArray(liveProduct.variants) && liveProduct.variants.length > 0)
    ? liveProduct.variants
    : [{ size: 'Standard', stock: Number(liveProduct.stock || liveProduct.totalStock) || 0 }];

  const hasSizes = variants.length > 1 || (variants.length === 1 && variants[0].size && variants[0].size !== 'Standard');
  const isSizePreselected = Boolean(initialSize);

  let selectedSize;
  let selectedVariant;

  if (isSizePreselected) {
    selectedSize = initialSize;
    selectedVariant = variants.find(v => v.size === selectedSize);
    if (!selectedVariant) {
      toast.show({ message: `Size variant "${initialSize}" not found for ${liveProduct.name}.`, type: 'danger' });
      return;
    }
  } else {
    selectedVariant = variants[0];
    selectedSize = selectedVariant ? selectedVariant.size : 'Standard';
  }

  let adjType = 'ADD';
  let adjQty = 1;

  const ADD_STOCK_REASONS = [
    'Found Stock',
    'Stock Correction / Audit',
    'Supplier Extra Stock',
    'Opening Stock',
    'Manual Stock Update',
    'Other'
  ];

  const REMOVE_STOCK_REASONS = [
    'Damaged Stock',
    'Missing / Lost Stock',
    'Stock Correction / Audit',
    'Expired Stock',
    'Manual Stock Update',
    'Other'
  ];
  // Support legacy reason identifiers: 'Damaged Stock (Write-off)', 'Missing / Discrepancy'

  function getCurrentStock() {
    return selectedVariant ? Math.max(0, Number(selectedVariant.stock) || 0) : 0;
  }

  function calculateNewStock() {
    const cur = getCurrentStock();
    if (adjType === 'ADD') return cur + adjQty;
    return cur - adjQty;
  }

  // Size UI: Target Size single aligned row (Expanded Size Row) or compact dropdown (Main Row)
  let sizeSectionHtml = '';
  if (isSizePreselected) {
    // Expanded Size Row: Hide the selector because size is known; show single aligned row
    sizeSectionHtml = `
      <div style="padding: 0.55rem 0.85rem; border: 1px solid var(--border-color); border-radius: var(--radius-sm); background: var(--bg-surface); display: flex; justify-content: space-between; align-items: center;">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <span style="font-size: 0.725rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; color: var(--text-secondary);">Target Size:</span>
          <span class="badge badge-secondary" style="font-weight: 700; font-size: 0.8rem; padding: 0.15rem 0.55rem;">Size ${selectedSize}</span>
        </div>
        <div style="font-size: 0.8rem; color: var(--text-secondary);">
          Current Stock: <strong id="adj-current-stock-label" style="color: var(--brand-primary); font-weight: 700; font-size: 0.875rem;">${getCurrentStock()} units</strong>
        </div>
      </div>
    `;
  } else if (hasSizes) {
    // Main Inventory Row with multiple sizes: Display size selector with current stock per size
    sizeSectionHtml = `
      <div class="form-group" style="margin: 0;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.35rem;">
          <label class="form-label" style="font-size: 0.825rem; font-weight: 500; margin: 0; color: var(--text-primary);">
            Select Size Variant <span style="color: var(--status-danger);">*</span>
          </label>
          <span style="font-size: 0.775rem; color: var(--text-secondary);">
            Current: <strong id="adj-current-stock-label" style="color: var(--brand-primary); font-weight: 600;">${getCurrentStock()} units</strong>
          </span>
        </div>
        <select id="adj-size-select" class="form-select" style="font-size: 0.85rem; padding: 0.45rem 0.75rem;">
          ${variants.map(v => `<option value="${escapeHtml(v.size)}" ${v.size === selectedSize ? 'selected' : ''}>Size ${escapeHtml(v.size)} (${v.stock || 0} units available)</option>`).join('')}
        </select>
      </div>
    `;
  }

  const modal = document.createElement('div');
  modal.id = 'modal-adjust-row-stock';
  modal.className = 'modal-overlay active';

  const totalProductStock = (liveProduct.variants || []).reduce((sum, v) => sum + (v.stock || 0), 0);

  modal.innerHTML = `
    <div class="modal-content" style="max-width: 460px; width: 92%; max-height: 90vh; display: flex; flex-direction: column; overflow: hidden; padding: 0; border: 1px solid var(--border-color); border-radius: var(--radius-md); background: var(--bg-surface); box-shadow: var(--shadow-md);">
      
      <!-- 1. Header (Pinned at top) -->
      <div class="modal-header" style="display: flex; justify-content: space-between; align-items: flex-start; padding: 0.9rem 1.15rem; border-bottom: 1px solid var(--border-color); background: var(--bg-surface);">
        <div style="flex: 1; padding-right: 0.75rem;">
          <h3 style="margin: 0; font-size: 1.05rem; font-weight: 600; color: var(--text-primary); line-height: 1.3;">Manual Stock Correction / Adjustment</h3>
          <div style="font-size: 0.775rem; color: var(--text-secondary); margin-top: 3px; line-height: 1.3;">
            ${isSizePreselected ? `Adjusting stock for ${escapeHtml(liveProduct.name)} (Size ${selectedSize})` : `Adjust stock for ${escapeHtml(liveProduct.name)}`}
          </div>
        </div>
        <button type="button" class="modal-close-btn" style="background: none; border: none; color: var(--text-secondary); cursor: pointer; padding: 2px; border-radius: 4px; display: inline-flex; align-items: center; justify-content: center; transition: color 0.15s ease;" title="Close">
          <i data-lucide="x" style="width: 18px; height: 18px;"></i>
        </button>
      </div>

      <!-- 2. Scrollable Body Content -->
      <div style="padding: 1rem 1.15rem; overflow-y: auto; display: flex; flex-direction: column; gap: 0.85rem; flex: 1;">
        
        <!-- Product Overview Box -->
        <div style="padding: 0.65rem 0.85rem; border: 1px solid var(--border-color); border-radius: var(--radius-sm); background: var(--bg-secondary); font-size: 0.825rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.35rem;">
            <div style="font-weight: 600; color: var(--text-primary); font-size: 0.9rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 300px;">${escapeHtml(liveProduct.name)}</div>
            ${liveProduct.brand ? `<span style="font-size: 0.75rem; color: var(--text-secondary); background: var(--bg-surface); padding: 1px 7px; border-radius: 4px; border: 1px solid var(--border-color); font-weight: 500;">${escapeHtml(liveProduct.brand)}</span>` : ''}
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; color: var(--text-secondary); font-size: 0.8rem;">
            <span>Category: <strong style="color: var(--text-primary); font-weight: 500;">${escapeHtml(liveProduct.category || 'General')}</strong></span>
            <span>Total Available: <strong style="color: var(--text-primary); font-weight: 600;">${totalProductStock} units</strong></span>
          </div>
        </div>

        ${sizeSectionHtml}

        <!-- Adjustment Type Field -->
        <div class="form-group" style="margin: 0;">
          <label class="form-label" style="font-size: 0.825rem; font-weight: 500; margin-bottom: 0.35rem; display: block; color: var(--text-primary);">
            Adjustment Type <span style="color: var(--status-danger);">*</span>
          </label>
          <select id="adj-type-select" class="form-select" style="font-size: 0.85rem; padding: 0.45rem 0.75rem;">
            <option value="ADD" selected>Add Stock (+)</option>
            <option value="REMOVE">Remove Stock (−)</option>
          </select>
        </div>

        <!-- Quantity Field -->
        <div class="form-group" style="margin: 0;">
          <label class="form-label" style="font-size: 0.825rem; font-weight: 500; margin-bottom: 0.35rem; display: block; color: var(--text-primary);">
            Quantity <span style="color: var(--status-danger);">*</span>
          </label>
          <input type="number" id="adj-qty-input" class="form-input" min="1" step="1" value="1" placeholder="Enter positive whole number" style="font-size: 0.85rem; padding: 0.45rem 0.75rem;">
          <div id="adj-qty-error" style="font-size: 0.75rem; color: var(--status-danger); margin-top: 3px; display: none;"></div>
        </div>

        <!-- Reason Field -->
        <div class="form-group" style="margin: 0;">
          <label class="form-label" style="font-size: 0.825rem; font-weight: 500; margin-bottom: 0.35rem; display: block; color: var(--text-primary);">
            Reason for Adjustment <span style="color: var(--status-danger);">*</span>
          </label>
          <select id="adj-reason-select" class="form-select" style="font-size: 0.85rem; padding: 0.45rem 0.75rem;">
            ${ADD_STOCK_REASONS.map(r => `<option value="${r}">${r}</option>`).join('')}
          </select>
        </div>

        <!-- Calculated New Stock Card -->
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.65rem 0.85rem; border: 1px solid var(--border-color); border-radius: var(--radius-sm); font-size: 0.85rem; background: var(--bg-surface);">
          <span style="color: var(--text-secondary); font-weight: 500;">Calculated New Stock:</span>
          <strong id="adj-new-stock-label" style="font-size: 1.1rem; color: var(--text-primary); font-weight: 700;">${calculateNewStock()} units</strong>
        </div>

      </div>

      <!-- 3. Footer Actions (Pinned at bottom) -->
      <div class="modal-footer" style="display: flex; justify-content: flex-end; align-items: center; gap: 0.65rem; padding: 0.85rem 1.15rem; border-top: 1px solid var(--border-color); background: var(--bg-surface);">
        <button type="button" class="btn btn-secondary cancel-modal-btn" style="padding: 0.45rem 1rem; font-size: 0.85rem;">Cancel</button>
        <button type="button" class="btn btn-primary save-modal-btn" style="padding: 0.45rem 1.15rem; font-size: 0.85rem;">Save Adjustment</button>
      </div>

    </div>
  `;

  document.body.appendChild(modal);
  if (window.lucide) window.lucide.createIcons();

  const closeModal = () => modal.remove();
  modal.querySelector('.modal-close-btn').onclick = closeModal;
  modal.querySelector('.cancel-modal-btn').onclick = closeModal;

  const sizeSel = modal.querySelector('#adj-size-select');
  const typeSel = modal.querySelector('#adj-type-select');
  const reasonSel = modal.querySelector('#adj-reason-select');
  const qtyInp = modal.querySelector('#adj-qty-input');
  const curStockLabel = modal.querySelector('#adj-current-stock-label');
  const newStockLabel = modal.querySelector('#adj-new-stock-label');
  const qtyErrorEl = modal.querySelector('#adj-qty-error');
  const saveBtn = modal.querySelector('.save-modal-btn');

  function updateReasonOptions(type) {
    if (!reasonSel) return;
    const currentVal = reasonSel.value;
    const reasonsList = (type === 'ADD') ? ADD_STOCK_REASONS : REMOVE_STOCK_REASONS;

    reasonSel.innerHTML = reasonsList.map(r => `<option value="${r}">${r}</option>`).join('');

    // If currently selected reason is valid for the newly selected adjustment type, retain it; otherwise reset to first option
    if (reasonsList.includes(currentVal)) {
      reasonSel.value = currentVal;
    } else {
      reasonSel.value = reasonsList[0];
    }
  }

  // Initialize dynamic reason options for initial adjustment type
  updateReasonOptions(adjType);

  function updateCalc() {
    if (sizeSel) {
      selectedSize = sizeSel.value;
      selectedVariant = variants.find(v => v.size === selectedSize) || variants[0];
    }
    adjType = typeSel.value;

    const rawVal = (qtyInp.value || '').trim();
    const num = Number(rawVal);
    adjQty = parseInt(rawVal, 10);

    const cur = getCurrentStock();
    if (curStockLabel) curStockLabel.textContent = `${cur} units`;

    let hasError = false;

    if (!rawVal || isNaN(num) || num <= 0 || !Number.isInteger(num)) {
      hasError = true;
      if (qtyErrorEl) {
        qtyErrorEl.textContent = 'Please enter a positive whole number quantity (1 or greater).';
        qtyErrorEl.style.display = 'block';
      }
      qtyInp.style.borderColor = 'var(--status-danger)';
      newStockLabel.innerHTML = `<span style="color: var(--text-secondary); font-size: 0.95rem;">Invalid quantity</span>`;
    } else if (adjType === 'REMOVE' && adjQty > cur) {
      hasError = true;
      const deficit = cur - adjQty;
      if (qtyErrorEl) {
        qtyErrorEl.textContent = `Cannot remove ${adjQty} units. Maximum available stock is ${cur} units.`;
        qtyErrorEl.style.display = 'block';
      }
      qtyInp.style.borderColor = 'var(--status-danger)';
      newStockLabel.innerHTML = `<span style="color: var(--status-danger); font-size: 0.95rem;">${deficit} units (Negative stock prevented)</span>`;
    } else {
      if (qtyErrorEl) qtyErrorEl.style.display = 'none';
      qtyInp.style.borderColor = '';
      const calculated = (adjType === 'ADD') ? (cur + adjQty) : (cur - adjQty);
      newStockLabel.innerHTML = `<span style="color: var(--text-primary); font-weight: 700;">${calculated} units</span>`;
    }

    return !hasError;
  }

  if (sizeSel) sizeSel.onchange = updateCalc;
  typeSel.onchange = () => {
    updateReasonOptions(typeSel.value);
    updateCalc();
  };
  qtyInp.oninput = updateCalc;

  let isSaving = false;

  saveBtn.onclick = () => {
    if (isSaving) return;

    const isValid = updateCalc();
    const rawVal = (qtyInp.value || '').trim();
    const finalQty = parseInt(rawVal, 10);
    const reasonSel = modal.querySelector('#adj-reason-select');
    const reason = (reasonSel ? reasonSel.value : '').trim();

    if (!rawVal || isNaN(finalQty) || finalQty <= 0 || !Number.isInteger(Number(rawVal))) {
      toast.show({ message: 'Quantity must be a positive whole number greater than 0.', type: 'danger' });
      qtyInp.focus();
      return;
    }

    const cur = getCurrentStock();
    if (adjType === 'REMOVE' && finalQty > cur) {
      toast.show({ message: `Cannot remove ${finalQty} units. Maximum available stock is ${cur} units.`, type: 'danger' });
      qtyInp.focus();
      return;
    }

    if (!reason) {
      toast.show({ message: 'Please select a reason for the stock adjustment.', type: 'danger' });
      if (reasonSel) reasonSel.focus();
      return;
    }

    // Prevent duplicate adjustments on repeated clicks
    isSaving = true;
    saveBtn.disabled = true;
    saveBtn.style.opacity = '0.6';
    saveBtn.style.cursor = 'not-allowed';

    try {
      store.adjustProductStock({
        productId: liveProduct.id,
        size: selectedSize,
        adjustmentType: adjType,
        quantity: finalQty,
        reason: reason
      });

      const sizeInfo = (hasSizes && selectedSize && selectedSize !== 'Standard') ? ` (${selectedSize})` : '';
      toast.show({ message: `Stock adjusted successfully for ${liveProduct.name}${sizeInfo}.`, type: 'success' });
      closeModal();
      if (onAdjusted) onAdjusted();
    } catch (err) {
      isSaving = false;
      saveBtn.disabled = false;
      saveBtn.style.opacity = '1';
      saveBtn.style.cursor = 'pointer';
      toast.show({ message: err.message || 'Error adjusting stock', type: 'danger' });
    }
  };
}


// PURCHASES PAGE
// PURCHASES PAGE (Waiting for Receive -> Received Workflow)
function renderPurchases(params = {}, onNavigate = null) {
  if (params && params.action === 'edit') {
    return renderEditPurchasePage(params, onNavigate);
  }
  if (params && params.action === 'view') {
    return renderViewPurchasePage(params, onNavigate);
  }
  if (params && params.action === 'receive') {
    return renderReceivePurchasePage(params, onNavigate);
  }
  if (params && (params.action === 'add' || params.view === 'add' || params.action === 'add-product' || params.view === 'add-product')) {
    return renderAddPurchasePage(params, onNavigate);
  }

  const container = document.createElement('div');
  container.className = 'page-container';

  // 1. Header (Breadcrumb & "+ Add Purchase" button)
  const headerDiv = document.createElement('div');
  headerDiv.style.cssText = 'display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;';
  headerDiv.appendChild(createBreadcrumb([
    { label: 'Purchases' }
  ], onNavigate));

  const actionsDiv = document.createElement('div');
  actionsDiv.style.cssText = 'display: flex; gap: 0.75rem; align-items: center;';

  const btnAddPurchase = createButton({
    text: 'Add Purchase',
    icon: 'plus',
    variant: 'primary',
    size: 'sm',
    onClick: () => { if (onNavigate) onNavigate('purchases', { action: 'add' }); }
  });

  actionsDiv.appendChild(btnAddPurchase);
  headerDiv.appendChild(actionsDiv);
  container.appendChild(headerDiv);

  // 2. Main Card with Status Filters & Purchases Table
  const mainCard = document.createElement('div');
  mainCard.className = 'card';
  mainCard.style.cssText = 'display: flex; flex-direction: column; gap: 1.25rem;';

  let currentFilter = 'all'; // 'all', 'waiting', 'partially-received', 'received'
  let searchQuery = '';
  let purCurrentPage = 1;
  let purPageSize = 5;

  mainCard.innerHTML = `
    <!-- Top Filter Bar -->
    <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
      <div style="display: flex; gap: 0.4rem; flex-wrap: wrap;" id="pur-status-filters">
        <button type="button" class="btn btn-sm pur-filter-btn" data-filter="all" style="font-weight: 600;">All Purchases</button>
        <button type="button" class="btn btn-sm pur-filter-btn" data-filter="waiting" style="font-weight: 600;">Waiting for Receive</button>
        <button type="button" class="btn btn-sm pur-filter-btn" data-filter="partially-received" style="font-weight: 600;">Partially Received</button>
        <button type="button" class="btn btn-sm pur-filter-btn" data-filter="received" style="font-weight: 600;">Received</button>
      </div>

      <div class="search-input-wrapper" style="max-width: 280px; width: 100%;">
        <i data-lucide="search" class="search-icon"></i>
        <input type="text" class="form-input search-input" id="pur-search-input" placeholder="Search supplier, ID, product..." style="padding-left: 2.25rem; font-size: 0.85rem;">
      </div>
    </div>

    <!-- Purchases Table Container -->
    <div class="table-responsive" style="border: 1px solid var(--border-color); border-radius: var(--radius-sm);">
      <table class="admin-table" style="font-size: 0.875rem;">
        <thead>
          <tr>
            <th style="width: 6%; text-align: center;">S.No</th>
            <th style="width: 20%;">Supplier</th>
            <th style="width: 13%;">Date</th>
            <th style="width: 16%;">Units (Rec / Ord)</th>
            <th style="width: 14%;">Total Cost</th>
            <th style="width: 12%;">Status</th>
            <th style="min-width: 180px; width: 180px; text-align: right;">Actions</th>
          </tr>
        </thead>
        <tbody id="pur-table-tbody"></tbody>
      </table>
    </div>

    <!-- Pagination Footer -->
    <div id="pur-pagination-container"></div>
  `;

  container.appendChild(mainCard);

  function renderPurchasesTable() {
    const tbody = mainCard.querySelector('#pur-table-tbody');
    tbody.innerHTML = '';

    const allPurchases = store.data.purchases || [];

    const filtered = allPurchases.filter(p => {
      const statusLower = (p.status || 'completed').toLowerCase();
      
      // Filter logic
      // Legacy draft/approved records read as waiting for receipt.
      if (currentFilter === 'waiting' && !isPurchaseWaiting(p.status)) return false;
      if (currentFilter === 'partially-received' && statusLower !== 'partially received' && statusLower !== 'partially-received') return false;
      if (currentFilter === 'received' && statusLower !== 'received' && statusLower !== 'completed') return false;

      // Search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const idMatch = (p.id || '').toLowerCase().includes(query);
        const suppMatch = (p.supplier || '').toLowerCase().includes(query);
        const prodMatch = (p.productName || '').toLowerCase().includes(query) || (p.items || []).some(i => (i.product || '').toLowerCase().includes(query));
        if (!idMatch && !suppMatch && !prodMatch) return false;
      }

      return true;
    });

    if (filtered.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: var(--text-secondary); padding: 2rem;">No purchases found matching filter.</td></tr>`;
      renderPaginationBar({
        container: mainCard.querySelector('#pur-pagination-container'),
        totalItems: 0
      });
      return;
    }

    const totalPages = Math.max(1, Math.ceil(filtered.length / purPageSize));
    if (purCurrentPage > totalPages) purCurrentPage = totalPages;
    if (purCurrentPage < 1) purCurrentPage = 1;

    const startIdx = (purCurrentPage - 1) * purPageSize;
    const endIdx = Math.min(startIdx + purPageSize, filtered.length);
    const pagePurchases = filtered.slice(startIdx, endIdx);

    pagePurchases.forEach((p, index) => {
      const tr = document.createElement('tr');
      tr.style.cursor = 'default';

      const status = p.status || 'Completed';
      const badgeVariant = getStatusBadgeVariant(status);

      // Calculate total ordered and total received
      const totalOrdered = p.totalQuantity !== undefined ? Number(p.totalQuantity) : (p.items || []).reduce((s, i) => s + Number(i.qty || i.received || 0), 0);
      const totalReceived = p.totalReceived !== undefined ? Number(p.totalReceived) : (p.items || []).reduce((s, i) => s + Number(i.receivedQty !== undefined ? i.receivedQty : (i.received !== undefined ? i.received : (status === 'Completed' || status === 'Received' ? (i.qty || 0) : 0))), 0);

      // Row actions by status:
      //   Waiting for Receive  -> Receive, View, Edit, Delete
      //   Partially Received   -> Receive Remaining, View, Edit, Delete
      //   Received             -> View, Edit, Delete
      const actionView = `
            <button type="button" class="btn btn-sm btn-secondary table-action-btn action-view-btn" title="View" aria-label="View">
              <i data-lucide="eye"></i>
              <span class="sr-only">View</span>
            </button>`;
      const actionEdit = `
            <button type="button" class="btn btn-sm btn-secondary table-action-btn action-edit-btn" title="Edit" aria-label="Edit">
              <i data-lucide="pencil"></i>
              <span class="sr-only">Edit</span>
            </button>`;
      const actionDelete = `
            <button type="button" class="btn btn-sm btn-secondary table-action-btn action-delete-btn" title="Delete" aria-label="Delete" style="color: var(--status-danger);">
              <i data-lucide="trash-2"></i>
              <span class="sr-only">Delete</span>
            </button>`;
      const actionReceive = (label) => `
            <button type="button" class="btn btn-sm btn-primary table-action-btn action-receive-btn" title="${label}" aria-label="${label}">
              <i data-lucide="package-check"></i>
              <span class="sr-only">${label}</span>
            </button>`;

      let receiveBtnHtml = '';
      if (isPurchaseWaiting(status)) {
        receiveBtnHtml = actionReceive('Receive');
      } else if (status === 'Partially Received') {
        receiveBtnHtml = actionReceive('Receive Remaining');
      }

      const actionsHtml = `
        <div style="display: flex; gap: 0.35rem; justify-content: flex-end; align-items: center; flex-wrap: nowrap;" class="row-actions-box">
          ${receiveBtnHtml}${actionView}${actionEdit}${actionDelete}
        </div>
      `;

      tr.innerHTML = `
        <td style="font-weight: 600; color: var(--text-secondary); text-align: center;">${startIdx + index + 1}</td>
        <td style="font-weight: 600; color: var(--text-primary);">${escapeHtml(p.supplier || 'Supplier')}</td>
        <td style="color: var(--text-secondary);">${p.date || '-'}</td>
        <td style="font-weight: 600; color: var(--text-primary);">
          ${status === 'Partially Received' ? `<span style="color: var(--brand-primary);">${totalReceived}</span> / ${totalOrdered}` : `${totalOrdered} units`}
        </td>
        <td style="font-weight: 700; color: var(--text-primary);">₹${(p.totalAmount || 0).toLocaleString()}</td>
        <td>${createBadge({ label: status, variant: badgeVariant }).outerHTML}</td>
        <td style="text-align: right; white-space: nowrap; width: 180px;">${actionsHtml}</td>
      `;

      // Row actions
      const editBtn = tr.querySelector('.action-edit-btn');
      if (editBtn) {
        editBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          if (onNavigate) {
            onNavigate('purchases', { action: 'edit', purchaseId: p.id });
          } else if (window.appInstance && window.appInstance.navigateTo) {
            window.appInstance.navigateTo('purchases', { action: 'edit', purchaseId: p.id });
          }
        });
      }

      const deleteBtn = tr.querySelector('.action-delete-btn');
      if (deleteBtn) {
        deleteBtn.addEventListener('click', async (e) => {
          e.stopPropagation();
          const itemsList = Array.isArray(p.items) ? p.items : [];
          const totalReceivedAll = itemsList.reduce((s, i) => s + Math.max(0, Number(i.receivedQty !== undefined ? i.receivedQty : (i.received || 0))), 0);
          const hasReceivedStock = totalReceivedAll > 0 || p.status === 'Received' || p.status === 'Partially Received' || p.status === 'Completed';

          if (hasReceivedStock) {
            // Check if any received item has currentStock < receivedQty (which would leave negative / incorrect inventory)
            let shortageIssue = null;
            for (const item of itemsList) {
              const recQty = Math.max(0, Number(item.receivedQty !== undefined ? item.receivedQty : (item.received !== undefined ? item.received : (p.status === 'Completed' || p.status === 'Received' ? (item.qty || 0) : 0))));
              if (recQty > 0) {
                const prod = (store.data.products || []).find(pr =>
                  pr.id === item.productId ||
                  (pr.name && item.product && pr.name.trim().toLowerCase() === item.product.trim().toLowerCase()) ||
                  (pr.name && item.productName && pr.name.trim().toLowerCase() === item.productName.trim().toLowerCase())
                );
                if (prod) {
                  let variant = null;
                  let extractedSize = item.size || '';
                  if (!extractedSize && item.sku) {
                    const parts = String(item.sku).split('-');
                    if (parts.length > 1) extractedSize = parts[parts.length - 1];
                  }
                  const targetSize = (extractedSize || 'Standard').trim().toUpperCase();
                  if (item.sku) {
                    variant = (prod.variants || []).find(v => v.sku && v.sku.toUpperCase() === item.sku.toUpperCase());
                  }
                  if (!variant) {
                    variant = (prod.variants || []).find(v => (v.size || 'Standard').trim().toUpperCase() === targetSize);
                  }
                  if (!variant && Array.isArray(prod.variants) && prod.variants.length > 0) {
                    variant = prod.variants[0];
                  }
                  const currentStock = variant ? Number(variant.stock || 0) : Number(prod.totalStock || prod.stock || 0);
                  if (currentStock < recQty) {
                    shortageIssue = {
                      productName: prod.name,
                      size: variant ? variant.size : 'Standard',
                      currentStock,
                      receivedQty: recQty
                    };
                    break;
                  }
                }
              }
            }

            if (shortageIssue) {
              await uiConfirm({
                title: 'Cannot Delete Received Order',
                message: `Purchase order "${p.id}" cannot be deleted because product "${shortageIssue.productName}" (${shortageIssue.size}) only has ${shortageIssue.currentStock} units in stock, but this purchase received ${shortageIssue.receivedQty} units. Deleting it would leave inventory quantities negative or incorrect because units have already been sold.`,
                confirmText: 'OK',
                variant: 'secondary',
                singleButton: true
              });
              return;
            }

            const confirmMsg = `Are you sure you want to delete purchase order "${p.id}" from "${p.supplier || 'Supplier'}"?\n\nThis order has received stock into inventory. Deleting it will reverse the received quantities from physical stock and record stock reversal movements.\n\nThis action cannot be undone.`;
            const confirmed = await uiConfirm({
              title: `Delete purchase order ${p.id}?`,
              message: confirmMsg,
              confirmText: 'Delete',
              cancelText: 'Cancel',
              variant: 'danger'
            });
            if (confirmed) {
              try {
                store.deletePurchase(p.id);
                toast.show({ message: `Purchase order ${p.id} deleted and inventory reconciled.`, type: 'info' });
                renderPurchasesTable();
              } catch (err) {
                toast.show({ message: err.message, type: 'danger' });
              }
            }
          } else {
            // Unreceived / Waiting for Receive
            const confirmMsg = `Are you sure you want to delete purchase order "${p.id}" from "${p.supplier || 'Supplier'}"?\n\nThis purchase has not been received into stock. This action cannot be undone.`;
            const confirmed = await uiConfirm({
              title: `Delete purchase order ${p.id}?`,
              message: confirmMsg,
              confirmText: 'Delete',
              cancelText: 'Cancel',
              variant: 'danger'
            });
            if (confirmed) {
              try {
                store.deletePurchase(p.id);
                toast.show({ message: `Purchase order ${p.id} deleted.`, type: 'info' });
                renderPurchasesTable();
              } catch (err) {
                toast.show({ message: err.message, type: 'danger' });
              }
            }
          }
        });
      }

      // Receive Actions
      const receiveBtn = tr.querySelector('.action-receive-btn');
      if (receiveBtn) {
        receiveBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          if (onNavigate) {
            onNavigate('purchases', { action: 'receive', purchaseId: p.id });
          } else if (window.appInstance && window.appInstance.navigateTo) {
            window.appInstance.navigateTo('purchases', { action: 'receive', purchaseId: p.id });
          }
        });
      }

      // View Action
      const viewBtn = tr.querySelector('.action-view-btn');
      if (viewBtn) {
        viewBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          if (onNavigate) {
            onNavigate('purchases', { action: 'view', purchaseId: p.id });
          } else if (window.appInstance && window.appInstance.navigateTo) {
            window.appInstance.navigateTo('purchases', { action: 'view', purchaseId: p.id });
          } else {
            openViewPurchaseModal(p, onNavigate, () => renderPurchasesTable());
          }
        });
      }

      tbody.appendChild(tr);
    });

    renderPaginationBar({
      container: mainCard.querySelector('#pur-pagination-container'),
      totalItems: filtered.length,
      currentPage: purCurrentPage,
      pageSize: purPageSize,
      pageSizeOptions: [5, 10, 25, 50],
      itemName: 'purchases',
      onPageChange: (newPage) => {
        purCurrentPage = newPage;
        renderPurchasesTable();
      },
      onPageSizeChange: (newSize) => {
        purPageSize = newSize;
        purCurrentPage = 1;
        renderPurchasesTable();
      }
    });

    if (window.lucide) window.lucide.createIcons();
  }

  // Filter Buttons logic
  function updateFilterButtons() {
    mainCard.querySelectorAll('.pur-filter-btn').forEach(btn => {
      const f = btn.dataset.filter;
      if (f === currentFilter) {
        btn.style.backgroundColor = 'var(--brand-primary)';
        btn.style.color = 'var(--brand-text)';
        btn.style.borderColor = 'var(--brand-primary)';
      } else {
        btn.style.backgroundColor = 'var(--bg-secondary)';
        btn.style.color = 'var(--text-secondary)';
        btn.style.borderColor = 'var(--border-color)';
      }
    });
    renderPurchasesTable();
  }

  mainCard.querySelectorAll('.pur-filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      currentFilter = e.currentTarget.dataset.filter;
      purCurrentPage = 1;
      updateFilterButtons();
    });
  });

  const searchInput = mainCard.querySelector('#pur-search-input');
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim();
    purCurrentPage = 1;
    renderPurchasesTable();
  });

  updateFilterButtons();

  if (window.lucide) window.lucide.createIcons();
  return container;
}

// RECEIVE PURCHASE MODAL (Actual Stock Intake & Partial Receipt Support)
// ==========================================
// DEDICATED RECEIVE PURCHASE PAGE (Separate Page)
// ==========================================
function renderReceivePurchasePage(params = {}, onNavigate = null) {
  if (typeof params === 'function') {
    onNavigate = params;
    params = {};
  }

  const container = document.createElement('div');
  container.className = 'page-container';

  const purchaseId = params.purchaseId || params.id;
  const purchase = (store.data.purchases || []).find(p => p.id === purchaseId);
  // Where Cancel and a successful receipt return to.
  const returnTo = params.returnTo === 'view' ? 'view' : 'list';
  const goBack = () => {
    if (!onNavigate) return;
    if (returnTo === 'view' && purchase) onNavigate('purchases', { action: 'view', purchaseId: purchase.id });
    else onNavigate('purchases');
  };

  // Missing purchase error state
  if (!purchase) {
    const errorCard = document.createElement('div');
    errorCard.className = 'card';
    errorCard.style.cssText = 'text-align: center; padding: 3.5rem 1.5rem; display: flex; flex-direction: column; align-items: center; gap: 1.25rem;';
    errorCard.innerHTML = `
      <div style="width: 56px; height: 56px; border-radius: 50%; background: var(--status-danger-bg); display: flex; align-items: center; justify-content: center; color: var(--status-danger);">
        <i data-lucide="alert-triangle" style="width: 28px; height: 28px;"></i>
      </div>
      <div>
        <h2 style="font-size: 1.25rem; font-weight: 700; color: var(--text-primary); margin: 0 0 0.5rem 0;">Purchase Order Not Found</h2>
        <p style="color: var(--text-secondary); margin: 0; font-size: 0.9rem; max-width: 440px;">
          The purchase order with identifier "<strong>${escapeHtml(purchaseId || 'unknown')}</strong>" could not be located or may have been deleted.
        </p>
      </div>
      <button type="button" class="btn btn-secondary back-to-list-btn" style="margin-top: 0.5rem; display: inline-flex; align-items: center; gap: 0.4rem;">
        <i data-lucide="arrow-left" style="width: 16px; height: 16px;"></i>
        <span>Return to Purchases</span>
      </button>
    `;
    errorCard.querySelector('.back-to-list-btn').addEventListener('click', () => {
      if (onNavigate) onNavigate('purchases');
    });
    container.appendChild(errorCard);
    if (window.lucide) window.lucide.createIcons();
    return container;
  }

  const status = purchase.status || PURCHASE_STATUS_WAITING;
  const canReceive = isPurchaseReceivable(status);

  const badgeVariant = getStatusBadgeVariant(status);

  // 1. Header (Breadcrumb + Status Badge + Back)
  const headerDiv = document.createElement('div');
  headerDiv.style.cssText = 'display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.25rem;';

  const breadcrumbWrap = document.createElement('div');
  breadcrumbWrap.style.cssText = 'display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap;';
  breadcrumbWrap.appendChild(createBreadcrumb([
    { label: 'Purchases', target: 'purchases' },
    { label: `Receive Stock (${purchase.id})` }
  ], onNavigate));
  breadcrumbWrap.appendChild(createBadge({ label: status, variant: badgeVariant }));
  headerDiv.appendChild(breadcrumbWrap);

  const btnBackTop = document.createElement('button');
  btnBackTop.type = 'button';
  btnBackTop.className = 'btn btn-secondary btn-sm back-to-list-btn';
  btnBackTop.innerHTML = `<i data-lucide="arrow-left" style="width: 14px; height: 14px;"></i> <span>Back</span>`;
  btnBackTop.addEventListener('click', goBack);
  headerDiv.appendChild(btnBackTop);

  container.appendChild(headerDiv);

  // Status guard: only Approved / Partially Received orders can be received.
  if (!canReceive) {
    const blockedCard = document.createElement('div');
    blockedCard.className = 'card';
    blockedCard.style.cssText = 'text-align: center; padding: 3rem 1.5rem; display: flex; flex-direction: column; align-items: center; gap: 1rem;';
    const reason = (status === 'Received' || status === 'Completed')
      ? `Purchase order ${purchase.id} has already been fully received.`
      : `Purchase order ${purchase.id} is still a draft. Approve it first, then receive the stock.`;
    blockedCard.innerHTML = `
      <div style="width: 56px; height: 56px; border-radius: 50%; background: var(--bg-secondary); display: flex; align-items: center; justify-content: center; color: var(--text-secondary);">
        <i data-lucide="package-x" style="width: 28px; height: 28px;"></i>
      </div>
      <div>
        <h2 style="font-size: 1.15rem; font-weight: 700; color: var(--text-primary); margin: 0 0 0.5rem 0;">Stock cannot be received</h2>
        <p style="color: var(--text-secondary); margin: 0; font-size: 0.9rem; max-width: 460px;">${escapeHtml(reason)}</p>
      </div>
    `;
    const backBtn = createButton({
      text: 'Back to Purchases',
      icon: 'arrow-left',
      variant: 'secondary',
      onClick: () => { if (onNavigate) onNavigate('purchases'); }
    });
    blockedCard.appendChild(backBtn);
    container.appendChild(blockedCard);
    if (window.lucide) window.lucide.createIcons();
    return container;
  }

  const todayStr = new Date().toISOString().split('T')[0];

  // 2. Order summary card
  const infoCard = document.createElement('div');
  infoCard.className = 'card';
  infoCard.style.cssText = 'margin-bottom: 1.25rem; padding: 1.15rem 1.35rem;';
  infoCard.innerHTML = `
    <div style="display: flex; flex-wrap: wrap; gap: 2rem; align-items: flex-start;">
      <div>
        <div style="font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-secondary); font-weight: 600; margin-bottom: 0.25rem;">Purchase Order</div>
        <div style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary);">${escapeHtml(purchase.id)}</div>
      </div>
      <div>
        <div style="font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-secondary); font-weight: 600; margin-bottom: 0.25rem;">Supplier</div>
        <div style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary);">${escapeHtml(purchase.supplier || 'Supplier')}</div>
      </div>
      <div>
        <div style="font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-secondary); font-weight: 600; margin-bottom: 0.25rem;">Order Date</div>
        <div style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary);">${escapeHtml(purchase.date || '-')}</div>
      </div>
    </div>
  `;
  container.appendChild(infoCard);

  // 3. Main intake card
  const mainCard = document.createElement('div');
  mainCard.className = 'card';
  mainCard.style.cssText = 'display: flex; flex-direction: column; gap: 1.25rem;';
  mainCard.innerHTML = `
    <div>
      <h3 class="card-title" style="font-size: 1.05rem; font-weight: 700; color: var(--text-primary); margin: 0 0 0.3rem 0;">Goods Intake</h3>
      <p style="font-size: 0.825rem; color: var(--text-secondary); margin: 0;">
        Verify goods received against ordered quantities. Enter the actual units received now for each size. Only confirmed received units will be added to Inventory.
      </p>
    </div>

    <div class="table-responsive" style="border: 1px solid var(--border-color); border-radius: var(--radius-sm);">
      <table class="admin-table" style="font-size: 0.85rem;">
        <thead>
          <tr>
            <th style="width: 25%;">Product</th>
            <th style="width: 12%;">Size</th>
            <th style="width: 15%;">Ordered Qty</th>
            <th style="width: 15%;">Already Rec.</th>
            <th style="width: 15%;">Outstanding</th>
            <th style="width: 18%;">Receive Now *</th>
          </tr>
        </thead>
        <tbody id="receive-items-tbody"></tbody>
      </table>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem;">
      <div class="form-group">
        <label class="form-label" for="receive-date-input" style="font-size: 0.825rem; font-weight: 600; color: var(--text-primary);">Receipt Date *</label>
        <input type="date" class="form-input" id="receive-date-input" value="${todayStr}">
      </div>
      <div class="form-group">
        <label class="form-label" for="receive-notes-input" style="font-size: 0.825rem; font-weight: 600; color: var(--text-primary);">Delivery Notes / Remarks</label>
        <input type="text" class="form-input" id="receive-notes-input" placeholder="e.g. Batch verified, quality OK">
      </div>
    </div>

    <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem; background: var(--bg-surface); padding: 0.75rem 1rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color); font-size: 0.85rem; font-weight: 600;">
      <div>Units Receiving Now: <span id="receive-now-total" style="color: var(--brand-primary); font-weight: 700;">0</span></div>
      <div id="receive-status-preview" style="color: var(--status-success);">Status after receipt: Fully Received</div>
    </div>
  `;
  container.appendChild(mainCard);

  const tbody = mainCard.querySelector('#receive-items-tbody');
  const items = purchase.items || [];
  const receiveMap = {};

  items.forEach((item, index) => {
    const ordered = item.qty || 0;
    const alreadyRec = item.receivedQty || 0;
    const outstanding = Math.max(0, ordered - alreadyRec);

    // Default receive now to outstanding quantity for 1-click convenience
    receiveMap[index] = outstanding;

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td style="font-weight: 600; color: var(--text-primary);">${escapeHtml(item.product)}</td>
      <td><span class="badge badge-secondary">${escapeHtml(item.size || 'Standard')}</span></td>
      <td style="font-weight: 600;">${ordered} units</td>
      <td style="color: var(--text-secondary);">${alreadyRec} units</td>
      <td style="font-weight: 700; color: ${outstanding > 0 ? 'var(--status-warning-text)' : 'var(--text-secondary)'};">
        ${outstanding} units
      </td>
      <td>
        <input type="number" class="form-input item-receive-input" data-index="${index}" min="0" max="${outstanding}" value="${outstanding}" style="max-width: 110px; font-weight: 600;" ${outstanding === 0 ? 'disabled' : ''}>
      </td>
    `;

    const input = tr.querySelector('.item-receive-input');
    if (input) {
      input.addEventListener('input', (e) => {
        let val = parseInt(e.target.value, 10);
        if (isNaN(val) || val < 0) val = 0;
        if (val > outstanding) {
          val = outstanding;
          e.target.value = outstanding;
          toast.show({ message: `Cannot receive more than outstanding (${outstanding} units).`, type: 'warning' });
        }
        receiveMap[index] = val;
        recalculateReceiveSummary();
      });
    }

    tbody.appendChild(tr);
  });

  function recalculateReceiveSummary() {
    let nowTotal = 0;
    let allRemainingCleared = true;

    items.forEach((item, index) => {
      const ordered = item.qty || 0;
      const alreadyRec = item.receivedQty || 0;
      const nowRec = receiveMap[index] || 0;

      nowTotal += nowRec;
      if (alreadyRec + nowRec < ordered) {
        allRemainingCleared = false;
      }
    });

    mainCard.querySelector('#receive-now-total').textContent = `${nowTotal} units`;
    const previewEl = mainCard.querySelector('#receive-status-preview');
    if (nowTotal === 0) {
      previewEl.textContent = 'No units entered to receive';
      previewEl.style.color = 'var(--text-secondary)';
    } else if (allRemainingCleared) {
      previewEl.textContent = 'Will mark purchase as: Received (Fully Received)';
      previewEl.style.color = 'var(--status-success)';
    } else {
      previewEl.textContent = 'Will mark purchase as: Partially Received';
      previewEl.style.color = 'var(--status-warning-text)';
    }
  }

  recalculateReceiveSummary();

  // 4. Bottom action bar
  const bottomBar = document.createElement('div');
  bottomBar.className = 'card';
  bottomBar.style.cssText = 'display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; padding: 1rem 1.25rem; margin-top: 1.25rem;';
  bottomBar.innerHTML = `
    <button type="button" class="btn btn-secondary cancel-receive-btn" style="display: inline-flex; align-items: center; gap: 0.4rem; font-weight: 600;">
      <i data-lucide="arrow-left" style="width: 16px; height: 16px;"></i>
      <span>Cancel</span>
    </button>
    <button type="button" class="btn btn-primary confirm-receive-btn" style="padding: 0.55rem 1.35rem; font-weight: 600; display: inline-flex; align-items: center; gap: 0.4rem;">
      <i data-lucide="check-circle" style="width: 16px; height: 16px;"></i>
      <span>Confirm Receipt &amp; Update Stock</span>
    </button>
  `;
  container.appendChild(bottomBar);

  bottomBar.querySelector('.cancel-receive-btn').addEventListener('click', goBack);

  let isConfirming = false;
  const confirmBtn = bottomBar.querySelector('.confirm-receive-btn');
  confirmBtn.addEventListener('click', () => {
    if (isConfirming) return;

    let nowTotal = 0;
    Object.values(receiveMap).forEach(v => { nowTotal += (v || 0); });

    if (nowTotal <= 0) {
      toast.show({ message: 'Please enter at least 1 unit to receive.', type: 'danger' });
      return;
    }

    const rDate = mainCard.querySelector('#receive-date-input').value;
    const rNotes = mainCard.querySelector('#receive-notes-input').value.trim();

    if (!rDate) {
      toast.show({ message: 'Please select a receipt date.', type: 'danger' });
      return;
    }

    isConfirming = true;
    confirmBtn.disabled = true;
    confirmBtn.innerHTML = '<span>Receiving Stock...</span>';

    try {
      store.receivePurchaseStock(purchase.id, receiveMap, rDate, rNotes);
      toast.show({ message: `Successfully received ${nowTotal} units into Inventory!`, type: 'success' });
      if (onNavigate) onNavigate('purchases', { action: 'view', purchaseId: purchase.id });
    } catch (err) {
      console.error('Receive stock error:', err);
      toast.show({ message: `Error receiving stock: ${err.message}`, type: 'danger' });
      isConfirming = false;
      confirmBtn.disabled = false;
      confirmBtn.innerHTML = '<i data-lucide="check-circle" style="width: 16px; height: 16px;"></i> <span>Confirm Receipt &amp; Update Stock</span>';
      if (window.lucide) window.lucide.createIcons();
    }
  });

  if (window.lucide) window.lucide.createIcons();
  return container;
}

// VIEW PURCHASE DETAILS MODAL
function openViewPurchaseModal(purchase, onNavigate, onRefresh) {
  const modalOverlay = document.createElement('div');
  modalOverlay.className = 'modal-overlay';
  modalOverlay.style.cssText = 'position: fixed; inset: 0; background: var(--overlay-bg); display: flex; align-items: center; justify-content: center; z-index: 1000; padding: 1rem;';

  const modalBox = document.createElement('div');
  modalBox.className = 'modal-content card';
  modalBox.style.cssText = 'max-width: 800px; width: 100%; max-height: 90vh; overflow-y: auto; display: flex; flex-direction: column; gap: 1.25rem;';

  const status = purchase.status || 'Completed';
  const badgeVariant = getStatusBadgeVariant(status);

  const totalOrdered = purchase.totalQuantity !== undefined ? Number(purchase.totalQuantity) : (purchase.items || []).reduce((s, i) => s + Number(i.qty || i.received || 0), 0);
  const totalReceived = purchase.totalReceived !== undefined ? Number(purchase.totalReceived) : (purchase.items || []).reduce((s, i) => s + Number(i.receivedQty !== undefined ? i.receivedQty : (i.received !== undefined ? i.received : (status === 'Completed' || status === 'Received' ? (i.qty || 0) : 0))), 0);

  const receiptHistory = purchase.receiptHistory || [];

  modalBox.innerHTML = `
    <!-- Modal Header -->
    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem;">
      <div style="display: flex; align-items: center; gap: 0.75rem;">
        <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--text-primary); margin: 0;">
          Purchase Details — ${purchase.id}
        </h3>
        ${createBadge({ label: status, variant: badgeVariant }).outerHTML}
      </div>
      <button type="button" class="btn btn-ghost btn-sm close-view-btn" style="padding: 0.35rem;">
        <i data-lucide="x" style="width: 18px; height: 18px;"></i>
      </button>
    </div>

    <!-- Overview Cards -->
    <div class="kpi-grid" style="grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 0.85rem;">
      <div class="kpi-card" style="padding: 0.85rem;">
        <div style="font-size: 0.75rem; color: var(--text-secondary); font-weight: 600;">Supplier</div>
        <div style="font-size: 1rem; font-weight: 700; color: var(--text-primary); margin-top: 0.2rem;">${escapeHtml(purchase.supplier)}</div>
      </div>
      <div class="kpi-card" style="padding: 0.85rem;">
        <div style="font-size: 0.75rem; color: var(--text-secondary); font-weight: 600;">Order Date</div>
        <div style="font-size: 1rem; font-weight: 700; color: var(--text-primary); margin-top: 0.2rem;">${purchase.date}</div>
      </div>
      <div class="kpi-card" style="padding: 0.85rem;">
        <div style="font-size: 0.75rem; color: var(--text-secondary); font-weight: 600;">Units (Rec / Ord)</div>
        <div style="font-size: 1rem; font-weight: 700; color: var(--brand-primary); margin-top: 0.2rem;">${totalReceived} / ${totalOrdered}</div>
      </div>
      <div class="kpi-card" style="padding: 0.85rem;">
        <div style="font-size: 0.75rem; color: var(--text-secondary); font-weight: 600;">Total Cost</div>
        <div style="font-size: 1rem; font-weight: 700; color: var(--status-success); margin-top: 0.2rem;">₹${(purchase.totalAmount || 0).toLocaleString()}</div>
      </div>
    </div>

    <!-- Items List Table -->
    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
      <h4 style="font-size: 0.9rem; font-weight: 600; color: var(--text-primary); margin: 0;">Ordered Items Breakdown</h4>
      <div class="table-responsive" style="border: 1px solid var(--border-color); border-radius: var(--radius-sm);">
        <table class="admin-table" style="font-size: 0.825rem;">
          <thead>
            <tr>
              <th>Product</th>
              <th>Size</th>
              <th>Ordered</th>
              <th>Received</th>
              <th>Outstanding</th>
              <th>Unit Buying Price</th>
              <th>Total Cost</th>
            </tr>
          </thead>
          <tbody>
            ${(purchase.items || []).map(item => {
              const ord = item.qty !== undefined ? Number(item.qty) : (item.received !== undefined ? Number(item.received) : 0);
              const rec = item.receivedQty !== undefined ? Number(item.receivedQty) : (item.received !== undefined ? Number(item.received) : (status === 'Completed' || status === 'Received' ? ord : 0));
              const out = Math.max(0, ord - rec);
              const bPrice = item.buyingPrice || item.price || 0;
              return `
                <tr>
                  <td style="font-weight: 600; color: var(--text-primary);">${escapeHtml(item.product)}</td>
                  <td><span class="badge badge-secondary">${escapeHtml(item.size || 'Standard')}</span></td>
                  <td style="font-weight: 600;">${ord} units</td>
                  <td style="color: var(--text-primary);">${rec} units</td>
                  <td style="font-weight: 700; color: ${out > 0 ? 'var(--status-warning-text)' : 'var(--text-secondary)'};">${out} units</td>
                  <td>₹${bPrice.toLocaleString()}</td>
                  <td style="font-weight: 700; color: var(--brand-primary);">₹${((item.totalCost) || (ord * bPrice)).toLocaleString()}</td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>

    <!-- Receipt History (if any) -->
    ${receiptHistory.length > 0 ? `
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <h4 style="font-size: 0.9rem; font-weight: 600; color: var(--text-primary); margin: 0;">Receipt History Log</h4>
        <div style="background: var(--bg-secondary); border-radius: var(--radius-sm); border: 1px solid var(--border-color); padding: 0.75rem; font-size: 0.8rem; display: flex; flex-direction: column; gap: 0.5rem;">
          ${receiptHistory.map(rh => `
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-color); padding-bottom: 0.35rem;">
              <div>
                <strong>${rh.date}</strong>: Received <strong>${rh.totalReceived} units</strong>
                ${rh.notes ? ` — <em>${escapeHtml(rh.notes)}</em>` : ''}
              </div>
              <span class="badge badge-success">Stock In</span>
            </div>
          `).join('')}
        </div>
      </div>
    ` : ''}

    <!-- Modal Footer Actions -->
    <div style="display: flex; justify-content: flex-end; gap: 0.75rem; border-top: 1px solid var(--border-color); padding-top: 1rem;">
      <button type="button" class="btn btn-ghost modal-delete-btn" style="color: var(--status-danger); margin-right: auto; display: inline-flex; align-items: center; gap: 0.4rem;">
        <i data-lucide="trash-2" style="width: 16px; height: 16px;"></i>
        <span>Delete Purchase</span>
      </button>

      <button type="button" class="btn btn-secondary modal-edit-btn">Edit Purchase</button>

      ${isPurchaseWaiting(status) ? `
        <button type="button" class="btn btn-primary modal-receive-btn">
          <i data-lucide="package-check" style="width: 16px; height: 16px;"></i> Receive Purchase Stock
        </button>
      ` : ''}

      ${status === 'Partially Received' ? `
        <button type="button" class="btn btn-primary modal-receive-btn">
          <i data-lucide="package-check" style="width: 16px; height: 16px;"></i> Receive Remaining Stock
        </button>
      ` : ''}

      <button type="button" class="btn btn-secondary close-view-btn">Close</button>
    </div>
  `;

  modalOverlay.appendChild(modalBox);
  document.body.appendChild(modalOverlay);

  const closeModal = () => modalOverlay.remove();
  modalBox.querySelectorAll('.close-view-btn').forEach(b => b.addEventListener('click', closeModal));

  // Modal actions handlers
  const modalEditBtn = modalBox.querySelector('.modal-edit-btn');
  if (modalEditBtn) {
    modalEditBtn.addEventListener('click', () => {
      closeModal();
      if (onNavigate) onNavigate('purchases', { action: 'edit', purchaseId: purchase.id });
    });
  }

  const modalDeleteBtn = modalBox.querySelector('.modal-delete-btn');
  if (modalDeleteBtn) {
    modalDeleteBtn.addEventListener('click', async () => {
      const hasReceived = (purchase.totalReceived > 0) || (purchase.status === 'Received' || purchase.status === 'Partially Received' || purchase.status === 'Completed');
      let confirmMsg = `Delete purchase order ${purchase.id}?`;
      if (hasReceived) {
        confirmMsg = `Are you sure you want to delete purchase order ${purchase.id} from "${purchase.supplier || 'Supplier'}"?\n\nThis order has received stock. Deleting it will reverse the received quantities from inventory and log stock reversal movements.\n\nThis action cannot be undone.`;
      } else {
        confirmMsg = `Are you sure you want to delete purchase order ${purchase.id}?\n\nThis action cannot be undone.`;
      }
      const confirmed = await uiConfirm({ title: 'Confirm deletion', message: confirmMsg, confirmText: 'Delete', variant: 'danger' });
      if (confirmed) {
        try {
          store.deletePurchase(purchase.id);
          toast.show({ message: `Purchase ${purchase.id} deleted.`, type: 'info' });
          closeModal();
          if (onRefresh) onRefresh();
        } catch (err) {
          toast.show({ message: err.message, type: 'danger' });
        }
      }
    });
  }

  const modalReceiveBtn = modalBox.querySelector('.modal-receive-btn');
  if (modalReceiveBtn) {
    modalReceiveBtn.addEventListener('click', () => {
      closeModal();
      if (onNavigate) onNavigate('purchases', { action: 'receive', purchaseId: purchase.id });
    });
  }

  if (window.lucide) window.lucide.createIcons();
}

// ADD PURCHASE PAGE (Manual Product Entry: Waiting for Receive or Received Product)

// ==========================================
// DEDICATED PURCHASE EDIT PAGE (Separate Page)
// ==========================================

// ==========================================
// DEDICATED VIEW PURCHASE PAGE
// ==========================================
function renderViewPurchasePage(params = {}, onNavigate = null) {
  if (typeof params === 'function') {
    onNavigate = params;
    params = {};
  }
  const container = document.createElement('div');
  container.className = 'page-container';

  const purchaseId = params.purchaseId || params.id;
  const purchase = (store.data.purchases || []).find(p => p.id === purchaseId);

  // Missing purchase error state
  if (!purchase) {
    const errorCard = document.createElement('div');
    errorCard.className = 'card';
    errorCard.style.cssText = 'text-align: center; padding: 3.5rem 1.5rem; display: flex; flex-direction: column; align-items: center; gap: 1.25rem;';
    errorCard.innerHTML = `
      <div style="width: 56px; height: 56px; border-radius: 50%; background: var(--status-danger-bg); display: flex; align-items: center; justify-content: center; color: var(--status-danger);">
        <i data-lucide="alert-triangle" style="width: 28px; height: 28px;"></i>
      </div>
      <div>
        <h2 style="font-size: 1.25rem; font-weight: 700; color: var(--text-primary); margin: 0 0 0.5rem 0;">Purchase Order Not Found</h2>
        <p style="color: var(--text-secondary); margin: 0; font-size: 0.9rem; max-width: 440px;">
          The purchase order with identifier "<strong>${escapeHtml(purchaseId || 'unknown')}</strong>" could not be located or may have been deleted.
        </p>
      </div>
      <button type="button" class="btn btn-secondary back-to-list-btn" style="margin-top: 0.5rem; display: inline-flex; align-items: center; gap: 0.4rem;">
        <i data-lucide="arrow-left" style="width: 16px; height: 16px;"></i>
        <span>Return to Purchases</span>
      </button>
    `;
    errorCard.querySelector('.back-to-list-btn').addEventListener('click', () => {
      if (onNavigate) onNavigate('purchases');
    });
    container.appendChild(errorCard);
    if (window.lucide) window.lucide.createIcons();
    return container;
  }

  const status = purchase.status || PURCHASE_STATUS_WAITING;
  const badgeVariant = getStatusBadgeVariant(status);

  // Normalize items
  const items = (purchase.items || []).map(it => store.normalizePurchaseItem ? store.normalizePurchaseItem(it, status) : it);

  const totalOrdered = purchase.totalQuantity !== undefined ? Number(purchase.totalQuantity) : items.reduce((s, i) => s + (Number(i.qty) || 0), 0);
  const totalReceived = purchase.totalReceived !== undefined ? Number(purchase.totalReceived) : items.reduce((s, i) => s + (Number(i.receivedQty !== undefined ? i.receivedQty : (status === 'Completed' || status === 'Received' ? i.qty : 0)) || 0), 0);
  const totalCost = purchase.totalAmount !== undefined ? Number(purchase.totalAmount) : items.reduce((s, i) => s + ((Number(i.qty) || 0) * (Number(i.buyingPrice) || 0)), 0);
  const totalSellingEst = items.reduce((s, i) => s + ((Number(i.qty) || 0) * (Number(i.sellingPrice) || 0)), 0);

  // 1. Header (Breadcrumb, Badge, & Top Action Buttons)
  const headerDiv = document.createElement('div');
  headerDiv.style.cssText = 'display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.25rem;';

  const breadcrumbWrap = document.createElement('div');
  breadcrumbWrap.style.cssText = 'display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap;';
  breadcrumbWrap.appendChild(createBreadcrumb([
    { label: 'Purchases', target: 'purchases' },
    { label: `Purchase Details (${purchase.id})` }
  ], onNavigate));
  breadcrumbWrap.appendChild(createBadge({ label: status, variant: badgeVariant }));
  headerDiv.appendChild(breadcrumbWrap);

  const headerActions = document.createElement('div');
  headerActions.style.cssText = 'display: flex; gap: 0.5rem; align-items: center;';

  const btnBack = document.createElement('button');
  btnBack.type = 'button';
  btnBack.className = 'btn btn-secondary btn-sm back-to-list-btn';
  btnBack.innerHTML = `<i data-lucide="arrow-left" style="width: 14px; height: 14px;"></i> <span>Back</span>`;
  btnBack.addEventListener('click', () => {
    if (onNavigate) onNavigate('purchases');
  });
  headerActions.appendChild(btnBack);

  const btnEdit = document.createElement('button');
  btnEdit.type = 'button';
  btnEdit.className = 'btn btn-primary btn-sm edit-pur-page-btn';
  btnEdit.innerHTML = `<i data-lucide="pencil" style="width: 14px; height: 14px;"></i> <span>Edit Purchase</span>`;
  btnEdit.addEventListener('click', () => {
    if (onNavigate) onNavigate('purchases', { action: 'edit', purchaseId: purchase.id });
  });
  headerActions.appendChild(btnEdit);

  headerDiv.appendChild(headerActions);
  container.appendChild(headerDiv);

  // 2. Overview KPI Cards
  const kpiGrid = document.createElement('div');
  kpiGrid.className = 'kpi-grid';
  kpiGrid.style.cssText = 'display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem; margin-bottom: 1.25rem;';
  kpiGrid.innerHTML = `
    <div class="kpi-card" style="padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
      <div style="font-size: 0.75rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase;">Supplier</div>
      <div style="font-size: 1.1rem; font-weight: 700; color: var(--text-primary); margin-top: 0.25rem;">${escapeHtml(purchase.supplier || 'N/A')}</div>
    </div>
    <div class="kpi-card" style="padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
      <div style="font-size: 0.75rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase;">Order Date</div>
      <div style="font-size: 1.1rem; font-weight: 700; color: var(--text-primary); margin-top: 0.25rem;">${escapeHtml(purchase.date || '—')}</div>
    </div>
    <div class="kpi-card" style="padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
      <div style="font-size: 0.75rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase;">Units (Rec / Ord)</div>
      <div style="font-size: 1.1rem; font-weight: 700; color: var(--brand-primary); margin-top: 0.25rem;">${totalReceived} / ${totalOrdered}</div>
    </div>
    <div class="kpi-card" style="padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
      <div style="font-size: 0.75rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase;">Total Purchase Cost</div>
      <div style="font-size: 1.1rem; font-weight: 700; color: var(--status-success); margin-top: 0.25rem;">₹${Math.round(totalCost).toLocaleString()}</div>
    </div>
    <div class="kpi-card" style="padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
      <div style="font-size: 0.75rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase;">Est. Selling Value</div>
      <div style="font-size: 1.1rem; font-weight: 700; color: var(--text-primary); margin-top: 0.25rem;">₹${Math.round(totalSellingEst).toLocaleString()}</div>
    </div>
  `;
  container.appendChild(kpiGrid);

  // 3. Purchase Details Card
  const detailsCard = document.createElement('div');
  detailsCard.className = 'card';
  detailsCard.style.cssText = 'display: flex; flex-direction: column; gap: 1.25rem; margin-bottom: 1.25rem;';
  detailsCard.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem;">
      <h3 style="font-size: 1.05rem; font-weight: 700; color: var(--text-primary); margin: 0; display: flex; align-items: center; gap: 0.5rem;">
        <i data-lucide="file-text" style="width: 18px; height: 18px; color: var(--brand-primary);"></i>
        Purchase Order Information
      </h3>
      <span style="font-size: 0.8rem; color: var(--text-secondary);">PO Ref: <strong>${escapeHtml(purchase.id)}</strong></span>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; font-size: 0.875rem;">
      <div>
        <div style="color: var(--text-secondary); font-size: 0.78rem; font-weight: 600; text-transform: uppercase;">Supplier Name</div>
        <div style="font-weight: 600; color: var(--text-primary); margin-top: 0.25rem;">${escapeHtml(purchase.supplier || 'N/A')}</div>
      </div>
      <div>
        <div style="color: var(--text-secondary); font-size: 0.78rem; font-weight: 600; text-transform: uppercase;">Order Date</div>
        <div style="font-weight: 600; color: var(--text-primary); margin-top: 0.25rem;">${escapeHtml(purchase.date || '—')}</div>
      </div>
      <div>
        <div style="color: var(--text-secondary); font-size: 0.78rem; font-weight: 600; text-transform: uppercase;">Lifecycle Status</div>
        <div style="margin-top: 0.25rem;">${createBadge({ label: status, variant: badgeVariant }).outerHTML}</div>
      </div>
      <div>
        <div style="color: var(--text-secondary); font-size: 0.78rem; font-weight: 600; text-transform: uppercase;">Notes & Comments</div>
        <div style="color: var(--text-primary); margin-top: 0.25rem;">${escapeHtml(purchase.notes || 'No special notes recorded.')}</div>
      </div>
    </div>
  `;
  container.appendChild(detailsCard);

  // 4. Products Table Card
  const itemsCard = document.createElement('div');
  itemsCard.className = 'card';
  itemsCard.style.cssText = 'display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1.25rem;';
  itemsCard.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem;">
      <h3 style="font-size: 1.05rem; font-weight: 700; color: var(--text-primary); margin: 0; display: flex; align-items: center; gap: 0.5rem;">
        <i data-lucide="package" style="width: 18px; height: 18px; color: var(--brand-primary);"></i>
        Ordered Products & Variant Breakdown (${items.length} items)
      </h3>
    </div>

    <div class="table-responsive" style="border: 1px solid var(--border-color); border-radius: var(--radius-sm);">
      <table class="admin-table" style="font-size: 0.85rem;">
        <thead>
          <tr>
            <th style="width: 5%; text-align: center;">S.No</th>
            <th style="width: 25%;">Product Name</th>
            <th style="width: 12%;">SKU / Code</th>
            <th style="width: 10%; text-align: center;">Size</th>
            <th style="width: 10%; text-align: center;">Ordered</th>
            <th style="width: 10%; text-align: center;">Received</th>
            <th style="width: 10%; text-align: center;">Outstanding</th>
            <th style="width: 14%; text-align: right;">Unit Cost</th>
            <th style="width: 14%; text-align: right;">Total Cost</th>
          </tr>
        </thead>
        <tbody>
          ${items.map((it, idx) => {
            const ord = Number(it.qty) || 0;
            const rec = Number(it.receivedQty !== undefined ? it.receivedQty : (status === 'Completed' || status === 'Received' ? ord : 0));
            const out = Math.max(0, ord - rec);
            const bp = Number(it.buyingPrice) || 0;
            const lineTot = ord * bp;
            return `
              <tr>
                <td style="text-align: center; color: var(--text-secondary); font-weight: 600;">${idx + 1}</td>
                <td>
                  <div style="font-weight: 600; color: var(--text-primary);">${escapeHtml(it.product || it.productName || 'Product')}</div>
                  <div style="font-size: 0.75rem; color: var(--text-secondary);">${escapeHtml(it.brand || '')} • ${escapeHtml(it.category || '')}</div>
                </td>
                <td style="font-family: monospace; font-size: 0.8rem; color: var(--text-secondary);">${escapeHtml(it.sku || '—')}</td>
                <td style="text-align: center;"><span class="badge badge-secondary">${escapeHtml(it.size || 'Standard')}</span></td>
                <td style="text-align: center; font-weight: 600; color: var(--text-primary);">${ord}</td>
                <td style="text-align: center; font-weight: 600; color: var(--status-success);">${rec}</td>
                <td style="text-align: center; font-weight: 700; color: ${out > 0 ? 'var(--status-warning-text)' : 'var(--text-secondary)'};">${out}</td>
                <td style="text-align: right; color: var(--text-primary);">₹${bp.toLocaleString()}</td>
                <td style="text-align: right; font-weight: 700; color: var(--brand-primary);">₹${Math.round(lineTot).toLocaleString()}</td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    </div>
  `;
  container.appendChild(itemsCard);

  // 5. Stock Movements / Receipt History (if any)
  const relMovements = (store.data.stockMovements || []).filter(m => m.reference === purchase.id);
  if (relMovements.length > 0) {
    const historyCard = document.createElement('div');
    historyCard.className = 'card';
    historyCard.style.cssText = 'display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1.25rem;';
    historyCard.innerHTML = `
      <div style="border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem;">
        <h3 style="font-size: 1.05rem; font-weight: 700; color: var(--text-primary); margin: 0; display: flex; align-items: center; gap: 0.5rem;">
          <i data-lucide="history" style="width: 18px; height: 18px; color: var(--brand-primary);"></i>
          Stock Movement & Audit History (${relMovements.length} records)
        </h3>
      </div>
      <div class="table-responsive" style="border: 1px solid var(--border-color); border-radius: var(--radius-sm);">
        <table class="admin-table" style="font-size: 0.825rem;">
          <thead>
            <tr>
              <th>Date & Time</th>
              <th>Type</th>
              <th>Product & Size</th>
              <th>Quantity</th>
              <th>Notes / Reason</th>
            </tr>
          </thead>
          <tbody>
            ${relMovements.map(m => `
              <tr>
                <td style="color: var(--text-secondary);">${escapeHtml(m.date || '')}</td>
                <td><span class="badge ${m.quantity > 0 ? 'badge-success' : 'badge-warning'}">${escapeHtml(m.type || 'Stock Movement')}</span></td>
                <td style="font-weight: 600; color: var(--text-primary);">${escapeHtml(m.product || '')} (${escapeHtml(m.size || 'Standard')})</td>
                <td style="font-weight: 700; color: ${m.quantity > 0 ? 'var(--status-success)' : 'var(--status-danger)'};">${m.quantity > 0 ? `+${m.quantity}` : m.quantity} units</td>
                <td style="color: var(--text-secondary);">${escapeHtml(m.notes || '—')}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
    container.appendChild(historyCard);
  }

  // 6. Bottom Sticky Actions Bar
  const bottomBar = document.createElement('div');
  bottomBar.className = 'card';
  bottomBar.style.cssText = 'display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; padding: 1rem 1.25rem;';
  bottomBar.innerHTML = `
    <button type="button" class="btn btn-secondary back-to-list-bottom-btn" style="display: inline-flex; align-items: center; gap: 0.4rem; font-weight: 600;">
      <i data-lucide="arrow-left" style="width: 16px; height: 16px;"></i>
      <span>Back to Purchases</span>
    </button>
    <div style="display: flex; gap: 0.75rem; align-items: center; flex-wrap: wrap;">
      ${isPurchaseReceivable(status) ? `
        <button type="button" class="btn btn-primary receive-pur-bottom-btn" style="display: inline-flex; align-items: center; gap: 0.4rem;">
          <i data-lucide="package-check" style="width: 16px; height: 16px;"></i>
          <span>${status === 'Partially Received' ? 'Receive Remaining Stock' : 'Receive Stock'}</span>
        </button>
      ` : ''}
      <button type="button" class="btn btn-primary edit-pur-bottom-btn" style="display: inline-flex; align-items: center; gap: 0.4rem;">
        <i data-lucide="pencil" style="width: 16px; height: 16px;"></i>
        <span>Edit Purchase</span>
      </button>
      <button type="button" class="btn btn-ghost delete-pur-bottom-btn" style="color: var(--status-danger); display: inline-flex; align-items: center; gap: 0.4rem;">
        <i data-lucide="trash-2" style="width: 16px; height: 16px;"></i>
        <span>Delete Purchase</span>
      </button>
    </div>
  `;

  bottomBar.querySelector('.back-to-list-bottom-btn').addEventListener('click', () => {
    if (onNavigate) onNavigate('purchases');
  });

  const editBottomBtn = bottomBar.querySelector('.edit-pur-bottom-btn');
  if (editBottomBtn) {
    editBottomBtn.addEventListener('click', () => {
      if (onNavigate) onNavigate('purchases', { action: 'edit', purchaseId: purchase.id });
    });
  }

  const recvBtn = bottomBar.querySelector('.receive-pur-bottom-btn');
  if (recvBtn) {
    recvBtn.addEventListener('click', () => {
      // returnTo=view so Cancel comes back to this detail page, not the list.
      if (onNavigate) onNavigate('purchases', { action: 'receive', purchaseId: purchase.id, returnTo: 'view' });
    });
  }

  const deleteBottomBtn = bottomBar.querySelector('.delete-pur-bottom-btn');
  if (deleteBottomBtn) deleteBottomBtn.addEventListener('click', async () => {
    const itemsList = Array.isArray(purchase.items) ? purchase.items : [];
    const totalReceivedAll = itemsList.reduce((s, i) => s + Math.max(0, Number(i.receivedQty !== undefined ? i.receivedQty : (i.received || 0))), 0);
    const hasReceived = (totalReceivedAll > 0) || (status === 'Received' || status === 'Partially Received' || status === 'Completed');

    if (hasReceived) {
      let shortageIssue = null;
      for (const item of itemsList) {
        const recQty = Math.max(0, Number(item.receivedQty !== undefined ? item.receivedQty : (item.received !== undefined ? item.received : (status === 'Completed' || status === 'Received' ? (item.qty || 0) : 0))));
        if (recQty > 0) {
          const prod = (store.data.products || []).find(pr =>
            pr.id === item.productId ||
            (pr.name && item.product && pr.name.trim().toLowerCase() === item.product.trim().toLowerCase()) ||
            (pr.name && item.productName && pr.name.trim().toLowerCase() === item.productName.trim().toLowerCase())
          );
          if (prod) {
            let variant = null;
            let extractedSize = item.size || '';
            if (!extractedSize && item.sku) {
              const parts = String(item.sku).split('-');
              if (parts.length > 1) extractedSize = parts[parts.length - 1];
            }
            const targetSize = (extractedSize || 'Standard').trim().toUpperCase();
            if (item.sku) {
              variant = (prod.variants || []).find(v => v.sku && v.sku.toUpperCase() === item.sku.toUpperCase());
            }
            if (!variant) {
              variant = (prod.variants || []).find(v => (v.size || 'Standard').trim().toUpperCase() === targetSize);
            }
            if (!variant && Array.isArray(prod.variants) && prod.variants.length > 0) {
              variant = prod.variants[0];
            }
            const currentStock = variant ? Number(variant.stock || 0) : Number(prod.totalStock || prod.stock || 0);
            if (currentStock < recQty) {
              shortageIssue = {
                productName: prod.name,
                size: variant ? variant.size : 'Standard',
                currentStock,
                receivedQty: recQty
              };
              break;
            }
          }
        }
      }

      if (shortageIssue) {
        await uiConfirm({
          title: 'Cannot Delete Received Order',
          message: `Purchase order "${purchase.id}" cannot be deleted because product "${shortageIssue.productName}" (${shortageIssue.size}) only has ${shortageIssue.currentStock} units in stock, but this purchase received ${shortageIssue.receivedQty} units. Deleting it would leave inventory quantities negative or incorrect because units have already been sold.`,
          confirmText: 'OK',
          variant: 'secondary',
          singleButton: true
        });
        return;
      }
    }

    let confirmMsg = `Delete purchase order ${purchase.id}?`;
    if (hasReceived) {
      confirmMsg = `Are you sure you want to delete purchase order ${purchase.id} from "${purchase.supplier || 'Supplier'}"?

This order has received stock. Deleting it will reverse the received quantities from inventory and log stock reversal movements.

This action cannot be undone.`;
    } else {
      confirmMsg = `Are you sure you want to delete purchase order ${purchase.id}?

This action cannot be undone.`;
    }
    const confirmed = await uiConfirm({ title: 'Confirm deletion', message: confirmMsg, confirmText: 'Delete', variant: 'danger' });
    if (confirmed) {
      try {
        store.deletePurchase(purchase.id);
        toast.show({ message: `Purchase order ${purchase.id} deleted.`, type: 'info' });
        if (onNavigate) onNavigate('purchases');
      } catch (err) {
        toast.show({ message: err.message, type: 'danger' });
      }
    }
  });

  container.appendChild(bottomBar);

  if (window.lucide) window.lucide.createIcons();
  return container;
}

function renderEditPurchasePage(params = {}, onNavigate = null) {
  if (typeof params === 'function') {
    onNavigate = params;
    params = {};
  }
  const container = document.createElement('div');
  container.className = 'page-container';

  const purchaseId = params.purchaseId || params.id;
  const purchase = (store.data.purchases || []).find(p => p.id === purchaseId);

  // Missing purchase error state
  if (!purchase) {
    const errorCard = document.createElement('div');
    errorCard.className = 'card';
    errorCard.style.cssText = 'text-align: center; padding: 3.5rem 1.5rem; display: flex; flex-direction: column; align-items: center; gap: 1.25rem;';
    errorCard.innerHTML = `
      <div style="width: 56px; height: 56px; border-radius: 50%; background: var(--status-danger-bg); display: flex; align-items: center; justify-content: center; color: var(--status-danger);">
        <i data-lucide="alert-triangle" style="width: 28px; height: 28px;"></i>
      </div>
      <div>
        <h2 style="font-size: 1.25rem; font-weight: 700; color: var(--text-primary); margin: 0 0 0.5rem 0;">Purchase Order Not Found</h2>
        <p style="color: var(--text-secondary); margin: 0; font-size: 0.9rem; max-width: 440px;">
          The purchase order with identifier "<strong>${escapeHtml(purchaseId || 'unknown')}</strong>" could not be located or may have been deleted.
        </p>
      </div>
      <button type="button" class="btn btn-secondary back-to-list-btn" style="margin-top: 0.5rem; display: inline-flex; align-items: center; gap: 0.4rem;">
        <i data-lucide="arrow-left" style="width: 16px; height: 16px;"></i>
        <span>Return to Purchases</span>
      </button>
    `;
    errorCard.querySelector('.back-to-list-btn').addEventListener('click', () => {
      if (onNavigate) onNavigate('purchases');
    });
    container.appendChild(errorCard);
    if (window.lucide) window.lucide.createIcons();
    return container;
  }


  let hasUnsavedChanges = false;
  const markChanged = () => { hasUnsavedChanges = true; };

  const status = purchase.status || PURCHASE_STATUS_WAITING;
  const badgeVariant = getStatusBadgeVariant(status);

  // 1. Header (Breadcrumb & Status Badge)
  const headerDiv = document.createElement('div');
  headerDiv.style.cssText = 'display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.25rem;';
  
  const breadcrumbWrap = document.createElement('div');
  breadcrumbWrap.style.cssText = 'display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap;';
  breadcrumbWrap.appendChild(createBreadcrumb([
    { label: 'Purchases', target: 'purchases' },
    { label: `Edit Purchase (${purchase.id})` }
  ], onNavigate));
  breadcrumbWrap.appendChild(createBadge({ label: status, variant: badgeVariant }));
  headerDiv.appendChild(breadcrumbWrap);
  container.appendChild(headerDiv);

  // Stock notice for Received / Partially Received orders
  const isReceivedStatus = status === 'Received' || status === 'Completed' || status === 'Partially Received';
  if (isReceivedStatus) {
    const noticeDiv = document.createElement('div');
    noticeDiv.style.cssText = 'background: var(--status-info-bg); border: 1px solid var(--status-info-border); border-radius: var(--radius-md); padding: 0.85rem 1.15rem; margin-bottom: 1.25rem; display: flex; align-items: flex-start; gap: 0.75rem;';
    noticeDiv.innerHTML = `
      <i data-lucide="info" style="width: 20px; height: 20px; color: var(--brand-primary); flex-shrink: 0; margin-top: 2px;"></i>
      <div style="font-size: 0.85rem; color: var(--text-primary); line-height: 1.5;">
        <strong>Stock Reconciliation Notice:</strong> This purchase order has confirmed received stock in inventory. When saving changes, physical inventory stock will be reconciled automatically against updated quantities. Any reductions will be verified against current physical stock to prevent negative inventory.
      </div>
    `;
    container.appendChild(noticeDiv);
  }

  // 2. Main Form Card
  const mainCard = document.createElement('div');
  mainCard.className = 'card';
  mainCard.style.cssText = 'display: flex; flex-direction: column; gap: 1.5rem; width: 100%;';

  const suppliersList = store.data.suppliers || [];
  const categoriesList = store.getCategories();
  const brandsList = store.getBrands();
  const standardSizes = (store.getSizes && store.getSizes().length > 0)
    ? store.getSizes()
    : ['S', 'M', 'L', 'XL', 'Free Size', 'Standard'];
  const productsList = store.data.products || [];

  // Initialize items array from purchase using authoritative normalization
  let editItems = [];
  if (Array.isArray(purchase.items) && purchase.items.length > 0) {
    editItems = purchase.items.map((it, idx) => {
      const norm = store.normalizePurchaseItem ? store.normalizePurchaseItem(it, purchase.status) : it;
      return {
        id: 'pitem_' + Date.now() + '_' + idx,
        productId: norm.productId || it.productId || '',
        productName: norm.product || norm.productName || it.product || it.productName || '',
        brand: norm.brand || it.brand || '',
        category: norm.category || it.category || '',
        size: norm.size || it.size || 'Standard',
        qty: norm.qty !== undefined ? norm.qty : (norm.received !== undefined ? norm.received : 1),
        buyingPrice: norm.buyingPrice !== undefined ? norm.buyingPrice : (it.price || 0),
        sellingPrice: norm.sellingPrice !== undefined ? norm.sellingPrice : 0,
        receivedQty: norm.receivedQty !== undefined ? norm.receivedQty : (isReceivedStatus ? (norm.qty || 0) : 0)
      };
    });
  }

  if (editItems.length === 0) {
    editItems.push({
      id: 'pitem_' + Date.now() + '_0',
      productId: '',
      productName: '',
      brand: brandsList[0] || 'ClassicFit',
      category: categoriesList[0] || 'Shirts',
      size: standardSizes[0] || 'M',
      qty: 1,
      buyingPrice: 0,
      sellingPrice: 0,
      receivedQty: 0
    });
  }

  mainCard.innerHTML = `
    <datalist id="edit-pur-suppliers-list">
      ${suppliersList.map(s => `<option value="${escapeHtml(s.name)}">`).join('')}
    </datalist>
    <datalist id="edit-pur-products-list">
      ${productsList.map(p => `<option value="${escapeHtml(p.name)}">`).join('')}
    </datalist>
    <datalist id="edit-pur-brands-list">
      ${brandsList.map(b => `<option value="${escapeHtml(b)}">`).join('')}
    </datalist>

    <!-- SECTION A: PURCHASE DETAILS -->
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <h3 style="font-size: 1.05rem; font-weight: 600; margin: 0; color: var(--text-primary); border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
        <i data-lucide="file-text" style="width: 18px; height: 18px; color: var(--brand-primary);"></i>
        Purchase Order Information
      </h3>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem;">
        <div class="form-group">
          <label class="form-label" style="font-weight: 600;">Supplier <span style="color: var(--status-danger);">*</span></label>
          <input type="text" id="edit-pur-supplier" class="form-input" list="edit-pur-suppliers-list" value="${escapeHtml(purchase.supplier || '')}" placeholder="Select or enter supplier">
        </div>

        <div class="form-group">
          <label class="form-label" style="font-weight: 600;">Purchase Date <span style="color: var(--status-danger);">*</span></label>
          <input type="date" id="edit-pur-date" class="form-input" value="${escapeHtml(purchase.date || new Date().toISOString().split('T')[0])}">
        </div>

        <div class="form-group">
          <label class="form-label" style="font-weight: 600;">Order Status</label>
          <input type="text" class="form-input" value="${escapeHtml(status)}" disabled style="background: var(--bg-secondary); cursor: not-allowed; opacity: 0.85;">
        </div>
      </div>

      <div class="form-group">
        <label class="form-label" style="font-weight: 600;">Notes & Reference</label>
        <textarea id="edit-pur-notes" class="form-input" rows="2" placeholder="Optional purchase notes, shipping terms, invoice number...">${escapeHtml(purchase.notes || '')}</textarea>
      </div>
    </div>

    <!-- SECTION B: PRODUCT & SIZE-WISE ITEMS -->
    <div style="display: flex; flex-direction: column; gap: 0.85rem;">
      <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
        <div>
          <h3 style="font-size: 1.05rem; font-weight: 600; margin: 0; color: var(--text-primary); display: flex; align-items: center; gap: 0.5rem;">
            <i data-lucide="package" style="width: 18px; height: 18px; color: var(--brand-primary);"></i>
            Purchased Products & Sizes
          </h3>
          <p style="font-size: 0.8rem; color: var(--text-secondary); margin: 0.2rem 0 0 0;">
            Update product details, ordered quantities, buying prices, and selling prices.
          </p>
        </div>
      </div>

      <div id="edit-pur-items-container" style="display: flex; flex-direction: column; gap: 0.75rem;"></div>

      <div style="display: flex; justify-content: flex-start; padding-top: 0.5rem;">
        <button type="button" id="btn-edit-pur-add-item" class="btn btn-secondary btn-sm" style="display: inline-flex; align-items: center; gap: 0.35rem; font-weight: 600;">
          <i data-lucide="plus" style="width: 14px; height: 14px;"></i>
          <span>Add Another Product Item</span>
        </button>
      </div>
    </div>

    <!-- SECTION C: FINANCIAL SUMMARY -->
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem; background: var(--bg-secondary); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
      <div>
        <div style="font-size: 0.75rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase;">Total Units</div>
        <div id="edit-pur-sum-units" style="font-size: 1.25rem; font-weight: 700; color: var(--text-primary); margin-top: 0.25rem;">0 units</div>
      </div>
      <div>
        <div style="font-size: 0.75rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase;">Total Purchase Cost</div>
        <div id="edit-pur-sum-cost" style="font-size: 1.25rem; font-weight: 700; color: var(--text-primary); margin-top: 0.25rem;">₹0</div>
      </div>
      <div>
        <div style="font-size: 0.75rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase;">Est. Selling Value</div>
        <div id="edit-pur-sum-selling" style="font-size: 1.25rem; font-weight: 700; color: var(--brand-primary); margin-top: 0.25rem;">₹0</div>
      </div>
      <div>
        <div style="font-size: 0.75rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase;">Est. Gross Profit</div>
        <div id="edit-pur-sum-profit" style="font-size: 1.25rem; font-weight: 700; color: var(--status-success); margin-top: 0.25rem;">₹0</div>
      </div>
    </div>

    <!-- SECTION D: STICKY ACTIONS BAR -->
    <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-color); padding-top: 1.25rem; flex-wrap: wrap; gap: 0.75rem;">
      <button type="button" id="btn-edit-pur-cancel" class="btn btn-secondary" style="font-weight: 600;">
        Back / Cancel
      </button>

      <button type="button" id="btn-edit-pur-save" class="btn btn-primary" style="display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.65rem 1.5rem; font-weight: 600;">
        <i data-lucide="save" style="width: 16px; height: 16px;"></i>
        <span>Save Changes</span>
      </button>
    </div>
  `;

  container.appendChild(mainCard);

  const itemsContainer = mainCard.querySelector('#edit-pur-items-container');

  function updateSummary() {
    let totalUnits = 0;
    let totalCost = 0;
    let totalSelling = 0;

    editItems.forEach(it => {
      const q = parseInt(it.qty, 10) || 0;
      const bp = parseFloat(it.buyingPrice) || 0;
      const sp = parseFloat(it.sellingPrice) || 0;
      totalUnits += q;
      totalCost += (q * bp);
      totalSelling += (q * sp);
    });

    const grossProfit = totalSelling - totalCost;

    mainCard.querySelector('#edit-pur-sum-units').textContent = `${totalUnits} units`;
    mainCard.querySelector('#edit-pur-sum-cost').textContent = `₹${Math.round(totalCost).toLocaleString()}`;
    mainCard.querySelector('#edit-pur-sum-selling').textContent = `₹${Math.round(totalSelling).toLocaleString()}`;
    mainCard.querySelector('#edit-pur-sum-profit').textContent = `₹${Math.round(grossProfit).toLocaleString()}`;
  }

  function renderItemsList() {
    itemsContainer.innerHTML = '';

    editItems.forEach((it, idx) => {
      const itemRow = document.createElement('div');
      itemRow.className = 'card';
      itemRow.style.cssText = 'padding: 1rem; background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-md); display: flex; flex-direction: column; gap: 0.75rem;';

      const lineTotal = (parseInt(it.qty, 10) || 0) * (parseFloat(it.buyingPrice) || 0);

      itemRow.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem;">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <span style="font-weight: 700; color: var(--brand-primary); font-size: 0.85rem;">#${idx + 1}</span>
            <span style="font-weight: 600; color: var(--text-primary); font-size: 0.9rem;">${escapeHtml(it.productName || 'New Product Item')}</span>
            ${isReceivedStatus ? `<span class="badge badge-success" style="font-size: 0.7rem; padding: 0.1rem 0.4rem;">${it.receivedQty || 0} units received</span>` : ''}
          </div>

          ${editItems.length > 1 ? `
            <button type="button" class="btn btn-ghost btn-sm remove-item-btn" style="color: var(--status-danger); padding: 0.2rem 0.5rem;" title="Remove Item">
              <i data-lucide="trash-2" style="width: 15px; height: 15px;"></i>
            </button>
          ` : ''}
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 0.75rem;">
          <div class="form-group">
            <label class="form-label" style="font-size: 0.8rem; font-weight: 600;">Product Name <span style="color: var(--status-danger);">*</span></label>
            <input type="text" class="form-input item-name-input" list="edit-pur-products-list" value="${escapeHtml(it.productName || '')}" placeholder="e.g. Classic Oxford Shirt">
          </div>

          <div class="form-group">
            <label class="form-label" style="font-size: 0.8rem; font-weight: 600;">Category</label>
            <select class="form-select item-cat-select">
              ${categoriesList.map(cat => `<option value="${escapeHtml(cat)}" ${cat === it.category ? 'selected' : ''}>${escapeHtml(cat)}</option>`).join('')}
            </select>
          </div>

          <div class="form-group">
            <label class="form-label" style="font-size: 0.8rem; font-weight: 600;">Brand</label>
            <select class="form-select item-brand-select">
              ${brandsList.map(b => `<option value="${escapeHtml(b)}" ${b === it.brand ? 'selected' : ''}>${escapeHtml(b)}</option>`).join('')}
            </select>
          </div>

          <div class="form-group">
            <label class="form-label" style="font-size: 0.8rem; font-weight: 600;">Size</label>
            <select class="form-select item-size-select">
              ${standardSizes.map(sz => `<option value="${escapeHtml(sz)}" ${sz === it.size ? 'selected' : ''}>${escapeHtml(sz)}</option>`).join('')}
            </select>
          </div>

          <div class="form-group">
            <label class="form-label" style="font-size: 0.8rem; font-weight: 600;">Quantity <span style="color: var(--status-danger);">*</span></label>
            <input type="number" class="form-input item-qty-input" min="1" step="1" value="${it.qty !== undefined ? it.qty : 1}">
          </div>

          <div class="form-group">
            <label class="form-label" style="font-size: 0.8rem; font-weight: 600;">Buying Price (₹) <span style="color: var(--status-danger);">*</span></label>
            <input type="number" class="form-input item-bp-input" min="0" step="any" value="${it.buyingPrice !== undefined ? it.buyingPrice : 0}">
          </div>

          <div class="form-group">
            <label class="form-label" style="font-size: 0.8rem; font-weight: 600;">Selling Price (₹)</label>
            <input type="number" class="form-input item-sp-input" min="0" step="any" value="${it.sellingPrice !== undefined ? it.sellingPrice : 0}">
          </div>

          <div class="form-group">
            <label class="form-label" style="font-size: 0.8rem; font-weight: 600;">Line Total</label>
            <input type="text" class="form-input item-total-input" value="₹${Math.round(lineTotal).toLocaleString()}" disabled style="background: var(--bg-surface); font-weight: 700; color: var(--text-primary);">
          </div>
        </div>
      `;

      // Inputs event bindings
      const nameInp = itemRow.querySelector('.item-name-input');
      nameInp.addEventListener('input', (e) => {
        const val = e.target.value;
        it.productName = val;
        const matched = productsList.find(p => p.name && p.name.trim().toLowerCase() === val.trim().toLowerCase());
        if (matched) {
          it.productId = matched.id;
          if (matched.category) {
            it.category = matched.category;
            itemRow.querySelector('.item-cat-select').value = matched.category;
          }
          if (matched.brand) {
            it.brand = matched.brand;
            itemRow.querySelector('.item-brand-select').value = matched.brand;
          }
          if (matched.purchasePrice && (!it.buyingPrice || it.buyingPrice === 0)) {
            it.buyingPrice = matched.purchasePrice;
            itemRow.querySelector('.item-bp-input').value = matched.purchasePrice;
          }
          if (matched.sellingPrice && (!it.sellingPrice || it.sellingPrice === 0)) {
            it.sellingPrice = matched.sellingPrice;
            itemRow.querySelector('.item-sp-input').value = matched.sellingPrice;
          }
        }
        markChanged();
        recomputeRow();
      });

      const catSelect = itemRow.querySelector('.item-cat-select');
      catSelect.addEventListener('change', (e) => {
        it.category = e.target.value;
        markChanged();
      });

      const brandSelect = itemRow.querySelector('.item-brand-select');
      brandSelect.addEventListener('change', (e) => {
        it.brand = e.target.value;
        markChanged();
      });

      const sizeSelect = itemRow.querySelector('.item-size-select');
      sizeSelect.addEventListener('change', (e) => {
        it.size = e.target.value;
        markChanged();
      });

      const qtyInp = itemRow.querySelector('.item-qty-input');
      const bpInp = itemRow.querySelector('.item-bp-input');
      const spInp = itemRow.querySelector('.item-sp-input');
      const totInp = itemRow.querySelector('.item-total-input');

      const recomputeRow = () => {
        it.qty = parseInt(qtyInp.value, 10) || 0;
        it.buyingPrice = parseFloat(bpInp.value) || 0;
        it.sellingPrice = parseFloat(spInp.value) || 0;
        const curLine = (it.qty * it.buyingPrice);
        totInp.value = `₹${Math.round(curLine).toLocaleString()}`;
        markChanged();
        updateSummary();
      };

      qtyInp.addEventListener('input', recomputeRow);
      bpInp.addEventListener('input', recomputeRow);
      spInp.addEventListener('input', recomputeRow);

      const removeBtn = itemRow.querySelector('.remove-item-btn');
      if (removeBtn) {
        removeBtn.addEventListener('click', () => {
          editItems.splice(idx, 1);
          markChanged();
          renderItemsList();
          updateSummary();
        });
      }

      itemsContainer.appendChild(itemRow);
    });

    if (window.lucide) window.lucide.createIcons();
  }

  mainCard.querySelector('#btn-edit-pur-add-item').addEventListener('click', () => {
    editItems.push({
      id: 'pitem_' + Date.now() + '_' + editItems.length,
      productId: '',
      productName: '',
      brand: brandsList[0] || 'ClassicFit',
      category: categoriesList[0] || 'Shirts',
      size: standardSizes[0] || 'M',
      qty: 1,
      buyingPrice: 0,
      sellingPrice: 0,
      receivedQty: 0
    });
    markChanged();
    renderItemsList();
    updateSummary();
  });

  mainCard.querySelectorAll('#edit-pur-supplier, #edit-pur-date, #edit-pur-notes').forEach(el => {
    el.addEventListener('input', markChanged);
  });

  mainCard.querySelector('#btn-edit-pur-cancel').addEventListener('click', async () => {
    if (hasUnsavedChanges) {
      const leave = await uiConfirm({ title: 'Discard unsaved changes?', message: 'You have unsaved changes. Are you sure you want to discard them and return to Purchases?', confirmText: 'Discard changes', variant: 'danger' });
      if (!leave) return;
    }
    if (onNavigate) onNavigate('purchases');
  });

  mainCard.querySelector('#btn-edit-pur-save').addEventListener('click', () => {
    const supplier = mainCard.querySelector('#edit-pur-supplier').value.trim();
    const date = mainCard.querySelector('#edit-pur-date').value;
    const notes = mainCard.querySelector('#edit-pur-notes').value.trim();

    if (!supplier) {
      toast.show({ message: 'Supplier is required.', type: 'danger' });
      mainCard.querySelector('#edit-pur-supplier').focus();
      return;
    }

    if (editItems.length === 0) {
      toast.show({ message: 'Purchase order must have at least one product item.', type: 'danger' });
      return;
    }

    for (let i = 0; i < editItems.length; i++) {
      const it = editItems[i];
      if (!it.productName || !it.productName.trim()) {
        toast.show({ message: `Please enter a product name for item #${i + 1}.`, type: 'danger' });
        return;
      }
      if (isNaN(it.qty) || it.qty <= 0) {
        toast.show({ message: `Quantity must be greater than 0 for item #${i + 1}.`, type: 'danger' });
        return;
      }
      if (isNaN(it.buyingPrice) || it.buyingPrice < 0) {
        toast.show({ message: `Buying price cannot be negative for item #${i + 1}.`, type: 'danger' });
        return;
      }
    }

    try {
      store.updatePurchase(purchase.id, {
        supplier,
        date,
        notes,
        items: editItems.map(it => ({
          productId: it.productId || '',
          product: it.productName || it.product || '',
          productName: it.productName || it.product || '',
          category: it.category || 'Shirts',
          brand: it.brand || 'ClassicFit',
          size: it.size || 'Standard',
          qty: Number(it.qty) || 0,
          buyingPrice: Number(it.buyingPrice) || 0,
          sellingPrice: Number(it.sellingPrice) || 0,
          receivedQty: Number(it.receivedQty !== undefined ? it.receivedQty : (isReceivedStatus ? (it.qty || 0) : 0))
        }))
      });
      hasUnsavedChanges = false;
      toast.show({ message: `Purchase order ${purchase.id} updated successfully!`, type: 'success' });
      if (onNavigate) onNavigate('purchases');
    } catch (err) {
      toast.show({ message: err.message || 'Error updating purchase.', type: 'danger' });
    }
  });

  renderItemsList();
  updateSummary();

  if (window.lucide) window.lucide.createIcons();
  return container;
}

function renderAddPurchasePage(params = {}, onNavigate = null) {
  if (typeof params === 'function') {
    onNavigate = params;
    params = {};
  }
  const container = document.createElement('div');
  container.className = 'page-container';

  // Check if editing an existing draft
  const isEditing = params && params.action === 'edit' && (params.purchaseId || params.id);
  const editingPurchase = isEditing
    ? (store.data.purchases || []).find(p => p.id === (params.purchaseId || params.id))
    : null;

  // 1. Header
  const headerDiv = document.createElement('div');
  headerDiv.style.cssText = 'display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;';
  headerDiv.appendChild(createBreadcrumb([
    { label: 'Purchases', target: 'purchases' },
    { label: isEditing ? `Edit Purchase (${editingPurchase ? editingPurchase.id : 'Purchase'})` : 'Add Purchase' }
  ], onNavigate));
  container.appendChild(headerDiv);

  const mainCard = document.createElement('div');
  mainCard.className = 'card';
  mainCard.style.cssText = 'display: flex; flex-direction: column; gap: 1.5rem; width: 100%;';

  const supplierVal = editingPurchase
    ? (editingPurchase.supplier || '')
    : '';

  // Purchase date is required, so a new order defaults to today rather than
  // leaving Save disabled with no visible reason.
  const todayISO = new Date().toISOString().slice(0, 10);
  const dateVal = editingPurchase
    ? (editingPurchase.date || '')
    : todayISO;

  const notesVal = editingPurchase
    ? (editingPurchase.notes || '')
    : '';

  const standardSizes = (store.getSizes && store.getSizes().length > 0)
    ? store.getSizes()
    : ['S', 'M', 'L', 'XL', 'Free Size', 'Standard'];

  const categoriesList = store.getCategories();
  const brandsList = store.getBrands();

  const productsList = store.data.products || [];

  let productsData = [];
  if (editingPurchase && Array.isArray(editingPurchase.items)) {
    const prodMap = new Map();
    editingPurchase.items.forEach(it => {
      const pName = it.product || it.productName || '';
      const pCat = it.category || '';
      const pBrand = it.brand || '';
      const pId = it.productId || '';
      const key = pId || `${pName.trim().toLowerCase()}:::${pBrand.trim().toLowerCase()}:::${pCat.trim().toLowerCase()}`;
      if (!prodMap.has(key)) {
        prodMap.set(key, {
          id: 'prod_' + Math.random().toString(36).substr(2, 9),
          productName: pName,
          category: pCat,
          brand: pBrand,
          productId: pId,
          isCustomCategory: (pCat && !categoriesList.includes(pCat)),
          isExpanded: prodMap.size === 0,
          nameError: null,
          sizes: []
        });
      }
      const isCustomSize = Boolean(it.size && !standardSizes.includes(it.size));
      prodMap.get(key).sizes.push({
        id: 'size_' + Math.random().toString(36).substr(2, 9),
        size: it.size || '',
        qty: it.qty !== undefined ? it.qty : '',
        buyingPrice: it.buyingPrice !== undefined ? it.buyingPrice : '',
        sellingPrice: it.sellingPrice !== undefined ? it.sellingPrice : '',
        isCustomSize: isCustomSize
      });
    });
    productsData = Array.from(prodMap.values());
  }

  // When creating a new purchase (or draft has no items), display exactly ONE empty product entry section by default
  if (productsData.length === 0) {
    productsData.push({
      id: 'prod_' + Date.now() + '_1',
      productName: '',
      category: '',
      brand: '',
      productId: '',
      isCustomCategory: false,
      isExpanded: true,
      nameError: null,
      sizes: [
        {
          id: 'size_' + Date.now() + '_1',
          size: '',
          qty: '',
          buyingPrice: '',
          sellingPrice: '',
          isCustomSize: false
        }
      ]
    });
  }

  let isSubmitting = false;

  mainCard.innerHTML = `
    <!-- Product & Brand Auto-suggest Datalists -->
    <datalist id="pur-products-list">
      ${productsList.map(p => `<option value="${escapeHtml(p.name)}">`).join('')}
    </datalist>
    <datalist id="pur-brands-list">
      ${brandsList.map(b => `<option value="${b}">`).join('')}
    </datalist>

    <!-- SECTION A: PURCHASE INFORMATION -->
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <h3 style="font-size: 1.05rem; font-weight: 600; margin: 0; color: var(--text-primary); border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
        <i data-lucide="file-text" style="width: 18px; height: 18px; color: var(--brand-primary);"></i>
        Purchase Order Information
      </h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem;">
        <div class="form-group">
          <label class="form-label" style="font-weight: 600; font-size: 0.825rem;">Supplier <span style="color: var(--status-danger);">*</span></label>
          <input type="text" id="pur-supplier" class="form-input" placeholder="e.g. Apex Apparel Ltd" value="${supplierVal}">
          <div id="pur-supplier-error" class="field-error" style="display: none;"></div>
        </div>
        <div class="form-group">
          <label class="form-label" style="font-weight: 600; font-size: 0.825rem;">Purchase Date <span style="color: var(--status-danger);">*</span></label>
          <input type="date" id="pur-date" class="form-input" value="${dateVal}">
          <div id="pur-date-error" class="field-error" style="display: none;"></div>
        </div>
        <div class="form-group" style="grid-column: 1 / -1;">
          <label class="form-label" style="font-weight: 600; font-size: 0.825rem;">Notes (Optional)</label>
          <input type="text" id="pur-notes" class="form-input" placeholder="Invoice # or purchase remarks" value="${notesVal}">
        </div>
      </div>
    </div>

    <!-- SECTION B: PRODUCT & SIZE-WISE ITEMS (Grouped by Product) -->
    <div style="display: flex; flex-direction: column; gap: 0.85rem;">
      <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
        <div>
          <h3 style="font-size: 1.05rem; font-weight: 600; margin: 0; color: var(--text-primary); display: flex; align-items: center; gap: 0.5rem;">
            <i data-lucide="boxes" style="width: 18px; height: 18px; color: var(--brand-primary);"></i>
            Product & Size-wise Items
          </h3>
          <p style="font-size: 0.8rem; color: var(--text-secondary); margin: 0.2rem 0 0 0;">
            Group purchase items by product. Expand cards to configure variants and prices, or collapse to focus on specific products.
          </p>
        </div>
      </div>

      <!-- Items List Container (Accordion Cards) -->
      <div id="pur-items-container" style="display: flex; flex-direction: column; gap: 0.75rem;"></div>

      <div style="display: flex; justify-content: flex-start; align-items: center; padding-top: 0.25rem; margin-bottom: 0.75rem;">
        <button type="button" id="btn-add-pur-product" class="btn btn-secondary btn-sm" style="display: inline-flex; align-items: center; gap: 0.35rem; font-weight: 600; border-color: var(--brand-primary); color: var(--brand-primary); background: transparent;">
          <i data-lucide="plus" style="width: 14px; height: 14px;"></i>
          <span>Add Another Product</span>
        </button>
      </div>
    </div>

    <!-- STICKY BOTTOM PURCHASE SUMMARY & ACTIONS BAR -->
    <div class="pur-sticky-bar">
      <div class="pur-sticky-metrics">
        <div class="pur-metric-item">
          <span class="pur-metric-label">Total Units</span>
          <span id="pur-summary-qty" class="pur-metric-value" style="color: var(--text-primary);">0 units</span>
        </div>
        <div class="pur-metric-divider"></div>
        <div class="pur-metric-item">
          <span class="pur-metric-label">Total Purchase Cost</span>
          <span id="pur-summary-cost" class="pur-metric-value pur-cost-accent">₹0</span>
        </div>
        <div class="pur-metric-divider"></div>
        <div class="pur-metric-item">
          <span class="pur-metric-label">Est. Selling Value</span>
          <span id="pur-summary-sell" class="pur-metric-value pur-selling-accent">₹0</span>
        </div>
        <div class="pur-metric-divider"></div>
        <div class="pur-metric-item">
          <span class="pur-metric-label">Est. Gross Profit</span>
          <div style="display: flex; align-items: baseline; gap: 0.35rem;">
            <span id="pur-summary-profit" class="pur-metric-value pur-profit-accent">₹0</span>
            <span id="pur-summary-margin" class="badge badge-success" style="font-size: 0.7rem; padding: 0.1rem 0.35rem; display: none;"></span>
          </div>
        </div>
      </div>

      <div class="pur-sticky-actions">
        <button type="button" id="btn-cancel-pur" class="btn btn-secondary">Cancel</button>
        <button type="button" id="btn-wait-receive-pur" class="btn btn-secondary" style="font-weight: 600; border: 1px solid var(--brand-primary); color: var(--brand-primary); display: inline-flex; align-items: center; gap: 0.35rem;">
          <i data-lucide="clock" style="width: 15px; height: 15px;"></i>
          Waiting for Receive
        </button>
        <button type="button" id="btn-save-pur" class="btn btn-primary" style="padding: 0.65rem 1.4rem; font-weight: 600; display: inline-flex; align-items: center; gap: 0.35rem;">
          <i data-lucide="package-check" style="width: 17px; height: 17px;"></i>
          Received Product
        </button>
      </div>
    </div>
  `;

  container.appendChild(mainCard);

  const itemsContainer = mainCard.querySelector('#pur-items-container');

  function validateProductName(prod, allProds) {
    const raw = prod.productName || '';
    const trimmed = raw.trim();
    if (!trimmed) {
      return 'Product Name is required.';
    }
    if (trimmed.length > 100) {
      return 'Product Name must not exceed 100 characters.';
    }

    const brandLower = (prod.brand || '').trim().toLowerCase();
    const isDuplicate = allProds.some(other => {
      if (other.id === prod.id) return false;
      const otherName = (other.productName || '').trim();
      if (!otherName) return false;
      if (otherName.toLowerCase() !== trimmed.toLowerCase()) return false;
      const otherBrand = (other.brand || '').trim().toLowerCase();
      return (brandLower === otherBrand || (!brandLower && !otherBrand));
    });

    if (isDuplicate) {
      return `Another product in this purchase already uses the name "${trimmed}".`;
    }

    return null;
  }

  function updateFormValidity() {
    const btnDraft = mainCard.querySelector('#btn-wait-receive-pur');
    const btnSave = mainCard.querySelector('#btn-save-pur');

    if (btnDraft) {
      btnDraft.disabled = Boolean(isSubmitting);
      btnDraft.style.opacity = isSubmitting ? '0.7' : '1';
      btnDraft.style.cursor = isSubmitting ? 'not-allowed' : 'pointer';
      btnDraft.title = isSubmitting
        ? 'Saving purchase order...'
        : 'Save the purchase without moving stock yet';
    }

    if (btnSave) {
      btnSave.disabled = Boolean(isSubmitting);
      btnSave.style.opacity = isSubmitting ? '0.7' : '1';
      btnSave.style.cursor = isSubmitting ? 'not-allowed' : 'pointer';
      btnSave.title = isSubmitting
        ? 'Processing purchase...'
        : 'Save purchase and receive stock';
    }
  }

  function updateSummaries() {
    let overallUnits = 0;
    let overallCost = 0;
    let overallSellingValue = 0;

    productsData.forEach((prod) => {
      let prodUnits = 0;
      let prodCost = 0;
      let prodSellingValue = 0;

      const prodSectionEl = itemsContainer.querySelector(`[data-product-id="${prod.id}"]`);

      prod.sizes.forEach(sz => {
        const q = parseInt(sz.qty, 10);
        const b = parseFloat(sz.buyingPrice);
        const s = parseFloat(sz.sellingPrice);

        const validQ = (!isNaN(q) && q > 0) ? q : 0;
        const validB = (!isNaN(b) && b >= 0) ? b : 0;
        const validS = (!isNaN(s) && s >= 0) ? s : 0;

        const lineCost = validQ * validB;
        const lineVal = validQ * validS;

        prodUnits += validQ;
        prodCost += lineCost;
        prodSellingValue += lineVal;

        overallUnits += validQ;
        overallCost += lineCost;
        overallSellingValue += lineVal;

        if (prodSectionEl) {
          const sizeRowEl = prodSectionEl.querySelector(`[data-size-id="${sz.id}"]`);
          if (sizeRowEl) {
            const costEl = sizeRowEl.querySelector('.pur-cost-display');
            const valEl = sizeRowEl.querySelector('.pur-value-display');
            const hasCost = (sz.qty !== '' && sz.qty !== null && !isNaN(q) && q > 0 &&
                             sz.buyingPrice !== '' && sz.buyingPrice !== null && !isNaN(b) && b >= 0);
            const hasVal = (sz.qty !== '' && sz.qty !== null && !isNaN(q) && q > 0 &&
                            sz.sellingPrice !== '' && sz.sellingPrice !== null && !isNaN(s) && s >= 0);
            if (costEl) costEl.value = hasCost ? `₹${lineCost.toLocaleString()}` : '';
            if (valEl) valEl.value = hasVal ? `₹${lineVal.toLocaleString()}` : '';
          }
        }
      });

      if (prodSectionEl) {
        const unitsEl = prodSectionEl.querySelector('.pur-header-units');
        const costEl = prodSectionEl.querySelector('.pur-header-cost');
        const valEl = prodSectionEl.querySelector('.pur-header-value');
        if (unitsEl) unitsEl.textContent = prodUnits;
        if (costEl) costEl.textContent = prodCost.toLocaleString();
        if (valEl) valEl.textContent = prodSellingValue.toLocaleString();

        const titlePreviewEl = prodSectionEl.querySelector('.pur-prod-title-preview');
        if (titlePreviewEl) {
          titlePreviewEl.textContent = (prod.productName && prod.productName.trim()) ? prod.productName.trim() : 'Untitled Product';
        }

        const metaPreviewEl = prodSectionEl.querySelector('.pur-prod-meta-preview');
        if (metaPreviewEl) {
          const catText = prod.category ? prod.category.trim() : 'No Category';
          const brandText = prod.brand ? ' · ' + prod.brand.trim() : '';
          metaPreviewEl.textContent = `(${catText}${brandText})`;
        }
      }
    });

    const overallProfit = overallSellingValue - overallCost;
    const sumQtyEl = mainCard.querySelector('#pur-summary-qty');
    const sumCostEl = mainCard.querySelector('#pur-summary-cost');
    const sumSellEl = mainCard.querySelector('#pur-summary-sell');
    const sumProfitEl = mainCard.querySelector('#pur-summary-profit');
    const sumMarginEl = mainCard.querySelector('#pur-summary-margin');

    if (sumQtyEl) sumQtyEl.textContent = `${overallUnits} units`;
    if (sumCostEl) sumCostEl.textContent = `₹${overallCost.toLocaleString()}`;
    if (sumSellEl) sumSellEl.textContent = `₹${overallSellingValue.toLocaleString()}`;
    if (sumProfitEl) sumProfitEl.textContent = `₹${overallProfit.toLocaleString()}`;

    if (sumMarginEl) {
      if (overallSellingValue > 0) {
        const marginPct = ((overallProfit / overallSellingValue) * 100).toFixed(1);
        sumMarginEl.textContent = `${marginPct}% margin`;
        sumMarginEl.style.display = 'inline-block';
      } else {
        sumMarginEl.textContent = '';
        sumMarginEl.style.display = 'none';
      }
    }

    updateFormValidity();
  }

  function renderPurchaseItems() {
    itemsContainer.innerHTML = '';

    const addProdBtn = mainCard.querySelector('#btn-add-pur-product');
    if (addProdBtn) {
      const btnSpan = addProdBtn.querySelector('span');
      if (btnSpan) {
        btnSpan.textContent = productsData.length === 0 ? 'Add Product' : 'Add Another Product';
      }
    }

    if (productsData.length === 0) {
      itemsContainer.innerHTML = `
        <div class="pur-empty-state" style="padding: 2.25rem 1.5rem; text-align: center; border: 1px dashed var(--border-color); border-radius: var(--radius-md); background: var(--bg-surface); display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
          <i data-lucide="package-plus" style="width: 32px; height: 32px; color: var(--text-secondary); opacity: 0.6;"></i>
          <div style="font-weight: 600; font-size: 0.95rem; color: var(--text-primary);">No Products Added</div>
          <p style="margin: 0; font-size: 0.825rem; color: var(--text-secondary); max-width: 420px;">
            Click &quot;Add Product&quot; below to add product details and size-wise purchase entries.
          </p>
        </div>
      `;
      updateSummaries();
      if (window.lucide) window.lucide.createIcons();
      return;
    }

    productsData.forEach((prod, pIdx) => {
      const isCustomCat = !!prod.isCustomCategory || (prod.category && !categoriesList.includes(prod.category));
      prod.isCustomCategory = isCustomCat;

      let initialProdUnits = 0;
      let initialProdCost = 0;
      let initialProdVal = 0;
      prod.sizes.forEach(sz => {
        const q = parseInt(sz.qty, 10);
        const b = parseFloat(sz.buyingPrice);
        const s = parseFloat(sz.sellingPrice);
        const validQ = (!isNaN(q) && q > 0) ? q : 0;
        const validB = (!isNaN(b) && b >= 0) ? b : 0;
        const validS = (!isNaN(s) && s >= 0) ? s : 0;
        initialProdUnits += validQ;
        initialProdCost += (validQ * validB);
        initialProdVal += (validQ * validS);
      });

      if (prod.isExpanded === undefined) {
        prod.isExpanded = (pIdx === 0);
      }

      const sectionEl = document.createElement('div');
      sectionEl.className = `pur-accordion-card ${prod.isExpanded ? 'expanded' : 'collapsed'}`;
      sectionEl.setAttribute('data-product-id', prod.id);

      sectionEl.innerHTML = `
        <!-- ACCORDION HEADER (Collapsed & Expanded state header) -->
        <div class="pur-accordion-header" title="Click to expand/collapse product">
          <div style="display: flex; align-items: center; gap: 0.65rem; min-width: 0; flex: 1;">
            <div class="pur-chevron-icon" style="transform: ${prod.isExpanded ? 'rotate(0deg)' : 'rotate(-90deg)'}; width: 22px; height: 22px; display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <i data-lucide="chevron-down" style="width: 16px; height: 16px;"></i>
            </div>
            <div style="display: flex; align-items: baseline; gap: 0.5rem; flex-wrap: wrap; min-width: 0;">
              <span class="pur-prod-badge badge badge-primary" style="font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em;">Product #${pIdx + 1}</span>
              <span class="pur-prod-title-preview" style="font-size: 0.9rem; font-weight: 600; color: var(--text-primary); max-width: 260px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${escapeHtml((prod.productName && prod.productName.trim()) ? prod.productName.trim() : 'Untitled Product')}</span>
              <span class="pur-prod-meta-preview" style="font-size: 0.775rem; color: var(--text-secondary); white-space: nowrap;">(${escapeHtml(prod.category ? prod.category : 'No Category')}${escapeHtml(prod.brand ? ' · ' + prod.brand : '')})</span>
            </div>
          </div>

          <div style="display: flex; align-items: center; gap: 0.65rem; flex-shrink: 0;">
            <div class="pur-prod-header-metrics" style="display: flex; align-items: center; gap: 0.45rem; font-size: 0.75rem;">
              <span class="pur-metric-pill" style="padding: 0.2rem 0.5rem; background: var(--bg-secondary); border-radius: var(--radius-sm); border: 1px solid var(--border-color); color: var(--text-primary); font-weight: 600;">
                <span class="pur-header-units">${initialProdUnits}</span> units
              </span>
              <span class="pur-metric-pill" style="padding: 0.2rem 0.5rem; background: var(--status-info-bg); border-radius: var(--radius-sm); border: 1px solid var(--status-info-border); color: var(--status-info-text); font-weight: 700;">
                <span style="font-size: 0.7rem; font-weight: 500; opacity: 0.8; margin-right: 2px;">Cost:</span>₹<span class="pur-header-cost">${initialProdCost.toLocaleString()}</span>
              </span>
              <span class="pur-metric-pill" style="padding: 0.2rem 0.5rem; background: var(--status-success-bg); border-radius: var(--radius-sm); border: 1px solid var(--status-success-border); color: var(--status-success-text); font-weight: 700;">
                <span style="font-size: 0.7rem; font-weight: 500; opacity: 0.8; margin-right: 2px;">Est:</span>₹<span class="pur-header-value">${initialProdVal.toLocaleString()}</span>
              </span>
            </div>

            <button type="button" class="btn btn-ghost pur-remove-product-btn" title="Remove Product" style="height: 28px; width: 28px; padding: 0; color: var(--status-danger); display: inline-flex; align-items: center; justify-content: center; border-radius: var(--radius-sm); cursor: pointer;">
              <i data-lucide="trash-2" style="width: 15px; height: 15px;"></i>
            </button>
          </div>
        </div>

        <!-- ACCORDION BODY (Expanded State) -->
        <div class="pur-accordion-body" style="display: ${prod.isExpanded ? 'flex' : 'none'};">
          <!-- Horizontal Product Details Row: Product Name, Category, Brand -->
          <div style="display: grid; grid-template-columns: 2fr 1.35fr 1.35fr; gap: 0.65rem; align-items: end;">
            <div class="form-group" style="margin: 0;">
              <label class="form-label" style="display: block; font-size: 0.725rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 0.25rem; white-space: nowrap;">Product Name <span style="color: var(--status-danger);">*</span></label>
              <input type="text" class="form-input pur-name-input" placeholder="e.g. Classic Oxford Shirt" list="pur-products-list" value="${prod.productName || ''}" style="height: 32px; padding: 0.25rem 0.55rem; font-size: 0.825rem; font-weight: 600; box-sizing: border-box; ${prod.nameError ? 'border-color: var(--status-danger);' : ''}">
              <div class="pur-name-error" style="font-size: 0.725rem; color: var(--status-danger); margin-top: 3px; display: ${prod.nameError ? 'block' : 'none'};">${prod.nameError || ''}</div>
            </div>
            <div class="form-group pur-cat-group" style="margin: 0;">
              <label class="form-label" style="display: block; font-size: 0.725rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 0.25rem; white-space: nowrap;">Category <span style="color: var(--status-danger);">*</span></label>
              <div class="pur-cat-container" style="position: relative; width: 100%;">
                <select class="form-select pur-cat-select" style="display: ${isCustomCat ? 'none' : 'block'}; height: 32px; padding: 0.25rem 0.55rem; font-size: 0.825rem; font-weight: 500; width: 100%; box-sizing: border-box;">
                  <option value="" ${!prod.category ? 'selected' : ''}>Select Category *</option>
                  ${categoriesList.map(c => `<option value="${escapeHtml(c)}" ${(!isCustomCat && c === prod.category) ? 'selected' : ''}>${escapeHtml(c)}</option>`).join('')}
                  <option value="__CUSTOM__">+ Custom Category...</option>
                </select>
                <div class="pur-cat-custom-wrapper" style="display: ${isCustomCat ? 'flex' : 'none'}; position: relative; width: 100%; align-items: center;">
                  <input type="text" class="form-input pur-cat-custom-input" placeholder="Enter category" value="${isCustomCat ? (prod.category || '') : ''}" style="width: 100%; height: 32px; padding: 0.25rem 2rem 0.25rem 0.55rem; font-size: 0.825rem; font-weight: 500; box-sizing: border-box;">
                  <button type="button" class="btn btn-ghost pur-cat-back-btn" title="Switch back to Category dropdown" style="position: absolute; right: 3px; top: 50%; transform: translateY(-50%); padding: 0.15rem; height: 24px; width: 24px; display: inline-flex; align-items: center; justify-content: center; border-radius: 4px; color: var(--text-secondary); border: none; background: transparent; cursor: pointer;">
                    <i data-lucide="list" style="width: 13px; height: 13px;"></i>
                  </button>
                </div>
                <div class="pur-cat-error field-error" style="display: none;"></div>
              </div>
            </div>
            <div class="form-group" style="margin: 0;">
              <label class="form-label" style="display: block; font-size: 0.725rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 0.25rem; white-space: nowrap;">Brand</label>
              <input type="text" class="form-input pur-brand-input" placeholder="e.g. ClassicFit" list="pur-brands-list" value="${prod.brand || ''}" style="height: 32px; padding: 0.25rem 0.55rem; font-size: 0.825rem; box-sizing: border-box;">
            </div>
          </div>

          <!-- Size-wise Entries Subheader & Actions -->
          <div style="display: flex; align-items: center; justify-content: space-between; gap: 0.5rem; padding-top: 0.5rem; border-top: 1px dashed var(--border-color); flex-wrap: wrap;">
            <div style="font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; color: var(--text-secondary); display: flex; align-items: center; gap: 0.35rem;">
              <i data-lucide="layers" style="width: 13px; height: 13px; color: var(--brand-primary);"></i>
              <span>Size-wise Entries</span>
            </div>
            <div style="display: flex; align-items: center; gap: 0.4rem;">
              ${prod.sizes.length > 1 ? `
                <button type="button" class="btn btn-ghost btn-sm pur-copy-price-btn" title="Copy prices from the first size to all other sizes of this product" style="font-size: 0.72rem; padding: 0.2rem 0.5rem; color: var(--brand-primary); height: 26px; border: 1px solid var(--border-color); background: var(--bg-secondary); border-radius: var(--radius-sm); display: inline-flex; align-items: center; gap: 0.3rem; cursor: pointer;">
                  <i data-lucide="copy" style="width: 12px; height: 12px;"></i> Copy Prices to All Sizes
                </button>
              ` : ''}
              <button type="button" class="btn btn-secondary btn-sm pur-add-size-btn" style="height: 26px; padding: 0 0.65rem; font-size: 0.73rem; font-weight: 600; display: inline-flex; align-items: center; gap: 0.3rem; border-color: var(--brand-primary); color: var(--brand-primary); background: transparent; cursor: pointer;">
                <i data-lucide="plus" style="width: 13px; height: 13px;"></i> Add Size
              </button>
            </div>
          </div>

          <!-- Size-wise Table -->
          <div class="pur-table-responsive-wrapper">
            <table class="pur-size-table">
              <thead>
                <tr>
                  <th style="width: 20%;">Size / Variant <span style="color: var(--status-danger);">*</span></th>
                  <th style="width: 12%;">Quantity <span style="color: var(--status-danger);">*</span></th>
                  <th style="width: 16%;">Buying Price (₹) <span style="color: var(--status-danger);">*</span></th>
                  <th style="width: 17%;">Total Cost (₹)</th>
                  <th style="width: 16%;">Selling Price (₹) <span style="color: var(--status-danger);">*</span></th>
                  <th style="width: 17%;">Estimated Value (₹)</th>
                  <th style="width: 40px; text-align: center;">Action</th>
                </tr>
              </thead>
              <tbody class="pur-sizes-container">
                ${prod.sizes.length === 0 ? `
                  <tr class="pur-size-empty-row">
                    <td colspan="7" style="text-align: center; padding: 1.25rem; color: var(--text-secondary); font-size: 0.8rem; background: var(--bg-surface);">
                      No size variants added yet. Click &quot;Add Size&quot; above to add a variant row.
                    </td>
                  </tr>
                ` : prod.sizes.map((sz) => {
                  const q = parseInt(sz.qty, 10);
                  const bp = parseFloat(sz.buyingPrice);
                  const sp = parseFloat(sz.sellingPrice);

                  const validQ = (!isNaN(q) && q > 0) ? q : 0;
                  const validB = (!isNaN(bp) && bp >= 0) ? bp : 0;
                  const validS = (!isNaN(sp) && sp >= 0) ? sp : 0;

                  const lineCost = validQ * validB;
                  const lineValue = validQ * validS;

                  const hasCost = (sz.qty !== '' && sz.qty !== null && !isNaN(q) && q > 0 &&
                                   sz.buyingPrice !== '' && sz.buyingPrice !== null && !isNaN(bp) && bp >= 0);
                  const hasValue = (sz.qty !== '' && sz.qty !== null && !isNaN(q) && q > 0 &&
                                    sz.sellingPrice !== '' && sz.sellingPrice !== null && !isNaN(sp) && sp >= 0);

                  const costDisplayVal = hasCost ? `₹${lineCost.toLocaleString()}` : '';
                  const valueDisplayVal = hasValue ? `₹${lineValue.toLocaleString()}` : '';

                  const isCustomSize = Boolean(sz.isCustomSize || (sz.size && !standardSizes.includes(sz.size)));
                  sz.isCustomSize = isCustomSize;

                  const qtyDisplay = (sz.qty !== undefined && sz.qty !== null && sz.qty !== '') ? sz.qty : '';
                  const buyDisplay = (sz.buyingPrice !== undefined && sz.buyingPrice !== null && sz.buyingPrice !== '') ? sz.buyingPrice : '';
                  const sellDisplay = (sz.sellingPrice !== undefined && sz.sellingPrice !== null && sz.sellingPrice !== '') ? sz.sellingPrice : '';

                  return `
                    <tr class="pur-size-row" data-size-id="${sz.id}">
                      <td>
                        <div class="pur-size-container" style="position: relative; width: 100%;">
                          <select class="form-select pur-size-select" style="display: ${isCustomSize ? 'none' : 'block'}; width: 100%;">
                            <option value="" ${!sz.size ? 'selected' : ''}>Select Size *</option>
                            ${standardSizes.map(s => `<option value="${escapeHtml(s)}" ${(!isCustomSize && s === sz.size) ? 'selected' : ''}>${escapeHtml(s === 'Standard' ? 'Standard (No sizes)' : 'Size ' + s)}</option>`).join('')}
                            <option value="__CUSTOM__">+ Custom Size...</option>
                          </select>
                          <div class="pur-size-custom-wrapper" style="display: ${isCustomSize ? 'flex' : 'none'}; position: relative; width: 100%; align-items: center;">
                            <input type="text" class="form-input pur-size-custom-input" placeholder="Enter size" value="${isCustomSize ? (sz.size || '') : ''}" style="width: 100%; padding-right: 2rem;">
                            <button type="button" class="btn btn-ghost pur-size-back-btn" title="Switch back to Size dropdown" style="position: absolute; right: 3px; top: 50%; transform: translateY(-50%); padding: 0.15rem; height: 24px; width: 24px; display: inline-flex; align-items: center; justify-content: center; border-radius: 4px; color: var(--text-secondary); border: none; background: transparent; cursor: pointer;">
                              <i data-lucide="list" style="width: 13px; height: 13px;"></i>
                            </button>
                          </div>
                          <div class="pur-size-error field-error" style="display: none;"></div>
                        </div>
                      </td>
                      <td>
                        <input type="number" class="form-input pur-qty-input" min="1" placeholder="Qty *" value="${qtyDisplay}" style="font-weight: 600;">
                        <div class="pur-qty-error field-error" style="display: none;"></div>
                      </td>
                      <td>
                        <input type="number" class="form-input pur-buying-input" min="0" step="any" placeholder="0.00" value="${buyDisplay}" style="font-weight: 600;">
                        <div class="pur-buying-error field-error" style="display: none;"></div>
                      </td>
                      <td>
                        <input type="text" class="form-input pur-cost-display pur-cost-accent" placeholder="—" value="${costDisplayVal}" readonly style="font-weight: 700; background: var(--bg-secondary);">
                      </td>
                      <td>
                        <input type="number" class="form-input pur-selling-input" min="0" step="any" placeholder="0.00" value="${sellDisplay}" style="font-weight: 600;">
                        <div class="pur-selling-error field-error" style="display: none;"></div>
                      </td>
                      <td>
                        <input type="text" class="form-input pur-value-display pur-selling-accent" placeholder="—" value="${valueDisplayVal}" readonly style="font-weight: 700; background: var(--bg-secondary);">
                      </td>
                      <td style="text-align: center;">
                        <button type="button" class="btn btn-ghost pur-remove-size-btn" title="Remove size" style="height: 28px; width: 28px; padding: 0; color: var(--status-danger); display: inline-flex; align-items: center; justify-content: center; border-radius: var(--radius-sm); cursor: pointer; margin: 0 auto;">
                          <i data-lucide="trash-2" style="width: 14px; height: 14px;"></i>
                        </button>
                      </td>
                    </tr>
                  `;
                }).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `;

      // Wire up Accordion Toggle
      const headerEl = sectionEl.querySelector('.pur-accordion-header');
      headerEl.addEventListener('click', (e) => {
        if (e.target.closest('.pur-remove-product-btn')) return;
        prod.isExpanded = !prod.isExpanded;
        const bodyEl = sectionEl.querySelector('.pur-accordion-body');
        const chevron = sectionEl.querySelector('.pur-chevron-icon');
        if (prod.isExpanded) {
          sectionEl.classList.remove('collapsed');
          sectionEl.classList.add('expanded');
          if (bodyEl) bodyEl.style.display = 'flex';
          if (chevron) chevron.style.transform = 'rotate(0deg)';
        } else {
          sectionEl.classList.remove('expanded');
          sectionEl.classList.add('collapsed');
          if (bodyEl) bodyEl.style.display = 'none';
          if (chevron) chevron.style.transform = 'rotate(-90deg)';
        }
      });

      // Product Level Controls
      const nameInp = sectionEl.querySelector('.pur-name-input');
      const catSel = sectionEl.querySelector('.pur-cat-select');
      const catCustomWrapper = sectionEl.querySelector('.pur-cat-custom-wrapper');
      const catCustomInp = sectionEl.querySelector('.pur-cat-custom-input');
      const catBackBtn = sectionEl.querySelector('.pur-cat-back-btn');
      const brandInp = sectionEl.querySelector('.pur-brand-input');
      const removeProdBtn = sectionEl.querySelector('.pur-remove-product-btn');
      const addSizeBtn = sectionEl.querySelector('.pur-add-size-btn');
      const copyPriceBtn = sectionEl.querySelector('.pur-copy-price-btn');
      const nameErrorEl = sectionEl.querySelector('.pur-name-error');

      function updateMetaPreview() {
        const metaPreview = sectionEl.querySelector('.pur-prod-meta-preview');
        if (metaPreview) {
          const catText = prod.category ? prod.category.trim() : 'No Category';
          const brandText = prod.brand ? ' · ' + prod.brand.trim() : '';
          metaPreview.textContent = `(${catText}${brandText})`;
        }
      }

      function validateThisProductName() {
        const err = validateProductName(prod, productsData);
        if (err) {
          prod.nameError = err;
          if (nameErrorEl) {
            nameErrorEl.textContent = err;
            nameErrorEl.style.display = 'block';
          }
          nameInp.classList.add('is-invalid');
          nameInp.style.borderColor = 'var(--status-danger)';
        } else {
          prod.nameError = null;
          if (nameErrorEl) {
            nameErrorEl.textContent = '';
            nameErrorEl.style.display = 'none';
          }
          nameInp.classList.remove('is-invalid');
          nameInp.style.borderColor = '';
        }
        updateFormValidity();
        return !err;
      }

      nameInp.addEventListener('input', (e) => {
        prod.productName = e.target.value;
        const val = e.target.value;
        const trimmed = val.trim();
        const titlePreview = sectionEl.querySelector('.pur-prod-title-preview');
        if (titlePreview) {
          titlePreview.textContent = trimmed || 'Untitled Product';
        }

        if (trimmed) {
          const err = validateProductName(prod, productsData);
          if (!err) {
            prod.nameError = null;
            if (nameErrorEl) {
              nameErrorEl.textContent = '';
              nameErrorEl.style.display = 'none';
            }
            nameInp.classList.remove('is-invalid');
            nameInp.style.borderColor = '';
          } else {
            prod.nameError = err;
            if (nameErrorEl) {
              nameErrorEl.textContent = err;
              nameErrorEl.style.display = 'block';
            }
            nameInp.classList.add('is-invalid');
            nameInp.style.borderColor = 'var(--status-danger)';
          }
        } else {
          prod.nameError = null;
          if (nameErrorEl) {
            nameErrorEl.textContent = '';
            nameErrorEl.style.display = 'none';
          }
        }

        updateFormValidity();
      });

      nameInp.addEventListener('blur', () => {
        validateThisProductName();
      });

      nameInp.addEventListener('change', (e) => {
        prod.productName = e.target.value;
        const matched = productsList.find(p => p.name && p.name.trim().toLowerCase() === e.target.value.trim().toLowerCase());
        prod.productId = matched ? matched.id : '';
        if (matched) {
          if (!prod.category || prod.category === 'General') {
            prod.category = matched.category || '';
            if (categoriesList.includes(prod.category)) {
              prod.isCustomCategory = false;
            } else {
              prod.isCustomCategory = true;
            }
          }
          if (!prod.brand || prod.brand === 'Generic') {
            prod.brand = matched.brand || '';
          }
          if (matched.purchasePrice) {
            prod.sizes.forEach(s => {
              if (s.buyingPrice === '' || s.buyingPrice === null || s.buyingPrice === undefined) {
                s.buyingPrice = matched.purchasePrice;
              }
            });
          }
          if (matched.sellingPrice) {
            prod.sizes.forEach(s => {
              if (s.sellingPrice === '' || s.sellingPrice === null || s.sellingPrice === undefined) {
                s.sellingPrice = matched.sellingPrice;
              }
            });
          }
          renderPurchaseItems();
        } else {
          validateThisProductName();
        }
      });

      catSel.addEventListener('change', (e) => {
        if (e.target.value === '__CUSTOM__') {
          prod.isCustomCategory = true;
          catSel.style.display = 'none';
          catCustomWrapper.style.display = 'flex';
          if (prod.category && categoriesList.includes(prod.category)) {
            catCustomInp.value = '';
            prod.category = '';
          } else {
            catCustomInp.value = prod.category || '';
          }
          catCustomInp.focus();
          if (window.lucide) window.lucide.createIcons();
        } else {
          prod.isCustomCategory = false;
          prod.category = e.target.value;
        }
        if (prod.category && prod.category.trim()) {
          const catErrEl = sectionEl.querySelector('.pur-cat-error');
          if (catErrEl) { catErrEl.textContent = ''; catErrEl.style.display = 'none'; }
          catSel.classList.remove('is-invalid');
          catCustomInp.classList.remove('is-invalid');
        }
        updateMetaPreview();
        updateFormValidity();
      });

      catCustomInp.addEventListener('input', (e) => {
        prod.category = e.target.value;
        if (prod.category && prod.category.trim()) {
          const catErrEl = sectionEl.querySelector('.pur-cat-error');
          if (catErrEl) { catErrEl.textContent = ''; catErrEl.style.display = 'none'; }
          catCustomInp.classList.remove('is-invalid');
        }
        updateMetaPreview();
        updateFormValidity();
      });

      catBackBtn.addEventListener('click', () => {
        prod.isCustomCategory = false;
        catCustomWrapper.style.display = 'none';
        catSel.style.display = 'block';
        if (prod.category && categoriesList.includes(prod.category.trim())) {
          catSel.value = prod.category.trim();
        } else {
          catSel.value = categoriesList[0] || '';
          prod.category = catSel.value;
        }
        updateMetaPreview();
        catSel.focus();
        updateFormValidity();
      });

      brandInp.addEventListener('input', (e) => {
        prod.brand = e.target.value;
        updateMetaPreview();
        if (prod.nameError && prod.nameError.includes('Another product in this purchase')) {
          validateThisProductName();
        } else {
          updateFormValidity();
        }
      });

      removeProdBtn.addEventListener('click', async (e) => {
        e.stopPropagation();

        // A brand-new card always carries one blank size row, so the row's mere
        // existence is not "entered data" — look at whether any field is filled.
        const hasSizeData = Array.isArray(prod.sizes) && prod.sizes.some(sz =>
          String(sz.size || '').trim() !== '' ||
          String(sz.qty || '').trim() !== '' ||
          String(sz.buyingPrice || '').trim() !== '' ||
          String(sz.sellingPrice || '').trim() !== ''
        );

        const hasEnteredData = Boolean(
          (prod.productName && prod.productName.trim().length > 0) ||
          (prod.brand && prod.brand.trim().length > 0) ||
          (prod.category && prod.category.trim().length > 0) ||
          hasSizeData
        );

        if (hasEnteredData) {
          const pNameDisplay = (prod.productName && prod.productName.trim()) ? `"${prod.productName.trim()}"` : 'this product';
          const okRemove = await uiConfirm({
            title: 'Remove product',
            message: `Are you sure you want to remove ${pNameDisplay} and all its size entries?`,
            confirmText: 'Remove',
            variant: 'danger'
          });
          if (!okRemove) return;
        }

        productsData.splice(pIdx, 1);
        renderPurchaseItems();
      });

      addSizeBtn.addEventListener('click', () => {
        prod.sizes.push({
          id: 'size_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
          size: '',
          qty: '',
          buyingPrice: '',
          sellingPrice: '',
          isCustomSize: false
        });
        renderPurchaseItems();
      });

      if (copyPriceBtn) {
        copyPriceBtn.addEventListener('click', () => {
          if (prod.sizes.length <= 1) return;
          const first = prod.sizes[0];
          for (let i = 1; i < prod.sizes.length; i++) {
            prod.sizes[i].buyingPrice = first.buyingPrice;
            prod.sizes[i].sellingPrice = first.sellingPrice;
          }
          renderPurchaseItems();
          toast.show({
            message: `Copied prices to all sizes of ${prod.productName || 'this product'}.`,
            type: 'info'
          });
        });
      }

      // Wire up each size row inside this product
      prod.sizes.forEach((sz, sIdx) => {
        const sizeRowEl = sectionEl.querySelector(`[data-size-id="${sz.id}"]`);
        if (!sizeRowEl) return;

        const sizeSel = sizeRowEl.querySelector('.pur-size-select');
        const sizeCustomWrapper = sizeRowEl.querySelector('.pur-size-custom-wrapper');
        const sizeCustomInp = sizeRowEl.querySelector('.pur-size-custom-input');
        const sizeBackBtn = sizeRowEl.querySelector('.pur-size-back-btn');
        const qtyInp = sizeRowEl.querySelector('.pur-qty-input');
        const buyInp = sizeRowEl.querySelector('.pur-buying-input');
        const sellInp = sizeRowEl.querySelector('.pur-selling-input');
        const removeSizeBtn = sizeRowEl.querySelector('.pur-remove-size-btn');

        sizeSel.addEventListener('change', (e) => {
          if (e.target.value === '__CUSTOM__') {
            sz.isCustomSize = true;
            sizeSel.style.display = 'none';
            sizeCustomWrapper.style.display = 'flex';
            if (sz.size && standardSizes.includes(sz.size)) {
              sizeCustomInp.value = '';
              sz.size = '';
            } else {
              sizeCustomInp.value = sz.size || '';
            }
            sizeCustomInp.focus();
            if (window.lucide) window.lucide.createIcons();
          } else {
            sz.isCustomSize = false;
            sz.size = e.target.value;
          }
          if (sz.size && sz.size.trim()) {
            const errEl = sizeRowEl.querySelector('.pur-size-error');
            if (errEl) { errEl.textContent = ''; errEl.style.display = 'none'; }
            sizeSel.classList.remove('is-invalid');
            sizeCustomInp.classList.remove('is-invalid');
          }
          updateSummaries();
        });

        sizeCustomInp.addEventListener('input', (e) => {
          sz.size = e.target.value;
          if (sz.size && sz.size.trim()) {
            const errEl = sizeRowEl.querySelector('.pur-size-error');
            if (errEl) { errEl.textContent = ''; errEl.style.display = 'none'; }
            sizeCustomInp.classList.remove('is-invalid');
          }
          updateSummaries();
        });

        sizeBackBtn.addEventListener('click', () => {
          sz.isCustomSize = false;
          sizeCustomWrapper.style.display = 'none';
          sizeSel.style.display = 'block';
          if (sz.size && standardSizes.includes(sz.size.trim())) {
            sizeSel.value = sz.size.trim();
          } else {
            sizeSel.value = '';
            sz.size = '';
          }
          sizeSel.focus();
          updateSummaries();
        });

        qtyInp.addEventListener('input', (e) => {
          sz.qty = e.target.value;
          const q = parseInt(sz.qty, 10);
          if (sz.qty !== '' && !isNaN(q) && q > 0) {
            const errEl = sizeRowEl.querySelector('.pur-qty-error');
            if (errEl) { errEl.textContent = ''; errEl.style.display = 'none'; }
            qtyInp.classList.remove('is-invalid');
          }
          updateSummaries();
        });

        buyInp.addEventListener('input', (e) => {
          sz.buyingPrice = e.target.value;
          const bp = parseFloat(sz.buyingPrice);
          if (sz.buyingPrice !== '' && !isNaN(bp) && bp >= 0) {
            const errEl = sizeRowEl.querySelector('.pur-buying-error');
            if (errEl) { errEl.textContent = ''; errEl.style.display = 'none'; }
            buyInp.classList.remove('is-invalid');
          }
          updateSummaries();
        });

        sellInp.addEventListener('input', (e) => {
          sz.sellingPrice = e.target.value;
          const sp = parseFloat(sz.sellingPrice);
          if (sz.sellingPrice !== '' && !isNaN(sp) && sp >= 0) {
            const errEl = sizeRowEl.querySelector('.pur-selling-error');
            if (errEl) { errEl.textContent = ''; errEl.style.display = 'none'; }
            sellInp.classList.remove('is-invalid');
          }
          updateSummaries();
        });

        removeSizeBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          prod.sizes.splice(sIdx, 1);
          renderPurchaseItems();
        });
      });

      itemsContainer.appendChild(sectionEl);
    });

    updateSummaries();
    if (window.lucide) window.lucide.createIcons();
  }

  // Wire top purchase order inputs
  const supplierInput = mainCard.querySelector('#pur-supplier');
  const dateInput = mainCard.querySelector('#pur-date');
  const supplierErrEl = mainCard.querySelector('#pur-supplier-error');
  const dateErrEl = mainCard.querySelector('#pur-date-error');

  if (supplierInput) {
    const clearSupplierErr = () => {
      if (supplierInput.value.trim()) {
        supplierInput.classList.remove('is-invalid');
        if (supplierErrEl) { supplierErrEl.textContent = ''; supplierErrEl.style.display = 'none'; }
      }
      updateFormValidity();
    };
    supplierInput.addEventListener('input', clearSupplierErr);
    supplierInput.addEventListener('change', clearSupplierErr);
  }
  if (dateInput) {
    const clearDateErr = () => {
      if (dateInput.value.trim()) {
        dateInput.classList.remove('is-invalid');
        if (dateErrEl) { dateErrEl.textContent = ''; dateErrEl.style.display = 'none'; }
      }
      updateFormValidity();
    };
    dateInput.addEventListener('input', clearDateErr);
    dateInput.addEventListener('change', clearDateErr);
  }

  renderPurchaseItems();

  mainCard.querySelector('#btn-add-pur-product').addEventListener('click', () => {
    productsData.push({
      id: 'prod_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
      productName: '',
      category: '',
      brand: '',
      productId: '',
      isCustomCategory: false,
      isExpanded: true,
      nameError: null,
      sizes: [
        {
          id: 'size_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
          size: '',
          qty: '',
          buyingPrice: '',
          sellingPrice: '',
          isCustomSize: false
        }
      ]
    });
    renderPurchaseItems();
  });

  mainCard.querySelector('#btn-cancel-pur').addEventListener('click', () => {
    if (onNavigate) onNavigate('purchases');
  });

  function expandProductCard(cardEl, prod) {
    if (!cardEl) return;
    if (prod) prod.isExpanded = true;
    cardEl.classList.remove('collapsed');
    cardEl.classList.add('expanded');
    const bodyEl = cardEl.querySelector('.pur-accordion-body');
    const chevron = cardEl.querySelector('.pur-chevron-icon');
    if (bodyEl) bodyEl.style.display = 'flex';
    if (chevron) chevron.style.transform = 'rotate(0deg)';
  }

  function validateAllPurchaseFields() {
    let firstError = null;

    function markError(inputEl, errEl, message, cardEl, prod) {
      if (inputEl) {
        inputEl.classList.add('is-invalid');
        inputEl.style.borderColor = 'var(--status-danger)';
      }
      if (errEl) {
        errEl.textContent = message;
        errEl.style.display = 'block';
      }
      if (cardEl) {
        expandProductCard(cardEl, prod);
      }
      if (!firstError) {
        firstError = { inputEl, errEl, message, cardEl, prod };
      }
    }

    function clearError(inputEl, errEl) {
      if (inputEl) {
        inputEl.classList.remove('is-invalid');
        inputEl.style.borderColor = '';
      }
      if (errEl) {
        errEl.textContent = '';
        errEl.style.display = 'none';
      }
    }

    // 1. Supplier
    const supplierEl = mainCard.querySelector('#pur-supplier');
    const supplierErrEl = mainCard.querySelector('#pur-supplier-error');
    const supplierVal = (supplierEl ? supplierEl.value : '').trim();
    if (!supplierVal) {
      markError(supplierEl, supplierErrEl, 'Supplier is required.', null, null);
    } else {
      clearError(supplierEl, supplierErrEl);
    }

    // 2. Purchase Date
    const dateEl = mainCard.querySelector('#pur-date');
    const dateErrEl = mainCard.querySelector('#pur-date-error');
    const dateVal = (dateEl ? dateEl.value : '').trim();
    if (!dateVal) {
      markError(dateEl, dateErrEl, 'Purchase date is required.', null, null);
    } else {
      clearError(dateEl, dateErrEl);
    }

    // 3. Products
    if (!productsData || productsData.length === 0) {
      const addProdBtn = mainCard.querySelector('#btn-add-pur-product');
      if (!firstError) {
        firstError = { inputEl: addProdBtn, errEl: null, message: 'At least one product is required.', cardEl: null, prod: null };
      }
    } else {
      for (let pIdx = 0; pIdx < productsData.length; pIdx++) {
        const prod = productsData[pIdx];
        const cardEl = itemsContainer.querySelector(`[data-product-id="${prod.id}"]`);

        // Product Name
        const nameInput = cardEl ? cardEl.querySelector('.pur-name-input') : null;
        if (nameInput && nameInput.value !== undefined) prod.productName = nameInput.value;
        const nameErrEl = cardEl ? cardEl.querySelector('.pur-name-error') : null;
        const pTrimmed = (prod.productName || '').trim();

        if (!pTrimmed) {
          prod.nameError = 'Product name is required.';
          markError(nameInput, nameErrEl, 'Product name is required.', cardEl, prod);
        } else if (pTrimmed.length > 100) {
          prod.nameError = 'Product name must not exceed 100 characters.';
          markError(nameInput, nameErrEl, 'Product name must not exceed 100 characters.', cardEl, prod);
        } else {
          const dupErr = validateProductName(prod, productsData);
          if (dupErr) {
            prod.nameError = dupErr;
            markError(nameInput, nameErrEl, dupErr, cardEl, prod);
          } else {
            prod.nameError = null;
            clearError(nameInput, nameErrEl);
          }
        }

        // Category
        const catSel = cardEl ? cardEl.querySelector('.pur-cat-select') : null;
        const catCustomInp = cardEl ? cardEl.querySelector('.pur-cat-custom-input') : null;
        const catErrEl = cardEl ? cardEl.querySelector('.pur-cat-error') : null;
        const activeCatInput = prod.isCustomCategory ? catCustomInp : catSel;
        if (activeCatInput && activeCatInput.value !== undefined) prod.category = activeCatInput.value;
        const catVal = (prod.category || '').trim();

        if (!catVal) {
          markError(activeCatInput, catErrEl, 'Category is required.', cardEl, prod);
        } else {
          clearError(activeCatInput, catErrEl);
          if (catSel) clearError(catSel, null);
          if (catCustomInp) clearError(catCustomInp, null);
        }

        // Sizes
        if (!prod.sizes || prod.sizes.length === 0) {
          const addSizeBtn = cardEl ? cardEl.querySelector('.pur-add-size-btn') : null;
          markError(addSizeBtn, null, 'At least one size entry is required.', cardEl, prod);
        } else {
          const seenSizes = new Set();
          for (let sIdx = 0; sIdx < prod.sizes.length; sIdx++) {
            const sz = prod.sizes[sIdx];
            const sizeRowEl = cardEl ? cardEl.querySelector(`[data-size-id="${sz.id}"]`) : null;
            if (!sizeRowEl) continue;

            const sizeSel = sizeRowEl.querySelector('.pur-size-select');
            const sizeCustomInp = sizeRowEl.querySelector('.pur-size-custom-input');
            const sizeErrEl = sizeRowEl.querySelector('.pur-size-error');
            const activeSizeInput = sz.isCustomSize ? sizeCustomInp : sizeSel;
            if (activeSizeInput && activeSizeInput.value !== undefined) sz.size = activeSizeInput.value;
            const sVal = (sz.size || '').trim();

            // Size / Variant
            if (!sVal) {
              markError(activeSizeInput, sizeErrEl, 'Size is required.', cardEl, prod);
            } else {
              const lower = sVal.toLowerCase();
              if (seenSizes.has(lower)) {
                markError(activeSizeInput, sizeErrEl, 'Duplicate size. Each variant must be unique.', cardEl, prod);
              } else {
                seenSizes.add(lower);
                clearError(activeSizeInput, sizeErrEl);
                if (sizeSel) clearError(sizeSel, null);
                if (sizeCustomInp) clearError(sizeCustomInp, null);
              }
            }

            // Quantity
            const qtyInp = sizeRowEl.querySelector('.pur-qty-input');
            const qtyErrEl = sizeRowEl.querySelector('.pur-qty-error');
            if (qtyInp && qtyInp.value !== undefined) sz.qty = qtyInp.value;
            const rawQty = sz.qty;
            if (rawQty === '' || rawQty === null || rawQty === undefined || String(rawQty).trim() === '') {
              markError(qtyInp, qtyErrEl, 'Quantity is required.', cardEl, prod);
            } else {
              const q = parseInt(rawQty, 10);
              if (isNaN(q) || q <= 0) {
                markError(qtyInp, qtyErrEl, 'Quantity must be greater than 0.', cardEl, prod);
              } else {
                clearError(qtyInp, qtyErrEl);
              }
            }

            // Buying Price
            const buyInp = sizeRowEl.querySelector('.pur-buying-input');
            const buyErrEl = sizeRowEl.querySelector('.pur-buying-error');
            if (buyInp && buyInp.value !== undefined) sz.buyingPrice = buyInp.value;
            const rawBuy = sz.buyingPrice;
            if (rawBuy === '' || rawBuy === null || rawBuy === undefined || String(rawBuy).trim() === '') {
              markError(buyInp, buyErrEl, 'Buying price is required.', cardEl, prod);
            } else {
              const bp = parseFloat(rawBuy);
              if (isNaN(bp) || bp < 0) {
                markError(buyInp, buyErrEl, 'Buying price cannot be negative.', cardEl, prod);
              } else {
                clearError(buyInp, buyErrEl);
              }
            }

            // Selling Price
            const sellInp = sizeRowEl.querySelector('.pur-selling-input');
            const sellErrEl = sizeRowEl.querySelector('.pur-selling-error');
            if (sellInp && sellInp.value !== undefined) sz.sellingPrice = sellInp.value;
            const rawSell = sz.sellingPrice;
            if (rawSell === '' || rawSell === null || rawSell === undefined || String(rawSell).trim() === '') {
              markError(sellInp, sellErrEl, 'Selling price is required.', cardEl, prod);
            } else {
              const sp = parseFloat(rawSell);
              if (isNaN(sp) || sp < 0) {
                markError(sellInp, sellErrEl, 'Selling price cannot be negative.', cardEl, prod);
              } else {
                clearError(sellInp, sellErrEl);
              }
            }
          }
        }
      }
    }

    if (firstError) {
      if (firstError.cardEl && firstError.prod) {
        expandProductCard(firstError.cardEl, firstError.prod);
      }
      setTimeout(() => {
        if (firstError.inputEl) {
          firstError.inputEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
          if (typeof firstError.inputEl.focus === 'function') {
            firstError.inputEl.focus({ preventScroll: true });
          }
          if (typeof firstError.inputEl.select === 'function' && firstError.inputEl.type !== 'date') {
            try { firstError.inputEl.select(); } catch (_) {}
          }
        }
      }, 50);

      toast.show({
        message: firstError.message || 'Please complete all required fields.',
        type: 'danger'
      });
      return false;
    }

    return true;
  }

  function validateAndGetFlattenedItems() {
    if (!productsData || productsData.length === 0) {
      return null;
    }

    const flattened = [];

    for (let pIdx = 0; pIdx < productsData.length; pIdx++) {
      const prod = productsData[pIdx];
      const pName = (prod.productName || '').trim();
      const pCat = (prod.category || '').trim();
      const pBrand = (prod.brand || '').trim();
      const pId = prod.productId || '';

      if (!prod.sizes || prod.sizes.length === 0) {
        return null;
      }

      for (let sIdx = 0; sIdx < prod.sizes.length; sIdx++) {
        const sz = prod.sizes[sIdx];
        const sVal = (sz.size || '').trim();
        const q = parseInt(sz.qty, 10);
        const bp = parseFloat(sz.buyingPrice);
        const sp = parseFloat(sz.sellingPrice);

        flattened.push({
          productId: pId,
          product: pName,
          productName: pName,
          category: pCat,
          brand: pBrand,
          size: sVal,
          qty: q,
          buyingPrice: bp,
          sellingPrice: sp,
          totalCost: q * bp
        });
      }
    }

    return flattened;
  }

  // 1. WAITING FOR RECEIVE (saved in full, no stock change, still editable)
  mainCard.querySelector('#btn-wait-receive-pur').addEventListener('click', () => {
    if (isSubmitting) return;

    const isValid = validateAllPurchaseFields();
    if (!isValid) return;

    const supplier = mainCard.querySelector('#pur-supplier').value.trim();
    const date = mainCard.querySelector('#pur-date').value;
    const notes = mainCard.querySelector('#pur-notes').value.trim();
    const flattenedItems = validateAndGetFlattenedItems();
    if (!flattenedItems) return;

    try {
      isSubmitting = true;
      updateFormValidity();

      store.savePurchaseDraft({
        supplier,
        date,
        notes,
        items: flattenedItems
      }, editingPurchase ? editingPurchase.id : null);

      toast.show({ message: `Purchase saved and waiting for receipt. Inventory stock is unchanged.`, type: 'success' });
      if (onNavigate) onNavigate('purchases');
    } catch (err) {
      isSubmitting = false;
      updateFormValidity();
      toast.show({ message: err.message || 'Error saving the purchase.', type: 'danger' });
    }
  });

  // 2. RECEIVED PRODUCT (saves and takes the full quantity into stock at once)
  mainCard.querySelector('#btn-save-pur').addEventListener('click', () => {
    if (isSubmitting) return;

    const isValid = validateAllPurchaseFields();
    if (!isValid) return;

    const supplier = mainCard.querySelector('#pur-supplier').value.trim();
    const date = mainCard.querySelector('#pur-date').value;
    const notes = mainCard.querySelector('#pur-notes').value.trim();
    const flattenedItems = validateAndGetFlattenedItems();
    if (!flattenedItems) return;

    try {
      isSubmitting = true;
      updateFormValidity();

      // One call: saves the purchase, then takes its full ordered quantity
      // into stock. Receiving is refused if the order was already received,
      // so a repeated click cannot add the stock twice.
      store.savePurchaseAndReceive({
        supplier,
        date,
        notes,
        items: flattenedItems
      }, editingPurchase ? editingPurchase.id : null);

      toast.show({ message: `Purchase received and stock added to inventory!`, type: 'success' });
      if (onNavigate) onNavigate('purchases');
    } catch (err) {
      isSubmitting = false;
      updateFormValidity();
      toast.show({ message: err.message || 'Error saving purchase and receiving stock.', type: 'danger' });
    }
  });

  updateFormValidity();

  if (window.lucide) window.lucide.createIcons();
  return container;
}


// ==========================================
// DEDICATED SALES EDIT PAGE (Separate Page)
// ==========================================

// ==========================================
// DEDICATED VIEW SALE PAGE
// ==========================================
function renderViewSalePage(params = {}, onNavigate = null) {
  if (typeof params === 'function') {
    onNavigate = params;
    params = {};
  }
  const container = document.createElement('div');
  container.className = 'page-container';

  const saleId = params.saleId || params.id || params.reference;
  const sale = (store.data.sales || []).find(s => s.id === saleId || s.reference === saleId);

  // Missing sale error state
  if (!sale) {
    const errorCard = document.createElement('div');
    errorCard.className = 'card';
    errorCard.style.cssText = 'text-align: center; padding: 3.5rem 1.5rem; display: flex; flex-direction: column; align-items: center; gap: 1.25rem;';
    errorCard.innerHTML = `
      <div style="width: 56px; height: 56px; border-radius: 50%; background: var(--status-danger-bg); display: flex; align-items: center; justify-content: center; color: var(--status-danger);">
        <i data-lucide="alert-triangle" style="width: 28px; height: 28px;"></i>
      </div>
      <div>
        <h2 style="font-size: 1.25rem; font-weight: 700; color: var(--text-primary); margin: 0 0 0.5rem 0;">Sale Record Not Found</h2>
        <p style="color: var(--text-secondary); margin: 0; font-size: 0.9rem; max-width: 440px;">
          The sales transaction with reference "<strong>${escapeHtml(saleId || 'unknown')}</strong>" could not be located or may have been deleted.
        </p>
      </div>
      <button type="button" class="btn btn-secondary back-to-list-btn" style="margin-top: 0.5rem; display: inline-flex; align-items: center; gap: 0.4rem;">
        <i data-lucide="arrow-left" style="width: 16px; height: 16px;"></i>
        <span>Return to Sales</span>
      </button>
    `;
    errorCard.querySelector('.back-to-list-btn').addEventListener('click', () => {
      if (onNavigate) onNavigate('sales');
    });
    container.appendChild(errorCard);
    if (window.lucide) window.lucide.createIcons();
    return container;
  }

  const custName = sale.customer || sale.customerName || 'Walk-in Customer';
  let matchedCustomer = null;
  if (custName && custName !== 'Walk-in Customer') {
    matchedCustomer = sale.customerId
      ? (store.data.customers || []).find(c => c.id === sale.customerId)
      : (store.data.customers || []).find(c => c.name && c.name.toLowerCase() === custName.toLowerCase());
  }

  const saleRef = sale.id || sale.reference || '—';
  const paymentStatus = sale.status || sale.paymentStatus || 'Completed';
  const statusBadgeVariant = getStatusBadgeVariant(paymentStatus);

  // Items breakdown
  const items = Array.isArray(sale.items) && sale.items.length > 0 ? sale.items : [];
  let calculatedSubtotal = 0;
  let calculatedItemDiscount = 0;
  let totalUnits = 0;

  items.forEach(i => {
    const qty = Number(i.qty !== undefined ? i.qty : (i.quantity || 1)) || 0;
    const unitPrice = Number(i.price !== undefined ? i.price : (i.sellingPrice || 0)) || 0;
    const itemDiscount = Number(i.discount || 0) || 0;
    totalUnits += qty;
    calculatedSubtotal += (unitPrice * qty);
    calculatedItemDiscount += itemDiscount;
  });

  const finalTotal = sale.totalAmount !== undefined ? Number(sale.totalAmount) : (calculatedSubtotal - calculatedItemDiscount);
  // The payment ledger is the single source of truth for what has been
  // collected; fall back to the old inference only for records without one.
  store.recalculateSalePayments(sale);
  const paidAmount = sale.amountPaid !== undefined
    ? Number(sale.amountPaid)
    : (sale.paidAmount !== undefined ? Number(sale.paidAmount) : (paymentStatus === 'Paid' || paymentStatus === 'Completed' ? finalTotal : 0));
  const balanceDue = sale.balanceDue !== undefined ? Number(sale.balanceDue) : Math.max(0, finalTotal - paidAmount);

  // 1. Header (Breadcrumb, Status & Action Buttons)
  const headerDiv = document.createElement('div');
  headerDiv.style.cssText = 'display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.25rem;';

  const breadcrumbWrap = document.createElement('div');
  breadcrumbWrap.style.cssText = 'display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap;';
  breadcrumbWrap.appendChild(createBreadcrumb([
    { label: 'Sales', target: 'sales' },
    { label: `Sale Details (${saleRef})` }
  ], onNavigate));
  breadcrumbWrap.appendChild(createBadge({ label: paymentStatus, variant: statusBadgeVariant }));
  headerDiv.appendChild(breadcrumbWrap);

  const headerActions = document.createElement('div');
  headerActions.style.cssText = 'display: flex; gap: 0.5rem; align-items: center;';

  const btnBack = document.createElement('button');
  btnBack.type = 'button';
  btnBack.className = 'btn btn-secondary btn-sm back-to-list-btn';
  btnBack.innerHTML = `<i data-lucide="arrow-left" style="width: 14px; height: 14px;"></i> <span>Back</span>`;
  btnBack.addEventListener('click', () => {
    if (onNavigate) onNavigate('sales');
  });
  headerActions.appendChild(btnBack);

  const btnEdit = document.createElement('button');
  btnEdit.type = 'button';
  btnEdit.className = 'btn btn-primary btn-sm edit-sale-page-btn';
  btnEdit.innerHTML = `<i data-lucide="pencil" style="width: 14px; height: 14px;"></i> <span>Edit Sale</span>`;
  btnEdit.addEventListener('click', () => {
    if (onNavigate) onNavigate('sales', { action: 'edit', saleId: sale.id });
  });
  headerActions.appendChild(btnEdit);

  headerDiv.appendChild(headerActions);
  container.appendChild(headerDiv);

  // 2. KPI Cards
  const kpiGrid = document.createElement('div');
  kpiGrid.className = 'kpi-grid';
  kpiGrid.style.cssText = 'display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem; margin-bottom: 1.25rem;';
  kpiGrid.innerHTML = `
    <div class="kpi-card" style="padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
      <div style="font-size: 0.75rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase;">Customer</div>
      <div style="font-size: 1.1rem; font-weight: 700; color: var(--text-primary); margin-top: 0.25rem;">${escapeHtml(custName)}</div>
    </div>
    <div class="kpi-card" style="padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
      <div style="font-size: 0.75rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase;">Sale Date</div>
      <div style="font-size: 1.1rem; font-weight: 700; color: var(--text-primary); margin-top: 0.25rem;">${escapeHtml(sale.date || '—')}</div>
    </div>
    <div class="kpi-card" style="padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
      <div style="font-size: 0.75rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase;">Payment Method</div>
      <div style="font-size: 1.1rem; font-weight: 700; color: var(--text-primary); margin-top: 0.25rem;">${escapeHtml(sale.paymentMethod || 'Cash')}</div>
    </div>
    <div class="kpi-card" style="padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
      <div style="font-size: 0.75rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase;">Items / Units Sold</div>
      <div style="font-size: 1.1rem; font-weight: 700; color: var(--brand-primary); margin-top: 0.25rem;">${totalUnits} units</div>
    </div>
    <div class="kpi-card" style="padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
      <div style="font-size: 0.75rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase;">Net Total Amount</div>
      <div style="font-size: 1.1rem; font-weight: 700; color: var(--status-success); margin-top: 0.25rem;">₹${Math.round(finalTotal).toLocaleString()}</div>
    </div>
  `;
  container.appendChild(kpiGrid);

  // 3. Customer Info Banner
  if (matchedCustomer) {
    const custBanner = document.createElement('div');
    custBanner.className = 'card';
    custBanner.style.cssText = 'display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.25rem; background: var(--bg-secondary); border: 1px solid var(--border-color);';
    custBanner.innerHTML = `
      <div style="display: flex; align-items: center; gap: 0.75rem;">
        <div style="width: 40px; height: 40px; border-radius: 50%; background: var(--brand-primary); color: var(--brand-text); display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 1rem;">
          ${escapeHtml(matchedCustomer.name.slice(0, 1).toUpperCase())}
        </div>
        <div>
          <div style="font-weight: 700; color: var(--text-primary); font-size: 0.95rem;">${escapeHtml(matchedCustomer.name)}</div>
          <div style="font-size: 0.8rem; color: var(--text-secondary);">Registered Customer • Phone: ${escapeHtml(matchedCustomer.phone || '—')} • Lifetime Spend: ₹${(matchedCustomer.totalSpend || 0).toLocaleString()}</div>
        </div>
      </div>
      <button type="button" class="btn btn-secondary btn-sm view-matched-cust-btn" style="display: inline-flex; align-items: center; gap: 0.35rem;">
        <i data-lucide="user" style="width: 14px; height: 14px;"></i>
        <span>View Customer Profile</span>
      </button>
    `;
    custBanner.querySelector('.view-matched-cust-btn').addEventListener('click', () => {
      if (onNavigate) onNavigate('customers', { action: 'view', customerId: matchedCustomer.id });
    });
    container.appendChild(custBanner);
  }

  // 4. Products Table Card
  const itemsCard = document.createElement('div');
  itemsCard.className = 'card';
  itemsCard.style.cssText = 'display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1.25rem;';
  itemsCard.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem;">
      <h3 style="font-size: 1.05rem; font-weight: 700; color: var(--text-primary); margin: 0; display: flex; align-items: center; gap: 0.5rem;">
        <i data-lucide="shopping-bag" style="width: 18px; height: 18px; color: var(--brand-primary);"></i>
        Itemized Products Sold (${items.length} items)
      </h3>
    </div>

    <div class="table-responsive" style="border: 1px solid var(--border-color); border-radius: var(--radius-sm);">
      <table class="admin-table" style="font-size: 0.85rem;">
        <thead>
          <tr>
            <th style="width: 5%; text-align: center;">S.No</th>
            <th style="width: 30%;">Product</th>
            <th style="width: 15%;">SKU</th>
            <th style="width: 10%; text-align: center;">Size</th>
            <th style="width: 10%; text-align: center;">Quantity</th>
            <th style="width: 12%; text-align: right;">Unit Price</th>
            <th style="width: 10%; text-align: right;">Discount</th>
            <th style="width: 13%; text-align: right;">Line Total</th>
          </tr>
        </thead>
        <tbody>
          ${items.map((i, idx) => {
            const pName = i.product || i.productName || i.name || 'Unnamed Product';
            let size = i.size || '';
            if (!size && i.sku) {
              const parts = String(i.sku).split('-');
              if (parts.length > 1) size = parts[parts.length - 1];
            }
            if (!size) size = 'Standard';
            const qty = Number(i.qty !== undefined ? i.qty : (i.quantity || 1)) || 0;
            const price = Number(i.price !== undefined ? i.price : (i.sellingPrice || 0)) || 0;
            const disc = Number(i.discount || 0) || 0;
            const lineSub = (qty * price);
            const lineTot = i.amount !== undefined ? Number(i.amount) : (lineSub - disc);
            return `
              <tr>
                <td style="text-align: center; color: var(--text-secondary); font-weight: 600;">${idx + 1}</td>
                <td>
                  <div style="font-weight: 600; color: var(--text-primary);">${escapeHtml(pName)}</div>
                </td>
                <td style="font-family: monospace; font-size: 0.8rem; color: var(--text-secondary);">${escapeHtml(i.sku || '—')}</td>
                <td style="text-align: center;"><span class="badge badge-secondary">${escapeHtml(size)}</span></td>
                <td style="text-align: center; font-weight: 600; color: var(--text-primary);">${qty}</td>
                <td style="text-align: right; color: var(--text-primary);">₹${price.toLocaleString()}</td>
                <td style="text-align: right; color: ${disc > 0 ? 'var(--status-warning-text)' : 'var(--text-secondary)'};">${disc > 0 ? `₹${disc.toLocaleString()}` : '—'}</td>
                <td style="text-align: right; font-weight: 700; color: var(--brand-primary);">₹${Math.round(lineTot).toLocaleString()}</td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    </div>

    <!-- Financial Summary -->
    <div style="display: flex; justify-content: flex-end; padding-top: 0.75rem;">
      <div style="min-width: 280px; display: flex; flex-direction: column; gap: 0.5rem; background: var(--bg-secondary); padding: 1rem 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color); font-size: 0.875rem;">
        <div style="display: flex; justify-content: space-between; color: var(--text-secondary);">
          <span>Subtotal:</span>
          <span>₹${Math.round(calculatedSubtotal).toLocaleString()}</span>
        </div>
        ${calculatedItemDiscount > 0 ? `
          <div style="display: flex; justify-content: space-between; color: var(--status-warning-text);">
            <span>Discounts:</span>
            <span>- ₹${Math.round(calculatedItemDiscount).toLocaleString()}</span>
          </div>
        ` : ''}
        <div style="display: flex; justify-content: space-between; font-weight: 700; font-size: 1.05rem; color: var(--text-primary); border-top: 1px solid var(--border-color); padding-top: 0.5rem;">
          <span>Grand Total:</span>
          <span style="color: var(--brand-primary);">₹${Math.round(finalTotal).toLocaleString()}</span>
        </div>
        <div style="display: flex; justify-content: space-between; color: var(--text-secondary); font-size: 0.8rem;">
          <span>Amount Paid:</span>
          <span style="color: var(--status-success); font-weight: 600;">₹${Math.round(paidAmount).toLocaleString()}</span>
        </div>
        ${balanceDue > 0 ? `
          <div style="display: flex; justify-content: space-between; color: var(--status-danger); font-size: 0.8rem; font-weight: 600;">
            <span>Balance Due:</span>
            <span>₹${Math.round(balanceDue).toLocaleString()}</span>
          </div>
        ` : ''}
        ${Number(sale.overpaidAmount || 0) > 0 ? `
          <div class="sale-overpaid-row" style="display: flex; justify-content: space-between; color: var(--status-danger); font-size: 0.8rem; font-weight: 600;">
            <span>Overpaid:</span>
            <span>₹${Number(sale.overpaidAmount).toLocaleString('en-IN')}</span>
          </div>
        ` : ''}
      </div>
    </div>
  `;
  container.appendChild(itemsCard);

  // 4b. Payment summary and history
  store.recalculateSalePayments(sale);
  const payTotal = Number(sale.totalAmount || 0);
  const payPaid = Number(sale.amountPaid || 0);
  const payBalance = Number(sale.balanceDue || 0);
  const payOverpaid = Number(sale.overpaidAmount || 0);
  const payments = Array.isArray(sale.payments) ? sale.payments : [];
  const isSettled = payBalance <= 0;
  const payCard = document.createElement('div');
  payCard.className = 'card';
  payCard.style.marginTop = '1.25rem';
  payCard.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem; padding-bottom: 0.85rem; border-bottom: 1px solid var(--border-color); margin-bottom: 1.15rem;">
      <div>
        <h3 class="card-title" style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.25rem;">
          <i data-lucide="wallet" style="width: 18px; height: 18px; color: var(--brand-primary);"></i>
          Payments
        </h3>
        <p style="font-size: 0.78rem; color: var(--text-secondary); margin: 0;">What was billed, what has been collected, and what is still owed.</p>
      </div>
      ${sale.paymentsNeedReview ? `<span class="badge badge-warning" style="font-weight: 600;">Amount not recorded</span>` : ''}
    </div>

    <div style="display: flex; flex-wrap: wrap; gap: 2rem; margin-bottom: 1.15rem;">
      <div>
        <div style="font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-secondary); font-weight: 600; margin-bottom: 0.25rem;">Sale Total</div>
        <div style="font-size: 1.05rem; font-weight: 700; color: var(--text-primary);">₹${payTotal.toLocaleString('en-IN')}</div>
      </div>
      <div>
        <div style="font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-secondary); font-weight: 600; margin-bottom: 0.25rem;">Amount Paid</div>
        <div style="font-size: 1.05rem; font-weight: 700; color: var(--status-success);">₹${payPaid.toLocaleString('en-IN')}</div>
      </div>
      <div>
        <div style="font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-secondary); font-weight: 600; margin-bottom: 0.25rem;">Balance Due</div>
        <div style="font-size: 1.05rem; font-weight: 700; color: ${isSettled ? 'var(--status-success)' : 'var(--status-warning-text)'};">₹${payBalance.toLocaleString('en-IN')}</div>
      </div>
      ${payOverpaid > 0 ? `
      <div>
        <div style="font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-secondary); font-weight: 600; margin-bottom: 0.25rem;">Overpaid</div>
        <div style="font-size: 1.05rem; font-weight: 700; color: var(--status-danger);">₹${payOverpaid.toLocaleString('en-IN')}</div>
      </div>
      ` : ''}
    </div>

    ${payOverpaid > 0 ? `
      <div class="sale-overpaid-notice" style="margin-bottom: 1.15rem; padding: 0.75rem 1rem; border: 1px solid var(--status-danger); border-radius: var(--radius-sm); color: var(--status-danger); font-size: 0.85rem; font-weight: 500;">
        ₹${payOverpaid.toLocaleString('en-IN')} more has been collected than this sale's total of ₹${payTotal.toLocaleString('en-IN')}. No refund has been recorded, and this amount is not applied to any other sale.
      </div>
    ` : ''}

    ${payments.length > 0 ? `
      <div class="table-responsive" style="border: 1px solid var(--border-color); border-radius: var(--radius-sm);">
        <table class="admin-table" style="font-size: 0.85rem;">
          <thead>
            <tr><th>Date</th><th>Method</th><th style="text-align: right;">Amount</th><th>Note</th></tr>
          </thead>
          <tbody>
            ${payments.map(pm => `
              <tr>
                <td style="color: var(--text-secondary);">${escapeHtml(pm.date || '-')}</td>
                <td>${createBadge({ label: pm.method || 'Cash', variant: 'secondary' }).outerHTML}</td>
                <td style="text-align: right; font-weight: 700; color: var(--text-primary);">₹${Number(pm.amount || 0).toLocaleString('en-IN')}</td>
                <td style="color: var(--text-secondary);">${escapeHtml(pm.note || '')}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    ` : `
      <div style="padding: 1.25rem; text-align: center; color: var(--text-secondary); font-size: 0.875rem; border: 1px dashed var(--border-color); border-radius: var(--radius-sm);">
        No payments recorded against this sale yet.
      </div>
    `}
  `;

  if (!isSettled && sale.status !== 'Cancelled' && sale.status !== 'Failed') {
    const payActions = document.createElement('div');
    payActions.style.cssText = 'margin-top: 1.15rem; display: flex; gap: 0.75rem;';
    payActions.appendChild(createButton({
      text: 'Record Payment',
      icon: 'plus',
      variant: 'primary',
      size: 'sm',
      extraClass: 'record-payment-nav-btn',
      onClick: () => { if (onNavigate) onNavigate('sales', { action: 'payment', saleId: sale.id }); }
    }));
    payCard.appendChild(payActions);
  }
  container.appendChild(payCard);

  // 5. Bottom Sticky Actions Bar
  const bottomBar = document.createElement('div');
  bottomBar.className = 'card';
  bottomBar.style.cssText = 'display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; padding: 1rem 1.25rem;';
  bottomBar.innerHTML = `
    <button type="button" class="btn btn-secondary back-to-list-bottom-btn" style="display: inline-flex; align-items: center; gap: 0.4rem; font-weight: 600;">
      <i data-lucide="arrow-left" style="width: 16px; height: 16px;"></i>
      <span>Back to Sales</span>
    </button>
    <div style="display: flex; gap: 0.75rem; align-items: center; flex-wrap: wrap;">
      <button type="button" class="btn btn-primary edit-sale-bottom-btn" style="display: inline-flex; align-items: center; gap: 0.4rem;">
        <i data-lucide="pencil" style="width: 16px; height: 16px;"></i>
        <span>Edit Sale</span>
      </button>
      <button type="button" class="btn btn-ghost delete-sale-bottom-btn" style="color: var(--status-danger); display: inline-flex; align-items: center; gap: 0.4rem;">
        <i data-lucide="trash-2" style="width: 16px; height: 16px;"></i>
        <span>Delete Sale</span>
      </button>
    </div>
  `;

  bottomBar.querySelector('.back-to-list-bottom-btn').addEventListener('click', () => {
    if (onNavigate) onNavigate('sales');
  });

  bottomBar.querySelector('.edit-sale-bottom-btn').addEventListener('click', () => {
    if (onNavigate) onNavigate('sales', { action: 'edit', saleId: sale.id });
  });

  bottomBar.querySelector('.delete-sale-bottom-btn').addEventListener('click', async () => {
    const confirmed = await uiConfirm({ title: 'Confirm deletion', message: `Are you sure you want to delete sale "${saleRef}"?

This will restore deducted inventory quantities and recalculate customer metrics.

This action cannot be undone.`, confirmText: 'Delete', variant: 'danger' });
    if (confirmed) {
      try {
        store.deleteSale(sale.id);
        toast.show({ message: `Sale ${saleRef} deleted successfully.`, type: 'info' });
        if (onNavigate) onNavigate('sales');
      } catch (err) {
        toast.show({ message: err.message, type: 'danger' });
      }
    }
  });

  container.appendChild(bottomBar);

  if (window.lucide) window.lucide.createIcons();
  return container;
}

function renderEditSalePage(params = {}, onNavigate = null) {
  if (typeof params === 'function') {
    onNavigate = params;
    params = {};
  }
  const container = document.createElement('div');
  container.className = 'page-container';

  const saleId = params.saleId || params.id;
  const sale = (store.data.sales || []).find(s => s.id === saleId || s.reference === saleId);

  // Missing sale error state
  if (!sale) {
    const errorCard = document.createElement('div');
    errorCard.className = 'card';
    errorCard.style.cssText = 'text-align: center; padding: 3.5rem 1.5rem; display: flex; flex-direction: column; align-items: center; gap: 1.25rem;';
    errorCard.innerHTML = `
      <div style="width: 56px; height: 56px; border-radius: 50%; background: var(--status-danger-bg); display: flex; align-items: center; justify-content: center; color: var(--status-danger);">
        <i data-lucide="alert-triangle" style="width: 28px; height: 28px;"></i>
      </div>
      <div>
        <h2 style="font-size: 1.25rem; font-weight: 700; color: var(--text-primary); margin: 0 0 0.5rem 0;">Sale Record Not Found</h2>
        <p style="color: var(--text-secondary); margin: 0; font-size: 0.9rem; max-width: 440px;">
          The sale record with identifier "<strong>${escapeHtml(saleId || 'unknown')}</strong>" could not be located or may have been deleted.
        </p>
      </div>
      <button type="button" class="btn btn-secondary back-to-list-btn" style="margin-top: 0.5rem; display: inline-flex; align-items: center; gap: 0.4rem;">
        <i data-lucide="arrow-left" style="width: 16px; height: 16px;"></i>
        <span>Return to Sales</span>
      </button>
    `;
    errorCard.querySelector('.back-to-list-btn').addEventListener('click', () => {
      if (onNavigate) onNavigate('sales');
    });
    container.appendChild(errorCard);
    if (window.lucide) window.lucide.createIcons();
    return container;
  }

  let hasUnsavedChanges = false;
  const markChanged = () => { hasUnsavedChanges = true; };

  const status = sale.status || 'Paid';
  const badgeVariant = getStatusBadgeVariant(status);

  // 1. Header (Breadcrumb & Status Badge)
  const headerDiv = document.createElement('div');
  headerDiv.style.cssText = 'display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.25rem;';
  
  const breadcrumbWrap = document.createElement('div');
  breadcrumbWrap.style.cssText = 'display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap;';
  breadcrumbWrap.appendChild(createBreadcrumb([
    { label: 'Sales', target: 'sales' },
    { label: `Edit Sale (${sale.id})` }
  ], onNavigate));
  breadcrumbWrap.appendChild(createBadge({ label: status, variant: badgeVariant }));
  headerDiv.appendChild(breadcrumbWrap);
  container.appendChild(headerDiv);

  // 2. Main Form Card
  const mainCard = document.createElement('div');
  mainCard.className = 'card';
  mainCard.style.cssText = 'display: flex; flex-direction: column; gap: 1.5rem; width: 100%;';

  const customersList = store.data.customers || [];
  const productsList = store.data.products || [];

  // Group sale's items
  // Build a map of originally deducted quantities for this sale to compute effective available stock
  const wasActiveSale = sale.status !== 'Cancelled' && sale.status !== 'Failed' && sale.status !== 'Draft';
  const oldDeductedMap = new Map();
  if (wasActiveSale) {
    (sale.items || []).forEach(it => {
      const prodId = it.productId || '';
      const size = (it.size || 'Standard').toUpperCase();
      const key = `${prodId}:::${size}`;
      const q = Number(it.qty !== undefined ? it.qty : (it.quantity || 1)) || 0;
      oldDeductedMap.set(key, (oldDeductedMap.get(key) || 0) + q);
    });
  }

  function getEffectiveAvailableStock(productId, size) {
    const prod = productsList.find(p => p.id === productId);
    if (!prod) return 0;
    const targetSize = (size || 'Standard').toUpperCase();
    const variant = (prod.variants || []).find(v => (v.size || 'Standard').toUpperCase() === targetSize) || (prod.variants || [])[0];
    const curStock = variant ? (variant.stock || 0) : (prod.totalStock || 0);
    const key = `${productId}:::${targetSize}`;
    const previouslyDeducted = oldDeductedMap.get(key) || 0;
    return curStock + previouslyDeducted;
  }

  let editSaleItems = [];
  if (Array.isArray(sale.items) && sale.items.length > 0) {
    editSaleItems = sale.items.map((it, idx) => {
      let matchedProd = productsList.find(p => p.id === it.productId || (p.name && it.product && p.name.trim().toLowerCase() === it.product.trim().toLowerCase()));
      const prodId = matchedProd ? matchedProd.id : (productsList[0] ? productsList[0].id : '');
      let itemSize = it.size || '';
      if (!itemSize && it.sku) {
        const parts = String(it.sku).split('-');
        if (parts.length > 1) itemSize = parts[parts.length - 1];
      }
      if (!itemSize) itemSize = 'Standard';
      return {
        id: 'sitem_' + Date.now() + '_' + idx,
        productId: prodId,
        size: itemSize,
        qty: it.qty !== undefined ? it.qty : (it.quantity || 1),
        sellingPrice: it.price !== undefined ? it.price : (it.sellingPrice || 0)
      };
    });
  }

  if (editSaleItems.length === 0 && productsList.length > 0) {
    const firstP = productsList[0];
    editSaleItems.push({
      id: 'sitem_' + Date.now() + '_0',
      productId: firstP.id,
      size: (firstP.variants && firstP.variants[0]) ? firstP.variants[0].size : 'Standard',
      qty: 1,
      sellingPrice: firstP.sellingPrice || 0
    });
  }

  mainCard.innerHTML = `
    <datalist id="edit-sale-customers-list">
      <option value="Walk-in Customer">
      ${customersList.map(c => `<option value="${escapeHtml(c.name)}">`).join('')}
    </datalist>

    <!-- SECTION A: CUSTOMER INFORMATION -->
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <h3 style="font-size: 1.05rem; font-weight: 600; margin: 0; color: var(--text-primary); border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
        <i data-lucide="user" style="width: 18px; height: 18px; color: var(--brand-primary);"></i>
        Customer Information
      </h3>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem;">
        <div class="form-group">
          <label class="form-label" style="font-weight: 600;">Customer Name <span style="color: var(--status-danger);">*</span></label>
          <input type="text" id="edit-sale-cust-name" class="form-input" list="edit-sale-customers-list" value="${escapeHtml(sale.customer || sale.customerName || 'Walk-in Customer')}">
        </div>

        <div class="form-group">
          <label class="form-label" style="font-weight: 600;">Phone Number</label>
          <input type="text" id="edit-sale-cust-phone" class="form-input" value="${escapeHtml(sale.phone && sale.phone !== '-' ? sale.phone : '')}" placeholder="+91 98765 43210">
        </div>

        <div class="form-group">
          <label class="form-label" style="font-weight: 600;">Sale Date</label>
          <input type="text" id="edit-sale-date" class="form-input" value="${escapeHtml(sale.date || '')}">
        </div>
      </div>
    </div>

    <!-- SECTION B: PRODUCT & SIZE-WISE ITEMS -->
    <div style="display: flex; flex-direction: column; gap: 0.85rem;">
      <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
        <div>
          <h3 style="font-size: 1.05rem; font-weight: 600; margin: 0; color: var(--text-primary); display: flex; align-items: center; gap: 0.5rem;">
            <i data-lucide="boxes" style="width: 18px; height: 18px; color: var(--brand-primary);"></i>
            Product & Size-wise Items
          </h3>
          <p style="font-size: 0.8rem; color: var(--text-secondary); margin: 0.2rem 0 0 0;">
            Adjust products, variant sizes, quantities, and selling prices. Available stock accounts for units already held in this sale.
          </p>
        </div>
      </div>

      <div id="edit-sale-items-container" style="display: flex; flex-direction: column; gap: 0.75rem;"></div>

      <div style="display: flex; justify-content: flex-start; padding-top: 0.5rem;">
        <button type="button" id="btn-edit-sale-add-item" class="btn btn-secondary btn-sm" style="display: inline-flex; align-items: center; gap: 0.35rem; font-weight: 600;">
          <i data-lucide="plus" style="width: 14px; height: 14px;"></i>
          <span>Add Another Product</span>
        </button>
      </div>
    </div>

    <!-- SECTION C: PAYMENT & SUMMARY -->
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; border-top: 1px solid var(--border-color); padding-top: 1.25rem;">
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <h4 style="font-size: 0.95rem; font-weight: 600; margin: 0; color: var(--text-primary);">Payment Details</h4>
        
        <div class="form-group">
          <label class="form-label" style="font-weight: 600;">Payment Method</label>
          <select id="edit-sale-pay-method" class="form-select">
            <option value="Cash" ${sale.paymentMethod === 'Cash' ? 'selected' : ''}>Cash</option>
            <option value="UPI" ${sale.paymentMethod === 'UPI' ? 'selected' : ''}>UPI</option>
            <option value="Card" ${sale.paymentMethod === 'Card' ? 'selected' : ''}>Card</option>
            <option value="Other" ${sale.paymentMethod === 'Other' ? 'selected' : ''}>Other</option>
          </select>
        </div>

        <div class="form-group">
          <label class="form-label" style="font-weight: 600;">Payment Status</label>
          <select id="edit-sale-pay-status" class="form-select">
            <option value="Paid" ${sale.status === 'Paid' || sale.status === 'Completed' || sale.status === 'Overpaid' ? 'selected' : ''}>Paid</option>
            <option value="Pending" ${sale.status === 'Pending' ? 'selected' : ''}>Pending</option>
            <option value="Cancelled" ${sale.status === 'Cancelled' ? 'selected' : ''}>Cancelled</option>
          </select>
        </div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.85rem; background: var(--bg-secondary); padding: 1.15rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
        <h4 style="font-size: 0.95rem; font-weight: 600; margin: 0; color: var(--text-primary);">Sale Summary</h4>
        
        <div style="display: flex; justify-content: space-between; font-size: 0.9rem;">
          <span style="color: var(--text-secondary);">Subtotal:</span>
          <strong id="edit-sale-summary-subtotal" style="color: var(--text-primary);">₹0</strong>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.9rem;">
          <span style="color: var(--text-secondary);">Discount (₹):</span>
          <input type="number" id="edit-sale-discount-input" class="form-input" min="0" value="${sale.discount || 0}" style="width: 100px; padding: 0.25rem 0.5rem; text-align: right; font-size: 0.85rem;">
        </div>

        <div style="display: flex; justify-content: space-between; font-size: 1.15rem; font-weight: 700; color: var(--text-primary); border-top: 1px solid var(--border-color); padding-top: 0.65rem; margin-top: 0.25rem;">
          <span>Final Total:</span>
          <span id="edit-sale-summary-final" style="color: var(--brand-primary);">₹0</span>
        </div>
      </div>
    </div>

    <!-- SECTION D: STICKY ACTIONS BAR -->
    <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-color); padding-top: 1.25rem; flex-wrap: wrap; gap: 0.75rem;">
      <button type="button" id="btn-edit-sale-cancel" class="btn btn-secondary" style="font-weight: 600;">
        Back / Cancel
      </button>

      <button type="button" id="btn-edit-sale-save" class="btn btn-primary" style="display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.65rem 1.5rem; font-weight: 600;">
        <i data-lucide="save" style="width: 16px; height: 16px;"></i>
        <span>Save Changes</span>
      </button>
    </div>
  `;

  container.appendChild(mainCard);

  const itemsContainer = mainCard.querySelector('#edit-sale-items-container');

  function updateTotals() {
    let subtotal = 0;
    editSaleItems.forEach(it => {
      const q = parseInt(it.qty, 10) || 0;
      const p = parseFloat(it.sellingPrice) || 0;
      subtotal += (q * p);
    });

    const disc = Math.max(0, parseFloat(mainCard.querySelector('#edit-sale-discount-input').value) || 0);
    const finalTot = Math.max(0, subtotal - disc);

    mainCard.querySelector('#edit-sale-summary-subtotal').textContent = `₹${Math.round(subtotal).toLocaleString()}`;
    mainCard.querySelector('#edit-sale-summary-final').textContent = `₹${Math.round(finalTot).toLocaleString()}`;
  }

  function renderSaleItems() {
    itemsContainer.innerHTML = '';

    editSaleItems.forEach((it, idx) => {
      const row = document.createElement('div');
      row.className = 'card';
      row.style.cssText = 'padding: 1rem; background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-md); display: flex; flex-direction: column; gap: 0.75rem;';

      const prod = productsList.find(p => p.id === it.productId) || productsList[0];
      const variants = (prod && Array.isArray(prod.variants)) ? prod.variants : [];
      const effectiveAvail = getEffectiveAvailableStock(it.productId, it.size);
      const lineTotal = (parseInt(it.qty, 10) || 0) * (parseFloat(it.sellingPrice) || 0);

      row.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem;">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <span style="font-weight: 700; color: var(--brand-primary); font-size: 0.85rem;">#${idx + 1}</span>
            <span style="font-weight: 600; color: var(--text-primary); font-size: 0.9rem;">${escapeHtml(prod ? prod.name : 'Select Product')}</span>
            <span class="badge ${effectiveAvail > 0 ? 'badge-secondary' : 'badge-danger'}" style="font-size: 0.7rem; padding: 0.1rem 0.4rem;">
              ${effectiveAvail} available
            </span>
          </div>

          ${editSaleItems.length > 1 ? `
            <button type="button" class="btn btn-ghost btn-sm remove-sale-item-btn" style="color: var(--status-danger); padding: 0.2rem 0.5rem;" title="Remove Item">
              <i data-lucide="trash-2" style="width: 15px; height: 15px;"></i>
            </button>
          ` : ''}
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 0.75rem;">
          <div class="form-group">
            <label class="form-label" style="font-size: 0.8rem; font-weight: 600;">Product <span style="color: var(--status-danger);">*</span></label>
            <select class="form-select sale-prod-select">
              ${productsList.map(p => `<option value="${p.id}" ${p.id === it.productId ? 'selected' : ''}>${escapeHtml(p.name)} (${p.brand || ''})</option>`).join('')}
            </select>
          </div>

          <div class="form-group">
            <label class="form-label" style="font-size: 0.8rem; font-weight: 600;">Size Variant</label>
            <select class="form-select sale-size-select">
              ${variants.map(v => `<option value="${escapeHtml(v.size || 'Standard')}" ${(v.size || 'Standard') === it.size ? 'selected' : ''}>${escapeHtml(v.size || 'Standard')}</option>`).join('')}
              ${variants.length === 0 ? '<option value="Standard" selected>Standard</option>' : ''}
            </select>
          </div>

          <div class="form-group">
            <label class="form-label" style="font-size: 0.8rem; font-weight: 600;">Available Stock</label>
            <input type="text" class="form-input sale-avail-display" value="${effectiveAvail} units" disabled style="background: var(--bg-surface); color: ${effectiveAvail > 0 ? 'var(--text-primary)' : 'var(--status-danger)'};">
          </div>

          <div class="form-group">
            <label class="form-label" style="font-size: 0.8rem; font-weight: 600;">Quantity <span style="color: var(--status-danger);">*</span></label>
            <input type="number" class="form-input sale-qty-input" min="1" step="1" value="${it.qty !== undefined ? it.qty : 1}">
          </div>

          <div class="form-group">
            <label class="form-label" style="font-size: 0.8rem; font-weight: 600;">Unit Selling Price (₹) <span style="color: var(--status-danger);">*</span></label>
            <input type="number" class="form-input sale-price-input" min="0" step="any" value="${it.sellingPrice !== undefined ? it.sellingPrice : 0}">
          </div>

          <div class="form-group">
            <label class="form-label" style="font-size: 0.8rem; font-weight: 600;">Item Total</label>
            <input type="text" class="form-input sale-tot-display" value="₹${Math.round(lineTotal).toLocaleString()}" disabled style="background: var(--bg-surface); font-weight: 700; color: var(--text-primary);">
          </div>
        </div>
      `;

      const prodSelect = row.querySelector('.sale-prod-select');
      const sizeSelect = row.querySelector('.sale-size-select');
      const qtyInp = row.querySelector('.sale-qty-input');
      const priceInp = row.querySelector('.sale-price-input');
      const totDisplay = row.querySelector('.sale-tot-display');
      const availDisplay = row.querySelector('.sale-avail-display');

      prodSelect.addEventListener('change', (e) => {
        it.productId = e.target.value;
        const newP = productsList.find(p => p.id === it.productId);
        if (newP && Array.isArray(newP.variants) && newP.variants.length > 0) {
          it.size = newP.variants[0].size || 'Standard';
          it.sellingPrice = newP.variants[0].sellingPrice || newP.sellingPrice || 0;
        } else if (newP) {
          it.size = 'Standard';
          it.sellingPrice = newP.sellingPrice || 0;
        }
        markChanged();
        renderSaleItems();
        updateTotals();
      });

      sizeSelect.addEventListener('change', (e) => {
        it.size = e.target.value;
        const curP = productsList.find(p => p.id === it.productId);
        if (curP && Array.isArray(curP.variants)) {
          const matchedV = curP.variants.find(v => (v.size || 'Standard') === it.size);
          if (matchedV && matchedV.sellingPrice > 0) {
            it.sellingPrice = matchedV.sellingPrice;
            priceInp.value = it.sellingPrice;
          }
        }
        const newAvail = getEffectiveAvailableStock(it.productId, it.size);
        availDisplay.value = `${newAvail} units`;
        availDisplay.style.color = newAvail > 0 ? 'var(--text-primary)' : 'var(--status-danger)';
        markChanged();
        updateTotals();
      });

      const recomputeSaleRow = () => {
        it.qty = parseInt(qtyInp.value, 10) || 0;
        it.sellingPrice = parseFloat(priceInp.value) || 0;
        const curLine = (it.qty * it.sellingPrice);
        totDisplay.value = `₹${Math.round(curLine).toLocaleString()}`;
        markChanged();
        updateTotals();
      };

      qtyInp.addEventListener('input', recomputeSaleRow);
      priceInp.addEventListener('input', recomputeSaleRow);

      const removeBtn = row.querySelector('.remove-sale-item-btn');
      if (removeBtn) {
        removeBtn.addEventListener('click', () => {
          editSaleItems.splice(idx, 1);
          markChanged();
          renderSaleItems();
          updateTotals();
        });
      }

      itemsContainer.appendChild(row);
    });

    if (window.lucide) window.lucide.createIcons();
  }

  mainCard.querySelector('#btn-edit-sale-add-item').addEventListener('click', () => {
    const firstP = productsList[0] || {};
    editSaleItems.push({
      id: 'sitem_' + Date.now() + '_' + editSaleItems.length,
      productId: firstP.id || '',
      size: (firstP.variants && firstP.variants[0]) ? firstP.variants[0].size : 'Standard',
      qty: 1,
      sellingPrice: firstP.sellingPrice || 0
    });
    markChanged();
    renderSaleItems();
    updateTotals();
  });

  mainCard.querySelectorAll('#edit-sale-cust-name, #edit-sale-cust-phone, #edit-sale-date, #edit-sale-pay-method, #edit-sale-pay-status').forEach(el => {
    el.addEventListener('input', markChanged);
    el.addEventListener('change', markChanged);
  });

  mainCard.querySelector('#edit-sale-discount-input').addEventListener('input', () => {
    markChanged();
    updateTotals();
  });

  mainCard.querySelector('#btn-edit-sale-cancel').addEventListener('click', async () => {
    if (hasUnsavedChanges) {
      const leave = await uiConfirm({ title: 'Discard unsaved changes?', message: 'You have unsaved changes. Are you sure you want to discard them and return to Sales?', confirmText: 'Discard changes', variant: 'danger' });
      if (!leave) return;
    }
    if (onNavigate) onNavigate('sales');
  });

  mainCard.querySelector('#btn-edit-sale-save').addEventListener('click', async () => {
    const custName = mainCard.querySelector('#edit-sale-cust-name').value.trim();
    const custPhone = mainCard.querySelector('#edit-sale-cust-phone').value.trim();
    const saleDate = mainCard.querySelector('#edit-sale-date').value.trim();
    const payMethod = mainCard.querySelector('#edit-sale-pay-method').value;
    const payStatus = mainCard.querySelector('#edit-sale-pay-status').value;
    const discount = parseFloat(mainCard.querySelector('#edit-sale-discount-input').value) || 0;

    if (!custName) {
      toast.show({ message: 'Customer Name is required.', type: 'danger' });
      mainCard.querySelector('#edit-sale-cust-name').focus();
      return;
    }

    if (editSaleItems.length === 0) {
      toast.show({ message: 'Sale must have at least one product item.', type: 'danger' });
      return;
    }

    for (let i = 0; i < editSaleItems.length; i++) {
      const it = editSaleItems[i];
      if (!it.productId) {
        toast.show({ message: `Please select a product for item #${i + 1}.`, type: 'danger' });
        return;
      }
      if (isNaN(it.qty) || it.qty <= 0) {
        toast.show({ message: `Quantity must be greater than 0 for item #${i + 1}.`, type: 'danger' });
        return;
      }
      if (isNaN(it.sellingPrice) || it.sellingPrice < 0) {
        toast.show({ message: `Selling price cannot be negative for item #${i + 1}.`, type: 'danger' });
        return;
      }
    }

    // Editing a sale below what has already been collected leaves an
    // overpayment. Payments are never rewritten, so say so before saving.
    const alreadyPaid = (Array.isArray(sale.payments) ? sale.payments : []).reduce((a, pm) => a + (Number(pm.amount) || 0), 0);
    const newTotal = Math.max(0, editSaleItems.reduce((a, it) => a + (Number(it.sellingPrice) || 0) * (parseInt(it.qty, 10) || 0), 0) - discount);
    if (alreadyPaid - newTotal > 0.005) {
      const excess = Math.round((alreadyPaid - newTotal) * 100) / 100;
      const proceed = await uiConfirm({
        title: 'This sale will be overpaid',
        message: `₹${alreadyPaid.toLocaleString('en-IN')} has already been paid, but the new sale total is ₹${newTotal.toLocaleString('en-IN')}.\n\nThe sale will be marked Overpaid by ₹${excess.toLocaleString('en-IN')}. Payment history is kept as recorded and the excess is not applied to any other sale.`,
        confirmText: 'Save as Overpaid',
        variant: 'danger'
      });
      if (!proceed) return;
    }

    try {
      const updated = store.updateSale(sale.id, {
        customerName: custName,
        customerPhone: custPhone,
        date: saleDate,
        paymentMethod: payMethod,
        paymentStatus: payStatus,
        discount: discount,
        items: editSaleItems
      });
      hasUnsavedChanges = false;
      if (updated && Number(updated.overpaidAmount || 0) > 0) {
        toast.show({ message: `Sale ${sale.id} updated. Overpaid by ₹${Number(updated.overpaidAmount).toLocaleString('en-IN')}.`, type: 'warning', duration: 5000 });
      } else {
        toast.show({ message: `Sale ${sale.id} updated successfully!`, type: 'success' });
      }
      if (onNavigate) onNavigate('sales');
    } catch (err) {
      toast.show({ message: err.message || 'Error updating sale.', type: 'danger' });
    }
  });

  renderSaleItems();
  updateTotals();

  if (window.lucide) window.lucide.createIcons();
  return container;
}

// SALES PAGE (Standardized with Purchases Table UI)
function renderSales(params = {}, onNavigate = null) {
  if (params && params.action === 'edit') {
    return renderEditSalePage(params, onNavigate);
  }
  if (params && params.action === 'view') {
    return renderViewSalePage(params, onNavigate);
  }
  if (params && params.action === 'payment') {
    return renderRecordPaymentPage(params, onNavigate);
  }
  if (params && (params.action === 'add' || params.view === 'add')) {
    return renderAddSalePage(onNavigate);
  }

  const container = document.createElement('div');
  container.className = 'page-container';

  // Reports links here with ?filter=unpaid so the figure leads to the sales behind it.
  let currentFilter = (params && params.filter) ? String(params.filter) : 'all'; // 'all', 'paid', 'partial', 'pending', 'unpaid'
  let searchQuery = '';
  let salesCurrentPage = 1;
  let salesPageSize = 5;

  // 1. Header (Breadcrumb + "+ Add Sale" button)
  const headerDiv = document.createElement('div');
  headerDiv.style.cssText = 'display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.25rem;';
  headerDiv.appendChild(createBreadcrumb([
    { label: 'Sales' }
  ], onNavigate));

  const btnAddSale = createButton({
    text: 'Add Sale',
    icon: 'plus',
    variant: 'primary',
    size: 'sm',
    onClick: () => { if (onNavigate) onNavigate('sales', { action: 'add' }); }
  });
  headerDiv.appendChild(btnAddSale);
  container.appendChild(headerDiv);

  // 2. Main Card with Status Filters & Sales Table
  const mainCard = document.createElement('div');
  mainCard.className = 'card';
  mainCard.style.cssText = 'display: flex; flex-direction: column; gap: 1.25rem;';

  mainCard.innerHTML = `
    <!-- Top Filter Bar -->
    <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
      <div style="display: flex; gap: 0.4rem; flex-wrap: wrap;" id="sales-status-filters">
        <button type="button" class="btn btn-sm sales-filter-btn" data-filter="all" style="font-weight: 600;">All Sales</button>
        <button type="button" class="btn btn-sm sales-filter-btn" data-filter="paid" style="font-weight: 600;">Paid</button>
        <button type="button" class="btn btn-sm sales-filter-btn" data-filter="partial" style="font-weight: 600;">Partial</button>
        <button type="button" class="btn btn-sm sales-filter-btn" data-filter="pending" style="font-weight: 600;">Pending</button>
        <button type="button" class="btn btn-sm sales-filter-btn" data-filter="unpaid" style="font-weight: 600;">Unpaid (Balance Due)</button>
      </div>

      <div class="search-input-wrapper" style="max-width: 280px; width: 100%;">
        <i data-lucide="search" class="search-icon"></i>
        <input type="text" class="form-input search-input" id="sales-search-input" placeholder="Search reference, customer..." style="padding-left: 2.25rem; font-size: 0.85rem;">
      </div>
    </div>

    <!-- Sales Table Container -->
    <div class="table-responsive" style="border: 1px solid var(--border-color); border-radius: var(--radius-sm);">
      <table class="admin-table" style="font-size: 0.875rem;">
        <thead>
          <tr>
            <th style="width: 6%; text-align: center;">S.No</th>
            <th style="width: 18%;">Sale Reference</th>
            <th style="width: 24%;">Customer</th>
            <th style="width: 14%;">Date</th>
            <th style="width: 14%;">Total Amount</th>
            <th style="width: 12%;">Payment Status</th>
            <th style="width: 12%; text-align: right;">Actions</th>
          </tr>
        </thead>
        <tbody id="sales-table-tbody"></tbody>
      </table>
    </div>

    <!-- Pagination Footer -->
    <div id="sales-pagination-container"></div>
  `;
  container.appendChild(mainCard);

  function renderSalesTable() {
    const tbody = mainCard.querySelector('#sales-table-tbody');
    tbody.innerHTML = '';

    const allSales = store.data.sales || [];

    const filtered = allSales.filter(s => {
      const statusLower = (s.status || 'paid').toLowerCase();

      // Status Filter
      if (currentFilter === 'paid' && statusLower !== 'paid' && statusLower !== 'completed' && statusLower !== 'overpaid') return false;
      if (currentFilter === 'partial' && statusLower !== 'partial') return false;
      if (currentFilter === 'pending' && statusLower !== 'pending') return false;
      // Anything still owing money, whatever its status label.
      if (currentFilter === 'unpaid' && !(Number(s.balanceDue || 0) > 0)) return false;

      // Search Query
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const refMatch = (s.id || '').toLowerCase().includes(q) || (s.reference || '').toLowerCase().includes(q);
        const custMatch = (s.customer || '').toLowerCase().includes(q) || (s.customerName || '').toLowerCase().includes(q);
        const phoneMatch = (s.phone || '').toLowerCase().includes(q);
        const dateMatch = (s.date || '').toLowerCase().includes(q);
        if (!refMatch && !custMatch && !phoneMatch && !dateMatch) return false;
      }

      return true;
    });

    if (filtered.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: var(--text-secondary); padding: 2.5rem 1rem;">No sales found matching filter.</td></tr>`;
      renderPaginationBar({
        container: mainCard.querySelector('#sales-pagination-container'),
        totalItems: 0
      });
      return;
    }

    const totalPages = Math.max(1, Math.ceil(filtered.length / salesPageSize));
    if (salesCurrentPage > totalPages) salesCurrentPage = totalPages;
    if (salesCurrentPage < 1) salesCurrentPage = 1;

    const startIdx = (salesCurrentPage - 1) * salesPageSize;
    const endIdx = Math.min(startIdx + salesPageSize, filtered.length);
    const pageSales = filtered.slice(startIdx, endIdx);

    pageSales.forEach((s, index) => {
      const tr = document.createElement('tr');
      tr.style.cssText = 'transition: background-color 0.15s ease;';

      const status = s.status || 'Paid';
      const badgeVariant = getStatusBadgeVariant(status);

      const saleRef = s.id || s.reference || `SAL-${String(index + 1).padStart(2, '0')}`;
      const custName = s.customer || s.customerName || 'Walk-in Customer';

      tr.innerHTML = `
        <td style="font-weight: 600; color: var(--text-secondary); text-align: center;">${startIdx + index + 1}</td>
        <td style="font-weight: 600; color: var(--text-primary);">${escapeHtml(saleRef)}</td>
        <td>
          <div style="font-weight: 600; color: var(--text-primary);">${escapeHtml(custName)}</div>
          ${s.phone ? `<div style="font-size: 0.75rem; color: var(--text-secondary);">${escapeHtml(s.phone)}</div>` : ''}
        </td>
        <td style="color: var(--text-secondary);">${s.date || '-'}</td>
        <td style="font-weight: 700; color: var(--text-primary);">
          ₹${(s.totalAmount || 0).toLocaleString()}
          ${Number(s.balanceDue || 0) > 0 ? `<div style="font-size: 0.75rem; font-weight: 600; color: var(--status-warning-text); margin-top: 2px;">₹${Number(s.balanceDue).toLocaleString('en-IN')} due</div>` : ''}
          ${Number(s.overpaidAmount || 0) > 0 ? `<div style="font-size: 0.75rem; font-weight: 600; color: var(--status-danger); margin-top: 2px;" title="More has been collected than the sale total. No refund has been recorded.">₹${Number(s.overpaidAmount).toLocaleString('en-IN')} overpaid</div>` : ''}
        </td>
        <td>
          ${createBadge({ label: status, variant: badgeVariant }).outerHTML}
          ${s.paymentsNeedReview ? `<div style="font-size: 0.7rem; font-weight: 600; color: var(--status-warning-text); margin-top: 3px;" title="This sale was recorded as Partial before payment amounts were tracked. Record the amount actually paid.">Amount needs review</div>` : ''}
        </td>
        <td style="text-align: right;">
          <div style="display: flex; gap: 0.35rem; justify-content: flex-end;" class="row-actions-box">
            ${Number(s.balanceDue || 0) > 0 && status !== 'Cancelled' && status !== 'Failed' ? `
              <button type="button" class="btn btn-sm btn-primary table-action-btn record-payment-btn" data-sale-id="${s.id || ''}" title="Record Payment" aria-label="Record Payment">
                <i data-lucide="wallet"></i>
                <span class="sr-only">Record Payment</span>
              </button>
            ` : ''}
            <button type="button" class="btn btn-sm btn-secondary table-action-btn view-sale-btn" data-sale-id="${s.id || ''}" title="View" aria-label="View">
              <i data-lucide="eye"></i>
              <span class="sr-only">View</span>
            </button>
            <button type="button" class="btn btn-sm btn-secondary table-action-btn edit-sale-btn" data-sale-id="${s.id || ''}" title="Edit" aria-label="Edit">
              <i data-lucide="pencil"></i>
              <span class="sr-only">Edit</span>
            </button>
            <button type="button" class="btn btn-sm btn-ghost table-action-btn delete-sale-btn" data-sale-id="${s.id || ''}" title="Delete" aria-label="Delete" style="color: var(--status-danger);">
              <i data-lucide="trash-2"></i>
              <span class="sr-only">Delete</span>
            </button>
          </div>
        </td>
      `;



      const recordPayBtn = tr.querySelector('.record-payment-btn');
      if (recordPayBtn) {
        recordPayBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          if (onNavigate) onNavigate('sales', { action: 'payment', saleId: s.id });
        });
      }

      tr.querySelector('.view-sale-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        if (onNavigate) onNavigate('sales', { action: 'view', saleId: s.id });
        else openSaleDetailsModal(s);
      });

      const editSaleBtn = tr.querySelector('.edit-sale-btn');
      if (editSaleBtn) {
        editSaleBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          if (onNavigate) onNavigate('sales', { action: 'edit', saleId: s.id });
        });
      }

      const deleteSaleBtn = tr.querySelector('.delete-sale-btn');
      if (deleteSaleBtn) {
        deleteSaleBtn.addEventListener('click', async (e) => {
          e.stopPropagation();
          const confirmed = await uiConfirm({ title: 'Confirm deletion', message: `Are you sure you want to delete sale "${saleRef}"?\n\nThis will restore deducted inventory quantities and recalculate customer metrics.\n\nThis action cannot be undone.`, confirmText: 'Delete', variant: 'danger' });
          if (confirmed) {
            try {
              store.deleteSale(s.id);
              toast.show({ message: `Sale ${saleRef} deleted successfully.`, type: 'info' });
              renderSalesTable();
            } catch (err) {
              toast.show({ message: err.message, type: 'danger' });
            }
          }
        });
      }

      tbody.appendChild(tr);
    });

    renderPaginationBar({
      container: mainCard.querySelector('#sales-pagination-container'),
      totalItems: filtered.length,
      currentPage: salesCurrentPage,
      pageSize: salesPageSize,
      pageSizeOptions: [5, 10, 25, 50],
      itemName: 'sales',
      onPageChange: (newPage) => {
        salesCurrentPage = newPage;
        renderSalesTable();
      },
      onPageSizeChange: (newSize) => {
        salesPageSize = newSize;
        salesCurrentPage = 1;
        renderSalesTable();
      }
    });

    if (window.lucide) window.lucide.createIcons();
  }

  // Filter Buttons logic
  function updateFilterButtons() {
    mainCard.querySelectorAll('.sales-filter-btn').forEach(btn => {
      const f = btn.dataset.filter;
      if (f === currentFilter) {
        btn.style.backgroundColor = 'var(--brand-primary)';
        btn.style.color = 'var(--brand-text)';
        btn.style.borderColor = 'var(--brand-primary)';
      } else {
        btn.style.backgroundColor = 'var(--bg-secondary)';
        btn.style.color = 'var(--text-secondary)';
        btn.style.borderColor = 'var(--border-color)';
      }
    });
    renderSalesTable();
  }

  mainCard.querySelectorAll('.sales-filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      currentFilter = e.currentTarget.dataset.filter;
      salesCurrentPage = 1;
      updateFilterButtons();
    });
  });

  const searchInput = mainCard.querySelector('#sales-search-input');
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim();
    salesCurrentPage = 1;
    renderSalesTable();
  });

  updateFilterButtons();
  return container;
}

// ADD SALE PAGE
function renderAddSalePage(onNavigate = null) {
  const container = document.createElement('div');
  container.className = 'page-container';

  // Breadcrumb Header (Sales / Add Sale)
  const headerDiv = document.createElement('div');
  headerDiv.style.cssText = 'display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;';
  headerDiv.appendChild(createBreadcrumb([
    { label: 'Sales', target: 'sales' },
    { label: 'Add Sale' }
  ], onNavigate));
  container.appendChild(headerDiv);

  const mainCard = document.createElement('div');
  mainCard.className = 'card';
  mainCard.style.cssText = 'display: flex; flex-direction: column; gap: 1.5rem; width: 100%;';

  function getVariantDetails(prod, size) {
    if (!prod) {
      return { variant: null, availStock: 0, sellingPrice: 0, hasSizes: false };
    }
    const variants = Array.isArray(prod.variants) ? prod.variants : [];
    const hasSizes = variants.length > 0 && variants.some(v => v.size && v.size !== 'Standard');
    
    let variant = null;
    if (hasSizes) {
      variant = variants.find(v => v.size === size) || variants[0] || null;
    } else if (variants.length > 0) {
      variant = variants[0];
    }

    let availStock = 0;
    if (variant) {
      availStock = typeof variant.stock === 'number' ? variant.stock : 0;
    } else {
      availStock = typeof prod.totalStock === 'number' ? prod.totalStock : 0;
    }

    let sellingPrice = 0;
    if (variant && typeof variant.sellingPrice === 'number' && variant.sellingPrice > 0) {
      sellingPrice = variant.sellingPrice;
    } else if (typeof prod.sellingPrice === 'number' && prod.sellingPrice > 0) {
      sellingPrice = prod.sellingPrice;
    }

    return { variant, availStock, sellingPrice, hasSizes };
  }

  function createProductGroup(defaultProductId = null) {
    const prods = (store.data.products || []).filter(p => p && p.status !== 'Archived' && p.status !== 'Inactive');
    let p = null;
    if (defaultProductId) {
      p = prods.find(x => x.id === defaultProductId);
    } else if (defaultProductId !== '') {
      const usedIds = new Set(productsData.map(pd => pd.productId));
      p = prods.find(x => !usedIds.has(x.id)) || prods[0];
    }

    const pBrand = p ? (p.brand || '').trim() : '';
    const pCat = p ? (p.category || 'General') : 'General';
    const hasVariants = p && Array.isArray(p.variants) && p.variants.length > 0;
    const defaultSize = hasVariants ? p.variants[0].size : (p ? 'Standard' : '');

    return {
      id: 'sprod_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6),
      productId: p ? p.id : '',
      productName: p ? p.name : '',
      brand: pBrand,
      category: pCat,
      searchQuery: '',
      isExpanded: true,
      sizes: [
        {
          id: 'ssize_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6),
          size: defaultSize,
          qty: 1
        }
      ]
    };
  }

  let productsData = [];
  productsData.push(createProductGroup());

  mainCard.innerHTML = `
    <!-- SECTION A: CUSTOMER -->
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <h3 style="font-size: 1.05rem; font-weight: 600; margin: 0; color: var(--text-primary); border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem;">
        Customer Information
      </h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem;">
        <div class="form-group">
          <label class="form-label" style="font-weight: 500;">Customer Name <span style="color: var(--status-danger);">*</span></label>
          <input type="text" id="sale-cust-name" class="form-input" placeholder="e.g. Sneha Patel" value="Walk-in Customer">
          <div id="sale-cust-name-error" class="field-error" style="display: none;"></div>
        </div>
        <div class="form-group">
          <label class="form-label" style="font-weight: 500;">Phone Number</label>
          <input type="text" id="sale-cust-phone" class="form-input" placeholder="e.g. +91 98765 43210">
        </div>
      </div>
    </div>

    <!-- SECTION B: PRODUCT & SIZE-WISE ITEMS (Grouped by Product) -->
    <div style="display: flex; flex-direction: column; gap: 0.85rem;">
      <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
        <div>
          <h3 style="font-size: 1.05rem; font-weight: 600; margin: 0; color: var(--text-primary); display: flex; align-items: center; gap: 0.5rem;">
            <i data-lucide="boxes" style="width: 18px; height: 18px; color: var(--brand-primary);"></i>
            Product & Size-wise Items
          </h3>
          <p style="font-size: 0.8rem; color: var(--text-secondary); margin: 0.2rem 0 0 0;">
            Group sales items by product. Select product details once and add multiple size/variant sales entries.
          </p>
        </div>
      </div>

      <!-- Items List Container -->
      <div id="sale-items-container" style="display: flex; flex-direction: column; gap: 0.75rem;"></div>

      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; padding-top: 0.5rem;">
        <button type="button" id="btn-add-sale-product" class="btn btn-secondary btn-sm" style="display: inline-flex; align-items: center; gap: 0.35rem; font-weight: 600;">
          <i data-lucide="plus" style="width: 14px; height: 14px;"></i>
          <span>Add Another Product</span>
        </button>
      </div>
    </div>

    <!-- SECTION C: PAYMENT & SUMMARY -->
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; border-top: 1px solid var(--border-color); padding-top: 1.25rem;">
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <h4 style="font-size: 0.95rem; font-weight: 600; margin: 0; color: var(--text-primary);">Payment Details</h4>
        <div class="form-group">
          <label class="form-label" style="font-weight: 500;">Payment Method</label>
          <select id="sale-pay-method" class="form-select">
            <option value="Cash">Cash</option>
            <option value="UPI" selected>UPI</option>
            <option value="Card">Card</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label" style="font-weight: 500;">Payment Status</label>
          <select id="sale-pay-status" class="form-select">
            <option value="Paid" selected>Paid</option>
            <option value="Pending">Pending</option>
            <option value="Partial">Partial</option>
          </select>
        </div>
        <div class="form-group" id="sale-amount-paid-group">
          <label class="form-label" for="sale-amount-paid" style="font-weight: 500;">Amount Paid Now (₹)</label>
          <input type="number" id="sale-amount-paid" class="form-input" min="0" step="0.01" placeholder="0.00">
          <div id="sale-amount-paid-error" class="field-error" style="display: none;"></div>
          <div id="sale-balance-hint" style="font-size: 0.775rem; color: var(--text-secondary); margin-top: 0.3rem;">Balance due will be calculated from the final total.</div>
        </div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.85rem; background: var(--bg-secondary); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
        <h4 style="font-size: 0.95rem; font-weight: 600; margin: 0; color: var(--text-primary);">Sale Summary</h4>
        <div style="display: flex; justify-content: space-between; font-size: 0.9rem;">
          <span style="color: var(--text-secondary);">Subtotal:</span>
          <strong id="summary-subtotal" style="color: var(--text-primary);">₹0</strong>
        </div>
        <div style="display: flex; flex-direction: column; gap: 0.25rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.9rem;">
            <span style="color: var(--text-secondary);">Discount (₹):</span>
            <input type="number" id="sale-discount-input" class="form-input" min="0" value="0" style="width: 90px; padding: 0.25rem 0.5rem; text-align: right; font-size: 0.85rem;">
          </div>
          <div id="sale-discount-error" class="field-error" style="display: none; text-align: right;"></div>
        </div>
        <div style="display: flex; justify-content: space-between; font-size: 1.1rem; font-weight: 700; color: var(--text-primary); border-top: 1px solid var(--border-color); padding-top: 0.65rem; margin-top: 0.25rem;">
          <span>Final Total:</span>
          <span id="summary-final-total" style="color: var(--text-primary);">₹0</span>
        </div>
      </div>
    </div>

    <!-- SECTION D: ACTION BUTTONS -->
    <div style="display: flex; justify-content: flex-end; gap: 0.75rem; border-top: 1px solid var(--border-color); padding-top: 1.25rem;">
      <button type="button" id="btn-cancel-sale" class="btn btn-secondary">Cancel</button>
      <button type="button" id="btn-complete-sale" class="btn btn-primary" style="padding: 0.65rem 1.5rem;">
        Complete Sale
      </button>
    </div>
  `;

  container.appendChild(mainCard);

  const itemsContainer = mainCard.querySelector('#sale-items-container');

  function updateSaleSummary(source) {
    let subtotal = 0;
    const prods = store.data.products || [];

    productsData.forEach(prod => {
      const realProd = prods.find(p => p.id === prod.productId);
      let prodUnits = 0;
      let prodTotal = 0;

      (prod.sizes || []).forEach(sz => {
        const q = parseInt(sz.qty, 10) || 0;
        const details = getVariantDetails(realProd, sz.size);
        const lineTotal = q * (details.sellingPrice || 0);
        prodUnits += q;
        prodTotal += lineTotal;
        subtotal += lineTotal;

        const sizeRowEl = mainCard.querySelector(`[data-size-id="${sz.id}"]`);
        if (sizeRowEl) {
          const totalEl = sizeRowEl.querySelector('.sale-total-display');
          if (totalEl) totalEl.value = `₹${lineTotal.toLocaleString('en-IN')}`;
          
          const stockEl = sizeRowEl.querySelector('.sale-stock-display');
          if (stockEl) {
            stockEl.value = `${details.availStock} units`;
            stockEl.style.color = details.availStock === 0 ? 'var(--status-danger)' : 'var(--text-primary)';
          }

          const priceEl = sizeRowEl.querySelector('.sale-price-display');
          if (priceEl) priceEl.value = `₹${details.sellingPrice.toLocaleString('en-IN')}`;

          const errEl = sizeRowEl.querySelector('.sale-qty-error');
          const isOver = (q > details.availStock) || (details.availStock === 0 && q > 0);
          const qtyInp = sizeRowEl.querySelector('.sale-qty-input');
          if (qtyInp) {
            if (isOver) {
              qtyInp.classList.add('is-invalid');
              qtyInp.style.borderColor = 'var(--status-danger)';
            } else if (q > 0) {
              qtyInp.classList.remove('is-invalid');
              qtyInp.style.borderColor = '';
              qtyInp.style.background = '';
              qtyInp.style.color = '';
            }
          }
          if (errEl) {
            if (isOver) {
              errEl.textContent = details.availStock === 0 ? 'Out of stock.' : `Only ${details.availStock} units are available.`;
              errEl.style.display = 'block';
            } else if (q > 0) {
              errEl.textContent = '';
              errEl.style.display = 'none';
            }
          }
        }
      });

      const sectionEl = mainCard.querySelector(`[data-product-id="${prod.id}"]`);
      if (sectionEl) {
        const subtotalEl = sectionEl.querySelector('.sale-prod-subtotal');
        if (subtotalEl) {
          subtotalEl.innerHTML = `Subtotal: <strong>${prodUnits} units</strong> · <strong style="color: var(--brand-primary);">₹${prodTotal.toLocaleString('en-IN')}</strong>`;
        }
        const titlePreviewEl = sectionEl.querySelector('.sale-prod-title-preview');
        if (titlePreviewEl) {
          titlePreviewEl.textContent = (prod.productName && prod.productName.trim()) ? prod.productName.trim() : 'Select Product';
        }
      }
    });

    const discountVal = parseFloat(mainCard.querySelector('#sale-discount-input').value) || 0;
    const finalTotal = Math.max(0, subtotal - discountVal);

    const sumSubtotalEl = mainCard.querySelector('#summary-subtotal');
    const sumFinalEl = mainCard.querySelector('#summary-final-total');
    if (sumSubtotalEl) sumSubtotalEl.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
    if (sumFinalEl) sumFinalEl.textContent = `₹${finalTotal.toLocaleString('en-IN')}`;

    updatePaymentFields(finalTotal, source);
  }

  /**
   * Amount Paid is always visible and kept in step with the status dropdown.
   *
   * Picking a status fills the amount (Paid = the full total, Pending = 0),
   * and typing an amount re-derives the status, so the two can never disagree
   * and neither control is hidden behind the other.
   */
  function updatePaymentFields(finalTotal, source) {
    const statusEl = mainCard.querySelector('#sale-pay-status');
    const paidEl = mainCard.querySelector('#sale-amount-paid');
    const hintEl = mainCard.querySelector('#sale-balance-hint');
    if (!statusEl || !paidEl) return;

    if (source === 'status') {
      // The operator chose a status: fill the amount to match.
      if (statusEl.value === 'Paid') paidEl.value = finalTotal > 0 ? finalTotal : '';
      else if (statusEl.value === 'Pending') paidEl.value = '0';
      else if (paidEl.value === '' || Number(paidEl.value) <= 0 || Number(paidEl.value) >= finalTotal) paidEl.value = '';
    } else if (source === 'amount') {
      // The operator typed an amount: derive the status from it.
      const v = parseFloat(paidEl.value);
      if (!isFinite(v) || v <= 0) statusEl.value = 'Pending';
      else if (v + 0.005 < finalTotal) statusEl.value = 'Partial';
      else statusEl.value = 'Paid';
    } else if (statusEl.value === 'Paid' && (paidEl.value === '' || Number(paidEl.value) !== finalTotal)) {
      // Totals changed while "Paid" is selected: keep the amount at the total.
      paidEl.value = finalTotal > 0 ? finalTotal : '';
    }

    const paid = parseFloat(paidEl.value);
    if (!hintEl) return;

    if (!isFinite(paid) || paid <= 0) {
      hintEl.textContent = finalTotal > 0
        ? `Nothing paid yet — full ₹${finalTotal.toLocaleString('en-IN')} will be outstanding.`
        : 'Enter how much the customer is paying now.';
      hintEl.style.color = 'var(--text-secondary)';
    } else if (paid - finalTotal > 0.005) {
      hintEl.textContent = `Amount paid cannot exceed the final total of ₹${finalTotal.toLocaleString('en-IN')}.`;
      hintEl.style.color = 'var(--status-danger)';
    } else {
      const bal = Math.round((finalTotal - paid) * 100) / 100;
      hintEl.textContent = bal > 0
        ? `Balance due: ₹${bal.toLocaleString('en-IN')} — the sale will be saved as Partial.`
        : 'Paid in full — no balance outstanding.';
      hintEl.style.color = bal > 0 ? 'var(--status-warning-text)' : 'var(--status-success)';
    }
  }

  function renderSaleItems() {
    itemsContainer.innerHTML = '';
    const prods = (store.data.products || []).filter(p => p && p.status !== 'Archived' && p.status !== 'Inactive');
    const brands = Array.from(
      new Set(prods.map(p => (p.brand || '').trim()).filter(Boolean))
    ).sort((a, b) => a.localeCompare(b));

    if (productsData.length === 0) {
      productsData.push(createProductGroup());
    }

    productsData.forEach((prod, pIdx) => {
      let candidateProducts = prods;

      const selectedProd = prod.productId ? (prods.find(p => p.id === prod.productId) || null) : null;
      if (selectedProd) {
        prod.productName = selectedProd.name;
        prod.category = selectedProd.category || 'General';
        if (!prod.brand && selectedProd.brand) {
          prod.brand = selectedProd.brand.trim();
        }
      } else {
        prod.productName = '';
        prod.category = '—';
      }

      const hasSizes = selectedProd && Array.isArray(selectedProd.variants) && selectedProd.variants.length > 0 && selectedProd.variants.some(v => v.size && v.size !== 'Standard');

      let initialProdUnits = 0;
      let initialProdTotal = 0;
      (prod.sizes || []).forEach(sz => {
        const q = parseInt(sz.qty, 10) || 0;
        const details = getVariantDetails(selectedProd, sz.size);
        initialProdUnits += q;
        initialProdTotal += (q * (details.sellingPrice || 0));
      });

      const q = (prod.searchQuery || '').toLowerCase().trim();
      const searchFilteredProds = candidateProducts.filter(p => 
        !q || p.name.toLowerCase().includes(q) || (p.brand && p.brand.toLowerCase().includes(q))
      );

      let prodOptionsHtml = '';
      if (searchFilteredProds.length === 0) {
        prodOptionsHtml = '<option value="" disabled>No products match</option>';
      } else {
        prodOptionsHtml = '<option value="" ' + (!prod.productId ? 'selected' : '') + '>Select Product</option>' + searchFilteredProds.map(p => {
          const brandLabel = p.brand ? ` [${p.brand}]` : '';
          return `<option value="${p.id}" ${p.id === prod.productId ? 'selected' : ''}>${escapeHtml(p.name)}${escapeHtml(brandLabel)}</option>`;
        }).join('');
      }

      let brandOptionsHtml = `<option value="" ${!prod.brand ? 'selected' : ''}>All Brands</option>`;
      brands.forEach(b => {
        brandOptionsHtml += `<option value="${b}" ${b.toLowerCase() === (prod.brand || '').toLowerCase() ? 'selected' : ''}>${b}</option>`;
      });

      const sizeRowsHtml = (prod.sizes || []).map(sz => {
        const details = getVariantDetails(selectedProd, sz.size);
        const availStock = details.availStock;
        const unitPrice = details.sellingPrice;
        const lineTotal = (sz.qty || 0) * unitPrice;
        const isOverStock = (sz.qty > availStock) || (availStock === 0 && sz.qty > 0);

        const alreadyChosenInOtherRows = (prod.sizes || []).filter(s => s.id !== sz.id).map(s => s.size);
        let sizeOptionsHtml = '';
        if (hasSizes) {
          const hasEmpty = !sz.size;
          sizeOptionsHtml = `<option value="" ${hasEmpty ? 'selected' : ''} disabled>Select size</option>` + (selectedProd.variants || []).map(v => {
            const isTaken = alreadyChosenInOtherRows.includes(v.size) && v.size !== sz.size;
            const priceTag = v.sellingPrice > 0 ? ` (₹${v.sellingPrice})` : '';
            return `<option value="${escapeHtml(v.size)}" ${v.size === sz.size ? 'selected' : ''} ${isTaken ? 'disabled' : ''}>${v.size === 'Standard' ? 'Standard' : 'Size ' + v.size}${priceTag}${isTaken ? ' (Added)' : ''}</option>`;
          }).join('');
        } else if (selectedProd) {
          sizeOptionsHtml = '<option value="Standard">Standard (No sizes)</option>';
        } else {
          sizeOptionsHtml = '<option value="">Select product first</option>';
        }

        return `
          <div class="sale-size-row" data-size-id="${sz.id}" style="display: grid; grid-template-columns: 1.4fr 1.1fr 1.2fr 1fr 1.2fr 30px; gap: 0.55rem; align-items: start;">
            <div class="form-group" style="margin: 0;">
              <select class="form-select sale-size-select" style="height: 32px; padding: 0.25rem 0.55rem; font-size: 0.825rem; font-weight: 500; width: 100%; box-sizing: border-box;" ${!hasSizes ? 'disabled' : ''}>
                ${sizeOptionsHtml}
              </select>
              <div class="sale-size-error field-error" style="display: none;"></div>
            </div>

            <div class="form-group" style="margin: 0;">
              <input type="text" class="form-input sale-stock-display" value="${availStock} units" readonly style="height: 32px; padding: 0.25rem 0.55rem; font-size: 0.825rem; font-weight: 600; text-align: center; background: var(--bg-secondary); color: ${availStock === 0 ? 'var(--status-danger)' : 'var(--text-primary)'}; box-sizing: border-box;" title="${availStock} units in stock">
            </div>

            <div class="form-group" style="margin: 0;">
              <input type="text" class="form-input sale-price-display" value="₹${unitPrice.toLocaleString('en-IN')}" readonly style="height: 32px; padding: 0.25rem 0.55rem; font-size: 0.825rem; font-weight: 600; text-align: right; background: var(--bg-secondary); color: var(--text-primary); box-sizing: border-box;" title="Selling price per unit">
            </div>

            <div class="form-group" style="margin: 0; position: relative;">
              <input type="number" class="form-input sale-qty-input" min="1" step="1" value="${sz.qty !== undefined && sz.qty !== null ? sz.qty : ''}" style="height: 32px; padding: 0.25rem 0.55rem; font-size: 0.825rem; font-weight: 600; text-align: center; box-sizing: border-box; ${isOverStock ? 'border-color: var(--status-danger); background: var(--status-danger-bg); color: var(--status-danger-text);' : ''}">
              <div class="sale-qty-error field-error" style="font-size: 0.7rem; text-align: center; display: ${isOverStock ? 'block' : 'none'};">
                ${availStock === 0 ? 'Out of stock.' : `Only ${availStock} units are available.`}
              </div>
            </div>

            <div class="form-group" style="margin: 0;">
              <input type="text" class="form-input sale-total-display" value="₹${lineTotal.toLocaleString('en-IN')}" readonly style="height: 32px; padding: 0.25rem 0.55rem; font-size: 0.825rem; font-weight: 700; text-align: right; background: var(--bg-secondary); color: var(--brand-primary); box-sizing: border-box;">
            </div>

            <div style="display: flex; justify-content: center; align-items: center; height: 32px;">
              <button type="button" class="btn btn-ghost sale-remove-size-btn" title="Remove size" style="height: 28px; width: 28px; padding: 0; color: var(--status-danger); display: inline-flex; align-items: center; justify-content: center; border-radius: var(--radius-sm); cursor: pointer;">
                <i data-lucide="trash-2" style="width: 14px; height: 14px;"></i>
              </button>
            </div>
          </div>
        `;
      }).join('');

      const sectionEl = document.createElement('div');
      sectionEl.className = 'sale-product-section';
      sectionEl.setAttribute('data-product-id', prod.id);
      sectionEl.style.cssText = 'display: flex; flex-direction: column; gap: 0.5rem; padding: 0.65rem 0.85rem; border: 1px solid var(--border-color); border-radius: var(--radius-sm); background: var(--bg-surface);';

      sectionEl.innerHTML = `
        <!-- Product Section Accordion Header: Product #, Title Preview, Subtotal, Remove Product -->
        <div class="sale-accordion-header" style="display: flex; align-items: center; justify-content: space-between; gap: 0.5rem; flex-wrap: wrap; cursor: pointer; user-select: none;">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <div class="sale-chevron-icon" style="transform: ${prod.isExpanded ? 'rotate(0deg)' : 'rotate(-90deg)'}; width: 20px; height: 20px; display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; color: var(--text-secondary); transition: transform 0.15s ease;">
              <i data-lucide="chevron-down" style="width: 16px; height: 16px;"></i>
            </div>
            <span style="font-size: 0.775rem; font-weight: 700; color: var(--brand-primary); text-transform: uppercase; letter-spacing: 0.04em;">Product #${pIdx + 1}</span>
            <span class="sale-prod-title-preview" style="font-size: 0.85rem; font-weight: 600; color: var(--text-primary); max-width: 260px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${escapeHtml(prod.productName || 'Select Product')}</span>
          </div>
          <div style="display: flex; align-items: center; gap: 0.6rem;">
            <span class="sale-prod-subtotal" style="font-size: 0.75rem; font-weight: 600; color: var(--text-secondary); background: var(--bg-secondary); padding: 0.2rem 0.55rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
              Subtotal: <strong>${initialProdUnits} units</strong> · <strong style="color: var(--brand-primary);">₹${initialProdTotal.toLocaleString('en-IN')}</strong>
            </span>
            <button type="button" class="btn btn-ghost sale-remove-product-btn" title="Remove Product" style="height: 26px; width: 26px; padding: 0; color: var(--status-danger); display: inline-flex; align-items: center; justify-content: center; border-radius: var(--radius-sm); cursor: pointer;">
              <i data-lucide="trash-2" style="width: 14px; height: 14px;"></i>
            </button>
          </div>
        </div>

        <!-- ACCORDION BODY (Expanded / Collapsed) -->
        <div class="sale-product-body" style="display: ${prod.isExpanded ? 'block' : 'none'};">
          <div style="overflow-x: auto; -webkit-overflow-scrolling: touch; width: 100%;">
            <div style="min-width: 680px; display: flex; flex-direction: column; gap: 0.45rem;">
              <!-- Horizontal Product Details Row: Product Name (Searchable Combobox), Brand, Category -->
              <div style="display: grid; grid-template-columns: 2fr 1.35fr 1.35fr; gap: 0.55rem; align-items: start;">
                <div class="form-group" style="margin: 0;">
                  <label class="form-label" style="display: block; font-size: 0.725rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 0.2rem; white-space: nowrap;">Product Name <span style="color: var(--status-danger);">*</span></label>
                  <div class="sale-combobox-container" style="position: relative; width: 100%;">
                    <input type="text" class="form-input sale-combobox-input" placeholder="Search or select product..." autocomplete="off" spellcheck="false" value="${selectedProd ? `${selectedProd.name}${selectedProd.brand ? ' [' + selectedProd.brand + ']' : ''}` : ''}" style="width: 100%; height: 32px; padding: 0.25rem 1.85rem 0.25rem 0.55rem; font-size: 0.825rem; font-weight: 600; box-sizing: border-box; cursor: pointer; text-overflow: ellipsis; background: var(--bg-surface); color: var(--text-primary); border: 1px solid var(--border-color); border-radius: var(--radius-sm);" title="Click to search or select product">
                    <div class="sale-combobox-chevron" style="position: absolute; right: 8px; top: 16px; transform: translateY(-50%); pointer-events: none; color: var(--text-secondary); display: flex; align-items: center;">
                      <i data-lucide="chevron-down" style="width: 14px; height: 14px;"></i>
                    </div>
                    <select class="form-select sale-prod-select" style="display: none;">
                      ${prodOptionsHtml}
                    </select>
                    <div class="sale-combobox-menu" style="display: none; position: absolute; top: 34px; left: 0; right: 0; max-height: 220px; overflow-y: auto; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-sm); box-shadow: 0 4px 16px rgba(0,0,0,0.3); z-index: 1000; padding: 0.25rem 0;"></div>
                    <div class="sale-prod-error field-error" style="display: none;"></div>
                  </div>
                </div>

                <div class="form-group" style="margin: 0;">
                  <label class="form-label" style="display: block; font-size: 0.725rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 0.2rem; white-space: nowrap;">Brand</label>
                  <select class="form-select sale-brand-select" style="height: 32px; padding: 0.25rem 0.55rem; font-size: 0.825rem; font-weight: 500; width: 100%; box-sizing: border-box;">
                    ${brandOptionsHtml}
                  </select>
                </div>

                <div class="form-group" style="margin: 0;">
                  <label class="form-label" style="display: block; font-size: 0.725rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 0.2rem; white-space: nowrap;">Category</label>
                  <input type="text" class="form-input sale-cat-display" value="${prod.category || '—'}" readonly style="height: 32px; padding: 0.25rem 0.55rem; font-size: 0.825rem; font-weight: 500; background: var(--bg-secondary); color: var(--text-secondary); box-sizing: border-box;" title="${prod.category || ''}">
                </div>
              </div>

              <!-- Size-wise Entries Subheader & Actions -->
              <div style="display: flex; align-items: center; justify-content: space-between; gap: 0.5rem; padding-top: 0.4rem; border-top: 1px dashed var(--border-color); margin-top: 0.35rem;">
                <div style="font-size: 0.725rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; color: var(--text-secondary); display: flex; align-items: center; gap: 0.35rem;">
                  <i data-lucide="layers" style="width: 12px; height: 12px; color: var(--brand-primary);"></i>
                  <span>Size-wise Sales Entries</span>
                </div>
                <div style="display: flex; align-items: center; gap: 0.4rem;">
                  <button type="button" class="btn btn-secondary btn-sm sale-add-size-btn" style="height: 24px; padding: 0 0.55rem; font-size: 0.72rem; font-weight: 600; display: inline-flex; align-items: center; gap: 0.25rem; border-color: var(--brand-primary); color: var(--brand-primary); background: transparent; cursor: pointer;">
                    <i data-lucide="plus" style="width: 12px; height: 12px;"></i> Add Size
                  </button>
                </div>
              </div>

              <!-- Size Column Headers -->
              <div style="display: grid; grid-template-columns: 1.4fr 1.1fr 1.2fr 1fr 1.2fr 30px; gap: 0.55rem; font-size: 0.725rem; font-weight: 600; color: var(--text-secondary); padding: 0.1rem 0;">
                <div>Size / Variant <span style="color: var(--status-danger);">*</span></div>
                <div style="text-align: center;">Available Stock</div>
                <div style="text-align: right;">Selling Price (₹)</div>
                <div style="text-align: center;">Quantity <span style="color: var(--status-danger);">*</span></div>
                <div style="text-align: right;">Total (₹)</div>
                <div></div>
              </div>

              <!-- Size Rows Container -->
              <div class="sale-sizes-container" style="display: flex; flex-direction: column; gap: 0.35rem;">
                ${sizeRowsHtml}
              </div>

            </div>
          </div>
        </div>
      `;

      // Wire up Accordion Toggle
      const headerEl = sectionEl.querySelector('.sale-accordion-header');
      if (headerEl) {
        headerEl.addEventListener('click', (e) => {
          if (e.target.closest('.sale-remove-product-btn')) return;
          prod.isExpanded = !prod.isExpanded;
          const bodyEl = sectionEl.querySelector('.sale-product-body');
          const chevron = sectionEl.querySelector('.sale-chevron-icon');
          if (prod.isExpanded) {
            sectionEl.classList.remove('collapsed');
            sectionEl.classList.add('expanded');
            if (bodyEl) bodyEl.style.display = 'block';
            if (chevron) chevron.style.transform = 'rotate(0deg)';
          } else {
            sectionEl.classList.remove('expanded');
            sectionEl.classList.add('collapsed');
            if (bodyEl) bodyEl.style.display = 'none';
            if (chevron) chevron.style.transform = 'rotate(-90deg)';
          }
        });
      }

      const comboboxContainer = sectionEl.querySelector('.sale-combobox-container');
      const comboboxInp = sectionEl.querySelector('.sale-combobox-input');
      const comboboxMenu = sectionEl.querySelector('.sale-combobox-menu');
      const comboboxChevron = sectionEl.querySelector('.sale-combobox-chevron');
      const prodSelect = sectionEl.querySelector('.sale-prod-select');
      const brandSelect = sectionEl.querySelector('.sale-brand-select');
      const removeProdBtn = sectionEl.querySelector('.sale-remove-product-btn');
      const addSizeBtn = sectionEl.querySelector('.sale-add-size-btn');

      let activeHighlightIndex = -1;
      let currentFilteredProducts = [];
      let isMenuOpen = false;

      function getFilteredProducts(filterText = '') {
        const query = filterText.toLowerCase().trim();
        return candidateProducts.filter(p => {
          if (!query) return true;
          const name = (p.name || '').toLowerCase();
          const brand = (p.brand || '').toLowerCase();
          const cat = (p.category || '').toLowerCase();
          const fullLabel = `${name} [${brand}]`;
          return name.includes(query) || brand.includes(query) || cat.includes(query) || fullLabel.includes(query);
        });
      }

      function updateHighlight(index) {
        const items = comboboxMenu.querySelectorAll('.sale-combobox-item');
        items.forEach((el, i) => {
          if (i === index) {
            el.style.backgroundColor = 'var(--bg-secondary)';
            el.scrollIntoView({ block: 'nearest' });
          } else {
            el.style.backgroundColor = (currentFilteredProducts[i] && currentFilteredProducts[i].id === prod.productId) ? 'var(--bg-secondary)' : '';
          }
        });
        activeHighlightIndex = index;
      }

      function renderComboboxMenu(filterText = '') {
        currentFilteredProducts = getFilteredProducts(filterText);
        comboboxMenu.innerHTML = '';
        activeHighlightIndex = -1;

        if (currentFilteredProducts.length === 0) {
          const emptyEl = document.createElement('div');
          emptyEl.className = 'sale-combobox-empty';
          emptyEl.style.cssText = 'padding: 0.65rem 0.75rem; font-size: 0.8rem; color: var(--text-secondary); text-align: center; font-style: italic;';
          emptyEl.textContent = 'No matching products found';
          comboboxMenu.appendChild(emptyEl);
        } else {
          currentFilteredProducts.forEach((p, idx) => {
            const isSelected = p.id === prod.productId;
            const itemEl = document.createElement('div');
            itemEl.className = 'sale-combobox-item';
            itemEl.setAttribute('data-product-id', p.id);
            itemEl.setAttribute('role', 'option');
            itemEl.style.cssText = `padding: 0.4rem 0.65rem; font-size: 0.825rem; cursor: pointer; display: flex; align-items: center; justify-content: space-between; gap: 0.5rem; transition: background 0.12s ease; ${isSelected ? 'background: var(--bg-secondary); font-weight: 600;' : ''}`;

            const brandStr = p.brand ? ` [${p.brand}]` : '';
            const priceVal = (p.sellingPrice || (p.variants && p.variants[0] ? p.variants[0].sellingPrice : 0));

            itemEl.innerHTML = `
              <div style="display: flex; align-items: center; gap: 0.35rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                <span style="color: var(--text-primary); font-weight: ${isSelected ? '700' : '500'};">${escapeHtml(p.name)}${escapeHtml(brandStr)}</span>
              </div>
              <div style="display: flex; align-items: center; gap: 0.45rem; flex-shrink: 0;">
                <span style="font-size: 0.75rem; color: var(--brand-primary); font-weight: 600;">₹${priceVal.toLocaleString('en-IN')}</span>
                ${isSelected ? '<i data-lucide="check" style="width: 13px; height: 13px; color: var(--brand-primary);"></i>' : ''}
              </div>
            `;

            itemEl.addEventListener('mouseenter', () => {
              updateHighlight(idx);
            });

            itemEl.addEventListener('mousedown', (e) => {
              e.preventDefault();
              applyProductSelection(p);
            });

            comboboxMenu.appendChild(itemEl);
          });
          if (window.lucide) window.lucide.createIcons();
        }
      }

      function openCombobox() {
        if (isMenuOpen) return;
        isMenuOpen = true;
        renderComboboxMenu('');
        comboboxMenu.style.display = 'block';
        if (comboboxChevron) {
          comboboxChevron.style.transform = 'translateY(-50%) rotate(180deg)';
          comboboxChevron.style.transition = 'transform 0.15s ease';
        }
      }

      function closeCombobox(restoreText = true) {
        if (!isMenuOpen) return;
        isMenuOpen = false;
        comboboxMenu.style.display = 'none';
        if (comboboxChevron) {
          comboboxChevron.style.transform = 'translateY(-50%)';
        }
        activeHighlightIndex = -1;
        if (restoreText) {
          if (selectedProd) {
            comboboxInp.value = `${selectedProd.name}${selectedProd.brand ? ' [' + selectedProd.brand + ']' : ''}`;
          } else {
            comboboxInp.value = '';
          }
        }
      }

      function applyProductSelection(p) {
        prod.productId = p.id;
        prod.productName = p.name;
        prod.brand = (p.brand || '').trim();
        prod.category = p.category || 'General';
        const newV = p.variants;
        prod.sizes = [{
          id: 'ssize_' + Date.now() + '_1',
          size: (newV && newV.length > 0) ? newV[0].size : 'Standard',
          qty: 1
        }];
        comboboxInp.value = `${escapeHtml(p.name)}${p.brand ? ' [' + p.brand + ']' : ''}`;
        comboboxInp.classList.remove('is-invalid');
        const prodErrEl = sectionEl.querySelector('.sale-prod-error');
        if (prodErrEl) { prodErrEl.textContent = ''; prodErrEl.style.display = 'none'; }
        if (prodSelect) {
          prodSelect.value = p.id;
        }
        closeCombobox(false);
        renderSaleItems();
        updateSaleSummary();
      }

      // Combobox Interaction Events
      comboboxInp.addEventListener('focus', () => {
        openCombobox();
        comboboxInp.select();
      });

      comboboxInp.addEventListener('click', () => {
        if (!isMenuOpen) {
          openCombobox();
          comboboxInp.select();
        }
      });

      comboboxInp.addEventListener('input', (e) => {
        if (!isMenuOpen) {
          isMenuOpen = true;
          comboboxMenu.style.display = 'block';
          if (comboboxChevron) {
            comboboxChevron.style.transform = 'translateY(-50%) rotate(180deg)';
          }
        }
        renderComboboxMenu(e.target.value);
      });

      comboboxInp.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          if (!isMenuOpen) {
            openCombobox();
          } else if (currentFilteredProducts.length > 0) {
            const nextIdx = (activeHighlightIndex + 1) % currentFilteredProducts.length;
            updateHighlight(nextIdx);
          }
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          if (isMenuOpen && currentFilteredProducts.length > 0) {
            const prevIdx = (activeHighlightIndex - 1 + currentFilteredProducts.length) % currentFilteredProducts.length;
            updateHighlight(prevIdx);
          }
        } else if (e.key === 'Enter') {
          if (isMenuOpen) {
            e.preventDefault();
            if (activeHighlightIndex >= 0 && activeHighlightIndex < currentFilteredProducts.length) {
              applyProductSelection(currentFilteredProducts[activeHighlightIndex]);
            } else if (currentFilteredProducts.length > 0) {
              applyProductSelection(currentFilteredProducts[0]);
            }
          }
        } else if (e.key === 'Escape') {
          if (isMenuOpen) {
            e.preventDefault();
            closeCombobox(true);
          }
        } else if (e.key === 'Tab') {
          closeCombobox(true);
        }
      });

      comboboxInp.addEventListener('blur', () => {
        setTimeout(() => {
          closeCombobox(true);
        }, 180);
      });

      // Product select change (fallback for programmatic interaction)
      prodSelect.addEventListener('change', (e) => {
        prod.productId = e.target.value;
        const newP = prods.find(p => p.id === prod.productId);
        if (newP) {
          prod.productName = newP.name;
          prod.category = newP.category || 'General';
          prod.brand = (newP.brand || '').trim();
          const newV = newP.variants;
          prod.sizes = [{
            id: 'ssize_' + Date.now() + '_1',
            size: (newV && newV.length > 0) ? newV[0].size : 'Standard',
            qty: 1
          }];
        } else {
          prod.productId = '';
          prod.productName = '';
          prod.brand = '';
          prod.category = '—';
          prod.sizes = [{
            id: 'ssize_' + Date.now() + '_1',
            size: '',
            qty: 1
          }];
        }
        renderSaleItems();
        updateSaleSummary();
      });

      // 3. Brand select change
      brandSelect.addEventListener('change', (e) => {
        prod.brand = e.target.value.trim();
        prod.searchQuery = '';
        let prodsForBrand = prods;
        if (prod.brand) {
          prodsForBrand = prods.filter(p => (p.brand || '').trim().toLowerCase() === prod.brand.toLowerCase());
        }
        if (!prodsForBrand.some(p => p.id === prod.productId)) {
          if (prodsForBrand.length > 0) {
            prod.productId = prodsForBrand[0].id;
            prod.productName = prodsForBrand[0].name;
            prod.category = prodsForBrand[0].category || 'General';
            const newV = prodsForBrand[0].variants;
            prod.sizes = [{
              id: 'ssize_' + Date.now() + '_1',
              size: (newV && newV.length > 0) ? newV[0].size : 'Standard',
              qty: 1
            }];
          } else {
            prod.productId = '';
            prod.productName = '';
            prod.category = '—';
          }
        }
        renderSaleItems();
        updateSaleSummary();
      });

      // 4. Remove Product button
      removeProdBtn.addEventListener('click', () => {
        if (productsData.length <= 1) {
          toast.show({ message: 'At least one product is required for a sale.', type: 'warning' });
          return;
        }
        productsData.splice(pIdx, 1);
        renderSaleItems();
        updateSaleSummary();
      });

      // 5. Add Size button
      addSizeBtn.addEventListener('click', () => {
        if (!selectedProd) return;
        const variants = selectedProd.variants || [];
        if (!hasSizes || variants.length === 0) {
          toast.show({ message: `"${selectedProd.name}" does not have size variants.`, type: 'warning' });
          return;
        }

        const usedSizes = new Set((prod.sizes || []).map(s => s.size));
        const availableVar = variants.find(v => !usedSizes.has(v.size));
        if (!availableVar) {
          toast.show({ message: `All available sizes for "${selectedProd.name}" have already been added.`, type: 'warning' });
          return;
        }

        prod.sizes.push({
          id: 'ssize_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
          size: availableVar.size,
          qty: 1
        });

        renderSaleItems();
        updateSaleSummary();
      });

      // 6. Size rows listeners
      (prod.sizes || []).forEach(sz => {
        const sizeRowEl = sectionEl.querySelector(`[data-size-id="${sz.id}"]`);
        if (!sizeRowEl) return;

        const sizeSel = sizeRowEl.querySelector('.sale-size-select');
        const qtyInp = sizeRowEl.querySelector('.sale-qty-input');
        const removeSizeBtn = sizeRowEl.querySelector('.sale-remove-size-btn');

        sizeSel.addEventListener('change', (e) => {
          sz.size = e.target.value;
          if (sz.size && sz.size.trim()) {
            sizeSel.classList.remove('is-invalid');
            const errEl = sizeRowEl.querySelector('.sale-size-error');
            if (errEl) { errEl.textContent = ''; errEl.style.display = 'none'; }
          }
          renderSaleItems();
          updateSaleSummary();
        });

        qtyInp.addEventListener('input', (e) => {
          const rawVal = e.target.value.trim();
          sz.qty = rawVal === '' ? '' : parseInt(rawVal, 10);
          const q = parseInt(rawVal, 10);
          const details = getVariantDetails(selectedProd, sz.size);
          const qtyErrEl = sizeRowEl.querySelector('.sale-qty-error');
          if (!isNaN(q) && q > 0 && q <= details.availStock) {
            qtyInp.classList.remove('is-invalid');
            qtyInp.style.borderColor = '';
            qtyInp.style.background = '';
            qtyInp.style.color = '';
            if (qtyErrEl) { qtyErrEl.textContent = ''; qtyErrEl.style.display = 'none'; }
          }
          updateSaleSummary();
        });

        removeSizeBtn.addEventListener('click', () => {
          if (prod.sizes.length <= 1) {
            toast.show({ message: 'At least one size entry is required per product.', type: 'warning' });
            return;
          }
          const sIdx = prod.sizes.findIndex(s => s.id === sz.id);
          if (sIdx !== -1) {
            prod.sizes.splice(sIdx, 1);
            renderSaleItems();
            updateSaleSummary();
          }
        });
      });

      itemsContainer.appendChild(sectionEl);
    });

    if (window.lucide) window.lucide.createIcons();
  }

  renderSaleItems();
  updateSaleSummary();

  // Wire top & payment controls real-time clearing
  const custNameInp = mainCard.querySelector('#sale-cust-name');
  const custNameErr = mainCard.querySelector('#sale-cust-name-error');
  if (custNameInp) {
    const clearCustErr = () => {
      if (custNameInp.value.trim()) {
        custNameInp.classList.remove('is-invalid');
        custNameInp.style.borderColor = '';
        if (custNameErr) { custNameErr.textContent = ''; custNameErr.style.display = 'none'; }
      }
    };
    custNameInp.addEventListener('input', clearCustErr);
    custNameInp.addEventListener('change', clearCustErr);
  }

  const amountPaidInp = mainCard.querySelector('#sale-amount-paid');
  const amountPaidErr = mainCard.querySelector('#sale-amount-paid-error');
  if (amountPaidInp) {
    const clearPaidErr = () => {
      const val = parseFloat(amountPaidInp.value);
      if (!isNaN(val) && val >= 0) {
        amountPaidInp.classList.remove('is-invalid');
        amountPaidInp.style.borderColor = '';
        if (amountPaidErr) { amountPaidErr.textContent = ''; amountPaidErr.style.display = 'none'; }
      }
    };
    amountPaidInp.addEventListener('input', clearPaidErr);
    amountPaidInp.addEventListener('change', clearPaidErr);
  }

  const discountInp = mainCard.querySelector('#sale-discount-input');
  const discountErr = mainCard.querySelector('#sale-discount-error');
  if (discountInp) {
    const clearDiscErr = () => {
      const val = parseFloat(discountInp.value);
      if (!isNaN(val) && val >= 0) {
        discountInp.classList.remove('is-invalid');
        discountInp.style.borderColor = '';
        if (discountErr) { discountErr.textContent = ''; discountErr.style.display = 'none'; }
      }
    };
    discountInp.addEventListener('input', clearDiscErr);
    discountInp.addEventListener('change', clearDiscErr);
  }

  mainCard.querySelector('#btn-add-sale-product').addEventListener('click', () => {
    productsData.push(createProductGroup());
    renderSaleItems();
    updateSaleSummary();
  });

  mainCard.querySelector('#sale-discount-input').addEventListener('input', updateSaleSummary);
  mainCard.querySelector('#sale-pay-status').addEventListener('change', () => {
    updateSaleSummary('status');
    const paidEl = mainCard.querySelector('#sale-amount-paid');
    const errEl = mainCard.querySelector('#sale-amount-paid-error');
    if (paidEl && errEl) {
      paidEl.classList.remove('is-invalid');
      paidEl.style.borderColor = '';
      errEl.textContent = '';
      errEl.style.display = 'none';
    }
  });
  mainCard.querySelector('#sale-amount-paid').addEventListener('input', () => updateSaleSummary('amount'));

  mainCard.querySelector('#btn-cancel-sale').addEventListener('click', () => {
    if (onNavigate) onNavigate('sales');
  });

  function expandSaleProductSection(cardEl, prod) {
    if (!cardEl) return;
    if (prod) prod.isExpanded = true;
    cardEl.classList.remove('collapsed');
    cardEl.classList.add('expanded');
    const bodyEl = cardEl.querySelector('.sale-product-body');
    const chevron = cardEl.querySelector('.sale-chevron-icon');
    if (bodyEl) bodyEl.style.display = 'block';
    if (chevron) chevron.style.transform = 'rotate(0deg)';
  }

  function validateAllSaleFields() {
    let firstError = null;

    function markError(inputEl, errEl, message, cardEl, prod) {
      if (inputEl) {
        inputEl.classList.add('is-invalid');
        inputEl.style.borderColor = 'var(--status-danger)';
      }
      if (errEl) {
        errEl.textContent = message;
        errEl.style.display = 'block';
      }
      if (cardEl) {
        expandSaleProductSection(cardEl, prod);
      }
      if (!firstError) {
        firstError = { inputEl, errEl, message, cardEl, prod };
      }
    }

    function clearError(inputEl, errEl) {
      if (inputEl) {
        inputEl.classList.remove('is-invalid');
        inputEl.style.borderColor = '';
        inputEl.style.background = '';
        inputEl.style.color = '';
      }
      if (errEl) {
        errEl.textContent = '';
        errEl.style.display = 'none';
      }
    }

    // 1. Customer Name
    const custNameEl = mainCard.querySelector('#sale-cust-name');
    const custNameErrEl = mainCard.querySelector('#sale-cust-name-error');
    const custNameVal = (custNameEl ? custNameEl.value : '').trim();
    if (!custNameVal) {
      markError(custNameEl, custNameErrEl, 'Customer Name is required.', null, null);
    } else {
      clearError(custNameEl, custNameErrEl);
    }

    // Subtotal accumulator to validate payment
    let currentSubtotal = 0;
    const prods = store.data.products || [];

    // Cumulative requested stock per variant across all groups
    const cumulativeDemand = {};
    for (let pIdx = 0; pIdx < productsData.length; pIdx++) {
      const prod = productsData[pIdx];
      const realProd = prods.find(p => p.id === prod.productId);
      if (realProd) {
        (prod.sizes || []).forEach(sz => {
          const q = parseInt(sz.qty, 10);
          if (!isNaN(q) && q > 0) {
            const key = `${prod.productId}:::${sz.size || 'Standard'}`;
            cumulativeDemand[key] = (cumulativeDemand[key] || 0) + q;
          }
        });
      }
    }

    // 2. Products & Variants
    if (!productsData || productsData.length === 0) {
      const addProdBtn = mainCard.querySelector('#btn-add-sale-product');
      if (!firstError) {
        firstError = { inputEl: addProdBtn, errEl: null, message: 'Please add at least one product to the sale.', cardEl: null, prod: null };
      }
    } else {
      for (let pIdx = 0; pIdx < productsData.length; pIdx++) {
        const prod = productsData[pIdx];
        const cardEl = itemsContainer.querySelector(`[data-product-id="${prod.id}"]`);

        // Combobox / Product
        const comboboxInp = cardEl ? cardEl.querySelector('.sale-combobox-input') : null;
        const prodErr = cardEl ? cardEl.querySelector('.sale-prod-error') : null;
        if (comboboxInp && !comboboxInp.value.trim()) {
          prod.productId = '';
          prod.productName = '';
        }

        if (!prod.productId) {
          markError(comboboxInp, prodErr, 'Product is required.', cardEl, prod);
        } else {
          const realProd = prods.find(p => p.id === prod.productId);
          if (!realProd) {
            markError(comboboxInp, prodErr, `Product "${prod.productName || 'Unknown'}" not found in Inventory.`, cardEl, prod);
          } else {
            clearError(comboboxInp, prodErr);
          }
        }

        // Sizes
        if (!prod.sizes || prod.sizes.length === 0) {
          const addSizeBtn = cardEl ? cardEl.querySelector('.sale-add-size-btn') : null;
          markError(addSizeBtn, null, 'At least one size entry is required.', cardEl, prod);
        } else {
          const seenSizes = new Set();
          const realProd = prods.find(p => p.id === prod.productId);

          for (let sIdx = 0; sIdx < prod.sizes.length; sIdx++) {
            const sz = prod.sizes[sIdx];
            const sizeRowEl = cardEl ? cardEl.querySelector(`[data-size-id="${sz.id}"]`) : null;
            if (!sizeRowEl) continue;

            const sizeSel = sizeRowEl.querySelector('.sale-size-select');
            const sizeErr = sizeRowEl.querySelector('.sale-size-error');
            const qtyInp = sizeRowEl.querySelector('.sale-qty-input');
            const qtyErr = sizeRowEl.querySelector('.sale-qty-error');

            if (sizeSel && sizeSel.value !== undefined) sz.size = sizeSel.value;
            if (qtyInp && qtyInp.value !== undefined) {
              const rawVal = qtyInp.value.trim();
              sz.qty = rawVal === '' ? '' : parseInt(rawVal, 10);
            }

            const sVal = (sz.size || '').trim();

            // Size selection
            if (!sVal) {
              markError(sizeSel, sizeErr, 'Size is required.', cardEl, prod);
            } else {
              const lower = sVal.toLowerCase();
              if (seenSizes.has(lower)) {
                markError(sizeSel, sizeErr, 'Duplicate size. Each variant must be unique.', cardEl, prod);
              } else {
                seenSizes.add(lower);
                clearError(sizeSel, sizeErr);
              }
            }

            // Quantity
            const rawQty = sz.qty;
            if (rawQty === '' || rawQty === null || rawQty === undefined || String(rawQty).trim() === '') {
              markError(qtyInp, qtyErr, 'Quantity is required.', cardEl, prod);
            } else {
              const q = parseInt(rawQty, 10);
              if (isNaN(q) || q <= 0) {
                markError(qtyInp, qtyErr, 'Quantity must be greater than 0.', cardEl, prod);
              } else if (realProd) {
                const details = getVariantDetails(realProd, sz.size);
                currentSubtotal += q * (details.sellingPrice || 0);

                const key = `${prod.productId}:::${sz.size || 'Standard'}`;
                const totalReq = cumulativeDemand[key] || q;

                if (details.availStock <= 0) {
                  markError(qtyInp, qtyErr, 'Out of stock.', cardEl, prod);
                } else if (totalReq > details.availStock) {
                  markError(qtyInp, qtyErr, `Only ${details.availStock} units are available.`, cardEl, prod);
                } else {
                  clearError(qtyInp, qtyErr);
                }
              } else {
                clearError(qtyInp, qtyErr);
              }
            }
          }
        }
      }
    }

    // 3. Discount & Payment Details
    const discountEl = mainCard.querySelector('#sale-discount-input');
    const discountErrEl = mainCard.querySelector('#sale-discount-error');
    const discountVal = parseFloat(discountEl ? discountEl.value : '0') || 0;

    if (discountVal < 0) {
      markError(discountEl, discountErrEl, 'Discount cannot be negative.', null, null);
    } else {
      clearError(discountEl, discountErrEl);
    }

    const finalTotal = Math.max(0, currentSubtotal - discountVal);
    const payStatusEl = mainCard.querySelector('#sale-pay-status');
    const payStatus = payStatusEl ? payStatusEl.value : 'Paid';
    const amountPaidEl = mainCard.querySelector('#sale-amount-paid');
    const amountPaidErrEl = mainCard.querySelector('#sale-amount-paid-error');
    const amountPaidRaw = (amountPaidEl ? amountPaidEl.value : '').trim();
    const amountPaid = parseFloat(amountPaidRaw);

    if (amountPaidRaw !== '' && isFinite(amountPaid) && amountPaid < 0) {
      markError(amountPaidEl, amountPaidErrEl, 'Amount paid cannot be negative.', null, null);
    } else if (payStatus === 'Partial') {
      if (amountPaidRaw === '' || isNaN(amountPaid) || amountPaid <= 0) {
        markError(amountPaidEl, amountPaidErrEl, 'Amount paid is required for partial payment.', null, null);
      } else if (amountPaid >= finalTotal) {
        markError(amountPaidEl, amountPaidErrEl, `Partial payment must be less than final total (₹${finalTotal.toLocaleString('en-IN')}).`, null, null);
      } else {
        clearError(amountPaidEl, amountPaidErrEl);
      }
    } else if (payStatus === 'Paid') {
      if (finalTotal > 0 && amountPaidRaw !== '' && isFinite(amountPaid) && amountPaid < finalTotal) {
        markError(amountPaidEl, amountPaidErrEl, `Amount paid must equal the final total of ₹${finalTotal.toLocaleString('en-IN')}.`, null, null);
      } else {
        clearError(amountPaidEl, amountPaidErrEl);
      }
    } else {
      clearError(amountPaidEl, amountPaidErrEl);
    }

    if (firstError) {
      if (firstError.cardEl && firstError.prod) {
        expandSaleProductSection(firstError.cardEl, firstError.prod);
      }
      setTimeout(() => {
        if (firstError.inputEl) {
          firstError.inputEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
          if (typeof firstError.inputEl.focus === 'function') {
            firstError.inputEl.focus({ preventScroll: true });
          }
          if (typeof firstError.inputEl.select === 'function' && firstError.inputEl.type !== 'date') {
            try { firstError.inputEl.select(); } catch (_) {}
          }
        }
      }, 50);

      toast.show({
        message: firstError.message || 'Please complete all required fields.',
        type: 'danger'
      });
      return false;
    }

    return true;
  }

  let isSubmitting = false;

  mainCard.querySelector('#btn-complete-sale').addEventListener('click', () => {
    if (isSubmitting) return;

    const isValid = validateAllSaleFields();
    if (!isValid) return;

    const custName = mainCard.querySelector('#sale-cust-name').value.trim();
    const custPhone = mainCard.querySelector('#sale-cust-phone').value.trim();
    const payMethod = mainCard.querySelector('#sale-pay-method').value;
    const payStatus = mainCard.querySelector('#sale-pay-status').value;
    const discount = parseFloat(mainCard.querySelector('#sale-discount-input').value) || 0;
    const amountPaidRaw = mainCard.querySelector('#sale-amount-paid').value;
    const amountPaid = parseFloat(amountPaidRaw);

    const prods = store.data.products || [];
    const allSaleItems = [];

    for (let prod of productsData) {
      for (let sz of prod.sizes) {
        const q = parseInt(sz.qty, 10);
        allSaleItems.push({
          productId: prod.productId,
          productName: prod.productName,
          size: sz.size || 'Standard',
          qty: q
        });
      }
    }

    const itemsPayload = allSaleItems.map(item => {
      const prod = prods.find(p => p.id === item.productId);
      const details = getVariantDetails(prod, item.size);
      return {
        productId: item.productId,
        size: item.size || 'Standard',
        qty: item.qty,
        sellingPrice: details.sellingPrice
      };
    });

    try {
      isSubmitting = true;
      const btnComplete = mainCard.querySelector('#btn-complete-sale');
      if (btnComplete) {
        btnComplete.disabled = true;
        btnComplete.style.opacity = '0.7';
        btnComplete.style.cursor = 'not-allowed';
      }

      store.addSale({
        customerName: custName,
        customerPhone: custPhone,
        paymentMethod: payMethod,
        paymentStatus: payStatus,
        amountPaid: payStatus === 'Partial' ? amountPaid : undefined,
        discount: discount,
        items: itemsPayload
      });

      toast.show({ message: 'Sale completed successfully.', type: 'success' });
      if (onNavigate) onNavigate('sales');
    } catch (err) {
      isSubmitting = false;
      const btnComplete = mainCard.querySelector('#btn-complete-sale');
      if (btnComplete) {
        btnComplete.disabled = false;
        btnComplete.style.opacity = '';
        btnComplete.style.cursor = '';
      }
      toast.show({ message: err.message || 'Failed to complete sale.', type: 'danger' });
    }
  });

  if (window.lucide) window.lucide.createIcons();
  return container;
}

// CUSTOMER DETAILS MODAL
function openCustomerDetailsModal(customer, onNavigate = null) {
  const existingModal = document.getElementById('modal-customer-details');
  if (existingModal) existingModal.remove();

  const modalEl = document.createElement('div');
  modalEl.id = 'modal-customer-details';
  modalEl.style.cssText = 'display: flex; flex-direction: column; gap: 1rem; width: 100%;';

  const modalBreadcrumb = createBreadcrumb([
    { label: 'Customers', target: 'customers' },
    { label: customer.name }
  ], (target, params) => {
    if (modalObj && modalObj.closeModal) modalObj.closeModal();
    if (onNavigate) onNavigate(target, params);
  });
  modalEl.appendChild(modalBreadcrumb);

  // Customer sales history
  // Same rule as the customers table and view page (ID first, legacy name
  // fallback, never phone), so a shared phone number cannot pull in another
  // customer's sales.
  const customerSales = store.getCustomerSales(customer);

  const innerContent = document.createElement('div');
  innerContent.style.cssText = 'display: flex; flex-direction: column; gap: 1rem; width: 100%;';
  innerContent.innerHTML = `
    <div style="background: var(--bg-secondary); padding: 1rem 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color); display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 1rem; font-size: 0.85rem;">
      <div>
        <div style="font-size: 0.725rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase;">Customer Name</div>
        <div style="font-weight: 700; color: var(--text-primary); margin-top: 0.2rem; font-size: 1rem;">${escapeHtml(customer.name)}</div>
      </div>
      <div>
        <div style="font-size: 0.725rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase;">Phone Number</div>
        <div style="font-weight: 600; color: var(--text-primary); margin-top: 0.2rem;">${escapeHtml(customer.phone || 'Not Provided')}</div>
      </div>
      <div>
        <div style="font-size: 0.725rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase;">Total Orders</div>
        <div style="font-weight: 700; color: var(--text-primary); margin-top: 0.2rem;">${customer.ordersCount || customerSales.length} purchases</div>
      </div>
      <div>
        <div style="font-size: 0.725rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase;">Total Amount Spent</div>
        <div style="font-weight: 700; color: var(--brand-primary); margin-top: 0.2rem; font-size: 1rem;">₹${(customer.totalSpend || 0).toLocaleString()}</div>
      </div>
    </div>

    <div>
      <h4 style="font-size: 0.9rem; font-weight: 600; margin-bottom: 0.65rem; color: var(--text-primary); display: flex; align-items: center; gap: 0.5rem;">
        <i data-lucide="shopping-bag" style="width: 15px; height: 15px; color: var(--brand-primary);"></i>
        Customer Purchase History (${customerSales.length})
      </h4>
      <div class="table-responsive" style="border: 1px solid var(--border-color); border-radius: var(--radius-sm); max-height: 240px; overflow-y: auto;">
        <table class="admin-table" style="font-size: 0.825rem; margin: 0;">
          <thead>
            <tr>
              <th style="width: 8%; text-align: center;">S.No</th>
              <th>Sale Reference</th>
              <th>Date</th>
              <th>Total Amount</th>
              <th>Status</th>
              <th style="text-align: right;">Action</th>
            </tr>
          </thead>
          <tbody>
            ${customerSales.length === 0 ? `
              <tr><td colspan="6" style="text-align: center; color: var(--text-secondary); padding: 1.5rem;">No purchase history found for this customer.</td></tr>
            ` : customerSales.map((s, idx) => `
              <tr>
                <td style="font-weight: 600; color: var(--text-secondary); text-align: center;">${idx + 1}</td>
                <td style="font-weight: 600; color: var(--text-primary);">${escapeHtml(s.id || s.reference || 'SAL-' + (idx+1))}</td>
                <td style="color: var(--text-secondary);">${s.date || '-'}</td>
                <td style="font-weight: 700; color: var(--text-primary);">₹${(s.totalAmount || 0).toLocaleString()}</td>
                <td>${createBadge({ label: s.status || 'Paid', variant: getStatusBadgeVariant(s.status || 'Paid') }).outerHTML}</td>
                <td style="text-align: right;">
                  <button type="button" class="btn btn-sm btn-secondary table-action-btn cust-view-sale-btn" data-sale-id="${s.id}" title="View" aria-label="View">
                    <i data-lucide="eye"></i>
                    <span class="sr-only">View</span>
                  </button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;

  modalEl.appendChild(innerContent);

  const closeBtn = createButton({
    text: 'Close',
    variant: 'secondary',
    onClick: () => modalObj.closeModal()
  });

  const modalObj = createModal({
    title: `Customer Profile — ${escapeHtml(customer.name)}`,
    bodyElement: modalEl,
    footerButtons: [closeBtn]
  });

  innerContent.querySelectorAll('.cust-view-sale-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const saleId = btn.getAttribute('data-sale-id');
      const sale = (store.data.sales || []).find(s => s.id === saleId);
      if (sale) {
        modalObj.closeModal();
        openSaleDetailsModal(sale);
      }
    });
  });

  if (window.lucide) window.lucide.createIcons();
}

// EDIT CUSTOMER MODAL
function openEditCustomerModal(customer, onSaved = null) {
  const existingModal = document.getElementById('modal-edit-customer');
  if (existingModal) existingModal.remove();

  const modal = document.createElement('div');
  modal.id = 'modal-edit-customer';
  modal.className = 'modal-overlay active';

  modal.innerHTML = `
    <div class="modal-content" style="max-width: 440px; width: 95%;">
      <div class="modal-header" style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem; margin-bottom: 1rem;">
        <h3 style="margin: 0; font-size: 1.1rem; font-weight: 600; color: var(--text-primary);">Edit Customer Details</h3>
        <button type="button" class="modal-close-btn" style="background: none; border: none; color: var(--text-secondary); cursor: pointer;">
          <i data-lucide="x" style="width: 20px; height: 20px;"></i>
        </button>
      </div>

      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div class="form-group">
          <label class="form-label" style="font-weight: 500;">Customer Name <span style="color: var(--status-danger);">*</span></label>
          <input type="text" id="edit-cust-name" class="form-input" value="${customer.name || ''}">
        </div>

        <div class="form-group">
          <label class="form-label" style="font-weight: 500;">Phone Number</label>
          <input type="text" id="edit-cust-phone" class="form-input" placeholder="e.g. +91 98765 43210" value="${customer.phone && customer.phone !== '-' ? customer.phone : ''}">
        </div>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1.5rem; border-top: 1px solid var(--border-color); padding-top: 1rem;">
        <button type="button" class="btn btn-ghost delete-modal-cust-btn" style="color: var(--status-danger);">Delete Customer</button>
        <div style="display: flex; gap: 0.75rem;">
          <button type="button" class="btn btn-secondary cancel-modal-btn">Cancel</button>
          <button type="button" class="btn btn-primary save-modal-btn">Save Changes</button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  if (window.lucide) window.lucide.createIcons();

  const closeModal = () => modal.remove();
  modal.querySelector('.modal-close-btn').onclick = closeModal;
  modal.querySelector('.cancel-modal-btn').onclick = closeModal;

  const deleteModalCustBtn = modal.querySelector('.delete-modal-cust-btn');
  if (deleteModalCustBtn) {
    deleteModalCustBtn.onclick = async () => {
      const confirmed = await uiConfirm({ title: 'Confirm deletion', message: `Are you sure you want to delete customer "${customer.name}" (${customer.id})?\n\nTheir past sales records will be preserved for store reporting.\n\nThis action cannot be undone.`, confirmText: 'Delete', variant: 'danger' });
      if (confirmed) {
        try {
          store.deleteCustomer(customer.id);
          toast.show({ message: `Customer "${customer.name}" deleted successfully.`, type: 'info' });
          closeModal();
          if (onSaved) onSaved();
        } catch (err) {
          toast.show({ message: err.message, type: 'danger' });
        }
      }
    };
  }

  modal.querySelector('.save-modal-btn').onclick = () => {
    const name = modal.querySelector('#edit-cust-name').value.trim();
    const phone = modal.querySelector('#edit-cust-phone').value.trim();

    if (!name) {
      toast.show({ message: 'Customer Name is required.', type: 'danger' });
      return;
    }

    const oldName = customer.name;
    customer.name = name;
    customer.phone = phone || '-';

    // Synchronize customer name across sales linked by ID or previous name
    (store.data.sales || []).forEach(s => {
      if (s.customerId === customer.id || (!s.customerId && (s.customer || s.customerName || '').toLowerCase() === oldName.toLowerCase())) {
        s.customerId = customer.id;
        s.customer = customer.name;
        s.customerName = customer.name;
        if (customer.phone && customer.phone !== '-') s.phone = customer.phone;
      }
    });

    store.recalculateCustomerMetrics();
    store.save();

    toast.show({ message: `Customer details updated for ${name}.`, type: 'success' });
    closeModal();
    if (onSaved) onSaved();
  };
}


// ==========================================
// DEDICATED CUSTOMER EDIT PAGE (Separate Page)
// ==========================================

// ==========================================
// DEDICATED VIEW CUSTOMER PAGE
// ==========================================
function renderViewCustomerPage(params = {}, onNavigate = null) {
  if (typeof params === 'function') {
    onNavigate = params;
    params = {};
  }
  const container = document.createElement('div');
  container.className = 'page-container';

  const customerId = params.customerId || params.id;
  const customer = (store.data.customers || []).find(c => c.id === customerId);

  // Missing customer error state
  if (!customer) {
    const errorCard = document.createElement('div');
    errorCard.className = 'card';
    errorCard.style.cssText = 'text-align: center; padding: 3.5rem 1.5rem; display: flex; flex-direction: column; align-items: center; gap: 1.25rem;';
    errorCard.innerHTML = `
      <div style="width: 56px; height: 56px; border-radius: 50%; background: var(--status-danger-bg); display: flex; align-items: center; justify-content: center; color: var(--status-danger);">
        <i data-lucide="alert-triangle" style="width: 28px; height: 28px;"></i>
      </div>
      <div>
        <h2 style="font-size: 1.25rem; font-weight: 700; color: var(--text-primary); margin: 0 0 0.5rem 0;">Customer Not Found</h2>
        <p style="color: var(--text-secondary); margin: 0; font-size: 0.9rem; max-width: 440px;">
          The customer record with identifier "<strong>${escapeHtml(customerId || 'unknown')}</strong>" could not be located or may have been deleted.
        </p>
      </div>
      <button type="button" class="btn btn-secondary back-to-list-btn" style="margin-top: 0.5rem; display: inline-flex; align-items: center; gap: 0.4rem;">
        <i data-lucide="arrow-left" style="width: 16px; height: 16px;"></i>
        <span>Return to Customers</span>
      </button>
    `;
    errorCard.querySelector('.back-to-list-btn').addEventListener('click', () => {
      if (onNavigate) onNavigate('customers');
    });
    container.appendChild(errorCard);
    if (window.lucide) window.lucide.createIcons();
    return container;
  }

  // Billed vs collected, from the same store method the customers table uses,
  // so this page and the list can never show different totals.
  const summary = store.getCustomerPaymentSummary(customer);
  const customerSales = summary.sales;

  const totalOrders = summary.orders;
  const totalSpend = summary.totalPurchases;
  const totalPaid = summary.totalPaid;
  const outstanding = summary.outstanding;
  const avgOrderValue = totalOrders > 0 ? Math.round(totalSpend / totalOrders) : 0;

  // 1. Header (Breadcrumb & Action Buttons)
  const headerDiv = document.createElement('div');
  headerDiv.style.cssText = 'display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.25rem;';

  const breadcrumbWrap = document.createElement('div');
  breadcrumbWrap.style.cssText = 'display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap;';
  breadcrumbWrap.appendChild(createBreadcrumb([
    { label: 'Customers', target: 'customers' },
    { label: customer.name }
  ], onNavigate));
  breadcrumbWrap.appendChild(createBadge({ label: `${totalOrders} orders`, variant: 'info' }));
  headerDiv.appendChild(breadcrumbWrap);

  const headerActions = document.createElement('div');
  headerActions.style.cssText = 'display: flex; gap: 0.5rem; align-items: center;';

  const btnBack = document.createElement('button');
  btnBack.type = 'button';
  btnBack.className = 'btn btn-secondary btn-sm back-to-list-btn';
  btnBack.innerHTML = `<i data-lucide="arrow-left" style="width: 14px; height: 14px;"></i> <span>Back</span>`;
  btnBack.addEventListener('click', () => {
    if (onNavigate) onNavigate('customers');
  });
  headerActions.appendChild(btnBack);

  const btnEdit = document.createElement('button');
  btnEdit.type = 'button';
  btnEdit.className = 'btn btn-primary btn-sm edit-cust-page-btn';
  btnEdit.innerHTML = `<i data-lucide="pencil" style="width: 14px; height: 14px;"></i> <span>Edit Customer</span>`;
  btnEdit.addEventListener('click', () => {
    if (onNavigate) onNavigate('customers', { action: 'edit', customerId: customer.id });
  });
  headerActions.appendChild(btnEdit);

  headerDiv.appendChild(headerActions);
  container.appendChild(headerDiv);

  // 2. KPI Cards
  const kpiGrid = document.createElement('div');
  kpiGrid.className = 'kpi-grid';
  kpiGrid.style.cssText = 'display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem; margin-bottom: 1.25rem;';
  kpiGrid.innerHTML = `
    <div class="kpi-card" style="padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
      <div style="font-size: 0.75rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase;">Total Purchases</div>
      <div id="cust-kpi-purchases" style="font-size: 1.2rem; font-weight: 700; color: var(--brand-primary); margin-top: 0.25rem;">₹${totalSpend.toLocaleString('en-IN')}</div>
    </div>
    <div class="kpi-card" style="padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
      <div style="font-size: 0.75rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase;">Total Amount Paid</div>
      <div id="cust-kpi-paid" style="font-size: 1.2rem; font-weight: 700; color: var(--status-success); margin-top: 0.25rem;">₹${totalPaid.toLocaleString('en-IN')}</div>
    </div>
    <div class="kpi-card" style="padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
      <div style="font-size: 0.75rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase;">Total Outstanding Due</div>
      <div id="cust-kpi-outstanding" style="font-size: 1.2rem; font-weight: 700; margin-top: 0.25rem; color: ${outstanding > 0 ? 'var(--status-danger)' : 'var(--text-secondary)'};">₹${outstanding.toLocaleString('en-IN')}</div>
    </div>
    <div class="kpi-card" style="padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
      <div style="font-size: 0.75rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase;">Total Orders Completed</div>
      <div style="font-size: 1.2rem; font-weight: 700; color: var(--text-primary); margin-top: 0.25rem;">${totalOrders} purchases</div>
    </div>
    <div class="kpi-card" style="padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
      <div style="font-size: 0.75rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase;">Avg. Order Value</div>
      <div style="font-size: 1.2rem; font-weight: 700; color: var(--status-success); margin-top: 0.25rem;">₹${avgOrderValue.toLocaleString()}</div>
    </div>
    <div class="kpi-card" style="padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
      <div style="font-size: 0.75rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase;">Customer ID</div>
      <div style="font-size: 1.1rem; font-weight: 700; color: var(--text-primary); margin-top: 0.25rem;">${escapeHtml(customer.id)}</div>
    </div>
  `;
  container.appendChild(kpiGrid);

  // 3. Customer Profile Card
  const profileCard = document.createElement('div');
  profileCard.className = 'card';
  profileCard.style.cssText = 'display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1.25rem;';
  profileCard.innerHTML = `
    <div style="border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem;">
      <h3 style="font-size: 1.05rem; font-weight: 700; color: var(--text-primary); margin: 0; display: flex; align-items: center; gap: 0.5rem;">
        <i data-lucide="user" style="width: 18px; height: 18px; color: var(--brand-primary);"></i>
        Customer Profile Details
      </h3>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.25rem; font-size: 0.875rem;">
      <div>
        <div style="font-size: 0.75rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase;">Full Name</div>
        <div style="font-weight: 700; color: var(--text-primary); margin-top: 0.25rem; font-size: 1rem;">${escapeHtml(customer.name)}</div>
      </div>
      <div>
        <div style="font-size: 0.75rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase;">Phone Number</div>
        <div style="font-weight: 600; color: var(--text-primary); margin-top: 0.25rem;">${escapeHtml(customer.phone || 'Not Provided')}</div>
      </div>
      <div>
        <div style="font-size: 0.75rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase;">Email Address</div>
        <div style="color: var(--text-primary); margin-top: 0.25rem;">${escapeHtml(customer.email || '—')}</div>
      </div>
      <div>
        <div style="font-size: 0.75rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase;">City / Address</div>
        <div style="color: var(--text-primary); margin-top: 0.25rem;">${escapeHtml(customer.city || customer.address || '—')}</div>
      </div>
    </div>
  `;
  container.appendChild(profileCard);

  // 4. Sales History Table Card
  const salesCard = document.createElement('div');
  salesCard.className = 'card';
  salesCard.style.cssText = 'display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1.25rem;';
  salesCard.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem;">
      <h3 style="font-size: 1.05rem; font-weight: 700; color: var(--text-primary); margin: 0; display: flex; align-items: center; gap: 0.5rem;">
        <i data-lucide="shopping-bag" style="width: 18px; height: 18px; color: var(--brand-primary);"></i>
        Customer Purchase History (${customerSales.length} orders)
      </h3>
    </div>

    <div class="table-responsive" style="border: 1px solid var(--border-color); border-radius: var(--radius-sm);">
      <table class="admin-table" style="font-size: 0.85rem;">
        <thead>
          <tr>
            <th style="width: 5%; text-align: center;">S.No</th>
            <th style="width: 16%;">Sale Reference</th>
            <th style="width: 13%;">Date</th>
            <th style="width: 9%; text-align: center;">Units</th>
            <th style="width: 13%; text-align: right;">Total Amount</th>
            <th style="width: 13%; text-align: right;">Amount Paid</th>
            <th style="width: 13%; text-align: right;">Outstanding Due</th>
            <th style="width: 11%;">Payment Status</th>
            <th style="width: 7%; text-align: right;">Action</th>
          </tr>
        </thead>
        <tbody>
          ${customerSales.length === 0 ? `
            <tr><td colspan="9" style="text-align: center; color: var(--text-secondary); padding: 2rem;">No purchases on record for this customer.</td></tr>
          ` : customerSales.map((row, idx) => {
            const s = row.sale;
            const sUnits = (s.items || []).reduce((sum, item) => sum + (Number(item.qty || item.quantity || 1) || 0), 0);
            // Colour follows the ledger, not the label: anything still owing
            // reads as outstanding even if the sale is labelled otherwise.
            const payVariant = getStatusBadgeVariant(row.status);
            return `
              <tr>
                <td style="text-align: center; color: var(--text-secondary); font-weight: 600;">${idx + 1}</td>
                <td style="font-weight: 600; color: var(--text-primary);">${escapeHtml(row.reference)}</td>
                <td style="color: var(--text-secondary);">${escapeHtml(row.date || '—')}</td>
                <td style="text-align: center; font-weight: 600;">${sUnits} units</td>
                <td style="font-weight: 700; color: var(--brand-primary); text-align: right;">₹${row.totalAmount.toLocaleString('en-IN')}</td>
                <td style="font-weight: 600; color: var(--status-success); text-align: right;">₹${row.amountPaid.toLocaleString('en-IN')}</td>
                <td style="font-weight: 700; text-align: right; color: ${row.balanceDue > 0 ? 'var(--status-danger)' : 'var(--text-secondary)'};">₹${row.balanceDue.toLocaleString('en-IN')}</td>
                <td>
                  ${createBadge({ label: row.status, variant: payVariant }).outerHTML}
                  ${row.needsReview ? `<div style="font-size: 0.7rem; color: var(--status-warning-text); font-weight: 600; margin-top: 2px;">Amount needs review</div>` : ''}
                </td>
                <td style="text-align: right;">
                  <button type="button" class="btn btn-sm btn-secondary table-action-btn view-rel-sale-btn" data-sale-id="${s.id}" title="View Sale" aria-label="View Sale">
                    <i data-lucide="eye"></i>
                    <span class="sr-only">View Sale</span>
                  </button>
                </td>
              </tr>
            `;
          }).join('')}
        </tbody>
        <tfoot>
          <tr style="background: var(--bg-surface); font-weight: 700;">
            <td colspan="4" style="text-align: right; color: var(--text-secondary);">Totals</td>
            <td style="text-align: right; color: var(--brand-primary);">₹${totalSpend.toLocaleString('en-IN')}</td>
            <td style="text-align: right; color: var(--status-success);">₹${totalPaid.toLocaleString('en-IN')}</td>
            <td style="text-align: right; color: ${outstanding > 0 ? 'var(--status-danger)' : 'var(--text-secondary)'};">₹${outstanding.toLocaleString('en-IN')}</td>
            <td colspan="2"></td>
          </tr>
        </tfoot>
      </table>
    </div>
  `;

  salesCard.querySelectorAll('.view-rel-sale-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const sId = btn.getAttribute('data-sale-id');
      if (onNavigate) onNavigate('sales', { action: 'view', saleId: sId });
    });
  });

  container.appendChild(salesCard);

  // 5. Bottom Sticky Actions Bar
  const bottomBar = document.createElement('div');
  bottomBar.className = 'card';
  bottomBar.style.cssText = 'display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; padding: 1rem 1.25rem;';
  bottomBar.innerHTML = `
    <button type="button" class="btn btn-secondary back-to-list-bottom-btn" style="display: inline-flex; align-items: center; gap: 0.4rem; font-weight: 600;">
      <i data-lucide="arrow-left" style="width: 16px; height: 16px;"></i>
      <span>Back to Customers</span>
    </button>
    <div style="display: flex; gap: 0.75rem; align-items: center; flex-wrap: wrap;">
      <button type="button" class="btn btn-primary edit-cust-bottom-btn" style="display: inline-flex; align-items: center; gap: 0.4rem;">
        <i data-lucide="pencil" style="width: 16px; height: 16px;"></i>
        <span>Edit Customer</span>
      </button>
      <button type="button" class="btn btn-ghost delete-cust-bottom-btn" style="color: var(--status-danger); display: inline-flex; align-items: center; gap: 0.4rem;">
        <i data-lucide="trash-2" style="width: 16px; height: 16px;"></i>
        <span>Delete Customer</span>
      </button>
    </div>
  `;

  bottomBar.querySelector('.back-to-list-bottom-btn').addEventListener('click', () => {
    if (onNavigate) onNavigate('customers');
  });

  bottomBar.querySelector('.edit-cust-bottom-btn').addEventListener('click', () => {
    if (onNavigate) onNavigate('customers', { action: 'edit', customerId: customer.id });
  });

  bottomBar.querySelector('.delete-cust-bottom-btn').addEventListener('click', async () => {
    const confirmed = await uiConfirm({ title: 'Confirm deletion', message: `Are you sure you want to delete customer "${customer.name}" (${customer.id})?

Their past sales records will be preserved for store reporting.

This action cannot be undone.`, confirmText: 'Delete', variant: 'danger' });
    if (confirmed) {
      try {
        store.deleteCustomer(customer.id);
        toast.show({ message: `Customer "${customer.name}" deleted successfully.`, type: 'info' });
        if (onNavigate) onNavigate('customers');
      } catch (err) {
        toast.show({ message: err.message, type: 'danger' });
      }
    }
  });

  container.appendChild(bottomBar);

  if (window.lucide) window.lucide.createIcons();
  return container;
}

function renderEditCustomerPage(params = {}, onNavigate = null) {
  if (typeof params === 'function') {
    onNavigate = params;
    params = {};
  }
  const container = document.createElement('div');
  container.className = 'page-container';

  const customerId = params.customerId || params.id;
  const customer = (store.data.customers || []).find(c => c.id === customerId);

  // Missing record error state
  if (!customer) {
    const errorCard = document.createElement('div');
    errorCard.className = 'card';
    errorCard.style.cssText = 'text-align: center; padding: 3.5rem 1.5rem; display: flex; flex-direction: column; align-items: center; gap: 1.25rem;';
    errorCard.innerHTML = `
      <div style="width: 56px; height: 56px; border-radius: 50%; background: var(--status-danger-bg); display: flex; align-items: center; justify-content: center; color: var(--status-danger);">
        <i data-lucide="alert-triangle" style="width: 28px; height: 28px;"></i>
      </div>
      <div>
        <h2 style="font-size: 1.25rem; font-weight: 700; color: var(--text-primary); margin: 0 0 0.5rem 0;">Customer Not Found</h2>
        <p style="color: var(--text-secondary); margin: 0; font-size: 0.9rem; max-width: 440px;">
          The customer record with identifier "<strong>${escapeHtml(customerId || 'unknown')}</strong>" could not be located or may have been deleted.
        </p>
      </div>
      <button type="button" class="btn btn-secondary back-to-list-btn" style="margin-top: 0.5rem; display: inline-flex; align-items: center; gap: 0.4rem;">
        <i data-lucide="arrow-left" style="width: 16px; height: 16px;"></i>
        <span>Return to Customers</span>
      </button>
    `;
    errorCard.querySelector('.back-to-list-btn').addEventListener('click', () => {
      if (onNavigate) onNavigate('customers');
    });
    container.appendChild(errorCard);
    if (window.lucide) window.lucide.createIcons();
    return container;
  }

  let hasUnsavedChanges = false;
  const markChanged = () => { hasUnsavedChanges = true; };

  // 1. Header (Breadcrumb)
  const headerDiv = document.createElement('div');
  headerDiv.style.cssText = 'display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.25rem;';
  headerDiv.appendChild(createBreadcrumb([
    { label: 'Customers', target: 'customers' },
    { label: `Edit Customer (${escapeHtml(customer.name)})` }
  ], onNavigate));
  container.appendChild(headerDiv);

  // 2. Customer Summary KPIs
  const kpiCard = document.createElement('div');
  kpiCard.style.cssText = 'display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 1.25rem;';
  kpiCard.innerHTML = `
    <div class="card" style="padding: 1rem 1.25rem;">
      <div style="font-size: 0.75rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase;">Customer ID</div>
      <div style="font-size: 1.15rem; font-weight: 700; color: var(--text-primary); margin-top: 0.25rem; font-family: monospace;">${escapeHtml(customer.id)}</div>
    </div>
    <div class="card" style="padding: 1rem 1.25rem;">
      <div style="font-size: 0.75rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase;">Total Orders</div>
      <div style="font-size: 1.15rem; font-weight: 700; color: var(--text-primary); margin-top: 0.25rem;">${customer.ordersCount || 0} purchases</div>
    </div>
    <div class="card" style="padding: 1rem 1.25rem;">
      <div style="font-size: 0.75rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase;">Lifetime Spend</div>
      <div style="font-size: 1.15rem; font-weight: 700; color: var(--brand-primary); margin-top: 0.25rem;">₹${(customer.totalSpend || 0).toLocaleString()}</div>
      <div style="font-size: 0.775rem; font-weight: 600; margin-top: 0.2rem; color: ${Number(customer.outstanding || 0) > 0 ? 'var(--status-warning-text)' : 'var(--text-secondary)'};">
        ${Number(customer.outstanding || 0) > 0 ? `₹${Number(customer.outstanding).toLocaleString('en-IN')} outstanding` : 'No dues outstanding'}
      </div>
    </div>
    <div class="card" style="padding: 1rem 1.25rem;">
      <div style="font-size: 0.75rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase;">Last Purchase</div>
      <div style="font-size: 1.15rem; font-weight: 600; color: var(--text-secondary); margin-top: 0.25rem;">${escapeHtml(customer.lastPurchase || '—')}</div>
    </div>
  `;
  container.appendChild(kpiCard);

  // 3. Main Form Card
  const mainCard = document.createElement('div');
  mainCard.className = 'card';
  mainCard.style.cssText = 'display: flex; flex-direction: column; gap: 1.5rem; width: 100%;';

  mainCard.innerHTML = `
    <div>
      <h3 style="font-size: 1.05rem; font-weight: 600; margin: 0 0 0.25rem 0; color: var(--text-primary); display: flex; align-items: center; gap: 0.5rem;">
        <i data-lucide="user-pen" style="width: 18px; height: 18px; color: var(--brand-primary);"></i>
        Customer Contact Information
      </h3>
      <p style="font-size: 0.8rem; color: var(--text-secondary); margin: 0;">
        Update contact details and customer preferences. Changes will update customer references while preserving historical sales transactions.
      </p>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem;">
      <div class="form-group">
        <label class="form-label" style="font-weight: 600;">Customer Name <span style="color: var(--status-danger);">*</span></label>
        <input type="text" id="cust-edit-name" class="form-input" value="${escapeHtml(customer.name || '')}" placeholder="Full Customer Name">
      </div>

      <div class="form-group">
        <label class="form-label" style="font-weight: 600;">Phone Number</label>
        <input type="text" id="cust-edit-phone" class="form-input" value="${escapeHtml(customer.phone && customer.phone !== '-' ? customer.phone : '')}" placeholder="+91 98765 43210">
      </div>

      <div class="form-group">
        <label class="form-label" style="font-weight: 600;">Email Address</label>
        <input type="email" id="cust-edit-email" class="form-input" value="${escapeHtml(customer.email || '')}" placeholder="customer@example.com">
      </div>

      <div class="form-group">
        <label class="form-label" style="font-weight: 600;">City</label>
        <input type="text" id="cust-edit-city" class="form-input" value="${escapeHtml(customer.city || '')}" placeholder="e.g. Mumbai, Bangalore">
      </div>
    </div>

    <div class="form-group">
      <label class="form-label" style="font-weight: 600;">Address</label>
      <input type="text" id="cust-edit-address" class="form-input" value="${escapeHtml(customer.address || '')}" placeholder="Street, Flat/Building, Landmark">
    </div>

    <div class="form-group">
      <label class="form-label" style="font-weight: 600;">Customer Notes / Preferences</label>
      <textarea id="cust-edit-notes" class="form-input" rows="3" placeholder="Preferred fit, style choices, sizes, notes...">${escapeHtml(customer.notes || '')}</textarea>
    </div>

    <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-color); padding-top: 1.25rem; flex-wrap: wrap; gap: 0.75rem;">
      <button type="button" id="btn-cust-cancel" class="btn btn-secondary" style="font-weight: 600;">
        Back / Cancel
      </button>

      <button type="button" id="btn-cust-save" class="btn btn-primary" style="display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.65rem 1.5rem; font-weight: 600;">
        <i data-lucide="save" style="width: 16px; height: 16px;"></i>
        <span>Save Changes</span>
      </button>
    </div>
  `;

  container.appendChild(mainCard);

  mainCard.querySelectorAll('input, textarea').forEach(el => {
    el.addEventListener('input', markChanged);
  });

  mainCard.querySelector('#btn-cust-cancel').addEventListener('click', async () => {
    if (hasUnsavedChanges) {
      const leave = await uiConfirm({ title: 'Discard unsaved changes?', message: 'You have unsaved changes. Are you sure you want to discard them and return to Customers?', confirmText: 'Discard changes', variant: 'danger' });
      if (!leave) return;
    }
    if (onNavigate) onNavigate('customers');
  });

  mainCard.querySelector('#btn-cust-save').addEventListener('click', () => {
    const name = mainCard.querySelector('#cust-edit-name').value.trim();
    const phone = mainCard.querySelector('#cust-edit-phone').value.trim();
    const email = mainCard.querySelector('#cust-edit-email').value.trim();
    const city = mainCard.querySelector('#cust-edit-city').value.trim();
    const address = mainCard.querySelector('#cust-edit-address').value.trim();
    const notes = mainCard.querySelector('#cust-edit-notes').value.trim();

    if (!name) {
      toast.show({ message: 'Customer Name is required.', type: 'danger' });
      mainCard.querySelector('#cust-edit-name').focus();
      return;
    }

    try {
      store.updateCustomer(customer.id, {
        name,
        phone,
        email,
        city,
        address,
        notes
      });
      hasUnsavedChanges = false;
      toast.show({ message: `Customer "${name}" updated successfully.`, type: 'success' });
      if (onNavigate) onNavigate('customers');
    } catch (err) {
      toast.show({ message: err.message || 'Error updating customer.', type: 'danger' });
    }
  });

  if (window.lucide) window.lucide.createIcons();
  return container;
}

// CUSTOMERS PAGE (Standardized with Purchases Table UI & Full Pagination)
function renderCustomers(params = {}, onNavigate = null) {
  if (typeof params === 'function') {
    onNavigate = params;
    params = {};
  }
  if (params && params.action === 'edit') {
    return renderEditCustomerPage(params, onNavigate);
  }
  if (params && params.action === 'view') {
    return renderViewCustomerPage(params, onNavigate);
  }
  const container = document.createElement('div');
  container.className = 'page-container';

  let searchQuery = '';
  let currentPage = 1;
  let pageSize = 5;

  function getPageNumbers(current, total) {
    if (total <= 7) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }
    const pages = [];
    if (current <= 4) {
      for (let i = 1; i <= 5; i++) pages.push(i);
      pages.push('...');
      pages.push(total);
    } else if (current >= total - 3) {
      pages.push(1);
      pages.push('...');
      for (let i = total - 4; i <= total; i++) pages.push(i);
    } else {
      pages.push(1);
      pages.push('...');
      pages.push(current - 1);
      pages.push(current);
      pages.push(current + 1);
      pages.push('...');
      pages.push(total);
    }
    return pages;
  }

  const headerDiv = document.createElement('div');
  headerDiv.style.cssText = 'display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.25rem;';
  headerDiv.appendChild(createBreadcrumb([
    { label: 'Customers' }
  ], onNavigate));
  container.appendChild(headerDiv);

  const mainCard = document.createElement('div');
  mainCard.className = 'card';
  mainCard.style.cssText = 'display: flex; flex-direction: column; gap: 1.25rem;';

  mainCard.innerHTML = `
    <!-- Top Filter Bar -->
    <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
      <div style="font-size: 0.85rem; color: var(--text-secondary);">
        Total: <strong id="cust-count-label" style="color: var(--text-primary);">${(store.data.customers || []).length}</strong> Customers
      </div>

      <div class="search-input-wrapper" style="max-width: 280px; width: 100%;">
        <i data-lucide="search" class="search-icon"></i>
        <input type="text" class="form-input search-input" id="cust-search-input" placeholder="Search customer, phone..." style="padding-left: 2.25rem; font-size: 0.85rem;">
      </div>
    </div>

    <!-- Customers Table Container -->
    <div class="table-responsive" style="border: 1px solid var(--border-color); border-radius: var(--radius-sm);">
      <table class="admin-table" style="font-size: 0.875rem;">
        <thead>
          <tr>
            <th style="width: 5%; text-align: center;">S.No</th>
            <th style="width: 19%;">Customer Name</th>
            <th style="width: 14%;">Phone Number</th>
            <th style="width: 9%; text-align: center;">Orders</th>
            <th style="width: 15%; text-align: right;">Total Purchases</th>
            <th style="width: 15%; text-align: right;">Total Paid</th>
            <th style="width: 14%; text-align: right;">Outstanding Due</th>
            <th style="width: 9%; text-align: right;">Actions</th>
          </tr>
        </thead>
        <tbody id="cust-table-tbody"></tbody>
      </table>
    </div>

    <!-- Pagination Footer -->
    <div id="cust-pagination-container" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; padding-top: 0.25rem;">
      <div style="display: flex; align-items: center; gap: 1.25rem; flex-wrap: wrap;">
        <span id="cust-pagination-info" style="font-size: 0.825rem; color: var(--text-secondary);"></span>
        <div style="display: flex; align-items: center; gap: 0.45rem; font-size: 0.825rem; color: var(--text-secondary);">
          <span>Rows per page:</span>
          <select id="cust-page-size-select" class="form-select" style="padding: 0.25rem 0.55rem; font-size: 0.8rem; width: auto; height: auto;">
            <option value="5" selected>5</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
        </div>
      </div>

      <div id="cust-pagination-nav" style="display: flex; align-items: center; gap: 0.35rem; flex-wrap: wrap;"></div>
    </div>
  `;
  container.appendChild(mainCard);

  function renderCustomersTable() {
    const tbody = mainCard.querySelector('#cust-table-tbody');
    const countLabel = mainCard.querySelector('#cust-count-label');
    const paginationContainer = mainCard.querySelector('#cust-pagination-container');
    const paginationInfo = mainCard.querySelector('#cust-pagination-info');
    const paginationNav = mainCard.querySelector('#cust-pagination-nav');
    tbody.innerHTML = '';

    const allCustomers = store.data.customers || [];

    const filtered = allCustomers.filter(c => {
      if (!searchQuery) return true;
      const q = searchQuery.toLowerCase();
      const nameMatch = (c.name || '').toLowerCase().includes(q);
      const phoneMatch = (c.phone || '').toLowerCase().includes(q);
      return nameMatch || phoneMatch;
    });

    if (countLabel) countLabel.textContent = filtered.length;

    if (filtered.length === 0) {
      tbody.innerHTML = `<tr><td colspan="8" style="text-align: center; color: var(--text-secondary); padding: 2.5rem 1rem;">No customers found matching search.</td></tr>`;
      if (paginationInfo) paginationInfo.textContent = 'Showing 0 of 0 customers';
      if (paginationNav) paginationNav.innerHTML = '';
      if (paginationContainer) paginationContainer.style.display = 'none';
      return;
    }

    if (paginationContainer) paginationContainer.style.display = 'flex';

    const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
    if (currentPage > totalPages) currentPage = totalPages;
    if (currentPage < 1) currentPage = 1;

    const startIdx = (currentPage - 1) * pageSize;
    const endIdx = Math.min(startIdx + pageSize, filtered.length);
    const pageCustomers = filtered.slice(startIdx, endIdx);

    if (paginationInfo) {
      paginationInfo.innerHTML = `Showing <strong style="color: var(--text-primary); font-weight: 600;">${startIdx + 1}–${endIdx}</strong> of <strong style="color: var(--text-primary); font-weight: 600;">${filtered.length}</strong> customers`;
    }

    pageCustomers.forEach((c, index) => {
      const globalIndex = startIdx + index + 1;
      // Same source of truth as the customer view page, so the two agree.
      const summary = store.getCustomerPaymentSummary(c);
      const tr = document.createElement('tr');
      tr.style.cssText = 'transition: background-color 0.15s ease;';

      tr.innerHTML = `
        <td style="font-weight: 600; color: var(--text-secondary); text-align: center;">${globalIndex}</td>
        <td style="font-weight: 600; color: var(--text-primary);">${escapeHtml(c.name)}</td>
        <td style="color: var(--text-secondary);">${escapeHtml(c.phone || '-')}</td>
        <td style="font-weight: 600; color: var(--text-primary); text-align: center;">${summary.orders}</td>
        <td style="font-weight: 700; color: var(--brand-primary); text-align: right;">₹${summary.totalPurchases.toLocaleString('en-IN')}</td>
        <td style="font-weight: 600; color: var(--status-success); text-align: right;">₹${summary.totalPaid.toLocaleString('en-IN')}</td>
        <td style="font-weight: 700; text-align: right; color: ${summary.outstanding > 0 ? 'var(--status-danger)' : 'var(--text-secondary)'};">
          ₹${summary.outstanding.toLocaleString('en-IN')}
        </td>
        <td style="text-align: right;">
          <div style="display: flex; gap: 0.35rem; justify-content: flex-end;" class="row-actions-box">
            <button type="button" class="btn btn-sm btn-secondary table-action-btn view-cust-btn" title="View" aria-label="View">
              <i data-lucide="eye"></i>
              <span class="sr-only">View</span>
            </button>
            <button type="button" class="btn btn-sm btn-secondary table-action-btn edit-cust-btn" title="Edit" aria-label="Edit">
              <i data-lucide="pencil"></i>
              <span class="sr-only">Edit</span>
            </button>
            <button type="button" class="btn btn-sm btn-ghost table-action-btn delete-cust-btn" title="Delete" aria-label="Delete" style="color: var(--status-danger);">
              <i data-lucide="trash-2"></i>
              <span class="sr-only">Delete</span>
            </button>
          </div>
        </td>
      `;



      tr.querySelector('.view-cust-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        if (onNavigate) onNavigate('customers', { action: 'view', customerId: c.id });
        else openCustomerDetailsModal(c, onNavigate);
      });

      tr.querySelector('.edit-cust-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        if (onNavigate) onNavigate('customers', { action: 'edit', customerId: c.id });
      });

      const deleteCustBtn = tr.querySelector('.delete-cust-btn');
      if (deleteCustBtn) {
        deleteCustBtn.addEventListener('click', async (e) => {
          e.stopPropagation();
          const confirmed = await uiConfirm({ title: 'Confirm deletion', message: `Are you sure you want to delete customer "${c.name}" (${c.id})?\n\nTheir past sales records will be preserved for store reporting.\n\nThis action cannot be undone.`, confirmText: 'Delete', variant: 'danger' });
          if (confirmed) {
            try {
              store.deleteCustomer(c.id);
              toast.show({ message: `Customer "${c.name}" deleted successfully.`, type: 'info' });
              renderCustomersTable();
            } catch (err) {
              toast.show({ message: err.message, type: 'danger' });
            }
          }
        });
      }

      tbody.appendChild(tr);
    });

    // Render Navigation Buttons
    if (paginationNav) {
      paginationNav.innerHTML = '';

      // Previous Button
      const prevBtn = document.createElement('button');
      prevBtn.type = 'button';
      prevBtn.className = 'btn btn-sm btn-secondary cust-prev-btn';
      prevBtn.style.cssText = 'padding: 0.3rem 0.65rem; font-size: 0.8rem; display: inline-flex; align-items: center; gap: 0.35rem;';
      prevBtn.innerHTML = `<i data-lucide="chevron-left" style="width: 14px; height: 14px;"></i> Previous`;
      if (currentPage <= 1) {
        prevBtn.disabled = true;
        prevBtn.style.opacity = '0.5';
        prevBtn.style.cursor = 'not-allowed';
      } else {
        prevBtn.addEventListener('click', () => {
          currentPage--;
          renderCustomersTable();
        });
      }
      paginationNav.appendChild(prevBtn);

      // Page Numbers
      const pageNumbers = getPageNumbers(currentPage, totalPages);
      pageNumbers.forEach(p => {
        if (p === '...') {
          const dots = document.createElement('span');
          dots.style.cssText = 'padding: 0.3rem 0.45rem; font-size: 0.8rem; color: var(--text-secondary); user-select: none;';
          dots.textContent = '...';
          paginationNav.appendChild(dots);
        } else {
          const pageBtn = document.createElement('button');
          pageBtn.type = 'button';
          pageBtn.className = `btn btn-sm ${p === currentPage ? 'btn-primary' : 'btn-secondary'} cust-page-num-btn`;
          pageBtn.style.cssText = `padding: 0.3rem 0.65rem; font-size: 0.8rem; min-width: 32px; font-weight: ${p === currentPage ? '700' : '500'};`;
          pageBtn.textContent = p;
          if (p === currentPage) {
            pageBtn.setAttribute('aria-current', 'page');
          } else {
            pageBtn.addEventListener('click', () => {
              currentPage = p;
              renderCustomersTable();
            });
          }
          paginationNav.appendChild(pageBtn);
        }
      });

      // Next Button
      const nextBtn = document.createElement('button');
      nextBtn.type = 'button';
      nextBtn.className = 'btn btn-sm btn-secondary cust-next-btn';
      nextBtn.style.cssText = 'padding: 0.3rem 0.65rem; font-size: 0.8rem; display: inline-flex; align-items: center; gap: 0.35rem;';
      nextBtn.innerHTML = `Next <i data-lucide="chevron-right" style="width: 14px; height: 14px;"></i>`;
      if (currentPage >= totalPages) {
        nextBtn.disabled = true;
        nextBtn.style.opacity = '0.5';
        nextBtn.style.cursor = 'not-allowed';
      } else {
        nextBtn.addEventListener('click', () => {
          currentPage++;
          renderCustomersTable();
        });
      }
      paginationNav.appendChild(nextBtn);
    }

    if (window.lucide) window.lucide.createIcons();
  }

  const searchInput = mainCard.querySelector('#cust-search-input');
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim();
    currentPage = 1;
    renderCustomersTable();
  });

  const pageSizeSelect = mainCard.querySelector('#cust-page-size-select');
  pageSizeSelect.addEventListener('change', (e) => {
    pageSize = parseInt(e.target.value, 10) || 5;
    currentPage = 1;
    renderCustomersTable();
  });

  renderCustomersTable();
  return container;
}

// REPORTS PAGE
function renderReports(onNavigate = null) {
  const container = document.createElement('div');
  container.className = 'page-container';

  const metrics = store.getMetrics();
  const data = store.data || {};
  const sales = data.sales || [];
  const products = data.products || [];
  const purchases = data.purchases || [];
  const customers = data.customers || [];

  const totalRevenue = metrics.totalRevenue;
  const totalCogs = metrics.totalCogs;
  const grossProfit = metrics.grossProfit;
  const marginPct = metrics.marginPct;
  const qualifyingSalesCount = metrics.qualifyingSalesCount || metrics.salesCount;
  const totalUnitsSold = metrics.totalUnitsSold || 0;
  const totalPurchases = metrics.totalPurchases || 0;
  const stockValue = metrics.stockValue || 0;

  // Real-time verification assertions across all modules
  const qualSales = sales.filter(s => s && s.status !== 'Cancelled' && s.status !== 'Failed' && s.status !== 'Draft');
  const actualSalesRev = qualSales.reduce((sum, s) => sum + Number(s.totalAmount || 0), 0);
  const isSalesReconciled = totalRevenue === actualSalesRev;

  const isCogsReconciled = !metrics.hasMissingCosts;
  const isProfitReconciled = isCogsReconciled && (grossProfit === Math.max(0, totalRevenue - totalCogs));

  const actualTotalStock = products.reduce((sum, p) => sum + (p.variants || []).reduce((vSum, v) => vSum + Number(v.stock || 0), 0), 0);
  const isStockReconciled = metrics.totalStock === actualTotalStock;

  const isPurchasesReconciled = typeof metrics.purchasesUnitsReceived === 'number' && !isNaN(metrics.purchasesUnitsReceived);

  const regCustSpend = customers.reduce((s, c) => s + (c.totalSpend || 0), 0);
  const walkInRev = qualSales.filter(s => {
    const isReg = customers.some(c => (s.customerId && s.customerId === c.id) || (!s.customerId && (s.customer || s.customerName || '').toLowerCase() === c.name.toLowerCase()));
    return !isReg;
  }).reduce((sum, s) => sum + Number(s.totalAmount || 0), 0);
  const isCustomerReconciled = (regCustSpend + walkInRev) === totalRevenue;

  function renderReconBadge(isOk, okText, failText) {
    if (isOk) {
      return `<span class="badge badge-success"><i data-lucide="check-circle" style="width: 13px; height: 13px; display: inline-block; vertical-align: middle; margin-right: 4px;"></i>${okText}</span>`;
    }
    return `<span class="badge badge-warning"><i data-lucide="alert-triangle" style="width: 13px; height: 13px; display: inline-block; vertical-align: middle; margin-right: 4px;"></i>${failText}</span>`;
  }

  const headerDiv = document.createElement('div');
  headerDiv.style.cssText = 'display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.25rem;';
  headerDiv.appendChild(createBreadcrumb([
    { label: 'Reports' }
  ], onNavigate));
  container.appendChild(headerDiv);

  // Financial KPI Summary Grid (4 Reconciled Cards)
  const profitGrid = document.createElement('div');
  profitGrid.className = 'kpi-grid';
  profitGrid.appendChild(createMetricCard({
    label: 'Total Revenue',
    value: `₹${totalRevenue.toLocaleString('en-IN')}`,
    subtext: `<span style="color: var(--text-secondary);">${qualifyingSalesCount} sales orders</span>`,
    icon: 'dollar-sign',
    variant: 'success'
  }));
  profitGrid.appendChild(createMetricCard({
    label: 'Cost of Goods Sold (COGS)',
    value: `₹${totalCogs.toLocaleString('en-IN')}`,
    subtext: `<span style="color: var(--text-secondary);">Direct purchase unit costs</span>`,
    icon: 'receipt'
  }));
  profitGrid.appendChild(createMetricCard({
    label: 'Gross Profit',
    value: `₹${grossProfit.toLocaleString('en-IN')}`,
    subtext: `<span style="color: var(--status-success); font-weight: 600;">${marginPct}%</span> <span style="color: var(--text-secondary);">gross margin</span>`,
    icon: 'trending-up',
    variant: 'success'
  }));
  profitGrid.appendChild(createMetricCard({
    label: 'Available Inventory Valuation',
    value: `₹${stockValue.toLocaleString('en-IN')}`,
    subtext: `<span style="color: var(--text-secondary);">${metrics.totalStock} units across ${metrics.totalProducts} products</span>`,
    icon: 'boxes'
  }));
  container.appendChild(profitGrid);

  // Cash position: revenue is what was billed, collected is what actually came in.
  const payTotals = store.getPaymentTotals();
  const cashGrid = document.createElement('div');
  cashGrid.className = 'kpi-grid';
  cashGrid.style.marginTop = '1.25rem';
  cashGrid.appendChild(createMetricCard({
    label: 'Cash Collected',
    value: `₹${payTotals.collected.toLocaleString('en-IN')}`,
    subtext: `<span style="color: var(--text-secondary);">Payments actually received</span>`,
    icon: 'wallet',
    variant: 'success'
  }));
  cashGrid.appendChild(createMetricCard({
    label: 'Outstanding Receivables',
    value: `₹${payTotals.outstanding.toLocaleString('en-IN')}`,
    subtext: `<span style="color: var(--text-secondary);">${payTotals.unpaidCount} sale${payTotals.unpaidCount === 1 ? '' : 's'} awaiting payment${payTotals.unpaidCount > 0 ? ' — click to collect' : ''}</span>` +
      (payTotals.overpaid > 0 ? `<div style="color: var(--status-danger); margin-top: 2px;">₹${payTotals.overpaid.toLocaleString('en-IN')} overpaid on ${payTotals.overpaidCount} sale${payTotals.overpaidCount === 1 ? '' : 's'} (not netted)</div>` : ''),
    icon: 'hourglass',
    variant: payTotals.outstanding > 0 ? 'warning' : 'default',
    // Route straight from the figure to the sales that make it up.
    onClick: payTotals.unpaidCount > 0 && onNavigate ? () => onNavigate('sales', { filter: 'unpaid' }) : null
  }));
  cashGrid.appendChild(createMetricCard({
    label: 'Collection Rate',
    value: `${payTotals.revenue > 0 ? Math.round((payTotals.collected / payTotals.revenue) * 1000) / 10 : 100}%`,
    subtext: `<span style="color: var(--text-secondary);">of ₹${payTotals.revenue.toLocaleString('en-IN')} billed</span>`,
    icon: 'percent'
  }));
  container.appendChild(cashGrid);

  // Cross-Module Data Reconciliation Card
  const reconCard = document.createElement('div');
  reconCard.className = 'card';
  reconCard.style.cssText = 'margin-top: 1.5rem; display: flex; flex-direction: column; gap: 1rem;';
  reconCard.innerHTML = `
    <div class="card-header" style="border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem;">
      <div>
        <h3 class="card-title" style="font-size: 1.05rem; font-weight: 600;">Cross-Module Data Reconciliation Audit</h3>
        <p style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 0.2rem;">Authoritative metric verification derived directly from store records across all administrative pages.</p>
      </div>
    </div>

    <div class="table-responsive" style="border: 1px solid var(--border-color); border-radius: var(--radius-sm);">
      <table class="admin-table" style="font-size: 0.85rem;">
        <thead>
          <tr style="background: var(--bg-secondary);">
            <th style="width: 24%;">Module / Domain</th>
            <th style="width: 22%;">Records / Units</th>
            <th style="width: 22%;">Financial Total</th>
            <th style="width: 32%;">Reconciliation Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="font-weight: 600; color: var(--text-primary);">Sales Revenue</td>
            <td>${qualifyingSalesCount} Qualifying Orders (${totalUnitsSold} Units)</td>
            <td style="font-weight: 700; color: var(--text-primary);">₹${totalRevenue.toLocaleString('en-IN')}</td>
            <td>${renderReconBadge(isSalesReconciled, 'Reconciled with Sales Page', 'Discrepancy Detected')}</td>
          </tr>
          <tr>
            <td style="font-weight: 600; color: var(--text-primary);">Cost of Goods Sold (COGS)</td>
            <td>${qualifyingSalesCount} Orders (${totalUnitsSold} Units Sold)</td>
            <td style="font-weight: 700; color: var(--text-primary);">₹${totalCogs.toLocaleString('en-IN')}</td>
            <td>${renderReconBadge(isCogsReconciled, 'Exact Purchase Cost Lookup', 'Unmapped Cost Detected (' + (metrics.missingCostsCount || 0) + ' items)')}</td>
          </tr>
          <tr>
            <td style="font-weight: 600; color: var(--text-primary);">Gross Profit</td>
            <td>${marginPct}% Margin</td>
            <td style="font-weight: 700; color: var(--status-success);">₹${grossProfit.toLocaleString('en-IN')}</td>
            <td>${renderReconBadge(isProfitReconciled, 'Verified (Revenue − COGS)', 'Provisional (Pending Cost Review)')}</td>
          </tr>
          <tr>
            <td style="font-weight: 600; color: var(--text-primary);">Physical Inventory Stock</td>
            <td>${metrics.totalProducts} Products (${metrics.activeStock} Active · ${metrics.archivedStock} Archived)</td>
            <td style="font-weight: 700; color: var(--text-primary);">₹${stockValue.toLocaleString('en-IN')}</td>
            <td>${renderReconBadge(isStockReconciled, 'Matches Physical Stock (' + metrics.totalStock + ' Units)', 'Stock Variant Mismatch')}</td>
          </tr>
          <tr>
            <td style="font-weight: 600; color: var(--text-primary);">Purchases / Stock In</td>
            <td>${metrics.purchasesCompletedCount} Completed POs (${metrics.purchasesUnitsReceived} Units Rec.)</td>
            <td style="font-weight: 700; color: var(--text-primary);">₹${totalPurchases.toLocaleString('en-IN')}</td>
            <td>${renderReconBadge(isPurchasesReconciled, 'Reconciled with Purchases Page', 'Received Units Discrepancy')}</td>
          </tr>
          <tr>
            <td style="font-weight: 600; color: var(--text-primary);">Registered Customers</td>
            <td>${customers.length} Unique Customers</td>
            <td style="font-weight: 700; color: var(--brand-primary);">₹${regCustSpend.toLocaleString('en-IN')}</td>
            <td>${renderReconBadge(isCustomerReconciled, 'Reconciled Customer Billing', 'Customer & Walk-in Discrepancy')}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `;
  container.appendChild(reconCard);

  if (window.lucide) window.lucide.createIcons();
  return container;
}

// ==========================================
// RECORD PAYMENT PAGE (Separate Page)
// ==========================================
function renderRecordPaymentPage(params = {}, onNavigate = null) {
  if (typeof params === 'function') {
    onNavigate = params;
    params = {};
  }

  const container = document.createElement('div');
  container.className = 'page-container';

  const saleId = params.saleId || params.id;
  const sale = (store.data.sales || []).find(s => s.id === saleId || s.reference === saleId);
  const goBack = () => { if (onNavigate) onNavigate('sales', { action: 'view', saleId }); };

  if (!sale) {
    const errorCard = document.createElement('div');
    errorCard.className = 'card';
    errorCard.style.cssText = 'text-align: center; padding: 3.5rem 1.5rem; display: flex; flex-direction: column; align-items: center; gap: 1.25rem;';
    errorCard.innerHTML = `
      <div style="width: 56px; height: 56px; border-radius: 50%; background: var(--status-danger-bg); display: flex; align-items: center; justify-content: center; color: var(--status-danger);">
        <i data-lucide="alert-triangle" style="width: 28px; height: 28px;"></i>
      </div>
      <div>
        <h2 style="font-size: 1.25rem; font-weight: 700; color: var(--text-primary); margin: 0 0 0.5rem 0;">Sale Not Found</h2>
        <p style="color: var(--text-secondary); margin: 0; font-size: 0.9rem;">The sale "<strong>${escapeHtml(saleId || 'unknown')}</strong>" could not be located.</p>
      </div>
    `;
    const back = createButton({ text: 'Back to Sales', icon: 'arrow-left', variant: 'secondary', onClick: () => { if (onNavigate) onNavigate('sales'); } });
    errorCard.appendChild(back);
    container.appendChild(errorCard);
    if (window.lucide) window.lucide.createIcons();
    return container;
  }

  store.recalculateSalePayments(sale);

  const total = Number(sale.totalAmount || 0);
  const paid = Number(sale.amountPaid || 0);
  const balance = Number(sale.balanceDue || 0);

  // Header
  const headerDiv = document.createElement('div');
  headerDiv.style.cssText = 'display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.25rem;';
  const crumbWrap = document.createElement('div');
  crumbWrap.style.cssText = 'display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap;';
  crumbWrap.appendChild(createBreadcrumb([
    { label: 'Sales', target: 'sales' },
    { label: `Record Payment (${sale.id})` }
  ], onNavigate));
  crumbWrap.appendChild(createBadge({
    label: sale.status || 'Pending',
    variant: getStatusBadgeVariant(sale.status || 'Pending')
  }));
  headerDiv.appendChild(crumbWrap);
  const btnBack = document.createElement('button');
  btnBack.type = 'button';
  btnBack.className = 'btn btn-secondary btn-sm back-to-sale-btn';
  btnBack.innerHTML = `<i data-lucide="arrow-left" style="width: 14px; height: 14px;"></i> <span>Back</span>`;
  btnBack.addEventListener('click', goBack);
  headerDiv.appendChild(btnBack);
  container.appendChild(headerDiv);

  // Settled state
  if (balance <= 0) {
    const doneCard = document.createElement('div');
    doneCard.className = 'card';
    doneCard.style.cssText = 'text-align: center; padding: 3rem 1.5rem; display: flex; flex-direction: column; align-items: center; gap: 1rem;';
    doneCard.innerHTML = `
      <div style="width: 56px; height: 56px; border-radius: 50%; background: var(--status-success-bg); display: flex; align-items: center; justify-content: center; color: var(--status-success);">
        <i data-lucide="check-circle" style="width: 28px; height: 28px;"></i>
      </div>
      <div>
        <h2 style="font-size: 1.15rem; font-weight: 700; color: var(--text-primary); margin: 0 0 0.5rem 0;">Nothing left to collect</h2>
        <p style="color: var(--text-secondary); margin: 0; font-size: 0.9rem;">Sale ${escapeHtml(sale.id)} is fully settled at ₹${total.toLocaleString('en-IN')}.</p>
      </div>
    `;
    doneCard.appendChild(createButton({ text: 'Back to Sale', icon: 'arrow-left', variant: 'secondary', onClick: goBack }));
    container.appendChild(doneCard);
    if (window.lucide) window.lucide.createIcons();
    return container;
  }

  // Money summary
  const sumCard = document.createElement('div');
  sumCard.className = 'card';
  sumCard.style.cssText = 'margin-bottom: 1.25rem; padding: 1.15rem 1.35rem;';
  sumCard.innerHTML = `
    <div style="display: flex; flex-wrap: wrap; gap: 2rem;">
      <div>
        <div style="font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-secondary); font-weight: 600; margin-bottom: 0.25rem;">Customer</div>
        <div style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary);">${escapeHtml(sale.customer || sale.customerName || 'Walk-in Customer')}</div>
      </div>
      <div>
        <div style="font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-secondary); font-weight: 600; margin-bottom: 0.25rem;">Sale Total</div>
        <div style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary);">₹${total.toLocaleString('en-IN')}</div>
      </div>
      <div>
        <div style="font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-secondary); font-weight: 600; margin-bottom: 0.25rem;">Already Paid</div>
        <div style="font-size: 0.95rem; font-weight: 700; color: var(--status-success);">₹${paid.toLocaleString('en-IN')}</div>
      </div>
      <div>
        <div style="font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-secondary); font-weight: 600; margin-bottom: 0.25rem;">Outstanding</div>
        <div id="pay-outstanding" style="font-size: 0.95rem; font-weight: 700; color: var(--status-warning-text);">₹${balance.toLocaleString('en-IN')}</div>
      </div>
    </div>
  `;
  container.appendChild(sumCard);

  // Payment form
  const formCard = document.createElement('div');
  formCard.className = 'card';
  formCard.innerHTML = `
    <div style="padding-bottom: 0.85rem; border-bottom: 1px solid var(--border-color); margin-bottom: 1.25rem;">
      <h3 class="card-title" style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.25rem;">
        <i data-lucide="wallet" style="width: 18px; height: 18px; color: var(--brand-primary);"></i>
        Record a Payment
      </h3>
      <p style="font-size: 0.78rem; color: var(--text-secondary); margin: 0;">Recording a payment updates the balance only. Stock is never affected.</p>
    </div>

    <form id="record-payment-form" novalidate style="display: flex; flex-direction: column; gap: 1.25rem; max-width: 720px;">
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem;">
        <div class="form-group">
          <label class="form-label" for="payment-amount-input" style="font-weight: 600; color: var(--text-primary); font-size: 0.875rem;">Amount (₹) *</label>
          <input type="number" class="form-input" id="payment-amount-input" min="0" step="0.01" value="${balance}" data-max="${balance}">
        </div>
        <div class="form-group">
          <label class="form-label" for="payment-method-select" style="font-weight: 600; color: var(--text-primary); font-size: 0.875rem;">Payment Method</label>
          <select class="form-select" id="payment-method-select">
            <option value="Cash">Cash</option>
            <option value="UPI">UPI</option>
            <option value="Card">Card</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label" for="payment-date-input" style="font-weight: 600; color: var(--text-primary); font-size: 0.875rem;">Payment Date</label>
          <input type="date" class="form-input" id="payment-date-input" value="${new Date().toISOString().split('T')[0]}">
        </div>
      </div>

      <div class="form-group">
        <label class="form-label" for="payment-note-input" style="font-weight: 600; color: var(--text-primary); font-size: 0.875rem;">Note</label>
        <input type="text" class="form-input" id="payment-note-input" placeholder="e.g. second instalment, collected in store">
      </div>

      <div id="payment-preview" style="font-size: 0.85rem; color: var(--text-secondary);"></div>

      <div style="display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap;">
        <button type="submit" class="btn btn-primary record-payment-btn" style="padding: 0.55rem 1.35rem; font-weight: 600;">Record Payment</button>
        <button type="button" class="btn btn-secondary cancel-payment-btn">Cancel</button>
        <span id="payment-error" style="display: none; font-size: 0.8rem; color: var(--status-danger); font-weight: 500;"></span>
      </div>
    </form>
  `;
  container.appendChild(formCard);

  const amountEl = formCard.querySelector('#payment-amount-input');
  const previewEl = formCard.querySelector('#payment-preview');
  const errEl = formCard.querySelector('#payment-error');

  const updatePreview = () => {
    const amt = parseFloat(amountEl.value);
    if (!isFinite(amt) || amt <= 0) {
      previewEl.textContent = 'Enter an amount to see the remaining balance.';
      previewEl.style.color = 'var(--text-secondary)';
      return;
    }
    if (amt - balance > 0.005) {
      previewEl.textContent = `That is more than the ₹${balance.toLocaleString('en-IN')} outstanding.`;
      previewEl.style.color = 'var(--status-danger)';
      return;
    }
    const left = Math.round((balance - amt) * 100) / 100;
    previewEl.textContent = left <= 0
      ? 'This payment settles the sale in full — status becomes Paid.'
      : `Remaining after this payment: ₹${left.toLocaleString('en-IN')} — status stays Partial.`;
    previewEl.style.color = left <= 0 ? 'var(--status-success)' : 'var(--status-warning-text)';
  };
  amountEl.addEventListener('input', updatePreview);
  updatePreview();

  formCard.querySelector('.cancel-payment-btn').addEventListener('click', goBack);

  formCard.querySelector('#record-payment-form').addEventListener('submit', (e) => {
    e.preventDefault();
    errEl.style.display = 'none';
    errEl.textContent = '';
    try {
      store.recordSalePayment(sale.id, {
        amount: parseFloat(amountEl.value),
        method: formCard.querySelector('#payment-method-select').value,
        date: formCard.querySelector('#payment-date-input').value,
        note: formCard.querySelector('#payment-note-input').value
      });
      toast.show({ message: 'Payment recorded.', type: 'success' });
      if (onNavigate) onNavigate('sales', { action: 'view', saleId: sale.id });
    } catch (err) {
      errEl.textContent = err.message;
      errEl.style.display = 'inline';
      toast.show({ message: err.message, type: 'danger' });
    }
  });

  if (window.lucide) window.lucide.createIcons();
  return container;
}

// ==========================================
// EDIT PROFILE PAGE (opened from the topbar profile)
// ------------------------------------------
// Section-card layout over the SAME storeInfo fields and the SAME
// store.updateStoreInfo() validation. No new fields, no new palette.
// The app has no authentication, password or avatar-upload support, so
// there is deliberately no Security section and no photo upload here.
// ==========================================
function renderProfilePage(params = {}, onNavigate = null) {
  if (typeof params === 'function') {
    onNavigate = params;
    params = {};
  }

  const container = document.createElement('div');
  container.className = 'page-container profile-page';

  const info = store.getStoreInfo();
  const initialsOf = (name) => (name || 'S')
    .split(/\s+/).filter(Boolean).slice(0, 2)
    .map(w => w[0].toUpperCase()).join('') || 'S';

  let hasUnsavedChanges = false;
  let isSubmitting = false;
  const markChanged = () => { hasUnsavedChanges = true; };

  const leavePage = async (target) => {
    if (hasUnsavedChanges) {
      const leave = await uiConfirm({
        title: 'Discard unsaved changes?',
        message: 'You have unsaved changes to your profile. Are you sure you want to discard them?',
        confirmText: 'Discard changes',
        cancelText: 'Keep editing',
        variant: 'danger'
      });
      if (!leave) return;
    }
    if (onNavigate) onNavigate(target || 'overview');
  };

  // ---------------------------------------------- 1. Page header
  const headerDiv = document.createElement('div');
  headerDiv.style.cssText = 'display: flex; align-items: flex-start; justify-content: space-between; flex-wrap: wrap; gap: 1rem;';

  const headerText = document.createElement('div');
  headerText.style.cssText = 'min-width: 0;';
  headerText.appendChild(createBreadcrumb([
    { label: 'Profile', target: 'profile' },
    { label: 'Edit Profile' }
  ], onNavigate));
  const headerDesc = document.createElement('p');
  headerDesc.style.cssText = 'font-size: 0.85rem; color: var(--text-secondary); margin: 0.4rem 0 0 0; max-width: 60ch;';
  headerDesc.textContent = 'Update your account information. These details appear in the admin header and sidebar.';
  headerText.appendChild(headerDesc);
  headerDiv.appendChild(headerText);

  const btnBack = document.createElement('button');
  btnBack.type = 'button';
  btnBack.className = 'btn btn-secondary btn-sm profile-back-btn';
  btnBack.innerHTML = `<i data-lucide="arrow-left" style="width: 14px; height: 14px;"></i> <span>Back</span>`;
  btnBack.addEventListener('click', () => leavePage('overview'));
  headerDiv.appendChild(btnBack);
  container.appendChild(headerDiv);

  // ---------------------------------------------- 2. Profile summary
  const idCard = document.createElement('div');
  idCard.className = 'card profile-summary-card';
  idCard.style.cssText = 'padding: 1.35rem 1.5rem;';
  idCard.innerHTML = `
    <div style="display: flex; align-items: center; gap: 1.15rem; flex-wrap: wrap;">
      <div id="profile-avatar" aria-hidden="true" style="width: 64px; height: 64px; border-radius: 50%; background-color: var(--brand-primary); color: var(--brand-text); display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 1.4rem; letter-spacing: 0.02em; flex-shrink: 0;">
        ${escapeHtml(initialsOf(info.ownerName))}
      </div>
      <div style="min-width: 0; display: flex; flex-direction: column; gap: 0.2rem;">
        <div id="profile-display-name" style="font-size: 1.25rem; font-weight: 700; color: var(--text-primary); line-height: 1.25;">${escapeHtml(info.ownerName || 'Store Owner')}</div>
        <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
          <span id="profile-display-role" class="badge badge-secondary" style="font-weight: 600;">${escapeHtml(info.ownerRole || 'Store Owner')}</span>
        </div>
        <div id="profile-display-store" style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 0.15rem;">
          ${escapeHtml(info.name || '')}${info.branch ? ' — ' + escapeHtml(info.branch) : ''}
        </div>
      </div>
    </div>
  `;
  container.appendChild(idCard);

  // ---------------------------------------------- 3. The form
  const form = document.createElement('form');
  form.id = 'profile-details-form';
  form.noValidate = true;
  form.style.cssText = 'display: flex; flex-direction: column; gap: 1.5rem;';

  // One field definition drives markup, population and error placement.
  // The form is noValidate, so `required` is advisory for assistive tech only —
  // the app's own validation still decides what is allowed to save.
  const field = ({ id, label, value, placeholder, required, type = 'text', help }) => `
    <div class="form-group">
      <label class="form-label" for="${id}">${escapeHtml(label)}${required ? ' <span aria-hidden="true" style="color: var(--status-danger);">*</span>' : ''}</label>
      <input type="${type}" class="form-input" id="${id}" value="${escapeHtml(value || '')}" placeholder="${escapeHtml(placeholder || '')}" autocomplete="off" aria-describedby="${id}-error"${required ? ' required aria-required="true"' : ''}>
      ${help ? `<div style="font-size: 0.75rem; color: var(--text-secondary);">${escapeHtml(help)}</div>` : ''}
      <div class="field-error" id="${id}-error" data-error-for="${id}" role="alert" style="display: none; font-size: 0.75rem; font-weight: 500; color: var(--status-danger);"></div>
    </div>
  `;

  const sectionCard = ({ icon, title, description, body }) => `
    <section class="card profile-section-card" style="padding: 1.25rem 1.5rem;">
      <div style="padding-bottom: 0.85rem; border-bottom: 1px solid var(--border-color); margin-bottom: 1.15rem;">
        <h3 class="card-title" style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.2rem; font-size: 1rem;">
          <i data-lucide="${icon}" style="width: 17px; height: 17px; color: var(--brand-primary);"></i>
          ${escapeHtml(title)}
        </h3>
        <p style="font-size: 0.78rem; color: var(--text-secondary); margin: 0;">${escapeHtml(description)}</p>
      </div>
      <div class="profile-field-grid">
        ${body}
      </div>
    </section>
  `;

  form.innerHTML = `
    ${sectionCard({
      icon: 'user',
      title: 'Personal Information',
      description: 'Your name and role as they appear in the admin header.',
      body: field({ id: 'store-owner-name', label: 'Owner Name', value: info.ownerName, placeholder: 'e.g. Suresh Menon', required: true })
          + field({ id: 'store-owner-role', label: 'Owner Role', value: info.ownerRole, placeholder: 'e.g. Store Owner' })
    })}

    ${sectionCard({
      icon: 'store',
      title: 'Store Information',
      description: 'The store identity and contact details shown in the sidebar and on reports.',
      body: field({ id: 'store-name-input', label: 'Store Name', value: info.name, placeholder: 'e.g. Apex Fashion Store', required: true })
          + field({ id: 'store-branch-input', label: 'Branch', value: info.branch, placeholder: 'e.g. Main Street Branch #01' })
          + field({ id: 'store-email-input', label: 'Store Email', value: info.email, placeholder: 'e.g. manager@apexfashion.com', type: 'email' })
          + field({ id: 'store-phone-input', label: 'Store Phone', value: info.phone, placeholder: 'e.g. +91 98765 43210', type: 'tel' })
          + `<div style="grid-column: 1 / -1;">${field({ id: 'store-address-input', label: 'Store Address', value: info.address, placeholder: 'e.g. 124 Commerce Avenue, Fashion District' })}</div>`
    })}

    <div class="card profile-form-footer" style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; padding: 1rem 1.5rem;">
      <span id="store-details-error" style="display: none; font-size: 0.82rem; color: var(--status-danger); font-weight: 500;"></span>
      <div style="display: flex; gap: 0.75rem; margin-left: auto; flex-wrap: wrap;">
        <button type="button" class="btn btn-secondary profile-cancel-btn">Cancel</button>
        <button type="submit" class="btn btn-primary" id="save-store-details-btn" style="padding: 0.55rem 1.4rem; font-weight: 600;">Save Changes</button>
      </div>
    </div>
  `;
  container.appendChild(form);

  const errEl = form.querySelector('#store-details-error');
  const saveBtn = form.querySelector('#save-store-details-btn');

  const fieldIds = ['store-owner-name', 'store-owner-role', 'store-email-input', 'store-phone-input', 'store-address-input', 'store-name-input', 'store-branch-input'];

  const clearErrors = () => {
    errEl.style.display = 'none';
    errEl.textContent = '';
    form.querySelectorAll('.field-error').forEach(el => { el.style.display = 'none'; el.textContent = ''; });
    fieldIds.forEach(id => {
      const el = form.querySelector('#' + id);
      if (el) { el.style.borderColor = ''; el.removeAttribute('aria-invalid'); }
    });
  };

  /** Put the message under the field it belongs to; fall back to the footer. */
  const showError = (message) => {
    const map = [
      [/owner name/i, 'store-owner-name'],
      [/store name/i, 'store-name-input'],
      [/email/i, 'store-email-input']
    ];
    const hit = map.find(([re]) => re.test(message));
    if (hit) {
      const target = form.querySelector(`[data-error-for="${hit[1]}"]`);
      const input = form.querySelector('#' + hit[1]);
      if (target) { target.textContent = message; target.style.display = 'block'; }
      if (input) {
        input.style.borderColor = 'var(--status-danger)';
        input.setAttribute('aria-invalid', 'true');
        input.focus();
      }
      return;
    }
    errEl.textContent = message;
    errEl.style.display = 'inline';
  };

  form.querySelectorAll('input').forEach(el => el.addEventListener('input', markChanged));
  form.querySelector('.profile-cancel-btn').addEventListener('click', () => leavePage('overview'));

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    clearErrors();

    // Values are read, never cleared — a failed save leaves every input intact.
    const payload = {
      ownerName: form.querySelector('#store-owner-name').value,
      ownerRole: form.querySelector('#store-owner-role').value,
      name: form.querySelector('#store-name-input').value,
      branch: form.querySelector('#store-branch-input').value,
      phone: form.querySelector('#store-phone-input').value,
      email: form.querySelector('#store-email-input').value,
      address: form.querySelector('#store-address-input').value
    };

    // Nothing to write when every value already matches what is stored.
    // updateStoreInfo() trims, so compare trimmed values.
    const trim = v => String(v === undefined || v === null ? '' : v).trim();
    const unchanged = Object.keys(payload).every(k => trim(payload[k]) === trim(info[k]));
    if (unchanged) {
      hasUnsavedChanges = false;
      toast.show({ message: 'No changes to save.' });
      return;
    }

    isSubmitting = true;
    saveBtn.disabled = true;
    const originalLabel = saveBtn.textContent;
    saveBtn.textContent = 'Saving...';

    try {
      store.updateStoreInfo(payload);
      hasUnsavedChanges = false;
      toast.show({ message: 'Profile updated.', type: 'success' });
      // Re-render so the header, sidebar and summary pick up the change.
      if (window.appInstance) window.appInstance.render();
    } catch (err) {
      showError(err.message);
      toast.show({ message: err.message, type: 'danger' });
      isSubmitting = false;
      saveBtn.disabled = false;
      saveBtn.textContent = originalLabel;
    }
  });

  if (window.lucide) window.lucide.createIcons();
  return container;
}

// SETTINGS PAGE
function renderSettings(onThemeToggle, onNavigate = null) {
  const container = document.createElement('div');
  container.className = 'page-container';

  const data = store.data;
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';

  const headerDiv = document.createElement('div');
  headerDiv.style.cssText = 'display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;';
  headerDiv.appendChild(createBreadcrumb([
    { label: 'Settings' }
  ], onNavigate));
  container.appendChild(headerDiv);

  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: space-between; padding-bottom: 1rem; border-bottom: 1px solid var(--border-color);">
      <div>
        <h3 class="card-title">Interface Theme</h3>
        <p style="font-size: 0.78rem; color: var(--text-secondary);">Switch between Light Mode (#F1F3F6) and Dark Mode (#080D1C)</p>
      </div>
      <button class="btn btn-secondary btn-sm" id="settings-theme-toggle-btn">
        <i data-lucide="${currentTheme === 'dark' ? 'sun' : 'moon'}" style="width: 16px; height: 16px;"></i> Toggle Theme
      </button>
    </div>
  `;

  card.querySelector('#settings-theme-toggle-btn').addEventListener('click', onThemeToggle);
  container.appendChild(card);

  // INVENTORY SETTINGS
  const currentThreshold = store.getLowStockThreshold();
  const invSettingsCard = document.createElement('div');
  invSettingsCard.className = 'card';
  invSettingsCard.style.marginTop = '1.25rem';
  invSettingsCard.innerHTML = `
    <div style="padding-bottom: 0.85rem; border-bottom: 1px solid var(--border-color); margin-bottom: 1.25rem;">
      <h3 class="card-title" style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.25rem;">
        <i data-lucide="sliders" style="width: 18px; height: 18px; color: var(--brand-primary);"></i>
        Inventory Settings
      </h3>
      <p style="font-size: 0.78rem; color: var(--text-secondary); margin: 0;">Configure stock level warnings and automated inventory alerts for your store.</p>
    </div>

    <form id="inventory-settings-form" style="display: flex; flex-direction: column; gap: 1.25rem; max-width: 520px;">
      <div class="form-group" style="display: flex; flex-direction: column; gap: 0.35rem;">
        <label for="low-stock-threshold-input" class="form-label" style="font-weight: 600; color: var(--text-primary); font-size: 0.875rem;">
          Low Stock Threshold
        </label>
        <div style="display: flex; align-items: center; gap: 0.65rem;">
          <input 
            type="number" 
            id="low-stock-threshold-input" 
            name="lowStockThreshold" 
            class="form-input" 
            min="1" 
            step="1" 
            value="${currentThreshold}" 
            required 
            style="width: 130px; font-weight: 600;"
          />
          <span style="font-size: 0.85rem; color: var(--text-secondary); font-weight: 500;">units</span>
        </div>
        <p style="font-size: 0.78rem; color: var(--text-secondary); margin: 0.25rem 0 0 0; line-height: 1.45;">
          Products or sizes with available stock at or below this quantity will be marked as Low Stock.
        </p>
        <div id="threshold-error-msg" style="display: none; font-size: 0.78rem; color: var(--status-danger); margin-top: 0.35rem; font-weight: 500;"></div>
      </div>

      <div style="display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;">
        <button type="submit" class="btn btn-primary" id="save-inv-settings-btn" style="padding: 0.5rem 1.25rem;">
          Save Changes
        </button>
        <span id="threshold-success-msg" style="display: none; font-size: 0.825rem; color: var(--status-success); font-weight: 600; align-items: center; gap: 0.35rem;">
          <i data-lucide="check-circle" style="width: 15px; height: 15px;"></i> Settings saved successfully.
        </span>
      </div>
    </form>
  `;

  const form = invSettingsCard.querySelector('#inventory-settings-form');
  const input = invSettingsCard.querySelector('#low-stock-threshold-input');
  const errorMsg = invSettingsCard.querySelector('#threshold-error-msg');
  const successMsg = invSettingsCard.querySelector('#threshold-success-msg');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    errorMsg.style.display = 'none';
    successMsg.style.display = 'none';

    const rawVal = input.value.trim();
    if (!rawVal) {
      errorMsg.textContent = 'Please enter a low stock threshold.';
      errorMsg.style.display = 'block';
      input.focus();
      return;
    }

    const num = Number(rawVal);
    if (!Number.isInteger(num) || num < 1) {
      errorMsg.textContent = 'Threshold must be a positive whole number (minimum 1 unit).';
      errorMsg.style.display = 'block';
      input.focus();
      return;
    }

    const res = store.setLowStockThreshold(num);
    if (res.success) {
      input.value = res.threshold;
      successMsg.innerHTML = '<i data-lucide="check-circle" style="width: 15px; height: 15px; display: inline-block; vertical-align: middle; margin-right: 4px;"></i> Low Stock Threshold updated to ' + res.threshold + ' units successfully.';
      successMsg.style.display = 'inline-flex';
      if (window.lucide) window.lucide.createIcons();
      if (typeof toast !== 'undefined' && toast.show) {
        toast.show({ message: `Low Stock Threshold saved (${res.threshold} units).`, type: 'success' });
      }
      setTimeout(() => {
        if (successMsg) successMsg.style.display = 'none';
      }, 4000);
    } else {
      errorMsg.textContent = res.error || 'Failed to update threshold.';
      errorMsg.style.display = 'block';
    }
  });

  container.appendChild(invSettingsCard);

  // SHARED STORE CONFIGURATION CARD (Categories, Brands, Sizes)
  const configCard = document.createElement('div');
  configCard.className = 'card';
  configCard.style.marginTop = '1.25rem';

  configCard.innerHTML = `
    <div style="padding-bottom: 0.85rem; border-bottom: 1px solid var(--border-color); margin-bottom: 1.25rem;">
      <h3 class="card-title" style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.25rem;">
        <i data-lucide="tag" style="width: 18px; height: 18px; color: var(--brand-primary);"></i>
        Store & Catalog Configuration
      </h3>
      <p style="font-size: 0.78rem; color: var(--text-secondary); margin: 0;">Shared categories, brands, and size attributes used across Inventory, Purchases, and Sales.</p>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
      <!-- Categories -->
      <div style="display: flex; flex-direction: column; gap: 0.65rem;">
        <label id="settings-categories-label" style="font-size: 0.85rem; font-weight: 600; color: var(--text-primary);">Categories (0)</label>
        <div style="display: flex; flex-wrap: wrap; gap: 0.4rem;" id="settings-categories-list"></div>
        <div style="display: flex; gap: 0.5rem; margin-top: 0.25rem;">
          <input type="text" id="add-category-input" class="form-input" placeholder="New category..." style="font-size: 0.8rem; padding: 0.35rem 0.65rem;">
          <button type="button" class="btn btn-secondary btn-sm" id="btn-add-category">Add</button>
        </div>
      </div>

      <!-- Brands -->
      <div style="display: flex; flex-direction: column; gap: 0.65rem;">
        <label id="settings-brands-label" style="font-size: 0.85rem; font-weight: 600; color: var(--text-primary);">Brands (0)</label>
        <div style="display: flex; flex-wrap: wrap; gap: 0.4rem;" id="settings-brands-list"></div>
        <div style="display: flex; gap: 0.5rem; margin-top: 0.25rem;">
          <input type="text" id="add-brand-input" class="form-input" placeholder="New brand..." style="font-size: 0.8rem; padding: 0.35rem 0.65rem;">
          <button type="button" class="btn btn-secondary btn-sm" id="btn-add-brand">Add</button>
        </div>
      </div>

      <!-- Sizes -->
      <div style="display: flex; flex-direction: column; gap: 0.65rem;">
        <label id="settings-sizes-label" style="font-size: 0.85rem; font-weight: 600; color: var(--text-primary);">Sizes (0)</label>
        <div style="display: flex; flex-wrap: wrap; gap: 0.4rem;" id="settings-sizes-list"></div>
        <div style="display: flex; gap: 0.5rem; margin-top: 0.25rem;">
          <input type="text" id="add-size-input" class="form-input" placeholder="e.g. XXL, 42..." style="font-size: 0.8rem; padding: 0.35rem 0.65rem;">
          <button type="button" class="btn btn-secondary btn-sm" id="btn-add-size">Add</button>
        </div>
      </div>
    </div>
  `;

  function showInUseWarning(type, item, usage) {
    const typeLabel = type.charAt(0).toUpperCase() + type.slice(1);
    const body = document.createElement('div');
    body.style.cssText = 'display: flex; flex-direction: column; gap: 0.85rem; font-size: 0.85rem; color: var(--text-primary);';
    body.innerHTML = `
      <div style="display: flex; align-items: flex-start; gap: 0.65rem; padding: 0.75rem 0.9rem; background: var(--status-danger-bg); border: 1px solid var(--status-danger-border); border-radius: var(--radius-sm, 6px); color: var(--status-danger);">
        <i data-lucide="alert-triangle" style="width: 20px; height: 20px; flex-shrink: 0; margin-top: 1px;"></i>
        <div>
          <div style="font-weight: 600; font-size: 0.88rem; margin-bottom: 2px;">Cannot Delete ${typeLabel} "${item}"</div>
          <div style="font-size: 0.8rem; opacity: 0.9;">This catalog option is currently linked to existing store records.</div>
        </div>
      </div>
      <div style="display: flex; flex-direction: column; gap: 0.35rem;">
        <div style="font-weight: 600; color: var(--text-secondary); font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.03em;">Active References:</div>
        <div style="background: var(--bg-secondary); padding: 0.65rem 0.85rem; border-radius: var(--radius-sm, 6px); border: 1px solid var(--border-color); font-size: 0.825rem; line-height: 1.45;">
          ${usage.details}
        </div>
      </div>
      <div style="font-size: 0.8rem; color: var(--text-secondary); line-height: 1.45;">
        To preserve historical inventory, purchase orders, and sales integrity, deletion is prevented.
      </div>
      <div style="display: flex; align-items: center; gap: 0.45rem; padding: 0.6rem 0.8rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-sm, 6px); font-size: 0.8rem; color: var(--text-primary);">
        <i data-lucide="info" style="width: 16px; height: 16px; color: var(--brand-primary); flex-shrink: 0;"></i>
        <span><strong>Recommendation:</strong> If you no longer wish to stock or sell this item, consider deactivating or archiving the associated products in Inventory instead.</span>
      </div>
    `;

    const okBtn = document.createElement('button');
    okBtn.className = 'btn btn-primary';
    okBtn.textContent = 'Understood';
    okBtn.style.padding = '0.45rem 1.25rem';
    okBtn.style.fontSize = '0.85rem';

    const modalObj = createModal({
      title: 'Safe Deletion Guard',
      bodyElement: body,
      footerButtons: [okBtn]
    });

    okBtn.addEventListener('click', () => {
      modalObj.closeModal();
    });

    if (typeof window.alert === 'function' && window.alert.toString().indexOf('[native code]') === -1) {
      window.alert(`Cannot delete ${type} "${item}" because it is currently used by ${usage.details}. Deactivate or archive associated products instead.`);
    }
  }

  async function handleDeleteCatalogItem(type, item) {
    let usage;
    if (type === 'category') usage = store.checkCategoryUsage(item);
    else if (type === 'brand') usage = store.checkBrandUsage(item);
    else if (type === 'size') usage = store.checkSizeUsage(item);

    if (usage && usage.inUse) {
      showInUseWarning(type, item, usage);
      if (typeof toast !== 'undefined' && toast.show) {
        toast.show({
          message: `Cannot delete "${item}": in use by ${usage.summary}. Suggest deactivating or archiving instead.`,
          type: 'danger'
        });
      }
      return;
    }

    const typeLabel = type.charAt(0).toUpperCase() + type.slice(1);
    const confirmMsg = `Are you sure you want to delete ${type} "${item}" from the catalog?\n\nThis option is not currently in use and will be permanently removed.`;
    const confirmed = await uiConfirm({
      title: `Delete ${type}`,
      message: confirmMsg,
      confirmText: 'Delete',
      variant: 'danger'
    });
    if (!confirmed) return;

    let res;
    if (type === 'category') res = store.deleteCategory(item);
    else if (type === 'brand') res = store.deleteBrand(item);
    else if (type === 'size') res = store.deleteSize(item);

    if (res && res.success) {
      if (typeof toast !== 'undefined' && toast.show) {
        toast.show({ message: `${typeLabel} "${item}" deleted successfully.`, type: 'success' });
      }
      renderCatalogLists();
    } else {
      const errMsg = (res && res.error) || `Failed to delete ${type} "${item}".`;
      if (typeof toast !== 'undefined' && toast.show) {
        toast.show({ message: errMsg, type: 'danger' });
      }
    }
  }

  function createCatalogChip(type, name) {
    const chip = document.createElement('span');
    chip.className = 'badge badge-secondary settings-chip';
    chip.style.cssText = 'font-size: 0.78rem; padding: 0.22rem 0.45rem 0.22rem 0.6rem; display: inline-flex; align-items: center; gap: 0.4rem; border-radius: var(--radius-sm, 6px); line-height: 1.2;';

    const textSpan = document.createElement('span');
    textSpan.style.fontWeight = '500';
    textSpan.textContent = name;
    chip.appendChild(textSpan);

    const delBtn = document.createElement('button');
    delBtn.type = 'button';
    delBtn.className = 'btn-chip-delete';
    delBtn.setAttribute('data-type', type);
    delBtn.setAttribute('data-item', name);
    delBtn.setAttribute('aria-label', `Delete ${type} ${name}`);
    delBtn.title = `Delete ${type} "${name}"`;
    delBtn.style.cssText = 'display: inline-flex; align-items: center; justify-content: center; background: transparent; border: none; padding: 0; margin: 0; width: 14px; height: 14px; cursor: pointer; color: var(--text-secondary); font-size: 0.85rem; font-weight: 700; line-height: 1; border-radius: 3px; transition: color 0.15s, background-color 0.15s;';
    delBtn.innerHTML = '&times;';

    delBtn.addEventListener('mouseenter', () => {
      delBtn.style.color = 'var(--status-danger)';
      delBtn.style.backgroundColor = 'var(--status-danger-bg)';
    });
    delBtn.addEventListener('mouseleave', () => {
      delBtn.style.color = 'var(--text-secondary)';
      delBtn.style.backgroundColor = 'transparent';
    });

    delBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      handleDeleteCatalogItem(type, name);
    });

    chip.appendChild(delBtn);
    return chip;
  }

  function renderCatalogLists() {
    const cats = store.getCategories();
    const brs = store.getBrands();
    const szs = store.getSizes();

    const catLabel = configCard.querySelector('#settings-categories-label');
    const catContainer = configCard.querySelector('#settings-categories-list');
    if (catLabel) catLabel.textContent = `Categories (${cats.length})`;
    if (catContainer) {
      catContainer.innerHTML = '';
      cats.forEach(c => catContainer.appendChild(createCatalogChip('category', c)));
    }

    const brLabel = configCard.querySelector('#settings-brands-label');
    const brContainer = configCard.querySelector('#settings-brands-list');
    if (brLabel) brLabel.textContent = `Brands (${brs.length})`;
    if (brContainer) {
      brContainer.innerHTML = '';
      brs.forEach(b => brContainer.appendChild(createCatalogChip('brand', b)));
    }

    const szLabel = configCard.querySelector('#settings-sizes-label');
    const szContainer = configCard.querySelector('#settings-sizes-list');
    if (szLabel) szLabel.textContent = `Sizes (${szs.length})`;
    if (szContainer) {
      szContainer.innerHTML = '';
      szs.forEach(s => szContainer.appendChild(createCatalogChip('size', s)));
    }
  }

  renderCatalogLists();

  const addCatInp = configCard.querySelector('#add-category-input');
  const addCatBtn = configCard.querySelector('#btn-add-category');
  function doAddCategory() {
    const val = addCatInp.value.trim();
    if (!val) {
      if (typeof toast !== 'undefined' && toast.show) toast.show({ message: 'Please enter a category name.', type: 'warning' });
      return;
    }
    if (store.addCategory(val)) {
      addCatInp.value = '';
      if (typeof toast !== 'undefined' && toast.show) toast.show({ message: `Category "${val}" added.`, type: 'success' });
      renderCatalogLists();
    } else {
      if (typeof toast !== 'undefined' && toast.show) toast.show({ message: `Category "${val}" already exists.`, type: 'warning' });
    }
  }
  addCatBtn.addEventListener('click', doAddCategory);
  addCatInp.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); doAddCategory(); } });

  const addBrandInp = configCard.querySelector('#add-brand-input');
  const addBrandBtn = configCard.querySelector('#btn-add-brand');
  function doAddBrand() {
    const val = addBrandInp.value.trim();
    if (!val) {
      if (typeof toast !== 'undefined' && toast.show) toast.show({ message: 'Please enter a brand name.', type: 'warning' });
      return;
    }
    if (store.addBrand(val)) {
      addBrandInp.value = '';
      if (typeof toast !== 'undefined' && toast.show) toast.show({ message: `Brand "${val}" added.`, type: 'success' });
      renderCatalogLists();
    } else {
      if (typeof toast !== 'undefined' && toast.show) toast.show({ message: `Brand "${val}" already exists.`, type: 'warning' });
    }
  }
  addBrandBtn.addEventListener('click', doAddBrand);
  addBrandInp.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); doAddBrand(); } });

  const addSizeInp = configCard.querySelector('#add-size-input');
  const addSizeBtn = configCard.querySelector('#btn-add-size');
  function doAddSize() {
    const val = addSizeInp.value.trim();
    if (!val) {
      if (typeof toast !== 'undefined' && toast.show) toast.show({ message: 'Please enter a size.', type: 'warning' });
      return;
    }
    if (store.addSize(val)) {
      addSizeInp.value = '';
      if (typeof toast !== 'undefined' && toast.show) toast.show({ message: `Size "${val}" added.`, type: 'success' });
      renderCatalogLists();
    } else {
      if (typeof toast !== 'undefined' && toast.show) toast.show({ message: `Size "${val}" already exists.`, type: 'warning' });
    }
  }
  addSizeBtn.addEventListener('click', doAddSize);
  addSizeInp.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); doAddSize(); } });

  container.appendChild(configCard);

  // DATABASE / DATA MANAGEMENT SECTION
  const dbCard = document.createElement('div');
  dbCard.className = 'card';
  dbCard.style.marginTop = '1.25rem';
  dbCard.innerHTML = `
    <div style="padding-bottom: 0.85rem; border-bottom: 1px solid var(--border-color); margin-bottom: 1.25rem;">
      <h3 class="card-title" style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.25rem;">
        <i data-lucide="database" style="width: 18px; height: 18px; color: var(--brand-primary);"></i>
        Database & Data Management
      </h3>
      <p style="font-size: 0.78rem; color: var(--text-secondary); margin: 0;">Reset the database to test the end-to-end workflow from an empty store, or restore sample demo records.</p>
    </div>

    <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
      <button type="button" class="btn btn-secondary btn-sm" id="btn-clear-db" style="border-color: var(--status-danger); color: var(--status-danger); font-weight: 600; display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.5rem 1rem;">
        <i data-lucide="trash-2" style="width: 15px; height: 15px;"></i>
        Clear Database (Empty Store)
      </button>
      <button type="button" class="btn btn-secondary btn-sm" id="btn-restore-demo" style="font-weight: 600; display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.5rem 1rem;">
        <i data-lucide="rotate-ccw" style="width: 15px; height: 15px;"></i>
        Restore Sample Demo Data
      </button>
    </div>
  `;

  dbCard.querySelector('#btn-clear-db').addEventListener('click', async () => {
    const ok = await uiConfirm({
      title: 'Clear the entire database?',
      message: 'This will permanently remove all current store data: products, purchases, sales, payments, customers and stock history.\n\nThis cannot be undone.',
      confirmText: 'Clear Database',
      variant: 'danger',
      requireText: 'DELETE'
    });
    if (!ok) return;
    store.clearDatabase();
    if (typeof toast !== 'undefined' && toast.show) {
      toast.show({ message: 'Database cleared! Products, purchases, and sales are now empty.', type: 'success' });
    }
    if (window.appInstance) window.appInstance.render();
  });

  dbCard.querySelector('#btn-restore-demo').addEventListener('click', async () => {
    const ok = await uiConfirm({
      title: 'Replace current data with sample data?',
      message: 'This will replace the current store data with sample demo data. All current products, purchases, sales, payments and customers will be overwritten.\n\nThis cannot be undone.',
      confirmText: 'Replace with Sample Data',
      variant: 'danger',
      requireText: 'REPLACE'
    });
    if (!ok) return;
    store.loadSampleData();
    if (typeof toast !== 'undefined' && toast.show) {
      toast.show({ message: 'Sample demo data restored successfully.', type: 'success' });
    }
    if (window.appInstance) window.appInstance.render();
  });

  container.appendChild(dbCard);

  if (window.lucide) window.lucide.createIcons();
  return container;
}

// ==========================================
// 5. APPLICATION ORCHESTRATOR
// ==========================================
class MasterWebAdminApp {
  constructor() {
    window.appInstance = this;
    this.appEl = document.getElementById('app');
    this.activeNavId = 'overview';
    this.navParams = {};
    
    const savedTheme = localStorage.getItem('master_web_admin_theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    this.parseHashAndNavigate(false);
    window.addEventListener('popstate', () => {
      this.parseHashAndNavigate(false);
    });

    store.subscribe(() => {
      if (this.activeNavId === 'overview') {
        this.render();
      }
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

    // 'profile' is reachable from the topbar, not the sidebar nav.
    const validNavIds = [...NAV_ITEMS.map(i => i.id), 'manage-product', 'profile'];
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
  }

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
  }

  render() {
    if (!this.appEl) return;
    this.appEl.innerHTML = '';

    const effectiveActiveId = this.activeNavId === 'manage-product' ? 'inventory' : this.activeNavId;
    // Profile has no sidebar entry, so give the topbar its own title.
    // The topbar carries the page title, so the profile page itself does not
    // repeat it — it shows a breadcrumb and description instead.
    const activeItem = this.activeNavId === 'profile'
      ? { id: 'profile', label: 'Edit Profile' }
      : (NAV_ITEMS.find(item => item.id === effectiveActiveId) || NAV_ITEMS[0]);

    const layout = document.createElement('div');
    layout.className = 'app-layout';

    const sidebar = createSidebar(this.activeNavId, this.navigateTo);
    layout.appendChild(sidebar);

    const mainContent = document.createElement('main');
    mainContent.className = 'main-content';

    const topbar = createTopbar(activeItem.label, this.toggleTheme, this.navigateTo);
    mainContent.appendChild(topbar);

    let pageView;
    switch (this.activeNavId) {
      case 'overview': pageView = renderOverview(this.navigateTo); break;
      case 'inventory': pageView = renderInventory(this.navParams, this.navigateTo); break;
      case 'products': pageView = renderInventory(this.navParams, this.navigateTo); break;
      case 'manage-product': pageView = renderProductManagementPage(this.navParams, this.navigateTo); break;
      case 'purchases': pageView = renderPurchases(this.navParams, this.navigateTo); break;
      case 'sales': pageView = renderSales(this.navParams, this.navigateTo); break;
      case 'customers': pageView = renderCustomers(this.navParams, this.navigateTo); break;
      case 'reports': pageView = renderReports(this.navigateTo); break;
      case 'settings': pageView = renderSettings(this.toggleTheme, this.navigateTo); break;
      case 'profile': pageView = renderProfilePage(this.navParams, this.navigateTo); break;
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
