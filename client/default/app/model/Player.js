Ext.define('Sport.model.Player', {
	extend: 'Ext.data.Model',
	
	config:{
		fields:[
		        {name: 'player_id', type: 'string'},
		        {name: 'firstName', type: 'string'},
		        {name: 'surname', type: 'string'},
		        {name: 'dob', type: 'string'},
		        {name: 'img', type: 'string'},
		        {name: 'club_id', type: 'string'}
		        ],
        
        /**
        proxy: {
			type: 'ajax',
			url: 'data/players.json',
			reader: {
				type: 'json',
				rootProperty: 'items'
			}
		},
		**/
		
	    belongsTo: 'Team'	
	}

});