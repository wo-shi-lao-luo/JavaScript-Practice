// Blocking IO stimulate

function b_io() {
	console.log("b_io stimulation start");
	var start = new Date().getTime();
	while (new Date().getTime() < start + 3000);
	console.log("b_io stimulation success");
}


b_io();

function nb_io(done) {
	console.log("nb_io stimulation task1 start");
	setTimeout(() => {done();} , 3000);
}

nb_io(function(){
	console.log("nb_io stimulation task1 done");
})
console.log("nb_io stimulation task2 start");
console.log("nb_io stimulation task2 done");

