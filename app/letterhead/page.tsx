// bg-{color}-{share} 100-900 background colors and shades
export default function background() {
  return (
    <>
      <div className="text-center bg-gray-700 w-6/6 h-32  font-black text-white text-4xl">
        header{' '}
      </div>
      <div className="bg-gray-300 h-64  text-center ">body</div>
      <div className="flex">
  <div className="bg-gray-300 h-54 m-4 text-center text-blue-800 font-black text-2xl uppercase">
    body
  </div>
  <div className="bg-gray-300 h-auto m-4 text-center font-normal text-blue-900 text-lg p-2 flex-1">
    <p className="mb-2">
      2. Using Tailwind CSS Classes: Now that you have Tailwind set up, you can
      start using its utility classes in your components. Here are some examples:
    </p>
    
    <p className="mb-2">
      <strong>Background Colors:</strong> You can use classes like <code>bg-gray-900</code>,
      <code>bg-red-500</code>, etc., to set background colors. The numbers represent
      shades, with 100 being the lightest and 900 being the darkest.
    </p>
    <p className="mb-2">
      <strong>Text Colors:</strong> Use classes like <code>text-white</code>, <code>text-gray-800</code>, etc.,
      to set text colors.
    </p>
    <p className="mb-2">
      <strong>Padding and Margin:</strong> Use classes like <code>p-4</code> for padding and <code>m-2</code> for
      margin.
    </p>
    <p className="mb-2">
      <strong>Flexbox and Grid:</strong> Tailwind provides utilities for flexbox and
      grid layouts, such as <code>flex</code>, <code>flex-row</code>, <code>grid</code>, <code>grid-cols-3</code>, etc.
    </p>
  </div>
</div>


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
