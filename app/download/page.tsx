'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Copy } from 'lucide-react'
import { toast } from 'sonner'
import CopyMacCommand from '../../components/CopyMacCommand'

const windowsDownload = {
    label: 'Windows',
    description: 'Download for Windows 10/11',
    link: 'https://github.com/rayjaywolf/ghost/releases/download/v1.0.0/Ghost.Setup.1.2.0.exe',
    button: 'Download .exe',
}

const macDownloads = [
    {
        label: 'Mac (Intel)',
        link: 'https://github.com/rayjaywolf/ghost/releases/download/v1.0.0/Ghost-1.2.0.dmg',
        button: 'Download .dmg (Intel)',
    },
    {
        label: 'Mac (Apple Silicon/ARM)',
        link: 'https://github.com/rayjaywolf/ghost/releases/download/v1.0.0/Ghost-1.2.0-arm64.dmg',
        button: 'Download .dmg (ARM)',
    },
]

const macDisclaimer = 'After installing, run: xattr -c /Applications/Ghost.app in Terminal to remove the "app is damaged and can\'t be opened" warning. This is required because macOS Gatekeeper may quarantine apps downloaded from the internet.'

const macCommand = 'xattr -c /Applications/Ghost.app'

const handleCopyCommand = () => {
    navigator.clipboard.writeText(macCommand)
    toast('Command copied!')
}

const Header = () => (
    <header className="flex items-center justify-between px-4 md:px-16 py-3 bg-[#FEFC00]">
        <div className="flex items-center">
            <Link href="/">
                <Image src="/ghost.png" alt="Ghost Logo" width={70} height={70} className="cursor-pointer" />
            </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-lg font-bold">
            <a href="/#features" className=" tracking-wider text-[#1E1E1E] hover:opacity-80 cursor-pointer">Features</a>
            <a href="/#shortcuts" className=" tracking-wider text-[#1E1E1E] hover:opacity-80 cursor-pointer">Shortcuts</a>
            <a href="/#pricing" className=" tracking-wider text-[#1E1E1E] hover:opacity-80 cursor-pointer">Pricing</a>
        </nav>

        <div className="flex items-center gap-4">
            <Link href="/download">
                <button className="flex items-center gap-2 md:gap-3 px-3 py-1.5 md:px-4 md:py-2 bg-[#1E1E1E] text-white rounded-lg hover:opacity-90 font-bold text-sm md:text-base">
                    Download
                    <span className="hidden sm:flex gap-1 md:gap-2 items-center">
                        <svg className="w-3 h-3 md:w-4 md:h-4" viewBox="0 0 19.132 19.132" fill="none">
                            <g>
                                <g>
                                    <path style={{ fill: 'currentColor' }} d="M9.172,9.179V0.146H0v9.033H9.172z"></path>
                                    <path style={{ fill: 'currentColor' }} d="M19.132,9.179V0.146H9.959v9.033H19.132z"></path>
                                    <path style={{ fill: 'currentColor' }} d="M19.132,18.986V9.955H9.959v9.032H19.132z"></path>
                                    <path style={{ fill: 'currentColor' }} d="M9.172,18.986V9.955H0v9.032H9.172z"></path>
                                </g>
                            </g>
                        </svg>
                        <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                        </svg>
                    </span>
                </button>
            </Link>
        </div>
    </header>
)

const Footer = () => (
    <footer className="w-full bg-[#FEFC00] border-t border-white/10 py-6 md:py-8 px-4 md:px-20 flex flex-col md:flex-row items-center justify-between mt-0 gap-4">
        <div className="flex items-center justify-center md:justify-start w-full md:w-auto mb-4 md:mb-0">
            <Image src="/ghost.png" alt="Ghost Logo" width={60} height={60} />
        </div>
        <nav className="flex flex-row gap-4 md:gap-6 items-center justify-center w-full md:w-auto mb-4 md:mb-0">
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
                href="https://x.com/GhostScreenDev"
                target="_blank"
                tabIndex={0}
                aria-label="Twitter"
                className="text-[#1E1E1E] transition-colors font-inter text-sm font-bold outline-none"
            >
                Twitter
            </a>
            <a
                href="https://t.me/ghostscreendev"
                target="_blank"
                tabIndex={0}
                aria-label="Telegram"
                className="text-[#1E1E1E] transition-colors font-inter text-sm font-bold outline-none"
            >
                Telegram
            </a>
        </nav>
        <div className="text-[#1E1E1E]/60 text-xs font-inter w-full md:w-auto text-center md:text-right">© {new Date().getFullYear()} Ghost. All rights reserved.</div>
    </footer>
)

