import React from "react";

const cards = [
  { label: "Customers", value: "3,781" },
  { label: "Orders", value: "1,219" },
  { label: "Revenue", value: "$695" },
  { label: "Growth", value: "30.1%" },
];

const DashboardCards = () => (
  <div style={{ display: "flex", gap: "20px", marginBottom: "32px" }}>
    {cards.map((card) => (
      <div
        key={card.label}
        style={{
          background: "#222",
          color: "#fff",
          padding: "24px 32px",
          borderRadius: "8px",
          minWidth: "150px",
        }}
      >
        <div style={{ fontSize: "1.2rem", marginBottom: "8px" }}>{card.label}</div>
        <div style={{ fontSize: "2.2rem", fontWeight: "bold" }}>{card.value}</div>
      </div>
    ))}
  </div>
);

export default DashboardCards;