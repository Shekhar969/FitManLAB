import React, { useState } from "react";
import "../App.css";

const sundayExercises = [
  {
    name: "1. Flat Chest Presses",
    imgSrc: "./src/assets/imgs/Flat Chest Presses.gif",
  },
  {
    name: "2. Incline Chest Presses",
    imgSrc: "./src/assets/imgs/Incline Chest Presses.gif",
  },
  {
    name: "3. Hammer curls",
    imgSrc: "./src/assets/imgs/Hammer curls.gif",
  },
  {
    name: "4. Overhead Triceps Extensions",
    imgSrc: "./src/assets/imgs/Overhead Triceps Extensions.gif",
  },
  {
    name: "5. Shrugs",
    imgSrc: "./src/assets/imgs/Shrugs.gif",
  },
  {
    name: "6. Lateral Raises",
    imgSrc: "./src/assets/imgs/Lateral Raises.gif",
  },
];

const mondayExercises = [
  {
    name: "1. Lat Pull Down",
    imgSrc: "./src/assets/imgs/Lat Pull Down.webp",
  },
  {
    name: "2. Cable Close Grip",
    imgSrc: "./src/assets/imgs/Cable Close Grip.webp",
  },
  {
    name: "3. Back Extensions",
    imgSrc: "./src/assets/imgs/Back Extensions.webp",
  },
  {
    name: "4. Cable Curl",
    imgSrc: "./src/assets/imgs/Cable Curl.webp",
  },
  {
    name: "5. Dumbbell Row",
    imgSrc: "./src/assets/imgs/Dumbbell-Row.webp",
  },
  {
    name: "6. Dumbbell Preacher Curl",
    imgSrc: "./src/assets/imgs/Dumbbell Preacher Curl.webp",
  },
];

const tuesdayExercises = [
  {
    name: "1. Squat",
    imgSrc: "./src/assets/imgs/squat.webp",
  },
  {
    name: "2. Leg Press",
    imgSrc: "src/assets/imgs/Back Extensions.webp",
  },
  {
    name: "3. Hack Squat",
    imgSrc: ".src/assets/imgs/Hack Squat.webp",
  },
  {
    name: "4. Leg Extension",
    imgSrc: "./src/assets/imgs/Leg Extension.webp",
  },
  {
    name: "5. Leg Extension",
    imgSrc: "./src/assets/imgs/Leg Extension.webp",
  },
  {
    name: "6. Mountain Climbers",
    imgSrc: "./src/assets/imgs/Mountain Climbers.gif",
  },
];

const wednesdayExercises = [
  {
    name: "1. Shoulder Press",
    imgSrc: "./src/assets/imgs/squat.webp",
  },
  {
    name: "2. Lateral Raises",
    imgSrc: "src/assets/imgs/Back Extensions.webp",
  },
  {
    name: "3. Reverse Fly",
    imgSrc: ".src/assets/imgs/Hack Squat.webp",
  },
  {
    name: "4. Cable Face Pull",
    imgSrc: "./src/assets/imgs/Leg Extension.webp",
  },
  {
    name: "5. Dumbbell Shrug",
    imgSrc: "./src/assets/imgs/Leg Extension.webp",
  },
  {
    name: "6. Planks (3 sets of 40 sec)",
    imgSrc: "./src/assets/imgs/Mountain Climbers.gif",
  },
  {
    name: "Mountain Climbers",
    imgSrc: "",
  },
  {
    name:"Russain Twists (3 sets of 10)",
    imgSrc: "",
  }
];

const thursdayExercises = [
  {
    name: "1. Dumbbell Cheast Press",
    imgSrc: "./src/assets/imgs/squat.webp",
  },
  {
    name: "2. Dumbbell Incline Press",
    imgSrc: "src/assets/imgs/Back Extensions.webp",
  },
  {
    name: "3. Decline Barbell Press",
    imgSrc: ".src/assets/imgs/Hack Squat.webp",
  },
  {
    name: "4. Chest Fly",
    imgSrc: "./src/assets/imgs/Leg Extension.webp",
  },
  {
    name: "5. Overhead Tricep Extesnsion",
    imgSrc: "./src/assets/imgs/Leg Extension.webp",
  },
  {
    name: "6. Rope Tricep Extension",
    imgSrc: "./src/assets/imgs/Mountain Climbers.gif",
  },
  {
    name:"Tricep Dips",
    imgSrc:"",
  }
];

const fridayExercises = [
  {
    name: "1. Bench Dips",
    imgSrc: "./src/assets/imgs/squat.webp",
  },
  {
    name: "2. Barbell Curis",
    imgSrc: "src/assets/imgs/Back Extensions.webp",
  },
  {
    name: "3. Hammer curls",
    imgSrc: ".src/assets/imgs/Hack Squat.webp",
  },
  {
    name: "4. Tricep Extensions",
    imgSrc: "./src/assets/imgs/Leg Extension.webp",
  },
  {
    name: "5. Cable Crossovers",
    imgSrc: "./src/assets/imgs/Leg Extension.webp",
  },
  {
    name: "6. Bench Dips",
    imgSrc: "./src/assets/imgs/Mountain Climbers.gif",
  },
];



const RenderContentForDay = (selectedDate) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getExercises = () => {
    switch (selectedDate) {
      case "Sun":
        return sundayExercises;
      case "Mon":
        return mondayExercises;
        return sundayExercises;
      case "Tue":
        return tuesdayExercises;
      case "Wed":
        return wednesdayExercises;
      case "Thu":
        return thursdayExercises;
      case "Fri":
        return fridayExercises;
    }
  };

  const exercises = getExercises();

  const nextSlide = () => {
    if (currentIndex < exercises.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  
  const goingBack = () =>{
    prevSlide();
  }

  const completed = () => {
    nextSlide();
  


  };

  return (
    <div className="sliderControls">
      <div className="exerciseDescription">
        {exercises.length > 0 && (
          <>
            <div className="exerciseName">{exercises[currentIndex].name}</div>
            <img
              className="exerciseVdo"
              src={exercises[currentIndex].imgSrc}
              alt={exercises[currentIndex].name}
            />
            <div className="controlBtns">
              <button className="goingBack"  onClick={goingBack}>
                Back
              </button>
              <button className="exerciseComplete" onClick={completed}>
                Done
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RenderContentForDay;
