import React from "react";
import { Button } from "../../components/ui/Button";
import { Badge } from "../../components/ui/Badge";
import { Card, CardContent } from "../../components/ui/Card";

import { ImageWithFallback } from "../../components/ui/ImageWithFallback";
import {
  Star,
  Play,
  ArrowRight,
  Trophy,
  TrendingUp,
  Users,
  Target,
  Gamepad,
} from "lucide-react";
const Home = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Star className="w-4 h-4 mr-2" />
                Transform Your Life Into An Epic Adventure
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl mx-auto">
                Level Up Your Life with
                <span className="bg-gradient-to-r from-primary to-chart-1 bg-clip-text text-transparent">
                  {" "}
                  LifeQuest
                </span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Turn your daily goals into exciting quests, earn XP for
                achievements, and unlock your potential through the power of
                gamification.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-base px-8 py-6">
                <Play className="w-5 h-5 mr-2" />
                Start Your Quest
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-base px-8 py-6"
              >
                Watch Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <div className="pt-8">
              <p className="text-sm text-muted-foreground mb-6">
                Trusted by 50,000+ achievers worldwide
              </p>
              <div className="flex justify-center items-center space-x-8 opacity-60">
                <div className="flex items-center space-x-2">
                  <Trophy className="w-5 h-5 text-chart-1" />
                  <span className="text-sm">15M+ Quests Completed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-chart-2" />
                  <span className="text-sm">94% Success Rate</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-chart-3" />
                  <span className="text-sm">Active Community</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="relative">
            <div className="bg-gradient-to-r from-primary/10 to-chart-1/10 rounded-2xl p-8 border border-border/50">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop&crop=center"
                alt="LifeQuest Dashboard Preview"
                className="w-full h-96 object-cover rounded-xl shadow-2xl"
              />
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 hidden lg:block">
              <Card className="w-48 shadow-lg border-2 border-chart-1/20">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-chart-1 rounded-full flex items-center justify-center">
                      <Trophy className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Daily Quest</p>
                      <p className="text-sm text-muted-foreground">
                        +50 XP earned
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="absolute -bottom-4 -right-4 hidden lg:block">
              <Card className="w-48 shadow-lg border-2 border-chart-2/20">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-chart-2 rounded-full flex items-center justify-center">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Level Up!</p>
                      <p className="text-sm text-muted-foreground">
                        Reached Level 15
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Why Choose LifeQuest?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience personal development like never before with our
              innovative gamification system
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: "Quest-Based Goals",
                description:
                  "Transform your goals into exciting quests with clear objectives, deadlines, and rewards.",
                color: "text-chart-1",
              },
              {
                icon: <Trophy className="w-8 h-8" />,
                title: "Achievement System",
                description:
                  "Earn badges, unlock achievements, and level up as you complete your personal challenges.",
                color: "text-chart-2",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Progress Tracking",
                description:
                  "Visualize your growth with detailed analytics and progress charts that keep you motivated.",
                color: "text-chart-3",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Social Features",
                description:
                  "Join guilds, compete with friends, and stay accountable through our community features.",
                color: "text-chart-4",
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Habit Building",
                description:
                  "Build lasting habits through consistent daily quests and streak tracking systems.",
                color: "text-chart-5",
              },
              {
                icon: <Gamepad className="w-8 h-8" />,
                title: "Gamified Experience",
                description:
                  "Experience points, levels, and rewards make personal development fun and engaging.",
                color: "text-chart-1",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-8">
                  <div className={`${feature.color} mb-4 flex justify-center`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-chart-1">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground">
              Ready to Start Your Life Quest?
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Join thousands of people who have transformed their lives through
              gamification. Your adventure begins today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                variant="secondary"
                className="text-base px-8 py-6"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 py-6 bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
