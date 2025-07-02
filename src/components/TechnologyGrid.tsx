import { ReactNode } from 'react'

type TechnologyItem = {
  icon: ReactNode
  label: string
}

export default function TechnologyGrid({ items }: { items: TechnologyItem[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white/10 backdrop-blur-md rounded-xl p-6 flex flex-col items-center justify-center text-white shadow-md hover:scale-105 transition"
        >
          <div className="text-4xl mb-4">{item.icon}</div>
          <div className="text-sm sm:text-base font-semibold text-center">{item.label}</div>
        </div>
      ))}
    </div>
  )
}
