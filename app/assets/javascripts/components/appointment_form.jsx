var AppointmentForm = React.createClass({
	render: function() {
		return (
			<div>
				<h2>Make a new appointment</h2>
				<form>
					<input name='title' placeholder='Thing to see, person to do...' />
					<input name='appt_time' place='When???' />
					<input type='submit' value='Make Appointment' />
				</form>
			</div>
		)
	}
});