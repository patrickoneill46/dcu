Ext.Loader.setPath({
    'Sport': 'app',
    'Cs': 'src'
});

Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'Sport',
    
    views: ['Viewport'],
    
    models: ['Catalog', 'Club', 'Player', 'Team'],
    
    stores: ['Catalog', 'Club'],
	
    controllers : ['Main'],
    
    viewport: {
        autoMaximize: true
    },
	
    launch: function(){
    	console.log('Launching DCU clubs app');
        Ext.create('Sport.view.Viewport');
    }
});
