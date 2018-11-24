AFRAME.registerComponent('error-message', {
    init: function () {
        this.el.addEventListener('click', function(evt) {
        	console.log(this.getAttribute('id'))
        	if (this.getAttribute('id') == 'wrong2-1'){
        		document.getElementById('helper2-1').setAttribute('visible', 'true');

        	}
        	else if (this.getAttribute('id') == 'wrong2-2'){
            document.getElementById('helper2-2').setAttribute('visible', 'true');}

            else if (this.getAttribute('id') == 'wrong1-1'){
            document.getElementById('helper1-1').setAttribute('visible', 'true');}

            else if (this.getAttribute('id') == 'wrong3-1'){
            document.getElementById('helper3-1').setAttribute('visible', 'true');}

            else if (this.getAttribute('id') == 'wrong3-2'){
            document.getElementById('helper3-2').setAttribute('visible', 'true');}

        });
    }
});
