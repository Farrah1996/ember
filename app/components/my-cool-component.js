import Component from '@ember/component';

export default Component.extend({
    name: 'Eoin',
    greetingSet: false,
    actions:{
        greetUser: function(name){
            alert("Hello " +name);
            this.setProperties({
                greetingSet:true
            })
        }
    },
    classNames: ['well'],
    classNameBindings:['greetingSet']
});
