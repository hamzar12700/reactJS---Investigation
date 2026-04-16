import React, { useState } from 'react'
import { Links } from 'react-router-dom';

const Cards = ({ addToCarts, setAddToCarts }) => {
    const foodItems = [
        { id: 1, name: "Biryani", category: "Rice", price: 250, city: "Karachi" },
        { id: 2, name: "Karahi", category: "Curry", price: 1200, city: "Lahore" },
        { id: 3, name: "Nihari", category: "Curry", price: 350, city: "Karachi" },
        { id: 4, name: "Haleem", category: "Curry", price: 200, city: "Hyderabad" },
        { id: 5, name: "Pulao", category: "Rice", price: 180, city: "Islamabad" },
        { id: 6, name: "Chapli Kabab", category: "BBQ", price: 300, city: "Peshawar" },
        { id: 7, name: "Seekh Kabab", category: "BBQ", price: 400, city: "Karachi" },
        { id: 8, name: "Chicken Tikka", category: "BBQ", price: 450, city: "Lahore" },
        { id: 9, name: "Malai Boti", category: "BBQ", price: 500, city: "Islamabad" },
        { id: 10, name: "Korma", category: "Curry", price: 350, city: "Karachi" },

        { id: 11, name: "Saag", category: "Vegetable", price: 150, city: "Punjab" },
        { id: 12, name: "Makki Roti", category: "Bread", price: 50, city: "Punjab" },
        { id: 13, name: "Daal Chawal", category: "Rice", price: 120, city: "Karachi" },
        { id: 14, name: "Chicken Handi", category: "Curry", price: 900, city: "Lahore" },
        { id: 15, name: "Beef Burger", category: "Fast Food", price: 500, city: "Karachi" },
        { id: 16, name: "Zinger Burger", category: "Fast Food", price: 550, city: "Lahore" },
        { id: 17, name: "Fries", category: "Fast Food", price: 200, city: "Islamabad" },
        { id: 18, name: "Samosa", category: "Snacks", price: 40, city: "Karachi" },
        { id: 19, name: "Pakora", category: "Snacks", price: 100, city: "Lahore" },
        { id: 20, name: "Chaat", category: "Snacks", price: 150, city: "Karachi" },

        { id: 21, name: "Gol Gappa", category: "Snacks", price: 120, city: "Lahore" },
        { id: 22, name: "Kheer", category: "Dessert", price: 180, city: "Karachi" },
        { id: 23, name: "Gulab Jamun", category: "Dessert", price: 200, city: "Multan" },
        { id: 24, name: "Jalebi", category: "Dessert", price: 150, city: "Lahore" },
        { id: 25, name: "Rabri", category: "Dessert", price: 250, city: "Hyderabad" },
        { id: 26, name: "Lassi", category: "Drink", price: 120, city: "Punjab" },
        { id: 27, name: "Rooh Afza", category: "Drink", price: 80, city: "Karachi" },
        { id: 28, name: "Green Tea", category: "Drink", price: 100, city: "Islamabad" },
        { id: 29, name: "Chai", category: "Drink", price: 80, city: "All Cities" },
        { id: 30, name: "Falooda", category: "Dessert", price: 220, city: "Karachi" }
    ];

    const [product, setProduct] = useState(
        foodItems.map(items => ({
            ...items,
            qty: 0,
        })))

    function Inc(id) {
        const updated = product.map(items => {
            return items.id === id ? { ...items, qty: items.qty + 1 } : items
        });
        setProduct(updated);
    }


    function Dec(id) {
        const updated = product.map((items) => {
            return items.id === id && items.qty > 0 ?
                { ...items, qty: items.qty - 1 } : items
        });
        setProduct(updated);
    }

    function buyNow(id) {

        const selectedItem = product.find(item => item.id === id)
        console.log(selectedItem);

        if (selectedItem.qty === 0 ) {
            alert("quantity to select kro pai zaaan")
        }

        const exist = addToCarts.find(item => item.id === selectedItem.id)

        if (exist) {
            const updated = addToCarts.map((item) => {
                return item.id === selectedItem.id ? { ...item, qty: item.qty + selectedItem.qty } : item
            })
            setAddToCarts(updated)
        } else {
            setAddToCarts([...addToCarts, selectedItem])
        }
    }

   return (
  <div className="min-h-screen bg-black text-white p-6">
    <h1 className="text-3xl font-bold mb-6 text-center border-b border-white pb-2">
      Food Menu
    </h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {product.map((items) => {
        return (
          <div
            key={items.id}
            className="bg-white text-black rounded-2xl p-5 shadow-lg hover:scale-105 transition"
          >
            <h1 className="text-xl font-bold mb-2">{items.name}</h1>
            <p className="text-sm">Category: {items.category}</p>
            <p className="text-sm">Price: Rs {items.price}</p>
            <p className="text-sm mb-4">City: {items.city}</p>

                  <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => Inc(items.id)}
                  className="bg-black text-white px-3 py-1 rounded-lg"
                >
                  +
                </button>

                <span className="font-bold text-lg">{items.qty}</span>

                <button
                  onClick={() => Dec(items.id)}
                  className="bg-black text-white px-3 py-1 rounded-lg"
                >
                  -
                </button>
              </div>

              <button
    onClick={() => buyNow(items.id)}
    className="w-full bg-black text-white py-3 rounded-xl text-lg font-semibold hover:opacity-90 transition"
    >
    Add to Cart
  </button>
      </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);
}

export default Cards