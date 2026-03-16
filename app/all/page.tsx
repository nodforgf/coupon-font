'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import confetti from 'canvas-confetti';

export default function MyCoupons() {
  const [coupons, setCoupons] = useState([]);
  const router = useRouter();

  const fetchCoupons = async () => {
    try {
      const res = await fetch('https://coupon-back-dpdl.onrender.com/coupon');
      if (res.ok) setCoupons(await res.json());
    } catch (err) { console.error(err); }
  };

  useEffect(() => {
    if (localStorage.getItem('isLoggedIn') !== 'true') router.push('/');
    fetchCoupons();
  }, []);

  const useCoupon = async (id: number, title: string) => {
    if (!confirm(`จะใช้คูปอง "${title}" เลยนะคะ?`)) return;

    confetti({ 
      particleCount: 150, 
      spread: 70, 
      origin: { y: 0.6 }, 
      colors: ['#ff69b4', '#fb7185'] 
    });

    try {
      const res = await fetch(`https://coupon-back-dpdl.onrender.com/coupon/${id}`, { 
        method: 'DELETE' 
      });

      if (res.ok) {
        setCoupons((prev) => prev.filter((coupon: any) => coupon.id !== id));
      } else {
        alert('ลบไม่สำเร็จจ้า');
      }
    } catch (err) {
      console.error('ลบไม่ได้:', err);
    }
  };

  return (
    <div className="min-h-screen pb-24 px-6 bg-[#fff1f2]">
      <header className="py-12 text-center">
        <h1 className="text-4xl font-black text-pink-600 tracking-tighter italic uppercase">My Rewards</h1>
        <p className="text-pink-400 text-[10px] font-bold tracking-[0.3em] mt-1 uppercase">Limited Edition</p>
      </header>

      <div className="max-w-md mx-auto space-y-12">
        {coupons.map((coupon: any) => (
          <div key={coupon.id} className="hover-3d relative group h-44 w-full cursor-pointer" onClick={() => useCoupon(coupon.id, coupon.title)}>
            
            {/* 🎫 TICKET CONTENT */}
            <div className="ticket-main w-full h-full bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-row relative z-10 border border-pink-100 transform-style-3d">
              
              {/* STUB (ฝั่งซ้ายสีชมพู) */}
              <div className="w-24 bg-pink-500 flex flex-col items-center justify-center relative shrink-0 transform-style-3d">
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-[#fff1f2] rounded-full border border-pink-100"></div>
                <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-[#fff1f2] rounded-full border border-pink-100"></div>
                <div className="absolute top-0 right-0 h-full w-0.5 border-r-2 border-dashed border-white/20"></div>
                
                <span className="text-4xl parallax-2 drop-shadow-xl">💝</span>
                <p className="[writing-mode:vertical-rl] rotate-180 text-[10px] font-black text-white/50 tracking-widest mt-2">LOVE TICKET</p>
              </div>

              {/* BODY (ฝั่งขวาสีขาว) */}
              <div className="flex-1 p-6 flex flex-col justify-between bg-white transform-style-3d relative">
                
                {/* ส่วนบน: หัวข้อและรายละเอียด */}
                <div className="parallax-1">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-black text-gray-800 tracking-tighter leading-none italic">
                      {coupon.title}
                    </h3>
                    <div className="flex flex-col items-end">
                      <span className="bg-pink-100 text-pink-600 text-[9px] px-2 py-0.5 rounded-full font-black uppercase border border-pink-200">
                        Limited
                      </span>
                      <span className="text-[7px] text-gray-300 font-bold mt-1 uppercase tracking-tighter">No. 000{coupon.id}</span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-xs mt-2 font-medium line-clamp-2 leading-relaxed">
                    "{coupon.description}"
                  </p>
                </div>

                {/* ส่วนล่าง: ปรับให้ไม่โล่ง */}
                <div className="flex justify-between items-center border-t border-pink-50 pt-4 parallax-1">
                  <div className="flex flex-col opacity-40">
                    <span className="text-[8px] font-black text-pink-300 uppercase tracking-[0.2em]">Expires</span>
                    <span className="text-[10px] font-bold text-gray-400 italic leading-none">Unlimited Love</span>
                  </div>

                  <button className="btn btn-sm bg-pink-500 hover:bg-pink-600 border-none text-white rounded-xl font-black px-6 shadow-lg shadow-pink-100 transition-all uppercase text-[10px]">
                    USE NOW
                  </button>
                </div>

                {/* ลายน้ำจางๆ */}
                <div className="absolute bottom-2 right-24 opacity-[0.05] pointer-events-none select-none">
                  <span className="text-4xl font-black italic uppercase -rotate-12">COUPON</span>
                </div>
              </div>
            </div>

            {/* เงาสามมิติ */}
            <div className="absolute inset-0 bg-pink-200 rounded-2xl -z-10 translate-x-1 translate-y-1 opacity-40 blur-sm group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-500"></div>
          </div>
        ))}
      </div>

    </div>
  );
}