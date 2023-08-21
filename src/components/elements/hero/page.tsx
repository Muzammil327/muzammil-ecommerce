

export default function Hero({head}:any) {
  return (
    <div className="bg-slate-200 lg:py-40 md:py-36 py-28 w-full flex items-center justify-center">
        <h1 className="text-black text-2xl md:text-4xl font-bold">{head}</h1>
    </div>
  )
}
