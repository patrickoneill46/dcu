Ext.define('Cs.component.LeagueTable', {
	extend: 'Ext.Panel',

	config: {
		html: '<table class="grid" cellspacing="0" cellpadding="0" style=""><tbody>' +
			'<tr><th>Team</th><th>Played</th><th>W</th><th>D</th><th>L</th><th>BP</th><th>Pts</th></tr>' +
			'<tr><td>St Mary\'s College</td><td>17</td><td>14</td><td>0</td><td>3</td></tr>' +
			'</tbody></table>'
	}
});