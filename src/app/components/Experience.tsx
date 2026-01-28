export default function Experience(){
    return(
        <>
         <section className="w-full py-20 bg-[#f3f6f8]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <p className="text-sm font-semibold text-amber-600 uppercase mb-3">
              Our Expertise
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-6">
              Engineering reliable gate <br />
              solutions for every project.
            </h2>

            <p className="text-gray-600 max-w-lg">
              At AD4TEC, we combine engineering expertise, certified materials,
              and advanced technology to deliver secure and durable electronic
              gate systems, access control, and parking solutions for
              industrial and commercial projects across Egypt.
            </p>
          </div>

          {/* Right Cards */}
          <div className="space-y-6">

            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-amber-600">
              <h4 className="font-semibold text-gray-900 mb-1">
                On-Time Delivery
              </h4>
              <p className="text-gray-600 text-sm">
                Committed to strict timelines and professional project execution
                without delays.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-amber-600">
              <h4 className="font-semibold text-gray-900 mb-1">
                Certified Quality
              </h4>
              <p className="text-gray-600 text-sm">
                Approved products, trusted components, and compliance with
                industry and consumer protection standards.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-amber-600">
              <h4 className="font-semibold text-gray-900 mb-1">
                Technical Support & Maintenance
              </h4>
              <p className="text-gray-600 text-sm">
                Ongoing maintenance programs and fast technical support to
                ensure system reliability.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
        </>
    )
}