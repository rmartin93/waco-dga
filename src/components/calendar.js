function Calendar () {
    return (
        <div className="calendar">
            <iframe 
                src="https://calendar.google.com/calendar/embed?src=ryan%40meraki-digital.com&ctz=America%2FChicago" 
                style={{border: "0"}} 
                width="800" 
                height="600" 
                frameBorder="0" 
                scrolling="no"
                title="Google Calendar">
            </iframe>            
        </div>
    )
}

export default Calendar;