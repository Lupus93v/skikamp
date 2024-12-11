import React, { useState } from "react";

export default function ApplyForm() {
  const [formData, setFormData] = useState({
    departure: "",
    city: "",
    name: "",
    age: "",
    height: "",
    weight: "",
    shoesnumber: "",
    foodspecifics: "",
    otherspecifics: "",
    phone: "",
    phone2: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/.netlify/functions/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Application submitted successfully!");
      } else {
        alert("Failed to submit application. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="apply-form">
      <h2>Пријава за ски камп</h2>
      <form onSubmit={handleSubmit}>
        <select
          name="departure"
          value={formData.departure}
          onChange={handleChange}
          required
        >
          <option value="">Изаберите термин</option>
          <option value="Term1">3. јануар - 5. јануар</option>
          <option value="Term2">11. јануар - 13. јануар</option>
          <option value="Term3">14. јануар - 16.јануар</option>
        </select>
        <input
          type="text"
          name="city"
          placeholder="Град поласка"
          value={formData.city}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Име и презиме"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="age"
          placeholder="Датум рођења"
          value={formData.age}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="height"
          placeholder="Висина у цм"
          value={formData.height}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="weight"
          placeholder="Тежина у килограмима"
          value={formData.weight}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="shoesnumber"
          placeholder="Број ципела"
          value={formData.shoesnumber}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="foodspecifics"
          placeholder="Специфичност исхране"
          value={formData.foodspecifics}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="otherspecifics"
          placeholder="Остале специфичности"
          value={formData.otherspecifics}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Број телефона родитеља"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone2"
          placeholder="Број телефона дјетета"
          value={formData.phone2}
          onChange={handleChange}
        />
        <button type="submit">Пошаљи податке!</button>
      </form>
    </div>
  );
}
