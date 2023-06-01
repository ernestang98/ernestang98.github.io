import CertItem from "./CertItem";
import data from "../utils/data.json";
import Marquee from 'react-fast-marquee';
import oscp from "../images/oscp.png";
import oswe from "../images/oswe.png";
import osed from "../images/osed.png";
import burp from "../images/burp.svg";
import chfi from "../images/chfi.png";
import ceh from "../images/ceh.png";
import ccp from "../images/ccp.png";

function CertificationSection() {

  const data = [
    {
      "id": 1,
      "name": "OffSec Certified Professional",
      "badge": oscp,
      "url": "https://airbnb-nextjs-gamma.vercel.app/"
    },
    {
      "id": 2,
      "name": "OffSec Web Expert",
      "badge": oswe,
      "url": "https://airbnb-nextjs-gamma.vercel.app/"
    },
    {
      "id": 3,
      "name": "OffSec Exploit Developer",
      "badge": osed,
      "url": "https://airbnb-nextjs-gamma.vercel.app/"
    },
    {
      "id": 4,
      "name": "Burp Suite Certified Practitioner",
      "badge": burp,
      "url": "https://airbnb-nextjs-gamma.vercel.app/"
    },
    {
      "id": 5,
      "name": "Computer Hacking Forensic Investigator",
      "badge": chfi,
      "url": "https://airbnb-nextjs-gamma.vercel.app/"
    },
    {
      "id": 6,
      "name": "Certified Ethical Hacker",
      "badge": ceh,
      "url": "https://airbnb-nextjs-gamma.vercel.app/"
    },
    {
      "id": 7,
      "name": "Certified Cloud Practitioner",
      "badge": ccp,
      "url": "https://airbnb-nextjs-gamma.vercel.app/"
    }
  ]

  return (
    <>
      <div className="dark:bg-gray-900 bg-[#ffffff] w-full" id="Certifications">
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
                    <Marquee direction="left" speed={30} autoFill={true} pauseOnHover={true}>
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
