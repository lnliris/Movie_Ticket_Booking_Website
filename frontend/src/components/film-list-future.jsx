/* eslint-disable no-unused-vars */
import Product from "./product";

function FilmListFuture(prop){

    return(
        <section className="mt-50">
            <div className="center_ul" id="wrap-product-list">
                <h1 style={{"color":"white", "fontSize":"40px"}}>PHIM SẮP CHIẾU</h1>
                <div className="center_ul" id="product-list">
                    <div className="wrap-nodata hide"></div>
                    {prop.data ? prop.data.map((d) => (
                            <Product
                                key={d.id}
                                clickEvent = {()=>{}}
                                orderFilm={()=>{}}
                                id={d.id}
                                img={d.poster_url}
                                type={d.gerne}
                                length={d.duration}
                                name={d.title}
                                futu={true}
                            />
                        )) : ""}
                    </div>
            </div>
        </section>
    )

}

export default FilmListFuture;