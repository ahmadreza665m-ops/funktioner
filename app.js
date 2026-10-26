const skapabil = (marke,farg = "svart") => {
    return {
        bilmarke: marke,
        bilfarg:farg
    };
};
const bil1= skapabil("volvo","röd");
const bil2= skapabil("bmw", "svart");
console.log(bil1.bilfarg)

//const halsa = (name,age,roll="gäst") => {
    console.log("hej"+ name,age,roll)
    if( age<18) {
        return console.log("du är inte myndig")
    }
    console.log("du är myndigt ")


halsa("ali",20,"student ")



// Arrow function med default-värde
const skapaProfil = (namn, roll = "Gäst") => {
  // Skapar ett objekt som returneras
  return {
    anvandarnamn: namn,
    behorighet: roll,
    skapad: "2026-10-26"
  };
};

// Anrop 1: Båda argumenten skickas
const admin = skapaProfil("Ali", "Admin");
// admin.behorighet ➔ "Admin"

// Anrop 2: Saknar andra argumentet (använder default)
const okand = skapaProfil("Sara");
// okand.behorighet ➔ "Gäst"
