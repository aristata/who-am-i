const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="container mx-auto max-w-3xl py-8 transition duration-500 bg-neutral-50 text-neutral-800 dark:bg-neutral-900  dark:text-neutral-100">
        {children}
      </div>
    </>
  )
}

export default Container
