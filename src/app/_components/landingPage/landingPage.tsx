import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Heart,
  Sparkles,
  DollarSign,
  Users,
  Search,
  Calendar,
  Star,
  CheckCircle,
} from "lucide-react";
import { WaitlistForm } from "../waitlist-form";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-purple-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-rose-500" />
            <span className="bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-2xl font-bold text-transparent">
              Hitched
            </span>
          </div>
          <Button variant="outline" className="hidden bg-transparent sm:flex">
            Sign In
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <Badge className="mb-6 border-rose-200 bg-gradient-to-r from-rose-100 to-purple-100 text-rose-700">
            <Sparkles className="mr-2 h-4 w-4" />
            AI-Powered Wedding Planning
          </Badge>

          <h1 className="mb-6 bg-gradient-to-r from-rose-600 via-purple-600 to-rose-600 bg-clip-text text-4xl leading-tight font-bold text-transparent md:text-6xl lg:text-7xl">
            Plan Your Perfect Wedding with AI Magic
          </h1>

          <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-gray-600 md:text-2xl">
            Transform your wedding planning journey with intelligent
            recommendations, automated budget tracking, and personalized vendor
            matching. Let AI handle the details while you focus on love.
          </p>

          {/* Waitlist Form */}
          <WaitlistForm source="hero" variant="hero" className="mb-8" />

          {/* Social Proof */}
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
            <div className="flex items-center">
              <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
              Free to join
            </div>
            <div className="flex items-center">
              <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
              Early access perks
            </div>
            <div className="flex items-center">
              <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
              No spam, ever
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Why Couples Choose Hitched
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Our AI-powered platform simplifies every aspect of wedding planning,
            making your dream day achievable and stress-free.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <Card className="group border-2 border-rose-100 transition-colors hover:border-rose-200">
            <CardContent className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-rose-100 to-purple-100 transition-transform group-hover:scale-110">
                <Sparkles className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                AI Recommendations
              </h3>
              <p className="text-gray-600">
                Get personalized vendor suggestions, venue matches, and style
                recommendations based on your preferences and budget.
              </p>
            </CardContent>
          </Card>

          <Card className="group border-2 border-rose-100 transition-colors hover:border-rose-200">
            <CardContent className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-rose-100 to-purple-100 transition-transform group-hover:scale-110">
                <DollarSign className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Smart Budget Tracking
              </h3>
              <p className="text-gray-600">
                Automatically track expenses, get cost predictions, and receive
                alerts to keep your wedding budget on track.
              </p>
            </CardContent>
          </Card>

          <Card className="group border-2 border-rose-100 transition-colors hover:border-rose-200">
            <CardContent className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-rose-100 to-purple-100 transition-transform group-hover:scale-110">
                <Search className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Vendor Discovery
              </h3>
              <p className="text-gray-600">
                Find and compare top-rated vendors in your area with AI-powered
                matching based on your style and needs.
              </p>
            </CardContent>
          </Card>

          <Card className="group border-2 border-rose-100 transition-colors hover:border-rose-200">
            <CardContent className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-rose-100 to-purple-100 transition-transform group-hover:scale-110">
                <Users className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Guest Management
              </h3>
              <p className="text-gray-600">
                Effortlessly manage RSVPs, dietary preferences, and seating
                arrangements with intelligent automation.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Loved by Future Brides & Grooms
            </h2>
            <p className="text-xl text-gray-600">
              See what couples are saying about their Hitched experience
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-2 border-gray-100">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-current text-yellow-400"
                    />
                  ))}
                </div>
                <p className="mb-4 text-gray-600">
                  &ldquo;Hitched saved us months of planning time! The AI
                  recommendations were spot-on and helped us find vendors we
                  never would have discovered on our own.&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-rose-400 to-purple-400 font-semibold text-white">
                    S
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Sarah & Mike</p>
                    <p className="text-sm text-gray-500">Married June 2024</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-current text-yellow-400"
                    />
                  ))}
                </div>
                <p className="mb-4 text-gray-600">
                  &ldquo;The budget tracking feature is incredible. We stayed
                  under budget and the AI even suggested cost-saving
                  alternatives that looked amazing!&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-rose-400 to-purple-400 font-semibold text-white">
                    E
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Emily & James</p>
                    <p className="text-sm text-gray-500">Married August 2024</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-current text-yellow-400"
                    />
                  ))}
                </div>
                <p className="mb-4 text-gray-600">
                  &ldquo;As busy professionals, we needed something efficient.
                  Hitched understood our style perfectly and made planning feel
                  effortless.&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-rose-400 to-purple-400 font-semibold text-white">
                    A
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Alex & Jordan</p>
                    <p className="text-sm text-gray-500">
                      Married September 2024
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="rounded-3xl bg-gradient-to-r from-rose-500 to-purple-600 p-8 text-center text-white md:p-16">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Ready to Plan Your Dream Wedding?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl opacity-90">
            Join thousands of couples who are already using AI to plan their
            perfect day. Get early access and exclusive perks.
          </p>

          <WaitlistForm source="cta" variant="cta" className="mb-6" />

          <div className="flex items-center justify-center space-x-8 text-sm opacity-80">
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              Launch: Spring 2025
            </div>
            <div className="flex items-center">
              <Users className="mr-2 h-4 w-4" />
              12,847+ on waitlist
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-4 flex items-center space-x-2 md:mb-0">
              <Heart className="h-6 w-6 text-rose-500" />
              <span className="bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-xl font-bold text-transparent">
                Hitched
              </span>
            </div>
            <div className="flex space-x-6 text-sm text-gray-600">
              <a href="#" className="transition-colors hover:text-rose-600">
                Privacy Policy
              </a>
              <a href="#" className="transition-colors hover:text-rose-600">
                Terms of Service
              </a>
              <a href="#" className="transition-colors hover:text-rose-600">
                Contact
              </a>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
            <p>
              © 2025 Hitched. All rights reserved. Made with ❤️ for couples
              everywhere.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
