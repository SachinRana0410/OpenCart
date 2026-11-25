import { faker } from '@faker-js/faker';

export class randomDataUtils {
  static getEmail() {
    return faker.internet.email();
  }

  static getPhone() {
    return faker.phone.number({ style: 'mobile' });
  }
}
