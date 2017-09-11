function slow(callback) {
    process.nextTick(function () { for(let i = 0; i<= 5e8; i++){ 
        
    }  console.log("finished")} );
        if (Math.random() > 0.5) {

            return callback("Error", null);
        }

        callback(null, { id: 12345 })
   
}

function exec(fn) {

    var er = "";
    var data = "";

    fn(function (error, obj) {

        er = error;
        data = obj;

    });
    return {


        done: function (f) {
                if (data) {

                    f(data);
                }
            return this;

        },


        fail: function (f) {
                if (er) {

                    f(er);
                }

        }


    }

}



exec(slow).done(function (data) { console.log(data); })
		.fail(function (err) {   console.log("Error " + err); });