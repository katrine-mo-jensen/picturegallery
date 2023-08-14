import style  from '../gallery/Gallery.module.scss'
// import img1 from '../../assets/'

export const Gallery = () => {

    const imgArray = [img1, img2, img3, img4, img5, img6, img7, img8,]
    return (
        
        <section className={style.galleryWrapper}>
            <h1>Billed Gallery</h1>
            {imgArray}
        </section>
        
    )
}