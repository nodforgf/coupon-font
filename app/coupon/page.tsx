'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateCoupon() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem('isLoggedIn') !== 'true') {
      router.push('/');
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('https://coupon-back-dpdl.onrender.com/coupon', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description }),
    });

    if (res.ok) {
      alert('สร้างคูปองสำเร็จแล้วจ้า! 🎉');
      router.push('/all');
    }
  };

  return (
    // 🌸 บังคับใช้ font-itim ตรงนี้เลย
    <div className="min-h-screen bg-[#fff5f7] flex items-center justify-center px-6 font-itim">
      <div className="bg-white p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(255,182,193,0.3)] w-full max-w-md border border-pink-50 relative overflow-hidden">
        
        {/* ตกแต่งสติ๊กเกอร์มุมกล่อง */}
        <span className="absolute -top-2 -left-2 text-4xl opacity-20">✨</span>
        <span className="absolute -bottom-2 -right-2 text-4xl opacity-20">💝</span>

        <header className="text-center mb-8">
          <h2 className="text-3xl font-black text-pink-600 italic tracking-tighter">CREATE REWARD</h2>
          <p className="text-pink-300 text-xs font-bold mt-1 uppercase">อยากได้ไรสร้างคูปองเอา ✍️</p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* ช่องชื่อคูปอง */}
          <div>
            <label className="block text-pink-400 text-sm font-bold mb-2 ml-2">ชื่อคูปอง</label>
            <input
              type="text"
              placeholder="เช่น กินชาบู ไปเที่ยว..."
              className="input w-full bg-pink-50/50 border-2 border-pink-100 focus:border-pink-400 rounded-2xl text-gray-700 font-bold placeholder:text-pink-200"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          {/* ช่องรายละเอียด */}
          <div>
            <label className="block text-pink-400 text-sm font-bold mb-2 ml-2">รายละเอียดเพิ่มเติม</label>
            <textarea
              placeholder="เช่น ไปไหน วันไหน กินที่ไหน..."
              className="textarea w-full bg-pink-50/50 border-2 border-pink-100 focus:border-pink-400 rounded-2xl text-gray-700 font-bold h-32 placeholder:text-pink-200"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          {/* ปุ่มสร้าง */}
          <button
            type="submit"
            className="btn w-full bg-pink-500 hover:bg-pink-600 border-none text-white text-lg font-black rounded-2xl shadow-lg shadow-pink-200 transition-all active:scale-95"
          >
            CONFIRM & SEND 💌
          </button>
        </form>
      </div>
    </div>
  );
}