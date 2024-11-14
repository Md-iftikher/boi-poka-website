const getStoredReadList=()=>{
    //read list using local storage

    const storedListstr=localStorage.getItem("read-list");
    if(storedListstr){
        const storedList=JSON.parse(storedListstr);
        return storedList;
    }
    else{
        return [];
    }

}
const addToStoredReadlist=(id)=>{
    const storedList=getStoredReadList();
    if(storedList.includes(id)){
        console.log(id, "already exits");
        
    }
    else{
        storedList.push(id);
        const storedListstr=JSON.stringify(storedList);
        localStorage.setItem("read-list", storedListstr);
    }

}

export {addToStoredReadlist, getStoredReadList}