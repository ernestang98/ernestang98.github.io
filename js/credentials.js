

if (Modernizr.indexeddb) {
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
        4: "Computer Organisation & Architecture (ARM Assembly Language)",
        5: "Computer Graphics and Visualisation (VRML)",
        6: "Object Oriented Programming (Java, C++, UML)",
        7: "Algorithms (Sorting & Graphs)",
        8: "Data Structures (C)",
        9: "Introduction to Data Science and Artificial Intelligence (Python, Pandas)",
        10: "Introduction to Computational Thinking (Python, Tkinter)",
      }
    }
  }

  const dbName = "Portfolio DB";

  let del = indexedDB.deleteDatabase(dbName);

  del.onsuccess = function () {
    console.log("Deleted database successfully");
  };
  del.onerror = function () {
    console.log("Couldn't delete database");
  };
  del.onblocked = function () {
    console.log("Couldn't delete database due to the operation being blocked");
  };

  const req = indexedDB.open("Portfolio DB", 1)

  async function doesDbExist(dbName) {
    let result = await indexedDB.databases();
    let dbFound = false;
    for (let i = 0; i < result.length && !dbFound; i++) {
      dbFound = result[i].name === dbName;
    }
    return dbFound;
  }

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
        for (let i = 0; i < data.length; i++) {
          const school = data[i]["Institution"]
          const loc = data[i]["Location"]
          const enroll = data[i]["Enrollment"]
          const degree = data[i]["Degree"]
          const modules = data[i]["Modules"]
          const length = numKeys(degree)

          if (data[i]["Institution"] === "Nanyang Technological University") {
            for (let k = 1; k <= length; k++) {
              let size = Object.keys(modules[k]).length;
              for (let o = 1; o <= size; o++) {
                $('<p>' + modules[k][o] + '</p>').prependTo(".inner");
              }
              $('<p><strong>' + degree[k] + '</strong></p>').prependTo(".inner");
            }
            $('<p class="text-center">' + loc + ', ' + enroll + '</p>').prependTo(".innerS");
            $('<p class="text-center">' + school + '</p>').prependTo(".innerS");
          }
        }
      });
    };
  }

  let boxes = document.getElementById("boxes");

  let loading = document.getElementById("modal-loading");

  let content = document.getElementById("modal-content");

  let modal = document.getElementById("myModal");

  let modal2 = document.getElementById("myModal2");

  let modal3 = document.getElementById("myModal3");

  let modal4 = document.getElementById("myModal4");

  let btn = document.getElementById("myBtn");

  let btn2 = document.getElementById("myBtn2");

  let btn3 = document.getElementById("myBtn3");

  let span = document.getElementsByClassName("close")[0];

  let span2 = document.getElementsByClassName("close")[1];

  let span3 = document.getElementsByClassName("close")[2];

  let in_dom = document.body.contains(boxes);

  let observer = new MutationObserver(function() {
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

  let intervals = {};

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
    if (event.target === modal3) {
      modal3.style.display = "none";
      clearAll()
    }
    if (event.target === modal4) {
      modal4.style.display = "none";
      clearAll()
    }
  }

  loading.onclick = function() {
    modal.style.display = "none";
    clearAll()
  }
} else {
  $('#thisWillBeHidden').css("display", "block");
}
