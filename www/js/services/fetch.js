"use strict";
const apiUrl = "https://perfectpoop.be/api";
export default class fetchApi {
  
  getHeaders() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("lang", localStorage.getItem('language'));

    // check if localStorage Token
    const authToken = localStorage.getItem("token") ?? null;
    if (authToken) {
      myHeaders.append("x-auth-token", `${authToken}`);
    }
    return myHeaders;
  }

  async createUser(identifyidInput) {
  //  alert("Server Call Now")
    const raw = JSON.stringify({
      identifyid: identifyidInput
    });

    const requestOptions = {
      method: "POST",
      headers: this.getHeaders(),
      body: raw,
    };
    const response = await fetch(`${apiUrl}/user`, requestOptions);
    return await response.json();
  }

  async createShop(shopName, campDay) {
    const raw = JSON.stringify({
      name: shopName,
      campday: campDay,
    });

    const requestOptions = {
      method: "POST",
      headers: this.getHeaders(),
      body: raw,
    };

    const response = await fetch(`${apiUrl}/shop`, requestOptions);
    return await response.json();
  }

  async UpdateUser() {
   

    const raw = JSON.stringify({
        "shop": localStorage.getItem("shopId"),
        "iswinner": localStorage.getItem("iswinner"),
        "movescount":localStorage.getItem("moves count"),
        "playtime":localStorage.getItem("playtime"),
        "visitshop":localStorage.getItem("shop_login_id"),
    });

    const requestOptions = {
      method: "POST",
      headers: this.getHeaders(),
      body: raw,
    };

    const response = await fetch(`${apiUrl}/user/${localStorage.getItem("UserId")}`, requestOptions);
    // console.log("DDDDDDDDDDDDDD is" , response)
    return await response.json();

  }
  async GetPrizeRewards(){
    // const shopid = localStorage.getItem("shopId");
    // const userid = localStorage.getItem("UserId");
    // console.log("Shoooooopiddd is ", shopid)
    // console.log("userrrr is isss" , userid)

    const raw = JSON.stringify({
      shopid:  localStorage.getItem("shopId"),
      userid: localStorage.getItem("UserId")
   });
   const requestOptions = {
    method: "POST",
    headers: this.getHeaders(),
    body: raw,
  };
   const response = await fetch(`${apiUrl}/user/rewards`, requestOptions);
  
  return await response.json();

  }
  async UpdateUserloseemail() {
   
    const raw = JSON.stringify({
        email: localStorage.getItem("loser-email"),
        first_name : localStorage.getItem("firstName"),
        last_name : localStorage.getItem("lastName"),
        address : localStorage.getItem("Address"),
        city : localStorage.getItem("YourCity"),
        zipcode : localStorage.getItem("inputZip"),
        subscribenewslatter: localStorage.getItem("Newsletter_Subscribe"),
        acceptprivacy:localStorage.getItem("accept_privacy"),
        acceptgamerules:localStorage.getItem("accept_rules")
    });

    const requestOptions = {
      method: "POST",
      headers: this.getHeaders(),
      body: raw,
    };

    const response = await fetch(`${apiUrl}/user/${localStorage.getItem("UserId")}`, requestOptions);

    return await response.json();

  }


  async winnerData() {
   
    const raw = JSON.stringify({
      email: localStorage.getItem("winner-email"),
      first_name : localStorage.getItem("firstName"),
      last_name : localStorage.getItem("lastName"),
      address : localStorage.getItem("Address"),
      city : localStorage.getItem("YourCity"),
      zipcode : localStorage.getItem("inputZip"),
      subscribenewslatter: localStorage.getItem("Newsletter_Subscribe"),
      acceptprivacy:localStorage.getItem("accept_privacy"),
      acceptgamerules:localStorage.getItem("accept_rules")
    });

    const requestOptions = {
      method: "POST",
      headers: this.getHeaders(),
      body: raw,
    };
   console.log("Udddddddddddddd" , localStorage.getItem("UserId"))
    const response = await fetch(`${apiUrl}/user/${localStorage.getItem("UserId")}`, requestOptions);
    return await response.json();

  }


  

  async catAndPet() {

    const cat = localStorage.getItem("catPetPuppy");
    const dog =localStorage.getItem("catPetPuppy");
    const pupy =  localStorage.getItem("animal_baby");   

    const raw = JSON.stringify({
      animaldetail :{
        name : localStorage.getItem('animal_name'),
        age : localStorage.getItem('pet_age'),
        // iscat : cat === "iscat" ? true : false,
        // isdog : dog === "isdog"  ? true : false,
        // iskitten_ispuppy : pupy === "puppy" ? true : false,
       iskitten_ispuppy : localStorage.getItem("weightValue"),
        // isweight : localStorage.getItem("weightValue") 
    
      } 
       
    });

    const requestOptions = {
      method: "POST",
      headers: this.getHeaders(),
      body: raw,
    };

    const response = await fetch(`${apiUrl}/user/${localStorage.getItem("UserId")}`, requestOptions);
    return await response.json();

  }
  
  

  async getAllShop() {
    const requestOptions = {
      method: "GET",
      headers: this.getHeaders(),
    };

    const response = await fetch(`${apiUrl}/shop/shopbylanguage`, requestOptions);
    return await response.json();
  }

  async rewards(rewadsShopId, rewadsUserId) {
    const raw = JSON.stringify({
      shopid: rewadsShopId,
      userid: rewadsUserId,
    });

    const requestOptions = {
      method: "POST",
      headers: this.getHeaders(),
      body: raw,
    };

    const response = await fetch(`${apiUrl}/user/rewards`, requestOptions);
    return await response.json();
  }

  
  async login() {

    const raw = JSON.stringify({
      "name": localStorage.getItem("login_email"),
      "password": localStorage.getItem("login_pasword")
    });

    const requestOptions = {
      method: "POST",
      headers: this.getHeaders(),
      body: raw,
    };

    const response = await fetch(`${apiUrl}/storeadmin/login`, requestOptions);
    return await response.json();

  }

}
// export const apiUrl;