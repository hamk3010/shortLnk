import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';

Meteor.startup(() => {
  // code to run on server at startup

  // const petSchema = new SimpleSchema({
  //    name: {
  //        type: String,
  //        min: 1,
  //        max: 5,
  //        optional: true
  //    },
  //    age:{
  //        type: Number,
  //        min: 0
  //    },
  //    contactNumber:{
  //       type: String,
  //       optional: true,
  //       regEx: SimpleSchema.RegEx.Phone
  //    }
  // });
  //
  // petSchema.validate({
  //     age: 21,
  //     contactNumber: '1234'
  //
  // });

  const EmployeeSchema = new SimpleSchema({
      name:{
          type: String,
          min: 1,
          max: 200
      },
      hourlyWage:{
          type: Number,
          min: 0
      },
      email:{
          type: String,
          regEx: SimpleSchema.RegEx.Email

      }
  });

  EmployeeSchema.validate({
     name: "Jacob John",
     hourlyWage: 10,
     email: "Jacob_John@dmail.com"
  });



});
