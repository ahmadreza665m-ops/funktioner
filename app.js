const halsa = (name,age,roll="gäst") => {
    console.log("hej"+ name,age,roll)
    if( age<18) {
        return console.log("du är inte myndig")
    }
    console.log("du är myndigt")

}
halsa("ali",20,"student")

