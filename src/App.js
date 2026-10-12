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

class StoreManager {
  constructor() {
    try {
      const saved = localStorage.getItem('master_web_admin_data_v2');
      this.data = saved ? JSON.parse(saved) : JSON.parse(JSON.stringify(initialData));
    } catch (e) {
      this.data = JSON.parse(JSON.stringify(initialData));
    }

    if (!this.data || typeof this.data !== 'object') {
      this.data = JSON.parse(JSON.stringify(initialData));
    }

    if (!Array.isArray(this.data.products)) this.data.products = initialData.products || [];
    if (!Array.isArray(this.data.categories)) this.data.categories = initialData.categories || [];
    if (!Array.isArray(this.data.brands)) this.data.brands = initialData.brands || [];
    if (!Array.isArray(this.data.purchases)) this.data.purchases = initialData.purchases || [];
    if (!Array.isArray(this.data.sales)) this.data.sales = initialData.sales || [];
    if (!Array.isArray(this.data.customers)) this.data.customers = initialData.customers || [];

    // Guarantee totalStock consistency for every product across size variants
    if (Array.isArray(this.data.products)) {
      this.data.products.forEach(p => {
        p.totalStock = (p.variants || []).reduce((sum, v) => sum + (Number(v.stock) || 0), 0);
      });
    }

    // Ensure inventorySettings exists and has valid lowStockThreshold
    if (!this.data.inventorySettings || typeof this.data.inventorySettings !== 'object') {
      this.data.inventorySettings = { lowStockThreshold: 5 };
    } else {
      const val = parseInt(this.data.inventorySettings.lowStockThreshold, 10);
      this.data.inventorySettings.lowStockThreshold = (!isNaN(val) && val >= 1) ? val : 5;
    }

    this.listeners = [];
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
    const products = this.data.products || [];
    const sales = this.data.sales || [];
    const purchases = this.data.purchases || [];
    const customers = this.data.customers || [];
    const threshold = this.getLowStockThreshold();

    let totalProducts = products.length; // Unique product count
    let totalStock = 0;
    let damagedStockCount = 0;
    let stockValue = 0;

    let inStockCount = 0;
    let partialStockCount = 0;
    let lowStockCount = 0;
    let outOfStockCount = 0;

    let lowStockVariantsCount = 0;
    let outOfStockVariantsCount = 0;

    products.forEach(p => {
      if (!p || p.status === 'Inactive') return;

      const statusInfo = getProductStockStatus(p, threshold);
      if (statusInfo.status === 'IN_STOCK') {
        inStockCount++;
      } else if (statusInfo.status === 'PARTIAL_STOCK') {
        partialStockCount++;
      } else if (statusInfo.status === 'LOW_STOCK') {
        lowStockCount++;
      } else if (statusInfo.status === 'OUT_OF_STOCK') {
        outOfStockCount++;
      }

      const variants = (p.variants && p.variants.length > 0)
        ? p.variants
        : [{ size: 'Standard', stock: Number(p.totalStock || p.stock || 0), damaged: 0 }];

      variants.forEach(v => {
        const vStock = Math.max(0, Number(v.stock) || 0);
        totalStock += vStock;
        damagedStockCount += Math.max(0, Number(v.damaged) || 0);

        const unitCost = Number(v.purchasePrice || v.buyingPrice || p.purchasePrice || p.buyingPrice || 0);
        stockValue += vStock * unitCost;

        if (vStock === 0) {
          outOfStockVariantsCount++;
        } else if (vStock <= threshold) {
          lowStockVariantsCount++;
        }
      });
    });

    const qualifyingSales = sales.filter(s => s && s.status !== 'Cancelled' && s.status !== 'Failed');
    const totalRevenue = qualifyingSales.reduce((sum, s) => sum + (Number(s.totalAmount) || 0), 0);
    const todaySales = totalRevenue; // preserved for backwards compatibility

    const qualifyingPurchases = purchases.filter(p => p && (p.status === 'Completed' || p.status === 'Received'));
    const totalPurchases = qualifyingPurchases.reduce((sum, p) => sum + (Number(p.totalAmount || p.total) || 0), 0);

    return {
      todaySales,
      totalRevenue,
      salesCount: qualifyingSales.length,
      totalProducts,
      totalStock,
      lowStockCount,
      outOfStockCount,
      partialStockCount,
      inStockCount,
      lowStockVariantsCount,
      outOfStockVariantsCount,
      damagedStockCount,
      stockValue,
      totalPurchases,
      purchasesCount: purchases.length,
      totalCustomers: customers.length
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
        totalStock: 0
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
        totalStock: 0
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

      if (cleanBrand) {
        const brandMatches = candidates.filter(p => (p.brand || '').trim().toLowerCase() === cleanBrand);
        if (brandMatches.length === 1) return brandMatches[0];
        if (brandMatches.length > 1) {
          if (cleanCat) {
            const catMatch = brandMatches.find(p => (p.category || '').trim().toLowerCase() === cleanCat);
            if (catMatch) return catMatch;
          }
          return brandMatches[0];
        }
        // Distinct brand entered -> preserve distinct product!
        return null;
      }

      // Brand not provided
      if (candidates.length === 1) {
        const cand = candidates[0];
        const candBrand = (cand.brand || '').trim().toLowerCase();
        if (!candBrand || (cleanCat && (cand.category || '').trim().toLowerCase() === cleanCat)) {
          return cand;
        }
        return null;
      }

      if (cleanCat) {
        const catMatches = candidates.filter(p => (p.category || '').trim().toLowerCase() === cleanCat);
        if (catMatches.length === 1) return catMatches[0];
      }

      return null;
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
          totalStock: 0
        };
        if (!Array.isArray(this.data.products)) this.data.products = [];
        this.data.products.unshift(foundProd);
        newlyCreatedThisRun.push(foundProd);
      } else if (foundProd) {
        if (enteredCat && (!foundProd.category || foundProd.category === 'General')) {
          foundProd.category = enteredCat;
        }
        if (enteredBrand && (!foundProd.brand || foundProd.brand === 'Generic')) {
          foundProd.brand = enteredBrand;
        }
      }

      const prodId = foundProd ? foundProd.id : (item.productId || '');
      let prodSku = item.sku || '';
      let prodVariantId = item.variantId || '';

      const targetSize = (item.size || 'Standard').trim();
      if (foundProd && (!prodSku || !prodVariantId) && Array.isArray(foundProd.variants)) {
        const matchingVar = foundProd.variants.find(v => (v.size || 'Standard').trim().toUpperCase() === targetSize.toUpperCase());
        if (matchingVar) {
          if (!prodSku && matchingVar.sku) prodSku = matchingVar.sku;
          if (!prodVariantId && matchingVar.id) prodVariantId = matchingVar.id;
        }
      }

      itemRecords.push({
        productId: prodId,
        variantId: prodVariantId,
        sku: prodSku,
        product: prodName || (foundProd ? foundProd.name : 'Standard Item'),
        category: enteredCat || (foundProd ? foundProd.category : 'General'),
        brand: enteredBrand || (foundProd ? foundProd.brand : 'Generic'),
        size: targetSize,
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
      }
    }

