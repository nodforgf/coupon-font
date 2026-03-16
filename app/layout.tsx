'use client';
import { usePathname } from 'next/navigation';
import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <head>
        {/* 1. ดึงฟอนต์ Itim มาใช้เพื่อให้เหมือนในรูปสติกเกอร์ */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Itim&display=swap" rel="stylesheet" />
      </head>
      
      {/* 2. ใส่ font-family: 'Itim' เพื่อให้ทั้งแอปเป็นฟอนต์ลายมือ */}
      <body className="bg-[#fff5f7] pb-24" style={{ fontFamily: "'Itim', cursive" }}>
        {children}

        {/* 📱 Navbar สุดคิ้วท์ */}
        {pathname !== '/' && (
          <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-white/70 backdrop-blur-xl border border-white/20 rounded-[2.5rem] shadow-[0_20px_50px_rgba(255,182,193,0.4)] p-3 z-50">
            <ul className="flex justify-around items-center px-4">
              
              {/* ปุ่มสร้างคูปอง */}
              <Link href="/coupon" className="flex flex-col items-center group">
                <span className="text-2xl group-hover:scale-125 transition-transform duration-300">✍️</span>
                <span className="text-[11px] font-bold text-pink-400 mt-1 uppercase">make</span>
              </Link>
              
              {/* ปุ่มกลาง (หัวใจ/แหวน) */}
              <div className="w-14 h-14 bg-linear-to-tr from-pink-500 to-rose-400 rounded-full flex items-center justify-center shadow-lg shadow-pink-200 border-4 border-white -mt-12 transition-transform hover:rotate-12 hover:scale-110 cursor-pointer">
                 <span className="text-2xl animate-bounce">💖</span>
              </div>

              {/* ปุ่มสมุดคูปอง */}
              <Link href="/all" className="flex flex-col items-center group">
                <span className="text-2xl group-hover:scale-125 transition-transform duration-300">🎫</span>
                <span className="text-[11px] font-bold text-pink-400 mt-1 uppercase">coupon</span>
              </Link>

            </ul>
          </nav>
        )}
      </body>
    </html>
  );
}