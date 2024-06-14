import timeIMG from "../assets/locationPics/time.jpg";

export default function Hours() {

    return (
        <>
            <section className="locationItem">
                <div>
                    <h3>All Hours</h3>
                    <p>Mon: 11:00am-8:30pm</p>
                    <p>Tues: 11:00am-8:30pm</p>
                    <p>Wed: 11:00am-8:30pm</p>
                    <p>Thurs: 11:00am-8:30pm</p>
                    <p>Fri: 11:00am-8:30pm</p>
                    <p>Sat: 11:00am-8:30pm</p>
                    <p>Sun: 11:00am-8:30pm</p>
                </div>

                <figure>
                    <img src={timeIMG} alt="https://unsplash.com/photos/selective-focus-photo-of-brown-and-blue-hourglass-on-stones-BXOXnQ26B7o"/>
                </figure>

            </section>

        </>
    )
}