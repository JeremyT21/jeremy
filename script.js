//Gets initial value of certain variables. (e.g. original logo sizes)
var o_logoGithubSize = document.getElementById('githubLogo').clientWidth;

//Website loads being properly displayed.
var topBar = document.getElementById('header');
var topBarHeight = topBar.clientHeight;
var extraSpace = document.getElementById('belowMargin');
extraSpace.style.height = (topBarHeight / 8) + "%";
console.log(topBarHeight);

//Every half a second website resizes the relativity of page elements appropriately in reference to the fixed position of the top bar.
setInterval(function()
{
	topBar = document.getElementById('header');
    topBarHeight = topBar.clientHeight;
    extraSpace = document.getElementById('belowMargin');
    extraSpace.style.height = (topBarHeight + 10) + "px";
    console.log(topBarHeight);
},500);

//Keeps track of scrolling on the website and when to fade certain elements in.
document.addEventListener('scroll', function(){
    if(window.scrollY >= 100)
    {
        var pdfObject = document.getElementById('pdf1');
        pdfObject.style.animation = "fade 2s";
        pdfObject.style.opacity = 1;
    }
});