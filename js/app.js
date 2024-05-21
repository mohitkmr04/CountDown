const endDate = "20 March 2024 1:54 Am"

document.getElementById("end-date").innerText=endDate;
const inputs = document.querySelectorAll("input")

function clock() {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now)/1000; //Calculate diff b/w end time and current time
    
    if(diff<0) return;

    inputs[0].value = Math.floor(diff/3600/24);
    inputs[1].value = (Math.floor(diff/3600)%24);
    inputs[2].value = (Math.floor(diff/60)%60);
    inputs[3].value = Math.floor(diff%60);
    //Convert into days

}
clock() //Initial call

//1day = 24hrs
//1hr = 60mins
//60 min = 3600sec

setInterval(
    () => {
        clock()
    },
    1000
)