import React from 'react'

const Widget = () => {
  return (
    <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl shadow-lg hover:border-slate-700 transition-all duration-300 group">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-slate-200 text-sm tracking-wide group-hover:text-amber-400 transition-colors">
          Widget Title
        </h3>
        <span className="w-2 h-2 rounded-full bg-amber-400/80"></span>
      </div>
      <p className="text-xs text-slate-400 leading-relaxed">
        Widget Content description goes here.
      </p>
    </div>
  )
}

export default Widget