// return html style for completed element
function getCompletedClass(score){

    if(score >= 100){
        return 'nodeCompleted';
    }
    else if(score >= 75){
        return 'nodePassed';
    }
    return 'nodeNotCompleted';
}

// return html styled text for completed element
function getCompletedText(score)
{
    if(score >= 100){
        return '<span class=\"completed\">Finished</span>';
    }
    else if(score >= 75){
        return "<span class=\"passed\">Passed</span>"
    }
    return "<span class=\"notCompleted\">Not completed</span>"
}

// builds up the course treeview layout
function configureTree(){
	var config = {
		container: "#overview",
		connectors: {
			type: 'step'
		},
	};

	var parent_node = {
		text: { name: "INF3272" },
		HTMLclass : "nodeRoot",
		innerHTML : "INF3272""<br><p><a href=\"/node/117#overlay-context=node/11\" target=\"_self\"> Introduction </a></p>"
	};

	var first_child = {
		parent: parent_node,
		text: { name: "www Content Tools" },
		HTMLclass : getCompletedClass(content),
		innerHTML : "<p><a href=\"/node/9#overlay-context=node/19\" target=\"_self\">WWW <br> Content Tools</a></p><div>" + getCompletedText(content) + "</div>"
		
	};

	var second_child = {
		parent: parent_node,
		text: { name: "Information Architecture" },
		HTMLclass : getCompletedClass(architecture),
		innerHTML : "<p><a href=\"/node/15#overlay-context=node/9\" target=\"_self\">Information <br>Architecture</a></p><div>" + getCompletedText(architecture) + "</div>"
	};

	var grandChild1 =  {
		parent: first_child,
		text: { name: "WCMS Drupal 7" },
		HTMLclass : getCompletedClass(drupal7),
		innerHTML : "<p><a href=\"/node/100#overlay-context=node/100\" target=\"_self\">WCMS <br> Drupal 7</a></p><div>" + getCompletedText(drupal7) + "</div>"
	};

	var grandChild3 =  {
		parent: first_child,
		text: { name: "Legal Aspects" },
		HTMLclass : getCompletedClass(legal),
		innerHTML : "<p><a href=\"/node/23#overlay-context=node/22\" target=\"_self\">Legal <br>Aspects</a></p><div>" + getCompletedText(legal) + "</div>"
	};

	var grandChild5 =  {
		parent: second_child,
		text: { name: "Content Analysis" },
		HTMLclass : getCompletedClass(analysis),
		innerHTML : "<p><a href=\"/node/25#overlay-context=node/11\" target=\"_self\">Content <br>Analysis</a></p><div>" + getCompletedText(analysis) + "</div>"
	};

	var grandChild6 =  {
		parent: second_child,
		text: { name: "Types of Systems" },
		HTMLclass : getCompletedClass(types),
		innerHTML : "<p><a href=\"/node/26#overlay-context=node/15\" target=\"_self\">Types of <br>Systems</a></p><div>" + getCompletedText(types) + "</div>"
	};
		
	var overview_config = [
		config, 
		parent_node,
		first_child, 
		second_child, 
		grandChild1, 
		/*grandChild2,*/  
		grandChild3, 
		/*grandChild4,*/ 
		grandChild5, 
		grandChild6
	];

	return overview_config;
}

