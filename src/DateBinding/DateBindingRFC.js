import React from "react";

const school = "DH Can Tho";
const student1 = {
  name: "Covid 19",
  age: 19,
};

export default function DateBindingRFC() {
  const name = "Dat Le Thanh";
   const renderInfoVirus = () => {
     const virus = {
       id: "Covid 19",
       name: "corona",
       where: "HCM",
       alias: "SARS-COV-2",
     };

     return (
       <div className="card text-white bg-primary">
         <img className="card-img-top" src="holder.js/100px180/" alt="virus.id" />
         <div className="card-body">
           <h4 className="card-title">{virus.name}</h4>
           <p className="card-text">{virus.alias}</p>
           <p className="card-text">{virus.where}</p>
           <p className="card-text">{virus.id}</p>
         </div>
       </div>
     );
   };
  return (
    <div>
      <h1>React function component date binding</h1>
      <hr />
      <h1 className="text-danger">{name}</h1>
      <h1>name: {student1.name} - age: {student1.age} - school: {school}</h1>
      <h3>Info virus</h3>
      {renderInfoVirus()}
    </div>
  );
}
