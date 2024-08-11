import React, { useState } from "react";

const Task21 = () => {
  const [employees] = useState([
    { name: "Sandhya", age: 30, salary: 50000, designation: "Developer" },
    { name: "Ricky", age: 25, salary: 55000, designation: "Designer" },
    { name: "Vinni", age: 35, salary: 60000, designation: "Manager" }
  ]);

  const [product, setProduct] = useState({
    name: "Laptop",
    price: 1000,
    category: "Electronics",
    inStock: true
  });

  const handleProductUpdate = () => {
    setProduct({
      ...product,
      price: 1200,
      inStock: false
    });
  };

  return (
    <div>
      <h1>Employee Data</h1>
      {employees.map((employee, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <p>Name: {employee.name}</p>
          <p>Age: {employee.age}</p>
          <p>Salary: ${employee.salary}</p>
          <p>Designation: {employee.designation}</p>
        </div>
      ))}

      <h1>Product Data</h1>
      <p>Name: {product.name}</p>
      <p>Price: {product.price}rs</p>
      <p>Category: {product.category}</p>
      <p>In Stock: {product.inStock ? "Yes" : "No"}</p>
      <button onClick={handleProductUpdate}>Update Product</button>
    </div>
  );
};

export default Task21;
