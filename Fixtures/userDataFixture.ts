import {test as base} from '@playwright/test'

type Fixture = {
    userData : {
        email : string;
        password : string;
    };
};

export const test = base.extend<Fixture>({
    userData: async ({}, use)=>{
        const data = {
            email : "guptaprince.ec102@gmail.com",
            password : "Nextiswh@t123",
        };
        await use(data);
    }
})

export {expect} from '@playwright/test'