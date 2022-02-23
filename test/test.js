//Dependencies
const LD = require("../index")

//Main
void async function Main(){
    const result = await LD.detect("こんにちは")

    console.log(result)
}()