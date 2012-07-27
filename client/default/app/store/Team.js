Ext.define("Sport.store.Team", {
	extend: "Ext.data.Store",
	
	config: {
		model: "Sport.model.Team",
		autoload: true,
	}
});