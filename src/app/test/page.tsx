const Test = () => {
  return (
    <div className="mt-30 mx-auto  max-w-4xl">
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <h1 className="text-3xl ">Test</h1>
        </div>
        <div className=" col-span-9 h-screen w-full  bg-pink-100 p-6">
          <img
            className="h-full w-full object-contain"
            src="http://localhost:3013/_next/image?url=https%3A%2F%2Flive.staticflickr.com%2F65535%2F53558275729_1eefbcef0d_k.jpg&w=640&q=80"
            alt="random"
          />
        </div>
      </div>
    </div>
  )
}

export default Test
