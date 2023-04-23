import { InMemoryDbService } from 'angular-in-memory-web-api';

export class inMemoryDataService implements InMemoryDbService {
  createDb() {
    const userData = [
      {
        email: 'example@example.com',
        phoneNumber: '310000000',
        firstname: 'Pepito Armado',
        lastname: 'Pérez Pinzon',
        documentType: 'CC',
        documentNumber: '10533422567',
        birthdate: '01-01-1992',
        expeditionDate: '01-01-2021',
      },
   ];
   const userDataComplemet = [
    {
     id: 'bf025223-3925-4407-ac60-e5e2cf5b1d35',
     country: 'Colombia',
     city: 'Bogotá',
     address: 'Calle falsa 123',
     photoProfile: 'data:image/jpeg…',
   },
   ]
   return {userData, userDataComplemet}
  }
}
