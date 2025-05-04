"use client"

import { Copy } from 'lucide-react'
import { toast } from 'sonner'

const macCommand = 'xattr -c /Applications/Ghost.app'

const handleCopyCommand = () => {
    navigator.clipboard.writeText(macCommand)
    toast('Command copied!')
}

const CopyMacCommand = () => (
    <div className="mt-12 max-w-4xl mx-auto flex flex-col gap-3 bg-[#232326] border-l-4 border-yellow-500 shadow-lg rounded-lg px-6 py-5 relative">
        <div className="flex items-start gap-3">
            <div className="flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01" /></svg>
            </div>
            <div className="flex-1">
                <span className="font-semibold text-white text-base tracking-wider">Note for Mac users:</span>
                <span className="block text-white/80 text-sm font-inter mt-1"> After installing, run the following command in Terminal to remove the "app is damaged and can't be opened" warning:</span>
                <div className="flex items-center gap-2 mt-5">
                    <div className="bg-black/60 rounded-md px-3 py-1 text-yellow-200 font-mono text-md tracking-wider select-all" tabIndex={0} aria-label={`Copy command: ${macCommand}`}>{macCommand}</div>
                    <button
                        className="ml-1 bg-yellow-500 hover:bg-yellow-400 text-black rounded-md p-2 transition-colors focus-visible:ring-2 focus-visible:ring-yellow-500 flex items-center"
                        aria-label="Copy command"
                        tabIndex={0}
                        type="button"
                        onClick={handleCopyCommand}
                    >
                        <Copy className="w-4 h-4" />
                    </button>
                </div>
                <div className="mt-4 text-white/80 text-sm font-inter">
                    <span className="font-semibold text-yellow-300 font-inter">Still seeing </span>
                    <span className="font-semibold font-inter">“macOS cannot verify that this app is free from malware”</span>
                    <span className="font-inter">? Open <span className="font-semibold font-inter">System Settings</span>, click <span className="font-semibold font-inter">Privacy & Security</span>, scroll down and click the <span className="font-semibold font-inter">Open Anyway</span> button to confirm your intent to open or install the app. </span>
                    <a
                        href="https://macpaw.com/how-to/fix-macos-cannot-verify-that-app-is-free-from-malware"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-yellow-300 hover:text-yellow-400 underline ml-1"
                        aria-label="Learn more about fixing macOS cannot verify that this app is free from malware"
                        tabIndex={0}
                    >
                        Learn more
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 7l-10 10M17 7H7m10 0v10" /></svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
)

export default CopyMacCommand 