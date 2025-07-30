import React from "react";
import imgProfile from "../assets/img/profile.jpg";

const ProfileCardMobile = () => {
  return (
    <div
      style={{
        position: "relative",
        background: "#001219",
        borderRadius: "20px",
        padding: "24px 20px",
        width: "90%",
        border: "1px solid rgba(255,255,255,0.15)",
        boxShadow: "0 0 20px rgba(255,255,255,0.08)",
        color: "#fff",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Border tipis glowing */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "20px",
          padding: "2px",
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.25), rgba(255,255,255,0))",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          pointerEvents: "none",
        }}
      />

      {/* Foto */}
      <img
        src={imgProfile}
        alt="Profile"
        style={{
          width: "110px",
          height: "110px",
          borderRadius: "12px",
          objectFit: "cover",
          marginBottom: "15px",
          border: "2px solid rgba(255,255,255,0.2)",
        }}
      />

      {/* Nama */}
      <h4 style={{ fontWeight: "600", marginBottom: "4px" }}>
        Rheza Rifalsya Hermawan
      </h4>
      <p
        style={{
          fontSize: "0.95rem",
          color: "rgba(255,255,255,0.7)",
          marginBottom: "20px",
        }}
      >
        Web Developer
      </p>

      {/* Bagian bawah */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "rgba(255,255,255,0.05)",
          padding: "8px 12px",
          borderRadius: "12px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <img
            src={imgProfile}
            alt="avatar"
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <div style={{ textAlign: "left" }}>
            <div style={{ fontSize: "0.8rem" }}>@imZaaa</div>
            <div style={{ fontSize: "0.7rem", color: "#4ade80" }}>Online</div>
          </div>
        </div>
        <button
          style={{
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.2)",
            color: "#fff",
            padding: "6px 14px",
            fontSize: "0.8rem",
            borderRadius: "8px",
            cursor: "pointer",
          }}
          onClick={() => (window.location.href = "#contact")}
        >
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default ProfileCardMobile;
