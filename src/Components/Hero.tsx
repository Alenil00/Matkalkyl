import React from "react";
import { useState } from "react";
import "../App.css";
import NavBar from "./NavBar";

const Hero = () => {
  // setting up states for every input
  const [count, setCount] = useState(0);
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("5");
  const [activity, setActivity] = useState("1.2")

  function truncateNumber (value: number, decimals: number): number {
    const factor = Math.pow(10, decimals)
    return Math.floor(value * factor) / factor
  }

  function handleCLick() {
    // making the strings to numbers to ts can detect errors
    const ageNumber = Number(age);
    const weightNumber = Number(weight);
    const heightNumber = Number(height);
    const genderValue = Number(gender);
    const activityValue = Number(activity);

    // calculate sum
    let BMR = 0;

    if (genderValue === 5) {
      BMR = 10 * weightNumber + 6.25 * heightNumber - 5 * ageNumber + 5;
    } else if (genderValue === 161) {
      BMR = 10 * weightNumber + 6.25 * heightNumber - 5 * ageNumber - 161;
    }

    // update state only one time
    setCount(BMR);
    let TDEE = 0

    if (activityValue === 1.2) {
      TDEE = BMR * 1.2
    } else if (activityValue === 1.375) {
      TDEE = BMR * 1.375
    } else if (activityValue === 1.55) {
      TDEE = BMR * 1.55
    } else if (activityValue === 1.725) {
      TDEE = BMR * 1.725
    } else if ( activityValue === 1.9) {
      TDEE = BMR * 1.9
    }

    const truncatedTDEE = truncateNumber(TDEE, 0)
    setCount(truncatedTDEE)

  }

  return (
    <>
    <NavBar />
    <main className="flex justify-center">
      <section>
        <h2>Vänligen fyll i dina uppgifter</h2>
        <form action="" className=" w-100 h-100 flex flex-col gap-1">
          <div className="w-20 h-20">
            <select
              name="gender"
              id="gender"
              className="border"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="5">Man</option>
              <option value="161">Kvinna</option>
            </select>
          </div>
          <div className="w-20 h-20">
            <h3>Ålder</h3>
            <input
              type="number"
              name="age"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="border border-solid"
            />
          </div>
          <div className="w-20 h-20">
            <h3>Vikt</h3>
            <input
              type="number"
              name="weight"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="border border-solid"
            />
          </div>
          <div className="w-20 h-20">
            <h3>Längd</h3>
            <input
              type="number"
              name="height"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="border border-solid"
            />
          </div>
          <div className="w-20 h-20">
            <h3>Aktivitetsnivå</h3>
            <select name="" id="" value={activity} onChange={(e) => setActivity(e.target.value)} className="border" >
              <option value="1.2">1.2: Lite eller ingen träning</option>
              <option value="1.375">1.375: Lätt tränning 1-3 ggr/veckan</option>
              <option value="1.55">1.55: Medel tränning 3-5 ggr/veckan</option>
              <option value="1.725">1.725: Hård Tränning 6-7 ggr/veckan</option>
              <option value="1.9">1.9: Vädligt hård träning / fysiskt jobb</option>
            </select>
          </div>
        </form>

        <button className="border rounded w-40 h-10 " onClick={handleCLick}>
          Räkna ut
        </button>
        <p>Du ska äta {count} kalorier för att bibehålla din vikt</p>
      </section>
    </main>
    </>
  );
};

export default Hero;
