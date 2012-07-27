Ext.define('Cs.component.FixtureList', {
	extend : 'Ext.dataview.List',
	xtype: 'fixturelist',
	id: 'fixturelist',
	
	config: {
		
		store: Ext.create('Ext.data.Store', {
			fields: ['home', 'away', 'date', 'ko', 'venue', 'score', 'competition'],
			data: [
		       {home: 'Cork Con', away: 'Dolphin', date: '17/04/2012', ko: '15:00', venue: 'Templehill', score: '-', competition: 'AIL'},

		       ],
		    
		    
		}),
		itemTpl: '<div class="fixture-wrapper">' +
    	'<div class="fixture-teams">{home} <b>Vs</b> {away}</div>' +
    	'<div class=fixure-detail>Venue: {venue}<br />{date} - {ko}</div>' +
    	'</div>',
	}
});