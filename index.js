/* Morgan Fleshren */

function menuOpen(){
	//console.log("menuOpen func");
	var navFlyout = $("#navMobile");
	var hamburger = $("#hamburger");
	//console.log(navFlyout.css("display"));
	if(navFlyout.css("display") == "none"){
		navFlyout.css("display", "block"); //make flyout appear
		hamburger.attr("src", "./images/closeMenu.png"); //change src for button
	} else {
		navFlyout.css("display", "none");
		hamburger.attr("src", "./images/hamburger.png");
	}
}


function main(){

}
main()