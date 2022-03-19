function userRole(name, role) {

  switch (role) {
    case "admin":
      return `So, ${name} is admin.`
      break;

    case "subadmin":
      return `So, ${name} is sub-admin.`
      break;
        
    case "user":
      return `So, ${name} is user.`
      break;

    case "teacher":
      return `So, ${name} is teacher.`
      break;
  
    default:
      console.log("Please give a proper name.")
      break;
  }
}

console.log(userRole("Aniket", "admin"));