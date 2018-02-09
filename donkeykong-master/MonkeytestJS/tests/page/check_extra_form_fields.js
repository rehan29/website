registerTest ("Test 2", {
    setup: function() {

        // get form elements
		this.firstname = this.workspace.document.getElementById("firstname");	
		this.surname = this.workspace.document.getElementById("surname");		
		this.email = this.workspace.document.getElementById("email");		
		this.number = this.workspace.document.getElementById("number");		
		this.address = this.workspace.document.getElementById("address");	
		this.suburb = this.workspace.document.getElementById("suburb");
		this.state = this.workspace.document.getElementById("state");
		this.postcode = this.workspace.document.getElementById("postcode");
		this.enquiryType = this.workspace.document.getElementById("enquiryType");
		this.productName = this.workspace.document.getElementById("productName");
		this.productSize = this.workspace.document.getElementById("productSize");
		this.useByDate = this.workspace.document.getElementById("useByDate");	
		this.batchCode = this.workspace.document.getElementById("batchCode");
		this.enquiry = this.workspace.document.getElementById("enquiry");
	
    },
    load:function() {
        var self = this;
    	
        self 
        .test("Does the form submit, if the enquiry type is 'Product complaint' and any of the following fields are empty ?  product name, product size, use-by date or batch code", function(){
           
           // assign data
           self.firstname.value = "Donkey";
           self.surname.value = "Kong";
           self.email.value = "donkey@ko.ng";
           self.number.value = "123456";
           self.address.value = "Castle Road";
           self.suburb.value = "Mario Land";
           self.state.value = "NSW";
           self.postcode.value = "2000";
           self.enquiryType.value = "productComplaint";
           // fire change event
           self.enquiryType.onchange();

           // helper var for submit status
           var didSubmit = false; 
           // listen to submit event and change didSubmit
           $$( this.workspace.document.getElementById("monkeyForm") ).on('submit', function() { 
	  	   		didSubmit = true; 
		        return false; 
		  	}); 

           	// simulate submit by button click
            $$(this.workspace.document.getElementById("submitBtn")).click();

        	// what is the result?
           	ok( !didSubmit, "The form cannot be submitted if the extra required fields are empty." );
           
        })                  
    }
});
