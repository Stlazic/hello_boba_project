
export default function NewsItem({img, alt, date, title, preview}) {

    return (
        <section className="newsItem">
            <figure>
                <img src={img} alt={alt} />
            </figure>

            <div>
                <h4>{date}</h4>
                <div>
                    <h2>{title}</h2>
                    <p>{preview}</p>
                </div>
                <a href="#">Read More</a>
            </div>
        </section>
    )

}