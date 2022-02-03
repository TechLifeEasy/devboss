

const isValid = (user) => {

    return user != undefined && user.email != undefined && user.name != undefined;
}


exports.isValid = isValid;
