

const newJudgeCard = ({name, image, atoll}) => {
    return (
       
   <div className="w-full mx-auto rtl ">
   <div className="block  w-full h-[390px] md:h-full bg-cover text-center transition-all transform">
     <div className="w-2/2 mx-auto px-6 py-6 border-0  ">
       <a className="cursor-pointer">
         <div className="mb-4  relative block w-full">
           <div className="mx-auto w-1/2 aspect-square  flex-no-grow flex-no-shrink relative">
             <img
               src={`/annual-report-2021/newjudges/${image}`}
               className="object-cover w-32 mx-auto md:w-64 h-32 md:h-64 border-2 border-[#9C893D] rounded-full"
             />
           </div>
   
           <div className="w-full  flex flex-col  items-stretch">
             <h1 className="rtl text-[#9C893D] text-3xl  font-waheed mt-4 mb-2 !leading-relaxed">
            {name}
             </h1>
             <p className="mt-2 h-24  text-gray-400">{atoll}</p>
           </div>
         </div>
       </a>
     </div>
   </div>
   </div>
    )
   }
   
   export default newJudgeCard