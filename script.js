const colorNumberInput  =  document.querySelector(".colorNumber");
const backgroundBox = document.querySelector(".background-page");
let color0  = document.querySelector(".color-0")
let color1  = document.querySelector(".color-1")
let color2  = document.querySelector(".color-2")
let color3  = document.querySelector(".color-3")
let color4  = document.querySelector(".color-4")
let color5  = document.querySelector(".color-5")
const directionInput = document.querySelector(".direction-input");
const linearGrad = document.querySelector(".linear")
const radilaGrad = document.querySelector(".radial")
const textBox = document.querySelector(".textBox");
let colorNum = 0;
let direcNum = 0;


const Validation = {
    checkColorNum : (value)=>{
        if(value<=6 && value>=2){
            return true;
        }
        else return false;
    },

    setBackground2 : (color0 , color1,direcNum=0,gradient="linear-gradient")=>{
        
        if(gradient=="linear-gradient"){
        backgroundBox.style = `background: ${gradient}(${direcNum}deg , ${color0.value},${color1.value});`
        getData(`background: ${gradient}(${direcNum}deg , ${color0.value},${color1.value});`)
        color0.addEventListener("input" , ()=>{
            backgroundBox.style = `background: ${gradient}(${direcNum}deg , ${color0.value},${color1.value});`
            getData(`background: ${gradient}(${direcNum}deg , ${color0.value},${color1.value});`)
        })
        color1.addEventListener("input" , ()=>{
            backgroundBox.style = `background: ${gradient}(${direcNum}deg, ${color0.value},${color1.value});`
            getData(backgroundBox.style = `background: ${gradient}(${direcNum}deg, ${color0.value},${color1.value});`)
        })
    }
    else{
        backgroundBox.style = `background: ${gradient}(${color0.value},${color1.value});`
        getData(`background: ${gradient}(${color0.value},${color1.value});`)
        color0.addEventListener("input" , ()=>{
            backgroundBox.style = `background: ${gradient}(${color0.value},${color1.value});`
            getData(`background: ${gradient}(${color0.value},${color1.value});`)
        })
        color1.addEventListener("input" , ()=>{
            backgroundBox.style = `background: ${gradient}(${color0.value},${color1.value});`
            getData(`background: ${gradient}(${color0.value},${color1.value});`)

        })
    }
    },

    setBackground3 : (color0 , color1 , color2,direcNum=0,gradient="linear-gradient")=>{
        if(gradient=="linear-gradient"){
            backgroundBox.style = `background: ${gradient}(${direcNum}deg , ${color0.value},${color1.value}, ${color2.value});`
            getData(`background: ${gradient}(${direcNum}deg , ${color0.value},${color1.value}, ${color2.value});`)
            color0.addEventListener("input" , ()=>{
                backgroundBox.style = `background: ${gradient}(${direcNum}deg , ${color0.value},${color1.value}, ${color2.value});`
                getData(`background: ${gradient}(${direcNum}deg , ${color0.value},${color1.value}, ${color2.value});`)
            })
            color1.addEventListener("input" , ()=>{
                backgroundBox.style = `background: ${gradient}(${direcNum}deg , ${color0.value},${color1.value}, ${color2.value});`
                getData(`background: ${gradient}(${direcNum}deg , ${color0.value},${color1.value}, ${color2.value});`)
            })
            color2.addEventListener("input" , ()=>{
                backgroundBox.style = `background: ${gradient}(${direcNum}deg , ${color0.value},${color1.value}, ${color2.value});`
                getData(`background: ${gradient}(${direcNum}deg , ${color0.value},${color1.value}, ${color2.value});`)
            })
        }
        else{
            backgroundBox.style = `background: ${gradient}(${color0.value},${color1.value}, ${color2.value});`
            getData( `background: ${gradient}(${color0.value},${color1.value}, ${color2.value});`)
            color0.addEventListener("input" , ()=>{
                backgroundBox.style = `background: ${gradient}(${color0.value},${color1.value}, ${color2.value});`
                getData(`background: ${gradient}(${color0.value},${color1.value}, ${color2.value});`)
            })
            color1.addEventListener("input" , ()=>{
                backgroundBox.style = `background: ${gradient}(${color0.value},${color1.value}, ${color2.value});`
                getData(`background: ${gradient}(${color0.value},${color1.value}, ${color2.value});`)
            })
            color2.addEventListener("input" , ()=>{
                backgroundBox.style = `background: ${gradient}(${color0.value},${color1.value}, ${color2.value});`
                getData(`background: ${gradient}(${color0.value},${color1.value}, ${color2.value});`)
            })
        }
    },

    setBackground4 : (color0 , color1 , color2,color3,direcNum=0,gradient="linear-gradient")=>{
       if(gradient=="linear-gradient"){ 
            backgroundBox.style = `background: ${gradient}(${direcNum}deg , ${color0.value},${color1.value}, ${color2.value},${color3.value});`
            getData(`background: ${gradient}(${direcNum}deg , ${color0.value},${color1.value}, ${color2.value},${color3.value});`)
            color0.addEventListener("input" , ()=>{
                backgroundBox.style = `background: ${gradient}(${direcNum}deg , ${color0.value},${color1.value}, ${color2.value},${color3.value});`
                getData(`background: ${gradient}(${direcNum}deg , ${color0.value},${color1.value}, ${color2.value},${color3.value});`)
            })
            color1.addEventListener("input" , ()=>{
                backgroundBox.style = `background: ${gradient}(${direcNum}deg , ${color0.value},${color1.value}, ${color2.value},${color3.value});`
                getData(`background: ${gradient}(${direcNum}deg , ${color0.value},${color1.value}, ${color2.value},${color3.value});`)
            })
            color2.addEventListener("input" , ()=>{
                backgroundBox.style = `background: ${gradient}(${direcNum}deg , ${color0.value},${color1.value}, ${color2.value},${color3.value});`
                getData(`background: ${gradient}(${direcNum}deg , ${color0.value},${color1.value}, ${color2.value},${color3.value});`)
            })
            color3.addEventListener("input" , ()=>{
                backgroundBox.style = `background: ${gradient}(${direcNum}deg , ${color0.value},${color1.value}, ${color2.value},${color3.value});`
                getData(`background: ${gradient}(${direcNum}deg , ${color0.value},${color1.value}, ${color2.value},${color3.value});`)
            })
    }
    else{
        backgroundBox.style = `background: ${gradient}(${color0.value},${color1.value}, ${color2.value},${color3.value});`
        getData(`background: ${gradient}(${color0.value},${color1.value}, ${color2.value},${color3.value});`)
        color0.addEventListener("input" , ()=>{
            backgroundBox.style = `background: ${gradient}(${color0.value},${color1.value}, ${color2.value},${color3.value});`
            getData(`background: ${gradient}(${color0.value},${color1.value}, ${color2.value},${color3.value});`)
        })
        color1.addEventListener("input" , ()=>{
            backgroundBox.style = `background: ${gradient}(${color0.value},${color1.value}, ${color2.value},${color3.value});`
            getData(`background: ${gradient}(${color0.value},${color1.value}, ${color2.value},${color3.value});`)
        })
        color2.addEventListener("input" , ()=>{
            backgroundBox.style = `background: ${gradient}(${color0.value},${color1.value}, ${color2.value},${color3.value});`
            getData(`background: ${gradient}(${color0.value},${color1.value}, ${color2.value},${color3.value});`)
        })
        color3.addEventListener("input" , ()=>{
            backgroundBox.style = `background: ${gradient}(${color0.value},${color1.value}, ${color2.value},${color3.value});`
            getData(`background: ${gradient}(${color0.value},${color1.value}, ${color2.value},${color3.value});`)
        })
    }
    },

    setBackground5 : (color0 , color1 , color2,color3,color4,direcNum=0,gradient="linear-gradient")=>{
        if(gradient=="linear-gradient"){
            backgroundBox.style = `background: ${gradient}(${direcNum}deg , ${color0.value},${color1.value}, ${color2.value},${color3.value},${color4.value});`
            getData(`background: ${gradient}(${direcNum}deg , ${color0.value},${color1.value}, ${color2.value},${color3.value},${color4.value});`)
            color0.addEventListener("input" , ()=>{
                backgroundBox.style = `background: ${gradient}(${direcNum}deg , ${color0.value},${color1.value}, ${color2.value},${color3.value},${color4.value});`
                getData(`background: ${gradient}(${direcNum}deg , ${color0.value},${color1.value}, ${color2.value},${color3.value},${color4.value});`)
            })
            color1.addEventListener("input" , ()=>{
                backgroundBox.style = `background: ${gradient}(${direcNum}deg , ${color0.value},${color1.value}, ${color2.value},${color3.value},${color4.value});`
                getData(`background: ${gradient}(${direcNum}deg , ${color0.value},${color1.value}, ${color2.value},${color3.value},${color4.value});`)
            })
            color2.addEventListener("input" , ()=>{
                backgroundBox.style = `background: ${gradient}(${direcNum}deg , ${color0.value},${color1.value}, ${color2.value},${color3.value},${color4.value});`
                getData(`background: ${gradient}(${direcNum}deg , ${color0.value},${color1.value}, ${color2.value},${color3.value},${color4.value});`)
            })
            color3.addEventListener("input" , ()=>{
                backgroundBox.style = `background: ${gradient}(${direcNum}deg , ${color0.value},${color1.value}, ${color2.value},${color3.value},${color4.value});`
                getData(`background: ${gradient}(${direcNum}deg , ${color0.value},${color1.value}, ${color2.value},${color3.value},${color4.value});`)
            })
            color4.addEventListener("input" , ()=>{
                backgroundBox.style = `background: ${gradient}(${direcNum}deg , ${color0.value},${color1.value}, ${color2.value},${color3.value},${color4.value});`
                getData(`background: ${gradient}(${direcNum}deg , ${color0.value},${color1.value}, ${color2.value},${color3.value},${color4.value});`)
            })
        }
        else{
            backgroundBox.style = `background: ${gradient}(${color0.value},${color1.value}, ${color2.value},${color3.value},${color4.value});`
            getData(`background: ${gradient}(${color0.value},${color1.value}, ${color2.value},${color3.value},${color4.value});`)
            color0.addEventListener("input" , ()=>{
                backgroundBox.style = `background: ${gradient}(${color0.value},${color1.value}, ${color2.value},${color3.value},${color4.value});`
                getData(`background: ${gradient}(${color0.value},${color1.value}, ${color2.value},${color3.value},${color4.value});`)
            })
            color1.addEventListener("input" , ()=>{
                backgroundBox.style = `background: ${gradient}(${color0.value},${color1.value}, ${color2.value},${color3.value},${color4.value});`
                getData(`background: ${gradient}(${color0.value},${color1.value}, ${color2.value},${color3.value},${color4.value});`)
            })
            color2.addEventListener("input" , ()=>{
                backgroundBox.style = `background: ${gradient}(${color0.value},${color1.value}, ${color2.value},${color3.value},${color4.value});`
                getData(`background: ${gradient}(${color0.value},${color1.value}, ${color2.value},${color3.value},${color4.value});`)
            })
            color3.addEventListener("input" , ()=>{
                backgroundBox.style = `background: ${gradient}(${color0.value},${color1.value}, ${color2.value},${color3.value},${color4.value});`
                getData(`background: ${gradient}(${color0.value},${color1.value}, ${color2.value},${color3.value},${color4.value});`)
            })
            color4.addEventListener("input" , ()=>{
                backgroundBox.style = `background: ${gradient}(${color0.value},${color1.value}, ${color2.value},${color3.value},${color4.value});`
                getData(`background: ${gradient}(${color0.value},${color1.value}, ${color2.value},${color3.value},${color4.value});`)
            })
        }
    },

    setBackground6 : (color0 , color1 , color2,color3,color4,color5,direcNum=0,gradient="linear-gradient")=>{

        if(gradient=="linear-gradient"){
            backgroundBox.style = `background: ${gradient}(${direcNum}deg , ${color0.value},${color1.value}, ${color2.value},${color3.value},${color4.value},${color5.value});`
            getData(`background: ${gradient}(${direcNum}deg , ${color0.value},${color1.value}, ${color2.value},${color3.value},${color4.value},${color5.value});`)
            color0.addEventListener("input" , ()=>{
                backgroundBox.style = `background: ${gradient}(${direcNum}deg , ${color0.value},${color1.value}, ${color2.value},${color3.value},${color4.value},${color5.value});`
                getData(`background: ${gradient}(${direcNum}deg , ${color0.value},${color1.value}, ${color2.value},${color3.value},${color4.value},${color5.value});`)
            })
            color1.addEventListener("input" , ()=>{
                backgroundBox.style = `background: ${gradient}(${direcNum}deg , ${color0.value},${color1.value}, ${color2.value},${color3.value},${color4.value},${color5.value});`
                getData(`background: ${gradient}(${direcNum}deg , ${color0.value},${color1.value}, ${color2.value},${color3.value},${color4.value},${color5.value});`)
            })
            color2.addEventListener("input" , ()=>{
                backgroundBox.style = `background: ${gradient}(${direcNum}deg , ${color0.value},${color1.value}, ${color2.value},${color3.value},${color4.value},${color5.value});`
                getData(`background: ${gradient}(${direcNum}deg , ${color0.value},${color1.value}, ${color2.value},${color3.value},${color4.value},${color5.value});`)
            })
            color3.addEventListener("input" , ()=>{
                backgroundBox.style = `background: ${gradient}(${direcNum}deg , ${color0.value},${color1.value}, ${color2.value},${color3.value},${color4.value},${color5.value});`
                getData(`background: ${gradient}(${direcNum}deg , ${color0.value},${color1.value}, ${color2.value},${color3.value},${color4.value},${color5.value});`)
            })
            color4.addEventListener("input" , ()=>{
                backgroundBox.style = `background: ${gradient}(${direcNum}deg , ${color0.value},${color1.value},${color2.value},${color3.value},${color4.value},${color5.value});`
                getData(`background: ${gradient}(${direcNum}deg , ${color0.value},${color1.value}, ${color2.value},${color3.value},${color4.value},${color5.value});`)
            })
            color5.addEventListener("input" , ()=>{
                backgroundBox.style = `background: ${gradient}(${direcNum}deg , ${color0.value},${color1.value}, ${color2.value},${color3.value},${color4.value},${color5.value});`
                getData(`background: ${gradient}(${direcNum}deg , ${color0.value},${color1.value}, ${color2.value},${color3.value},${color4.value},${color5.value});`)
            })
    }
    else{
        backgroundBox.style = `background: ${gradient}(${color0.value},${color1.value}, ${color2.value},${color3.value},${color4.value},${color5.value});`
        getData(`background: ${gradient}(${color0.value},${color1.value}, ${color2.value},${color3.value},${color4.value},${color5.value});`)
        color0.addEventListener("input" , ()=>{
            backgroundBox.style = `background: ${gradient}(${color0.value},${color1.value}, ${color2.value},${color3.value},${color4.value},${color5.value});`
            getData(`background: ${gradient}(${color0.value},${color1.value}, ${color2.value},${color3.value},${color4.value},${color5.value});`)
        })
        color1.addEventListener("input" , ()=>{
            backgroundBox.style = `background: ${gradient}(${color0.value},${color1.value}, ${color2.value},${color3.value},${color4.value},${color5.value});`
            getData(`background: ${gradient}(${color0.value},${color1.value}, ${color2.value},${color3.value},${color4.value},${color5.value});`)
        })
        color2.addEventListener("input" , ()=>{
            backgroundBox.style = `background: ${gradient}(${color0.value},${color1.value}, ${color2.value},${color3.value},${color4.value},${color5.value});`
            getData(`background: ${gradient}(${color0.value},${color1.value}, ${color2.value},${color3.value},${color4.value},${color5.value});`)
        })
        color3.addEventListener("input" , ()=>{
            backgroundBox.style = `background: ${gradient}(${color0.value},${color1.value}, ${color2.value},${color3.value},${color4.value},${color5.value});`
            getData(`background: ${gradient}(${color0.value},${color1.value}, ${color2.value},${color3.value},${color4.value},${color5.value});`)
        })
        color4.addEventListener("input" , ()=>{
            backgroundBox.style = `background: ${gradient}(${color0.value},${color1.value},${color2.value},${color3.value},${color4.value},${color5.value});`
            getData(`background: ${gradient}(${color0.value},${color1.value}, ${color2.value},${color3.value},${color4.value},${color5.value});`)
        })
        color5.addEventListener("input" , ()=>{
            backgroundBox.style = `background: ${gradient}(${color0.value},${color1.value}, ${color2.value},${color3.value},${color4.value},${color5.value});`
            getData(`background: ${gradient}(${color0.value},${color1.value}, ${color2.value},${color3.value},${color4.value},${color5.value});`)
        })
    }
    },

    setBackgroundColor : (number  , ...param)=>{
        if(number==2){
            let [color0 , color1,direcNum,gradient] = param;
            Validation.setBackground2(color0 ,color1,direcNum,gradient)
        }
        if(number==3) {
            let [color0 ,color1 , color2,direcNum,gradient] = param;
        Validation.setBackground3(color0 ,color1 , color2,direcNum,gradient)
    }
        if(number==4) {
            let [color0 ,color1 , color2,color3,direcNum,gradient] = param;
        Validation.setBackground4(color0 ,color1 , color2,color3,direcNum,gradient)
    }
        if(number==5) {
            let [color0 ,color1 , color2,color3,color4,direcNum,gradient] = param;
        Validation.setBackground5(color0 ,color1 , color2,color3,color4,direcNum,gradient)
    }
        if(number==6) {
            let [color0 ,color1 , color2,color3,color4,color5,direcNum,gradient] = param;
        Validation.setBackground6(color0 ,color1 , color2,color3,color4,color5,direcNum,gradient)
        }

    },

    onChangeEvent : (gradient = "linear-gradient")=>{
        direcNum = parseInt(directionInput.value.trim());
        if(colorNum == 2) Validation.setBackgroundColor(colorNum, color0 , color1, direcNum,gradient)
        if(colorNum == 3) Validation.setBackgroundColor(colorNum, color0 , color1,color2, direcNum,gradient)
        if(colorNum == 4) Validation.setBackgroundColor(colorNum, color0 , color1,color2,color3, direcNum,gradient)
        if(colorNum == 5) Validation.setBackgroundColor(colorNum, color0 , color1,color2,color3,color4, direcNum,gradient)
        if(colorNum == 6) Validation.setBackgroundColor(colorNum, color0 , color1,color2,color3,color4,color5, direcNum,gradient)
    }
}

