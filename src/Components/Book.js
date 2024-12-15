import React from "react";
import Swal from "sweetalert2";

const Book = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Appointment Booked!",
      text: "Thank you for scheduling your appointment. We'll see you soon!",
      icon: "success",
      confirmButtonText: "OK",
    });
    e.target.reset();
  };

  return (
    <div className="book-container">
      <h1>Book Your Appointment</h1>
      <p>Fill out the form to schedule your visit!</p>
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Enter your name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" placeholder="Enter your phone number" required />
        </div>

        <div className="form-group">
          <label htmlFor="date">Preferred Date:</label>
          <input type="date" id="date" required />
        </div>

        <div className="form-group">
          <label htmlFor="time">Preferred Time:</label>
          <input type="time" id="time" required />
        </div>

        <button type="submit" className="submit-btn">Book Appointment</button>
      </form>
    </div>
  );
};

export default Book;
