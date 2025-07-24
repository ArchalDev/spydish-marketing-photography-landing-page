import { Bot, Search, Star } from 'lucide-react'

export default function Header() {
  return (
    <header className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80"
          alt="Restaurant background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#323261]/90 to-[#4c4c96]/80"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 py-20">
        <nav className="absolute top-0 left-0 right-0 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bot className="w-8 h-8 text-white" />
              <span className="text-2xl font-bold text-white">SpyDish</span>
            </div>
            <button onClick={() => window.open('https://wa.me/message/your-whatsapp-link')} 
                    className="bg-white text-[#4c4c96] px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition">
              Start Now
            </button>
          </div>
        </nav>

        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Transform Your Restaurant Experience
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Connect diners with restaurants through our intelligent WhatsApp bot. Get personalized recommendations, analytics, and grow your business.
          </p>
          <div className="flex flex-wrap gap-4">
            <button onClick={() => window.open('https://wa.me/message/your-whatsapp-link')} 
                    className="bg-white text-[#4c4c96] px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition text-lg">
              Get Started Free
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
