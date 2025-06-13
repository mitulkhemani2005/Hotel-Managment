const submit = document.getElementById(`submit`);
const body = document.getElementsByClassName(`login_form`);
submit.addEventListener('click',async (e)=>{
    e.preventDefault();
    const Entered_email = document.getElementById(`login_email`).value;
    const Entered_password = document.getElementById(`login_password`).value;
    fetch('/',{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body: JSON.stringify({
            "EnterEmail": Entered_email,
            "EnterPass": Entered_password,
        })
    })
    .then((res)=>res.json())
    .then((res)=>{
        console.log(res.login);
        if (res.login=="Success"){
            window.location.href = "http://localhost:5000/rooms";
            console.log(`Login Success`);
        } else {
            console.log(`Login Failed`);
        }
    })
    .catch((err)=>console.log("error in Login"));
})