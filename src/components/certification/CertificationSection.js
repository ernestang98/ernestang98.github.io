import CertItem from "./CertItem";
import Marquee from 'react-fast-marquee';
import oscp from "../../images/oscp.png";
import oswe from "../../images/oswe.png";
import osed from "../../images/osed.png";
import burp from "../../images/burp.svg";
import chfi from "../../images/chfi.png";
import ceh from "../../images/ceh.png";
import ccp from "../../images/ccp.png";

function CertificationSection() {

  const data = [
    {
      "id": 1,
      "name": "OffSec Certified Professional",
      "badge": oscp,
      "url": "https://www.credential.net/0caa3e6d-db56-4110-932a-0eb1b48513f8#gs.01v6qq"
    },
    {
      "id": 2,
      "name": "OffSec Web Expert",
      "badge": oswe,
      "url": "https://www.credential.net/93b5b0c1-f02f-4c92-848d-75b48fbcee46"
    },
    {
      "id": 3,
      "name": "OffSec Exploit Developer",
      "badge": osed,
      "url": "https://www.credential.net/2c2d9c47-53c8-4b3e-bf3a-46a25d6f0e0b#gs.01v6n3"
    },
    {
      "id": 4,
      "name": "Burp Suite Certified Practitioner",
      "badge": burp,
      "url": "https://portswigger.net/web-security/e/c/3efcd21ef203e55d"
    },
    {
      "id": 5,
      "name": "Computer Hacking Forensic Investigator",
      "badge": chfi,
      "url": "https://aspen.eccouncil.org/VerifyBadge?&type=certification&a=vtQYqbmJ6LJ6bh0X/eSiQs0/x6D285mTdk+SmuLvvHQ="
    },
    {
      "id": 6,
      "name": "Certified Ethical Hacker",
      "badge": ceh,
      "url": "https://aspen.eccouncil.org/VerifyBadge?type=certification&a=s9UWSIkgOw4RSNF/Mw7OE6rn/47CWMm6RchbKHZqRkY="
    },
    {
      "id": 7,
      "name": "Certified Cloud Practitioner",
      "badge": ccp,
      "url": "https://www.credly.com/badges/d88cd3b7-f820-4388-a455-5dd59d8c3fbd"
    }
  ]

  return (
    <>
      <div className="dark:bg-gray-900 bg-[#ffffff] w-full h-full" id="Certifications">
        <div className="flex flex-col-reverse items-center justify-between px-8 pt-8 pb-16 md:flex-row sm:px-16">
          <div className=" flex flex-col space-y-3 sm:space-y-6 items-start text-[#5C637C] xl:border-l-8 xl:pl-8 xl:border-gray-200 py-8">
            <h4 className=" mb-8 text-3xl font-extrabold md:flex sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              Certifications
            </h4>
            <div className=" flex flex-row items-center">
              <div className="relative">
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
