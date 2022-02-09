function isEmpty(obj){

    for(let i in obj){
        if(obj[i]==''){
            return true;
        }
        
    }
    return false;
}
 
// console.log(isEmpty({'zeel':'ff','deml':'ff'}))


export {isEmpty};