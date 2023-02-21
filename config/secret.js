// קובץ שמכיל את כל המשתנים הסודיים
// dotEnv -> ספריה שיודעת לקרוא משתנים מקובץ
require("dotenv").config();
console.log(process.env.DBUSER)

exports.config = {
    // mongoUser:"koko80",
    // mongoPass:"noy9988noy9988",
    // tokenSecret:"monkeysSecret",
    
    mongoUser:process.env.DBUSER,
    mongoPass:process.env.DBPASS,
    tokenSecret:process.env.TOKENSECRET

}