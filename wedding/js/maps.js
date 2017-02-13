// Gmap functions
var mapMichaels = null;
var mapFloyds = null;
var mapChurch = null;
var mapSchool = null
var geocoder = null;

function load() {
	if (GBrowserIsCompatible()) {
		geocoder = new GClientGeocoder();
		mapMichaels = new GMap2(document.getElementById("mapToMichaels"));
		showAddress(
			"742 South West Vista Ave. Portland OR 97205",
			"Michael&#8216;s Place<br /><a href=\"http://maps.google.com/maps?f=q&hl=en&q=742+South+West+Vista+Ave,+Portland,+OR+97205&sll=45.570794,-122.656152&sspn=0.00685,0.017853&ie=UTF8&ll=45.523608,-122.698252&spn=0.006855,0.017853&z=16&om=1\" target=\"_blank\">742 South West Vista Ave. Portland OR 97205</a>",
			mapMichaels);
		mapFloyds = new GMap2(document.getElementById("mapToFloyds"));
		showAddress(
			"4339 S.E. Salmon St Portland OR 97215",
			'The Floyd&#8216;s<br /><a href="http://maps.google.com/maps?f=q&hl=en&q=4339+S.E.+Salmon+St+Portland+OR+97215&sll=45.568571,-122.655401&sspn=0.014,0.033388&ie=UTF8&ll=45.515098,-122.617786&spn=0.007007,0.016694&z=16&iwloc=addr&om=1" target="_blank">4339 S.E. Salmon St Portland OR 97215</a>',
			mapFloyds);
		mapChurch = new GMap2(document.getElementById("mapToChurch"));
		showAddress(
			"1112 S.E. 41st Ave. Portland, OR 97214",
			'St. Stephen‘s Catholic Church<br /><a href="http://maps.google.com/maps?f=q&hl=en&q=1112+S.E.+41st+Ave+Portland,+OR+97214&sll=45.565055,-122.630661&sspn=0.006715,0.013282&ie=UTF8&ll=45.515865,-122.620168&spn=0.006721,0.013282&z=16&iwloc=addr&om=1" target="_blank">1112 S.E. 41st Ave. Portland, OR 97214</a>',
			mapChurch);
		mapSchool = new GMap2(document.getElementById("mapToSchool"));
		if (!mapSchool) {alert("no school");}
		showAddress(
			"5736 N.E. 33rd Ave. Portland, OR 97211",
			'The Kennedy School<br /><a href="http://maps.google.com/maps?f=q&hl=en&q=5736+N.E.+33rd+Ave.+Portland,+OR+97214&sll=45.515234,-122.619481&sspn=0.006721,0.013282&ie=UTF8&ll=45.518136,-122.630939&spn=0.013441,0.026565&z=15&iwloc=cent&om=1" target="_blank">5736 N.E. 33rd Ave. Portland, OR 97211</a>',
			mapSchool);
	}
}

function showAddress(address,html,map) {
	if (geocoder) {
		geocoder.getLatLng(
			address,
			function(point) {
				if (!point) {
					alert(address + " not found");
				} else {
					map.setCenter(point, 13);
					var marker = new GMarker(point);
					map.addOverlay(marker);
					map.addControl(new GSmallMapControl());
					marker.openInfoWindowHtml(html);
				}
			}
		);
	}
}

window.onload = load;