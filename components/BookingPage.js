import React, { useState } from 'react';
import "../styles/BookingPage.css";
import carData from '../data/carData';
import FilterCheckboxGroup from './FilterCheckboxGroup';
import CustomAppBar from '../components/CustomAppBar';

const BookingPage = () => {
  const [filters, setFilters] = useState({
    distance: 60,
    priceRange: [0, 1000],
    carType: [],
    transmission: [],
    fuelType: [],
    seats: [],
    minRating: 0,
    modelYear: 2000,
    offers: [],
    addOns: [],
    deliveryType: false,
  });

  const filteredCars = carData.filter(car => {
    const carPrice = parseInt(car.price.replace(/[^\d]/g, ''));
    const carDistance = parseFloat(car.distance.replace(/[^\d.]/g, ''));
    const carRating = parseFloat(car.rating.split(' ')[0]);
    const carSeats = parseInt(car.seats);

    const isSeatsMatch = filters.seats.length === 0 || filters.seats.some(seatRange => {
      const [min, max] = seatRange.split('/').map(Number);
      return carSeats >= min && carSeats <= max;
    });

    return (
      carDistance <= filters.distance &&
      carPrice >= filters.priceRange[0] && carPrice <= filters.priceRange[1] &&
      (filters.carType.length === 0 || filters.carType.includes(car.type)) &&
      (filters.transmission.length === 0 || filters.transmission.includes(car.transmission)) &&
      (filters.fuelType.length === 0 || filters.fuelType.includes(car.fuelType)) &&
      isSeatsMatch &&
      carRating >= filters.minRating &&
      car.modelYear >= filters.modelYear &&
      (filters.offers.length === 0 || (car.offers && car.offers.some(offer => filters.offers.includes(offer)))) &&
      (filters.addOns.length === 0 || (car.addOns && car.addOns.some(addOn => filters.addOns.includes(addOn)))) &&
      (!filters.deliveryType || car.deliveryType === filters.deliveryType)
    );
  });

  const handleFilterChange = e => {
    const { name, value, type, checked } = e.target;
    setFilters(prev => {
      if (type === 'checkbox') {
        return { ...prev, [name]: checked ? [...(prev[name] || []), value] : (prev[name] || []).filter(v => v !== value) };
      }
      if (type === 'range' || type === 'number') return { ...prev, [name]: Number(value) };
      if (name === 'deliveryType') return { ...prev, deliveryType: !prev.deliveryType };
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className="booking-page">
      <CustomAppBar />

      <div className="booking-content">
        <aside className="sidebar">
          <h2>Find Your Perfect Ride!</h2>
          
          {[
            { label: "Distance (km)", type: "range", name: "distance", min: 0, max: 100 },
            { label: "Model Year", type: "range", name: "modelYear", min: 2000, max: 2024 },
          ].map(({ label, type, name, min, max }) => (
            <div key={name} className="filter-section">
              <label>{label}</label>
              <input
                type={type}
                name={name}
                min={min}
                max={max}
                value={filters[name]}
                onChange={handleFilterChange}
              />
              <span>{filters[name]}</span>
            </div>
          ))}

          {[
            { name: "carType", options: ["SUV", "Sedan", "Hatchback", "Luxury"] },
            { name: "transmission", options: ["Manual", "Automatic"] },
            { name: "fuelType", options: ["Diesel", "Petrol", "Electric"] },
            { name: "seats", options: ["4/5", "6/7"] },
            { name: "offers", options: ["10% off", "20% off"] },
            { name: "addOns", options: ["FASTag", "Zoom Plus"] },
          ].map(({ name, options }) => (
            <FilterCheckboxGroup
              key={name}
              name={name}
              options={options}
              selectedOptions={filters[name]}
              onChange={handleFilterChange}
            />
          ))}
        </aside>

        <div className="main-content">
          <header>
            <h2>Showing {filteredCars.length} cars</h2>
          </header>

          <div className="cars-list">
            {filteredCars.length === 0 ? (
              <p>No cars available</p>
            ) : (
              filteredCars.map(car => (
                <div key={car.id} className="car-card">
                  <img src={car.image} alt={car.name} />
                  <h3>{car.name}</h3>
                  <p>Price: {car.price}</p>
                  <p>Distance: {car.distance}</p>
                  <p>Rating: {car.rating}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;