//code for getting number of color from user.
colorNumberInput.addEventListener("change",()=>{

   colorNum =  parseInt(colorNumberInput.value.trim());
    if(Validation.checkColorNum(colorNum)){
        const colorBox = document.querySelector(".color-box")
        let color = "";
        for(let i=0; i<colorNum; i++){
            color += `  <div class="color">
            <label for="color">Select Color : </label>
            <input type="color" class="color-${i}">
        </div>`
            
        }
        colorBox.innerHTML = color;
    }
    else{
        alert("Please Enter Valid Color Number From range betweeng (2-6)")
    }
         color0  = document.querySelector(".color-0")
         color1  = document.querySelector(".color-1")
         color2  = document.querySelector(".color-2")
         color3  = document.querySelector(".color-3")
         color4  = document.querySelector(".color-4")
         color5  = document.querySelector(".color-5")
    if(colorNum == 2) Validation.setBackgroundColor(colorNum , color0 , color1)
    if(colorNum==3) Validation.setBackgroundColor(colorNum , color0 ,color1 , color2);
    if(colorNum==4) Validation.setBackgroundColor(colorNum ,color0 ,color1 , color2 ,color3)
    if(colorNum==5) Validation.setBackgroundColor(colorNum ,color0 ,color1 , color2 ,color3,color4)
    if(colorNum==6) Validation.setBackgroundColor(colorNum ,color0 ,color1 , color2 ,color3,color4,color5)
 

})

directionInput.addEventListener("input",()=>{
    Validation.onChangeEvent();
})

linearGrad.addEventListener("click",()=>{
    Validation.onChangeEvent();
})
radilaGrad.addEventListener("click",()=>{
    Validation.onChangeEvent("radial-gradient")
   
})
function getData(data){
    textBox.value = data;
}