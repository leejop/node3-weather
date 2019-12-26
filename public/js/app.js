
function fetchDetails(address){
    fetch("/weather?address="+address).then((response)=>{

        response.json().then((data)=>{
            console.log("here");
            console.log(data);
            document.getElementById("results").textContent=data.result;
        });


    }
    );
}
document.getElementById("submit").addEventListener("click",(evt)=>{
    evt.preventDefault();
    console.log("Clicked");
    fetchDetails(document.getElementById("address").value);
});