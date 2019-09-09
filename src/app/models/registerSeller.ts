import { RegisterUser } from './registerUser';
import { Address } from './address';

export class RegisterSeller extends RegisterUser {
    id: number; 
    bussinessNm: string;
    approvedBy: string;
    approvedInd: boolean;
    address: Address;
}
