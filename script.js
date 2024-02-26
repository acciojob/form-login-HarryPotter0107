function getFormvalue() {
    //Write your code here
	let input = document.querySelectorAll("input")
	let firstName = input[0].value
	let lastname = input[1].value;
	let fullName = firstName + " " + lastname;
	alert(fullName)

}
