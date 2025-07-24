import { Search, TrendingUp, MessageSquare, BarChart, Star } from 'lucide-react'

export default function Features() {
  return (
    <section className="py-20 bg-[#f1f1f6]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#323261] mb-4">Powerful Features for Everyone</h2>
          <p className="text-xl text-gray-600">Discover how SpyDish revolutionizes the dining experience</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-[#4c4c96] mb-6">For Diners</h3>
            <div className="space-y-6">
              <FeatureItem 
                icon={<Search />}
                title="Smart Restaurant Discovery"
                description="Find perfect dining spots based on your preferences and location"
              />
              <FeatureItem 
                icon={<MessageSquare />}
                title="Easy WhatsApp Integration"
                description="Access reviews and recommendations right in your chat"
              />
              <FeatureItem 
                icon={<Star />}
                title="Featured Menus"
                description="Discover trending dishes and special offers in your area"
              />
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-[#4c4c96] mb-6">For Restaurants</h3>
            <div className="space-y-6">
              <FeatureItem 
                icon={<TrendingUp />}
                title="Competitor Analysis"
                description="Real-time pricing intelligence and market insights"
              />
              <FeatureItem 
                icon={<BarChart />}
                title="Advanced Analytics"
                description="Track performance with detailed heatmaps and reports"
              />
              <FeatureItem 
                icon={<MessageSquare />}
                title="Smart Marketing"
                description="AI-powered campaigns and personalized recommendations"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureItem({ icon, title, description }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="p-2 bg-[#4c4c96]/10 rounded-lg">
        <div className="w-6 h-6 text-[#4c4c96]">{icon}</div>
      </div>
      <div>
        <h4 className="font-semibold text-lg text-gray-900 mb-1">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}
