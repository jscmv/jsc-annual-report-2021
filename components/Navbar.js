
export default function Navbar() {
    return (
        <nav className=" w-full sticky top-0 backdrop-blur bg-white shadow-sm   bg-opacity-80 z-40 py-2 px-6">
            <div className=" flex   w-full justify-between">
            <div className="flex w-14 cursor-pointer">
          <a className="w-full" href="https://jsc.gov.mv">

              <img src="/annual-report-2021/Logo2.svg"></img>
          </a>

              </div>
              <div className="flex grow text-center items-center">
                <div className="w-full">
                  <p className="">
                  <span className="font-waheed text-[#3C6686]">އަހަރީ ރިޕޯޓް 2021</span>
                  <span className="px-2 text-[#3C6686]">•</span>
                  <span className="font-waheed text-gray-600">ހުލާސާ</span>
                 
                  </p>
                </div>
              </div>
              
              <div className="flex w-14 cursor-pointer">

              <a className="w-full" href="https://jsc.gov.mv/annual-report-2021/Annual-report-2021.pdf">
              <img src="/annual-report-2021/Book.svg"></img>
</a>
             
</div>
            </div>
      </nav>
    )
  }