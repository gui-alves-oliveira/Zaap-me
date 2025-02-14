"use client";
import { useState } from "react";

const zaaps = [
  { x: -77, y: -73, name: "Vilarejo Soterrado" },
  { x: -78, y: -41, name: "Burgo" },
  { x: -46, y: 17, name: "Vilarejo Costeiro" },
  { x: -31, y: -56, name: "Coração Imaculado" },
  { x: -27, y: -36, name: "Campos de Caina" },
  { x: -34, y: -8, name: "Vilarejo dos Doples" },
  { x: -17, y: -47, name: "Planices Rochosas" },
  { x: -20, y: -20, name: "Estradas Rochosas" },
  { x: -25, y: 12, name: "Caminho das Caravanas" },
  { x: -26, y: 37, name: "A Couraça" },
  { x: -26, y: 37, name: "Feira do Trool" },
  { x: -13, y: -28, name: "Maciço de Cania" },
  { x: -16, y: 1, name: "Vilarejo dos Criadores" },
  { x: -15, y: 25, name: "?" },
  { x: 0, y: -56, name: "Vilarejo dos Kanigs" },
  { x: -3, y: -42, name: "Lago de Cania" },
  { x: 1, y: -32, name: "Tainela" },
  { x: -5, y: -23, name: "Planices dos Porkassos" },
  { x: -5, y: -8, name: "Montanha dos Smagadores" },
  { x: -2, y: 0, name: "Vilarejo de Amakna" },
  { x: -1, y: 13, name: "Limites da Floresta Maléfica" },
  { x: -1, y: 24, name: "Planices dos Scarafolhas" },
  { x: 5, y: -18, name: "Cidade de Astrub" },
  { x: 3, y: -5, name: "Castelo de Amakna" },
  { x: 5, y: 7, name: "Canto dos Papatudos" },
  { x: 15, y: -58, name: "Dunas das Ossadas" },
  { x: 15, y: -20, name: "?" },
  { x: 7, y: -4, name: "Posto de Madrestam" },
  { x: 10, y: 22, name: "Litoral Sufokiano" },
  { x: 13, y: 26, name: "Sufokia" },
  { x: 13, y: 35, name: "?" },
  { x: 20, y: -30, name: "Vilarejo de Pandala" },
  { x: 27, y: -14, name: "?" },
  { x: 25, y: -4, name: "Ilha da Cenouwa" },
  { x: 39, y: -82, name: "Floresta Nevada" },
  { x: 35, y: 12, name: "Praia da Tartaruga" },
];

export function ZaapFinder() {
  const [target, setTarget] = useState<{ x: number, y: number }>({ x: 0, y: 0 });
  const [nearestZap, setNearestZap] = useState<string | null>(null);

  function handleSearchNearByZap() {
    let nearestZaap = null;
    let minDistance = Infinity;

    if (!target) {
      return;
    }

    for (const zaap of zaaps) {
      const distance = Math.sqrt(
        Math.pow(zaap.x - target.x, 2) + Math.pow(zaap.y - target.y, 2)
      );

      if (distance < minDistance) {
        minDistance = distance;
        nearestZaap = zaap;
      }
    }

    if (!nearestZaap) {
      return null;
    }

    setNearestZap(nearestZaap.name);
  }

  function handleNewSearch() {
    setNearestZap(null)
    setTarget({ x: 0, y: 0 })
  }

  return (
    <div>
      {nearestZap ? (
        <div>
            <p className="text-2xl text-white mb-6">O zap mais próximo é: <span className="text-violet-500 font-bold">{nearestZap}</span></p>
            <button onClick={handleNewSearch} className="h-12 bg-purple-500 px-4 rounded text-white w-full">Fazer nova busca</button>
        </div>
      ) : (
        <>
          <div className="mb-6 space-x-4">
            <span className="text-2xl text-white font-bold">X: </span>
            <input
              className="h-12 rounded bg-neutral-800 border border-neutral-700 px-4 text-white text-2xl"
              type="number"
              value={target.x}
              onChange={(e) =>
                setTarget({ y: target.y, x: Number.parseInt(e.target.value) })
              }
            />
            <span className="text-2xl text-white font-bold">Y: </span>
            <input
              className="h-12 rounded bg-neutral-800 border border-neutral-700 px-4 text-white text-2xl"
              type="number"
              value={target.y}
              onChange={(e) =>
                setTarget({ x: target.x, y: Number.parseInt(e.target.value) })
              }
            />
          </div>

          <button className="h-12 bg-purple-500 px-4 rounded text-white w-full" onClick={handleSearchNearByZap}>
            Procurar zap mais próximo
          </button>
        </>
      )}
    </div>
  );
}
