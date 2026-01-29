export default function Hero() {
  return (
    <section className="w-full min-h-screen py-20 bg-bg-primary flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text */}
          <div className="text-[#f7eee3]">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Smart Gate Solutions <br />
              Designed & Built by AD<span className="text-amber-600">4</span>TEC
            </h1>

            <p className="text-[#ece5d7] max-w-lg mb-8">
              AD4TEC is a specialized factory in manufacturing and installing
              automatic vehicle & pedestrian gates, access control systems,
              and paid parking solutions — delivering security, durability,
              and precision for every project.
            </p>

            <button className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 transition px-6 py-3 rounded-md text-white font-semibold">
              Request a Quote
              <span className="text-lg">→</span>
            </button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img
                src="/hero.png"
                alt="Automatic Car Gate System by AD4TEC"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
