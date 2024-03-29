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
},50);

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
    console.log("window width "+widthOfWindow);

    //as if statements go down in the code, the lower if statements take priority
    if(fontSizeNum < 30)
        sub.style.display = "none";


    else if(fontSizeNum > 30)
    {
        sub.style.fontSize = (fontSizeNum - 18) + "px";
        sub.style.display = "block";
    }

    if(widthOfWindow < 1300)
        sub.style.display = "none";

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

    var profL = window.getComputedStyle(document.getElementById('profilePic'));
    var profLPV = profL.getPropertyValue('width');
    var profLPVS = profLPV.replace('px', '');
    var currentSizeProfile = parseInt(profLPVS);

    //screenshot sizes
    var ss1L = window.getComputedStyle(document.getElementById('ss1'));
    var ss1LPV = ss1L.getPropertyValue('width');
    var ss1LPVS = ss1LPV.replace('px', '');
    var currentSizeSS1 = parseInt(ss1LPVS);

    var ss2L = window.getComputedStyle(document.getElementById('ss2'));
    var ss2LPV = ss2L.getPropertyValue('width');
    var ss2LPVS = ss2LPV.replace('px', '');
    var currentSizeSS2 = parseInt(ss2LPVS);

    var ss3L = window.getComputedStyle(document.getElementById('ss3'));
    var ss3LPV = ss3L.getPropertyValue('width');
    var ss3LPVS = ss3LPV.replace('px', '');
    var currentSizeSS3 = parseInt(ss3LPVS);

    var initialSizeGit = 152;
    var initialSizeLink = 190;

    //linked logo resize

    console.log(currentSizeLink);
    document.getElementById('linkedLogo').style.width = ((widthOfWindow / 14) + 60) + "px";

    if(currentSizeLink < 90)
    {
        document.getElementById('linkedLogo').style.width = 90 + "px";
    }

    document.getElementById('linkedLogo').style.width = ((widthOfWindow / 14) + 60) + "px";

    //github logo resize

    console.log(currentSizeGit);
    document.getElementById('githubLogo').style.width = ((widthOfWindow / 16) + 50) + "px";

    if(currentSizeGit < 100)
    {
        document.getElementById('githubLogo').style.width = 80 + "px";
    }

    document.getElementById('githubLogo').style.width = ((widthOfWindow / 16) + 50) + "px";

    //picture of avatar resize

    document.getElementById('profilePic').style.width = ((widthOfWindow / 10) + 80) + "px";

    if(currentSizeProfile < 100)
    {
        document.getElementById('profilePic').style.width = 100 + "px";
    }

    document.getElementById('profilePic').style.width = ((widthOfWindow / 10) + 80) + "px";

    //resizing the github logo position
    var gMLPV = gL.getPropertyValue('margin-left');
    var gMLPVS = gMLPV.replace('px', '');
    var currentSizeMLGit = parseInt(gMLPVS);

    document.getElementById('githubLogo').style.marginLeft = ((widthOfWindow / 5) + 30) + "px"

    if(currentSizeGit < 100)
    {
        document.getElementById('githubLogo').style.marginLeft = (widthOfWindow / 6) - 20 + "px"
    }

    /*
    else if(currentSizeGit < 150)
    {
        document.getElementById('githubLogo').style.marginLeft = (widthOfWindow / 7) + 60 + "px"
    }
    */

    //resizing beginning paragraph element
    if(widthOfWindow < 1490)
    {
        var introP = document.getElementById('intro');
        introP.style.fontSize = 12+"px";
    }

    else
    {
        var introP = document.getElementById('intro');
        introP.style.fontSize = 20+"px";
    }

    //resizing pdf
    if(widthOfWindow < 1490)
    {
        var pdfTextObj = document.getElementById('pdfText');
        var pdfTextLink = document.getElementById('pdfLink');
        //changes positioning
        pdfTextObj.style.marginTop = -60+"px";
        pdfTextObj.style.marginBottom = -4+"px";
        //changes size
        pdfTextLink.style.fontSize = 18+"px";
    }

    else
    {
        var pdfTextObj = document.getElementById('pdfText');
        var pdfTextLink = document.getElementById('pdfLink');
        pdfTextObj.style.marginTop = 2+"%";
        pdfTextObj.style.marginBottom = "auto";
        pdfTextLink.style.fontSize = 25+"px";
    }


    //****************************
    //resizing timeline code
    //inspired by code from: https://www.educative.io/answers/how-to-create-a-timeline-in-html
    if(widthOfWindow < 1490)
    {
        //changing the position relativity of timeline header
        var tHeader = document.getElementById('timelineHeader');
        tHeader.style.marginBottom = 0+"px";
        tHeader.style.fontSize = 25+"px";

        //Below code changes the text formatting of the left and right timeline elements so they are no longer in a timeline format
        var leftElements = document.getElementsByClassName('timeline-item left');

        //below loops go through left and right timeline events and remove the left position of each timeline event
        //and change the font-size to be smaller for a smaller window width
        for (var i = 0; i < leftElements.length; i++)
        {
            var leftContentElements = leftElements[i].getElementsByClassName('timeline-content');
            var leftContentDescs = leftElements[i].getElementsByClassName('timeline-description');
            var leftContentDates = leftElements[i].getElementsByClassName('timeline-date');
            for (var j = 0; j < leftContentElements.length; j++)
            {
                leftContentElements[j].style.left = 'auto';
                leftContentElements[j].style.textAlign = "center";
                leftContentDescs[j].style.marginTop = -5+"px";
                leftContentDescs[j].style.fontSize = 12+"px";
                leftContentDates[j].style.marginTop = -40+"px";
            }
        }
        
        var rightElements = document.getElementsByClassName('timeline-item right');

        for (var i = 0; i < rightElements.length; i++)
        {
            var rightContentElements = rightElements[i].getElementsByClassName('timeline-content');
            var rightContentDescs = rightElements[i].getElementsByClassName('timeline-description');
            var rightContentDates = rightElements[i].getElementsByClassName('timeline-date');
            for (var j = 0; j < rightContentElements.length; j++)
            {
                rightContentElements[j].style.left = 'auto';
                rightContentElements[j].style.textAlign = "center";
                rightContentDescs[j].style.marginTop = -5+"px";
                rightContentDescs[j].style.fontSize = 12+"px";
                rightContentDates[j].style.marginTop = -40+"px";
            }
        }

        //This line adds the timeline visual elements to hideElements in order to hide the timeline visuals
        document.body.classList.add('hideElements');

        //Below code checks the sizes of each screenshot and makes sure they're not too small even when the window is very small
        if(widthOfWindow < 900)
        {
            document.getElementById('ss1').style.width = 200 + "px";
            document.getElementById('ss2').style.width = 200 + "px";
            document.getElementById('ss3').style.width = 200 + "px";
        }

        //Below code checks the sizes of each screenshot and makes sure they're not too small even when the window is small
        else
        {
            if (currentSizeSS1 < 250)
                document.getElementById('ss1').style.width = 250 + "px";

            if(currentSizeSS2 < 250)
                document.getElementById('ss2').style.width = 260 + "px";

            if(currentSizeSS3 < 250)
                document.getElementById('ss3').style.width = 260 + "px";
        }
        
    }

    else
    {

        //changing the position relativity of timeline header
        var tHeader = document.getElementById('timelineHeader');
        tHeader.style.marginBottom = 10+"px";
        tHeader.style.fontSize = 50+"px";

        //Below code changes the text formatting of the left and right timeline elements so they are in a timeline format
        var leftElements = document.getElementsByClassName('timeline-item left');

        //below loops go through left and right timeline events and reset the left position of each timeline event
        //and change the font-size to be bigger for a bigger window width
        for (var i = 0; i < leftElements.length; i++)
        {
            var leftContentElements = leftElements[i].getElementsByClassName('timeline-content');
            var leftContentDescs = leftElements[i].getElementsByClassName('timeline-description');
            for (var j = 0; j < leftContentElements.length; j++)
            {
                leftContentElements[j].style.left = '65%';
                leftContentElements[j].style.textAlign = "left";
                leftContentDescs[j].style.marginTop = "auto";
                leftContentDescs[j].style.fontSize = 25+"px";
            }
        }
    
        var rightElements = document.getElementsByClassName('timeline-item right');

        for (var i = 0; i < rightElements.length; i++)
        {
            var rightContentElements = rightElements[i].getElementsByClassName('timeline-content');
            var rightContentDescs = rightElements[i].getElementsByClassName('timeline-description');
            for (var j = 0; j < rightContentElements.length; j++)
            {
                rightContentElements[j].style.left = '-10%';
                rightContentElements[j].style.textAlign = "left";
                rightContentDescs[j].style.marginTop = "auto";
                rightContentDescs[j].style.fontSize = 25+"px";
            }
        }

        //This line removes the timeline visual elements to hideElements in order to show the timeline visuals
        document.body.classList.remove('hideElements');

        //Below code sets the screenshots back to their normal sizes
        document.getElementById('ss1').style.width = 50 + "%";
        document.getElementById('ss2').style.width = 50 + "%";
        document.getElementById('ss3').style.width = 50 + "%";
    }
    //end of resizing timeline
    //****************************

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