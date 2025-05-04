'use client'

import Image from 'next/image'
import { InteractiveGridPattern } from '@/components/magicui/interactive-grid-pattern'
import { AnimatedShinyText } from '@/components/magicui/animated-shiny-text'
import HeroVideoDialog from '@/components/magicui/hero-video-dialog'
import { IconCloud } from '@/components/magicui/icon-cloud'
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CheckIcon, MinusIcon } from "lucide-react";
import React from "react";
import Marquee from "@/components/ui/marquee";

interface PlanFeature {
  type: string;
  features: {
    name: string;
    free: boolean;
    startup: boolean;
    team: boolean;
    enterprise: boolean;
  }[];
}

const planFeatures: PlanFeature[] = [
  {
    type: "Features",
    features: [
      {
        name: "Stealth Mode",
        free: true,
        startup: true,
        team: false,
        enterprise: false,
      },
      {
        name: "Smart Capture",
        free: true,
        startup: true,
        team: false,
        enterprise: false,
      },
      {
        name: "AI Brainpower",
        free: true,
        startup: true,
        team: false,
        enterprise: false,
      },
      {
        name: "Solution Insights",
        free: true,
        startup: true,
        team: false,
        enterprise: false,
      },
      {
        name: "Intelligent Debugging",
        free: true,
        startup: true,
        team: false,
        enterprise: false,
      },
      {
        name: "Flexible Window",
        free: true,
        startup: true,
        team: false,
        enterprise: false,
      },
      {
        name: "AI Eye Tracking (Coming Soon)",
        free: false,
        startup: true,
        team: false,
        enterprise: false,
      },
      {
        name: "Voice Recognition (Coming Soon)",
        free: false,
        startup: true,
        team: false,
        enterprise: false,
      },
      {
        name: "Context Awareness (Coming Soon)",
        free: false,
        startup: true,
        team: false,
        enterprise: false,
      },
    ],
  },
];

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "nodedotjs",
  "cplusplus",
  "python",
  "sharp",
  "ruby",
  "php",
  "swift",
  "kotlin",
  "go",
  "rust",
  "postgresql",
];

const Header = () => {

  return (
    <header className="flex items-center justify-between px-16 py-3 bg-[#FEFC00]">
      <div className="flex items-center">
        <Image src="/ghost.png" alt="Ghost Logo" width={100} height={100} className="cursor-pointer" />
      </div>

      <nav className="flex items-center gap-8 text-lg font-bold">
        <a href="#features" className="text-[#1E1E1E] hover:opacity-80 cursor-pointer">FEATURES</a>
        <a href="#shortcuts" className="text-[#1E1E1E] hover:opacity-80 cursor-pointer">SHORTCUTS</a>
        <a href="#pricing" className="text-[#1E1E1E] hover:opacity-80 cursor-pointer">PRICING</a>
      </nav>

      <div className="flex items-center gap-4">
        <a href="https://github.com/rayjaywolf/ghost/releases/download/v1.0.0/Ghost-1.2.0-arm64.dmg">
          <button className="flex items-center gap-3 px-4 py-2 bg-[#1E1E1E] text-white rounded-lg hover:opacity-90 font-bold">
            Download
            <span className="flex gap-2 items-center">
              <svg className="w-4 h-4" viewBox="0 0 19.132 19.132" fill="none">
                <g>
                  <g>
                    <path style={{ fill: 'currentColor' }} d="M9.172,9.179V0.146H0v9.033H9.172z"></path>
                    <path style={{ fill: 'currentColor' }} d="M19.132,9.179V0.146H9.959v9.033H19.132z"></path>
                    <path style={{ fill: 'currentColor' }} d="M19.132,18.986V9.955H9.959v9.032H19.132z"></path>
                    <path style={{ fill: 'currentColor' }} d="M9.172,18.986V9.955H0v9.032H9.172z"></path>
                  </g>
                </g>
              </svg>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
            </span>
          </button>
        </a>
      </div>
    </header>
  )
}

