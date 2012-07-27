Ext.define("Sport.store.Club", {
	//extend: "Ext.data.TreeStore",
	extend: "Ext.data.Store",
	
	config: {
		model: "Sport.model.Club",
		autoload: true,
		/**
		proxy: {
			type: 'ajax',
			url: 'data/clubs.json',
			reader: {
				type: 'json',
				rootProperty: 'items'
			}
		}
		**/
	}
});