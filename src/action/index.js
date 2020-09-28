export const addUser=(data)=>{
    return{

        type:"SET USER",
        data:data
    };
}

export const addtoCart=(data)=>{

    return{
        type:"INCREMENT",
        data:data
    };
};

export const removefrombasket=(data)=>{
    return{
        type:"DECREMENT",
        data:data
    };
};

export const addadmin=(data)=>{
    return{
        type:"SET_ADMIN",
         data:data
    };
};