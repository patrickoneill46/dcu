Ext.define('Sport.model.Club', {
	extend: 'Ext.data.Model',
	
	config:{
		
		fields:[
		        {name: 'club_id', type: 'string'},
		        {name: 'name', type: 'string'},
		        {name: 'short_name', type: 'string'},
		        {name: 'img', type: 'string'},
		        {name: 'longtitude', type: 'number'},
		        {name: 'latitude', type: 'number'},
		        ],
		
		hasMany: {model: 'Sport.model.Team', name: 'teams'},
		
		proxy: {
			//type: 'ajax',
			type: 'rest',
			url: 'data/clubs.json',
			reader: {
				type: 'json',
				rootProperty: 'items'
			}
		}
	}
	
	
});