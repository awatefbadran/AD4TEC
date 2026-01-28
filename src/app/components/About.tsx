export default function About(){
    return(
        <>
          <section className="w-full py-20 bg-[#f9fafb] ">
      <div className="container mx-auto px-6">

        {/* Top Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-14">
          {/* Left */}
          <div>
            <p className="text-sm font-semibold text-gray-500 uppercase mb-3 ">
              About Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
              AD<span className="text-amber-600">4</span>TEC leads the future of <br /> electronic gates solutions.
            </h2>
          </div>

          {/* Right */}
          <div>
            <h3 className="text-xl font-semibold text-amber-600 mb-4">
              Smart Technology. Strong Engineering.
            </h3>
            <p className="text-gray-700 leading-relaxed">
              AD4TEC is a specialized factory providing integrated solutions for
              automatic vehicle & pedestrian gates, access control systems,
              parking management systems, and metal fabrication.  
              We combine advanced technology, certified materials, and
              professional execution to deliver secure and reliable systems
              across Egypt.
            </p>
          </div>
        </div>

        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <img
            src="/about1.jpg"
            alt="AD4TEC Work"
            className="w-full h-64 object-cover rounded-xl"
          />
          <img
            src="/about4.jpg"
            alt="AD4TEC Team"
            className="w-full h-64 object-cover rounded-xl"
          />
          <img
            src="/about3.jpg"
            alt="AD4TEC Projects"
            className="w-full h-64 object-cover rounded-xl"
          />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          <div>
            <h4 className="text-3xl font-bold text-gray-900">10+</h4>
            <p className="text-gray-500 text-sm">Years Experience</p>
          </div>

          <div>
            <h4 className="text-3xl font-bold text-gray-900">500+</h4>
            <p className="text-gray-500 text-sm">Projects Delivered</p>
          </div>

          <div>
            <h4 className="text-3xl font-bold text-gray-900">100%</h4>
            <p className="text-gray-500 text-sm">Certified Materials</p>
          </div>

          <div className="md:text-right">
            <a
              href="/about"
              className="inline-flex items-center gap-2 text-amber-600 font-medium hover:underline"
            >
              Read about us
              <span>→</span>
            </a>
          </div>
        </div>

      </div>
    </section>
        </>
    )
}