const WindowsIcon = () => (
    <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 19.132 19.132" fill="none">
        <g>
            <g>
                <path style={{ fill: '#fff' }} d="M9.172,9.179V0.146H0v9.033H9.172z"></path>
                <path style={{ fill: '#fff' }} d="M19.132,9.179V0.146H9.959v9.033H19.132z"></path>
                <path style={{ fill: '#fff' }} d="M19.132,18.986V9.955H9.959v9.032H19.132z"></path>
                <path style={{ fill: '#fff' }} d="M9.172,18.986V9.955H0v9.032H9.172z"></path>
            </g>
        </g>
    </svg>
)

const MacIcon = () => (
    <svg className="w-12 h-12 md:w-16 md:h-16" viewBox="0 0 24 24" fill="#fff">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
)

const DownloadPage = () => (
    <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex flex-col items-center justify-center flex-1 py-10 md:py-12 px-4 bg-[#1e1e1e]">
            <h1 className="text-3xl md:text-5xl font-bold tracking-wider text-white mb-3 md:mb-4 text-center">Download Ghost</h1>
            <p className="text-base md:text-lg text-white/70 font-inter mb-8 md:mb-10 text-center max-w-2xl">Choose your platform and follow the instructions to get started with Ghost.</p>
            <div className="w-full flex flex-col md:flex-row gap-4 items-center justify-center md:gap-12">
                {/* Windows Card */}
                <div className="flex items-start gap-6 bg-[#232326] border border-white/10 rounded-2xl px-8 py-8 w-full md:w-1/2">
                    <div className="mt-1">
                        <WindowsIcon />
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                        <div className="text-xl md:text-2xl font-bold text-white mb-1">{windowsDownload.label}</div>
                        <div className="text-white/70 mb-4 text-sm md:text-base">{windowsDownload.description}</div>
                        <a
                            href={windowsDownload.link}
                            tabIndex={0}
                            aria-label={windowsDownload.button + ' for Windows'}
                            className="inline-block"
                        >
                            <button className="px-5 py-2 md:px-6 bg-[#FEFC00] text-[#1E1E1E] rounded-full font-bold hover:opacity-90 transition-opacity tracking-wide focus:outline-none focus:ring-2 focus:ring-[#1E1E1E] text-sm md:text-base">
                                {windowsDownload.button}
                            </button>
                        </a>
                    </div>
                </div>
                {/* Mac Card */}
                <div className="flex items-start gap-6 bg-[#232326] border border-white/10 rounded-2xl px-8 py-8 w-full md:w-1/2">
                    <div className="mt-1">
                        <MacIcon />
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                        <div className="text-xl md:text-2xl font-bold text-white mb-1">Mac</div>
                        <div className="text-white/70 mb-4 text-sm md:text-base">Download for macOS (Intel & Apple Silicon/ARM)</div>
                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center sm:justify-start">
                            {macDownloads.map((d) => (
                                <a
                                    key={d.label}
                                    href={d.link}
                                    tabIndex={0}
                                    aria-label={d.button + ' for ' + d.label}
                                    className="inline-block"
                                >
                                    <button className="px-5 py-2 md:px-6 bg-[#FEFC00] text-[#1E1E1E] rounded-full font-bold hover:opacity-90 transition-opacity tracking-wide focus:outline-none focus:ring-2 focus:ring-[#1E1E1E] text-sm md:text-base w-full sm:w-auto">
                                        {d.button}
                                    </button>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <CopyMacCommand />
        </main>
        <Footer />
    </div>
)

export default DownloadPage 