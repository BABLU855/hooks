// import { useState } from "react";

// function Car() {
//   const [brand, setBrand] = useState("Nexon");
//   const [model, setModel] = useState("Mustang");
//   const [year, setYear] = useState("1964");
//   const [color, setColor] = useState("red");

//   const handleColorChange = () => {
//     setColor("blue");
//   };

//   const handleBrandChange = () => {
//     setBrand("Chevrolet");
//   };

//   const handleModelChange = () => {
//     setModel("Camaro");
//   };

//   const handleYearChange = () => {
//     setYear("1970");
//   };

//   return (
//     <> <div  style={{ textAlign: "center", backgroundColor: "#f0f0f0", padding: "20px"}}>
//       <h1  style={{ color: "#333" }}>My {brand}</h1>
//       <p style={{ color: "#555" }}>
//         It is a {color} {model} from {year}.
//       </p>
//       <button onClick={handleColorChange}>Change Color</button>
//       <button onClick={handleBrandChange}>Change Brand</button>
//       <button onClick={handleModelChange}>Change Model</button>
//       <button onClick={handleYearChange}>Change Year</button>
//       </div>
//     </>
    
//   );
// }

// export default Car;
// import { useState } from "react";

// function Car() {
//   const [brand, setBrand] = useState("Ford");
//   const [model, setModel] = useState("Mustang");
//   const [year, setYear] = useState("1964");
//   const [color, setColor] = useState("red");

//   const handleColorChange = () => {
//     // Generate a random color for demonstration purposes
//     const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
//     setColor(randomColor);
//   };

//   return (
//     <div style={{ textAlign: "center", backgroundColor: "#f0f0f0", padding: "20px" }}>
//       <h1 style={{ color: "#333" }}>My {brand}</h1>
//       <p style={{ color: "#555" }}>
//         It is a {color} {model} from {year}.
//       </p>
//       <button onClick={handleColorChange}>Change Color</button>
//     </div>
//   );
// }

// export default Car;

// import { useState } from "react";

// function Car() {
//   const [brand, setBrand] = useState("Ford");
//   const [model, setModel] = useState("Mustang");
//   const [year, setYear] = useState("1964");
//   const [color, setColor] = useState("red");

//   const colorMapping = {
//     red: "Red",
//     blue: "Blue",
//     green: "Green",
//     // Add more color mappings as needed
//   };

//   const handleColorChange = () => {
//     // Generate a random color key for demonstration purposes
//     const colorKeys = Object.keys(colorMapping);
//     const randomColorKey = colorKeys[Math.floor(Math.random() * colorKeys.length)];
//     setColor(randomColorKey);
//   };

//   return (
//     <div style={{ textAlign: "center", backgroundColor: "#f0f0f0", padding: "20px" }}>
//       <h1 style={{ color: "#333" }}>My {brand}</h1>
//       <p style={{ color: "#555" }}>
//         It is a {colorMapping[color]} {model} from {year}.
//       </p>
//       <button onClick={handleColorChange}>Change Color</button>
//     </div>
//   );
// }

// export default Car;

//use effect

import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
        backgroundImage: "url('https://images.unsplash.com/photo-1706109454060-c3d43698750e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
        color: "#fff",
        fontSize: "24px",
      }}
    >
      <h1>I've rendered {count} times!</h1>
    </div>
  );
}
export default Timer



