import { API_URL } from "../services/apiService.js";

const init = () => {
    declareFromEvent();
}

const declareFromEvent = () => {
    let id_form = document.querySelector("#id_form");
    id_form.addEventListener("submit", (e) => {
        e.preventDefault();
        let bodyData = {
            name: document.querySelector("#id_name").value,
            cals: document.querySelector("#id_cals").value,
            price: document.querySelector("#id_price").value
        }
        // וולדזציה למידע שמגיע מהטופס בצד לקוח
        // בהמשך תיהיה ספרייה בדומה לג'וי
        if (bodyData.name.length < 2) {
            return alert("Name is too short")
        }
        if (bodyData.cals < 1) {
            return alert("Cals too low")
        }
        if (bodyData.price < 1) {
            return alert("price too low")
        }
        console.log(bodyData);
        doApiPost(bodyData);
    })
}

const doApiPost = async (_bodyData) => {
    let url = API_URL + "/foods";
    try {

        let resp = await axios({
            method: "POST",
            url: url,
            data: _bodyData
        })
        // אם קיבלתי איי די בקונסול גם הצד לקוח ידע שזה הצליח בוודאות גם בלי להסתכל בדאטא בייס לראות שזה הוסף
        console.log(resp.data);
        if (resp.data._id) {
            alert("food added");
            // משגר חזרה לעמוד טבלה
            window.location.href = "foodsList.html";
        }
    }
    catch (err) {
        console.log(err);
        alert("There problem,come back later")
    }
}


init();