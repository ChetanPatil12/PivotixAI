export default function NotFound() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      <h1 style={{ fontSize: 48, fontWeight: 700, marginBottom: 8 }}>404</h1>
      <p style={{ color: "#666", marginBottom: 24 }}>Page not found.</p>
      <a href="/" style={{ color: "#c94a1f", fontWeight: 600 }}>← Back to home</a>
    </div>
  );
}
