import { AxiosError } from "axios";
import { User } from "../../Domain/entities/User";
import { AuthRepository } from "../../Domain/repositories/AuthRepository";
import { ApiApp } from "../source/remote/api/ApiApp";
import { ResponseApiAmodrinks } from "../source/remote/models/ResponseApiAmodrinks";

export class AuthRepositoryImpl implements AuthRepository {

    async register(user: User): Promise<ResponseApiAmodrinks> {
        try {

            const response = await ApiApp.post<ResponseApiAmodrinks>('/users/create', user);
            return Promise.resolve(response.data);

        } catch (error) {
            let e = (error as AxiosError);
            console.log('ERROR: ' + JSON.stringify(e.response?.data));
            const apiError:ResponseApiAmodrinks = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError) 
        }
    }

    async login(email: string, password: string): Promise<ResponseApiAmodrinks> {
        try {

            const response = await ApiApp.post<ResponseApiAmodrinks>('/users/login', {
                email: email,
                password: password
            });
            return Promise.resolve(response.data);

        } catch (error) {
            let e = (error as AxiosError);
            console.log('ERROR: ' + JSON.stringify(e.response?.data));
            const apiError:ResponseApiAmodrinks = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError) 
        }
    }

}