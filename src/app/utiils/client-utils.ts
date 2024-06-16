//functiosn here are mainly used for client side use
//import 'client-only'
export const clientSideFunction = () => {
  console.log(
    `use window object 
        use local storage (basically inbuild client side funtions etc)`
  );
  return "client result";
};
//note the cosolelogs just represent functions or operations that will be perfomed
//to ensure this only works in client components we can install the packge called client-only
//if u want to use it just uncomment the client-only'//i coly commented it bevcause the packgage isnt installed , it kind of works as a gurad clause
