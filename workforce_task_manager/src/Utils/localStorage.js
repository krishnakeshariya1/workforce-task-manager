function getData(){
    return JSON.parse(localStorage.getItem("app_data")) || {
        users : [],
        tasks : []
    };
};

function setData(data){
    return localStorage.setItem("app_data", JSON.stringify(data));
}