function Student ()
{
    this.name = 'John';
    this.gender = 'Male';
}

var studObj1 = new Student();
studObj1.age = 15;
console.log( studObj1.age )

var studObj2 = new Student();
console.log( studObj2.age );


Student.prototype.age = 75;

var studObj3 = new Student();
console.log( studObj3.age )

var studObj4 = new Student();
console.log( studObj4.age );

var v1 = new Date();
console.log( typeof ( v1 ) )
