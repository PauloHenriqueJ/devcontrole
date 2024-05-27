import Image from "next/image";
import HeroImg from '@/assets//hero.svg'
export default function Home() {
  return (
    <main className=" flex items-center flex-col justify-center min-h-[calc(100vh-80px)]">
      <h2 className="font-medium text-2xl mb-2">Gerenciamento pH informática</h2>
      <h1 className="font-bold text-3xl mb-8 text-blue-600 md:text-4xl">Atendimento, clientes</h1>

      <Image src={HeroImg}
       width={600}
       className="max-w-sm md:max:w-xl" 
       alt="hero" 
       />
    
    
    </main>
  );
}
