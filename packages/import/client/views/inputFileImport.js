
Template.inputFileImport.events({

	'change :file': function(e) {
		e.preventDefault();

		var input$ = $(e.target),
			fileObj = e.originalEvent.target.files[0],
			target = $(e.target).data('target');
		
		K.Import.importFile(fileObj, target, function(err, url) {

			if(err)
				input$.next('label').text(err)
			else {
				console.log(url)
			}
		});
	}
});