// Використовуючи утиліту Partial та generics, виправте тип параметра функції 
// так, щоб уникнути помилок типізації.

type User = {
     name: string;
     surname: string;
     email: string;
     password: string;
    }
    
    function createOrUpdateUser (initialValues: Partial<User>): User {
     // Оновлення користувача
    const updatedUser: User = {
        name: '',
        surname: '',
        email: '',
        password: ''
    }
    return {
        ...updatedUser,
        ...initialValues
    }
    }
    
    createOrUpdateUser({ 
      email: 'user@mail.com', 
      password: 'password123' 
    });
    