function getData(data) {

    let url = window.location.href + "";
    url = url.split("?")[1];
    let getArray = url.split("&");
    var getData = {
        "hello": "hello world",
    };
    let q;
    for (let i = 0; i < getArray.length; i++) {
        //  getArray[i] = getArray[i].split("=");
        if (getArray[i].startsWith(data + "=")) {

            return getArray[i].split(data + "=").toString().replace(/,/g, "");
        }
    }
    if (!q) {
        console.error(data + "not found");
    }

}

function redirect(query) {
    let url = window.location.href;
    if (url.includes("https://www.google.com") && getData("free") != "true") {
        if(!query.includes("+%5Cg")){
            window.location.replace("https://www.bing.com/search?q=" + query + "&qs=n&sp=-1&pq=hello&sc=8-5&sk=&cvid=1FEE7878DD2D49AEBCA0ACF13024B2CA&first=11&FORM=PERE1")
        }else{
            query = query.replace("+%5Cg", "");
            window.location.replace("https://www.google.com/search?q=" + query + "&free=true");
        }
    }
}

redirect(getData("q"));