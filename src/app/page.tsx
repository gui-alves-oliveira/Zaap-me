import { ZaapFinder } from "@/components/zaap-finder";

export default function Home() {
  return (
    
    <main className="h-screen flex flex-col justify-center items-center bg-neutral-900">
      <div className="mb-12 text-center">
      <h1 className="text-6xl text-white mb-6">Zaap-me</h1>
      <p className="text-white">Encontre o zaap mais próximo da sua missão</p>
      </div>

      <ZaapFinder />
    </main>
  );
}
