//Contains server only code used in server rednering
//import 'server-only'
export const serverSideFunction = () => {
  console.log(
    "used multiple libraires, hide sensitive information, interactted with database"
  );
  return "Server result ";
};

// if this code does run on a client side e.g in the client only
//it will log sensitive information
//hence o ensure this doesnt be used in a client side we install the packgae server-only
//i.e npm i server-only
//a build time error will occur is used in a client side
