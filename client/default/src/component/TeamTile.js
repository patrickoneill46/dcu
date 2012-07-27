Ext.define('Cs.component.TeamTile', {
	extend: 'Ext.dataview.component.DataItem',
	requires: ['Ext.Button'],
	xtype: 'teamtile',
	
	config:{
		nameButton: true,
		
		dataMap: {
			getNameButton: {
				setText: 'name'
			}
		},
				
	    onNameButtonTap: function(button, e) {
	        var record = this.getRecord();

	        Ext.Msg.alert(
	            record.get('name'), // the title of the alert
	            "Team: " + record.get('name') // the message of the alert
	        );
	    },
	},//config
	
	applyNameButton: function(config) {
	    return Ext.factory(config, Ext.Button, this.getNameButton());
	},
	
	updateNameButton: function(newNameButton, oldNameButton) {
	    if (oldNameButton) {
	        this.remove(oldNameButton);
	    }
	
	    if (newNameButton) {
	        this.add(newNameButton);
	    }
},
});