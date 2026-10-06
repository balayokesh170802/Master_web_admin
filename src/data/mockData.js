/**
 * Master Web Admin — Mock Store Data & Reactive Store Manager
 * Physical Clothing Store Internal Data Model
 */

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

  // Products Master List
  products: [
    {
      id: "PROD-101",
      name: "Classic Oxford Shirt",
      category: "Shirts",
      brand: "ClassicFit",
      description: "100% Cotton button-down Oxford shirt suitable for daily formal and casual wear.",
      purchasePrice: 650,
      sellingPrice: 1499,
      minStock: 12,
      supplier: "Apex Apparel Ltd",
      status: "Active",
      variants: [
        { sku: "OXF-BLK-S", color: "Black", size: "S", stock: 18, damaged: 1, daysInStock: 25 },
        { sku: "OXF-BLK-M", color: "Black", size: "M", stock: 4, damaged: 0, daysInStock: 40 },
        { sku: "OXF-BLK-L", color: "Black", size: "L", stock: 0, damaged: 2, daysInStock: 15 },
        { sku: "OXF-WHT-M", color: "White", size: "M", stock: 22, damaged: 0, daysInStock: 12 },
        { sku: "OXF-WHT-L", color: "White", size: "L", stock: 15, damaged: 1, daysInStock: 10 }
      ]
    },
    {
      id: "PROD-102",
      name: "Premium Cotton T-Shirt",
      category: "T-Shirts",
      brand: "UrbanWear",
      description: "220 GSM combed cotton crewneck t-shirt with pre-shrunk fabric.",
      purchasePrice: 280,
      sellingPrice: 699,
      minStock: 20,
      supplier: "SilkRoute Fabrics",
      status: "Active",
      variants: [
        { sku: "TSH-WHT-S", color: "White", size: "S", stock: 35, damaged: 0, daysInStock: 8 },
        { sku: "TSH-WHT-M", color: "White", size: "M", stock: 28, damaged: 1, daysInStock: 14 },
        { sku: "TSH-BLK-L", color: "Black", size: "L", stock: 2, damaged: 0, daysInStock: 95 }, // Slow moving
        { sku: "TSH-NAV-XL", color: "Navy", size: "XL", stock: 0, damaged: 0, daysInStock: 60 }
      ]
    },
    {
      id: "PROD-103",
      name: "Slim Fit Denim Jeans",
      category: "Jeans",
      brand: "DenimCo",
      description: "Stretch denim 5-pocket jeans with stone wash finish.",
      purchasePrice: 850,
      sellingPrice: 1999,
      minStock: 10,
      supplier: "Urban Thread Co",
      status: "Active",
      variants: [
        { sku: "JNS-NAV-M", color: "Navy", size: "M", stock: 14, damaged: 0, daysInStock: 18 },
        { sku: "JNS-NAV-L", color: "Navy", size: "L", stock: 8, damaged: 1, daysInStock: 22 },
        { sku: "JNS-BLK-M", color: "Black", size: "M", stock: 3, damaged: 0, daysInStock: 102 } // Slow moving
      ]
    },
    {
      id: "PROD-104",
      name: "Regular Fit Chino Trousers",
      category: "Trousers",
      brand: "ClassicFit",
      description: "Breathable cotton stretch trousers for everyday comfort.",
      purchasePrice: 600,
      sellingPrice: 1399,
      minStock: 15,
      supplier: "Apex Apparel Ltd",
      status: "Active",
      variants: [
        { sku: "TRS-BEI-M", color: "Beige", size: "M", stock: 25, damaged: 0, daysInStock: 16 },
        { sku: "TRS-BEI-L", color: "Beige", size: "L", stock: 19, damaged: 0, daysInStock: 19 },
        { sku: "TRS-NAV-S", color: "Navy", size: "S", stock: 5, damaged: 0, daysInStock: 34 }
      ]
    },
    {
      id: "PROD-105",
      name: "Essential Fleece Hoodie",
      category: "Hoodies",
      brand: "EssentialStudio",
      description: "Heavyweight fleece lined hoodie with kangaroo pocket.",
      purchasePrice: 750,
      sellingPrice: 1799,
      minStock: 8,
      supplier: "Urban Thread Co",
      status: "Active",
      variants: [
        { sku: "HD-OLV-L", color: "Olive", size: "L", stock: 12, damaged: 2, daysInStock: 110 }, // Slow moving
        { sku: "HD-BLK-M", color: "Black", size: "M", stock: 16, damaged: 0, daysInStock: 14 }
      ]
    }
  ],

  // Damaged Stock Registry
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

  // Stock Movement History Log
  stockMovements: [
    {
      id: "MOV-5001",
      date: "2026-10-06 10:30 AM",
      product: "Classic Oxford Shirt",
      sku: "OXF-WHT-M",
      type: "Sale",
      quantity: -2,
      reference: "BILL-2026-1004",
      user: "Staff - Priya"
    },
    {
      id: "MOV-5002",
      date: "2026-10-05 04:15 PM",
      product: "Classic Oxford Shirt",
      sku: "OXF-WHT-M",
      type: "Stock In",
      quantity: 20,
      reference: "PUR-2026-095",
      user: "Manager - Suresh"
    },
    {
      id: "MOV-5003",
      date: "2026-10-05 04:15 PM",
      product: "Classic Oxford Shirt",
      sku: "OXF-BLK-L",
      type: "Damage",
      quantity: 2,
      reference: "PUR-2026-095",
      user: "Manager - Suresh"
    },
    {
      id: "MOV-5004",
      date: "2026-10-04 02:40 PM",
      product: "Premium Cotton T-Shirt",
      sku: "TSH-WHT-S",
      type: "Sale",
      quantity: -3,
      reference: "BILL-2026-1002",
      user: "Staff - Priya"
    }
  ],

  // Purchases / Stock In Records
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
    }
  ],

  // Sales Records
  sales: [
    {
      id: "BILL-2026-1004",
      date: "2026-10-06 10:30 AM",
      customer: "Amit Verma",
      phone: "+91 98123 45678",
      itemCount: 2,
      totalAmount: 2998,
      paymentMethod: "UPI",
      status: "Completed",
      items: [
        { product: "Classic Oxford Shirt", sku: "OXF-WHT-M", qty: 2, price: 1499, discount: 0, amount: 2998 }
      ]
    },
    {
      id: "BILL-2026-1003",
      date: "2026-10-06 09:15 AM",
      customer: "Kavita Reddy",
      phone: "+91 97654 32109",
      itemCount: 1,
      totalAmount: 1999,
      paymentMethod: "Card",
      status: "Completed",
      items: [
        { product: "Slim Fit Denim Jeans", sku: "JNS-NAV-M", qty: 1, price: 1999, discount: 0, amount: 1999 }
      ]
    },
    {
      id: "BILL-2026-1002",
      date: "2026-10-05 05:45 PM",
      customer: "Rohan Gupta",
      phone: "+91 99887 76655",
      itemCount: 3,
      totalAmount: 2097,
      paymentMethod: "Cash",
      status: "Completed",
      items: [
        { product: "Premium Cotton T-Shirt", sku: "TSH-WHT-S", qty: 3, price: 699, discount: 0, amount: 2097 }
      ]
    },
    {
      id: "BILL-2026-1001",
      date: "2026-10-04 03:20 PM",
      customer: "Sneha Patel",
      phone: "+91 98765 11223",
      itemCount: 2,
      totalAmount: 3198,
      paymentMethod: "UPI",
      status: "Completed",
      items: [
        { product: "Regular Fit Chino Trousers", sku: "TRS-BEI-M", qty: 1, price: 1399, discount: 0, amount: 1399 },
        { product: "Essential Fleece Hoodie", sku: "HD-BLK-M", qty: 1, price: 1799, discount: 0, amount: 1799 }
      ]
    }
  ],

  // Customers
  customers: [
    { id: "CUST-01", name: "Amit Verma", phone: "+91 98123 45678", ordersCount: 4, lastPurchase: "2026-10-06", totalSpend: 8996 },
    { id: "CUST-02", name: "Kavita Reddy", phone: "+91 97654 32109", ordersCount: 2, lastPurchase: "2026-10-06", totalSpend: 4498 },
    { id: "CUST-03", name: "Rohan Gupta", phone: "+91 99887 76655", ordersCount: 3, lastPurchase: "2026-10-05", totalSpend: 5597 },
    { id: "CUST-04", name: "Sneha Patel", phone: "+91 98765 11223", ordersCount: 5, lastPurchase: "2026-10-04", totalSpend: 11495 }
  ],

  users: [
    { id: "USR-01", name: "Suresh Menon", role: "Store Owner / Admin", email: "suresh@apexfashion.com", status: "Active" },
    { id: "USR-02", name: "Priya Nair", role: "Billing Staff", email: "priya@apexfashion.com", status: "Active" }
  ]
};

