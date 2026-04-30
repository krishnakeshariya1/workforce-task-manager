export const getData =() =>{
    return JSON.parse(localStorage.getItem("app_data")) || {
        users : [{
            id : 1, 
            name : "Krishna keshariya",
            email : "keshariyakrishna8@gmail.com",
            password : 224755,
            role : "admin"
        }],
        tasks : []
    };
};

export const setData =(data) =>{
    return localStorage.setItem("app_data", JSON.stringify(data));
}
