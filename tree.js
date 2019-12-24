// CC-BY: hasherezade (hasherezade.net)

function makeTree(height = 6)
{
    var treeHtml="";
    var width = 1;

    var leaf = "###"
    var snow = "-*-";
    var snowC = 4;

    var background ="#00001A";
    treeHtml = "<pre style=\"background-color:"+background+";\"><center>\n\n";
    treeHtml += "<font color=\"YELLOW\">/\\\n<     >\n\\/\n</font>"; // star
    treeHtml += "<font color=\"LIME\">";
	var shade = false;
    for (i=0; i <= height; i++) {
        for (x=0; x <= 4; x++){
            for (y=1; y <= width; y++) {
                var rand = (Math.round((Math.random() * 1000)) % snowC) + 1;
                if (rand == snowC) {
                    treeHtml += "</font><font color=WHITE>" + snow + "</font>"; 
                    shade = true;
                }
                else {
                    if (shade == false) {
                        treeHtml += leaf 
                    } else {
                        treeHtml += "<font color=GREEN>" + leaf + "</font>";
                    }
                }
            }
            treeHtml += "\n";
            width++;
        }
        width=width-3;
    }
    treeHtml += "</font>";
	treeHtml += "<font color=#000000><b style=\"background-color: #000000;\">#####\n";
	treeHtml += "#####\n</b></font>";
    treeHtml += "</center></pre>";
    document.getElementById("tree").innerHTML = treeHtml;
}

function makeFlashyTree(height = 6)
{
    makeTree(height);
    setInterval( function() { makeTree(height); }, 1000);
}