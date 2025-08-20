import { ResponseApiAmodrinks } from "../../Data/source/remote/models/ResponseApiAmodrinks";
import { User } from "../entities/User";

export interface AuthRepository {

    login(email: string, password: string):Promise<ResponseApiAmodrinks>;
    register(user: User): Promise<ResponseApiAmodrinks>
    
}