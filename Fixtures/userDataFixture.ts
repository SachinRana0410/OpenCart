import { test as base } from './PageFixture';
import dotenv from 'dotenv';
dotenv.config();

type Fixture = {
  userData: {
    email: string;
    password: string;
  };
};

export const test = base.extend<Fixture>({
  // eslint-disable-next-line no-empty-pattern
  userData: async ({}, use) => {
    const data = {
      email: process.env.EMAIL ?? '',
      password: process.env.PASSWORD ?? '',
    };
    await use(data);
  },
});

export { expect } from '@playwright/test';
