const FocusRing = () => {
  return (
    <div>
      <div className="bg-neutral-900 h-screen w-full flex items-center justify-center">
        <div className="text-gray-600 text-sm font-sans-serif">
          <div className="flex gap-0.5 mb-0.5">
            <button className="bg-white rounded-tl px-2 focus:outline-none focus:ring-1 focus:ring-red-500 focus:ring-offset-1">
              pnpm
            </button>
            <button className="bg-white px-2 focus:outline-none focus:ring-1 focus:ring-red-500 focus:ring-offset-1 ">
              npm
            </button>
            <button className="bg-white px-2 focus:outline-none focus:ring-1 focus:ring-red-500 focus:ring-offset-1 ">
              yarn
            </button>
            <button className="bg-white rounded-tr px-2 py-1 focus:outline-none focus:ring-1 focus:ring-red-500 focus:ring-offset-1">
              bun
            </button>
          </div>
          <div>
            <button className="bg-white rounded-br rounded-bl rounded-tr px-2 py-1 focus:outline-none focus:ring-1 focus:ring-red-500 focus:ring-offset-1  text-left">
              pnpm dlx shadcn@latest add @lucide-animated/block
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FocusRing;
