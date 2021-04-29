AFRAME.registerComponent('move', {
    schema:{
        ydirection: {type: 'number', default: 1}
    },
    tick : function(){
        this.data.ydirection = this.data.ydirection + 0.01
        var pos = this.el.getAttribute('position')
        pos.y = this.data.ydirection
        this.el.setAttribute('position', {x: pos.x, y: pos.y, z: pos.z})
    }
})

AFRAME.registerComponent('cameraZoomOut', {
    schema:{
        zdirection: {type: 'number', default: 5}
    },
    tick : function(){
        this.data.zdirection = this.data.zdirection + 1
        var pos = this.el.getAttribute('position')
        pos.z = this.data.zdirection
        this.el.setAttribute('position', {x: pos.x, y: pos.y, z: pos.z})
    }
})

AFRAME.registerComponent('fall', {
    schema:{
        y: {type: 'number', default: 0}
    },
    tick: function(){
        window.addEventListener('click', (e) => {
            this.data.y = this.data.y - 0.001
        })

        var pos = this.el.getAttribute('position')
        pos.y = pos.y + this.data.y
        this.el.setAttribute('position', {x: pos.x, y: pos.y, z: pos.z})
    }
})