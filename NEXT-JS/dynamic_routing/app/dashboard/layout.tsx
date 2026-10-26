import React from 'react'
import Link from 'next/link'
import Widget from '../components/Widget'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans antialiased">
      {/* Navbar - Modern Glassmorphic Look */}
      <header className="w-full bg-amber-500/90 backdrop-blur-md text-slate-950 h-[60px] flex items-center px-6 font-bold shadow-md border-b border-amber-400/30 sticky top-0 z-50 justify-between">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-slate-950 inline-block animate-pulse"></span>
          <span className="tracking-wide text-lg">Dashboard</span>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-[280px] bg-slate-950 border-r border-slate-800 p-6 flex flex-col justify-between shrink-0">
          <div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4 px-3">
              Navigation
            </div>
            <ul className="space-y-1.5">
              <li>
                <Link 
                  href="/dashboard/users"
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all duration-200 group font-medium text-sm"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500 group-hover:scale-125 transition-transform"></span>
                  users
                </Link>
              </li>
              <li>
                <Link 
                  href="/dashboard/analytics"
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all duration-200 group font-medium text-sm"
                >
                  <span className="w-2 h-2 rounded-full bg-cyan-500 group-hover:scale-125 transition-transform"></span>
                  analytics
                </Link>
              </li>
              <li>
                <Link 
                  href="/dashboard/admin"
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all duration-200 group font-medium text-sm"
                >
                  <span className="w-2 h-2 rounded-full bg-amber-500 group-hover:scale-125 transition-transform"></span>
                  admin
                </Link>
              </li>
              <li>
                <Link 
                  href="/dashboard/service"
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all duration-200 group font-medium text-sm"
                >
                  <span className="w-2 h-2 rounded-full bg-indigo-500 group-hover:scale-125 transition-transform"></span>
                  service
                </Link>
              </li>
            </ul>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-8 overflow-y-auto">
          {/* Widgets Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {[1, 2, 3, 4].map((item) => (
              <div 
                key={item} 
                className="transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <Widget />
              </div>
            ))}
          </div>

          {/* Children Page Content Wrapper */}
          <div className="bg-slate-950/40 border border-slate-800/80 rounded-2xl p-6 shadow-inner">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

export default layout