const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="container mx-auto bg-neutral-300">{children}</div>
    </>
  )
}

export default Container
