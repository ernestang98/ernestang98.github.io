const noteNTU = {
  "key": Math.floor(Math.random() * Math.pow(10, 20)),
  "Institution": "Nanyang Technological University",
  "Location": "Singapore, SG",
  "Enrollment": "August 2019 - PRESENT",
  "Degree": {
    1: "Bachelor of Business",
    2: "Bachelor of Engineering (Computer Science)"
  },
  "Modules": {
    1: {
      1: "Visual & Predictive Analytics (R)",
      2: "Statistics & Analysis (R)",
      3: "Designing & Developing Databases (UML, MongoDB, mySQL)",
      4: "Introduction to Accounting Data Analytics & Visualisation (Tableau, Excel)",
      5: "Management & Financial Accounting",
      6: "Business Law",
      7: "Communication Studies",
      8: "Organisational Behavior"
    },
    2: {
      1: "Introduction to Computational Thinking (Python, Raspberry Pi, Sense HAT, Tkinter)",
      3: "Introduction to Data Science and Artificial Intelligence (Python, Pandas)",
      2: "Data Structures (C)",
      4: "Algorithms (Python, Java, C)",
      5: "Object Oriented Programming (Java, C++, UML)",
      6: "Computer Graphics and Visualisation (VRML)",
      7: "Computer Organisation & Architecture (C, Arduino)",
      8: "Digital Logic (Verilog)",
      9: "Engineering Mathematics",
      10: "Discrete Mathematics",
    }
  }
}
const noteOthers = {
  "key": Math.floor(Math.random() * Math.pow(10, 20)),
  "Institution": "Others (External Vendors)",
  "Location": "Singapore, SG",
  "Enrollment": "April 2020 - PRESENT",
  "Degree": {
    1: "Kaplan Higher Education Academy",
    2: "Smartcademy",
    3: "KnowledgeHut"
  },
  "Modules": {
    1: {
      1: "",
      2: "EC-Council - Certified Ethical Hacker"
    },
    2: {
      1: "",
      2: "Intro to Web App Development",
      3: "React Native 101"
    },
    3: {
      1: "",
      2: "Web Development Using React"
    }
  }
}
const noteE = {
  "key": Math.floor(Math.random() * Math.pow(10, 20)),
  "Institution": "E-Learning (Online Courses)",
  "Location": "Singapore, SG",
  "Enrollment": "April 2019 - PRESENT",
  "Degree": {
    1: "Freecodecamp",
    2: "Codecademy",
    3: "Coursera"
  },
  "Modules": {
    1: {

    },
    2: {

    },
    3: {

    }

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

let details = 0;

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
      let temp = 0;
      // for each school & its degree
      // for (let i = 0; i < data.length; i++) {
      //   const school = data[i]["Institution"]
      //   const loc = data[i]["Location"]
      //   const enroll = data[i]["Enrollment"]
      //   const degree = data[i]["Degree"]
      //   const modules = data[i]["Modules"]
      //   const length = numKeys(degree)
      //   for (let k = 1; k <= length; k++) {
      //     let size = Object.keys(modules[k]).length;
      //     for (let o = 1; o <= size; o++) {
      //       $('<p>' + modules[k][o] + '</p>').prependTo(".details" + i);
      //     }
      //     $('<p>' + degree[k] + '</p>').prependTo(".details" + i);
      //   }
      //   $('<p>' + loc + ', ' + enroll + '</p>').prependTo(".details" + i);
      //   $('<p>' + school + '</p>').prependTo(".details" + i);
      // }
    });
  };
}



























// const createDBButton = document.getElementById("createButton")
// createDBButton.addEventListener("click", createDB)
// const createNoteButton = document.getElementById("createNote")
// createNoteButton.addEventListener("click", createNote)
// const viewNoteButton = document.getElementById("viewNote")
// viewNoteButton.addEventListener("click", viewNote)
//
// function viewNote() {
//   const req = indexedDB.open("Portfolio DB")
//   req.onsuccess = e => {
//     const db = e.target.result;
//     const tx = db.transaction("info", "readonly")
//     const notes = tx.objectStore("info")
//     const req1 = notes.openCursor()
//     req1.onsuccess = e => {
//         const cursor = e.target.result;
//         if (cursor) {
//             cursor.continue();
//             console.log(cursor.value.text)
//         }
//     }
//   }
// }
//
// function createNote() {
//   const req = indexedDB.open("database2")
//   req.onsuccess = e => {
//     const db = e.target.result;
//     const note = {
//       key: Math.floor(Math.random() * 100000000000),
//       id: "id1",
//       text: 'This is my note'
//     }
//     const tx = db.transaction("notes1", "readwrite")
//     tx.onerror = e => {
//       alert(e.target.error + "shit")
//     }
//     const rd = tx.objectStore("notes1")
//     rd.add(note)
//     alert("Success added")
//   }
// }
//
// function createDB() {
//   try {
//     console.log("createDB Success")
//     const dbName = document.getElementById("dbName").value
//     const dbVersion = document.getElementById("dbVersion").value
//     const req = indexedDB.open(dbName, dbVersion)
//     req.onupgradeneeded = e => {
//       const db = e.target.result;
//       alert(db.name + " version is upgraded to " + db.version)
//       const note1 = db.createObjectStore("notes1", {keyPath: "key"})
//     }
//     req.onsuccess = e => {
//       const db = e.target.result;
//       alert("Database " + db.name + " called!")
//     }
//     req.onerror = e => {
//       console.log("req.error Success")
//       alert("error called: " + e.target.error)
//     }
//
//   } catch (e) {
//     alert(e)
//   }
// }
//
// $(function() {
//
//   //Add event listener to dropdown with class radio-line
//   $('.radio-line').change(function() {
//
//     //Get the text of the selected option. Not its value
//     var text = $(this).find("option:selected").text();
//
//     //Update the text of h1
//     $('h2').text(text);
//
//   });
//
// });


// Some random colors
const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

const numBalls = 50;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;

  balls.push(ball);
  document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
      [
        { transform: "translate(0, 0)" },
        { transform: `translate(${to.x}rem, ${to.y}rem)` }
      ],
      {
        duration: (Math.random() + 1) * 2000, // random duration
        direction: "alternate",
        fill: "both",
        iterations: Infinity,
        easing: "ease-in-out"
      }
  );
});












var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
