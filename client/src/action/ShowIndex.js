import Showall from "../dispatcher/Showall";
import axios from "axios";

var ShowsAction = {
    ShowItems(text){
        axios.get("http://localhost:3010/api/products")
        .then(function(res){
            // console.log(res.data.result);
            var text=JSON.stringify(res.data.result);
            Showall.dispatch({
			actionType:"ALL",
			text:text
		    })
        }).catch(function(err){
            console.log("err");
        })
	}

};

export default ShowsAction;