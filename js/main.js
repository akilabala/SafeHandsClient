/**
 * Created by abalasubramanian on 3/8/15.
 */

var app = app || {};

$('#requestForm').submit(function() {
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var phone = $('#phone').val();
    var emailId = $('#email').val();
    var specialty = $('#specialty').val();
    var appointmentDate = $('#date').val();
    var appointmentTime = $('#time').val();

    var appointment = new app.Appointment({
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        emailId: emailId,
        specialty: specialty,
        appointmentDate: appointmentDate,
        appointmentTime: appointmentTime
    });
    appointment.save({
        success: function() {
            alert("Your appointment has been scheduled successfully. " +
            "We will contact you 24 hours prior to the actual appointment as a courtesy reminder." +
            "In the meantime, please call us at 800-123-1243 to cancel or re-schedule.");
        }
    });

    //var appoint = new app.AppointmentList();
    //appoint.fetch({
    //    data: appointment,
    //    type: 'POST'
    //});
    //    success: function() {
    //    // fetch successfully completed
    //    console.log("Success");
    //    },
    //error: function() {
    //    console.log('Failed to fetch!');
    //}
    //});
    //console.log(appoint);
});
