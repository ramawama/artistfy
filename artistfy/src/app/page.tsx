import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 overflow-hidden">
      <div className="z-10">
        <h1 className="text-6xl font-serif font-bold text-orange-100 py-2rem">Welcome to Artistfy</h1>
        <div className="flex items-center justify-center"> 
          <button> Login </button>
        </div>

      </div>
      <video src={require('../../public/stylized_vinyl_above.mp4')} autoPlay muted loop className="absolute top-0 -z-1 object-cover h-full w-full" />
    </main>
  );
}
