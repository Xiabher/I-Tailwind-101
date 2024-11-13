// bg-{color}-{share} 100-900 background colors and shades
export default function background() {
  return (
    <>
      <div className="text-center bg-gray-700 w-6/6 h-32 m-4 font-black text-white text-4xl">
        header{' '}
      </div>
      <div className="bg-gray-300 h-64 m-4 text-center ">body</div>

      <div className="text-center bg-gray-600 h-33 font-black text-white text-3xl p-2">
        footer
      </div>
      <div className=" flex ">
        <div className="bg-blue-100 w-20 h-20"></div>
        <div className="bg-blue-200 w-20 h-20"></div>
        <div className="bg-blue-300 w-20 h-20"></div>
        <div className="bg-blue-400 w-20 h-20"></div>
        <div className="bg-blue-500 w-20 h-20"></div>
        <div className="bg-blue-600 w-20 h-20"></div>
        <div className="bg-blue-700 w-20 h-20"></div>
        <div className="bg-blue-800 w-20 h-20"></div>
        <div className="bg-blue-900 w-20 h-20"></div>
      </div>
    </>
  );
}
