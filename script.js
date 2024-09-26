let data = {
    'A': {
        name: "clap",
        sound: "sounds/clap.wav",
    },

    'B': {
        name: "HitHat",
        sound: "sounds/hihat.wav",
    },

    'C': {
        name: "Kick",
        sound: "sounds/kick.wav",
    },

    'D': {
        name: "OpenHAt",
        sound: "sounds/openhat.wav",
    },

    'E': {
        name: "Boom",
        sound: "sounds/boom.wav",
    },

    'F': {
        name: "Ride",
        sound: "sounds/ride.wav",
    },

    'G': {
        name: "snare",
        sound: "sounds/ride.wav",
    },

    'H': {
        name: "Tom",
        sound: "sounds/tom.wav",
    },

    'I': {
        name: "Tink",
        sound: "sounds/tink.wav",
    },
};

let drumkit = document.getElementById("Drumkit");
console.log(drumkit);

let soundObject = (data) => {
    //  console.log(data);
    for (let key in data) {
        console.log(key);
        let drumelement = document.createElement("div");
        console.log(drumelement);
        drumelement.classList.add("element", data[key].name);
        drumkit.appendChild(drumelement);
        var h2 = document.createElement("h2");
        h2.textContent = key;

        var span = document.createElement("span");
        span.textContent = data[key].name;
        drumelement.appendChild(h2);
        drumelement.append(span);
    }
};
soundObject(data);
// play sound 
function playDrum(key) {
    if (data.hasOwnProperty(key)) {
        var drumElement = document.querySelector(".element." + data[key].name);
        // drumElement.classList.add("active");
        console.log(drumElement);

        var audio = new Audio();
        audio.src = data[key].sound;
        audio.play();



        audio.addEventListener("timeupdate", function () {
            if (audio.currentTime >= audio.duration / 32) {
                drumElement.classList.remove("active");
                audio.removeEventListener("timeupdate", arguments.callee);
            }
        });
    } else {
        // show error message

        console.log(
            "OOPS!\nIt looks like you've pressed a key that isn't defined.\nCould you please try again with a valid key?\nThank you!"
          );

        //    clear console after 2.5 seconds
          setTimeout(function () {
            console.clear();
          }, 10000);
        }
      }
    //   key press event 
      function keyEvents(event) {
        playDrum(event.key.toUpperCase());
      }

      window.addEventListener("keydown", keyEvents);

      drumkit.addEventListener("mouseover", function (event) {
        let drumElement = event.target.closest(".element");
        if (drumElement) {
            let key = drumElement.querySelector("h2").textContent;
            playDrum(key.toUpperCase());
        }
    });

      construct();