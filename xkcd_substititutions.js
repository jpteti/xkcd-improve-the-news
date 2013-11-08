// I stole all this stuff from here: https://github.com/panicsteve/cloud-to-butt/blob/master/Source/content_script.js

walk(document.body);

function walk(node) {
	// I stole this function from here:
	// http://is.gd/mwZp7E
	var child, next;
	
	switch (node.nodeType) {
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while (child) {
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;
		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)  {
	var v = textNode.nodeValue;
	
	v = v.replace(/\ba witness\b/g, "this dude I know");
	v = v.replace(/\bA witness\b/g, "This dude I know");
    v = v.replace(/\bwitnesses\b/g, "these dudes I know");
	v = v.replace(/\bWitnesses\b/g, "These dudes I know");
	
    v = v.replace(/\ballegedly\b/g, "kinda probably");
	v = v.replace(/\bAllegedly\b/g, "Kinda probably");

	v = v.replace(/\bnew studies\b/g, "Tumblr posts");
	v = v.replace(/\bNew studies\b/g, "Tumblr posts");	
	v = v.replace(/\bnew study\b/g, "Tumblr post");
	v = v.replace(/\bNew study\b/g, "Tumblr post");
	
	v = v.replace(/\brebuild\b/g, "avenge");	
	v = v.replace(/\bRebuild\b/g, "Avenge");

	v = v.replace(/\bspace\b/g, "SPAACE");		
	v = v.replace(/\bSpace\b/g, "SPAACE");
	
	v = v.replace(/\bGoogle Glass\b/g, "Virtual Boy");		
	v = v.replace(/\bGoogle Glass\b/g, "Virtual Boy");
	
	v = v.replace(/\bsmartphone\b/g, "Pokédex");		
	v = v.replace(/\bSmartphone\b/g, "Pokédex");

	v = v.replace(/\belectric\b/g, "atomic");
	v = v.replace(/\bElectric\b/g, "atomic");
	
	v = v.replace(/\bsenator\b/g, "elf-lord");
	v = v.replace(/\bSenator\b/g, "Elf-lord");
	
	v = v.replace(/\bsenator\b/g, "elf-lord");
	v = v.replace(/\bsenators\b/g, "elf-lords");	
	v = v.replace(/\bSenator\b/g, "Elf-lord");
	v = v.replace(/\bSenators\b/g, "Elf-lords");	

	v = v.replace(/\bcars\b/g, "cats");	
	v = v.replace(/\bCars\b/g, "Cats");	
	v = v.replace(/\bcar\b/g, "cat");
	v = v.replace(/\bCar\b/g, "Cat");

	v = v.replace(/\belections\b/g, "eating contests");	
	v = v.replace(/\bElections\b/g, "Eating contests");	
	v = v.replace(/\belection\b/g, "eating contest");
	v = v.replace(/\bElection\b/g, "Eating contest");

	v = v.replace(/\bcongressional leaders\b/g, "river spirits");	
	v = v.replace(/\bCongressional leaders\b/g, "River spirits");
	
	v = v.replace(/\bhomeland security\b/g, "homestar runner");	
	v = v.replace(/\bHomeland Security\b/g, "Homestar Runner");
	
	v = v.replace(/\bcould not be reached for comment\b/g, "is guilty and everyone knows it");
	
	textNode.nodeValue = v;
}
