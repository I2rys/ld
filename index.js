//Dependencies
const Axios = require("axios")

//Variables
async function detect(word = String){
    var result;

    try{
        const response = await Axios({
            method: "GET",
            url: `https://languagelayer.com/php_helper_scripts/language_api.php?secret_key=f39483d3777fe9b6c00b867482bef5b7&query=${word}`
        })

        result = response.data
    }catch{
        const response = await Axios({
            method: "GET",
            url: `https://languagelayer.com/php_helper_scripts/language_api.php?secret_key=f39483d3777fe9b6c00b867482bef5b7&query=${encodeURI(word)}`
        })

        result = response.data
    }

    return result
}

//Exporter
module.exports = {
    detect
}