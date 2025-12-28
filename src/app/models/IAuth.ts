
export interface ILoginRequest {
    email: string;
    password:string;
}

export interface ILoginResponse {
    message: string;
    date: {
        accessToken: string;
        refreshToken: string;
        profile: {
            _id: string;
            first_name: string;
            last_name: string;
            email:string
            status: string;
            role: string;
            shipping_addresses: any[];
        };
    };
}
//1:09:52

export interface ILoginResponse {
  code: number;
  status: string;
  message: string;
  timestamp: string;
}