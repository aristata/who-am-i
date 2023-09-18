const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="container mx-auto max-w-3xl py-8 transition duration-500 bg-white text-neutral-800 dark:bg-[#111111]  dark:text-neutral-100">
        {children}
      </div>
    </>
  )
}

export default Container
