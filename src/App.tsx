import productos from "./data/productos.json";
import ProductCard from "./components/ProductCard";
import type { Producto } from "./types";
import "./App.css";

export default function App() {
  return (
    <main>
      <h1>Catálogo de Productos</h1>
      <section className="grid">
        {(productos as Producto[]).map((p) => (
          <ProductCard key={p.id} producto={p} />
        ))}
      </section>
    </main>
  );
}
