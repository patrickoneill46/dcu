Ext.define('Sport.model.Team', {
	extend: 'Ext.data.Model',
	
	config: {
		fields:[
	        {name: 'team_id', type: 'string'},
	        {name: 'club_id', type: 'string'},
	        {name: 'name', type: 'string'},
	        {name: 'img', type: 'string'},
	        //{name: 'items', type: 'auto'}
        ],
        
        /**
        proxy: {
			type: 'ajax',
			url: 'data/teams.json',
			reader: {
				type: 'json',
				rootProperty: 'items'
			}
		},**/
        
		belongsTo: 'Club',
        //belongsTo: 'Sport.model.Club',
		        
		hasMany: {model: 'Sport.model.Player', name: 'players'}
		
	}	
	
});