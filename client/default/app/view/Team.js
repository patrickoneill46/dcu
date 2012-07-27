Ext.define('Sport.view.Team', {
	extend: 'Ext.Container',
	xtype: 'teampanel',
	id:'teampanel',
	requires: ['Ext.dataview.List', 'Sport.view.TeamDetail', 'Cs.component.FixtureList', 'Cs.component.LeagueTable'],
	config:{
		layout: {
			type: 'card',
			animation:{
				type: 'slide',
				duration: 250
			}
		},
		
		items: [
	        {
	        	xtype: 'teamdetail'
	        },
	        {
	        	xtype: 'list',
	        	id: 'teamnav',
	        	docked: 'left',
	        	width: 100,
	        	store: Ext.create('Ext.data.Store', {
	        		fields: ['item'],
	        		data: [{
	        			item: 'Players',
	        		},{
	        			item: 'Fixtures',
	        		},{
	        			item: 'League'
	        		},
	        		]
	        	}),
	        	itemTpl: '{item}'
	        }
        ]
	},
	
	initialize: function(){
		console.log(this);
	}
});