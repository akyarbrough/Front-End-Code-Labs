function changeBackground(color){
    document.body.style.backgroundColor = color;
}
document.getElementById("colorPicker")

function colorChanged(){
    console.log("Color Changed");
    console.log(this);
    changeBackground(this.value);

}

const colorPicker = document.getElementById("colorPicker");
colorPicker.addEventListener("change", colorChanged);

document.getElementById("colorForm").addEventListener("submit");
    console.log("Form submitted");