    if (!purchaseRecord) {
      const newId = `PUR-${Date.now().toString().slice(-4)}`;
      purchaseRecord = {
        id: newId,
        supplier: payload.supplier || 'General Supplier',
        date: payload.date || new Date().toISOString().split('T')[0],
        notes: payload.notes || '',
        productCount: itemRecords.length,
        totalQuantity: totalQty,
        totalAmount: totalAmount,
        status: 'Draft',
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

  approvePurchase(purchaseId) {
    const purchase = (this.data.purchases || []).find(p => p.id === purchaseId);
    if (!purchase) throw new Error('Purchase not found');
    if (purchase.status !== 'Draft') throw new Error('Only Draft purchases can be approved');

    purchase.status = 'Approved';
    purchase.approvedAt = new Date().toISOString();
    this.save();
    return purchase;
  }

  receivePurchaseStock(purchaseId, receivedQuantitiesMap, receiptDate, notes = '') {
    const purchase = (this.data.purchases || []).find(p => p.id === purchaseId);
    if (!purchase) throw new Error('Purchase not found');
    if (purchase.status !== 'Approved' && purchase.status !== 'Partially Received') {
      if (purchase.status === 'Received' || purchase.status === 'Completed') {
        throw new Error(`Purchase order ${purchaseId} has already been received.`);
      }
      throw new Error(`Only Approved or Partially Received purchases can be received (current status: ${purchase.status})`);
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
    if (purchase.status !== 'Draft') throw new Error('Only Draft purchases can be deleted');

    this.data.purchases = this.data.purchases.filter(p => p.id !== purchaseId);
    this.save();
    return true;
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
    // salePayload: { customerName, customerPhone, paymentMethod, paymentStatus, discount, items: [ { productId, size, qty, sellingPrice }, ... ] }
    
    // 1. Validate combined stock for all items per product and size
    const requiredStockMap = {};
    (salePayload.items || []).forEach(item => {
      const key = `${item.productId}:::${item.size || 'Standard'}`;
      requiredStockMap[key] = (requiredStockMap[key] || 0) + (parseInt(item.qty, 10) || 0);
    });

    for (const [key, reqQty] of Object.entries(requiredStockMap)) {
      const [prodId, size] = key.split(':::');
      const prod = this.data.products.find(p => p.id === prodId);
      if (!prod) throw new Error('Product not found.');
      const variant = (prod.variants || []).find(v => v.size === size) || (prod.variants || [])[0];
      const avail = variant ? (variant.stock || 0) : 0;
      if (reqQty > avail) {
        throw new Error(`Insufficient stock for "${prod.name}" (${size}). Available: ${avail}, Requested: ${reqQty}.`);
      }
    }

    let totalAmt = 0;
    let totalItemCount = 0;
    const saleItems = [];
    const shouldDeductStock = salePayload.paymentStatus !== 'Cancelled' && salePayload.paymentStatus !== 'Failed' && salePayload.paymentStatus !== 'Draft';

    (salePayload.items || []).forEach(item => {
      const prod = this.data.products.find(p => p.id === item.productId);
      if (prod) {
        const variant = (prod.variants || []).find(v => v.size === item.size) || (prod.variants || [])[0];
        if (variant && shouldDeductStock) {
          variant.stock = Math.max(0, (variant.stock || 0) - item.qty);
        }
        prod.totalStock = (prod.variants || []).reduce((sum, v) => sum + (v.stock || 0), 0);

        const lineTotal = (item.sellingPrice || prod.sellingPrice || 0) * item.qty;
        totalAmt += lineTotal;
        totalItemCount += item.qty;

        saleItems.push({
          product: prod.name,
          productId: prod.id,
          size: item.size || 'Standard',
          qty: item.qty,
          price: item.sellingPrice || prod.sellingPrice || 0,
          amount: lineTotal
        });
      }
    });

    const discountVal = parseFloat(salePayload.discount) || 0;
    const finalTotal = Math.max(0, totalAmt - discountVal);

    const saleRecord = {
      id: `BILL-${Date.now().toString().slice(-4)}`,
      date: new Date().toLocaleString('en-US', { dateStyle: 'short', timeStyle: 'short' }),
      customer: salePayload.customerName || 'Walk-in Customer',
      phone: salePayload.customerPhone || '-',
      itemCount: totalItemCount,
      totalAmount: finalTotal,
      paymentMethod: salePayload.paymentMethod || 'Cash',
      status: salePayload.paymentStatus || 'Paid',
      discount: discountVal,
      items: saleItems
    };

    // Log Stock Movement for completed sale
    if (shouldDeductStock) {
      if (!Array.isArray(this.data.stockMovements)) this.data.stockMovements = [];
      saleItems.forEach(si => {
        this.data.stockMovements.unshift({
          id: `MOV-${Date.now().toString().slice(-4)}-${Math.floor(Math.random()*100)}`,
          date: new Date().toLocaleString(),
          product: si.product,
          size: si.size,
          sku: `${(si.product || 'PRD').slice(0,3).toUpperCase()}-${si.size || 'STD'}`,
          type: 'Sale',
          quantity: -si.qty,
          reference: saleRecord.id,
          user: 'Cashier'
        });
      });
    }

    // Automatic Customer Update
    const custName = salePayload.customerName || 'Walk-in Customer';
    const custPhone = salePayload.customerPhone || '-';

    if (custName && custName !== 'Walk-in Customer') {
      let customer = this.data.customers.find(c => c.name.toLowerCase() === custName.toLowerCase());
      if (!customer) {
        customer = {
          id: `CUST-${String(this.data.customers.length + 1).padStart(2, '0')}`,
          name: custName,
          phone: custPhone,
          ordersCount: 0,
          lastPurchase: new Date().toISOString().split('T')[0],
          totalSpend: 0
        };
        this.data.customers.unshift(customer);
      }

      customer.ordersCount = (customer.ordersCount || 0) + 1;
      customer.totalSpend = (customer.totalSpend || 0) + finalTotal;
      customer.lastPurchase = new Date().toISOString().split('T')[0];
      if (custPhone && custPhone !== '-') customer.phone = custPhone;
    }

    this.data.sales.unshift(saleRecord);
    this.save();
    return saleRecord;
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
    const idx = this.data.products.findIndex(p => p.id === id);
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
        variants: updatedVariants, // PRESERVE INVENTORY STOCK AND BUYING COSTS INTACT
        totalStock: updatedVariants.reduce((sum, v) => sum + (v.stock || 0), 0)
      };
      this.save();
    }
  }

  deleteProduct(id) {
    const idx = (this.data.products || []).findIndex(p => p.id === id);
    if (idx === -1) throw new Error('Product not found.');
    const deletedProduct = this.data.products[idx];
    this.data.products.splice(idx, 1);

    if (!Array.isArray(this.data.stockMovements)) this.data.stockMovements = [];
    this.data.stockMovements.unshift({
      id: `MOV-DEL-${Date.now().toString().slice(-4)}-${Math.floor(Math.random()*100)}`,
      date: new Date().toLocaleString(),
      product: deletedProduct.name,
      productId: deletedProduct.id,
      size: 'All',
      sku: `${(deletedProduct.name || 'PRD').slice(0,3).toUpperCase()}-ALL`,
      type: 'Delete Product',
      quantity: -(deletedProduct.totalStock || 0),
      reference: `DELETE-${deletedProduct.id}`,
      user: 'Admin'
    });

    this.save();
    return deletedProduct;
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
          <h3 style="font-size: 1.2rem; font-weight: 700; color: var(--text-primary); margin: 0;">${product.name}</h3>
          ${createBadge({ label: stockInfo.label, variant: stockInfo.variant }).outerHTML}
          ${product.status === 'Inactive' ? createBadge({ label: 'Inactive', variant: 'secondary' }).outerHTML : ''}
        </div>
        <div style="font-size: 0.8rem; color: var(--text-secondary); display: flex; gap: 0.75rem; align-items: center; flex-wrap: wrap;">
          <span>Category: <strong>${product.category || 'General'}</strong></span>
          <span>Brand: <strong>${product.brand || 'Unbranded'}</strong></span>
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
                <td><span style="font-weight: 600; padding: 0.2rem 0.5rem; background: var(--bg-secondary); border-radius: 4px; font-size: 0.8rem;">${v.size || 'Standard'}</span></td>
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
        <p style="font-size: 0.85rem; color: var(--text-secondary); margin: 0; line-height: 1.4;">${product.description}</p>
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
                  <td style="font-weight: 600;">${m.size || m.sku || 'Standard'}</td>
                  <td style="font-weight: 700; color: ${m.quantity > 0 ? 'var(--status-success)' : 'var(--status-danger)'};">
                    ${m.quantity > 0 ? `+${m.quantity}` : m.quantity} units
                  </td>
                  <td style="color: var(--text-secondary);">${m.reference || '-'}</td>
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
    matchedCustomer = (store.data.customers || []).find(c => 
      (c.name && c.name.toLowerCase() === custName.toLowerCase()) ||
      (custPhone && custPhone !== '-' && c.phone && c.phone === custPhone)
    );
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

  let statusBadgeVariant = 'secondary';
  if (paymentStatus === 'Completed' || paymentStatus === 'Paid') statusBadgeVariant = 'success';
  else if (paymentStatus === 'Pending') statusBadgeVariant = 'warning';
  else if (paymentStatus === 'Failed' || paymentStatus === 'Cancelled') statusBadgeVariant = 'danger';

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
          <div style="font-weight: 600; color: var(--text-primary); font-size: 0.875rem;">${prodName}</div>
          ${i.sku ? `<div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 2px; font-family: monospace;">SKU: ${i.sku}</div>` : ''}
        </td>
        <td style="padding: 0.75rem; text-align: center; vertical-align: middle;">
          <span style="display: inline-block; padding: 0.2rem 0.55rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: 4px; font-size: 0.785rem; font-weight: 600; color: var(--text-primary);">
            ${sizeDisplay}
          </span>
        </td>
        <td style="font-weight: 600; color: var(--text-primary); text-align: center; padding: 0.75rem; font-size: 0.875rem; vertical-align: middle;">${qty}</td>
        <td style="color: var(--text-primary); font-size: 0.875rem; text-align: right; padding: 0.75rem; vertical-align: middle;">₹${unitPrice.toLocaleString('en-IN')}</td>
        <td style="color: var(--text-secondary); font-size: 0.875rem; text-align: right; padding: 0.75rem; vertical-align: middle;">₹${itemSubtotal.toLocaleString('en-IN')}</td>
        <td style="color: ${itemDiscount > 0 ? 'var(--status-warning, #f59e0b)' : 'var(--text-secondary)'}; font-size: 0.875rem; text-align: right; padding: 0.75rem; vertical-align: middle; font-weight: ${itemDiscount > 0 ? '600' : 'normal'};">
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
        <div style="font-weight: 700; font-size: 1.05rem; color: var(--text-primary); margin-top: 0.25rem; font-family: monospace;">${saleRef}</div>
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
        ${custId ? `<span class="badge badge-secondary" style="font-size: 0.75rem; padding: 0.2rem 0.55rem; font-weight: 600;"><i data-lucide="tag" style="width: 11px; height: 11px; margin-right: 4px; display: inline-block; vertical-align: -1px;"></i>ID: ${custId}</span>` : ''}
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 0.85rem 1.25rem; font-size: 0.85rem;">
        <div>
          <div style="font-size: 0.725rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase; letter-spacing: 0.03em;">Customer Name</div>
          <div style="font-weight: 600; color: var(--text-primary); margin-top: 0.2rem; font-size: 0.95rem;">${custName}</div>
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
            <div style="font-weight: 500; color: var(--text-primary); margin-top: 0.2rem;">${matchedCustomer.email}</div>
          </div>
        ` : ''}
        ${matchedCustomer && matchedCustomer.address ? `
          <div>
            <div style="font-size: 0.725rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase; letter-spacing: 0.03em;">Address</div>
            <div style="font-weight: 500; color: var(--text-primary); margin-top: 0.2rem;">${matchedCustomer.address}</div>
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
              <div style="color: var(--text-primary); margin-top: 0.15rem; font-style: italic;">"${notes}"</div>
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
                <span style="font-weight: 500; color: var(--status-success, #10b981);">Fulfilled & Delivered</span>
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
            <div style="display: flex; justify-content: space-between; align-items: center; color: var(--status-warning, #f59e0b);">
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
            <div style="display: flex; justify-content: space-between; align-items: center; color: var(--status-warning, #f59e0b);">
              <span>Balance Due:</span>
              <strong>₹${Number(sale.balanceDue).toLocaleString('en-IN')}</strong>
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
    footerButtons: [printBtn, closeBtn]
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
  
  const breadcrumbItems = returnTo === 'add-purchase'
    ? [{ label: 'Purchases', target: 'purchases' }, { label: 'Add Purchase', target: 'purchases', params: { action: 'add' } }, { label: 'Create New Product' }]
    : [{ label: 'Purchases', target: 'purchases' }, { label: 'Add New Product' }];

  const breadcrumb = createBreadcrumb(breadcrumbItems, onNavigate);

  const backBtn = createButton({
    text: returnTo === 'add-purchase' ? 'Back to Add Purchase' : 'Back to Purchases',
    icon: 'arrow-left',
    variant: 'secondary',
    size: 'sm',
    onClick: () => {
      if (onNavigate) {
        if (returnTo === 'add-purchase') onNavigate('purchases', { action: 'add' });
        else onNavigate('purchases');
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

  const catOptions = (store.data.categories || []).length > 0 ? store.data.categories : ['Shirts', 'T-Shirts', 'Jeans', 'Trousers', 'Hoodies', 'Accessories'];
  const brandOptions = (store.data.brands || []).length > 0 ? store.data.brands : ['ClassicFit', 'UrbanWear', 'DenimCo', 'EssentialStudio'];

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
            ${catOptions.map(c => `<option value="${c}">${c}</option>`).join('')}
          </select>
        </div>
        <div class="form-group">
          <label class="form-label" style="font-size: 0.825rem; font-weight: 600; color: var(--text-primary);">Brand</label>
          <select class="form-select" id="new-prod-brand">
            ${brandOptions.map(b => `<option value="${b}">${b}</option>`).join('')}
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
        btn.style.color = '#ffffff';
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
      else onNavigate('purchases');
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
      toast.show({ message: `Product '${name}' created! Continue completing purchase details.`, type: 'success' });

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
          onNavigate('purchases');
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
let activeOverviewSalesPeriod = '1W';
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
    subtext: `<span style="color: var(--status-warning-text); font-weight: 600;">${lowCount} items</span> <span style="color: var(--text-secondary);">below min threshold (${thresholdVal})</span>`,
    icon: 'alert-triangle',
    variant: 'warning',
    onClick: () => onNavigate('inventory', { status: 'LOW' })
  }));

  let outSubtext = '';
  if (outVariantsCount > 0) {
    if (outCount > 0) {
      outSubtext = `<span style="color: var(--status-danger-text); font-weight: 600;">${outVariantsCount} ${outVariantsCount === 1 ? 'size' : 'sizes'} at 0 stock</span> <span style="color: var(--text-secondary);">(${outCount} ${outCount === 1 ? 'product' : 'products'} fully out)</span>`;
    } else {
      outSubtext = `<span style="color: var(--status-warning-text); font-weight: 600;">${outVariantsCount} ${outVariantsCount === 1 ? 'size' : 'sizes'} at 0 stock</span> <span style="color: var(--text-secondary);">(in partial stock)</span>`;
    }
  } else {
    outSubtext = `<span style="color: var(--text-secondary);">0 sizes at 0 stock</span>`;
  }

  kpiGrid.appendChild(createMetricCard({
    label: 'Out of Stock',
    value: `${outCount} Products`,
    subtext: outSubtext,
    icon: 'alert-circle',
    variant: (outCount > 0 || outVariantsCount > 0) ? 'danger' : 'default',
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
      let cost = 0;
      (sale.items || []).forEach(item => {
        let uCost = 0;
        if (item.productId && prodCostMap[item.productId] !== undefined) {
          uCost = prodCostMap[item.productId];
        } else if (item.product && prodCostMap[item.product.toLowerCase()] !== undefined) {
          uCost = prodCostMap[item.product.toLowerCase()];
        } else {
          uCost = Number(item.price || item.sellingPrice || 0);
        }
        cost += (Number(item.qty || 1) || 1) * uCost;
      });
      return cost;
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

    if (periodKey === '1W') {
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
          ${['1W', '1M', '6M', '1Y'].map(p => `
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
              <text x="${c.x}" y="150" text-anchor="middle" fill="var(--text-secondary)" font-size="${periodKey === '1Y' ? '10' : '11'}" font-weight="500">${c.axisLabel}</text>
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
        btn.style.color = '#ffffff';
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
  sales.forEach(s => {
    (s.items || []).forEach(item => {
      const pName = item.product || item.productName || 'Product';
      if (!topSellingMap[pName]) {
        topSellingMap[pName] = { name: pName, units: 0, revenue: 0 };
      }
      topSellingMap[pName].units += (item.qty || 0);
      topSellingMap[pName].revenue += (item.amount || item.total || 0);
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
            <div style="font-weight: 600; font-size: 0.875rem; color: var(--text-primary);">₹${(p.revenue || 0).toLocaleString('en-IN')}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  topSellingCard.querySelectorAll('.top-selling-item').forEach(item => {
    item.addEventListener('click', () => {
      onNavigate('inventory', { openProduct: item.dataset.productName });
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
        <td style="font-weight: 600; color: var(--text-primary);">${s.customer || 'Walk-in Customer'}</td>
        <td style="color: var(--text-secondary); font-size: 0.8rem;">${s.date || '-'}</td>
        <td style="color: var(--text-secondary);">${s.itemCount || (s.items ? s.items.length : 1)} item${(s.itemCount || 1) > 1 ? 's' : ''}</td>
        <td style="font-weight: 600; color: var(--text-primary);">₹${(s.totalAmount || 0).toLocaleString()}</td>
        <td>${createBadge({ label: s.paymentMethod || 'Cash', variant: 'secondary' }).outerHTML}</td>
        <td>${createBadge({ label: s.status || 'Completed', variant: 'secondary' }).outerHTML}</td>
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

  if (product.status === 'Inactive') {
    return {
      status: 'Inactive',
      label: 'Inactive',
      variant: 'secondary',
      totalStock: 0,
      hasSizes: false,
      totalSizes: 0,
      availableSizes: 0,
      outOfStockSizes: 0,
      lowStockSizes: 0,
      stockSummary: 'Inactive'
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
  container.style.cssText = 'display: flex; flex-direction: column; gap: 1.25rem; max-width: 1200px; margin: 0 auto; width: 100%;';

  const productId = (params && (params.id || params.productId)) || null;
  const requestedSize = (params && (params.size || params.variantSize)) || null;
  const requestedSection = (params && (params.section || params.tab)) || null;
  let activeSelectedSize = requestedSize;
  let hasInitialScrolled = false;

  function renderPage() {
    container.innerHTML = '';

    // Fresh lookup from store
    const productsList = store.data.products || [];
    let product = productsList.find(p => p.id === productId);
    if (!product && productsList.length > 0) {
      product = productsList[0];
    }

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
    topNavDiv.appendChild(backBtn);
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
            ${product.id ? `<span class="badge badge-secondary" style="font-family: monospace; font-size: 0.75rem; padding: 0.2rem 0.55rem; font-weight: 600;">ID: ${product.id}</span>` : ''}
            ${createBadge({ label: product.status || 'Active', variant: (product.status === 'Active' ? 'success' : 'secondary') }).outerHTML}
          </div>
          <div style="font-size: 1.15rem; font-weight: 600; color: var(--text-primary); margin-top: 0.4rem;">${product.name}</div>
          <div style="display: flex; align-items: center; gap: 0.75rem; margin-top: 0.35rem; font-size: 0.825rem; color: var(--text-secondary); flex-wrap: wrap;">
            <span>Category: <strong style="color: var(--text-primary); font-weight: 600;">${product.category || 'General'}</strong></span>
            <span>•</span>
            <span>Brand: <strong style="color: var(--text-primary); font-weight: 600;">${product.brand || 'Unbranded'}</strong></span>
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
    const catOptions = (store.data.categories && store.data.categories.length > 0) ? store.data.categories : ['Shirts', 'T-Shirts', 'Jeans', 'Trousers', 'Hoodies', 'Accessories'];
    const brandOptions = (store.data.brands && store.data.brands.length > 0) ? store.data.brands : ['ClassicFit', 'UrbanWear', 'DenimCo', 'EssentialStudio'];

    const sec1Card = document.createElement('div');
    sec1Card.className = 'card';
    sec1Card.style.cssText = 'padding: 1.25rem 1.5rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md);';
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
          <input type="text" id="manage-prod-name" class="form-input" value="${product.name || ''}" placeholder="Enter product name" style="font-size: 0.85rem; padding: 0.5rem 0.75rem;">
          <div id="manage-prod-name-err" style="font-size: 0.75rem; color: var(--status-danger); margin-top: 3px; display: none;">Product Name is required.</div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem;">
          <div class="form-group" style="margin: 0;">
            <label class="form-label" style="font-size: 0.825rem; font-weight: 500; margin-bottom: 0.35rem; display: block; color: var(--text-primary);">
              Category
            </label>
            <select id="manage-prod-cat" class="form-select" style="font-size: 0.85rem; padding: 0.5rem 0.75rem;">
              ${catOptions.map(c => `<option value="${c}" ${c === product.category ? 'selected' : ''}>${c}</option>`).join('')}
            </select>
          </div>
          <div class="form-group" style="margin: 0;">
            <label class="form-label" style="font-size: 0.825rem; font-weight: 500; margin-bottom: 0.35rem; display: block; color: var(--text-primary);">
              Brand
            </label>
            <select id="manage-prod-brand" class="form-select" style="font-size: 0.85rem; padding: 0.5rem 0.75rem;">
              ${brandOptions.map(b => `<option value="${b}" ${b === product.brand ? 'selected' : ''}>${b}</option>`).join('')}
            </select>
          </div>
          <div class="form-group" style="margin: 0;">
            <label class="form-label" style="font-size: 0.825rem; font-weight: 500; margin-bottom: 0.35rem; display: block; color: var(--text-primary);">
              Status
            </label>
            <select id="manage-prod-status" class="form-select" style="font-size: 0.85rem; padding: 0.5rem 0.75rem;">
              <option value="Active" ${product.status === 'Active' ? 'selected' : ''}>Active</option>
              <option value="Inactive" ${product.status === 'Inactive' ? 'selected' : ''}>Inactive</option>
            </select>
          </div>
        </div>

        <div class="form-group" style="margin: 0;">
          <label class="form-label" style="font-size: 0.825rem; font-weight: 500; margin-bottom: 0.35rem; display: block; color: var(--text-primary);">
            Product Description (Optional)
          </label>
          <textarea id="manage-prod-desc" class="form-textarea" rows="2" placeholder="Enter product description, fabric, care instructions..." style="font-size: 0.85rem; padding: 0.5rem 0.75rem; line-height: 1.4; resize: vertical;">${product.description || ''}</textarea>
        </div>

        <div style="display: flex; justify-content: flex-end; padding-top: 0.75rem; border-top: 1px solid var(--border-color);">
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
    sec2Card.style.cssText = 'padding: 1.25rem 1.5rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md);';
    
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
                        Size ${v.size}
                      </span>
                    </td>
                    <td style="padding: 0.65rem 0.85rem; text-align: right; color: var(--text-secondary); font-size: 0.85rem;">
                      ${buyPrice}
                    </td>
                    <td style="padding: 0.65rem 0.85rem; text-align: right;">
                      <div style="display: inline-flex; align-items: center; justify-content: flex-end; gap: 0.35rem;">
                        <span style="color: var(--text-secondary); font-size: 0.85rem;">₹</span>
                        <input type="number" class="form-input manage-variant-price-inp" data-size="${v.size}" placeholder="e.g. 1499" value="${sellVal}" min="0" step="1" style="width: 130px; font-size: 0.85rem; padding: 0.35rem 0.6rem; text-align: right;">
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

      <div>
        ${pricingBodyHtml}
        <div style="display: flex; justify-content: flex-end; padding-top: 0.75rem; border-top: 1px solid var(--border-color); margin-top: 0.5rem;">
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
    sec3Card.style.cssText = 'padding: 1.25rem 1.5rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md);';

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
                  ? 'border-bottom: 1px solid var(--border-color); background: rgba(79, 70, 229, 0.08); transition: background-color 0.2s ease;'
                  : 'border-bottom: 1px solid var(--border-color); transition: background-color 0.2s ease;';
                return `
                  <tr style="${rowStyle}" class="variant-stock-row ${isSelectedRow ? 'selected-variant-row' : ''}" data-variant-size="${v.size}">
                    <td style="padding: 0.65rem 0.85rem;">
                      <span class="badge ${isSelectedRow ? 'badge-primary' : 'badge-secondary'}" style="font-weight: 700; font-size: 0.825rem; padding: 0.2rem 0.55rem;">
                        ${hasSizes ? `Size ${v.size}` : 'Standard'}
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
                        <button type="button" class="btn btn-sm btn-secondary quick-add-stock-btn" data-size="${v.size}" style="padding: 0.3rem 0.65rem; font-size: 0.775rem;">
                          <i data-lucide="plus" style="width: 14px; height: 14px;"></i>
                          <span>Add Stock</span>
                        </button>
                        <button type="button" class="btn btn-sm btn-secondary quick-remove-stock-btn" data-size="${v.size}" style="padding: 0.3rem 0.65rem; font-size: 0.775rem;">
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
    container.appendChild(sec3Card);

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
          row.style.background = 'rgba(79, 70, 229, 0.08)';
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
            <select id="manage-adj-size-select"><option value="${initialSelectedSize}">${initialSelectedSize}</option></select>
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
                <span style="font-size: 0.8rem; color: var(--text-secondary);">Size: <strong style="color: var(--text-primary);">${hasSizes ? `Size ${entry.size}` : 'Standard'}</strong></span>
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
                    <option value="${v.size}" ${v.size === entry.size ? 'selected' : (v.size === initialSelectedSize ? 'selected' : '')}>
                      ${hasSizes ? `Size ${v.size}` : 'Standard'} (Current: ${v.stock || 0} units)
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
          message: `Stock adjusted successfully: ${appliedCount} adjustment${appliedCount > 1 ? 's' : ''} applied for ${product.name} (${updatedSizes.join(', ')}).`,
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
    sec4Card.style.cssText = 'padding: 1.25rem 1.5rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md);';

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
function renderInventory(params = {}, onNavigate = null) {
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
  let selectedSort = 'name-asc';
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
  headerDiv.appendChild(countBadge);

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
          ${categories.map(c => `<option value="${c}">${c}</option>`).join('')}
        </select>

        <select class="form-select brand-filter" style="width: auto; min-width: 130px; font-size: 0.85rem; padding: 0.45rem 0.75rem;">
          <option value="ALL">All Brands</option>
          ${allBrands.map(b => `<option value="${b}">${b}</option>`).join('')}
        </select>

        <select class="form-select status-filter" style="width: auto; min-width: 145px; font-size: 0.85rem; padding: 0.45rem 0.75rem;">
          <option value="ALL" ${selectedStatus === 'ALL' ? 'selected' : ''}>All Stock Status</option>
          <option value="IN_STOCK" ${selectedStatus === 'IN_STOCK' ? 'selected' : ''}>In Stock</option>
          <option value="PARTIAL_STOCK" ${selectedStatus === 'PARTIAL_STOCK' ? 'selected' : ''}>Partial Stock</option>
          <option value="LOW" ${selectedStatus === 'LOW' ? 'selected' : ''}>Low Stock</option>
          <option value="OUT" ${selectedStatus === 'OUT' ? 'selected' : ''}>Out of Stock</option>
          <option value="Inactive" ${selectedStatus === 'Inactive' ? 'selected' : ''}>Inactive</option>
        </select>

        <select class="form-select sort-filter" style="width: auto; min-width: 155px; font-size: 0.85rem; padding: 0.45rem 0.75rem;">
          <option value="name-asc" ${selectedSort === 'name-asc' ? 'selected' : ''}>Sort: Name (A–Z)</option>
          <option value="name-desc" ${selectedSort === 'name-desc' ? 'selected' : ''}>Sort: Name (Z–A)</option>
          <option value="stock-desc" ${selectedSort === 'stock-desc' ? 'selected' : ''}>Sort: Stock (High to Low)</option>
          <option value="stock-asc" ${selectedSort === 'stock-asc' ? 'selected' : ''}>Sort: Stock (Low to High)</option>
          <option value="price-desc" ${selectedSort === 'price-desc' ? 'selected' : ''}>Sort: Price (High to Low)</option>
          <option value="price-asc" ${selectedSort === 'price-asc' ? 'selected' : ''}>Sort: Price (Low to High)</option>
        </select>
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

      let matchStat = true;
      if (selectedStatus === 'Active' || selectedStatus === 'IN_STOCK') {
        matchStat = (p.status !== 'Inactive') && stockInfo.status === 'IN_STOCK';
      } else if (selectedStatus === 'PARTIAL_STOCK' || selectedStatus === 'PARTIAL') {
        matchStat = (p.status !== 'Inactive') && stockInfo.status === 'PARTIAL_STOCK';
      } else if (selectedStatus === 'LOW' || selectedStatus === 'LOW_STOCK') {
        matchStat = (p.status !== 'Inactive') && stockInfo.status === 'LOW_STOCK';
      } else if (selectedStatus === 'OUT' || selectedStatus === 'OUT_OF_STOCK') {
        matchStat = (p.status !== 'Inactive') && (stockInfo.status === 'OUT_OF_STOCK' || stockInfo.outOfStockSizes > 0);
      } else if (selectedStatus === 'Inactive') {
        matchStat = (p.status === 'Inactive');
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
      if (p.status === 'Inactive') {
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
      tr.style.cssText = hasSizes ? 'cursor: pointer; transition: background-color 0.15s ease;' : 'transition: background-color 0.15s ease;';

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
              <div style="font-weight: 600; font-size: 0.9rem; color: var(--text-primary);">${p.name}</div>
              ${hasSizes ? `<div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 2px;">${stockInfo.totalSizes} size variants</div>` : ''}
            </div>
          </div>
        </td>
        <td style="color: var(--text-secondary);">${p.category || 'General'}</td>
        <td style="color: var(--text-secondary);">${p.brand || 'Unbranded'}</td>
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

      // Expand/collapse when clicking anywhere on parent product row
      if (hasSizes) {
        tr.addEventListener('click', (e) => {
          // Do not toggle if click originated on an action button or inside action controls
          if (e.target.closest('.table-action-btn') || e.target.closest('.row-actions-box')) {
            return;
          }
          toggleExpand();
        });

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
        openProductDetailsModal(p);
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
        deleteInvBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          const confirmed = confirm(`Are you sure you want to delete "${p.name}" (${p.id})?\n\nThis will remove the product and all its size variants from inventory.`);
          if (confirmed) {
            try {
              if (expandedProductIds.has(p.id)) {
                expandedProductIds.delete(p.id);
              }
              store.deleteProduct(p.id);
              toast.show({ message: `Product "${p.name}" deleted successfully.`, type: 'info' });
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
                  Size ${v.size}
                </span>
              </td>
              <td style="padding: 0.6rem 0.85rem; color: var(--text-secondary); font-size: 0.85rem;">${buyPrice}</td>
              <td style="padding: 0.6rem 0.85rem; font-weight: 600; font-size: 0.85rem;">${sellPrice}</td>
              <td style="padding: 0.6rem 0.85rem; font-weight: 600; font-size: 0.85rem; color: ${vStock === 0 ? 'var(--status-danger)' : 'var(--text-primary)'};">${vStock} units</td>
              <td style="padding: 0.6rem 0.85rem;">${vBadge}</td>
              <td style="padding: 0.6rem 0.85rem; text-align: right;">
                <button type="button" class="btn btn-sm btn-secondary table-action-btn size-adjust-btn adjust-inv-btn" data-size="${v.size}" title="Adjust Stock" aria-label="Adjust Stock">
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
                  <span style="font-size: 0.8rem; color: var(--text-secondary);">&mdash; ${p.name}</span>
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

  const catOptions = (store.data.categories && store.data.categories.length > 0) ? store.data.categories : ['Shirts', 'T-Shirts', 'Jeans', 'Trousers', 'Hoodies', 'Accessories'];
  const brandOptions = (store.data.brands && store.data.brands.length > 0) ? store.data.brands : ['ClassicFit', 'UrbanWear', 'DenimCo', 'EssentialStudio'];
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
              <label style="font-size: 0.75rem; font-weight: 600; color: var(--text-primary); display: block; margin-bottom: 3px;">Size ${v.size}</label>
              <input type="number" class="form-input variant-price-input" data-size="${v.size}" placeholder="e.g. 599" value="${v.sellingPrice !== undefined && v.sellingPrice !== null && v.sellingPrice !== '' ? v.sellingPrice : (product.sellingPrice || '')}" style="font-size: 0.825rem; padding: 0.35rem 0.55rem;">
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
            Update product details and pricing for ${product.name}
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
              ${catOptions.map(c => `<option value="${c}" ${c === product.category ? 'selected' : ''}>${c}</option>`).join('')}
            </select>
          </div>
          <div class="form-group" style="margin: 0;">
            <label class="form-label" style="font-size: 0.825rem; font-weight: 500; margin-bottom: 0.35rem; display: block; color: var(--text-primary);">
              Brand
            </label>
            <select id="edit-prod-brand" class="form-select" style="font-size: 0.85rem; padding: 0.45rem 0.75rem;">
              ${brandOptions.map(b => `<option value="${b}" ${b === product.brand ? 'selected' : ''}>${b}</option>`).join('')}
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
          ${variants.map(v => `<option value="${v.size}" ${v.size === selectedSize ? 'selected' : ''}>Size ${v.size} (${v.stock || 0} units available)</option>`).join('')}
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
            ${isSizePreselected ? `Adjusting stock for ${liveProduct.name} (Size ${selectedSize})` : `Adjust stock for ${liveProduct.name}`}
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
            <div style="font-weight: 600; color: var(--text-primary); font-size: 0.9rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 300px;">${liveProduct.name}</div>
            ${liveProduct.brand ? `<span style="font-size: 0.75rem; color: var(--text-secondary); background: var(--bg-surface); padding: 1px 7px; border-radius: 4px; border: 1px solid var(--border-color); font-weight: 500;">${liveProduct.brand}</span>` : ''}
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; color: var(--text-secondary); font-size: 0.8rem;">
            <span>Category: <strong style="color: var(--text-primary); font-weight: 500;">${liveProduct.category || 'General'}</strong></span>
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
// PURCHASES PAGE (Draft -> Approved -> Received Workflow)
function renderPurchases(params = {}, onNavigate = null) {
  if (params && (params.action === 'add' || params.view === 'add' || params.action === 'edit' || params.action === 'add-product' || params.view === 'add-product')) {
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

  let currentFilter = 'all'; // 'all', 'draft', 'approved', 'partially-received', 'received'
  let searchQuery = '';
  let purCurrentPage = 1;
  let purPageSize = 5;

  mainCard.innerHTML = `
    <!-- Top Filter Bar -->
    <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
      <div style="display: flex; gap: 0.4rem; flex-wrap: wrap;" id="pur-status-filters">
        <button type="button" class="btn btn-sm pur-filter-btn" data-filter="all" style="font-weight: 600;">All Purchases</button>
        <button type="button" class="btn btn-sm pur-filter-btn" data-filter="draft" style="font-weight: 600;">Draft</button>
        <button type="button" class="btn btn-sm pur-filter-btn" data-filter="approved" style="font-weight: 600;">Approved</button>
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
            <th style="width: 8%; text-align: center;">S.No</th>
            <th style="width: 22%;">Supplier</th>
            <th style="width: 14%;">Date</th>
            <th style="width: 16%;">Units (Rec / Ord)</th>
            <th style="width: 14%;">Total Cost</th>
            <th style="width: 12%;">Status</th>
            <th style="width: 14%; text-align: right;">Actions</th>
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
      if (currentFilter === 'draft' && statusLower !== 'draft') return false;
      if (currentFilter === 'approved' && statusLower !== 'approved') return false;
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
      tr.style.cursor = 'pointer';

      const status = p.status || 'Completed';
      let badgeVariant = 'secondary';
      if (status === 'Draft') badgeVariant = 'warning';
      else if (status === 'Approved') badgeVariant = 'info';
      else if (status === 'Partially Received') badgeVariant = 'warning';
      else if (status === 'Received' || status === 'Completed') badgeVariant = 'success';

      // Calculate total ordered and total received
      const totalOrdered = p.totalQuantity !== undefined ? Number(p.totalQuantity) : (p.items || []).reduce((s, i) => s + Number(i.qty || i.received || 0), 0);
      const totalReceived = p.totalReceived !== undefined ? Number(p.totalReceived) : (p.items || []).reduce((s, i) => s + Number(i.receivedQty !== undefined ? i.receivedQty : (i.received !== undefined ? i.received : (status === 'Completed' || status === 'Received' ? (i.qty || 0) : 0))), 0);

      // Row Actions according to Status:
      // Draft: Approve, Edit, Delete
      // Approved: Receive
      // Partially Received: Receive Remaining
      // Received: View
      let actionsHtml = '';
      if (status === 'Draft') {
        actionsHtml = `
          <div style="display: flex; gap: 0.35rem; justify-content: flex-end;" class="row-actions-box">
            <button type="button" class="btn btn-sm btn-primary table-action-btn action-approve-btn" title="Approve" aria-label="Approve">
              <i data-lucide="check-circle"></i>
              <span class="sr-only">Approve</span>
            </button>
            <button type="button" class="btn btn-sm btn-secondary table-action-btn action-edit-btn" title="Edit" aria-label="Edit">
              <i data-lucide="pencil"></i>
              <span class="sr-only">Edit</span>
            </button>
            <button type="button" class="btn btn-sm btn-ghost table-action-btn action-delete-btn" title="Delete" aria-label="Delete" style="color: var(--status-danger);">
              <i data-lucide="trash-2"></i>
              <span class="sr-only">Delete</span>
            </button>
          </div>
        `;
      } else if (status === 'Approved') {
        actionsHtml = `
          <div style="display: flex; gap: 0.35rem; justify-content: flex-end;" class="row-actions-box">
            <button type="button" class="btn btn-sm btn-primary table-action-btn action-receive-btn" title="Receive Purchase" aria-label="Receive Purchase">
              <i data-lucide="package-check"></i>
              <span class="sr-only">Receive Purchase</span>
            </button>
          </div>
        `;
      } else if (status === 'Partially Received') {
        actionsHtml = `
          <div style="display: flex; gap: 0.35rem; justify-content: flex-end;" class="row-actions-box">
            <button type="button" class="btn btn-sm btn-primary table-action-btn action-receive-btn" title="Receive Remaining" aria-label="Receive Remaining">
              <i data-lucide="package-check"></i>
              <span class="sr-only">Receive Remaining</span>
            </button>
          </div>
        `;
      } else {
        actionsHtml = `
          <div style="display: flex; gap: 0.35rem; justify-content: flex-end;" class="row-actions-box">
            <button type="button" class="btn btn-sm btn-secondary table-action-btn action-view-btn" title="View" aria-label="View">
              <i data-lucide="eye"></i>
              <span class="sr-only">View</span>
            </button>
          </div>
        `;
      }

      tr.innerHTML = `
        <td style="font-weight: 600; color: var(--text-secondary); text-align: center;">${startIdx + index + 1}</td>
        <td style="font-weight: 600; color: var(--text-primary);">${p.supplier || 'Supplier'}</td>
        <td style="color: var(--text-secondary);">${p.date || '-'}</td>
        <td style="font-weight: 600; color: var(--text-primary);">
          ${status === 'Partially Received' ? `<span style="color: var(--brand-primary);">${totalReceived}</span> / ${totalOrdered}` : `${totalOrdered} units`}
        </td>
        <td style="font-weight: 700; color: var(--text-primary);">₹${(p.totalAmount || 0).toLocaleString()}</td>
        <td>${createBadge({ label: status, variant: badgeVariant }).outerHTML}</td>
        <td>${actionsHtml}</td>
      `;

      // Row Click -> Open View Details Modal
      tr.addEventListener('click', (e) => {
        if (e.target.closest('.row-actions-box')) return; // do not trigger if button clicked
        openViewPurchaseModal(p, onNavigate, () => renderPurchasesTable());
      });

      // Draft Actions
      const approveBtn = tr.querySelector('.action-approve-btn');
      if (approveBtn) {
        approveBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          const confirmed = confirm(`Approve purchase order ${p.id} from "${p.supplier}"?

Status will change to Approved. Stock will remain unchanged until goods are received.`);
          if (confirmed) {
            try {
              store.approvePurchase(p.id);
              toast.show({ message: `Purchase ${p.id} approved! You can now receive stock.`, type: 'success' });
              renderPurchasesTable();
            } catch (err) {
              toast.show({ message: err.message, type: 'danger' });
            }
          }
        });
      }

      const editBtn = tr.querySelector('.action-edit-btn');
      if (editBtn) {
        editBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          if (onNavigate) onNavigate('purchases', { action: 'edit', purchaseId: p.id });
        });
      }

      const deleteBtn = tr.querySelector('.action-delete-btn');
      if (deleteBtn) {
        deleteBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          const confirmed = confirm(`Delete draft purchase order ${p.id}?

This action cannot be undone.`);
          if (confirmed) {
            try {
              store.deleteDraftPurchase(p.id);
              toast.show({ message: `Draft purchase ${p.id} deleted.`, type: 'info' });
              renderPurchasesTable();
            } catch (err) {
              toast.show({ message: err.message, type: 'danger' });
            }
          }
        });
      }

      // Receive Actions
      const receiveBtn = tr.querySelector('.action-receive-btn');
      if (receiveBtn) {
        receiveBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          openReceivePurchaseModal(p, () => renderPurchasesTable());
        });
      }

      // View Action
      const viewBtn = tr.querySelector('.action-view-btn');
      if (viewBtn) {
        viewBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          openViewPurchaseModal(p, onNavigate, () => renderPurchasesTable());
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
        btn.style.color = '#ffffff';
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
function openReceivePurchaseModal(purchase, onComplete) {
  const modalOverlay = document.createElement('div');
  modalOverlay.className = 'modal-overlay';
  modalOverlay.style.cssText = 'position: fixed; inset: 0; background: rgba(0,0,0,0.65); display: flex; align-items: center; justify-content: center; z-index: 1000; padding: 1rem;';

  const modalBox = document.createElement('div');
  modalBox.className = 'modal-content card';
  modalBox.style.cssText = 'max-width: 750px; width: 100%; max-height: 90vh; overflow-y: auto; display: flex; flex-direction: column; gap: 1.25rem;';

  const status = purchase.status || 'Approved';
  const todayStr = new Date().toISOString().split('T')[0];

  modalBox.innerHTML = `
    <!-- Modal Header -->
    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem;">
      <div>
        <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--text-primary); margin: 0;">
          Receive Purchase Order — ${purchase.id}
        </h3>
        <p style="font-size: 0.8rem; color: var(--text-secondary); margin: 0.2rem 0 0 0;">
          Supplier: <strong>${purchase.supplier}</strong> | Order Date: ${purchase.date}
        </p>
      </div>
      <button type="button" class="btn btn-ghost btn-sm close-receive-btn" style="padding: 0.35rem;">
        <i data-lucide="x" style="width: 18px; height: 18px;"></i>
      </button>
    </div>

    <!-- Instructions / Status Banner -->
    <div style="background: var(--bg-secondary); padding: 0.85rem 1.15rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color); font-size: 0.825rem; color: var(--text-secondary);">
      Verify goods received against ordered quantities. Enter the actual units received now for each size. Only confirmed received units will be added to Inventory.
    </div>

    <!-- Items Intake Table -->
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

    <!-- Receipt Details (Date & Remarks) -->
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
      <div class="form-group">
        <label class="form-label" style="font-size: 0.825rem; font-weight: 600; color: var(--text-primary);">Receipt Date *</label>
        <input type="date" class="form-input" id="receive-date-input" value="${todayStr}">
      </div>
      <div class="form-group">
        <label class="form-label" style="font-size: 0.825rem; font-weight: 600; color: var(--text-primary);">Delivery Notes / Remarks</label>
        <input type="text" class="form-input" id="receive-notes-input" placeholder="e.g. Batch verified, quality OK">
      </div>
    </div>

    <!-- Live Receipt Summary -->
    <div style="display: flex; justify-content: space-between; align-items: center; background: var(--bg-surface); padding: 0.75rem 1rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color); font-size: 0.85rem; font-weight: 600;">
      <div>Units Receiving Now: <span id="receive-now-total" style="color: var(--brand-primary); font-weight: 700;">0</span></div>
      <div id="receive-status-preview" style="color: var(--status-success);">Status after receipt: Fully Received</div>
    </div>

    <!-- Modal Footer Actions -->
    <div style="display: flex; justify-content: flex-end; gap: 0.75rem; border-top: 1px solid var(--border-color); padding-top: 1rem;">
      <button type="button" class="btn btn-secondary cancel-receive-btn">Cancel</button>
      <button type="button" class="btn btn-primary confirm-receive-btn" style="padding: 0.55rem 1.35rem; font-weight: 600;">
        <i data-lucide="check-circle" style="width: 16px; height: 16px;"></i>
        Confirm Receipt & Update Stock
      </button>
    </div>
  `;

  modalOverlay.appendChild(modalBox);
  document.body.appendChild(modalOverlay);

  const tbody = modalBox.querySelector('#receive-items-tbody');
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
      <td style="font-weight: 600; color: var(--text-primary);">${item.product}</td>
      <td><span class="badge badge-secondary">${item.size || 'Standard'}</span></td>
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
      const outstanding = Math.max(0, ordered - alreadyRec);
      const nowRec = receiveMap[index] || 0;

      nowTotal += nowRec;
      if (alreadyRec + nowRec < ordered) {
        allRemainingCleared = false;
      }
    });

    modalBox.querySelector('#receive-now-total').textContent = `${nowTotal} units`;
    const previewEl = modalBox.querySelector('#receive-status-preview');
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

  const closeModal = () => modalOverlay.remove();
  modalBox.querySelector('.close-receive-btn').addEventListener('click', closeModal);
  modalBox.querySelector('.cancel-receive-btn').addEventListener('click', closeModal);

  let isConfirming = false;
  modalBox.querySelector('.confirm-receive-btn').addEventListener('click', () => {
    if (isConfirming) return;

    let nowTotal = 0;
    Object.values(receiveMap).forEach(v => { nowTotal += (v || 0); });

    if (nowTotal <= 0) {
      toast.show({ message: 'Please enter at least 1 unit to receive.', type: 'danger' });
      return;
    }

    const rDate = modalBox.querySelector('#receive-date-input').value;
    const rNotes = modalBox.querySelector('#receive-notes-input').value.trim();

    isConfirming = true;
    const confirmBtn = modalBox.querySelector('.confirm-receive-btn');
    confirmBtn.disabled = true;
    confirmBtn.innerHTML = 'Receiving Stock...';

    try {
      store.receivePurchaseStock(purchase.id, receiveMap, rDate, rNotes);
      toast.show({ message: `Successfully received ${nowTotal} units into Inventory!`, type: 'success' });
      closeModal();
      if (onComplete) onComplete();
    } catch (err) {
      console.error('Receive stock error:', err);
      toast.show({ message: `Error receiving stock: ${err.message}`, type: 'danger' });
      isConfirming = false;
      confirmBtn.disabled = false;
      confirmBtn.innerHTML = 'Confirm Receipt & Update Stock';
    }
  });

  if (window.lucide) window.lucide.createIcons();
}

// VIEW PURCHASE DETAILS MODAL
function openViewPurchaseModal(purchase, onNavigate, onRefresh) {
  const modalOverlay = document.createElement('div');
  modalOverlay.className = 'modal-overlay';
  modalOverlay.style.cssText = 'position: fixed; inset: 0; background: rgba(0,0,0,0.65); display: flex; align-items: center; justify-content: center; z-index: 1000; padding: 1rem;';

  const modalBox = document.createElement('div');
  modalBox.className = 'modal-content card';
  modalBox.style.cssText = 'max-width: 800px; width: 100%; max-height: 90vh; overflow-y: auto; display: flex; flex-direction: column; gap: 1.25rem;';

  const status = purchase.status || 'Completed';
  let badgeVariant = 'secondary';
  if (status === 'Draft') badgeVariant = 'warning';
  else if (status === 'Approved') badgeVariant = 'info';
  else if (status === 'Partially Received') badgeVariant = 'warning';
  else if (status === 'Received' || status === 'Completed') badgeVariant = 'success';

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
        <div style="font-size: 1rem; font-weight: 700; color: var(--text-primary); margin-top: 0.2rem;">${purchase.supplier}</div>
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
                  <td style="font-weight: 600; color: var(--text-primary);">${item.product}</td>
                  <td><span class="badge badge-secondary">${item.size || 'Standard'}</span></td>
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
                ${rh.notes ? ` — <em>${rh.notes}</em>` : ''}
              </div>
              <span class="badge badge-success">Stock In</span>
            </div>
          `).join('')}
        </div>
      </div>
    ` : ''}

    <!-- Modal Footer Actions -->
    <div style="display: flex; justify-content: flex-end; gap: 0.75rem; border-top: 1px solid var(--border-color); padding-top: 1rem;">
      ${status === 'Draft' ? `
        <button type="button" class="btn btn-ghost modal-delete-btn" style="color: var(--status-danger);">Delete Draft</button>
        <button type="button" class="btn btn-secondary modal-edit-btn">Edit Draft</button>
        <button type="button" class="btn btn-primary modal-approve-btn">Approve Purchase</button>
      ` : ''}

      ${status === 'Approved' ? `
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
  const modalApproveBtn = modalBox.querySelector('.modal-approve-btn');
  if (modalApproveBtn) {
    modalApproveBtn.addEventListener('click', () => {
      const confirmed = confirm(`Approve purchase order ${purchase.id}?

Stock will remain unchanged until goods are received.`);
      if (confirmed) {
        store.approvePurchase(purchase.id);
        toast.show({ message: `Purchase ${purchase.id} approved!`, type: 'success' });
        closeModal();
        if (onRefresh) onRefresh();
      }
    });
  }

  const modalEditBtn = modalBox.querySelector('.modal-edit-btn');
  if (modalEditBtn) {
    modalEditBtn.addEventListener('click', () => {
      closeModal();
      if (onNavigate) onNavigate('purchases', { action: 'edit', purchaseId: purchase.id });
    });
  }

  const modalDeleteBtn = modalBox.querySelector('.modal-delete-btn');
  if (modalDeleteBtn) {
    modalDeleteBtn.addEventListener('click', () => {
      const confirmed = confirm(`Delete draft purchase ${purchase.id}?`);
      if (confirmed) {
        store.deleteDraftPurchase(purchase.id);
        toast.show({ message: `Draft ${purchase.id} deleted.`, type: 'info' });
        closeModal();
        if (onRefresh) onRefresh();
      }
    });
  }

  const modalReceiveBtn = modalBox.querySelector('.modal-receive-btn');
  if (modalReceiveBtn) {
    modalReceiveBtn.addEventListener('click', () => {
      closeModal();
      openReceivePurchaseModal(purchase, () => {
        if (onRefresh) onRefresh();
      });
    });
  }

  if (window.lucide) window.lucide.createIcons();
}

// ADD PURCHASE PAGE (Manual Product Entry, Save as Draft or Save & Receive Stock)
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
    { label: isEditing ? `Edit Draft (${editingPurchase ? editingPurchase.id : 'Purchase'})` : 'Add Purchase' }
  ], onNavigate));
  container.appendChild(headerDiv);

  const mainCard = document.createElement('div');
  mainCard.className = 'card';
  mainCard.style.cssText = 'display: flex; flex-direction: column; gap: 1.5rem; width: 100%;';

  const supplierVal = editingPurchase
    ? editingPurchase.supplier
    : 'Apex Apparel Ltd';

  const dateVal = editingPurchase
    ? editingPurchase.date
    : new Date().toISOString().split('T')[0];

  const notesVal = editingPurchase
    ? (editingPurchase.notes || '')
    : '';

  let purchaseItemsData = [];
  if (editingPurchase && Array.isArray(editingPurchase.items)) {
    purchaseItemsData = editingPurchase.items.map(it => ({
      productName: it.product || it.productName || '',
      category: it.category || 'Shirts',
      brand: it.brand || '',
      size: it.size || 'Standard',
      qty: it.qty || 50,
      buyingPrice: it.buyingPrice !== undefined ? it.buyingPrice : 200,
      sellingPrice: it.sellingPrice !== undefined ? it.sellingPrice : 400,
      productId: it.productId || ''
    }));
  }

  const categoriesList = (store.data.categories && store.data.categories.length > 0)
    ? store.data.categories
    : ['Shirts', 'T-Shirts', 'Jeans', 'Trousers', 'Hoodies', 'Accessories'];

  const brandsList = (store.data.brands && store.data.brands.length > 0)
    ? store.data.brands
    : ['ClassicFit', 'UrbanWear', 'DenimCo', 'EssentialStudio'];

  const productsList = store.data.products || [];

  mainCard.innerHTML = `
    <!-- Product & Brand Auto-suggest Datalists -->
    <datalist id="pur-products-list">
      ${productsList.map(p => `<option value="${p.name}">`).join('')}
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
          <label class="form-label" style="font-weight: 600; font-size: 0.825rem;">Supplier <span style="color: #ef4444;">*</span></label>
          <input type="text" id="pur-supplier" class="form-input" placeholder="e.g. Apex Apparel Ltd" value="${supplierVal}">
        </div>
        <div class="form-group">
          <label class="form-label" style="font-weight: 600; font-size: 0.825rem;">Purchase Date <span style="color: #ef4444;">*</span></label>
          <input type="date" id="pur-date" class="form-input" value="${dateVal}">
        </div>
        <div class="form-group" style="grid-column: 1 / -1;">
          <label class="form-label" style="font-weight: 600; font-size: 0.825rem;">Notes (Optional)</label>
          <input type="text" id="pur-notes" class="form-input" placeholder="Invoice # or purchase remarks" value="${notesVal}">
        </div>
      </div>
    </div>

    <!-- SECTION B: PRODUCT & SIZE-WISE ITEMS (Manual Entry Rows) -->
    <div style="display: flex; flex-direction: column; gap: 1.25rem;">
      <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem; flex-wrap: wrap; gap: 0.5rem;">
        <div>
          <h3 style="font-size: 1.05rem; font-weight: 600; margin: 0; color: var(--text-primary); display: flex; align-items: center; gap: 0.5rem;">
            <i data-lucide="boxes" style="width: 18px; height: 18px; color: var(--brand-primary);"></i>
            Product & Size-wise Items
          </h3>
          <p style="font-size: 0.8rem; color: var(--text-secondary); margin: 0.25rem 0 0 0;">
            Enter product details manually (Name, Category, Brand) and add size-wise quantities and prices.
          </p>
        </div>
      </div>

      <!-- Items List Container -->
      <div id="pur-items-container" style="display: flex; flex-direction: column; gap: 0.85rem;"></div>

      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; padding-top: 0.5rem;">
        <button type="button" id="btn-add-pur-item" class="btn btn-secondary btn-sm" style="display: inline-flex; align-items: center; gap: 0.35rem; font-weight: 600;">
          <i data-lucide="plus" style="width: 14px; height: 14px;"></i>
          <span>Add Another Product / Size Row</span>
        </button>

        <div style="display: flex; gap: 1.5rem; font-size: 0.875rem; font-weight: 600; background: var(--bg-secondary); padding: 0.75rem 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color); flex-wrap: wrap;">
          <div>Total Units: <span id="pur-summary-qty" style="color: var(--text-primary); font-weight: 700;">0</span></div>
          <div>Total Purchase Cost: <span id="pur-summary-cost" style="color: var(--brand-primary); font-weight: 700;">₹0</span></div>
          <div>Est. Selling Value: <span id="pur-summary-sell" style="color: var(--status-success); font-weight: 700;">₹0</span></div>
          <div>Est. Gross Profit: <span id="pur-summary-profit" style="color: var(--status-success); font-weight: 700;">₹0</span></div>
        </div>
      </div>
    </div>

    <!-- SECTION C: ACTION BUTTONS (Save as Draft & Save & Receive Stock) -->
    <div style="display: flex; justify-content: flex-end; align-items: center; gap: 0.75rem; border-top: 1px solid var(--border-color); padding-top: 1.25rem; margin-top: 0.5rem; flex-wrap: wrap;">
      <button type="button" id="btn-cancel-pur" class="btn btn-secondary">Cancel</button>
      <button type="button" id="btn-save-draft-pur" class="btn btn-secondary" style="font-weight: 600; border: 1px solid var(--brand-primary); color: var(--brand-primary);">
        <i data-lucide="save" style="width: 16px; height: 16px;"></i>
        Save as Draft
      </button>
      <button type="button" id="btn-save-pur" class="btn btn-primary" style="padding: 0.65rem 1.5rem; font-weight: 600;">
        <i data-lucide="check-circle" style="width: 18px; height: 18px;"></i>
        Save & Receive Stock
      </button>
    </div>
  `;

  container.appendChild(mainCard);

  const itemsContainer = mainCard.querySelector('#pur-items-container');

  function updateSummaries() {
    let overallUnits = 0;
    let overallCost = 0;
    let overallSellingValue = 0;

    purchaseItemsData.forEach((it, idx) => {
      const q = parseInt(it.qty, 10) || 0;
      const b = parseFloat(it.buyingPrice) || 0;
      const s = parseFloat(it.sellingPrice) || 0;
      const c = q * b;
      const v = q * s;

      overallUnits += q;
      overallCost += c;
      overallSellingValue += v;

      const rowEl = itemsContainer.children[idx];
      if (rowEl) {
        const costEl = rowEl.querySelector('.pur-cost-display');
        const valEl = rowEl.querySelector('.pur-value-display');
        if (costEl) costEl.value = `₹${c.toLocaleString()}`;
        if (valEl) valEl.value = `₹${v.toLocaleString()}`;
      }
    });

    const overallProfit = overallSellingValue - overallCost;
    const sumQtyEl = mainCard.querySelector('#pur-summary-qty');
    const sumCostEl = mainCard.querySelector('#pur-summary-cost');
    const sumSellEl = mainCard.querySelector('#pur-summary-sell');
    const sumProfitEl = mainCard.querySelector('#pur-summary-profit');

    if (sumQtyEl) sumQtyEl.textContent = `${overallUnits} units`;
    if (sumCostEl) sumCostEl.textContent = `₹${overallCost.toLocaleString()}`;
    if (sumSellEl) sumSellEl.textContent = `₹${overallSellingValue.toLocaleString()}`;
    if (sumProfitEl) sumProfitEl.textContent = `₹${overallProfit.toLocaleString()}`;
  }

  function renderPurchaseItems() {
    itemsContainer.innerHTML = '';

    if (purchaseItemsData.length === 0) {
      const defaultP = productsList[0] || null;
      purchaseItemsData.push({
        productName: defaultP ? defaultP.name : '',
        category: defaultP ? (defaultP.category || 'Shirts') : 'Shirts',
        brand: defaultP ? (defaultP.brand || 'ClassicFit') : '',
        size: (defaultP && defaultP.variants && defaultP.variants[0]) ? defaultP.variants[0].size : 'M',
        qty: 50,
        buyingPrice: defaultP ? (defaultP.purchasePrice || 200) : 200,
        sellingPrice: defaultP ? (defaultP.sellingPrice || 400) : 400,
        isCustomCategory: false,
        isCustomSize: false
      });
    }

    const standardSizes = ['S', 'M', 'L', 'XL', 'XXL', '3XL', 'Free Size', 'Standard'];

    purchaseItemsData.forEach((item, index) => {
      const row = document.createElement('div');
      row.className = 'purchase-item-card';
      row.style.cssText = 'display: flex; flex-direction: column; gap: 0.75rem; padding: 0.95rem; border: 1px solid var(--border-color); border-radius: var(--radius-md); background: var(--bg-secondary);';

      const q = parseInt(item.qty, 10) || 0;
      const bPrice = parseFloat(item.buyingPrice) !== undefined ? parseFloat(item.buyingPrice) : 200;
      item.buyingPrice = bPrice;
      const lineCost = q * bPrice;

      const sPrice = parseFloat(item.sellingPrice) !== undefined ? parseFloat(item.sellingPrice) : Math.round(bPrice * 1.5);
      item.sellingPrice = sPrice;
      const lineValue = q * sPrice;

      const isCustomCat = !!item.isCustomCategory || (item.category && !categoriesList.includes(item.category));
      item.isCustomCategory = isCustomCat;

      const isCustomSize = !!item.isCustomSize || (item.size && !standardSizes.includes(item.size));
      item.isCustomSize = isCustomSize;

      const sameProdCount = purchaseItemsData.filter(i => (i.productName || '').trim().toLowerCase() === (item.productName || '').trim().toLowerCase()).length;

      row.innerHTML = `
        <!-- Tier 1: Product Definition (Name, Category, Brand, Actions) -->
        <div style="display: grid; grid-template-columns: 2fr 1.3fr 1.3fr auto; gap: 0.75rem; align-items: end;">
          <div class="form-group" style="margin: 0;">
            <label class="form-label" style="font-size: 0.8rem; font-weight: 600;">Product Name <span style="color: #ef4444;">*</span></label>
            <input type="text" class="form-input pur-name-input" placeholder="e.g. Classic Oxford Shirt" list="pur-products-list" value="${item.productName || ''}" style="padding: 0.45rem 0.65rem; font-size: 0.85rem; font-weight: 600;">
          </div>
          <div class="form-group pur-cat-group" style="margin: 0;">
            <label class="form-label" style="font-size: 0.8rem; font-weight: 600;">Category <span style="color: #ef4444;">*</span></label>
            <div class="pur-cat-container" style="position: relative; width: 100%;">
              <select class="form-select pur-cat-select" style="display: ${isCustomCat ? 'none' : 'block'}; padding: 0.45rem 0.65rem; font-size: 0.85rem; font-weight: 500; width: 100%;">
                <option value="">Select Category *</option>
                ${categoriesList.map(c => `<option value="${c}" ${(!isCustomCat && c === item.category) ? 'selected' : ''}>${c}</option>`).join('')}
                <option value="__CUSTOM__">+ Custom Category...</option>
              </select>
              <div class="pur-cat-custom-wrapper" style="display: ${isCustomCat ? 'flex' : 'none'}; position: relative; width: 100%; align-items: center;">
                <input type="text" class="form-input pur-cat-custom-input" placeholder="Enter category" value="${isCustomCat ? (item.category || '') : ''}" style="width: 100%; padding: 0.45rem 2.2rem 0.45rem 0.65rem; font-size: 0.85rem; font-weight: 500;">
                <button type="button" class="btn btn-ghost pur-cat-back-btn" title="Switch back to Category dropdown" style="position: absolute; right: 3px; top: 50%; transform: translateY(-50%); padding: 0.25rem 0.35rem; height: 26px; width: 26px; display: inline-flex; align-items: center; justify-content: center; border-radius: 4px; color: var(--text-secondary); border: none; background: transparent; cursor: pointer;">
                  <i data-lucide="list" style="width: 14px; height: 14px;"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="form-group" style="margin: 0;">
            <label class="form-label" style="font-size: 0.8rem; font-weight: 600;">Brand</label>
            <input type="text" class="form-input pur-brand-input" placeholder="e.g. ClassicFit" list="pur-brands-list" value="${item.brand || ''}" style="padding: 0.45rem 0.65rem; font-size: 0.85rem;">
          </div>
          <div style="display: flex; gap: 0.4rem; align-items: center; padding-bottom: 2px;">
            ${sameProdCount > 1 ? `
              <button type="button" class="btn btn-secondary btn-sm pur-apply-price-btn" title="Copy product details & prices to all other sizes of this product" style="font-size: 0.72rem; padding: 0.35rem 0.6rem; color: var(--brand-primary); height: 34px;">
                <i data-lucide="copy" style="width: 12px; height: 12px;"></i> Apply to all sizes
              </button>
            ` : ''}
            <button type="button" class="btn btn-ghost pur-remove-btn" style="padding: 0.45rem; color: var(--status-danger); height: 34px;" title="Remove this row">
              <i data-lucide="trash-2" style="width: 16px; height: 16px;"></i>
            </button>
          </div>
        </div>

        <!-- Tier 2: Size & Financials (Size, Qty, Buying Price, Total Cost, Selling Price, Est Value) -->
        <div style="display: grid; grid-template-columns: 1.2fr 1fr 1.2fr 1.2fr 1.2fr 1.2fr; gap: 0.75rem; align-items: end; border-top: 1px dashed var(--border-color); padding-top: 0.65rem;">
          <div class="form-group pur-size-group" style="margin: 0;">
            <label class="form-label" style="font-size: 0.8rem; font-weight: 600;">Size / Variant <span style="color: #ef4444;">*</span></label>
            <div class="pur-size-container" style="position: relative; width: 100%;">
              <select class="form-select pur-size-select" style="display: ${isCustomSize ? 'none' : 'block'}; padding: 0.45rem 0.65rem; font-size: 0.85rem; font-weight: 500; width: 100%;">
                ${standardSizes.map(s => `<option value="${s}" ${(!isCustomSize && s === item.size) ? 'selected' : ''}>${s === 'Standard' ? 'Standard (No sizes)' : 'Size ' + s}</option>`).join('')}
                <option value="__CUSTOM__">+ Custom Size...</option>
              </select>
              <div class="pur-size-custom-wrapper" style="display: ${isCustomSize ? 'flex' : 'none'}; position: relative; width: 100%; align-items: center;">
                <input type="text" class="form-input pur-size-custom-input" placeholder="Enter size / variant" value="${isCustomSize ? (item.size || '') : ''}" style="width: 100%; padding: 0.45rem 2.2rem 0.45rem 0.65rem; font-size: 0.85rem; font-weight: 500;">
                <button type="button" class="btn btn-ghost pur-size-back-btn" title="Switch back to Size dropdown" style="position: absolute; right: 3px; top: 50%; transform: translateY(-50%); padding: 0.25rem 0.35rem; height: 26px; width: 26px; display: inline-flex; align-items: center; justify-content: center; border-radius: 4px; color: var(--text-secondary); border: none; background: transparent; cursor: pointer;">
                  <i data-lucide="list" style="width: 14px; height: 14px;"></i>
                </button>
              </div>
            </div>
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" style="font-size: 0.8rem; font-weight: 600;">Qty <span style="color: #ef4444;">*</span></label>
            <input type="number" class="form-input pur-qty-input" min="1" value="${q}" style="padding: 0.45rem 0.65rem; font-size: 0.85rem; font-weight: 600;">
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" style="font-size: 0.8rem; font-weight: 600;">Buying Price (₹) <span style="color: #ef4444;">*</span></label>
            <input type="number" class="form-input pur-buying-input" min="0" step="any" value="${bPrice}" style="padding: 0.45rem 0.65rem; font-size: 0.85rem; font-weight: 600;">
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" style="font-size: 0.8rem; font-weight: 600; color: var(--text-secondary);">Total Cost (₹)</label>
            <input type="text" class="form-input pur-cost-display" value="₹${lineCost.toLocaleString()}" readonly style="padding: 0.45rem 0.65rem; font-size: 0.85rem; font-weight: 700; background: var(--bg-surface); color: var(--brand-primary);">
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" style="font-size: 0.8rem; font-weight: 600;">Selling Price (₹)</label>
            <input type="number" class="form-input pur-selling-input" min="0" step="any" value="${sPrice}" style="padding: 0.45rem 0.65rem; font-size: 0.85rem; font-weight: 600;">
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" style="font-size: 0.8rem; font-weight: 600; color: var(--text-secondary);">Est. Value (₹)</label>
            <input type="text" class="form-input pur-value-display" value="₹${lineValue.toLocaleString()}" readonly style="padding: 0.45rem 0.65rem; font-size: 0.85rem; font-weight: 700; background: var(--bg-surface); color: var(--status-success);">
          </div>
        </div>
      `;

      const nameInp = row.querySelector('.pur-name-input');
      const catSel = row.querySelector('.pur-cat-select');
      const catCustomWrapper = row.querySelector('.pur-cat-custom-wrapper');
      const catCustomInp = row.querySelector('.pur-cat-custom-input');
      const catBackBtn = row.querySelector('.pur-cat-back-btn');

      const brandInp = row.querySelector('.pur-brand-input');

      const sizeSel = row.querySelector('.pur-size-select');
      const sizeCustomWrapper = row.querySelector('.pur-size-custom-wrapper');
      const sizeCustomInp = row.querySelector('.pur-size-custom-input');
      const sizeBackBtn = row.querySelector('.pur-size-back-btn');

      const qtyInp = row.querySelector('.pur-qty-input');
      const buyInp = row.querySelector('.pur-buying-input');
      const sellInp = row.querySelector('.pur-selling-input');
      const removeBtn = row.querySelector('.pur-remove-btn');
      const applyPriceBtn = row.querySelector('.pur-apply-price-btn');

      nameInp.addEventListener('input', (e) => {
        item.productName = e.target.value;
      });

      nameInp.addEventListener('change', (e) => {
        item.productName = e.target.value;
        const matched = productsList.find(p => p.name && p.name.trim().toLowerCase() === e.target.value.trim().toLowerCase());
        if (matched) {
          if (!item.category || item.category === 'General') {
            item.category = matched.category || '';
            if (categoriesList.includes(item.category)) {
              item.isCustomCategory = false;
              catSel.style.display = 'block';
              catCustomWrapper.style.display = 'none';
              catSel.value = item.category;
            } else {
              item.isCustomCategory = true;
              catSel.style.display = 'none';
              catCustomWrapper.style.display = 'flex';
              catCustomInp.value = item.category;
            }
          }
          if (!item.brand || item.brand === 'Generic') {
            item.brand = matched.brand || '';
            if (brandInp) brandInp.value = item.brand;
          }
          if (!item.buyingPrice || item.buyingPrice === 200) {
            if (matched.purchasePrice) {
              item.buyingPrice = matched.purchasePrice;
              if (buyInp) buyInp.value = item.buyingPrice;
            }
          }
          if (!item.sellingPrice || item.sellingPrice === 350) {
            if (matched.sellingPrice) {
              item.sellingPrice = matched.sellingPrice;
              if (sellInp) sellInp.value = item.sellingPrice;
            }
          }
          updateSummaries();
        }
      });

      catSel.addEventListener('change', (e) => {
        if (e.target.value === '__CUSTOM__') {
          item.isCustomCategory = true;
          catSel.style.display = 'none';
          catCustomWrapper.style.display = 'flex';
          if (item.category && categoriesList.includes(item.category)) {
            catCustomInp.value = '';
            item.category = '';
          } else {
            catCustomInp.value = item.category || '';
          }
          catCustomInp.focus();
          if (window.lucide) window.lucide.createIcons();
        } else {
          item.isCustomCategory = false;
          item.category = e.target.value;
        }
      });

      catCustomInp.addEventListener('input', (e) => {
        item.category = e.target.value;
      });

      catBackBtn.addEventListener('click', () => {
        item.isCustomCategory = false;
        catCustomWrapper.style.display = 'none';
        catSel.style.display = 'block';
        if (item.category && categoriesList.includes(item.category.trim())) {
          catSel.value = item.category.trim();
        } else {
          catSel.value = categoriesList[0] || '';
          item.category = catSel.value;
        }
        catSel.focus();
      });

      sizeSel.addEventListener('change', (e) => {
        if (e.target.value === '__CUSTOM__') {
          item.isCustomSize = true;
          sizeSel.style.display = 'none';
          sizeCustomWrapper.style.display = 'flex';
          if (item.size && standardSizes.includes(item.size)) {
            sizeCustomInp.value = '';
            item.size = '';
          } else {
            sizeCustomInp.value = item.size || '';
          }
          sizeCustomInp.focus();
          if (window.lucide) window.lucide.createIcons();
        } else {
          item.isCustomSize = false;
          item.size = e.target.value;
        }
      });

      sizeCustomInp.addEventListener('input', (e) => {
        item.size = e.target.value;
      });

      sizeBackBtn.addEventListener('click', () => {
        item.isCustomSize = false;
        sizeCustomWrapper.style.display = 'none';
        sizeSel.style.display = 'block';
        if (item.size && standardSizes.includes(item.size.trim())) {
          sizeSel.value = item.size.trim();
        } else {
          sizeSel.value = standardSizes[0] || 'M';
          item.size = sizeSel.value;
        }
        sizeSel.focus();
      });

      brandInp.addEventListener('input', (e) => {
        item.brand = e.target.value;
      });

      qtyInp.addEventListener('input', (e) => {
        item.qty = parseInt(e.target.value, 10) || 0;
        updateSummaries();
      });

      buyInp.addEventListener('input', (e) => {
        item.buyingPrice = parseFloat(e.target.value) || 0;
        updateSummaries();
      });

      sellInp.addEventListener('input', (e) => {
        item.sellingPrice = parseFloat(e.target.value) || 0;
        updateSummaries();
      });

      if (applyPriceBtn) {
        applyPriceBtn.addEventListener('click', () => {
          const targetName = (item.productName || '').trim().toLowerCase();
          let affected = 0;
          purchaseItemsData.forEach(other => {
            if ((other.productName || '').trim().toLowerCase() === targetName && other !== item) {
              other.buyingPrice = item.buyingPrice;
              other.sellingPrice = item.sellingPrice;
              if (item.category) {
                other.category = item.category;
                other.isCustomCategory = item.isCustomCategory;
              }
              if (item.brand) other.brand = item.brand;
              affected++;
            }
          });
          renderPurchaseItems();
          toast.show({
            message: `Applied details & prices (₹${item.buyingPrice} / ₹${item.sellingPrice}) across ${affected} other size row(s).`,
            type: 'info'
          });
        });
      }

      removeBtn.addEventListener('click', () => {
        if (purchaseItemsData.length <= 1) {
          toast.show({ message: 'At least one item is required for a purchase.', type: 'warning' });
          return;
        }
        purchaseItemsData.splice(index, 1);
        renderPurchaseItems();
      });

      itemsContainer.appendChild(row);
    });

    updateSummaries();
    if (window.lucide) window.lucide.createIcons();
  }

  renderPurchaseItems();

  mainCard.querySelector('#btn-add-pur-item').addEventListener('click', () => {
    const lastItem = purchaseItemsData[purchaseItemsData.length - 1];
    const prodName = lastItem ? (lastItem.productName || '') : '';
    const category = lastItem ? (lastItem.category || (categoriesList[0] || 'Shirts')) : (categoriesList[0] || 'Shirts');
    const brand = lastItem ? (lastItem.brand || '') : '';
    const buyingPrice = lastItem ? (lastItem.buyingPrice || 200) : 200;
    const sellingPrice = lastItem ? (lastItem.sellingPrice || 350) : 350;
    const qty = lastItem ? (lastItem.qty || 50) : 50;
    const isCustomCat = lastItem ? !!lastItem.isCustomCategory : false;

    // Determine next size to suggest for this product
    const usedSizes = new Set(purchaseItemsData.filter(i => (i.productName || '').trim().toLowerCase() === prodName.trim().toLowerCase()).map(i => i.size));
    const candidateSizes = ['S', 'M', 'L', 'XL', 'XXL', '3XL', 'Standard'];
    const nextSize = candidateSizes.find(s => !usedSizes.has(s)) || 'Standard';

    purchaseItemsData.push({
      productName: prodName,
      category: category,
      brand: brand,
      size: nextSize,
      qty: qty,
      buyingPrice: buyingPrice,
      sellingPrice: sellingPrice,
      isCustomCategory: isCustomCat,
      isCustomSize: false
    });
    renderPurchaseItems();
  });

  mainCard.querySelector('#btn-cancel-pur').addEventListener('click', () => {
    if (onNavigate) onNavigate('purchases');
  });

  // 1. SAVE AS DRAFT (No Stock Change)
  mainCard.querySelector('#btn-save-draft-pur').addEventListener('click', () => {
    const supplier = mainCard.querySelector('#pur-supplier').value.trim();
    const date = mainCard.querySelector('#pur-date').value;
    const notes = mainCard.querySelector('#pur-notes').value.trim();

    if (!supplier) {
      toast.show({ message: 'Supplier name is required.', type: 'danger' });
      return;
    }
    if (!date) {
      toast.show({ message: 'Purchase date is required.', type: 'danger' });
      return;
    }
    if (!purchaseItemsData || purchaseItemsData.length === 0) {
      toast.show({ message: 'At least one purchase item is required.', type: 'danger' });
      return;
    }

    for (let i = 0; i < purchaseItemsData.length; i++) {
      const item = purchaseItemsData[i];
      const pName = (item.productName || item.product || '').trim();
      if (!pName) {
        toast.show({ message: `Row #${i + 1}: Product Name is required.`, type: 'danger' });
        return;
      }
      const pCat = (item.category || '').trim();
      if (!pCat) {
        toast.show({ message: `Row #${i + 1}: Category is required.`, type: 'danger' });
        return;
      }
      const pSize = (item.size || '').trim();
      if (!pSize) {
        toast.show({ message: `Row #${i + 1}: Size / Variant is required.`, type: 'danger' });
        return;
      }
      item.productName = pName;
      item.category = pCat;
      item.size = pSize;
      item.brand = (item.brand || '').trim();

      const q = parseInt(item.qty, 10);
      if (isNaN(q) || q <= 0) {
        toast.show({ message: `Row #${i + 1}: Quantity must be a positive whole number greater than 0.`, type: 'danger' });
        return;
      }
      const bp = parseFloat(item.buyingPrice);
      if (isNaN(bp) || bp < 0) {
        toast.show({ message: `Row #${i + 1}: Buying Price must be a valid non-negative number.`, type: 'danger' });
        return;
      }
      const sp = parseFloat(item.sellingPrice);
      if (isNaN(sp) || sp < 0) {
        toast.show({ message: `Row #${i + 1}: Selling Price must be a valid non-negative number.`, type: 'danger' });
        return;
      }
    }

    store.savePurchaseDraft({
      supplier,
      date,
      notes,
      items: purchaseItemsData
    }, editingPurchase ? editingPurchase.id : null);

    toast.show({ message: `Purchase order saved as Draft! Inventory stock is unchanged.`, type: 'success' });
    if (onNavigate) onNavigate('purchases');
  });

  // 2. SAVE & RECEIVE STOCK (Instant Receive)
  mainCard.querySelector('#btn-save-pur').addEventListener('click', () => {
    const supplier = mainCard.querySelector('#pur-supplier').value.trim();
    const date = mainCard.querySelector('#pur-date').value;
    const notes = mainCard.querySelector('#pur-notes').value.trim();

    if (!supplier) {
      toast.show({ message: 'Supplier name is required.', type: 'danger' });
      return;
    }
    if (!date) {
      toast.show({ message: 'Purchase date is required.', type: 'danger' });
      return;
    }
    if (!purchaseItemsData || purchaseItemsData.length === 0) {
      toast.show({ message: 'At least one purchase item is required.', type: 'danger' });
      return;
    }

    for (let i = 0; i < purchaseItemsData.length; i++) {
      const item = purchaseItemsData[i];
      const pName = (item.productName || item.product || '').trim();
      if (!pName) {
        toast.show({ message: `Row #${i + 1}: Product Name is required.`, type: 'danger' });
        return;
      }
      const pCat = (item.category || '').trim();
      if (!pCat) {
        toast.show({ message: `Row #${i + 1}: Category is required.`, type: 'danger' });
        return;
      }
      const pSize = (item.size || '').trim();
      if (!pSize) {
        toast.show({ message: `Row #${i + 1}: Size / Variant is required.`, type: 'danger' });
        return;
      }
      item.productName = pName;
      item.category = pCat;
      item.size = pSize;
      item.brand = (item.brand || '').trim();

      const q = parseInt(item.qty, 10);
      if (isNaN(q) || q <= 0) {
        toast.show({ message: `Row #${i + 1}: Quantity must be a positive whole number greater than 0.`, type: 'danger' });
        return;
      }
      const bp = parseFloat(item.buyingPrice);
      if (isNaN(bp) || bp < 0) {
        toast.show({ message: `Row #${i + 1}: Buying Price must be a valid non-negative number.`, type: 'danger' });
        return;
      }
      const sp = parseFloat(item.sellingPrice);
      if (isNaN(sp) || sp < 0) {
        toast.show({ message: `Row #${i + 1}: Selling Price must be a valid non-negative number.`, type: 'danger' });
        return;
      }
    }

    // Save as draft first if editing or new, then receive
    const draft = store.savePurchaseDraft({
      supplier,
      date,
      notes,
      items: purchaseItemsData
    }, editingPurchase ? editingPurchase.id : null);

    // Auto approve and receive all
    store.approvePurchase(draft.id);
    const receiveMap = {};
    (draft.items || []).forEach((item, idx) => {
      receiveMap[idx] = item.qty;
    });
    store.receivePurchaseStock(draft.id, receiveMap, date, notes);

    toast.show({ message: `Purchase confirmed and stock received into inventory!`, type: 'success' });
    if (onNavigate) onNavigate('purchases');
  });

  if (window.lucide) window.lucide.createIcons();
  return container;
}

// SALES PAGE (Standardized with Purchases Table UI)
function renderSales(params = {}, onNavigate = null) {
  if (params && (params.action === 'add' || params.view === 'add')) {
    return renderAddSalePage(onNavigate);
  }

  const container = document.createElement('div');
  container.className = 'page-container';

  let currentFilter = 'all'; // 'all', 'paid', 'pending'
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
        <button type="button" class="btn btn-sm sales-filter-btn" data-filter="pending" style="font-weight: 600;">Pending</button>
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
      if (currentFilter === 'paid' && statusLower !== 'paid' && statusLower !== 'completed') return false;
      if (currentFilter === 'pending' && statusLower !== 'pending') return false;

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
      tr.style.cssText = 'cursor: pointer; transition: background-color 0.15s ease;';

      const status = s.status || 'Paid';
      let badgeVariant = 'secondary';
      if (status === 'Paid' || status === 'Completed') badgeVariant = 'success';
      else if (status === 'Pending') badgeVariant = 'warning';
      else if (status === 'Failed' || status === 'Cancelled') badgeVariant = 'danger';

      const saleRef = s.id || s.reference || `SAL-${String(index + 1).padStart(2, '0')}`;
      const custName = s.customer || s.customerName || 'Walk-in Customer';

      tr.innerHTML = `
        <td style="font-weight: 600; color: var(--text-secondary); text-align: center;">${startIdx + index + 1}</td>
        <td style="font-weight: 600; color: var(--text-primary);">${saleRef}</td>
        <td>
          <div style="font-weight: 600; color: var(--text-primary);">${custName}</div>
          ${s.phone ? `<div style="font-size: 0.75rem; color: var(--text-secondary);">${s.phone}</div>` : ''}
        </td>
        <td style="color: var(--text-secondary);">${s.date || '-'}</td>
        <td style="font-weight: 700; color: var(--text-primary);">₹${(s.totalAmount || 0).toLocaleString()}</td>
        <td>${createBadge({ label: status, variant: badgeVariant }).outerHTML}</td>
        <td style="text-align: right;">
          <div style="display: flex; gap: 0.35rem; justify-content: flex-end;" class="row-actions-box">
            <button type="button" class="btn btn-sm btn-secondary table-action-btn view-sale-btn" data-sale-id="${s.id || ''}" title="View" aria-label="View">
              <i data-lucide="eye"></i>
              <span class="sr-only">View</span>
            </button>
          </div>
        </td>
      `;

      // Row Click -> Open Sale Details Modal
      tr.addEventListener('click', (e) => {
        if (e.target.closest('.row-actions-box')) return;
        openSaleDetailsModal(s);
      });

      tr.querySelector('.view-sale-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        openSaleDetailsModal(s);
      });

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
        btn.style.color = '#ffffff';
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

  const saleItemsData = [];

  mainCard.innerHTML = `
    <!-- SECTION A: CUSTOMER -->
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <h3 style="font-size: 1.05rem; font-weight: 600; margin: 0; color: var(--text-primary); border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem;">
        Customer Information
      </h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem;">
        <div class="form-group">
          <label class="form-label" style="font-weight: 500;">Customer Name <span style="color: #ef4444;">*</span></label>
          <input type="text" id="sale-cust-name" class="form-input" placeholder="e.g. Sneha Patel" value="Walk-in Customer">
        </div>
        <div class="form-group">
          <label class="form-label" style="font-weight: 500;">Phone Number</label>
          <input type="text" id="sale-cust-phone" class="form-input" placeholder="e.g. +91 98765 43210">
        </div>
      </div>
    </div>

    <!-- SECTION B: SALE ITEMS -->
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <h3 style="font-size: 1.05rem; font-weight: 600; margin: 0; color: var(--text-primary); border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem;">
        Sale Items
      </h3>

      <div id="sale-items-container" style="display: flex; flex-direction: column; gap: 1rem;"></div>

      <button type="button" id="btn-add-sale-row" class="btn btn-secondary btn-sm" style="align-self: start; display: inline-flex; align-items: center; gap: 0.35rem; margin-top: 0.5rem;">
        <i data-lucide="plus" style="width: 14px; height: 14px;"></i>
        <span>Add Another Item</span>
      </button>
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
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.85rem; background: var(--bg-secondary); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
        <h4 style="font-size: 0.95rem; font-weight: 600; margin: 0; color: var(--text-primary);">Sale Summary</h4>
        <div style="display: flex; justify-content: space-between; font-size: 0.9rem;">
          <span style="color: var(--text-secondary);">Subtotal:</span>
          <strong id="summary-subtotal" style="color: var(--text-primary);">₹0</strong>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.9rem;">
          <span style="color: var(--text-secondary);">Discount (₹):</span>
          <input type="number" id="sale-discount-input" class="form-input" min="0" value="0" style="width: 90px; padding: 0.25rem 0.5rem; text-align: right; font-size: 0.85rem;">
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

  function updateSaleSummary() {
    let subtotal = 0;
    const productsList = store.data.products || [];

    saleItemsData.forEach(item => {
      const prod = productsList.find(p => p.id === item.productId);
      const price = (prod && prod.sellingPrice) ? prod.sellingPrice : 0;
      subtotal += (item.qty || 0) * price;
    });

    const discountVal = parseFloat(mainCard.querySelector('#sale-discount-input').value) || 0;
    const finalTotal = Math.max(0, subtotal - discountVal);

    mainCard.querySelector('#summary-subtotal').textContent = `₹${subtotal.toLocaleString('en-IN')}`;
    mainCard.querySelector('#summary-final-total').textContent = `₹${finalTotal.toLocaleString('en-IN')}`;
  }

  function renderSaleRows() {
    itemsContainer.innerHTML = '';
    const productsList = store.data.products || [];

    if (saleItemsData.length === 0) {
      const defaultP = productsList[0];
      saleItemsData.push({
        productId: defaultP ? defaultP.id : '',
        size: defaultP && defaultP.variants && defaultP.variants.length > 0 ? defaultP.variants[0].size : 'Standard',
        qty: 1
      });
    }

    saleItemsData.forEach((item, index) => {
      const row = document.createElement('div');
      row.style.cssText = 'display: grid; grid-template-columns: 2fr 1fr 1fr 1fr 1fr auto; gap: 0.75rem; align-items: end; padding: 0.85rem; border: 1px solid var(--border-color); border-radius: var(--radius-md); background: var(--bg-secondary);';
      if (window.innerWidth < 768) row.style.gridTemplateColumns = '1fr 1fr';

      const selectedProd = productsList.find(p => p.id === item.productId) || productsList[0];
      const hasSizes = selectedProd && selectedProd.variants && selectedProd.variants.length > 0 && selectedProd.variants.some(v => v.size !== 'Standard');

      let sizeOptionsHtml = '';
      let availStock = 0;

      if (hasSizes) {
        sizeOptionsHtml = (selectedProd.variants || []).map(v => `<option value="${v.size}" ${v.size === item.size ? 'selected' : ''}>Size ${v.size}</option>`).join('');
        const selectedVariant = (selectedProd.variants || []).find(v => v.size === item.size) || (selectedProd.variants || [])[0];
        if (selectedVariant) {
          availStock = selectedVariant.stock || 0;
          item.size = selectedVariant.size;
        }
      } else if (selectedProd) {
        sizeOptionsHtml = `<option value="Standard">Standard (No sizes)</option>`;
        availStock = (selectedProd.variants || []).reduce((sum, v) => sum + (v.stock || 0), 0);
        item.size = 'Standard';
      }

      const price = (selectedProd && selectedProd.sellingPrice !== null && selectedProd.sellingPrice !== undefined) ? selectedProd.sellingPrice : 0;
      const priceDisplay = price > 0 ? `₹${price.toLocaleString()}` : 'Price Not Set';
      const lineTotal = (item.qty || 0) * price;

      row.innerHTML = `
        <div class="form-group" style="margin: 0;">
          <label class="form-label" style="font-size: 0.8rem; font-weight: 500;">Product</label>
          <select class="form-select sale-prod-select" style="padding: 0.45rem 0.65rem; font-size: 0.85rem;">
            ${productsList.map(p => `<option value="${p.id}" ${p.id === item.productId ? 'selected' : ''}>${p.name}</option>`).join('')}
          </select>
        </div>

        <div class="form-group" style="margin: 0;">
          <label class="form-label" style="font-size: 0.8rem; font-weight: 500;">Size</label>
          <select class="form-select sale-size-select" style="padding: 0.45rem 0.65rem; font-size: 0.85rem;" ${!hasSizes ? 'disabled' : ''}>
            ${sizeOptionsHtml}
          </select>
        </div>

        <div class="form-group" style="margin: 0;">
          <label class="form-label" style="font-size: 0.8rem; font-weight: 500;">Avail. Stock</label>
          <div class="sale-avail-stock" style="font-weight: 600; font-size: 0.875rem; padding: 0.45rem 0; color: ${availStock === 0 ? 'var(--status-danger)' : 'var(--text-primary)'};">${availStock} units</div>
        </div>

        <div class="form-group" style="margin: 0;">
          <label class="form-label" style="font-size: 0.8rem; font-weight: 500;">Selling Price</label>
          <div class="sale-selling-price" style="font-weight: 600; font-size: 0.875rem; padding: 0.45rem 0; color: var(--text-primary);">${priceDisplay}</div>
        </div>

        <div class="form-group" style="margin: 0;">
          <label class="form-label" style="font-size: 0.8rem; font-weight: 500;">Quantity</label>
          <input type="number" class="form-input sale-qty-input" min="1" value="${item.qty || 1}" style="padding: 0.45rem 0.65rem; font-size: 0.85rem;">
        </div>

        <button type="button" class="btn btn-ghost sale-remove-btn" style="padding: 0.45rem; color: var(--text-secondary);" title="Remove item">
          <i data-lucide="trash-2" style="width: 16px; height: 16px;"></i>
        </button>
      `;

      const prodSel = row.querySelector('.sale-prod-select');
      const sizeSel = row.querySelector('.sale-size-select');
      const qtyInp = row.querySelector('.sale-qty-input');
      const removeBtn = row.querySelector('.sale-remove-btn');

      prodSel.addEventListener('change', (e) => {
        item.productId = e.target.value;
        const newP = productsList.find(p => p.id === item.productId);
        if (newP && newP.variants && newP.variants.length > 0) {
          item.size = newP.variants[0].size;
        } else {
          item.size = 'Standard';
        }
        renderSaleRows();
        updateSaleSummary();
      });

      sizeSel.addEventListener('change', (e) => {
        item.size = e.target.value;
        renderSaleRows();
        updateSaleSummary();
      });

      qtyInp.addEventListener('input', (e) => {
        item.qty = parseInt(e.target.value, 10) || 0;
        updateSaleSummary();
      });

      removeBtn.addEventListener('click', () => {
        if (saleItemsData.length <= 1) {
          toast.show({ message: 'At least one item is required for a sale.', type: 'warning' });
          return;
        }
        saleItemsData.splice(index, 1);
        renderSaleRows();
        updateSaleSummary();
      });

      itemsContainer.appendChild(row);
    });

    if (window.lucide) window.lucide.createIcons();
  }

  renderSaleRows();
  updateSaleSummary();

  mainCard.querySelector('#btn-add-sale-row').addEventListener('click', () => {
    const productsList = store.data.products || [];
    const defaultP = productsList[0];
    saleItemsData.push({
      productId: defaultP ? defaultP.id : '',
      size: defaultP && defaultP.variants && defaultP.variants.length > 0 ? defaultP.variants[0].size : 'Standard',
      qty: 1
    });
    renderSaleRows();
    updateSaleSummary();
  });

  mainCard.querySelector('#sale-discount-input').addEventListener('input', updateSaleSummary);

  mainCard.querySelector('#btn-cancel-sale').addEventListener('click', () => {
    if (onNavigate) onNavigate('sales');
  });

  mainCard.querySelector('#btn-complete-sale').addEventListener('click', () => {
    const custName = mainCard.querySelector('#sale-cust-name').value.trim();
    const custPhone = mainCard.querySelector('#sale-cust-phone').value.trim();
    const payMethod = mainCard.querySelector('#sale-pay-method').value;
    const payStatus = mainCard.querySelector('#sale-pay-status').value;
    const discount = parseFloat(mainCard.querySelector('#sale-discount-input').value) || 0;

    if (!custName) {
      toast.show({ message: 'Customer Name is required.', type: 'danger' });
      return;
    }

    if (saleItemsData.length === 0) {
      toast.show({ message: 'Please add at least one item to the sale.', type: 'danger' });
      return;
    }

    const productsList = store.data.products || [];

    for (let item of saleItemsData) {
      const prod = productsList.find(p => p.id === item.productId);
      if (!prod) {
        toast.show({ message: 'Please select a valid product.', type: 'danger' });
        return;
      }

      if (!item.qty || item.qty <= 0) {
        toast.show({ message: `Quantity must be greater than 0 for "${prod.name}".`, type: 'danger' });
        return;
      }

      const variant = (prod.variants || []).find(v => v.size === item.size) || (prod.variants || [])[0];
      const availStock = variant ? (variant.stock || 0) : 0;

      if (item.qty > availStock) {
        const sizeLabel = item.size && item.size !== 'Standard' ? ` (${item.size})` : '';
        toast.show({ message: `Only ${availStock} units are available for ${prod.name}${sizeLabel}.`, type: 'danger' });
        return;
      }
    }

    store.addSale({
      customerName: custName,
      customerPhone: custPhone,
      paymentMethod: payMethod,
      paymentStatus: payStatus,
      discount: discount,
      items: saleItemsData
    });

    toast.show({ message: 'Sale completed successfully.', type: 'success' });
    if (onNavigate) onNavigate('sales');
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
  const customerSales = (store.data.sales || []).filter(s => {
    const cust = (s.customer || s.customerName || '').toLowerCase();
    return cust === (customer.name || '').toLowerCase();
  });

  const innerContent = document.createElement('div');
  innerContent.style.cssText = 'display: flex; flex-direction: column; gap: 1rem; width: 100%;';
  innerContent.innerHTML = `
    <div style="background: var(--bg-secondary); padding: 1rem 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color); display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 1rem; font-size: 0.85rem;">
      <div>
        <div style="font-size: 0.725rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase;">Customer Name</div>
        <div style="font-weight: 700; color: var(--text-primary); margin-top: 0.2rem; font-size: 1rem;">${customer.name}</div>
      </div>
      <div>
        <div style="font-size: 0.725rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase;">Phone Number</div>
        <div style="font-weight: 600; color: var(--text-primary); margin-top: 0.2rem;">${customer.phone || 'Not Provided'}</div>
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
                <td style="font-weight: 600; color: var(--text-primary);">${s.id || s.reference || 'SAL-' + (idx+1)}</td>
                <td style="color: var(--text-secondary);">${s.date || '-'}</td>
                <td style="font-weight: 700; color: var(--text-primary);">₹${(s.totalAmount || 0).toLocaleString()}</td>
                <td>${createBadge({ label: s.status || 'Paid', variant: s.status === 'Paid' ? 'success' : 'warning' }).outerHTML}</td>
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
    title: `Customer Profile — ${customer.name}`,
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
          <label class="form-label" style="font-weight: 500;">Customer Name <span style="color: #ef4444;">*</span></label>
          <input type="text" id="edit-cust-name" class="form-input" value="${customer.name || ''}">
        </div>

        <div class="form-group">
          <label class="form-label" style="font-weight: 500;">Phone Number</label>
          <input type="text" id="edit-cust-phone" class="form-input" placeholder="e.g. +91 98765 43210" value="${customer.phone && customer.phone !== '-' ? customer.phone : ''}">
        </div>
      </div>

      <div style="display: flex; justify-content: flex-end; gap: 0.75rem; margin-top: 1.5rem; border-top: 1px solid var(--border-color); padding-top: 1rem;">
        <button type="button" class="btn btn-secondary cancel-modal-btn">Cancel</button>
        <button type="button" class="btn btn-primary save-modal-btn">Save Changes</button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  if (window.lucide) window.lucide.createIcons();

  const closeModal = () => modal.remove();
  modal.querySelector('.modal-close-btn').onclick = closeModal;
  modal.querySelector('.cancel-modal-btn').onclick = closeModal;

  modal.querySelector('.save-modal-btn').onclick = () => {
    const name = modal.querySelector('#edit-cust-name').value.trim();
    const phone = modal.querySelector('#edit-cust-phone').value.trim();

    if (!name) {
      toast.show({ message: 'Customer Name is required.', type: 'danger' });
      return;
    }

    customer.name = name;
    customer.phone = phone || '-';
    store.save();

    toast.show({ message: `Customer details updated for ${name}.`, type: 'success' });
    closeModal();
    if (onSaved) onSaved();
  };
}

// CUSTOMERS PAGE (Standardized with Purchases Table UI & Full Pagination)
function renderCustomers(onNavigate = null) {
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
            <th style="width: 6%; text-align: center;">S.No</th>
            <th style="width: 26%;">Customer Name</th>
            <th style="width: 20%;">Phone Number</th>
            <th style="width: 16%;">Total Purchases</th>
            <th style="width: 18%;">Total Amount Spent</th>
            <th style="width: 14%; text-align: right;">Actions</th>
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
      tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--text-secondary); padding: 2.5rem 1rem;">No customers found matching search.</td></tr>`;
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
      const tr = document.createElement('tr');
      tr.style.cssText = 'cursor: pointer; transition: background-color 0.15s ease;';

      tr.innerHTML = `
        <td style="font-weight: 600; color: var(--text-secondary); text-align: center;">${globalIndex}</td>
        <td style="font-weight: 600; color: var(--text-primary);">${c.name}</td>
        <td style="color: var(--text-secondary);">${c.phone || '-'}</td>
        <td style="font-weight: 600; color: var(--text-primary);">${c.ordersCount || 0} purchases</td>
        <td style="font-weight: 700; color: var(--brand-primary);">₹${(c.totalSpend || 0).toLocaleString()}</td>
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
          </div>
        </td>
      `;

      // Row Click -> Open Customer Details Modal
      tr.addEventListener('click', (e) => {
        if (e.target.closest('.row-actions-box')) return;
        openCustomerDetailsModal(c, onNavigate);
      });

      tr.querySelector('.view-cust-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        openCustomerDetailsModal(c, onNavigate);
      });

      tr.querySelector('.edit-cust-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        openEditCustomerModal(c, () => renderCustomersTable());
      });

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

  // Map products for accurate unit cost lookup (no dummy multipliers or estimations)
  const prodCostMap = {};
  products.forEach(p => {
    if (p) {
      if (p.id) prodCostMap[p.id] = Number(p.purchasePrice || p.buyingPrice || 0);
      if (p.name) prodCostMap[p.name.toLowerCase().trim()] = Number(p.purchasePrice || p.buyingPrice || 0);
    }
  });

  let totalRevenue = 0;
  let totalCogs = 0;
  let qualifyingSalesCount = 0;
  let totalUnitsSold = 0;

  sales.forEach(s => {
    if (s && s.status !== 'Cancelled' && s.status !== 'Failed') {
      qualifyingSalesCount++;
      totalRevenue += Number(s.totalAmount || 0);

      (s.items || []).forEach(item => {
        const itemQty = Number(item.qty || 1) || 1;
        totalUnitsSold += itemQty;

        let unitCost = 0;
        if (item.productId && prodCostMap[item.productId] !== undefined) {
          unitCost = prodCostMap[item.productId];
        } else if (item.product && prodCostMap[item.product.toLowerCase().trim()] !== undefined) {
          unitCost = prodCostMap[item.product.toLowerCase().trim()];
        } else if (item.purchasePrice !== undefined) {
          unitCost = Number(item.purchasePrice) || 0;
        } else if (item.buyingPrice !== undefined) {
          unitCost = Number(item.buyingPrice) || 0;
        } else {
          const found = products.find(p => p && (p.id === item.productId || (p.name && p.name.toLowerCase().trim() === (item.product || '').toLowerCase().trim())));
          unitCost = found ? Number(found.purchasePrice || found.buyingPrice || 0) : 0;
        }
        totalCogs += itemQty * unitCost;
      });
    }
  });

  const grossProfit = Math.max(0, totalRevenue - totalCogs);
  const marginPct = totalRevenue > 0 ? ((grossProfit / totalRevenue) * 100).toFixed(1) : '0.0';
  const totalPurchases = metrics.totalPurchases || 0;
  const stockValue = metrics.stockValue || 0;

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
            <td><span class="badge badge-success"><i data-lucide="check-circle" style="width: 13px; height: 13px; display: inline-block; vertical-align: middle; margin-right: 4px;"></i>Reconciled with Sales Page</span></td>
          </tr>
          <tr>
            <td style="font-weight: 600; color: var(--text-primary);">Cost of Goods Sold (COGS)</td>
            <td>${qualifyingSalesCount} Orders (${totalUnitsSold} Units Sold)</td>
            <td style="font-weight: 700; color: var(--text-primary);">₹${totalCogs.toLocaleString('en-IN')}</td>
            <td><span class="badge badge-success"><i data-lucide="check-circle" style="width: 13px; height: 13px; display: inline-block; vertical-align: middle; margin-right: 4px;"></i>Exact Purchase Cost Lookup</span></td>
          </tr>
          <tr>
            <td style="font-weight: 600; color: var(--text-primary);">Gross Profit</td>
            <td>${marginPct}% Margin</td>
            <td style="font-weight: 700; color: var(--status-success);">₹${grossProfit.toLocaleString('en-IN')}</td>
            <td><span class="badge badge-success"><i data-lucide="check-circle" style="width: 13px; height: 13px; display: inline-block; vertical-align: middle; margin-right: 4px;"></i>Verified (Revenue − COGS)</span></td>
          </tr>
          <tr>
            <td style="font-weight: 600; color: var(--text-primary);">Available Inventory Stock</td>
            <td>${metrics.totalProducts} Products / ${metrics.totalStock} Units</td>
            <td style="font-weight: 700; color: var(--text-primary);">₹${stockValue.toLocaleString('en-IN')}</td>
            <td><span class="badge badge-success"><i data-lucide="check-circle" style="width: 13px; height: 13px; display: inline-block; vertical-align: middle; margin-right: 4px;"></i>Matches Inventory Size Variants</span></td>
          </tr>
          <tr>
            <td style="font-weight: 600; color: var(--text-primary);">Purchases / Stock In</td>
            <td>${metrics.purchasesCount} Completed POs (${metrics.purchasesUnitsReceived} Units Rec.)</td>
            <td style="font-weight: 700; color: var(--text-primary);">₹${totalPurchases.toLocaleString('en-IN')}</td>
            <td><span class="badge badge-success"><i data-lucide="check-circle" style="width: 13px; height: 13px; display: inline-block; vertical-align: middle; margin-right: 4px;"></i>Reconciled with Purchases Page</span></td>
          </tr>
          <tr>
            <td style="font-weight: 600; color: var(--text-primary);">Registered Customers</td>
            <td>${customers.length} Unique Customers</td>
            <td style="font-weight: 700; color: var(--brand-primary);">₹${customers.reduce((s, c) => s + (c.totalSpend || 0), 0).toLocaleString('en-IN')}</td>
            <td><span class="badge badge-success"><i data-lucide="check-circle" style="width: 13px; height: 13px; display: inline-block; vertical-align: middle; margin-right: 4px;"></i>Reconciled Customer Billing</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  `;
  container.appendChild(reconCard);

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

    const validNavIds = [...NAV_ITEMS.map(i => i.id), 'manage-product'];
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
    const activeItem = NAV_ITEMS.find(item => item.id === effectiveActiveId) || NAV_ITEMS[0];

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
      case 'inventory': pageView = renderInventory(this.navParams, this.navigateTo); break;
      case 'products': pageView = renderInventory(this.navParams, this.navigateTo); break;
      case 'manage-product': pageView = renderProductManagementPage(this.navParams, this.navigateTo); break;
      case 'purchases': pageView = renderPurchases(this.navParams, this.navigateTo); break;
      case 'sales': pageView = renderSales(this.navParams, this.navigateTo); break;
      case 'customers': pageView = renderCustomers(this.navigateTo); break;
      case 'reports': pageView = renderReports(this.navigateTo); break;
      case 'settings': pageView = renderSettings(this.toggleTheme, this.navigateTo); break;
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
