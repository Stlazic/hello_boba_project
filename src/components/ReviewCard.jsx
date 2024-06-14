
export default function ReviewCard({username, stars, review}) {

    return(
        <section className="reviewCard">
            <h2>{stars}</h2>
            <h3>
                <i class="fa-solid fa-user"></i>
                
                {username}
            </h3>
            <p>{review}</p>
        </section>
    )
}