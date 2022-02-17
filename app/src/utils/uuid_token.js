import { v4 as uuidv4 } from 'uuid';
//随机生成一个随机字符串，且每次执行不能发生变化，游客身份持久存储
export const getUUID = ()=>{
    //从本地存储的uuid，查看是否有
    let uuid_token = localStorage.getItem('UUIDTOKEN');
    //如果没有
    if (!uuid_token){
        //生成游客临时身份
        uuid_token = uuidv4();
        //本地存储一次
        localStorage.setItem('UUIDTOKEN',uuid_token);
    }
    //没有返回undefined
    return uuid_token;
}