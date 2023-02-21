export default class FoodItem{
    constructor(_parent,_item,_index, _deleteFood){
      this.parent = _parent;
      this.name = _item.name;
      this.cals = _item.cals;
      this.price = _item.price;
      this.id = _item._id;
      this.index = _index;
      this.deleteFood = _deleteFood;
    }
  
    render(){
      let tr = document.createElement("tr");
      document.querySelector(this.parent).append(tr);
      tr.innerHTML = `
      <td>${this.index + 1}</td>
      <td>${this.name}</td>
      <td>${this.price} NIS</td>
      <td>${this.cals}</td>
      <td><button class="bg-danger x-btn">X</button></td>
      
      `
      let xBtn = tr.querySelector(".x-btn");
      xBtn.addEventListener("click" , () =>{
       // יקפיץ פופ אפ שאם ילחץ אישור יבצע את הפעולה של המחיקה
      // && -> צריך שהראשון יהיה אמת כדי לבצע את הפעולה השניה
      window.confirm("Delete food?") && this.deleteFood(this.id)
      })
    }
  }