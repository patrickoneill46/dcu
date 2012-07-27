Ext.define('Sport.controller.Main', {
    extend: 'Ext.app.Controller',
    
    requires: ['Ext.data.Store'],
    
    config: {
    	
        views: [],
        models: ['Club', 'Team', 'Player'],      
        refs: {
            viewport: '#viewport',
            teamnav: '#teamnav',           
        },
        
        control: {         	
    		'clubtiles' :{
    			itemtap: 'showDetail'
    		},
    		'clubdetail': {
    			//itemtap: 'showTeam'
				itemtap: 'showTeam1'
    		},
    		teamnav:{
    			itemtap: 'changeAspect'
    		}
    	} 	
        
    },
    
    changeAspect: function (list, index, target, record, e, options){
    	//Ext.Msg.alert(record.data.item + ' tapped');
    	//console.log(record);
    	Ext.getCmp('teampanel').setActiveItem(index);
    },
    
    showTeam1: function(list,index,target,record){
    	view = Ext.create('Sport.view.Team');
    	
    	players = Ext.create('Sport.view.TeamDetail');
    	players.getStore().setData(record.data.players);
    	fixtures = Ext.create('Cs.component.FixtureList');
    	table = Ext.create('Cs.component.LeagueTable');
    	
    	view.add([players, fixtures, table]);
    	this.getViewport().push(view);
    },
    
    showTeam: function (list, index, target, record){
    	  	
    	this.getViewport().push({
    		xtype: 'teampanel',
    		title: record.data.name,
    		
    		items: [{
    			xtype: 'teamdetail',
    			itemTpl: '{firstName} {surname}',
        		store: Ext.create('Ext.data.Store', {
        			
        			fields: ['player_id', 'firstName', 'surname', 'dob', 'img', 'club_id'],
        			data: record.data.players,   			
        		})
    		},
    		{
    			xtype: 'list',
    			id: 'teamnav',
	        	docked: 'left',
	        	width: 250,
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
    		}]
    	});

    },
    
    showTeamAspect: function (){
    	
    },
    
    showDetail: function(list, index, target, record) {
  
    	this.getViewport().push({
    		    	    		
    		xtype: 'clubdetail',
    		//title: record.data.name,
    		//useComponents: true,
    		//defaultType: 'teamtile',
    		store: Ext.create('Ext.data.Store', {
    			fields: ['team_id', 'club_id', 'name', 'img', 'players'],
    			data: record.data.teams,
    			//useComponents: true,
    			//defaultType: '',
    		})
    	});
    },
    
    init: function (){
    	var store = Ext.StoreMgr.get('Club');
    	store.load({
    		callback: function(){
    			var club = store.first();
    			console.log('Club: ' + club.get('name') );
    			club.teams().each(function(team){
    				console.log('Team: ' + team.get('name'));
    				console.log('----------------');
					console.log('Players:');
    				team.players().each(function(player){
    					console.log(player.get('firstName')+ ' ' + player.get('surname'));
    				});
    			});
    		}
    	});
    },
    
    onLeafItemTap: function(cmp, dataview, index) {
    	console.log('leafitemtap');
        var self = this;
        var store = dataview.getStore();
        var record = store.getAt(index);
        
        Ext.Msg.alert(record.get('text'), 
                      record.get('description'), 
                      Ext.emptyFn);
        
        //console.log('Current data record:', record);
    }
});

