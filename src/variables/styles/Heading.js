const heading = () => {
    const window_width = window.innerWidth
    if (window_width > 1220){
        return '50'
    }else if (window_width > 700) {
        return '30'
    }else if (window_width < 699) {
        return '20'
    }
    window.addEventListener("resize",heading);
}