// Simple State Store
class StoreManager {
  constructor() {
    this.data = JSON.parse(localStorage.getItem('master_web_admin_data')) || initialData;
    this.listeners = [];
  }

  save() {
    localStorage.setItem('master_web_admin_data', JSON.stringify(this.data));
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

  // Calculated Metrics
  getMetrics() {
    let totalProducts = this.data.products.length;
    let totalStock = 0;
    let damagedStockCount = 0;
    let stockValue = 0;
    let lowStockCount = 0;
    let outOfStockCount = 0;
    let slowMovingCount = 0;

    this.data.products.forEach(p => {
      p.variants.forEach(v => {
        totalStock += (v.stock || 0); // Sellable stock only
        damagedStockCount += (v.damaged || 0);
        stockValue += ((v.stock || 0) * (p.purchasePrice || 0));

        if (v.stock === 0) {
          outOfStockCount++;
        } else if (v.stock <= p.minStock) {
          lowStockCount++;
        }

        if ((v.daysInStock || 0) >= 90 && v.stock > 0) {
          slowMovingCount++;
        }
      });
    });

    // Today's Sales Calculation
    const todayStr = "2026-10-06";
    const todaySales = this.data.sales
      .filter(s => s.date.includes(todayStr))
      .reduce((sum, s) => sum + s.totalAmount, 0);

    return {
      todaySales,
      totalProducts,
      totalStock,
      lowStockCount,
      outOfStockCount,
      damagedStockCount,
      stockValue,
      slowMovingCount
    };
  }

  // Record a Stock In action
  addStockIn(purchasePayload) {
    // purchasePayload = { supplier, invoiceNumber, date, items: [{ productId, sku, received, good, damaged, price }] }
    let totalQty = 0;
    let totalAmount = 0;

    purchasePayload.items.forEach(item => {
      totalQty += item.received;
      totalAmount += (item.good * item.price);

      // Find product & variant
      const product = this.data.products.find(p => p.name === item.product || p.id === item.productId);
      if (product) {
        const variant = product.variants.find(v => v.sku === item.sku);
        if (variant) {
          // KEY BUSINESS RULE: Available stock increases ONLY for good quantity!
          variant.stock += item.good;
          variant.damaged += item.damaged;

          // Record movement for good quantity
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

          // Record damage if present
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

    const newPurchase = {
      id: `PUR-${Date.now().toString().slice(-4)}`,
      supplier: purchasePayload.supplier,
      invoiceNumber: purchasePayload.invoiceNumber,
      date: purchasePayload.date,
      productCount: purchasePayload.items.length,
      totalQuantity: totalQty,
      totalAmount: totalAmount,
      status: 'Completed',
      items: purchasePayload.items
    };

    this.data.purchases.unshift(newPurchase);
    this.save();
  }

  // Record a Sale Action
  addSale(salePayload) {
    // salePayload = { customerName, phone, paymentMethod, items: [{ sku, qty, price, discount }] }
    let totalAmt = 0;
    const saleItems = [];

    salePayload.items.forEach(item => {
      let finalAmt = (item.price * item.qty) - (item.discount || 0);
      totalAmt += finalAmt;

      // Find product & variant to deduct stock
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
    const newSale = {
      id: billNo,
      date: new Date().toLocaleString('en-US', { dateStyle: 'short', timeStyle: 'short' }),
      customer: salePayload.customerName || "Walk-in Customer",
      phone: salePayload.phone || "-",
      itemCount: salePayload.items.length,
      totalAmount: totalAmt,
      paymentMethod: salePayload.paymentMethod || 'UPI',
      status: 'Completed',
      items: saleItems
    };

    this.data.sales.unshift(newSale);

    // Update customer stats
    if (salePayload.customerName) {
      let cust = this.data.customers.find(c => c.name.toLowerCase() === salePayload.customerName.toLowerCase());
      if (cust) {
        cust.ordersCount += 1;
        cust.totalSpend += totalAmt;
        cust.lastPurchase = new Date().toISOString().split('T')[0];
      } else {
        this.data.customers.push({
          id: `CUST-${this.data.customers.length + 1}`,
          name: salePayload.customerName,
          phone: salePayload.phone || "-",
          ordersCount: 1,
          lastPurchase: new Date().toISOString().split('T')[0],
          totalSpend: totalAmt
        });
      }
    }

    this.save();
  }

  // Add Product
  addProduct(prod) {
    this.data.products.unshift(prod);
    this.save();
  }

  // Stock Adjustment
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

export const store = new StoreManager();
