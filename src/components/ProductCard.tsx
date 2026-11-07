import { useState } from "react";
import type { Producto } from "../types";

interface Props {
  producto: Producto;
}

export default function ProductCard({ producto }: Props) {
  const [agregado, setAgregado] = useState(false);
  const [mostrarResenas, setMostrarResenas] = useState(false);

  return (
    <article className="card">
      <img src={producto.imagen} alt={producto.nombre} width={200} height={200} />
      <h2>{producto.nombre}</h2>
      <p className="descripcion">{producto.descripcion}</p>
      <p className="precio">${producto.precio.toFixed(2)}</p>

      <div className="acciones">
        <button onClick={() => setAgregado(true)} disabled={agregado}>
          {agregado ? "Agregado ✅" : "Agregar al Carrito"}
        </button>
        <button className="secundario" onClick={() => setMostrarResenas(!mostrarResenas)}>
          {mostrarResenas ? "Ocultar reseñas" : `Ver reseñas (${producto.reseñas.length})`}
        </button>
      </div>

      {mostrarResenas && (
        <ul className="resenas">
          {producto.reseñas.length === 0 ? (
            <li className="vacio">Aún no hay reseñas.</li>
          ) : (
            producto.reseñas.map((r, i) => (
              <li key={i}>
                <strong>{r.usuario}</strong> <span className="fecha">{r.fecha}</span>
                <p>{r.texto}</p>
              </li>
            ))
          )}
        </ul>
      )}
    </article>
  );
}
