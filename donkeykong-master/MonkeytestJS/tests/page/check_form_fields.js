registerTest ("Test 1", function () {
   	
	this
	.test("Does the form submit if any of the required fields are empty?", function(){
			
	   // helper var for submit status
       var didSubmit = false; 
       // listen to submit event and change didSubmit
       $$( this.workspace.document.getElementById("monkeyForm") ).on("submit", function() { 
  	   		didSubmit = true; 
	        return false; 
	  	}); 

       	// simulate submit by button click
        $$(this.workspace.document.getElementById("submitBtn")).click();

    	// what is the result?
       	ok( !didSubmit, "The form cannot be submitted if the any required fields are empty." );
		
	})

});

