const fs=require('fs');


const trytoread=(filename)=>{
    var text;
    try {
        text=fs.readFileSync(filename,'utf8');
  } catch (err) {
    if (err.code === 'ENOENT') {
        //file not found
        fs.writeFileSync(filename, '[]')
        text="";
      } else {
        throw err;
      }
      
  }
  return text;
};


const register =(name, age, animal, color, disease)=>{
const appointment=
{
    name:name,
    age: age,
    animal: animal,
    color:color,
    disease:disease
};
    var appointments;
    appointments=trytoread('appointments.json');
   
    var data=[];
    if(appointments!==""){
        JSON.parse(appointments).forEach(element => {
            data.push(element);
        });
        
    }
    data.push(appointment);
    fs.writeFileSync('appointments.json',JSON.stringify(data));

};


const read=()=>{
    const appointments=trytoread('appointments.json');
    if(appointments==''||appointments=='[]'){
        console.log("Sin Data")
    }else{
        console.log(JSON.parse(appointments));

    }
};


module.exports={register, read};