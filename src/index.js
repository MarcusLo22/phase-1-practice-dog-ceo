console.log('%c HI', 'color: firebrick')
document.addEventListener("", function() {
    container = document.getElementById("-container"); // Replace "image-container" with the ID of container element
  
    fetch("https://dog.ceo/api/beds/image/random/4")
      .then(response => response.json())
      .then(data => {
        data.message.forEach(image => {
          const img = document.createElement("img");
          img.src = imageUrl;
          container.appendChild(img);
        });
      })
      .catch(error => {
        console.error("Error:", error);
      });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("image-container"); // Replace "image-container" with the ID of your container element
  
    fetch("https://dog.ceo/api/breeds/image/random/4")
      .then(response => response.json())
      .then(data => {
        data.message.forEach(imageUrl => {
          const img = document.createElement("img");
          img.src = imageUrl;
          container.appendChild(img);
        });
      })
      .catch(error => {
        console.error("Error:", error);
      });
  });

  document.addEventListener("DOMContentLoaded", function() {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(response => response.json())
      .then(data => {
        // Handle the data here
      })
      .catch(error => {
        // Handle any errors here
      });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const breedList = document.getElementById("breed-list"); // Replace "breed-list" with the ID of the <ul> element in your index.html
  
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(response => response.json())
      .then(data => {
        const breeds = Object.keys(data.message);
        breeds.forEach(breed => {
          const li = document.createElement("li");
          li.textContent = breed;
          breedList.appendChild(li);
        });
      })
      .catch(error => {
        console.error("Error:", error);
      });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const breedList = document.getElementById("breed-list");
    const breeds = breedList.getElementsByTagName("li");
  
    for (let i = 0; i < breeds.length; i++) {
      breeds[i].addEventListener("click", function() {
        this.style.color = "red"; // Change the color to your desired color
      });
    }
  
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(response => response.json())
      .then(data => {
        const breeds = Object.keys(data.message);
        breeds.forEach(breed => {
          const li = document.createElement("li");
          li.textContent = breed;
          breedList.appendChild(li);
        });
      })
      .catch(error => {
        console.error("Error:", error);
      });
  });

  html

const letterFilter = document.getElementById("letter-filter");

letterFilter.addEventListener("change", function() {
const selectedLetter = this.value;
// Filter the breeds based on the selected letter
});

const breedList = document.getElementById("breed-list"); const breeds = breedList.getElementsByTagName("li");
letterFilter.addEventListener("change", function() {
const selectedLetter = this.value;

for (let i = 0; i < breeds.length; i++) {
const breedName = breeds[i].textContent.toLowerCase();
if (breedName.startsWith(selectedLetter)) {
breeds[i].style.display = "block";
} else {
breeds[i].style.display = "none";
}
}
});