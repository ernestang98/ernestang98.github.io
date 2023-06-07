import TimeLineItem from "./TimeLineItem2";
function ExperienceSection() {
  const data = {
    "professionalexp": [
      {
        "id": 1,
        "company": "ByteDance",
        "position": "Software Engineer",
        "date": "Jan 2023 - May 2023",
        "description": [
          "Worked on an internal Kubernetes as a Service platform",
          "Performed backend development work using Golang and PostgreSQL",
          "Performed frontend development work using React (TypeScript) and Redux",
          "Deployed on Kubernetes using Jenkins, Helm, Kustomize, and ArgoCD",
        ]
      },
      {
        "id": 2,
        "company": "Ensign InfoSecurity",
        "position": "Cyber Security Consultant (Red Team)",
        "date": "Aug 2022 - Dec 2022",
        "description": [
          "Assisted in Vulnerability Assessment and Penetration Testing projects (Black Box)",
          "Assisted in Source Code Review projects (White Box)",
          "Assisted in Red Teaming projects",
          "Assisted in drafting reports and conducting post reviews",
          "Assisted in Ensign's OSCP Bootcamp",
          "Assisted in developing software to manage Ensign's Cyber Range",
          "Assisted in developing an Operational Technology CTF Challenge"
        ]
      },
      {
        "id": 3,
        "company": "Centre of Strategic Infocomm Technologies",
        "position": "Software Engineer",
        "date": "May 2022 - July 2022",
        "description": [
          "Worked on an internal procurement platform",
          "Performed backend development work using Spring Boot, ElasticSearch and MongoDB",
          "Performed frontend development work using React (TypeScript) and Redux",
          "Deployed on Kubernetes using Gitlab and VMWare Tanzu",
        ]
      },
      {
        "id": 4,
        "company": "Government Technology Agency",
        "position": "Software Engineer",
        "date": "May 2021 - July 2021",
        "description": [
          "Worked on the national notification service in Singapore",
          "Performed backend development work using Spring Boot and MySQL",
          "Deployed on Elastic Kubernetes Service on Amazon Web Services", 
          "Performed quality assurance work using Kibana, Grafana and Jaegar",
          "Developed mock servers and load testing tools to enhanced testing infrasturcture",
          "Assisted in service migration across different Kubernetes clusters",
        ]
      },
      {
        "id": 5,
        "company": "Beep Technologies",
        "position": "Software Engineer",
        "date": "May 2020 - July 2020",
        "description": [
          "Venture-backed startup building the universal low-code IOT automation platform for any business",
          "Worked on Beep's suite of custom Point-of-Sale (POS) software",
          "Performed mobile development (Android) work using Kotlin, Java, and C++", 
          "Performed embedded development work using Kotlin and Java",
        ]
      },
    ]
  }
  return (
    <>
      <div className="dark:bg-gray-900 bg-[#ffffff] w-full" id="Experience">
        <div className="flex flex-col-reverse items-center justify-between px-8 pt-8 pb-16 md:flex-row sm:px-16">
          <div className="flex flex-col space-y-3 sm:space-y-6 items-start text-[#5C637C] xl:border-l-8 xl:pl-8 xl:border-gray-200 py-8">
            <h4 className=" mb-8 text-3xl font-extrabold md:flex sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              Experience
            </h4>
            <div className=" flex flex-col items-center">
              <div className="relative">
                <div
                  className="border-r-4  border-gray-800 absolute h-full top-0"
                  style={{ left: "9px" }}
                ></div>
                <ul className="list-none m-0 p-0 border-gray-100">
                  {data.professionalexp.map((exp, i) => (
                    <TimeLineItem
                      key={exp.id}
                      company={exp.company}
                      position={exp.position}
                      date={exp.date}
                      description={exp.description}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExperienceSection;
