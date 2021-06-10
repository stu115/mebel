function showRecommendations(){

    const recommendedBox = document.querySelector(".box");

    if(recommendedBox == null) return; 
    
    recommendedBox.classList.toggle("show");

    let isBoxVisible =  recommendedBox.classList.contains("show");
    sessionStorage.setItem('status', isBoxVisible);
}

function showRecommendationsInit(){
 
    const buttons = document.querySelectorAll(".recommendedBtn");
    const recommendedBox = document.querySelector(".box");

    if(buttons == null) return;
    for (const button of buttons) {
        button.addEventListener("click", showRecommendations, false);
    }
    let boxStatus = sessionStorage.getItem('status');

    if(boxStatus === "true" || boxStatus === null){
        recommendedBox.classList.add("show");
    }
}

export {showRecommendationsInit}