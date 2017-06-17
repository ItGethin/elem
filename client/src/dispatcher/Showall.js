import { Dispatcher } from "flux";

import Todostore from "../stores/store.js";


var Showall=new Dispatcher();


Showall.register(function(action) {
	switch(action.actionType){
		case "ALL":
			Todostore.all(action.text);
			Todostore.emitChange();
		break;
		default:
		break;
	}
})




export default Showall;