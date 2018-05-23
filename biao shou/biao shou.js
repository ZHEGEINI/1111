window.onload = function () {
    let yuu = document.querySelectorAll(".yuu")
    let lii = document.querySelectorAll(".lii")
    // console.log(yuu);
    // console.log(lii);
    for (let i=0;i<yuu.length;i++){
        yuu[i].onclick = function () {
            for(let j=0;j<yuu.length;j++){
                yuu[j].className = "yuu";
                lii[j].style.zIndex=10
            }
            this.className = 'yuu hot'
            lii[i].style.zIndex =999;
        }
    }
    let t =index =0;
    setInterval(move,8000)
    function  move() {
       index++;
       if(index===lii.length){
           index = 0;
       }
       lii.forEach(function (element) {
           element.style.zIndex=10
       })
        yuu.forEach(element=>element.className = 'yuu')
            lii[index].style.zIndex = 999;
       yuu[index].className = 'yuu hot';
    }
}
