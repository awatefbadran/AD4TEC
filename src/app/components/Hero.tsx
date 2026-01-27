
export default function Hero() {
  return (
<section className="w-full min-h-screen py-20">
  <div className="max-w-7xl mx-auto px-6 w-full">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
     
      <div className="text-[#604d54]">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Transform Your Idea <br />
          Into Reality with AD<span className="text-amber-600">4</span>TC
        </h1>

        <p className="text-[#7a666d]  max-w-lg mb-8">
          At AD4TC, we design and deliver smart electronic car gate solutions
          using the latest automation and access control technologies.
        </p>

        <button className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 transition px-6 py-3 rounded-md text-white font-semibold">
          Get Started
          <span className="text-lg">→</span>
        </button>
      </div>

      <div className="relative">
        <div className="rounded-xl overflow-hidden shadow-2xl">
          <img
            src="/hero.png"  
            alt="Electronic Car Gate System"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</section>

  );
}
