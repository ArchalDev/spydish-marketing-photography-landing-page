import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <section className="py-20 bg-[#323261]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Get in Touch</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center text-white">
                  <Mail className="w-5 h-5 mr-3" />
                  <a href="mailto:gaorgaoe@gmail.com" className="hover:underline">
                    gaorgaoe@gmail.com
                  </a>
                </div>
                <div className="flex items-center text-white">
                  <Phone className="w-5 h-5 mr-3" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-white">
                  <MapPin className="w-5 h-5 mr-3" />
                  <span>123 Innovation Street, Tech City</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:border-white"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:border-white"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:border-white"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-white text-[#323261] py-2 rounded-lg font-semibold hover:bg-opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
