'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '2509') { 
      localStorage.setItem('isLoggedIn', 'true');
      router.push('/all');
    } else {
      alert('ผิด! เป็นแฟนกันจริงป่ะ ❤️');
    }
  };

  return (
    <div className="min-h-screen bg-rose-50 flex items-center justify-center p-6 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
      
      {/* Container หลัก */}
      <div className="relative w-full max-w-sm">
        
        {/* แสงนีออนฟุ้งๆ ด้านหลังกล่อง */}
        <div className="absolute -inset-1 bg-linear-to-r from-pink-400 to-rose-400 rounded-[2.5rem] blur opacity-25"></div>

        {/* ตัวกล่อง Login ที่ใช้โครงสร้าง Fieldset แบบบักณฐ */}
        <fieldset className="fieldset relative bg-white/80 backdrop-blur-xl border-none rounded-[2.5rem] p-10 shadow-2xl flex flex-col items-center">
          
          {/* หัวข้อ Login แบบเก๋ๆ */}
          <legend className="fieldset-legend bg-pink-500 text-white px-6 py-2 rounded-full font-black uppercase tracking-widest shadow-lg shadow-pink-200">
            Love Key
          </legend>

          <div className="w-full space-y-4 mt-4">
            {/* ส่วนรหัสผ่าน (เราตัด Email ออกเพราะแอปคู่รักใช้แค่รหัสลับก็พอ) */}
            <div className="form-control w-full text-center">
              <label className="label self-center">
                <span className="label-text font-bold text-pink-400 uppercase tracking-tighter">Enter Secret Code</span>
              </label>
              <input 
                type="password" 
                className="input input-bordered w-full bg-white rounded-2xl text-center text-2xl font-black text-pink-600 border-pink-200 focus:border-pink-500 focus:ring-4 focus:ring-pink-100 transition-all shadow-inner h-16 placeholder:text-pink-100" 
                placeholder="••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* ปุ่มกดที่ดูมีมิติ */}
            <button 
              onClick={handleLogin}
              className="btn btn-block bg-linear-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white border-none rounded-2xl h-16 text-lg font-black shadow-lg shadow-pink-200 transition-all active:scale-95"
            >
              UNLOCK ❤️
            </button>
          </div>

          {/* ข้อความเล็กๆ ด้านล่าง */}
          <p className="mt-8 text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">
            Only for Nod & Prae
          </p>
        </fieldset>
      </div>
    </div>
  );
}