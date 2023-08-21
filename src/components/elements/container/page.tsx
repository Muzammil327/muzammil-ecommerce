

export default function Container({
  children,
}: {
  children: React.ReactNode
}) {
  return (
 
       <div className="container mx-auto xl:px-12 lg:px-8 md:px-5 px-2">
       {children}
       </div>
    
  )
}
