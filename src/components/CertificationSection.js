import CertItem from "./CertItem";
import data from "../utils/data.json";
import Marquee from 'react-fast-marquee';

function CertificationSection() {

  const data = [
    {
      "id": 1,
      "name": "OffSec Certified Professional",
      "badge": "https://firasjerbi.me/_next/static/images/airbnb_clone-69559d72c0ee495fd7876479179bcba1.png",
      "url": "https://airbnb-nextjs-gamma.vercel.app/"
    },
    {
      "id": 2,
      "name": "OffSec Web Expert",
      "badge": "https://firasjerbi.me/_next/static/images/airbnb_clone-69559d72c0ee495fd7876479179bcba1.png",
      "url": "https://airbnb-nextjs-gamma.vercel.app/"
    },
    {
      "id": 3,
      "name": "OffSec Exploit Developer",
      "badge": "https://firasjerbi.me/_next/static/images/airbnb_clone-69559d72c0ee495fd7876479179bcba1.png",
      "url": "https://airbnb-nextjs-gamma.vercel.app/"
    },
    {
      "id": 4,
      "name": "Certified Ethical Hacker",
      "badge": "https://firasjerbi.me/_next/static/images/airbnb_clone-69559d72c0ee495fd7876479179bcba1.png",
      "url": "https://airbnb-nextjs-gamma.vercel.app/"
    },
    {
      "id": 3,
      "name": "Computer Hacking Forensic Investigator",
      "badge": "https://firasjerbi.me/_next/static/images/airbnb_clone-69559d72c0ee495fd7876479179bcba1.png",
      "url": "https://airbnb-nextjs-gamma.vercel.app/"
    }
  ]

  return (
    <>
      <div className="dark:bg-gray-900 bg-[#ffffff] w-full" id="Experience">
        <div className="flex flex-col-reverse items-center justify-between px-8 pt-8 pb-16 md:flex-row sm:px-16">
          <div className="flex flex-col space-y-3 sm:space-y-6 items-start text-[#5C637C] xl:border-l-8 xl:pl-8 xl:border-gray-200 py-8">
            <h4 className=" mb-8 text-3xl font-extrabold md:flex sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              Certifications
            </h4>
            <div className=" flex flex-row items-center">
              <div className="relative">
                <div
                  className=""
                  style={{ left: "9px" }}
                ></div>
                <>
                  <div className="grid grid-cols-1 gap-4">
                    <Marquee direction="left" speed={20} autoFill={true} pauseOnHover={true}>
                      {data.map((exp, i) => (
                        <CertItem
                          key={exp.id}
                          name={exp.name}
                          badge={exp.badge}
                          url={exp.url}
                        />
                      ))}
                    </Marquee>
                  </div>
                </>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CertificationSection;
