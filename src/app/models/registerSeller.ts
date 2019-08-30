import { RegisterUser } from './registerUser';
import { Address } from './address';

export class RegisterSeller extends RegisterUser {
    
    bussinessNm: string;
    address: Address;
}
