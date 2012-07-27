Ext.define('Sport.view.TeamDetail', {
	extend: 'Ext.dataview.DataView',
	xtype: 'teamdetail',
	id: 'teamdetail',
	requires: ['Cs.component.PlayerTile'],
	
	config: {
		title: 'Team Detail View',
		itemTpl: '{firstName} {surname}',
		loadingText: 'Getting player details...',
		useComponents: true,
		defaultType: 'playertile',
		cls: 'cs-tilesdataview',
		itemCls: 'cs-imagetile',
		pressedCls: 'cs-tile-pressed',
        selectedCls: 'cs-tile-selected',
        store: Ext.create('Ext.data.Store', {
        	fields: ['player_id', 'firstName', 'surname', 'dob', 'img', 'club_id'],
        	data: []
        })
	},
	//player: Ext.emptyFn(),	
	initalize: function (){
    	this.add(Ext.create('Ext.Button', {
    		text: 'View Map'
    	}));
    }
});