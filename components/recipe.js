import utilStyles from '../styles/utils.module.css'


export default function Recipe({ title, video_id }) {

    const IMG_API_FRONT = 'https://img.youtube.com/vi/'
    const IMG_API_BACK = '/0.jpg'
    const VIDEO_LINK = 'https://www.youtube.com/watch?v='

    return (
        <a href={VIDEO_LINK + video_id}>
            <div className={utilStyles.recipe}>
                <img src={ IMG_API_FRONT + video_id + IMG_API_BACK } alt={title} />
                <div className={utilStyles.recipe_title}>
                    <h5>{title}</h5>
                </div>
            </div>
        </a>
    )
    
}