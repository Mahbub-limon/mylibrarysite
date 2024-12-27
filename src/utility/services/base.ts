import axios,{AxiosInstance} from "axios";

export class BaseService{
    static baseURL:string="http://localhost:5176/api/";

    static createInstance(){
        let header:any={
            'Accept':'application/json',
            'Content-Type': 'application/json'

        };

        const client:AxiosInstance = axios.create({
            baseURL:BaseService.baseURL,
            headers:{...header}
        });
        return client;
                  
    }
}