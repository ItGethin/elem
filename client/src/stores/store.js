import Evnets from "events";

var Todostore = Object.assign({}, Evnets.prototype, {
	allss:[],
	add(text){
		this.todos.push(text);
	},
	remove(index){
		this.todos.splice(index,1);
	},
	all(text){
		this.allss.push(text);
	},
    alls(){
        return this.allss;
    },
	addChangeListener(callback){
		this.on('change', callback);
	},
	emitChange(){
		this.emit('change');
	}
})

export default Todostore;