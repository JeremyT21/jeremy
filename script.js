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
    var widthOfWindow = window.innerWidth;
    var heightOfWindow = window.innerHeight;

	var nameHeader = document.getElementById('name');
    console.log(widthOfWindow);
    nameHeader.style.fontSize = (widthOfWindow / 22) + "px";

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

    //console.log(heightOfWindow);
    //console.log(widthOfWindow);

    if(fontSizeNum < 30)
        sub.style.display = "none";


    else if(fontSizeNum > 30)
    {
        sub.style.fontSize = (fontSizeNum - 18) + "px";
        sub.style.display = "block";
    }

    //console.log(fontSizeNum);

    //Below code is for resizing connected website logos.
    //Write code to check for clientwidth of #rBG, and depending on that resizes both the logos

    //var sizeOfLogo = document.getElementById('githubLogo').clientHeight;
    //console.log(sizeOfLogo);

    var gL = window.getComputedStyle(document.getElementById('githubLogo'));
    var gLPV = gL.getPropertyValue('width');
    var gLPVS = gLPV.replace('px', '');
    var currentSizeGit = parseInt(gLPVS);

    var linkL = window.getComputedStyle(document.getElementById('linkedLogo'));
    var linkLPV = linkL.getPropertyValue('width');
    var linkLPVS = linkLPV.replace('px', '');
    var currentSizeLink = parseInt(linkLPVS);

    var initialSizeGit = 152;
    var initialSizeLink = 190;

    //linked logo resize

    //console.log(currentSizeLink);
    document.getElementById('linkedLogo').style.width = ((widthOfWindow / 14) + 60) + "px";

    if(currentSizeLink > 90)
    {
        document.getElementById('linkedLogo').style.width = ((widthOfWindow / 14) + 60) + "px";
    }

    else
    {
        document.getElementById('linkedLogo').style.width = 90 + "px";
    }

    //github logo resize

    console.log(currentSizeGit);
    document.getElementById('githubLogo').style.width = ((widthOfWindow / 16) + 50) + "px";

    if(currentSizeGit < 100)
    {
        document.getElementById('githubLogo').style.width = 80 + "px";
    }

    document.getElementById('githubLogo').style.width = ((widthOfWindow / 16) + 50) + "px";

    //resizing the github logo position

    var gMLPV = gL.getPropertyValue('margin-left');
    var gMLPVS = gMLPV.replace('px', '');
    var currentSizeMLGit = parseInt(gMLPVS);

    document.getElementById('githubLogo').style.marginLeft = ((widthOfWindow / 5) + 30) + "px"

    if(currentSizeGit < 100)
    {
        document.getElementById('githubLogo').style.marginLeft = (widthOfWindow / 6) - 20 + "px"
    }

    else if(currentSizeGit < 150)
    {
        document.getElementById('githubLogo').style.marginLeft = (widthOfWindow / 7) + 60 + "px"
    }

},50);

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