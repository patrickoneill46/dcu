Ext.define('Sport.view.SplitList',{
	extend: 'Ext.Container',
	xtype: 'splitlist',
	requires: ['Ext.dataview.List', 'Ext.navigation.Bar', 'Ext.Panel'],
	
	config:{
		fullscreen: true,

		layout: {
			type: 'card',
			animation: {
				type: 'slide',
				direction: 'left',
				duration: 250
			},	
		},
		
		items: [{
				xtype: 'panel',
				cls: 'card',
				scrollable: true,
				html: '<h1>This is the panel component</h1>'
			},/**
			{
				xtype: 'list',
				id: 'dockedleftlist',
				docked: 'left',
				width: 250,
				items: [{
					xtype: 'panel',
					html: 'Players',
			}]
		}**/]
	}
});