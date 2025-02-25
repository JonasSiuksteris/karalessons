const team = [
    {
      name: "Developer 1",
      role: "Full Stack Developer",
      background: "10+ years in Banking & FinTech",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=dev1"
    },
    {
      name: "Developer 2",
      role: "Backend Specialist",
      background: "8+ years in Financial Applications",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=dev2"
    },
    {
      name: "Developer 3",
      role: "Frontend Developer",
      background: "6+ years in Gaming Industry",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=dev3"
    }
  ]
  
  export default function Team() {
    return (
      <div id="team" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Our Team</h2>
            <p className="mt-4 text-lg text-gray-600">
              Experienced developers with diverse industry backgrounds
            </p>
          </div>
  
          <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="relative">
                  <img
                    className="mx-auto h-40 w-40 rounded-full bg-gray-100"
                    src={member.image}
                    alt={member.name}
                  />
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-blue-600">{member.role}</p>
                  <p className="mt-2 text-gray-600">{member.background}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  