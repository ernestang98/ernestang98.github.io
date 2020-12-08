const noteNTU = {
  "key": Math.floor(Math.random() * Math.pow(10, 20)),
  "Institution": "Nanyang Technological University",
  "Location": "Singapore, SG",
  "Enrollment": "August 2019 - PRESENT",
  "Degree": {
    1: "Bachelor of Business (Specialisation in Business Analytics)",
    2: "Bachelor of Engineering, Computer Science (Specialisation in Artificial Intelligence)"
  },
  "Modules": {
    1: {
      1: "Organisational Behavior",
      2: "Communication Studies",
      3: "Business Law",
      4: "Management & Financial Accounting",
      5: "Introduction to Accounting Data Analytics & Visualisation (Tableau, Excel)",
      6: "Designing & Developing Databases (UML, MongoDB, mySQL)",
      7: "Statistics & Analysis (R)",
      8: "Visual & Predictive Analytics (R)",
    },
    2: {
      1: "Discrete Mathematics",
      2: "Engineering Mathematics",
      3: "Digital Logic (Verilog)",
      4: "Computer Organisation & Architecture (C, Arduino)",
      5: "Computer Graphics and Visualisation (VRML)",
      6: "Object Oriented Programming (Java, C++, UML)",
      7: "Algorithms (Python, Java, C)",
      8: "Data Structures (C)",
      9: "Introduction to Data Science and Artificial Intelligence (Python, Pandas)",
      10: "Introduction to Computational Thinking (Python, Raspberry Pi, Sense HAT, Tkinter)",
    }
  }
}
const noteOthers = {
  "key": Math.floor(Math.random() * Math.pow(10, 20)),
  "Institution": "Others (External Vendors)",
  "Location": "Singapore, SG",
  "Enrollment": "April 2020 - PRESENT",
  "Degree": {
    1: "EC-Council",
    2: "Smartcademy",
    3: "KnowledgeHut",
    4: "Freecodecamp (Click <a href='https://www.freecodecamp.org/ernestang98' target='_blank'>here</a> to view profile)",
    5: "Coursera (Click <a href='https://www.coursera.org/user/661b2ed42b7548b3b256821988091dad' target='_blank'>here</a> to view profile)",
    6: "Codecademy (Click <a href='https://www.codecademy.com/profiles/ernieang6887927217' target='_blank'>here</a> to view profile)"
  },
  "Modules": {
    1: {
      1: "Certified Ethical Hacker"
    },
    2: {
      1: "Intro to Web App Development",
      2: "React Native 101"
    },
    3: {
      1: "Web Development Using React"
    },
    4: {
      1: "Responsive Web Design Certification",
      2: "JavaScript Algorithms and Data Structures Certification",
    },
    5: {
      1: "IT Automation with Python Certification - Google",
      2: "IT Support Certification - Google",
      3: "Data Science Specialization - Johns Hopkins University",
      4: "Full Stack Web Development with React - The Hong Kong University of Science and Technology",
      5: "Open Source Software Development, Linux, Git - The Linux Foundation",
      6: "Building Containerized Applications on AWS - Amazon Web Services",
    },
    6: {
      1: "PHP",
      2: "React",
      3: "JavaScript",
      4: "CSS",
      5: "SQL",
      6: "C++",
      7: "HTML",
      8: "Python",
    }
  }
}
const noteE = {
  "key": Math.floor(Math.random() * Math.pow(10, 20)),
  "Institution": "Work Experience",
  "Location": "Singapore, SG",
  "Enrollment": "April 2019 - PRESENT",
  "Degree": {

  },
  "Modules": {

  }
}

const dbName = "Portfolio DB";

async function doesDbExist(dbName) {
  var result = await indexedDB.databases();
  var dbFound = false;
  for (var i = 0; i < result.length && !dbFound; i++) {
    dbFound = result[i].name === dbName;
  }
  return dbFound;
}

const req = indexedDB.open("Portfolio DB", 1)

req.onupgradeneeded = e => {
  const db = e.target.result;
  db.createObjectStore("info", {keyPath: "key"})
}
req.onsuccess = e => {
  const db = e.target.result;
  const openInfo = db.transaction("info", "readwrite")
  const writeInfo = openInfo.objectStore("info")

  let exist = doesDbExist(dbName);
  let countReq = writeInfo.count();
  countReq.onsuccess = function() {
    if ((!countReq.result) && exist) {
      writeInfo.add(noteNTU)
      writeInfo.add(noteOthers)
      writeInfo.add(noteE)
    }
  }
}

function numKeys(o) {
  return Object.keys(o).length;
}

