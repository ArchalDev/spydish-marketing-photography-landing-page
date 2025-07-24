'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Bot, 
  ChefHat, 
  MapPin, 
  Star, 
  TrendingUp, 
  Users, 
  Zap 
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f1f1f6] text-[#323261]">
      {/* Header */}
      <header className="container mx-auto px-6 py-8 flex justify-between items-center">
        <div className="flex items-center">
          <Image 
            src="https://storage.googleapis.com/tapthetable/assets/1406217/inbox/1000860753445699232/logo_spydish.png" 
            alt="SpyDish Logo" 
            width={50} 
            height={50} 
            className="mr-4"
          />
          <h1 className="text-2xl font-bold text-[#4c4c96]">SpyDish</h1>
        </div>
        <nav className="space-x-6">
          <Link href="#features" className="hover:text-[#4c4c96]">Features</Link>
          <Link href="#for-diners" className="hover:text-[#4c4c96]">For Diners</Link>
          <Link href="#for-restaurants" className="hover:text-[#4c4c96]">For Restaurants</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-5xl font-bold mb-6 text-[#323261]">
            Revolutionize Dining with Intelligent Insights
          </h2>
          <p className="text-xl mb-8 text-[#4c4c96]">
            SpyDish is an innovative WhatsApp bot that connects diners with restaurants while providing powerful management tools.
          </p>
          <Button 
            size="lg" 
            className="bg-[#4c4c96] hover:bg-[#323261] text-white"
            asChild
          >
            <a href="https://wa.me/YOUR_WHATSAPP_NUMBER" target="_blank">
              Start Now on WhatsApp
            </a>
          </Button>
        </div>
        <div className="relative">
          <Image 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4" 
            alt="Restaurant Scene" 
            width={600} 
            height={400} 
            className="rounded-xl shadow-2xl"
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-16 bg-white rounded-t-3xl">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-[#323261] mb-4">
            Powerful Features for Diners and Restaurants
          </h3>
          <p className="text-xl text-[#4c4c96]">
            Discover how SpyDish transforms the dining experience
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              icon: <MapPin className="w-12 h-12 text-[#4c4c96]" />, 
              title: "Location-Based Discovery", 
              description: "Find restaurants tailored to your preferences and location." 
            },
            { 
              icon: <Star className="w-12 h-12 text-[#4c4c96]" />, 
              title: "Dish Rankings", 
              description: "Explore top-rated dishes and get personalized recommendations." 
            },
            { 
              icon: <TrendingUp className="w-12 h-12 text-[#4c4c96]" />, 
              title: "Market Insights", 
              description: "Get real-time data on restaurant performance and trends." 
            }
          ].map((feature, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardHeader>
                {feature.icon}
                <CardTitle className="mt-4 text-[#323261]">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#4c4c96]">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* For Diners Section */}
      <section id="for-diners" className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-4xl font-bold text-[#323261] mb-6">
            For Diners: Your Culinary Companion
          </h3>
          <div className="space-y-4">
            {[
              { icon: <Bot />, text: "Personalized Restaurant Recommendations" },
              { icon: <ChefHat />, text: "Featured Dishes and Menus" },
              { icon: <Users />, text: "Community Reviews and Rankings" }
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="bg-[#4c4c96]/10 p-3 rounded-full">
                  {React.cloneElement(item.icon, { className: "w-6 h-6 text-[#4c4c96]" })}
                </div>
                <p className="text-[#323261]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <Image 
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0" 
            alt="Diner Experience" 
            width={600} 
            height={400} 
            className="rounded-xl shadow-2xl"
          />
        </div>
      </section>

      {/* For Restaurants Section */}
      <section id="for-restaurants" className="container mx-auto px-6 py-16 bg-white">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-[#323261] mb-4">
            For Restaurants: Data-Driven Success
          </h3>
          <p className="text-xl text-[#4c4c96]">
            Transform your restaurant management with intelligent insights
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { 
              title: "Competitor Intelligence", 
              description: "Real-time pricing and performance comparisons",
              icon: <Zap className="w-12 h-12 text-[#4c4c96]" />
            },
            { 
              title: "Advanced Analytics", 
              description: "Sentiment analysis and market trend tracking",
              icon: <TrendingUp className="w-12 h-12 text-[#4c4c96]" />
            }
          ].map((feature, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardHeader className="flex flex-row items-center space-x-4">
                {feature.icon}
                <CardTitle className="text-[#323261]">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#4c4c96]">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-16 text-center bg-[#4c4c96] text-white rounded-t-3xl">
        <h3 className="text-4xl font-bold mb-6">
          Ready to Transform Your Dining Experience?
        </h3>
        <p className="text-xl mb-8">
          Connect with SpyDish and unlock a world of culinary insights
        </p>
        <Button 
          size="lg" 
          className="bg-white text-[#4c4c96] hover:bg-gray-100"
          asChild
        >
          <a href="https://wa.me/YOUR_WHATSAPP_NUMBER" target="_blank">
            Start Your Journey
          </a>
        </Button>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 text-center">
        <p className="text-[#323261]">
          © 2024 SpyDish. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
