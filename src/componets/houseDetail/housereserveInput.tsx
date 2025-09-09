"use client";

import { useForm } from "@tanstack/react-form";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useState } from "react";

interface ReservationValues {
  name: string;
  email: string;
  phone: string;
  startDate: Date;
  endDate: Date;
}

export default function ReservationForm() {
  const form = useForm<ReservationValues , any , any , any , any , any , any , any , any , any , any , any>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      startDate: new Date(),
      endDate: new Date(),
    },
    onSubmit: (values) => {
      console.log("Reservation info:", values);
      alert("Reservation submitted! Check console.");
    },
  });

  const [range, setRange] = useState([
    {
      startDate: form.getFieldValue("startDate"),
      endDate: form.getFieldValue("endDate"),
      key: "selection",
    },
  ]);

  const handleDateChange = (item: any) => {
    setRange([item.selection]);
    form.setFieldValue("startDate", item.selection.startDate);
    form.setFieldValue("endDate", item.selection.endDate);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
      className="space-y-6 max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg"
    >
      <h2 className="text-2xl font-bold text-center mb-4">Reservation Form</h2>

      {/* User Info */}
      <div className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            type="text"
            value={form.getFieldValue("name")}
            onChange={(e) => form.setFieldValue("name", e.target.value)}
            className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            value={form.getFieldValue("email")}
            onChange={(e) => form.setFieldValue("email", e.target.value)}
            className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Phone</label>
          <input
            type="tel"
            value={form.getFieldValue("phone")}
            onChange={(e) => form.setFieldValue("phone", e.target.value)}
            className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
      </div>

      {/* Date Picker */}
      <div>
        <label className="block font-medium mb-2">Travel Dates</label>
        <DateRange
          ranges={range}
          onChange={handleDateChange}
          editableDateInputs
          moveRangeOnFirstSelection={false}
          rangeColors={["#3b82f6"]}
        />
        <p className="mt-2 text-gray-600">
          Selected:{" "}
          <strong>
            {form.getFieldValue("startDate").toLocaleDateString()} -{" "}
            {form.getFieldValue("endDate").toLocaleDateString()}
          </strong>
        </p>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        Reserve Now
      </button>
    </form>
  );
}