const LanguageIconCard = ({ src, alt }: { src: string; alt: string }) => (
  <div
    tabIndex={0}
    aria-label={alt}
    className="flex items-center justify-center w-20 h-20 bg-[#232326] rounded-xl border border-white/10 shadow-md mx-2 focus:outline-none focus:ring-2 focus:ring-[#FEFC00]"
  >
    <img src={src} alt={alt} className="w-12 h-12 object-contain" />
  </div>
)

export default function Home() {

  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <div className="min-h-screen relative bg-background">

      <Header />

      {/* Hero Section */}
      <section className="relative flex h-[calc(100vh-64px)] items-center justify-center overflow-hidden bg-[#1E1E1E]">
        <InteractiveGridPattern className={cn(
          "[mask-image:radial-gradient(750px_circle_at_center,white,transparent)]", "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
          width={60}
          height={60}
        />
        <div className="relative z-10 flex flex-col items-center gap-4">
          <div className="group rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10">
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 text-sm font-inter font-medium text-white/80 transition ease-out hover:text-white">
              ✨ AI JOB INTERVIEW ASSISTANT
            </AnimatedShinyText>
          </div>
          <h1 className="text-white text-7xl">Your Secret</h1>
          <div className="bg-[#FEFC00] px-4 py-2 rotate-1.2">
            <h1 className="text-[#1E1E1E] text-7xl -rotate-1.2">Competitive Edge</h1>
          </div>
          <p className="text-white/80 text-xl font-inter mt-6 max-w-2xl text-center">
            <span className="line-through opacity-50 font-inter">Cheat</span> <span className="text-[#FEFC00] font-inter">Ace</span> your technical interviews with our invisible AI companion
          </p>
          <div className="flex items-center gap-4 mt-8">
            <a href="https://github.com/rayjaywolf/ghost/releases/download/v1.0.0/Ghost-1.2.0-arm64.dmg">
              <button className="px-5 py-2 bg-[#FEFC00] text-[#1E1E1E] rounded-full font-bold hover:opacity-90 transition-opacity tracking-wide">
                Download Now
              </button>
            </a>
            <button className="px-5 py-2 bg-[#212121] text-white rounded-full font-bold hover:bg-[#1e1e1e] transition-all border border-white/20 tracking-wide">
              See Features
            </button>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="relative flex flex-col items-center justify-center py-12 bg-[#1b1b1b] border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-wider">SEE IT IN ACTION</h2>
        <div className="w-full max-w-5xl px-4">
          <HeroVideoDialog
            videoSrc="https://www.youtube.com/embed/1t1_a1BZ04o?si=hhKc1VGandFI2U_W"
            thumbnailSrc="https://i.ytimg.com/vi/1t1_a1BZ04o/hq720.jpg"
            thumbnailAlt="Demo video thumbnail"
            animationStyle="from-center"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="relative flex flex-col items-center justify-center py-16 bg-[#1e1e1e] border-t border-white/10 px-4 overflow-hidden">
        <blockquote className="text-white/90 text-xl max-w-4xl md:text-2xl font-inter text-center italic">
          "Technical interviews have become a test of who can grind the most LeetCode, not who can solve real problems. Ghost exists to flip the script—giving everyone a fair shot, not just the best grinders."
        </blockquote>
      </section>

      {/* Features Section */}
      <section id="features" className="relative flex flex-col items-center justify-center py-20 bg-[#1b1b1b] border-t border-white/10 px-20 w-full h-full">
        <div className='absolute inset-0 flex justify-center items-center blur-[180px] z-0'>
          <div
            className="absolute top-[621px] bottom-[289px] w-full max-w-[200px] opacity-60 bg-[#a84ddf] [background-image:conic-gradient(from_180deg_at_50%_50%,#0aefff_-69.37deg,#0f83ff_31.88deg,#b056e7_120deg,#ff9966_204.37deg,#0aefff_290.63deg,#0f83ff_391.87deg)]"
          >
          </div>
        </div>
        <div className='w-full flex flex-row z-10'>
          <div className='w-1/2'>
            <div className='bg-[#1e1e1e] h-[320px] w-full mb-8 rounded-lg border border-white/10'>
              <video src="/solution.mov" autoPlay muted loop className='w-full h-full object-cover rounded-lg' />
            </div>
            <h2 className='text-white text-left text-3xl font-bold tracking-wider mb-4'>
              Solution Generation
            </h2>
            <p className='text-white/80 max-w-lg text-left text-lg font-inter'>
              Take screenshot of the problem and let Ghost generate a solution for you with a step by step explanation.
            </p>
          </div>
          <div className='w-1/2'></div>
        </div>
        <div className='w-full flex flex-row -mt-20 z-10'>
          <div className='w-1/2'>
          </div>
          <div className='w-1/2'>
            <div className='bg-[#1e1e1e] h-[320px] w-full mb-8 rounded-lg border border-white/10'>
              <video src="/window-management.mp4" autoPlay muted loop className='w-full h-full object-cover rounded-lg' />
            </div>
            <h2 className='text-white text-right text-3xl font-bold tracking-wider mb-4'>
              Window Management
            </h2>
            <p className='text-white/80 ml-auto max-w-lg text-right text-lg font-inter'>
              Ghost can be moved around your screen, and resized to your liking without interfering with your workflow.
            </p></div>
        </div>
        <div className='w-full flex flex-row -mt-20 z-10'>
          <div className='w-1/2'>
            <div className='bg-[#1e1e1e] h-[320px] w-full mb-8 rounded-lg border border-white/10 flex items-center'>
              <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg">
                {(() => {
                  const firstRow = images.slice(0, Math.ceil(images.length / 2))
                  const secondRow = images.slice(Math.ceil(images.length / 2))
                  return (
                    <>
                      <Marquee pauseOnHover className='[--duration:20s]'>
                        {firstRow.map((src, idx) => (
                          <LanguageIconCard key={src} src={src} alt={slugs[idx]} />
                        ))}
                      </Marquee>
                      <Marquee reverse pauseOnHover className='[--duration:20s]'>
                        {secondRow.map((src, idx) => (
                          <LanguageIconCard key={src} src={src} alt={slugs[idx + firstRow.length]} />
                        ))}
                      </Marquee>
                      <div className='pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#1e1e1e]'></div>
                      <div className='pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#1e1e1e]'></div>
                    </>
                  )
                })()}
              </div>
            </div>
            <h2 className='text-white text-left text-3xl font-bold tracking-wider mb-4'>
              Multi-language Support
            </h2>
            <p className='text-white/80 max-w-lg text-left text-lg font-inter'>
              Ghost supports a wide range of languages, including Python, Java, C++, and more.
            </p>
          </div>
          <div className='w-1/2'></div>
        </div>
        <div className='w-full flex flex-row -mt-20 z-10'>
          <div className='w-1/2'>
          </div>
          <div className='w-1/2'>
            <div className='bg-[#1e1e1e] h-[320px] w-full mb-8 rounded-lg border border-white/10'></div>
            <h2 className='text-white text-right text-3xl font-bold tracking-wider mb-4'>
              Time/Space Complexity Analysis
            </h2>
            <p className='text-white/80 ml-auto max-w-lg text-right text-lg font-inter'>
              Ghost analyzes the time and space complexity of your code, helping you understand how efficient it is.
            </p></div>
        </div>
        <div className='w-full flex flex-row mt-20 gap-2 z-10'>
          <div className='w-1/2'>
            <div className='bg-[#151718] h-[400px] w-full rounded-lg  border border-white/10 relative'>
              <h2 className='text-white text-left text-3xl font-bold tracking-wider mb-4 pl-16 pt-40'>
                All while being
              </h2>
              <p className='text-white/80 max-w-lg text-left text-lg font-inter pl-25'>
                (What you see)
              </p>
              <Image src="/visible.png" alt="Ghost" width={320} height={320} className='absolute bottom-0 right-0' />
            </div>
          </div>
          <div className='w-1/2'>
            <div className='bg-[#151718] h-[400px] w-full rounded-lg border border-white/10 relative'>
              <h2 className='text-white text-right text-3xl font-bold tracking-wider mb-4 pr-16 pt-40'>
                Entirely <span className='text-[#FEFC00]'>invisible</span>
              </h2>
              <p className='text-white/80 max-w-lg text-right text-lg font-inter'>
                (What they see)
              </p>
              <Image src="/invisible.png" alt="Ghost" width={320} height={320} className='absolute bottom-0 left-0' />
            </div>
          </div>
        </div>
      </section>

      <section id="shortcuts" className="relative flex flex-col items-center justify-center py-20 bg-[#1e1e1e] border-t border-white/10 px-4 w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-wider">Keyboard Shortcuts</h2>
        <p className="text-white/80 text-lg font-inter mb-10 text-center max-w-2xl">
          Ghost is designed to be as unobtrusive as possible. Here are the keyboard shortcuts you can use to control it.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
          {[
            {
              action: 'Start New Problem',
              macKeys: ['⌘', 'R'],
            },
            {
              action: 'Open Settings',
              macKeys: ['⌘', '⇧', 'I'],
            },
            {
              action: 'Take Screenshot',
              macKeys: ['⌘', 'H'],
            },
            {
              action: 'Process Screenshots',
              macKeys: ['⌘', '↵'],
            },
            {
              action: 'Toggle Visibility',
              macKeys: ['⌘', 'B'],
            },
            {
              action: 'Move Window',
              macKeys: ['⌘', '↑ ← ↓ → '],
            },
            {
              action: 'Decrease Opacity',
              macKeys: ['⌘', '['],
            },
            {
              action: 'Increase Opacity',
              macKeys: ['⌘', ']'],
            },
            {
              action: 'Quit',
              macKeys: ['⌘', 'Q'],
            },
          ].map(({ action, macKeys }) => {
            const renderKeys = (keys: string[]) => (
              <div className="flex flex-wrap gap-2 items-center justify-center">
                {keys.map((key: string, idx: number) => (
                  <span key={key + idx} className="flex items-center">
                    <span
                      className="inline-flex items-center justify-center min-w-[48px] px-4 h-14 bg-gradient-to-b from-[#f5f5f7] to-[#d1d5db] text-[#232326] text-xl font-bold rounded-xl border border-[#e5e7eb] shadow-[inset_0_2px_8px_0_rgba(0,0,0,0.10),0_1.5px_0_#fff] mx-1 select-none transition-all active:scale-95"
                      aria-label={key}
                    >
                      {key}
                    </span>
                    {idx < keys.length - 1 && (
                      <span className="text-[#bdbdbd] text-2xl font-bold mx-1">+</span>
                    )}
                  </span>
                ))}
              </div>
            )
            return (
              <div
                key={action}
                tabIndex={0}
                aria-label={action + ' shortcut'}
                className="flex flex-col items-center justify-center bg-[#232326] rounded-2xl border border-white/10 p-8 shadow-lg focus:outline-none focus:ring-2 focus:ring-[#FEFC00] transition-all min-h-[120px]"
              >
                <span className="text-lg font-semibold text-white mb-4 text-center tracking-wider">{action}</span>
                {renderKeys(macKeys)}
              </div>
            )
          })}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative flex flex-col items-center justify-center py-12 bg-[#181818] w-full overflow-hidden border-t border-white/10 px-20">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#FEFC00]/20 via-[#a84ddf]/10 to-transparent rounded-full blur-3xl opacity-60" />
        </div>
        <div className="relative z-10 w-full mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-wider text-white mb-4">Pricing</h2>
          <p className="text-lg text-white/70 font-inter">Whatever your status, our offers evolve according to your needs.</p>
        </div>
        <div className="relative z-10 flex flex-row justify-center gap-8 w-full px-4">
          <div className="flex flex-col items-center bg-[#232326] border border-white/10 rounded-3xl shadow-xl p-8 transition-transform hover:scale-105 w-1/4">
            <div className="text-2xl font-bold text-white mb-2">Rookie</div>
            <div className="text-5xl font-extrabold text-white mb-2">Free</div>
            <div className="text-white/70 mb-6">Forever free</div>
            <ul className="space-y-2 text-white/80 text-base mb-8">
              <li className="flex items-center gap-2"><CheckIcon className="h-5 w-5" /><span>Invisible overlay</span></li>
              <li className="flex items-center gap-2"><CheckIcon className="h-5 w-5" /><span>AI analysis</span></li>
              <li className="flex items-center gap-2"><CheckIcon className="h-5 w-5" /><span>Window management</span></li>
            </ul>
          </div>
          <div className="flex flex-col items-center bg-[#FEFC00] border-4 border-[#1E1E1E] rounded-3xl shadow-2xl p-10 scale-105 relative w-1/4">
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#1E1E1E] text-[#FEFC00] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Coming Soon</span>
            <div className="text-2xl font-bold text-center text-[#1E1E1E] mb-2">Cheater</div>
            <div className="text-5xl font-extrabold text-[#1E1E1E] mb-2">$19</div>
            <div className="text-[#1E1E1E]/70 mb-6">All the features of Rookie, plus...</div>
            <ul className="space-y-2 text-[#1E1E1E] text-base mb-8">
              <li className="flex items-center gap-2"><CheckIcon className="h-5 w-5" /><span>AI eye tracking</span></li>
              <li className="flex items-center gap-2"><CheckIcon className="h-5 w-5" /><span>Voice recognition</span></li>
              <li className="flex items-center gap-2"><CheckIcon className="h-5 w-5" /><span>Context awareness</span></li>
            </ul>
          </div>
          <div className="flex flex-col items-center bg-purple-300 border-4 border-[#1E1E1E] rounded-3xl shadow-2xl p-10 scale-105 relative w-1/4">
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#1E1E1E] text-purple-300 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Coming Soon</span>
            <div className="text-2xl font-bold text-center text-[#1E1E1E] mb-2">Cheater Solana</div>
            <div className="text-5xl font-extrabold text-[#1E1E1E] mb-2">0.1 SOL</div>
            <div className="text-[#1E1E1E]/70 mb-6">Save money by paying with SOL</div>
            <ul className="space-y-2 text-[#1E1E1E] text-base mb-8">
              <li className="flex items-center gap-2"><CheckIcon className="h-5 w-5" /><span>AI eye tracking</span></li>
              <li className="flex items-center gap-2"><CheckIcon className="h-5 w-5" /><span>Voice recognition</span></li>
              <li className="flex items-center gap-2"><CheckIcon className="h-5 w-5" /><span>Context awareness</span></li>
            </ul>
          </div>
        </div>
        <div className="relative z-10 mt-24 w-full">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-semibold text-white">Compare plans</h3>
          </div>
          <div className="hidden lg:block">
            <Table className="rounded-2xl overflow-hidden border border-white/10 bg-[#232326] text-white">
              <TableHeader>
                <TableRow className="bg-[#181818] p-4">
                  <TableHead className="w-3/12 text-[#FFF] text-lg font-bold px-6 py-4">Plans</TableHead>
                  <TableHead className="w-2/12 text-[#FFF] text-lg font-bold text-center px-6 py-4">Free</TableHead>
                  <TableHead className="w-2/12 text-[#FFF] text-lg font-bold text-center px-6 py-4">Cheater</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {planFeatures.map((featureType) => (
                  <React.Fragment key={featureType.type}>
                    {featureType.features.map((feature) => (
                      <TableRow key={feature.name} className="text-white/70 hover:bg-[#1e1e1e] transition-all">
                        <TableCell className="py-3 font-inter px-6 py-4">{feature.name}</TableCell>
                        <TableCell className="text-center px-6 py-4">{feature.free ? (<CheckIcon className="h-5 w-5 mx-auto text-[#FEFC00]" />) : (<MinusIcon className="h-5 w-5 mx-auto text-white/30" />)}</TableCell>
                        <TableCell className="text-center px-6 py-4">{feature.startup ? (<CheckIcon className="h-5 w-5 mx-auto text-[#FEFC00]" />) : (<MinusIcon className="h-5 w-5 mx-auto text-white/30" />)}</TableCell>
                      </TableRow>
                    ))}
                  </React.Fragment>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="space-y-24 lg:hidden mt-10">
            <section>
              <div className="mb-4">
                <h4 className="text-xl font-bold text-[#FEFC00]">Free</h4>
              </div>
              <Table className="rounded-2xl overflow-hidden border border-white/10 bg-[#232326] text-white">
                <TableBody>
                  {planFeatures.map((featureType) => (
                    <React.Fragment key={featureType.type}>
                      <TableRow className="bg-[#232326]">
                        <TableCell colSpan={2} className="w-10/12 text-[#FEFC00] font-bold text-base py-3 px-6 py-4">{featureType.type}</TableCell>
                      </TableRow>
                      {featureType.features.map((feature) => (
                        <TableRow className="text-white/70" key={feature.name}>
                          <TableCell className="w-11/12 py-2 px-6 py-4">{feature.name}</TableCell>
                          <TableCell className="text-right px-6 py-4">{feature.free ? (<CheckIcon className="h-5 w-5 text-[#FEFC00]" />) : (<MinusIcon className="h-5 w-5 text-white/30" />)}</TableCell>
                        </TableRow>
                      ))}
                    </React.Fragment>
                  ))}
                </TableBody>
              </Table>
            </section>
            <section>
              <div className="mb-4">
                <h4 className="text-xl font-bold text-[#FEFC00]">Cheater</h4>
              </div>
              <Table className="rounded-2xl overflow-hidden border border-white/10 bg-[#232326] text-white">
                <TableBody>
                  {planFeatures.map((featureType) => (
                    <React.Fragment key={featureType.type}>
                      <TableRow className="bg-[#232326]">
                        <TableCell colSpan={2} className="w-10/12 text-[#FEFC00] font-bold text-base py-3 px-6 py-4">{featureType.type}</TableCell>
                      </TableRow>
                      {featureType.features.map((feature) => (
                        <TableRow className="text-white/70" key={feature.name}>
                          <TableCell className="w-11/12 py-2 px-6 py-4">{feature.name}</TableCell>
                          <TableCell className="text-right px-6 py-4">{feature.startup ? (<CheckIcon className="h-5 w-5 text-[#FEFC00]" />) : (<MinusIcon className="h-5 w-5 text-white/30" />)}</TableCell>
                        </TableRow>
                      ))}
                    </React.Fragment>
                  ))}
                </TableBody>
              </Table>
            </section>
          </div>
        </div>
      </section>
      <footer className="w-full bg-[#FEFC00] border-t border-white/10 py-8 px-20 flex flex-col md:flex-row items-center justify-between mt-0 gap-4">
        <div className="flex items-center justify-center md:justify-start w-full md:w-auto mb-2 md:mb-0">
          <Image src="/ghost.png" alt="Ghost Logo" width={70} height={70} />
        </div>
        <nav className="flex flex-row gap-6 items-center justify-center w-full md:w-auto mb-2 md:mb-0">
          <a
            href="#"
            tabIndex={0}
            aria-label="Docs"
            className="text-[#1E1E1E] transition-colors font-inter text-sm font-bold outline-none focus:text-white"
            onClick={() => { }}
            onKeyDown={event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); } }}
          >
            Docs
          </a>
          <a
            href="#"
            tabIndex={0}
            aria-label="Twitter"
            className="text-[#1E1E1E] transition-colors font-inter text-sm font-bold outline-none focus:text-white"
            onClick={() => { }}
            onKeyDown={event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); } }}
          >
            Twitter
          </a>
          <a
            href="#"
            tabIndex={0}
            aria-label="Telegram"
            className="text-[#1E1E1E] transition-colors font-inter text-sm font-bold outline-none focus:text-white"
            onClick={() => { }}
            onKeyDown={event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); } }}
          >
            Telegram
          </a>
        </nav>
        <div className="text-[#1E1E1E]/60 text-xs font-inter w-full md:w-auto text-center md:text-right">© {new Date().getFullYear()} Ghost. All rights reserved.</div>
      </footer>
    </div>
  )
}

