import React from 'react'

function ActionButtom() {
  return (
    <a className="fixed bottom-8 right-8 bg-secondary-container text-on-secondary-container p-4 rounded-full shadow-[0px_20px_40px_rgba(21,66,18,0.06)] flex items-center justify-center hover:scale-110 transition-transform z-50 group" href="#donate">
        <span className="material-symbols-outlined text-3xl" data-weight="fill">volunteer_activism</span>
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 whitespace-nowrap font-bold uppercase tracking-widest text-xs">Donate Now</span>
      </a>
  )
}

export default ActionButtom