const nextReq = indexedDB.open("Portfolio DB", 1)
nextReq.onsuccess = e => {
  const db = e.target.result;
  const readTable = db.transaction("info", "readonly")
  const readInfo = readTable.objectStore("info")
  const allRecords = readInfo.getAll();
  allRecords.onsuccess = function() {
    let data = allRecords.result;
    $(function() {
      // for each school & its degree
      for (let i = 0; i < data.length; i++) {
        const school = data[i]["Institution"]
        const loc = data[i]["Location"]
        const enroll = data[i]["Enrollment"]
        const degree = data[i]["Degree"]
        const modules = data[i]["Modules"]
        const length = numKeys(degree)

        if (data[i]["Institution"] === "Nanyang Technological University") {
          // num of degrees
          for (let k = 1; k <= length; k++) {
            let size = Object.keys(modules[k]).length;
            // num of modules
            for (let o = 1; o <= size; o++) {
              $('<p>' + modules[k][o] + '</p>').prependTo(".inner");
            }
            $('<p><strong>' + degree[k] + '</strong></p>').prependTo(".inner");
          }

          $('<p class="text-center">' + loc + ', ' + enroll + '</p>').prependTo(".innerS");
          $('<p class="text-center">' + school + '</p>').prependTo(".innerS");
        }
        // else if (data[i]["Institution"] === "Others (External Vendors)") {
        //   for (let k = 1; k <= length; k++) {
        //     let size = Object.keys(modules[k]).length;
        //     // num of modules
        //     for (let o = 1; o <= size; o++) {
        //       console.log(modules[k][o])
        //       $('<p>' + modules[k][o] + '</p>').prependTo(".inner2");
        //     }
        //     $('<p><strong>' + degree[k] + '</strong></p>').prependTo(".inner2");
        //   }
        //
        //   $('<p class="text-center">' + loc + ', ' + enroll + '</p>').prependTo(".innerS2");
        //   $('<p class="text-center">' + school + '</p>').prependTo(".innerS2");
        // }
      }
    });
  };
}


// Some random colors
// const colors = ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"];
//
// const numBalls = 50;
// const balls = [];
//
// for (let i = 0; i < numBalls; i++) {
//   let ball = document.createElement("div");
//   ball.classList.add("ball");
//   ball.style.background = colors[Math.floor(Math.random() * colors.length)];
//   ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
//   ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
//   ball.style.transform = `scale(${Math.random()})`;
//   ball.style.width = `${Math.random()}em`;
//   ball.style.height = ball.style.width;
//   balls.push(ball);
//   document.body.append(ball);
// }
//
// // Keyframes
// balls.forEach((el, i, ra) => {
//   let to = {
//     x: Math.random() * (i % 2 === 0 ? -11 : 11),
//     y: Math.random() * 12
//   };
//
//   let anim = el.animate(
//       [
//         { transform: "translate(0, 0)" },
//         { transform: `translate(${to.x}rem, ${to.y}rem)` }
//       ],
//       {
//         duration: (Math.random() + 1) * 2000, // random duration
//         direction: "alternate",
//         fill: "both",
//         iterations: Infinity,
//         easing: "ease-in-out"
//       }
//   );
// });

var boxes = document.getElementById("boxes");

var loading = document.getElementById("modal-loading");

var content = document.getElementById("modal-content");

var modal = document.getElementById("myModal");

var modal2 = document.getElementById("myModal2");

var modal3 = document.getElementById("myModal3");

var modal4 = document.getElementById("myModal4");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

var btn2 = document.getElementById("myBtn2");

var btn3 = document.getElementById("myBtn3");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var span2 = document.getElementsByClassName("close")[1];

var span3 = document.getElementsByClassName("close")[2];

var in_dom = document.body.contains(boxes);

var observer = new MutationObserver(function(mutations) {
  if (document.body.contains(boxes)) {
    if (!in_dom) {
      console.log("element inserted");
    }
    in_dom = true;
  } else if (in_dom) {
    in_dom = false;
    console.log("element removed");
    btn.onclick = function() {
      intervals[1] = setTimeout(function() {
        modal2.style.display = "block";
      }, 500)
    }
    btn2.onclick = function() {
      intervals[3] = setTimeout(function() {
        modal3.style.display = "block";
      }, 500)
    }
    btn3.onclick = function() {
      intervals[4] = setTimeout(function() {
        modal4.style.display = "block";
      }, 500)
    }
  }
});

observer.observe(document.body, {childList: true});

var intervals = {};

// When the user clicks the button, open the modal
btn.onclick = function() {
  intervals[0] = setTimeout(function() {
    modal.style.display = "block";
  }, 500)

  intervals[1] = setTimeout(function() {
    modal2.style.display = "block";
  }, 3000)

  intervals[2] = setTimeout(function() {
    $('#boxes').remove();
    $('#loading').remove();
    $('#myModal').remove();
  }, 3000)
}

btn2.onclick = function() {
  intervals[0] = setTimeout(function() {
    modal.style.display = "block";
  }, 500)

  intervals[3] = setTimeout(function() {
    modal3.style.display = "block";
  }, 3000)

  intervals[2] = setTimeout(function() {
    $('#boxes').remove();
    $('#loading').remove();
    $('#myModal').remove();
  }, 3000)
}

btn3.onclick = function() {
  intervals[0] = setTimeout(function() {
    modal.style.display = "block";
  }, 500)

  intervals[4] = setTimeout(function() {
    modal4.style.display = "block";
  }, 3000)

  intervals[2] = setTimeout(function() {
    $('#boxes').remove();
    $('#loading').remove();
    $('#myModal').remove();
  }, 3000)
}

const clearAll = function() {
  clearInterval(intervals[0])
  clearInterval(intervals[1])
  clearInterval(intervals[2])
  clearInterval(intervals[3])
  clearInterval(intervals[4])
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal2.style.display = "none";
  clearAll()
}

span2.onclick = function() {
  modal3.style.display = "none";
  clearAll()
}

span3.onclick = function() {
  modal4.style.display = "none";
  clearAll()
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modal2) {
    modal2.style.display = "none";
    clearAll()
  }
  if (event.target === modal) {
    modal.style.display = "none";
    clearAll()
  }
}

loading.onclick = function() {
  modal.style.display = "none";
  clearAll()
}
