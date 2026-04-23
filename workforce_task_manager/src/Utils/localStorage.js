export const getData =() =>{
    return JSON.parse(localStorage.getItem("app_data")) || {
        users : [],
        tasks : []
    };
};

export const setData =(data) =>{
    return localStorage.setItem("app_data", JSON.stringify(data));
}
