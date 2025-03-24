import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 text-center max-w-lg">
        <h1 className="text-3xl font-bold text-gray-800">Welcome to OpenK.in</h1>
        <p className="text-gray-600 mt-4">Your simple and efficient payment solution.</p>
        <Image src="/logo.png" width={120} height={120} alt="OpenK.in Logo" className="mt-6" />
        <a
          href="#"
          className="mt-6 inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Get Started
        </a>
      </div>
    </main>
  );
}
