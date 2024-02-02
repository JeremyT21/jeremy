//Website loads being properly displayed.
var topBar = document.getElementById('header');
var topBarHeight = topBar.clientHeight;
var extraSpace = document.getElementById('belowMargin');
extraSpace.style.height = (topBarHeight / 8) + "%";
//console.log(topBarHeight);

//Every half a second website resizes the relativity of page elements appropriately in reference to the fixed position of the top bar.
setInterval(function()
{
	topBar = document.getElementById('header');
    topBarHeight = topBar.clientHeight;
    extraSpace = document.getElementById('belowMargin');
    extraSpace.style.height = (topBarHeight + 10) + "px";
    //console.log(topBarHeight);
},500);

//Every half a second website resizes the relativity of page elements appropriately in reference to the header bar's text.
setInterval(function()
{
	var nameHeader = document.getElementById('name');
    nameHeader.style.fontSize = document.getElementById('githubLogo').clientHeight+10 + "px";

    //Below code gets the font-size of the Jeremy Thummel header, and changes the header font-size relatively.
    var styleAttributesJ = window.getComputedStyle(nameHeader);
    nameFontSizeJ = styleAttributesJ.getPropertyValue('font-size');
    var fontSizeStringJ = nameFontSizeJ.replace('px', '');
    var fontSizeNumJ = parseInt(fontSizeStringJ);
    
    if(fontSizeNumJ > 40)
    {
        nameHeader.style.fontSize = 40 + "px";
    }

    if(fontSizeNumJ < 20)
    {
        nameHeader.style.fontSize = 20 + "px";
    }

    console.log(fontSizeNumJ);

    //Below code gets the font-size of the Jeremy Thummel header, and changes the subtitle font-size relatively.
    var styleAttributes = window.getComputedStyle(nameHeader);
    nameFontSize = styleAttributes.getPropertyValue('font-size');
    var fontSizeString = nameFontSize.replace('px', '');
    var fontSizeNum = parseInt(fontSizeString);

    var sub = document.getElementById('subtitleHeader');

    if(fontSizeNum < 25)
        sub.style.display = "none";
    
    if(fontSizeNum > 30)
    {
        sub.style.fontSize = 20 + "px";
        sub.style.display = "block";
    }

    else if(fontSizeNum > 20)
    {
        sub.style.fontSize = (fontSizeNum - 15) + "px";
        sub.style.display = "block";
    }

    //console.log(fontSizeNum);
},500);

//Keeps track of scrolling on the website and when to fade certain elements in.
document.addEventListener('scroll', function(){
    /*
    if(window.scrollY >= 0)//Fades in the pdf.
    {
        var pdfObject = document.getElementById('pdf1');
        pdfObject.style.animation = "fade 2s";
        pdfObject.style.opacity = 1;
    }

    if(window.scrollY >= 400)//Fades in screenshot 1.
    {
        var ss1 = document.getElementById('screenShot1');
        ss1.style.animation = "fade 2s";
        ss1.style.opacity = 1;
    }

    if(window.scrollY >= 1200)//Fades in screenshot 2.
    {
        var ss2 = document.getElementById('screenShot2');
        ss2.style.animation = "fade 2s";
        ss2.style.opacity = 1;
    }
    */
});