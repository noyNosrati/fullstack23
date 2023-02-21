import FoodItem from "./foodItem.js";
import { API_URL } from "../services/apiService.js";

const init = () => {
  doApi();
}

const doApi = async() => {
  let url = API_URL+"/foods";
  let resp = await axios.get(url);
  console.log(resp.data);
  createTable(resp.data);
}

const createTable = (_ar) => {
  document.querySelector("#id_parent").innerHTML = "";
  _ar.forEach((item,i) => {
    let food = new FoodItem("#id_parent",item,i,deleteFood);
    food.render();
  })
}

const deleteFood = async(_idDel) => {
  try{
    let url = API_URL+"/foods/"+_idDel;
    let resp = await axios({
      url:url,
      method:"DELETE"
    })
    if(resp.data.deletedCount){
      // alert("Food del")
      doApi();
    }
  }
  catch(err){
    alert("There problem")
    console.log(err);
  }
}

init();