const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="container mx-auto max-w-3xl py-8">{children}</div>
    </>
  )
}

export default Container
