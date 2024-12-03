import React, { useState } from 'react';
import './styles.css';

interface InventoryItem {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  sku: string;
  lastUpdated: string;
  supplier: string;
  reorderPoint: number;
}

const Inventory: React.FC = () => {
  // Sample data with realistic products
  const initialData: InventoryItem[] = [
    { 
      id: 1, 
      name: "Coca-Cola 355ml", 
      category: "Beverages", 
      price: 1.99, 
      stock: 150, 
      sku: "BEV001", 
      lastUpdated: "2023-12-03",
      supplier: "Coca-Cola Co.",
      reorderPoint: 50
    },
    { 
      id: 2, 
      name: "Pepsi 355ml", 
      category: "Beverages", 
      price: 1.99, 
      stock: 120, 
      sku: "BEV002", 
      lastUpdated: "2023-12-03",
      supplier: "PepsiCo",
      reorderPoint: 40
    },
    { 
      id: 3, 
      name: "Lay's Classic Chips 180g", 
      category: "Snacks", 
      price: 3.99, 
      stock: 85, 
      sku: "SNK001", 
      lastUpdated: "2023-12-03",
      supplier: "PepsiCo",
      reorderPoint: 30
    },
    { 
      id: 4, 
      name: "Doritos Nacho Cheese 170g", 
      category: "Snacks", 
      price: 4.49, 
      stock: 95, 
      sku: "SNK002", 
      lastUpdated: "2023-12-03",
      supplier: "PepsiCo",
      reorderPoint: 35
    },
    { 
      id: 5, 
      name: "Whole Milk 1L", 
      category: "Dairy", 
      price: 4.99, 
      stock: 45, 
      sku: "DRY001", 
      lastUpdated: "2023-12-03",
      supplier: "Local Dairy Farms",
      reorderPoint: 20
    },
    { 
      id: 6, 
      name: "White Bread 600g", 
      category: "Bakery", 
      price: 2.99, 
      stock: 30, 
      sku: "BKY001", 
      lastUpdated: "2023-12-03",
      supplier: "Local Bakery",
      reorderPoint: 15
    },
    { 
      id: 7, 
      name: "Eggs 12pk", 
      category: "Dairy", 
      price: 5.99, 
      stock: 40, 
      sku: "DRY002", 
      lastUpdated: "2023-12-03",
      supplier: "Local Farms Co.",
      reorderPoint: 20
    },
    { 
      id: 8, 
      name: "Banana (per lb)", 
      category: "Produce", 
      price: 0.99, 
      stock: 200, 
      sku: "PRD001", 
      lastUpdated: "2023-12-03",
      supplier: "Global Produce Inc.",
      reorderPoint: 50
    },
    { 
      id: 9, 
      name: "Chicken Breast (per lb)", 
      category: "Meat", 
      price: 7.99, 
      stock: 50, 
      sku: "MT001", 
      lastUpdated: "2023-12-03",
      supplier: "Local Poultry Farm",
      reorderPoint: 20
    },
    { 
      id: 10, 
      name: "Ground Beef (per lb)", 
      category: "Meat", 
      price: 6.99, 
      stock: 45, 
      sku: "MT002", 
      lastUpdated: "2023-12-03",
      supplier: "Premium Meats Co.",
      reorderPoint: 15
    }
  ];

  const [inventory, setInventory] = useState<InventoryItem[]>(initialData);
  const [sortConfig, setSortConfig] = useState<{ key: keyof InventoryItem; direction: 'asc' | 'desc' } | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Get unique categories for filter dropdown
  const categories = ['all', ...new Set(inventory.map(item => item.category))];

  // Sorting function
  const sortData = (key: keyof InventoryItem) => {
    let direction: 'asc' | 'desc' = 'asc';
    
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    
    setSortConfig({ key, direction });
    
    const sortedData = [...inventory].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
      return 0;
    });
    
    setInventory(sortedData);
  };

  // Filter function
  const filteredInventory = inventory.filter(item => {
    const matchesSearch = 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.supplier.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Stock status function
  const getStockStatus = (item: InventoryItem) => {
    if (item.stock <= item.reorderPoint) {
      return <span className="stock-status low">Low Stock</span>;
    } else if (item.stock <= item.reorderPoint * 1.5) {
      return <span className="stock-status medium">Medium</span>;
    }
    return <span className="stock-status good">Good</span>;
  };

  return (
    <div className="inventory-screen">
      <div className="inventory-header">
        <h2>Inventory Management</h2>
        <div className="inventory-controls">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search by name, SKU, or supplier..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="category-filter">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>
          <button className="add-item-btn">+ Add New Item</button>
        </div>
      </div>

      <div className="inventory-table-container">
        <table className="inventory-table">
          <thead>
            <tr>
              <th onClick={() => sortData('id')}>#</th>
              <th onClick={() => sortData('name')}>Name</th>
              <th onClick={() => sortData('category')}>Category</th>
              <th onClick={() => sortData('price')}>Price</th>
              <th onClick={() => sortData('stock')}>Stock</th>
              <th>Status</th>
              <th onClick={() => sortData('sku')}>SKU</th>
              <th onClick={() => sortData('supplier')}>Supplier</th>
              <th onClick={() => sortData('reorderPoint')}>Reorder Point</th>
              <th onClick={() => sortData('lastUpdated')}>Last Updated</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredInventory.map(item => (
              <tr key={item.id} className={item.stock <= item.reorderPoint ? 'low-stock' : ''}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>{item.stock}</td>
                <td>{getStockStatus(item)}</td>
                <td>{item.sku}</td>
                <td>{item.supplier}</td>
                <td>{item.reorderPoint}</td>
                <td>{item.lastUpdated}</td>
                <td>
                  <div className="action-buttons">
                    <button className="edit-btn">Edit</button>
                    <button className="delete-btn">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="inventory-footer">
        <div className="inventory-summary">
          <span>Total Items: {filteredInventory.length}</span>
          <span>Total Stock: {filteredInventory.reduce((sum, item) => sum + item.stock, 0)} units</span>
          <span>Categories: {categories.length - 1}</span>
          <span>Low Stock Items: {filteredInventory.filter(item => item.stock <= item.reorderPoint).length}</span>
        </div>
      </div>
    </div>
  );
};

export default Inventory; 