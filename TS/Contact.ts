class Contact{

contact:String[] =[];

add(name :String){
	this.contact.push(name);
	console.log(name+" Added to the contact");
}
search(name :String){

	if(this.contact.includes(name)){
	console.log(name+" is present ");}

else{
	console.log("Not found");
}
}
Delete(name :String){
	this.contact.filter(c => c != name);
	console.log(name+" deleted");
}



}

let c= new Contact();
c.add("Pratik")
c.search("Pratik")
c.Delete("Pratik")
c.search("PratCik")