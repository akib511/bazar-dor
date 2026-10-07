import Image from "next/image";
import logo from "../../public/Assets/logo-icon.png";
const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="mx-auto w-full max-w-[1200px] px-8 py-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Logo */}
          <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-green-600">
            <Image
              src={logo}
              alt="Bangla News 24"
              width={50}
              height={50}
              priority
              className="h-full w-full object-contain p-2 brightness-0 invert contrast-150"
            />
          </div>

          {/* Title + Date */}
          <div>
            <h1 className="text-2xl font-bold text-gray-900">বাজার দর</h1>

            <p className="mt-1 text-sm text-gray-500">{date}</p>
          </div>
        </div>

        {/* Right Side - Buttons */}
        <div className="flex items-center gap-3">
          <button className="rounded-xl border border-green-600 bg-white px-5 py-2.5 text-sm font-semibold text-green-600 transition-all duration-200 hover:bg-green-600 hover:text-white active:scale-95">
            সাইন ইন
          </button>
          <button className="rounded-xl bg-green-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-green-700 hover:shadow-lg active:scale-95">
            সাইন আপ
          </button>

         
        </div>
      </div>
    </header>
  );
};

export default Header;
