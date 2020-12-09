const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login){
    if (login.length>=4 && login.length<=16 ){
        return true;
    }
    else {
        return false;
    }
};
const isLoginUnique = function(allLogins, login) {
    
    if (allLogins.includes(login)){
        return true;
    }
    else {
        return false;
    }
};
const addLogin = function(allLogins, login) {
    if (!isLoginValid(login)){
        console.log('Ошибка! Логин должен быть от 4 до 16 символов');
        return;
    };
    if (isLoginUnique(allLogins, login)){
        console.log('Такой логин уже используется!');
        return;
    }
    
     allLogins.push(login);
     console.log('Логин успешно добавлен!');
    
  };
addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisextremelyfast');  // 'Ошибка! Логин должен быть от 4 до 16 символов' */