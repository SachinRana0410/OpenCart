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
            email : process.env.EMAIL ?? '',
            password : process.env.PASSWORD ?? '',
        };
        await use(data);
    }
})

export {expect} from '@playwright/test'