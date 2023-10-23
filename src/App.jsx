import { useState } from "react";
import logo from "../assets/images/logo.svg";
import man from "../assets/images/image-man-eating.webp";
import healthy from "../assets/images/icon-eating.svg";
import exercise from "../assets/images/icon-exercise.svg";
import sleep from "../assets/images/icon-sleep.svg";
import gender from "../assets/images/icon-gender.svg";
import age from "../assets/images/icon-age.svg";
import muscle from "../assets/images/icon-muscle.svg";
import pregnancy from "../assets/images/icon-pregnancy.svg";
import race from "../assets/images/icon-race.svg";
import vector2 from "../assets/images/pattern-curved-line-right.svg";
import "./App.css";

function App() {
  const [selectedValue, setSelectedValue] = useState("true");
  const [heightValue, setHeightValue] = useState("");
  const [weightValue, setWeightValue] = useState("");
  const [computedValue, setComputedValue] = useState(null);
  const [computedImperialValue, setComputedImperialValue] = useState(null);
  const [heightInFeet, setHeightInFeet] = useState("");
  const [heightInInches, setHeightInInches] = useState("");
  const [weightInStones, setWeightInStones] = useState("");
  const [weightInPounds, setWeightInPounds] = useState("");

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  // const handleFeetChanges = (event) => {
  //   const value = parseFloat(event.target.value);
  //   setHeightInFeet(value);
  //   newHeight(value, heightInInches);
  // };

  // const handleInchesChanges = (event) => {
  //   const value = parseFloat(event.target.value);
  //   setHeightInInches(value);
  //   newHeight(heightInFeet, value);
  // };

  // const newHeight = (heightInFeet, heightInInches) => {
  //   const height = heightInFeet * 12 + heightInInches;
  //   console.log(height);
  //   computeImperialValue(height);
  // };

  // const handleStoneChanges = (event) => {
  //   const value = parseFloat(event.target.value);
  //   setWeightInStones(value);
  //   newWeight(value, weightInStones);
  // };

  // const handlePoundsChanges = (event) => {
  //   const value = parseFloat(event.target.value);
  //   setWeightInPounds(value);
  //   newWeight(weightInPounds, value);
  // };

  // const newWeight = (weightInPounds, weightInStones) => {
  //   const weight = weightInStones * 6.35 + weightInPounds;
  //   console.log(weight);
  //   computeImperialValue(weight);
  // };

  // const computeImperialValue = (weight, height) => {
  //   const result = (weight / height) * (weight / height) * 703;
  //   const resultWithOneDecimal = result.toFixed(1);
  //   setComputedImperialValue(resultWithOneDecimal);
  // };

  const handleFeetChanges = (event) => {
    const value = parseFloat(event.target.value);
    setHeightInFeet(value);
    newHeight(value, heightInInches);
  };

  const handleInchesChanges = (event) => {
    const value = parseFloat(event.target.value);
    setHeightInInches(value);
    newHeight(heightInFeet, value);
  };

  const newHeight = (heightInFeet, heightInInches) => {
    const height = heightInFeet * 12 + heightInInches;
    console.log(height);
    computeImperialValue(height, weightInStones * 6.35 + weightInPounds);
  };

  const handleStoneChanges = (event) => {
    const value = parseFloat(event.target.value);
    setWeightInStones(value);
    newWeight(value, weightInPounds);
  };

  const handlePoundsChanges = (event) => {
    const value = parseFloat(event.target.value);
    setWeightInPounds(value);
    newWeight(weightInStones, value);
  };

  const newWeight = (weightInStones, weightInPounds) => {
    const weight = weightInStones * 6.35 + weightInPounds;
    console.log(weight);
    computeImperialValue(heightInFeet * 12 + heightInInches, weight);
  };

  const computeImperialValue = (height, weight) => {
    if (height === 0) {
      setComputedImperialValue("Please enter a non-zero height.");
    } else {
      const result = (weight / (height * height)) * 703;
      const resultWithOneDecimal = result.toFixed(1);
      setComputedImperialValue(resultWithOneDecimal);
    }
  };
  ///////////////////

  const handleHeightChange = (event) => {
    const value = event.target.value;
    const numericValue = parseFloat(value);
    setHeightValue(numericValue);
    computeValues(numericValue, weightValue);
  };

  const handleWeightChange = (event) => {
    const value = event.target.value;
    const numericValue = parseFloat(value);
    setWeightValue(numericValue);
    computeValues(heightValue, numericValue);
  };

  const computeValues = (height, weight) => {
    const result = (weight / height / height) * 10000;
    const resultWithOneDecimal = result.toFixed(1);
    setComputedValue(resultWithOneDecimal);
  };

  return (
    <>
      <main className="bg-gradient-to-r from-white to-[#d8e2e7] md:w-screen lg:w-[61rem] rounded-lg p-8">
        <section className="max-w-[1276px] p-4 mx-auto">
          <nav className="mx-auto w-fit lg:w-auto lg:mx-0">
            <img src={logo} alt="" />
          </nav>
          <section className="my-10 flex flex-col lg:flex-row items-center lg:items-start">
            <div className="md:text-center lg:text-start">
              <h1 className="font-semibold text-6xl w-[30rem] text-[#253347]">
                Body Mass Index Calculator
              </h1>
              <p className="w-[30rem] my-5 text-[#5e6e85]">
                Better understand your weight in relation to your height using
                our body mass index (BM) calculator. While BMI is not the sole
                determinant of a healthy weight, it offers a valuable starting
                point to evaluate your overall health and well-being.
              </p>
            </div>

            <div className="lg:w-[30rem] md:w-4/5 shadow-xl bg-white rounded-xl p-8 lg:relative left-56">
              <h2 className="font-semibold text-2xl text-[#253347] mb-8 text-start">
                Enter your details below
              </h2>
              <div className="flex items-center gap-10 my-8">
                <div className="flex items-center gap-4">
                  <input
                    type="radio"
                    id="metric"
                    value="true"
                    name="system"
                    defaultChecked
                    onChange={handleRadioChange}
                  />
                  <label
                    htmlFor="metric"
                    className="font-semibold text-[#253347]"
                  >
                    Metric
                  </label>
                </div>
                <div className="flex items-center gap-4">
                  <input
                    type="radio"
                    id="imperial"
                    value="false"
                    name="system"
                    onChange={handleRadioChange}
                  />
                  <label
                    htmlFor="imperial"
                    className="font-semibold text-[#253347]"
                  >
                    Imperial
                  </label>
                </div>
              </div>
              {selectedValue === "true" ? (
                <div className="flex items-center gap-10">
                  <div className="flex flex-col items-start gap-2">
                    <label htmlFor="height" className="text-[#5e6e85] text-sm">
                      Height
                    </label>
                    <input
                      type="text"
                      inputMode="numeric"
                      placeholder="cm"
                      className="border-2 border-[#d8e2e7] rounded-lg w-48 px-3 py-4 focus:outline-none placeholder:font-semibold 
                placeholder:text-2xl hover:border-[#345ff6] cursor-pointer placeholder:text-[#345ff6] placeholder:text-right font-semibold text-2xl text-[#253347]"
                      value={heightValue}
                      onChange={handleHeightChange}
                    />
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <label htmlFor="weight" className="text-[#5e6e85] text-sm">
                      Weight
                    </label>
                    <input
                      type="text"
                      inputMode="numeric"
                      placeholder="kg"
                      className="border-2 border-[#d8e2e7] rounded-lg w-48 px-3 py-4 focus:outline-none placeholder:font-semibold 
                placeholder:text-2xl hover:border-[#345ff6] cursor-pointer placeholder:text-[#345ff6] placeholder:text-right font-semibold text-2xl text-[#253347]"
                      value={weightValue}
                      onChange={handleWeightChange}
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex flex-col items-start gap-2">
                    <label htmlFor="height" className="text-[#5e6e85] text-sm">
                      Height
                    </label>
                    <div className="flex gap-6">
                      <input
                        type="text"
                        placeholder="ft"
                        className="border-2 border-[#d8e2e7] rounded-lg px-3 py-4 w-48 focus:outline-none placeholder:font-semibold 
                placeholder:text-2xl hover:border-[#345ff6] cursor-pointer placeholder:text-[#345ff6] placeholder:text-right font-semibold text-2xl text-[#253347]"
                        value={heightInFeet}
                        onChange={handleFeetChanges}
                      />
                      <input
                        type="text"
                        placeholder="in"
                        className="border-2 border-[#d8e2e7] rounded-lg px-3 py-4 w-48 focus:outline-none placeholder:font-semibold 
                placeholder:text-2xl hover:border-[#345ff6] cursor-pointer placeholder:text-[#345ff6] placeholder:text-right font-semibold text-2xl text-[#253347]"
                        value={heightInInches}
                        onChange={handleInchesChanges}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <label htmlFor="height" className="text-[#5e6e85] text-sm">
                      Weight
                    </label>
                    <div className="flex gap-6">
                      <input
                        type="text"
                        placeholder="st"
                        className="border-2 border-[#d8e2e7] rounded-lg px-3 py-4 w-48 focus:outline-none placeholder:font-semibold 
                placeholder:text-2xl hover:border-[#345ff6] cursor-pointer placeholder:text-[#345ff6] placeholder:text-right font-semibold text-2xl text-[#253347]"
                        value={weightInStones}
                        onChange={handleStoneChanges}
                      />
                      <input
                        type="text"
                        placeholder="lbs"
                        className="border-2 border-[#d8e2e7] rounded-lg px-3 py-4 w-48 focus:outline-none placeholder:font-semibold 
                placeholder:text-2xl hover:border-[#345ff6] cursor-pointer placeholder:text-[#345ff6] placeholder:text-right font-semibold text-2xl text-[#253347]"
                        value={weightInPounds}
                        onChange={handlePoundsChanges}
                      />
                    </div>
                  </div>
                </div>
              )}

              {(heightValue && weightValue) || computedImperialValue ? (
                <div className="bg-[#345ff6] my-5 rounded-tl-lg rounded-bl-lg rounded-tr-full rounded-br-full text-white text-start p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p>Your BMI is</p>
                      <span className="font-semibold text-6xl">
                        {computedValue} {computedImperialValue}
                      </span>
                    </div>
                    <div>
                      <p className="text-xs w-40 ">
                        Your BMI suggests you’re
                        {weightValue < 63 ? " an unhealthy" : " a healthy"}{" "}
                        weight. Your ideal weight is between
                        <span className="font-bold"> 63.3kgs - 85.2kgs.</span>
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-[#345ff6] my-5 rounded-tl-lg rounded-bl-lg rounded-tr-full rounded-br-full text-white text-start p-2">
                  <h2 className="font-semibold text-2xl">Welcome!</h2>
                  <p className="mt-10 text-xs">
                    Enter your height and weight and you’ll see your BMI result
                    here
                  </p>
                </div>
              )}
            </div>
          </section>
        </section>
      </main>

      <section className="my-40 max-w-[1160px] p-8">
        <div className="flex flex-col md:flex-row text-start md:gap-4 lg:gap-0 items-center justify-between">
          <div>
            <img src={man} alt="" className="lg:w-[35rem]" />
          </div>
          <div>
            <h2 className="font-semibold text-5xl text-[#253347] md:w-[30rem] my-5">
              What your BMI result means
            </h2>
            <p className="md:w-[29rem] text-[#5e6e85]">
              A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
              Maintaining a healthy weight may lower your chances of
              experiencing health issues later on, such as obesity and type 2
              diabetes. Aim for a nutritious diet with reduced fat and sugar
              content, incorporating ample fruits and vegetables. Additionally,
              strive for regular physical activity, ideally about 30 minutes
              daily for five days a week.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-white to-[#d8e2e7] p-8 rounded-lg">
        <div className="flex flex-col lg:flex-row justify-between max-w-[1159]">
          <div className="text-start md:flex lg:block gap-6">
            <img src={healthy} alt="" />
            <div>
              <h2 className="font-semibold text-2xl my-5 text-[#253347]">
                Healthy eating
              </h2>
              <p className="lg:w-96 text-[#5e6e85]">
                Healthy eating promotes weight control, disease prevention,
                better digestion, immunity, mental clarity, and mood.
              </p>
            </div>
          </div>
          <div className="text-start md:flex lg:block gap-6">
            <img src={exercise} alt="" />
            <div>
              <h2 className="font-semibold text-2xl my-5 text-[#253347]">
                Regular exercise
              </h2>
              <p className="w-96 text-[#5e6e85]">
                Exercise improves fitness, aids weight control, elevates mood,
                and reduces disease risk, fostering wellness and longevity.
              </p>
            </div>
          </div>
          <div className="text-start md:flex lg:block gap-6">
            <img src={sleep} alt="" />
            <div>
              <h2 className="font-semibold text-2xl my-5 text-[#253347]">
                Adequate sleep
              </h2>
              <p className="w-96 text-[#5e6e85]">
                Sleep enhances mental clarity, emotional stability, and physical
                wellness, promoting overall restoration and rejuvenation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="my-40 hidden lg:block p-8">
        <div className="flex justify-between">
          <div className="text-start">
            <h2 className="font-semibold text-5xl my-5 text-[#253347]">
              Limitations of BMI
            </h2>
            <p className="w-96 text-[#5e6e85]">
              Although BMI is often a practical indicator of healthy weight, it
              is not suited for every person. Specific groups should carefully
              consider their BMI outcomes, and in certain cases, the measurement
              may not be beneficial to use.
            </p>
            <div className="mt-40">
              <img src={vector2} alt="" />
            </div>
          </div>
          <div>
            <div className="w-[23rem] text-start shadow-2xl rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <img src={gender} alt="" />
                <p className="font-semibold text-xl text-[#253347]">Gender</p>
              </div>
              <p className="text-[#5e6385]">
                The development and body fat composition of girls and boys vary
                with age. Consequently, a child's age and gender are considered
                when evaluating their BMI.
              </p>
            </div>
            <div className="flex gap-10 my-10 relative right-56">
              <div className="w-[23rem] text-start shadow-2xl rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <img src={age} alt="" />
                  <p className="font-semibold text-xl text-[#253347]">Age</p>
                </div>
                <p className="text-[#5e6385]">
                  In aging individuals, increased body fat and muscle loss may
                  cause BMI to underestimate body fat content.
                </p>
              </div>

              <div className="w-[23rem] text-start shadow-2xl rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <img src={muscle} alt="" />
                  <p className="font-semibold text-xl text-[#253347]">Muscle</p>
                </div>
                <p className="text-[#5e6385]">
                  BMI may misclassify muscular individuals as overweight or
                  obese, as it doesn't differentiate muscle from fat.
                </p>
              </div>
            </div>
            <div className="flex gap-10 my-10 relative right-72">
              <div className="w-[23rem] text-start shadow-2xl rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <img src={pregnancy} alt="" />
                  <p className="font-semibold text-xl text-[#253347]">
                    Pregnancy
                  </p>
                </div>
                <p className="text-[#5e6385]">
                  Expectant mothers experience weight gain due to their growing
                  baby. Maintaining a healthy pre-pregnancy BMI is advisable to
                  minimise health risks for both mother and child.
                </p>
              </div>
              <div className="w-[23rem] text-start shadow-2xl rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <img src={race} alt="" />
                  <p className="font-semibold text-xl text-[#253347]">Race</p>
                </div>
                <p className="text-[#5e6385]">
                  Certain health concerns may affect individuals of some Black
                  and Asian origins at lower BMIs than others. To learn more, it
                  is advised to discuss this with your GP or practice nurse.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-40 lg:hidden">
        <div className="flex flex-col gap-10 items-center">
          <div className="text-center">
            <h2 className="font-semibold text-5xl my-5 text-[#253347]">
              Limitations of BMI
            </h2>
            <p className="w-96 text-[#5e6e85]">
              Although BMI is often a practical indicator of healthy weight, it
              is not suited for every person. Specific groups should carefully
              consider their BMI outcomes, and in certain cases, the measurement
              may not be beneficial to use.
            </p>
          </div>
          <div className="flex flex-wrap gap-10 justify-center">
            <div className="w-[23rem] text-start shadow-2xl rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <img src={gender} alt="" />
                <p className="font-semibold text-xl text-[#253347]">Gender</p>
              </div>
              <p className="text-[#5e6385]">
                The development and body fat composition of girls and boys vary
                with age. Consequently, a child's age and gender are considered
                when evaluating their BMI.
              </p>
            </div>
            <div className="w-[23rem] text-start shadow-2xl rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <img src={age} alt="" />
                <p className="font-semibold text-xl text-[#253347]">Age</p>
              </div>
              <p className="text-[#5e6385]">
                In aging individuals, increased body fat and muscle loss may
                cause BMI to underestimate body fat content.
              </p>
            </div>

            <div className="w-[23rem] text-start shadow-2xl rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <img src={muscle} alt="" />
                <p className="font-semibold text-xl text-[#253347]">Muscle</p>
              </div>
              <p className="text-[#5e6385]">
                BMI may misclassify muscular individuals as overweight or obese,
                as it doesn't differentiate muscle from fat.
              </p>
            </div>

            <div className="w-[23rem] text-start shadow-2xl rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <img src={pregnancy} alt="" />
                <p className="font-semibold text-xl text-[#253347]">
                  Pregnancy
                </p>
              </div>
              <p className="text-[#5e6385]">
                Expectant mothers experience weight gain due to their growing
                baby. Maintaining a healthy pre-pregnancy BMI is advisable to
                minimise health risks for both mother and child.
              </p>
            </div>
            <div className="w-[23rem] text-start shadow-2xl rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <img src={race} alt="" />
                <p className="font-semibold text-xl text-[#253347]">Race</p>
              </div>
              <p className="text-[#5e6385]">
                Certain health concerns may affect individuals of some Black and
                Asian origins at lower BMIs than others. To learn more, it is
                advised to discuss this with your GP or practice nurse.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
