import { Bot, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#4c4c96] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Bot className="w-8 h-8" />
              <span className="text-2xl font-bold">SpyDish</span>
            </div>
            <p className="text-white/80">
              Transforming restaurant experiences through intelligent data and analytics.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white/80">About Us</a></li>
              <li><a href="#" className="hover:text-white/80">Features</a></li>
              <li><a href="#" className="hover:text-white/80">Pricing</a></li>
              <li><a href="#" className="hover:text-white/80">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white/80">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white/80">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white/80">Cookie Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white/80"><Facebook /></a>
              <a href="#" className="hover:text-white/80"><Twitter /></a>
              <a href="#" className="hover:text-white/80"><Instagram /></a>
              <a href="#" className="hover:text-white/80"><Linkedin /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60">© 2024 SpyDish. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
