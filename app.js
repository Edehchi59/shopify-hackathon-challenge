const menu = document.querySelector("#profile-menu-option");
const allMenuItems = menu.querySelectorAll("[role='menuitem']");

const handleDropDown = () => {
  // when notification/profile button is clicked the drop down list should be toggled to true or false
  // also check when the drop down list for notification and profile is opened, when one of the drop down list is opened the other one should be closed
  const notifyBtn = document.querySelector(".notify");
  const profileBtn = document.querySelector(".profile");

  const notifyDropDown = document.querySelector(".notifyDropDown");
  const profileDropDown = document.querySelector(".profileDropDown");
  notifyBtn.addEventListener("click", () => {
    notifyDropDown.classList.toggle("hidden");
    // check if profile drop down list is opened when notification button is clicked
    if (!profileDropDown.classList.contains("hidden")) {
      profileDropDown.classList.add("hidden");
    }
  });
  const isExpanded = profileBtn.attributes["aria-expanded"].value === "true";
  profileBtn.addEventListener("click", () => {
    toggleMenu();
    if (isExpanded) {
      closeMenu();
    } else {
      openmenu();
    }

    // checking if notification drop down list is  opened when profile button is clicked
    if (!notifyDropDown.classList.contains("hidden")) {
      notifyDropDown.classList.add("hidden");
    }
  });
  const handleEscapeKeyPress = (event) => {
    if (event.key === "Escape") {
      toggleMenu();
      console.log("escape key pressed");
    }
  };
  const toggleMenu = () => {
    profileDropDown.classList.toggle("hidden");
    profileDropDown.addEventListener("keyup", handleEscapeKeyPress);
  };
  const openmenu = () => {
    profileBtn.ariaExpanded = "true";
    allMenuItems.item(0).focus();
  };
  const closeMenu = () => {
    profileBtn.ariaExpanded = "false";
  };
};

// when the trail closing button is clicked to add a class of hidden to the trail box
const handleTrailClosing = () => {
  const trialBox = document.querySelector(".trialBox");
  const xMarkBtn = document.querySelector(".plan svg");
  xMarkBtn.addEventListener("click", () => {
    trialBox.classList.add("hidden");
  });
};

// when the checkin button is clicked it should be toggled to hidden and the checked button to hidden class should be removed
// disable already checked button from increasing the progress bar
document.addEventListener("DOMContentLoaded", function () {
  const progressText = document.getElementById("progressText");
  const progressBar = document.getElementById("progress");
  const checkInButtons = document.querySelectorAll(".checkInButton");

  let completedTasks = 0;
  // checking when checkinbutton is clicked to assign it to true, where by disabling it to increase the progressbar
  let clickedStates = Array.from(
    { length: checkInButtons.length },
    () => false
  );

  // Function to update the progress bar and text
  function updateProgress() {
    const progressPercentage = (completedTasks / 5) * 100;
    progressText.textContent = `${completedTasks}/5 completed`;
    progressBar.style.width = `${progressPercentage}%`;
  }

  // Function to handle the check-in button click for a specific button
  function handleCheckIn(buttonIndex) {
    if (!clickedStates[buttonIndex]) {
      clickedStates[buttonIndex] = true;
      completedTasks++;
      updateProgress();
    }
  }

  // Add click event listeners to each check-in button
  checkInButtons.forEach((button, index) => {
    button.addEventListener("click", () => handleCheckIn(index));
  });
});

// add onclick fuction to the guide card,the chevron button
// on click on guide card and the chevron button should toggle the hidden class
const handleContentFunctions = () => {
  const cardContent = document.querySelectorAll(".cardContent");
  const guideCard = document.querySelectorAll(".guideCard");
  const iconOnes = document.querySelectorAll(".icon_one");
  const checkIcons = document.querySelectorAll(".check_icon");

  iconOnes.forEach((iconOne, index) => {
    console.log(iconOnes);
    iconOne.addEventListener("click", () => {
      iconOne.style.display = "none";
      checkIcons[index].style.display = "block";
    });
  });

  guideCard.forEach((card, index) => {
    card.addEventListener("click", () => {
      cardContent.forEach((content, i) => {
        if (i === index) {
          content.classList.toggle("open");
        } else {
          content.classList.remove("open");
        }
      });
      console.log("clicked");
    });
  });

  checkIcons.forEach((checkIcon, index) => {
    checkIcon.addEventListener("click", () => {
      checkIcon.style.display = "none";
      iconOnes[index].style.display = "block";
    });
  });

  const guide = document.querySelector(".Guide");
  const chevron = document.querySelectorAll(".chevron");
  const chevronUp = document.querySelector(".chevron-up");
  chevronUp.addEventListener("click", () => {
    guide.classList.toggle("close");
    chevron.forEach((chevronIcons, index) => {
      chevronIcons.classList.toggle("hidden");
    });
  });
};

handleDropDown();
handleTrailClosing();
handleContentFunctions();
