const{register, read}=require('./operations');
const arguments=process.argv.slice(2);
if(arguments[0].toLowerCase() === "registrar"){
    const name=arguments[1];
    const age=arguments[2];
    const animal=arguments[3];
    const color=arguments[4];
    const disease=arguments[5];

    register(name,age,animal,color,disease);
}else if(arguments[0].toLowerCase() === "leer"){
    read();
}else{
    console.log("Error en la operación");
}
