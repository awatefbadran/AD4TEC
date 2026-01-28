import { FaCar, FaWalking, FaParking } from "react-icons/fa";
export default function Services() {
  return (
    <section className="w-full py-24 bg-[#fbe7d3]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-16">
          <div>
            <p className="text-sm font-semibold text-amber-700 uppercase mb-3">
              Our Services
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-xl">
              We deliver integrated gate & access solutions for modern
              facilities
            </h2>
          </div>

          <a
            href="/services"
            className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 transition px-6 py-3 rounded-md text-white font-semibold"
          >
            View All Services
            <span>→</span>
          </a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-amber-100 mb-6 text-amber-700">
                   <FaCar size={22} />
            </div>

            <h4 className="text-lg font-semibold text-gray-900 mb-3">
              Automatic Vehicle Gates
            </h4>

            <p className="text-gray-600 mb-4">
              Manufacturing and installation of durable automatic car gates
              with advanced control systems for industrial and commercial use.
            </p>

            <a
              href="/services/vehicle-gates"
              className="text-amber-600 font-medium hover:underline"
            >
              Read more →
            </a>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-amber-100 mb-6 text-amber-700">
                <FaWalking size={22} />
            </div>

            <h4 className="text-lg font-semibold text-gray-900 mb-3">
              Pedestrian Access Gates
            </h4>

            <p className="text-gray-600 mb-4">
              Smart pedestrian gate systems integrated with cards, biometrics,
              and access control solutions.
            </p>

            <a
              href="/services/pedestrian-gates"
              className="text-amber-600 font-medium hover:underline"
            >
              Read more →
            </a>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-amber-100 mb-6 text-amber-700">
                       <FaParking size={22} />
            </div>

            <h4 className="text-lg font-semibold text-gray-900 mb-3">
              Parking Management Systems
            </h4>

            <p className="text-gray-600 mb-4">
              Complete paid parking solutions including entry gates, ticketing,
              monitoring, and reporting systems.
            </p>

            <a
              href="/services/parking-system"
              className="text-amber-600 font-medium hover:underline"
            >
              Read more →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
